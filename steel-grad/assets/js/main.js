// Режиссёр страницы «Стальграда»: один каркас на весь сайт, сцены по прокрутке.
// Первый экран — каркас собирается сам, тёмная глава — сборка по прокрутке со
// сварочным светом, расчёт — каркас перестраивается под ползунки.
import { createKarkas } from './karkas.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const PORTRAIT = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 9/10)');
const phone = () => PORTRAIT.matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
gsap.ticker.lagSmoothing(0);
const fmt = (n, d = 0) => n.toLocaleString('ru-RU', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/\s/g, ' ');
const vh = () => innerHeight;

// ---------- одометр: столбики цифр, итог в aria-label ----------
function odo(el, text) {
  if (el.dataset.t === text) return;
  el.dataset.t = text;
  el.setAttribute('aria-label', text.replace(/ /g, ' '));
  const ch = [...text];
  const cols = el.children;
  if (cols.length !== ch.length) {
    el.innerHTML = ch.map(c => /\d/.test(c) ? '<i style="--d:0"></i>' : c === ',' ? '<i class="c"></i>' : /\s/.test(c) ? '<i class="s"></i>' : `<i class="u" data-u="${c}"></i>`).join('');
    // столбики встают на 0 и катятся к своим цифрам в следующем кадре
    requestAnimationFrame(() => ch.forEach((c, i) => { if (/\d/.test(c)) el.children[i].style.setProperty('--d', c); }));
    return;
  }
  ch.forEach((c, i) => { if (/\d/.test(c)) cols[i].style.setProperty('--d', c); });
}

// ---------- моноширинные подписи собираются из шума (приём Scramble Text, 21st) ----------
const GLYPHS = '01#/\\_—+=<>[]АБВГДЕЖЗИКЛМНОПРСТ';
function scramble(el) {
  const text = el.textContent;
  if (reduce) return;
  const glyphs = [...text];
  const gap = 26;
  const times = glyphs.map((_, i) => (i + (Math.sin(i * 7.31 + glyphs.length * 1.7) * 0.5 + 0.5) * 2.5) * gap);
  const t0 = performance.now();
  let last = 0;
  const tick = (now) => {
    const e = now - t0;
    if (now - last > 45) {
      last = now;
      el.textContent = glyphs.map((g, i) => /\s|·/.test(g) || e >= times[i] ? g : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');
    }
    if (e < times[times.length - 1] + 60) requestAnimationFrame(tick); else el.textContent = text;
  };
  requestAnimationFrame(tick);
}
const seen = new IntersectionObserver((es) => es.forEach(e => {
  if (!e.isIntersecting) return;
  seen.unobserve(e.target);
  if (e.target.matches('[data-scramble]')) scramble(e.target);
  if (e.target.matches('.odo[data-to]')) odo(e.target, numText(e.target));
}), { rootMargin: '0px 0px -10% 0px' });
const numText = (el) => el.hasAttribute('data-plain') ? String(+el.dataset.to) : fmt(+el.dataset.to);
$$('[data-scramble], .odo[data-to]').forEach(el => seen.observe(el));
$$('.odo[data-to]').forEach(el => odo(el, numText(el).replace(/\d/g, '0')));

// ---------- каркас ----------
let k = null;
try { k = createKarkas($('#karkas')); } catch (e) { document.body.classList.add('no3d'); }

const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
function progress(el, pinned) {
  const r = el.getBoundingClientRect();
  if (!pinned) return clamp(-r.top / vh());
  return clamp(-r.top / Math.max(1, r.height - vh()));
}

// вход: площадка пустая, каркас собирается, пока читают заголовок
const intro = { b: reduce ? 1 : 0, az: reduce ? 0 : 16 };
let dirty = true;

// поворот пальцем или мышью: вбок — крутится, вверх-вниз листается страница
const drag = { az: 0, scene: '' };
function bindDrag(el, name) {
  let x0 = null, a0 = 0;
  el.style.touchAction = 'pan-y';
  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, input, label, select, .rs-out, .rs-ctl') || (e.pointerType === 'mouse' && e.button !== 0)) return;
    x0 = e.clientX; a0 = drag.scene === name ? drag.az : 0; drag.scene = name;
    el.classList.add('grabbing');
  });
  addEventListener('pointermove', (e) => { if (x0 === null) return; drag.az = clamp(a0 + (e.clientX - x0) * 0.25, -120, 120); dirty = true; });
  const up = () => { x0 = null; el.classList.remove('grabbing'); };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
}
bindDrag($('.hero'), 'hero'); bindDrag($('.raschet .stage'), 'raschet');
const dAz = (n) => (drag.scene === n ? drag.az : 0);

