// Режиссёр страницы «Изразца»: один номер на первые экраны (сутки от полудня
// до ночи и детали номера), расчёт брони по календарю с планом номера,
// сутки гостя по часам, карта пешком и бронь без предоплаты.
import { createKomnata } from './komnata.js';

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
const rub = (n) => (n < 0 ? '−' : '') + num(Math.abs(n)) + ' ₽';
const r100 = (n) => Math.round(n / 100) * 100;
const vh = () => innerHeight;
const plural = (n, a, b, c) => { const m = n % 100, k = n % 10; return (m > 10 && m < 20) ? c : k === 1 ? a : (k > 1 && k < 5) ? b : c; };

// ---------- календарь ----------
const MON = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const MONg = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const day0 = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addD = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const same = (a, b) => a && b && a.getTime() === b.getTime();
const today = day0(new Date());
// занятые ночи: одни и те же при каждом открытии, около одной из двенадцати
const busy = (d) => d < today || (((d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) * 2654435761) >>> 0) % 12 === 0;
const freeNights = (a, b) => { for (let d = a; d < b; d = addD(d, 1)) if (busy(d)) return false; return true; };

const conf = { tip: 'pech', guests: 2, zavtrak: 1, parkovka: 0, rano: 0, inD: null, outD: null };
(() => {
  // по умолчанию ближайшие свободные выходные, не раньше чем через три дня
  let d = addD(today, 3);
  for (let k = 0; k < 60; k++, d = addD(d, 1)) if (d.getDay() === 5 && freeNights(d, addD(d, 2))) break;
  conf.inD = d; conf.outD = addD(d, 2);
})();
let view = new Date(conf.inD.getFullYear(), conf.inD.getMonth(), 1);
const cal = $('.cal'), hint = $('.cal-hint');
const fmt = (d) => `${d.getDate()} ${MONg[d.getMonth()]}, ${WD[d.getDay()]}`;
function renderCal() {
  $('.cal-month').textContent = MON[view.getMonth()] + ' ' + view.getFullYear();
  $('.cal-prev').disabled = view <= new Date(today.getFullYear(), today.getMonth(), 1);
  $('.cal-next').disabled = view >= new Date(today.getFullYear(), today.getMonth() + 5, 1);
  const first = (view.getDay() + 6) % 7, n = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  let h = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map(w => `<span class="wd">${w}</span>`).join('');
  h += '<span></span>'.repeat(first);
  for (let i = 1; i <= n; i++) {
    const d = new Date(view.getFullYear(), view.getMonth(), i);
    const cls = [];
    if (same(d, conf.inD)) cls.push('edge', 'start');
    if (same(d, conf.outD)) cls.push('edge', 'end');
    if (conf.inD && conf.outD && d > conf.inD && d < conf.outD) cls.push('in-range');
    const out = same(d, conf.outD);
    h += `<button type="button" data-t="${d.getTime()}" class="${cls.join(' ')}" ${busy(d) && !out ? 'disabled aria-label="' + i + ', мест нет"' : ''}>${i}</button>`;
  }
  cal.innerHTML = h;
  if (conf.inD && conf.outD) {
    const n2 = Math.round((conf.outD - conf.inD) / 864e5);
    hint.textContent = `${fmt(conf.inD)} → ${fmt(conf.outD)} · ${n2} ${plural(n2, 'ночь', 'ночи', 'ночей')}`;
  } else hint.textContent = `Заезд ${fmt(conf.inD)}. Теперь день выезда`;
}
cal.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b || b.disabled) return;
  const d = new Date(+b.dataset.t);
  if (!conf.inD || conf.outD || d <= conf.inD) { conf.inD = d; conf.outD = null; }
  else if (freeNights(conf.inD, d)) conf.outD = d;
  else { conf.inD = d; conf.outD = null; }
  renderCal(); renderCena();
});
$('.cal-prev').addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); renderCal(); });
$('.cal-next').addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); renderCal(); });

