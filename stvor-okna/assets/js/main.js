// Режиссёр страницы «Створа»: одно окно на первые экраны (открыть, откинуть,
// разобрать по слоям), расчёт с чертежом под размер, день монтажа по часам,
// шум улицы и запись на замер.
import { createOkno } from './okno.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const PORTRAIT = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 9/10)');
const phone = () => PORTRAIT.matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Анимации идут по часам, а не по кадрам: на медленном устройстве вход не растягивается на минуты
gsap.ticker.lagSmoothing(0);
const num = (n) => n.toLocaleString('ru-RU').replace(/\s/g, ' ');
const rub = (n) => num(n) + ' ₽';
const r10 = (n) => Math.round(n / 10) * 10;
const vh = () => innerHeight;

// ---------- расчёт ----------
const TIP = { gluhoe: ['Глухое', 4300, 0], odna: ['Одна створка', 5200, 3600], dve: ['Две створки', 5200, 3600] };
const conf = { tip: 'dve', w: 1300, h: 1400, paket: 0, podokonnik: 1, otkosy: 1, setka: 0 };
function raschet() {
  const [name, rate, fit] = TIP[conf.tip], area = conf.w * conf.h / 1e6;
  const rows = [['Замер', 0]];
  rows.push([`Окно ${conf.w} × ${conf.h}${conf.paket ? ', энергосберегающее стекло' : ''}`, r10(area * rate + fit + (conf.paket ? area * 1150 : 0))]);
  rows.push(['Монтаж с пароизоляцией', r10(1500 + area * 1300)]);
  if (conf.podokonnik) rows.push(['Подоконник', r10(700 + conf.w * 1.7)]);
  if (conf.otkosy) rows.push(['Откосы', r10((2 * conf.h + conf.w) / 1000 * 1150)]);
  if (conf.setka && conf.tip !== 'gluhoe') rows.push(['Москитная сетка', 1450]);
  rows.push(['Вывоз старого окна', 0]);
  const sum = rows.reduce((a, r) => a + r[1], 0);
  const h = Math.round((2.5 + area * 0.8 + (conf.podokonnik ? 0.5 : 0) + (conf.otkosy ? 1 : 0)) * 2) / 2;
  return { name, rows, sum, h };
}
const hours = (h) => String(h).replace('.', ',') + ' ' + (Number.isInteger(h) && h < 5 ? (h === 1 ? 'час' : 'часа') : (Number.isInteger(h) ? 'часов' : 'часа'));