const heroTop = $('.hero-top'), heroBot = $('.hero-bot');
const steps = $$('.step');
const PAPER = '#e6e9e8', NIGHT = '#0e1215';

const SC = {
  hero(p, st) {
    const ph = phone();
    Object.assign(st, { dark: 0, bg: PAPER, shadow: 0.16, gridA: 0.15, beam: 0, fit: null, zoom: 1, tint: null, pad: ph ? [0.3, 0.3, 0.3, 0.3] : [3.4, 0.3, 0.3, 7.2] });
    st.build = intro.b;
    st.az = (ph ? 60 : 38) - 16 * p + intro.az + dAz('hero'); st.el = (ph ? 23 : 19) + 8 * p;
    if (ph) {
      // телефон: каркас во всю ширину между заголовком и цифрами
      const top = heroTop.getBoundingClientRect().bottom + scrollY;
      const bot = heroBot.getBoundingClientRect().top + scrollY;
      st.rect = [-0.1, top / vh() + 0.01, 1.1, bot / vh() - 0.01];
    } else {
      // компьютер: текст узкой колонкой слева, каркас крупно справа и уходит за край
      const x0 = (heroTop.getBoundingClientRect().right + 40) / innerWidth;
      st.rect = [x0, 0.08, 1.16, 0.97];
    }
  },
  sborka(p, st) {
    const ph = phone();
    Object.assign(st, { dark: 1, bg: NIGHT, shadow: 0.5, gridA: 0.16, beam: 1, fit: null, zoom: 1, tint: null, pad: [0.5, 0.5, 0.6, 0.6] });
    const b = clamp((p - 0.04) / 0.8);
    st.build = b;
    st.az = lerp(58, 12, smooth(0, 1, p)) + (ph ? 6 : 0); st.el = lerp(24, 15, smooth(0, 1, p));
    if (ph) {
      // на телефоне сводка встаёт под заголовок, каркас — между сводкой и текстом шага
      const head = $('.sb-head'), read = $('.sb-read');
      read.style.top = (head.offsetTop + head.offsetHeight + 14) + 'px';
      const y0 = (read.offsetTop + read.offsetHeight + 10) / vh();
      st.rect = [-0.03, y0, 1.03, Math.max(y0 + 0.25, 0.73)];
    } else {
      $('.sb-read').style.top = '';
      st.rect = [0.37, 0.14, 1.0, 0.88];
    }
    const ix = b < 0.27 ? 0 : b < 0.63 ? 1 : b < 0.9 ? 2 : 3;
    steps.forEach((s, i) => { s.classList.toggle('on', i === ix); s.classList.toggle('past', i < ix); });
    k.sparks(3);
  },
  raschet(p, st) {
    const ph = phone();
    const g = k.geo();
    Object.assign(st, { dark: 0, bg: PAPER, shadow: 0.16, gridA: 0.15, beam: 0, zoom: 1, build: 1, pad: ph ? [2.6, 0.3, 0.3, 2.6] : [3.5, 0.5, 0.5, 6] });
    // коробка вписывания не меньше среднего здания: маленькое видно маленьким, большое камера берёт целиком
    st.fit = ph ? [Math.max(g.L, 30), Math.max(g.span, 21), Math.max(g.ridge, 10)] : [Math.max(g.L, 42), Math.max(g.span, 27), Math.max(g.ridge, 12.5)];
    st.az = (ph ? 44 : 38) + dAz('raschet'); st.el = ph ? 22 : 19;
    if (ph) {
      const r = $('.rs-view').getBoundingClientRect();
      st.rect = [0.02, r.top / vh(), 0.98, r.bottom / vh()];
    } else {
      st.rect = [0.37, 0.13, 0.985, 0.66];
    }
    st.tint = tintUntil > performance.now() ? tintParts : null;
    st.tintK = st.tint ? clamp((tintUntil - performance.now()) / 900) : 0;
  },
};