// ---------- расчёт ----------
const TIP = {
  standart: { name: 'Стандарт', price: 4900, max: 2, w: 3.4, h: 4.4, area: 15, bed: 1.6, pech: 0, win: 1, cap: 'Окно во двор, кровать 160, душ' },
  pech: { name: 'С печью', price: 6400, max: 2, w: 4.4, h: 5, area: 22, bed: 1.8, pech: 1, win: 2, cap: 'Окна на Волгу, печь с изразцами, кровать 180' },
  semya: { name: 'Семейный', price: 8200, max: 4, w: 5.2, h: 5.8, area: 30, bed: 1.8, pech: 1, win: 2, sofa: 1, cap: 'Окна на Волгу, печь, кровать 180 и диван на двоих' },
};
function raschet() {
  const t = TIP[conf.tip], out = conf.outD || addD(conf.inD, 1);
  const nights = []; for (let d = conf.inD; d < out; d = addD(d, 1)) nights.push(d);
  const n = nights.length, wk = nights.filter(d => d.getDay() === 5 || d.getDay() === 6).length;
  const room = nights.reduce((a, d) => a + r100(t.price * (d.getDay() === 5 || d.getDay() === 6 ? 1.15 : 1)), 0);
  const rows = [[`${t.name}, ${n} ${plural(n, 'ночь', 'ночи', 'ночей')}${wk ? ', из них ' + wk + ' в выходные' : ''}`, room]];
  let extra = 0;
  if (conf.zavtrak) { const v = 650 * conf.guests * n; extra += v; rows.push([`Завтрак, ${conf.guests} × ${n}`, v]); }
  if (conf.parkovka) { const v = 400 * n; extra += v; rows.push(['Парковка во дворе', v]); }
  if (conf.rano) { extra += 1500; rows.push(['Заезд с 10:00', 1500]); }
  const disc = -r100(room * 0.1);
  rows.push(['Бронь напрямую, −10%', disc, 'minus']);
  return { t, n, rows, sum: room + extra + disc, ota: room + extra };
}