const SVGNS = 'http://www.w3.org/2000/svg';
const cherteg = $('.cherteg');
function el(tag, attrs, text) {
  const e = document.createElementNS(SVGNS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (text !== undefined) e.textContent = text;
  return e;
}
function drawCherteg() {
  const BX = 26, BY = 18, BW = 226, BH = 222;
  const s = Math.min(BW / conf.w, BH / conf.h), ww = conf.w * s, hh = conf.h * s;
  const x0 = BX + (BW - ww) / 2, y0 = BY + (BH - hh) / 2, F = 7, IM = 6;
  cherteg.replaceChildren();
  const defs = el('defs', {});
  const gr = el('linearGradient', { id: 'steklo', x1: 0, y1: 0, x2: 0, y2: 1 });
  gr.append(el('stop', { offset: 0, 'stop-color': '#dbe6ea' }), el('stop', { offset: 1, 'stop-color': '#f1eee6' }));
  defs.append(gr); cherteg.append(defs);
  cherteg.append(el('rect', { class: 'fr', x: x0, y: y0, width: ww, height: hh, rx: 2 }));
  const sections = conf.tip === 'dve' ? ['fix', 'open'] : [conf.tip === 'odna' ? 'open' : 'fix'];
  const inner = [x0 + F, y0 + F, x0 + ww - F, y0 + hh - F];
  const n = sections.length, secW = (inner[2] - inner[0] - IM * (n - 1)) / n;
  sections.forEach((kind, i) => {
    const sx0 = inner[0] + i * (secW + IM), sx1 = sx0 + secW;
    if (i > 0) cherteg.append(el('rect', { class: 'im', x: sx0 - IM, y: inner[1], width: IM, height: inner[3] - inner[1] }));
    let g = [sx0, inner[1], sx1, inner[3]];
    if (kind === 'open') {
      cherteg.append(el('rect', { class: 'im', x: sx0 - 1, y: inner[1] - 1, width: secW + 2, height: inner[3] - inner[1] + 2 }));
      g = [sx0 + 6, inner[1] + 6, sx1 - 6, inner[3] - 6];
    }
    cherteg.append(el('rect', { class: 'gl', x: g[0], y: g[1], width: g[2] - g[0], height: g[3] - g[1] }));
    if (kind === 'open') {
      const my = (g[1] + g[3]) / 2, mx = (g[0] + g[2]) / 2;
      // поворот: петли справа, вершина угла на стороне петель
      cherteg.append(el('path', { class: 'op', d: `M${g[0]} ${g[1]}L${g[2]} ${my}L${g[0]} ${g[3]}` }));
      // откидывание: петли снизу
      cherteg.append(el('path', { class: 'op', d: `M${g[0]} ${g[1]}L${mx} ${g[3]}L${g[2]} ${g[1]}` }));
      cherteg.append(el('rect', { class: 'rk', x: sx0 - 1, y: my - 9, width: 4, height: 18, rx: 2 }));
    }
  });
  // размеры
  const yb = y0 + hh + 20, xr = x0 + ww + 18;
  cherteg.append(el('path', { class: 'dm', d: `M${x0} ${y0 + hh + 6}V${yb + 6}M${x0 + ww} ${y0 + hh + 6}V${yb + 6}M${x0} ${yb}H${x0 + ww}` }));
  cherteg.append(el('text', { class: 'dt', x: x0 + ww / 2, y: yb + 22, 'text-anchor': 'middle' }, num(conf.w)));
  cherteg.append(el('path', { class: 'dm', d: `M${x0 + ww + 6} ${y0}H${xr + 6}M${x0 + ww + 6} ${y0 + hh}H${xr + 6}M${xr} ${y0}V${y0 + hh}` }));
  cherteg.append(el('text', { class: 'dt', x: xr + 8, y: y0 + hh / 2 + 5 }, num(conf.h)));
}

let shownSum = 0;
function renderCena() {
  const s = raschet();
  $('.chek-rows').innerHTML = s.rows.map(([t, v]) => `<li><span>${t}</span><b>${v ? rub(v) : 'бесплатно'}</b></li>`).join('');
  $('.chek-h').textContent = hours(s.h);
  const o = { v: shownSum };
  gsap.to(o, { v: s.sum, duration: reduce ? 0 : 0.5, ease: 'power2.out', overwrite: true, onUpdate: () => { $('.chek-sum').textContent = rub(r10(o.v)); } });
  shownSum = s.sum;
  $('.z-sum').textContent = `${s.name.toLowerCase()}, ${conf.w} × ${conf.h}, ${rub(s.sum)}`;
  drawCherteg();
}
$$('.chips').forEach(g => g.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  $$('button', g).forEach(x => x.setAttribute('aria-checked', x === b));
  const v = b.dataset.v; conf[g.dataset.k] = isNaN(+v) ? v : +v;
  const setka = $('.toggles [data-k="setka"]');
  setka.disabled = conf.tip === 'gluhoe';
  renderCena();
}));
$$('.toggles button').forEach(b => b.addEventListener('click', () => {
  const on = b.getAttribute('aria-pressed') !== 'true';
  b.setAttribute('aria-pressed', on); conf[b.dataset.k] = on ? 1 : 0; renderCena();
}));
$$('.range input').forEach(inp => {
  const out = $(`.rv[data-for="${inp.name}"]`);
  const upd = () => {
    conf[inp.name] = +inp.value;
    out.textContent = num(+inp.value) + ' мм';
    inp.style.setProperty('--fill', ((inp.value - inp.min) / (inp.max - inp.min) * 100) + '%');
  };
  inp.addEventListener('input', () => { upd(); renderCena(); });
  upd();
});