// ---------- подписи осей и размеры ----------
const heroOv = $('.hero .ov'), rsOv = $('.raschet .ov');
const marksEl = $('.marks', heroOv);
function dimsSvg(svg, list, off) {
  const g = k.geo();
  let html = '';
  for (const d of list) {
    const a = k.px(...d.a), b = k.px(...d.b), pa = k.px(...d.pa), pb = k.px(...d.pb);
    [a, b, pa, pb].forEach(q => (q.y -= off));
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const ang = Math.atan2(b.y - a.y, b.x - a.x);
    const tk = (q) => { const c = Math.cos(ang + Math.PI / 4) * 6, s = Math.sin(ang + Math.PI / 4) * 6; return `<line class="tick" x1="${q.x - c}" y1="${q.y - s}" x2="${q.x + c}" y2="${q.y + s}"/>`; };
    const w = d.t.length * 7.4 + 12;
    html += `<line class="ext" x1="${pa.x}" y1="${pa.y}" x2="${a.x}" y2="${a.y}"/><line class="ext" x1="${pb.x}" y1="${pb.y}" x2="${b.x}" y2="${b.y}"/>` +
      `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>${tk(a)}${tk(b)}` +
      `<rect x="${mx - w / 2}" y="${my - 9}" width="${w}" height="18"/><text x="${mx}" y="${my}">${d.t}</text>`;
  }
  svg.innerHTML = html;
  return g;
}
const mm = (m) => fmt(Math.round(m * 1000));
function dimList(g, withLen) {
  const { span, H, L } = g, o = 2.4;
  const list = [
    { a: [-L / 2 - o, 0, span / 2], b: [-L / 2 - o, 0, -span / 2], pa: [-L / 2, 0, span / 2], pb: [-L / 2, 0, -span / 2], t: mm(span) },
    { a: [-L / 2, 0, span / 2 + o], b: [-L / 2, H, span / 2 + o], pa: [-L / 2, 0, span / 2], pb: [-L / 2, H, span / 2], t: mm(H) },
  ];
  if (withLen) list.push({ a: [-L / 2, 0, span / 2 + o * 2], b: [L / 2, 0, span / 2 + o * 2], pa: [-L / 2, 0, span / 2 + o * 0.4], pb: [L / 2, 0, span / 2 + o * 0.4], t: mm(L) });
  return list;
}
function placeHero() {
  const off = $('.hero').getBoundingClientRect().top;
  // на телефоне каркас уходит за края — оставляем только пролёт, высота легла бы за край экрана
  const g = dimsSvg($('.dims', heroOv), phone() ? dimList(k.geo(), false).slice(0, 1) : dimList(k.geo(), false), off);
  if (phone()) return;
  const pts = g.xs.map((x, i) => [String(i + 1), x, 0, g.span / 2 + 6.2]);
  if (marksEl.children.length !== pts.length) marksEl.innerHTML = pts.map(p => `<span>${p[0]}</span>`).join('');
  pts.forEach((p, i) => { const q = k.px(p[1], p[2], p[3]); const s = marksEl.children[i]; s.style.left = q.x + 'px'; s.style.top = (q.y - off) + 'px'; });
}
function placeRs() {
  const off = $('.raschet .stage').getBoundingClientRect().top;
  dimsSvg($('.dims', rsOv), dimList(k.geo(), !phone()), off);
}