const SVGNS = 'http://www.w3.org/2000/svg';
const plan = $('.plan');
function el(tag, attrs, text) {
  const e = document.createElementNS(SVGNS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (text !== undefined) e.textContent = text;
  return e;
}
// План номера сверху: стены, окна, ванная, кровать, печь и площадь
function drawPlan() {
  const t = TIP[conf.tip];
  const BW = 236, BH = 212, s = Math.min(BW / t.h, BH / t.w);
  const w = t.h * s, h = t.w * s, x0 = 14 + (BW - w) / 2, y0 = 18 + (BH - h) / 2;
  const m = (v) => v * s;
  plan.replaceChildren();
  plan.append(el('rect', { class: 'fl', x: x0, y: y0, width: w, height: h }));
  // окна на левой стене
  const wins = t.win === 1 ? [0.5] : [0.3, 0.72];
  for (const f of wins) {
    const cy = y0 + h * f, hw = m(0.55);
    plan.append(el('line', { class: 'wn', x1: x0, y1: cy - hw, x2: x0, y2: cy + hw }));
    plan.append(el('line', { class: 'wn2', x1: x0, y1: cy - hw, x2: x0, y2: cy + hw }));
  }
  // стены с проёмами окон
  const path = [`M${x0} ${y0}H${x0 + w}V${y0 + h}H${x0 + w - m(0.3)}`, `M${x0 + w - m(1.2)} ${y0 + h}H${x0}`];
  let yy = y0 + h;
  for (const f of [...wins].reverse()) { const cy = y0 + h * f, hw = m(0.55); path.push(`M${x0} ${yy}V${cy + hw}`); yy = cy - hw; }
  path.push(`M${x0} ${yy}V${y0}`);
  plan.append(el('path', { class: 'wl', d: path.join('') }));
  // входная дверь и её ход
  const dx = x0 + w - m(1.2), dw = m(0.9);
  plan.append(el('path', { class: 'ds', d: `M${dx} ${y0 + h}A${dw} ${dw} 0 0 1 ${dx + dw} ${y0 + h - dw}` }));
  // ванная в правом верхнем углу
  const bw = m(1.7), bh = m(1.6);
  plan.append(el('rect', { class: 'ws', x: x0 + w - bw, y: y0, width: bw, height: bh }));
  plan.append(el('text', { class: 'tx', x: x0 + w - bw / 2, y: y0 + bh / 2 + 4, 'text-anchor': 'middle' }, 'душ'));
  // кровать изголовьем к верхней стене
  const bx = x0 + w - bw - m(0.25) - m(t.bed), by = y0 + m(0.05);
  plan.append(el('rect', { class: 'bd', x: bx, y: by, width: m(t.bed), height: m(2.05), rx: 3 }));
  for (const k of [0, 1]) plan.append(el('rect', { class: 'pl', x: bx + m(0.1) + k * m(t.bed / 2), y: by + m(0.12), width: m(t.bed / 2 - 0.2), height: m(0.42), rx: 3 }));
  plan.append(el('rect', { class: 'bl', x: bx, y: by + m(1.45), width: m(t.bed), height: m(0.6), rx: 2 }));
  // печь в левом верхнем углу
  if (t.pech) {
    const p = m(0.8);
    plan.append(el('rect', { class: 'pc', x: x0 + 2.5, y: y0 + 2.5, width: p, height: p }));
    plan.append(el('rect', { class: 'pc2', x: x0 + 2.5 + p * 0.2, y: y0 + 2.5 + p * 0.2, width: p * 0.6, height: p * 0.6 }));
  }
  if (t.sofa) plan.append(el('rect', { class: 'bl', x: x0 + m(0.9), y: y0 + h - m(0.85), width: m(1.6), height: m(0.8), rx: 4 }));
  plan.append(el('text', { class: 'ar', x: 330, y: 122, 'text-anchor': 'end' }, `${t.area} м²`));
  plan.append(el('text', { class: 'tx', x: 330, y: 140, 'text-anchor': 'end' }, `${t.w} × ${t.h} м`));
}

let shownSum = 0;
function renderCena() {
  const s = raschet();
  $('.chek-rows').innerHTML = s.rows.map(([t, v, c]) => `<li${c ? ' class="' + c + '"' : ''}><span>${t}</span><b>${rub(v)}</b></li>`).join('');
  const o = { v: shownSum };
  gsap.to(o, { v: s.sum, duration: reduce ? 0 : 0.5, ease: 'power2.out', overwrite: true, onUpdate: () => { $('.chek-sum').textContent = rub(r100(o.v)); } });
  shownSum = s.sum;
  $('.chek-ota-sum').textContent = rub(s.ota);
  $('.plan-cap').textContent = s.t.cap;
  const out = conf.outD || addD(conf.inD, 1);
  const g = conf.guests;
  $('.z-sum').textContent = `${s.t.name.toLowerCase()}, ${conf.inD.getDate()} ${MONg[conf.inD.getMonth()]} — ${out.getDate()} ${MONg[out.getMonth()]}, ${g} ${plural(g, 'гость', 'гостя', 'гостей')}, ${rub(s.sum)}`;
  drawPlan();
}
function setTip(v) {
  conf.tip = v;
  $$('.chips button').forEach(x => x.setAttribute('aria-checked', x.dataset.v === v));
}
$('.chips').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b || b.disabled) return;
  setTip(b.dataset.v); renderCena();
});
function renderGuests() {
  $('.step-v').textContent = conf.guests;
  $('.step-m').disabled = conf.guests <= 1; $('.step-p').disabled = conf.guests >= 4;
  $$('.chips button').forEach(b => { b.disabled = TIP[b.dataset.v].max < conf.guests; });
  if (TIP[conf.tip].max < conf.guests) setTip('semya');
}
$('.step-m').addEventListener('click', () => { conf.guests = Math.max(1, conf.guests - 1); renderGuests(); renderCena(); });
$('.step-p').addEventListener('click', () => { conf.guests = Math.min(4, conf.guests + 1); renderGuests(); renderCena(); });
$$('.toggles button').forEach(b => b.addEventListener('click', () => {
  const on = b.getAttribute('aria-pressed') !== 'true';
  b.setAttribute('aria-pressed', on); conf[b.dataset.k] = on ? 1 : 0; renderCena();
}));
$('.svyaz').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  $$('.svyaz button').forEach(x => x.setAttribute('aria-checked', x === b));
});