// ---------- запись на замер: семь дней и окна ----------
const WD = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const SLOTS = ['9:00', '11:00', '13:00', '15:00', '17:00', '19:00'];
const days = $('.days'), slots = $('.slots');
const today = new Date();
days.innerHTML = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today); d.setDate(today.getDate() + i);
  const top = i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : WD[d.getDay()];
  return `<button type="button" role="radio" aria-checked="${i === 1}" data-i="${i}">${top}<b>${d.getDate()}</b></button>`;
}).join('');
function renderSlots(i) {
  slots.innerHTML = SLOTS.map((t, k) => {
    const busy = ((i * 5 + k * 3) % 4 === 0) || (i === 0 && k < 3);
    return `<button type="button" role="radio" aria-checked="false" ${busy ? 'disabled aria-label="' + t + ', занято"' : ''}>${t}</button>`;
  }).join('');
  const free = $('.slots button:not(:disabled)'); if (free) free.setAttribute('aria-checked', 'true');
}
days.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  $$('button', days).forEach(x => x.setAttribute('aria-checked', x === b)); renderSlots(+b.dataset.i);
});
slots.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b || b.disabled) return;
  $$('button', slots).forEach(x => x.setAttribute('aria-checked', x === b));
});
renderSlots(1);

// ---------- манифест, плитки ----------
const man = $('[data-words]');
man.innerHTML = man.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
const words = $$('.w', man);
function manStep() {
  const r = man.getBoundingClientRect();
  if (r.bottom < -50 || r.top > vh() + 50) return;
  const line = vh() * 0.6;
  for (const w of words) { const b = w.getBoundingClientRect(); w.classList.toggle('on', b.top + b.height * 0.5 < line - (b.left / innerWidth) * vh() * 0.06); }
}
const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
$$('.tile').forEach(t => io.observe(t));

