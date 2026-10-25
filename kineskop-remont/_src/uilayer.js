// Эфирный слой. Всё, что видно на странице (текст, плашки, рамки, значки),
// рисуется в холст, а холст уходит в плёнку текстурой: надписи светятся,
// гнутся линзой кинескопа и ловят зерно вместе с 3D, как интерфейс у shader.se.
// DOM остаётся на месте: по нему раскладка, ссылки, кнопки, фокус и чтение
// с экрана. В режиме gl-ui он прозрачный (стили в site.css).
//
// Раскладку не считаем сами: берём прямоугольники слов у браузера (Range),
// стили — снимком при пересборке, а каждый кадр читаем только положение
// элементов и их прозрачность.

const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'OPTION', 'HEAD', 'BR']);
const FORM = new Set(['INPUT', 'SELECT', 'TEXTAREA']);

function parseColor(s) {
  if (!s || s === 'transparent') return null;
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return s;
  const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
  if (p.length > 3 && p[3] === 0) return null;
  return s;
}

// верхний уровень запятых: "linear-gradient(90deg, rgba(1,2,3,.5) 0%, ...)"
function splitTop(s) {
  const out = []; let depth = 0, cur = '';
  for (const ch of s) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

function parseGradient(bg) {
  if (!bg || bg === 'none') return null;
  const m = bg.match(/^(linear|radial)-gradient\((.*)\)$/s);
  if (!m) return null;
  const parts = splitTop(m[2]);
  const g = { kind: m[1], angle: 180, stops: [], rx: 0.5, ry: 0.5, cx: 0.5, cy: 0.5 };
  if (m[1] === 'linear') {
    const a = parts[0];
    if (/deg$/.test(a)) { g.angle = parseFloat(a); parts.shift(); }
    else if (/^to /.test(a)) {
      const map = { 'to top': 0, 'to right': 90, 'to bottom': 180, 'to left': 270 };
      g.angle = map[a] ?? 180; parts.shift();
    }
  } else if (!/^(rgb|#|transparent)/.test(parts[0])) {
    // «120% 90% at 50% 50%» или «circle at …»
    const shape = parts.shift();
    const sz = shape.split(' at ')[0].trim().split(/\s+/).map(v => parseFloat(v) / 100);
    if (sz.length === 2 && !isNaN(sz[0])) { g.rx = sz[0] / 2; g.ry = sz[1] / 2; }
    const at = shape.split(' at ')[1];
    if (at) { const c = at.trim().split(/\s+/).map(v => parseFloat(v) / 100); if (!isNaN(c[0])) { g.cx = c[0]; g.cy = c[1] ?? 0.5; } }
  }
  const n = parts.length;
  parts.forEach((p, i) => {
    const mm = p.match(/^(rgba?\([^)]*\)|#[0-9a-f]+|transparent|[a-z]+)\s*([\d.]+%)?/i);
    if (!mm) return;
    const pos = mm[2] ? parseFloat(mm[2]) / 100 : (n > 1 ? i / (n - 1) : 0);
    g.stops.push([Math.min(1, Math.max(0, pos)), mm[1] === 'transparent' ? 'rgba(0,0,0,0)' : mm[1]]);
  });
  return g.stops.length ? g : null;
}

function px(v) { const f = parseFloat(v); return isNaN(f) ? 0 : f; }

function roundPath(ctx, x, y, w, h, r) {
  const [tl, tr, br, bl] = r.map(v => Math.min(v, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y); ctx.arcTo(x + w, y, x + w, y + tr, tr);
  ctx.lineTo(x + w, y + h - br); ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
  ctx.lineTo(x + bl, y + h); ctx.arcTo(x, y + h, x, y + h - bl, bl);
  ctx.lineTo(x, y + tl); ctx.arcTo(x, y, x + tl, y, tl);
  ctx.closePath();
}

export function createUiLayer({ scale = 1, html = document.documentElement } = {}) {
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = 2; return { c, ctx: c.getContext('2d') }; };
  const layers = { screen: mk(), paper: mk() };
  const hasLS = 'letterSpacing' in CanvasRenderingContext2D.prototype;
  const metrics = new Map();
  let items = [];
  let dirty = true, dirtyAt = 0, lastBuild = -1e9;
  let W = 0, H = 0, S = scale;
  let version = 0;

  function setSize(w, h, s = S) {
    W = w; H = h; S = s;
    for (const k in layers) { layers[k].c.width = Math.max(2, Math.round(w * s)); layers[k].c.height = Math.max(2, Math.round(h * s)); }
    dirty = true;
  }

  function markDirty(later = 0) {
    if (later) { const t = performance.now() + later; dirtyAt = dirtyAt ? Math.min(dirtyAt, t) : t; } else dirty = true;
  }

  // поменялся только текст внутри элемента (часы телетекста, номер канала) —
  // перемеряем его строки, а не весь слой: полная пересборка раз в секунду дёргала кадр
  const textOnly = new Set();
  const mo = new MutationObserver(list => {
    let full = false;
    for (const m of list) {
      const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
      if (t && t.closest && t.closest('[data-gl="off"]')) continue;
      const onlyText = m.type === 'characterData' || (m.type === 'childList' && [...m.addedNodes, ...m.removedNodes].every(n => n.nodeType === 3));
      if (onlyText && t) textOnly.add(t);
      else full = true;
    }
    if (full) { textOnly.clear(); markDirty(); markDirty(420); }
  });
  mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['class', 'hidden', 'aria-selected', 'aria-expanded'] });
  html.classList && mo.observe(html, { attributes: true, attributeFilter: ['class'] });
  const hover = e => { if (e.target.closest && e.target.closest('a,button,label,input,select')) { markDirty(); markDirty(260); } };
  document.addEventListener('pointerover', hover, true);
  document.addEventListener('pointerout', hover, true);
  document.addEventListener('focusin', () => { markDirty(); markDirty(260); }, true);
  document.addEventListener('input', () => markDirty(), true);
  document.fonts && document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', () => markDirty());

  function fontMetrics(font) {
    let m = metrics.get(font);
    if (!m) {
      const ctx = layers.screen.ctx;
      ctx.font = font;
      const t = ctx.measureText('Hgйщ');
      m = { asc: t.fontBoundingBoxAscent ?? t.actualBoundingBoxAscent, desc: t.fontBoundingBoxDescent ?? t.actualBoundingBoxDescent };
      metrics.set(font, m);
    }
    return m;
  }

  // ---------- сборка списка ----------
  function clipOf(el) {
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.overflow !== 'visible' && cs.overflow !== '') return n;
    }
    return null;
  }

  function chainOf(el) {
    const c = [];
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) c.push(getComputedStyle(n));
    return c;
  }

  function boxStyle(cs, el, pseudo) {
    const bg = parseColor(cs.backgroundColor);
    const grad = parseGradient(cs.backgroundImage);
    const bw = [px(cs.borderTopWidth), px(cs.borderRightWidth), px(cs.borderBottomWidth), px(cs.borderLeftWidth)];
    const bstyle = [cs.borderTopStyle, cs.borderRightStyle, cs.borderBottomStyle, cs.borderLeftStyle];
    const bc = [cs.borderTopColor, cs.borderRightColor, cs.borderBottomColor, cs.borderLeftColor].map(parseColor);
    const hasBorder = bw.some((w, i) => w > 0 && bstyle[i] !== 'none' && bstyle[i] !== 'hidden' && bc[i]);
    if (!bg && !grad && !hasBorder) return null;
    const r = [cs.borderTopLeftRadius, cs.borderTopRightRadius, cs.borderBottomRightRadius, cs.borderBottomLeftRadius].map(px);
    return { bg, grad, bw, bstyle, bc, hasBorder, r, pseudo };
  }

  function textItem(node, el, cs, layer, clip, chain) {
    const s = node.data;
    if (!/\S/.test(s)) return null;
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const fm = fontMetrics(font);
    const base = el.getBoundingClientRect();
    const range = document.createRange();
    const re = /\S+/g;
    const lines = [];
    let line = null, m;
    const tt = cs.textTransform;
    const tf = t => tt === 'uppercase' ? t.toUpperCase() : tt === 'lowercase' ? t.toLowerCase() : t;
    while ((m = re.exec(s))) {
      range.setStart(node, m.index); range.setEnd(node, m.index + m[0].length);
      const rs = range.getClientRects();
      if (!rs.length) continue;
      if (rs.length > 1) {
        // слово разорвано переносом: по буквам
        for (let i = 0; i < m[0].length; i++) {
          range.setStart(node, m.index + i); range.setEnd(node, m.index + i + 1);
          const r = range.getClientRects()[0];
          if (!r) continue;
          if (!line || Math.abs(r.top - line.top) > 2) { line = { top: r.top, h: r.height, x: r.left, from: m.index + i, to: m.index + i + 1 }; lines.push(line); }
          else line.to = m.index + i + 1;
        }
        continue;
      }
      const r = rs[0];
      if (r.width === 0) continue;
      if (!line || Math.abs(r.top - line.top) > 2) { line = { top: r.top, h: r.height, x: r.left, from: m.index, to: m.index + m[0].length }; lines.push(line); }
      else line.to = m.index + m[0].length;
    }
    if (!lines.length) return null;
    const frags = lines.map(l => ({
      t: tf(s.slice(l.from, l.to).replace(/[\s ]+/g, ' ')),
      dx: l.x - base.left,
      dy: l.top - base.top + (l.h - (fm.asc + fm.desc)) / 2 + fm.asc,
    }));
    const deco = cs.textDecorationLine && cs.textDecorationLine.includes('underline') ? {
      color: parseColor(cs.textDecorationColor) || cs.color,
      th: Math.max(1, px(cs.textDecorationThickness) || 1),
      off: px(cs.textUnderlineOffset) || 2,
    } : null;
    const ls = cs.letterSpacing === 'normal' ? 0 : px(cs.letterSpacing);
    return { type: 'text', el, layer, clip, chain, font, color: cs.color, ls, deco, frags, w0: base.width, h0: base.height, fm };
  }

  const svgCache = new WeakMap();
  function svgImage(el, cs) {
    const color = cs.color;
    const key = color + el.innerHTML.length;
    const hit = svgCache.get(el);
    if (hit && hit.key === key) return hit.img;
    const r = el.getBoundingClientRect();
    const clone = el.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', Math.max(1, Math.round(r.width * 2)));
    clone.setAttribute('height', Math.max(1, Math.round(r.height * 2)));
    clone.removeAttribute('class');
    const src = new XMLSerializer().serializeToString(clone).replace(/currentColor/g, color);
    const img = new Image();
    img.onload = () => markDirty();
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(src);
    svgCache.set(el, { key, img });
    return img;
  }

  function build() {
    // снимок стилей без прозрачности gl-ui: цвета и плашки как задумано в CSS.
    // Переходы на время снимка выключены (gl-snap), иначе снятие и возврат
    // класса запускают их, и кнопки мигают фоном
    const had = html.classList.contains('gl-ui');
    html.classList.add('gl-snap');
    void html.offsetHeight;
    if (had) html.classList.remove('gl-ui');
    const out = [];
    const front = [];   // закреплённое поверх страницы (шапка) рисуем последним
    const walk = (el, layer, fixed) => {
      if (SKIP.has(el.tagName) || el.id === 'gl' || el.dataset.gl === 'off') return;
      const cs = getComputedStyle(el);
      if (cs.display === 'none') return;
      const ly = el.dataset.layer || layer;
      const fx = fixed || cs.position === 'fixed';
      const out = fx ? front : outMain;
      const visible = cs.visibility !== 'hidden';
      let clip = null, chain = null;
      const lazy = () => { if (!chain) { chain = chainOf(el); clip = clipOf(el); } };
      if (visible) {
        // подложка ::before на весь блок (затемнения под текстом, виньетки)
        const pb = getComputedStyle(el, '::before');
        if (el.dataset.glBg !== 'off' && pb.content && pb.content !== 'none' && pb.position === 'absolute' && px(pb.top) <= 0 && px(pb.left) <= 0) {
          const b = boxStyle(pb, el, true);
          if (b) { lazy(); out.push({ type: 'box', el, layer: ly, clip, chain, ...b, pcs: pb, inset: [px(pb.top), px(pb.right), px(pb.bottom), px(pb.left)] }); }
        }
        const b = el.dataset.glBg === 'off' ? null : boxStyle(cs, el, false);
        if (b) { lazy(); out.push({ type: 'box', el, layer: ly, clip, chain, ...b }); }
        if (el.tagName === 'svg') { lazy(); out.push({ type: 'img', el, layer: ly, clip, chain, img: svgImage(el, cs) }); return; }
        if (el.tagName === 'IMG' || el.tagName === 'CANVAS') { lazy(); out.push({ type: 'img', el, layer: ly, clip, chain, img: el }); return; }
        if (FORM.has(el.tagName)) {
          lazy();
          const ph = getComputedStyle(el, '::placeholder');
          out.push({ type: 'field', el, layer: ly, clip, chain, font: `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`,
            color: cs.color, phColor: ph.color || cs.color, pl: px(cs.paddingLeft), pr: px(cs.paddingRight), fm: fontMetrics(`${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`) });
          return;
        }
      }
      for (const ch of el.childNodes) {
        if (ch.nodeType === 3 && visible) {
          lazy();
          const t = textItem(ch, el, cs, ly, clip, chain);
          if (t) out.push(t);
        } else if (ch.nodeType === 1) walk(ch, ly, fx);
      }
    };
    const outMain = out;
    walk(document.body, 'screen', false);
    for (const it of front) it.front = true;
    out.push(...front);
    if (had) html.classList.add('gl-ui');
    void html.offsetHeight;
    html.classList.remove('gl-snap');
    mo.takeRecords();
    items = out;
    dirty = false;
    lastBuild = performance.now();
    version++;
  }

  function patchText() {
    // классы не трогаем: цвет, шрифт и разрядка от gl-ui не зависят, подчёркивание берём у старой строки
    for (const el of textOnly) {
      const idx = items.findIndex(it => it.type === 'text' && it.el === el);
      const old = items.filter(it => it.type === 'text' && it.el === el);
      if (!old.length && idx < 0) { textOnly.clear(); markDirty(); break; }
      const base = old[0];
      const cs = getComputedStyle(el);
      const fresh = [];
      for (const ch of el.childNodes) {
        if (ch.nodeType !== 3) continue;
        const t = textItem(ch, el, cs, base.layer, base.clip, base.chain);
        if (t) { t.deco = base.deco; fresh.push(t); }
      }
      const rest = items.filter(it => !(it.type === 'text' && it.el === el));
      const at = Math.min(idx, rest.length);
      items = rest.slice(0, at).concat(fresh, rest.slice(at));
    }
    textOnly.clear();
  }

  // ---------- кадр ----------
  function opacity(chain, cache) {
    let o = 1;
    for (const cs of chain) {
      let v = cache.get(cs);
      if (v === undefined) { v = +cs.opacity; cache.set(cs, v); }
      o *= v;
      if (o <= 0.003) return 0;
    }
    return o;
  }

  function fillBox(ctx, it, x, y, w, h) {
    if (it.bg || it.grad) {
      roundPath(ctx, x, y, w, h, it.r);
      if (it.bg) { ctx.fillStyle = it.bg; ctx.fill(); }
      if (it.grad) {
        const g = it.grad;
        let gr;
        if (g.kind === 'linear') {
          const a = (g.angle - 90) * Math.PI / 180;
          const cx = x + w / 2, cy = y + h / 2;
          const L = Math.abs(w * Math.cos(a)) + Math.abs(h * Math.sin(a));
          gr = ctx.createLinearGradient(cx - Math.cos(a) * L / 2, cy - Math.sin(a) * L / 2, cx + Math.cos(a) * L / 2, cy + Math.sin(a) * L / 2);
          for (const [p, c] of g.stops) gr.addColorStop(p, c);
          ctx.fillStyle = gr; ctx.fill();
        } else {
          ctx.save();
          ctx.translate(x + w * g.cx, y + h * g.cy);
          ctx.scale(w * g.rx, h * g.ry);
          gr = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
          for (const [p, c] of g.stops) gr.addColorStop(p, c);
          ctx.fillStyle = gr;
          ctx.fillRect(-1 / g.rx * g.cx - 1, -1 / g.ry * g.cy - 1, 1 / g.rx + 2, 1 / g.ry + 2);
          ctx.restore();
        }
      }
    }
    if (it.hasBorder) {
      const bw = it.bw;
      const same = bw.every(v => v === bw[0]) && it.bc.every(c => c === it.bc[0]) && it.bstyle.every(s => s === it.bstyle[0]);
      // точки — круглыми концами: штрих почти нулевой, шаг в две толщины
      const dash = (st, w) => st === 'dashed' ? [Math.max(4, w * 4), Math.max(3, w * 3)] : st === 'dotted' ? [0.01, w * 2.2] : [];
      if (same) {
        ctx.lineWidth = bw[0];
        ctx.strokeStyle = it.bc[0];
        ctx.setLineDash(dash(it.bstyle[0], bw[0]));
        ctx.lineCap = it.bstyle[0] === 'dotted' ? 'round' : 'butt';
        roundPath(ctx, x + bw[0] / 2, y + bw[0] / 2, w - bw[0], h - bw[0], it.r.map(v => Math.max(0, v - bw[0] / 2)));
        ctx.stroke();
        ctx.setLineDash([]); ctx.lineCap = 'butt';
      } else {
        const seg = [[x, y + bw[0] / 2, x + w, y + bw[0] / 2], [x + w - bw[1] / 2, y, x + w - bw[1] / 2, y + h], [x, y + h - bw[2] / 2, x + w, y + h - bw[2] / 2], [x + bw[3] / 2, y, x + bw[3] / 2, y + h]];
        for (let i = 0; i < 4; i++) {
          if (!(bw[i] > 0) || !it.bc[i] || it.bstyle[i] === 'none') continue;
          ctx.lineWidth = bw[i]; ctx.strokeStyle = it.bc[i]; ctx.setLineDash(dash(it.bstyle[i], bw[i]));
          ctx.lineCap = it.bstyle[i] === 'dotted' ? 'round' : 'butt';
          ctx.beginPath(); ctx.moveTo(seg[i][0], seg[i][1]); ctx.lineTo(seg[i][2], seg[i][3]); ctx.stroke();
        }
        ctx.setLineDash([]); ctx.lineCap = 'butt';
      }
    }
  }

  function drawText(ctx, it, bx, by) {
    ctx.font = it.font;
    ctx.fillStyle = it.color;
    if (hasLS) ctx.letterSpacing = it.ls ? it.ls + 'px' : '0px';
    for (const f of it.frags) {
      const x = bx + f.dx, y = by + f.dy;
      if (y < -60 || y - it.fm.asc > H + 60) continue;
      if (!it.ls || hasLS) ctx.fillText(f.t, x, y);
      else { let cx = x; for (const ch of f.t) { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + it.ls; } }
      if (it.deco) {
        const w = ctx.measureText(f.t).width;
        ctx.fillStyle = it.deco.color;
        ctx.fillRect(x, y + it.deco.off, w, it.deco.th);
        ctx.fillStyle = it.color;
      }
    }
  }

  // возвращает, изменились ли холсты
  function draw(force = false) {
    const now = performance.now();
    if (dirtyAt && now >= dirtyAt) { dirty = true; dirtyAt = 0; }
    if (dirty && now - lastBuild > 120) build();
    else if (textOnly.size && !dirty) patchText();
    else if (dirty && !force) {/* пересоберём чуть позже, пока рисуем старое */}
    const opCache = new Map();
    const rects = new Map();
    const rect = el => { let r = rects.get(el); if (!r) { r = el.getBoundingClientRect(); rects.set(el, r); } return r; };
    for (const k in layers) {
      const { ctx, c } = layers[k];
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.setTransform(S, 0, 0, S, 0, 0);
      ctx.textBaseline = 'alphabetic';
    }
    // в шапке страница не видна: всё, что уехало под неё, стираем с мягким краем,
    // иначе текст разделов просвечивает сквозь меню (у DOM-шапки был фон)
    let masked = false;
    const maskHead = () => {
      masked = true;
      const top = html.querySelector('.top');
      if (!top) return;
      const hb = top.getBoundingClientRect().bottom;
      if (hb <= 0) return;
      for (const k in layers) {
        const { ctx } = layers[k];
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'destination-out';
        const g = ctx.createLinearGradient(0, 0, 0, hb + 28);
        g.addColorStop(0, 'rgba(0,0,0,1)');
        g.addColorStop(Math.max(0, (hb - 6) / (hb + 28)), 'rgba(0,0,0,1)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, hb + 28);
        ctx.restore();
      }
    };
    for (const it of items) {
      if (it.front && !masked) maskHead();
      const r = rect(it.el);
      if (r.bottom < -40 || r.top > H + 40 || r.right < -40 || r.left > W + 40) continue;
      const vis = it.chain[0].visibility;
      if (vis === 'hidden') continue;
      let o = opacity(it.chain, opCache);
      if (it.pcs) o *= +it.pcs.opacity;
      if (o <= 0.003) continue;
      if (it.type === 'text' && (Math.abs(r.width - it.w0) > 1.5 || Math.abs(r.height - it.h0) > 1.5)) markDirty();
      const ctx = layers[it.layer].ctx;
      ctx.globalAlpha = o;
      let clipped = false;
      if (it.clip) {
        const cr = rect(it.clip);
        if (r.bottom < cr.top || r.top > cr.bottom) continue;
        ctx.save(); clipped = true;
        ctx.beginPath(); ctx.rect(cr.left, cr.top, cr.width, cr.height); ctx.clip();
      }
      if (it.type === 'box') {
        const ins = it.inset || [0, 0, 0, 0];
        fillBox(ctx, it, r.left + ins[3], r.top + ins[0], r.width - ins[1] - ins[3], r.height - ins[0] - ins[2]);
      } else if (it.type === 'text') {
        drawText(ctx, it, r.left, r.top);
      } else if (it.type === 'field') {
        const e = it.el;
        const isSel = e.tagName === 'SELECT';
        const val = isSel ? (e.options[e.selectedIndex] || {}).text || '' : e.value;
        const txt = val || e.placeholder || '';
        if (txt) {
          ctx.font = it.font;
          if (hasLS) ctx.letterSpacing = '0px';
          ctx.fillStyle = val ? it.color : it.phColor;
          const y = r.top + r.height / 2 + (it.fm.asc - it.fm.desc) / 2;
          ctx.fillText(e.type === 'password' ? '•'.repeat(val.length) : txt, r.left + it.pl, y);
        }
        if (isSel) {
          ctx.strokeStyle = it.color; ctx.lineWidth = 1.5;
          const cx = r.right - Math.max(16, it.pr), cy = r.top + r.height / 2;
          ctx.beginPath(); ctx.moveTo(cx - 5, cy - 2.5); ctx.lineTo(cx, cy + 2.5); ctx.lineTo(cx + 5, cy - 2.5); ctx.stroke();
        }
      } else if (it.type === 'img') {
        const img = it.img;
        if ((img.complete !== false) && (img.naturalWidth || img.width)) {
          try { ctx.drawImage(img, r.left, r.top, r.width, r.height); } catch { /* картинка ещё не готова */ }
        }
      }
      if (clipped) ctx.restore();
    }
    if (!masked) maskHead();
    for (const k in layers) layers[k].ctx.globalAlpha = 1;
    return true;
  }

  return {
    canvas: layers.screen.c,
    paperCanvas: layers.paper.c,
    setSize, draw, markDirty,
    get version() { return version; },
    get items() { return items; },
  };
}