// ---------- карта пешком ----------
const karta = $('.karta'), kartaN = $('.karta-n');
const ME = [46, 118];
const DEST = [
  { min: 4, name: 'Набережная', to: [118, 30], path: [[46, 118], [46, 70], [118, 70], [118, 30]] },
  { min: 7, name: 'Ильинская пл.', to: [176, 92], path: [[46, 118], [104, 118], [104, 92], [176, 92]] },
  { min: 12, name: 'Стрелка', to: [270, 34], path: [[46, 118], [46, 70], [222, 70], [222, 44], [270, 34]] },
];
karta.innerHTML = [
  '<path class="rv" d="M-10 10 C 80 22, 170 4, 262 16 S 300 60, 312 150"/>',
  ...[40, 70, 100, 130].map(y => `<path class="st" d="M0 ${y}H300"/>`),
  ...[46, 104, 162, 222].map(x => `<path class="st" d="M${x} 24V150"/>`),
  '<path class="rt" d=""/>',
  `<circle class="me" cx="${ME[0]}" cy="${ME[1]}" r="6"/>`,
  `<text class="lb" x="${ME[0] + 10}" y="${ME[1] + 18}">Изразец</text>`,
  '<circle class="to" r="6"/>',
  '<text class="lb to-lb"></text>',
].join('');
const route = $('.rt', karta), toDot = $('.to', karta), toLb = $('.to-lb', karta);
const kn = { v: 4 };
function showDest(i) {
  const d = DEST[i];
  route.setAttribute('d', 'M' + d.path.map(p => p.join(' ')).join('L'));
  const len = route.getTotalLength();
  route.style.strokeDasharray = len; route.style.strokeDashoffset = len;
  gsap.to(route.style, { strokeDashoffset: 0, duration: reduce ? 0 : 0.9, ease: 'power2.inOut', overwrite: true });
  toDot.setAttribute('cx', d.to[0]); toDot.setAttribute('cy', d.to[1]);
  toLb.setAttribute('x', Math.min(d.to[0] + 10, 236)); toLb.setAttribute('y', d.to[1] + (d.to[1] < 60 ? 20 : -10)); toLb.textContent = d.name;
  gsap.to(kn, { v: d.min, duration: reduce ? 0 : 0.6, ease: 'power2.out', overwrite: true, onUpdate: () => { kartaN.firstChild.nodeValue = String(Math.round(kn.v)); } });
}
$('.karta-chips').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  $$('.karta-chips button').forEach(x => x.setAttribute('aria-checked', x === b)); showDest(+b.dataset.i);
});
showDest(0);

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

// ---------- сутки по часам: с 14:00 до полудня следующего дня ----------
const den = $('.den'), denItems = $$('.den-list li'), denT = $('.den-t'), denBar = $('.den-bar i');
const times = denItems.map(li => +li.querySelector('time').dataset.m);
const T0 = 14 * 60, T1 = 36 * 60;
function denStep() {
  const r = den.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp(-r.top / Math.max(1, r.height - vh()) * 1.08);
  const m = Math.round(lerp(T0, T1, p) / 10) * 10, md = m % 1440;
  denT.textContent = `${Math.floor(md / 60)}:${String(md % 60).padStart(2, '0')}`;
  denBar.style.transform = `scaleX(${p})`;
  let now = -1;
  denItems.forEach((li, i) => { const on = m >= times[i]; li.classList.toggle('on', on); if (on) now = i; });
  denItems.forEach((li, i) => li.classList.toggle('now', i === now));
}

// ---------- номер ----------
let ok = null;
try { ok = createKomnata($('#komnata')); } catch (e) { document.body.classList.add('no3d'); }
requestAnimationFrame(() => document.body.classList.add('go'));
const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
const intro = { x: reduce ? 0 : 0.5, time: reduce ? 0.5 : 0.04 };
const heroText = $('.hero-text');
// номер встаёт под текстом первого экрана; на низком экране он меньше, но на подпись не наезжает
const heroBottom = () => clamp((heroText.getBoundingClientRect().bottom + scrollY) / vh(), 0.3, 0.8);

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
  addEventListener('pointermove', (e) => { if (x0 === null) return; drag.az = clamp(a0 + (e.clientX - x0) * 0.25, -32, 40); dirty = true; });
  const up = () => { x0 = null; target.classList.remove('grabbing'); };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
}
bindDrag($('.hero'), 'hero'); bindDrag($('.razbor .stage'), 'razbor');
const dAz = (n) => (drag.scene === n ? drag.az : 0);