// ---------- день монтажа по часам ----------
const den = $('.den'), denItems = $$('.den-list li'), denT = $('.den-t'), denBar = $('.den-bar i');
const T0 = 9 * 60, T1 = 16 * 60;
function denStep() {
  const r = den.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp(-r.top / Math.max(1, r.height - vh()) * 1.08);
  const m = Math.round(lerp(T0, T1, p) / 10) * 10;
  denT.textContent = `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
  denBar.style.transform = `scaleX(${p})`;
  const times = denItems.map(li => { const [hh, mm] = li.querySelector('time').textContent.split(':'); return +hh * 60 + +mm; });
  let now = -1;
  denItems.forEach((li, i) => { const on = m >= times[i]; li.classList.toggle('on', on); if (on) now = i; });
  denItems.forEach((li, i) => li.classList.toggle('now', i === now));
}

// ---------- шум улицы ----------
const shum = $('.t-shum'), shumN = $('.shum-n'), bars = $('.shum-bars');
bars.innerHTML = '<i></i>'.repeat(phone() ? 22 : 30);
const barEls = $$('i', bars), seeds = barEls.map((_, i) => Math.random() * 6 + i);
const loud = { v: 0 };
let shumVisible = false;
new IntersectionObserver((es) => { shumVisible = es[0].isIntersecting; }).observe(shum);
$('.shum-btn').addEventListener('click', (e) => {
  const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  e.currentTarget.setAttribute('aria-pressed', on);
  e.currentTarget.textContent = on ? 'Закрыть окно' : 'Открыть окно';
  shum.classList.toggle('loud', on);
  gsap.to(loud, { v: on ? 1 : 0, duration: reduce ? 0 : 0.8, ease: 'power2.out', overwrite: true });
});
function shumStep(t) {
  if (!shumVisible) return;
  shumN.firstChild.nodeValue = String(Math.round(lerp(30, 72, loud.v)));
  const amp = lerp(0.1, 0.95, loud.v);
  barEls.forEach((b, i) => {
    const n = 0.5 + 0.25 * Math.sin(t * 0.0047 + seeds[i]) + 0.25 * Math.sin(t * 0.0113 + seeds[i] * 1.7);
    b.style.transform = `scaleY(${(0.05 + amp * n).toFixed(3)})`;
  });
}

// ---------- окно ----------
let ok = null;
try { ok = createOkno($('#okno')); } catch (e) { document.body.classList.add('no3d'); }
requestAnimationFrame(() => document.body.classList.add('go'));
const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
const intro = { x: reduce ? 0 : 0.6, open: reduce ? 0 : 48 };
const heroText = $('.hero-text');
const heroBottom = () => clamp((heroText.getBoundingClientRect().bottom + scrollY) / vh(), 0.3, 0.7);

const notes = $$('.note'), phases = $$('.phase'), svg = $('.leaders');
svg.innerHTML = notes.map(() => '<line/><circle r="4"/><circle class="ring" r="9"/>').join('');
const lines = $$('line', svg), dotsA = $$('circle:not(.ring)', svg), rings = $$('.ring', svg);

const drag = { az: 0, scene: '' };
let dirty = true;
function bindDrag(target, name) {
  let x0 = null, a0 = 0;
  target.style.touchAction = 'pan-y';
  target.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, input, label') || (e.pointerType === 'mouse' && e.button !== 0)) return;
    x0 = e.clientX; a0 = drag.scene === name ? drag.az : 0; drag.scene = name; target.classList.add('grabbing');
  });
  addEventListener('pointermove', (e) => { if (x0 === null) return; drag.az = clamp(a0 + (e.clientX - x0) * 0.3, -70, 70); dirty = true; });
  const up = () => { x0 = null; target.classList.remove('grabbing'); };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
}
bindDrag($('.hero'), 'hero'); bindDrag($('.razbor .stage'), 'razbor');
const dAz = (n) => (drag.scene === n ? drag.az : 0);

const SC = {
  hero(p, st) {
    const ph = phone();
    st.bg = '#0d1114'; st.explode = 0; st.zoom = 1; st.focus = ''; st.tilt = 0; st.sky = 1; st.mirror = true;
    st.open = intro.open; st.handle = intro.open > 1 ? 1 : 0;
    st.az = (ph ? 18 : 22) - 12 * p + dAz('hero'); st.el = 4 + 4 * p;
    const y0 = heroBottom() + 0.03, x = intro.x;
    st.rect = ph ? [0.1 + x, y0, 0.9 + x, 0.98] : [0.3 + x, y0, 0.7 + x, 1.08];
  },
  razbor(p, st) {
    const ph = phone();
    st.bg = '#0d1114'; st.zoom = 1; st.mirror = !ph;   // на телефоне под окном подписи
    st.handle = smooth(0, 0.06, p) + smooth(0.33, 0.37, p) - 2 * smooth(0.52, 0.56, p);
    st.open = 58 * smooth(0.07, 0.2, p) * (1 - smooth(0.23, 0.31, p));
    st.tilt = 9 * smooth(0.38, 0.44, p) * (1 - smooth(0.47, 0.52, p));
    st.explode = smooth(0.57, 0.74, p) * (1 - smooth(0.9, 0.97, p));
    st.sky = 1 - smooth(0.55, 0.62, p) + smooth(0.92, 0.98, p);
    st.az = lerp(10, 34, smooth(0, 0.08, p)) - 6 * smooth(0.56, 0.72, p) - 12 * smooth(0.9, 0.99, p) + dAz('razbor');
    st.el = lerp(4, 7, smooth(0, 0.1, p)) + 7 * smooth(0.56, 0.72, p) * (1 - smooth(0.9, 0.99, p));
    st.rect = ph ? [0.08, 0.27, 0.92, 0.64] : [0.42, 0.12, 0.94, 0.9];
    phases[0].classList.toggle('on', p > 0.03 && p < 0.31);
    phases[1].classList.toggle('on', p > 0.33 && p < 0.55);
    let last = '';
    notes.forEach((n, i) => {
      const t0 = 0.62 + i * 0.06;
      const on = ph ? (p > t0 && p < Math.min(0.88, t0 + 0.06)) : (p > t0 && p < 0.88);
      n.classList.toggle('on', on);
      if (on) last = n.dataset.f;
      lines[i].style.opacity = dotsA[i].style.opacity = rings[i].style.opacity = on ? 1 : 0;
    });
    st.focus = last;
    $('.razbor-end').classList.toggle('on', p > 0.92);
    $('.razbor-head').style.opacity = 1 - smooth(0.56, 0.6, p);
  },
};

const stageTop = (sel) => $(sel + ' .stage').getBoundingClientRect().top;
function placeNotes() {
  const ph = phone();
  const off = stageTop('.razbor');
  const left = Math.max(24, innerWidth / 2 - 590);
  let prevBottom = 70;
  notes.forEach((n, i) => {
    const a0 = ok.project(n.dataset.a), a = { x: a0.x, y: a0.y - off };
    const h = n.offsetHeight || 110;
    let y = clamp(a.y - 18, 70, innerHeight - h - 24);
    y = Math.max(y, prevBottom + 16); prevBottom = y + h;
    if (!ph) { n.style.left = left + 'px'; n.style.top = y + 'px'; }
    const tx = left + 292;
    lines[i].setAttribute('x1', a.x); lines[i].setAttribute('y1', a.y); lines[i].setAttribute('x2', tx); lines[i].setAttribute('y2', y + 14);
    dotsA[i].setAttribute('cx', a.x); dotsA[i].setAttribute('cy', a.y);
    rings[i].setAttribute('cx', a.x); rings[i].setAttribute('cy', a.y);
  });
}

const LIGHT = $$('.cena, .den, .bento, .zamer, .foot');
let lastKey = '', active = null;
function frame(t) {
  manStep(); denStep(); shumStep(t || 0);
  document.body.classList.toggle('on-light', LIGHT.some(e => { const r = e.getBoundingClientRect(); return r.top < 52 && r.bottom > 52; }));
  if (ok) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = s; }
    }
    if (best) {
      const p = best.name === 'hero' ? clamp(-best.el.getBoundingClientRect().top / vh()) : clamp(-best.el.getBoundingClientRect().top / Math.max(1, best.el.offsetHeight - vh()));
      SC[best.name](p, ok.st);
      const stage = best.el.querySelector('.stage');
      const shift = stage ? stage.getBoundingClientRect().top / vh() : -scrollY / vh();
      const r0 = ok.st.rect; ok.st.rect = [r0[0], r0[1] + shift, r0[2], r0[3] + shift];
      if (best !== active) { active = best; drag.az = 0; drag.scene = ''; dirty = true; }
      const st = ok.st;
      const key = [st.az, st.el, st.explode, st.open, st.tilt, st.handle, st.sky, st.rect.join(), st.focus, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (dirty || key !== lastKey) {
        ok.render(); lastKey = key; dirty = false;
        if (best.name === 'razbor') placeNotes();
      }
    }
  }
  requestAnimationFrame(frame);
}

renderCena();
if (ok) {
  document.body.classList.add('ready');
  // Вход: окно выезжает справа и створка закрывается сама
  if (!reduce) gsap.to(intro, { x: 0, open: 0, duration: 2.2, ease: 'power3.out', delay: 0.15, onUpdate: () => (dirty = true) });
}
requestAnimationFrame(frame);