// ---------- расчёт ----------
const conf = { span: 24, height: 8.4, length: 30 };
let tintUntil = 0, tintParts = null;
const fields = {
  span: { el: $('#f-span'), out: (v) => `${fmt(v)} м`, tint: ['chord', 'web'] },
  height: { el: $('#f-height'), out: (v) => `${fmt(v, 1)} м`, tint: ['column'] },
  length: { el: $('#f-length'), out: (v) => `${fmt(v)} м`, tint: ['purlin', 'girt'] },
};
// деления линейки (приём Marks Slider, 21st): мелкие на каждом шаге, крупные с подписью
for (const [key, f] of Object.entries(fields)) {
  const inp = f.el, min = +inp.min, max = +inp.max, step = +inp.step;
  const n = Math.round((max - min) / step);
  const bigEvery = key === 'height' ? 2 : key === 'length' ? 3 : 2;
  $('.rule-marks', inp.parentNode).innerHTML = Array.from({ length: n + 1 }, (_, i) => {
    const v = min + i * step, big = i % bigEvery === 0 || i === n;
    return `<i class="${big ? 'big' : ''}" style="left:${i / n * 100}%" ${big ? `data-l="${key === 'height' ? fmt(v, 1) : fmt(v)}"` : ''}></i>`;
  }).join('');
}
function renderCalc() {
  // стоимость считает технолог по чертежу: на экране только габариты модели
  for (const [key, f] of Object.entries(fields)) {
    const v = conf[key], inp = f.el;
    inp.parentNode.style.setProperty('--fill', ((v - +inp.min) / (+inp.max - +inp.min) * 100) + '%');
    $(`output[for="${inp.id}"]`).textContent = f.out(v);
  }
}
let sizeTween = null;
function setConf(key, v) {
  conf[key] = v;
  tintParts = fields[key].tint; tintUntil = performance.now() + 1100;
  if (k) {
    if (sizeTween) sizeTween.kill();
    const from = { ...k.size };
    const o = { t: 0 };
    sizeTween = gsap.to(o, { t: 1, duration: reduce ? 0 : 0.5, ease: 'power3.out', onUpdate: () => {
      k.setSize({ span: lerp(from.span, conf.span, o.t), height: lerp(from.height, conf.height, o.t), length: lerp(from.length, conf.length, o.t) });
      dirty = true;
    }, onComplete: () => { k.setSize({ ...conf }); renderCalc(); dirty = true; } });
  }
  renderCalc();
}
for (const [key, f] of Object.entries(fields)) f.el.addEventListener('input', () => setConf(key, +f.el.value));

// расчёт уходит в заявку
$('[data-send]').addEventListener('click', () => {
  const r = $('[name="razmer"]');
  r.value = `${fmt(conf.span)} × ${fmt(conf.length)} м, высота ${fmt(conf.height, 1)} м`;
});
$('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Здравствуйте! Прошу рассчитать обработку металла.\n\nЧто нужно: ${f.get('tip')}\nЧертежи, размеры, материал: ${f.get('razmer') || '—'}\nГород объекта: ${f.get('gorod') || '—'}\nТелефон: ${f.get('tel') || '—'}\nЕщё: ${f.get('kom') || '—'}\n\nЧертежи прикладываю.`;
  location.href = `mailto:hello@steel-grad.ru?subject=${encodeURIComponent('Заявка на расчёт: ' + f.get('tip'))}&body=${encodeURIComponent(body)}`;
});

// ---------- путь партии ----------
const put = $('.put'), track = $$('.track li'), logs = $$('.log li');
const NOW = [['Шаг 1. Заявка.', 'Почтой или через форму'],
  ['Шаг 2. Уточнение деталей.', 'Чертежи, сроки, количество'],
  ['Шаг 3. Расчёт заказа.', 'Стоимость и сроки'],
  ['Шаг 4. Согласование.', 'Предложение и договор'],
  ['Шаг 5. Производство.', 'Работаем в срок'],
  ['Шаг 6. Отгрузка и монтаж.', 'Самовывоз или доставка']];