const SC = {
  hero(p, st) {
    const ph = phone();
    st.bg = '#120f0d'; st.focus = ''; st.zoom = 1; st.curtains = -1;
    st.time = intro.time;
    st.az = (ph ? 36 : 40) - 10 * p + dAz('hero'); st.el = 22 + 4 * p;
    const y0 = heroBottom() + 0.03, x = intro.x;
    st.rect = ph ? [0.04 + x, y0, 0.96 + x, 0.97] : [0.3 + x, y0, 0.7 + x, 0.97];
  },
  razbor(p, st) {
    const ph = phone();
    st.bg = '#120f0d'; st.zoom = 1; st.curtains = -1;
    // детали номера показываем поздним вечером: ночью при одной лампе их не разглядеть
    st.time = 0.03 + 0.15 * smooth(0.02, 0.27, p) + 0.37 * smooth(0.29, 0.48, p) + 0.45 * smooth(0.5, 0.62, p)
      - 0.2 * smooth(0.62, 0.66, p) + 0.2 * smooth(0.92, 0.98, p);
    // шторы приоткрыты, пока говорим о печи и стене, и закрываются на выноске про шторы
    const sh = 0.65 + 2 * 0.065;
    st.curtains = p < 0.6 ? -1 : 1 - 0.75 * smooth(0.62, 0.66, p) + 0.75 * smooth(sh, sh + 0.04, p);
    st.az = lerp(40, 56, smooth(0, 0.1, p)) - 18 * smooth(0.62, 0.74, p) + 10 * smooth(0.92, 0.99, p) + dAz('razbor');
    st.el = lerp(22, 13, smooth(0, 0.1, p)) + 11 * smooth(0.62, 0.74, p) * (1 - smooth(0.92, 0.99, p));
    st.rect = ph ? [0.05, 0.25, 0.95, 0.63] : [0.42, 0.1, 0.95, 0.92];
    phases[0].classList.toggle('on', p > 0.03 && p < 0.28);
    phases[1].classList.toggle('on', p > 0.29 && p < 0.5);
    phases[2].classList.toggle('on', p > 0.51 && p < 0.63);
    let last = '';
    notes.forEach((n, i) => {
      const t0 = 0.65 + i * 0.065;
      const on = ph ? (p > t0 && p < Math.min(0.91, t0 + 0.065)) : (p > t0 && p < 0.91);
      n.classList.toggle('on', on);
      if (on) last = n.dataset.f;
      lines[i].style.opacity = dotsA[i].style.opacity = rings[i].style.opacity = on ? 1 : 0;
    });
    st.focus = last;
    $('.razbor-end').classList.toggle('on', p > 0.93);
    $('.razbor-head').style.opacity = 1 - smooth(0.63, 0.66, p);
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
function frame() {
  manStep(); denStep();
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
      const key = [st.az, st.el, st.time, st.curtains, st.rect.join(), st.focus, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (dirty || key !== lastKey) {
        ok.render(); lastKey = key; dirty = false;
        if (best.name === 'razbor') placeNotes();
      }
    }
  }
  requestAnimationFrame(frame);
}

renderGuests(); renderCal(); renderCena();
if (ok) {
  document.body.classList.add('ready');
  // Вход: номер выезжает справа, за окном садится солнце и загорается лампа
  if (!reduce) {
    gsap.to(intro, { x: 0, duration: 2.2, ease: 'power3.out', delay: 0.15, onUpdate: () => (dirty = true) });
    gsap.to(intro, { time: 0.5, duration: 3.4, ease: 'power1.inOut', delay: 0.6, onUpdate: () => (dirty = true) });
  }
}
requestAnimationFrame(frame);