const road = $('.r-road'), truck = $('.r-truck'), km = $('.r-km');
const day = $('.day'), dayImgs = $$('.day-ph img'), dayWhen = $('.day-when');
const roadLen = road.getTotalLength();
road.style.strokeDasharray = roadLen;
let putKey = '';
function putStep() {
  const r = put.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = phone() ? clamp((vh() * 0.75 - r.top) / Math.max(1, r.height)) : clamp(-r.top / Math.max(1, r.height - vh()));
  const s = clamp(p * 1.08 * 6, 0, 5.999);
  const i = Math.floor(s), f = s - i;
  const key = s.toFixed(3);
  if (key === putKey) return; putKey = key;
  track.forEach((li, j) => {
    li.classList.toggle('done', j < i); li.classList.toggle('now', j === i);
    li.querySelector('i').style.setProperty('--f', j < i ? 1 : j === i ? f : 0);
  });
  logs.forEach((li, j) => li.classList.toggle('on', j <= i));
  // фото дня от мастера; на этапе «в пути» вместо фото — карта
  day.classList.toggle('map', i === 4);
  dayImgs.forEach(im => im.classList.toggle('on', +im.dataset.s === i));
  if (i !== 4) { const t = logs[i].querySelector('time').textContent; dayWhen.textContent = t; }
  $('.now-t').textContent = NOW[i][0]; $('.now-s').textContent = NOW[i][1];
  // машина идёт по дороге на этапе «в пути», до этого стоит у цеха
  const rp = i < 4 ? 0 : i === 4 ? smooth(0, 1, f) : 1;
  const pt = road.getPointAtLength(rp * roadLen);
  truck.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
  road.style.strokeDashoffset = roadLen * (1 - rp);
  km.textContent = i === 4 ? 'В пути' : '26 городов поставки';
}

// ---------- кадр за кадром ----------
let lastKey = '', active = null, live = false;
const darks = $$('[data-dark]');
function frame() {
  putStep();
  { let on = false; for (const d of darks) { const r = d.getBoundingClientRect(); if (r.top < 40 && r.bottom > 40) on = true; } document.body.classList.toggle('on-dark', on); }
  if (k) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = s; }
    }
    if (best) {
      const p = progress(best.el, best.name === 'sborka');
      SC[best.name](p, k.st);
      // каркас едет вместе со своей сценой, пока она въезжает и уезжает
      if (!(best.name === 'raschet' && phone())) {
        const stage = best.el.querySelector('.stage');
        const shift = stage ? stage.getBoundingClientRect().top / vh() : -scrollY / vh();
        const r0 = k.st.rect;
        k.st.rect = [r0[0], r0[1] + shift, r0[2], r0[3] + shift];
      }
      if (best !== active) { active = best; drag.az = 0; drag.scene = ''; dirty = true; }
      const st = k.st;
      const key = [st.az, st.el, st.build, st.rect.join(), st.bg, st.tintK, k.size.span, k.size.height, k.size.length, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (dirty || live || key !== lastKey) {
        live = k.render(); lastKey = key; dirty = false;
        heroOv.classList.toggle('on', best.name === 'hero' && st.build > 0.995);
        rsOv.classList.toggle('on', best.name === 'raschet');
        if (best.name === 'hero') placeHero();
        if (best.name === 'raschet') placeRs();
      }
    }
  }
  requestAnimationFrame(frame);
}

renderCalc();
if (k) {
  document.body.classList.add('ready');
  if (!reduce) {
    k.sparks(40);
    gsap.to(intro, { b: 1, duration: 3.6, ease: 'power1.inOut', delay: 0.35, onUpdate: () => { k.sparks(2); dirty = true; } });
    gsap.to(intro, { az: 0, duration: 4, ease: 'power3.out', delay: 0.2, onUpdate: () => (dirty = true) });
  }
}
requestAnimationFrame(frame);
