// Режиссёр страницы «Угли»: один огонь на весь сайт, сет по подачам, бронь на схеме зала.
import { createOgon } from './ogon.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const PORTRAIT = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 9/10)');
const phone = () => PORTRAIT.matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const vh = () => innerHeight;

// ---------- огонь ----------
let ogon = null;
try { ogon = createOgon($('#ogon')); if (reduce) ogon.still(true); } catch (e) { document.body.classList.add('no3d'); }

// ---------- появление ----------
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -10% 0px' });
$$('.reveal, .porody').forEach((el) => io.observe(el));
requestAnimationFrame(() => requestAnimationFrame(() => $('.hero').classList.add('on')));

// ---------- сет по подачам ----------
const SET = [
  { n: 'Хлеб из печи', t: 'Закваска, которой три года. Подаём горячим, с копчёным маслом и укропным маслом.', wood: 'берёза', heat: '380 °C', time: '4 минуты', f: { heat: 0.6, height: 0.5, smoke: 0 } },
  { n: 'Форель и можжевельник', t: 'Карельская форель, сырая, с можжевеловым маслом и огурцом. Над столом тлеет веточка можжевельника.', wood: 'можжевельник', heat: 'дым 90 °C', time: '20 минут дыма', f: { heat: 0.28, height: 0.36, smoke: 1 } },
  { n: 'Свёкла из золы', t: 'Три часа в горячей золе, пока кожура не станет углём. Внутри сладкая, с козьим сыром и лесным орехом.', wood: 'зола берёзы', heat: '250 °C', time: '3 часа', f: { heat: 0.34, height: 0.28, smoke: 0.4 } },
  { n: 'Судак на решётке', t: 'Волжский судак, кожа хрустит от сильного жара. Белое масло, зелёный лук и печёный лимон.', wood: 'берёза', heat: '650 °C', time: '7 минут', f: { heat: 0.82, height: 0.62, smoke: 0 } },
  { n: 'Утка и вишня', t: 'Грудка дозревает над вишнёвыми поленьями и берёт их сладкий дым. Соус из той же вишни, печёный шалот.', wood: 'вишня', heat: '550 °C', time: '12 минут', f: { heat: 0.7, height: 0.56, smoke: 0.15 } },
  { n: 'Ребро сорок часов', t: 'Говяжье ребро сутки томится в дубовом дыму, потом ещё ночь в углях. Корочка, жус и обожжённый лук-порей.', wood: 'дуб', heat: '900 °C', time: '40 часов', f: { heat: 1, height: 0.74, smoke: 0 } },
  { n: 'Яблоко в углях', t: 'Яблоко запекается целиком в остывающих углях яблони. Дымная карамель и пломбир, который тает на тёплом.', wood: 'яблоня', heat: '300 °C', time: '25 минут', f: { heat: 0.4, height: 0.32, smoke: 0.1 } },
];
const run = $('.set-run');
const pod = $('.podacha');
const dishes = $$('.blyudo img');
const bilet = $$('.bilet button');
let cur = -1, flare = 0;

function showCourse(i) {
  if (i === cur) return;
  cur = i;
  const c = SET[i];
  dishes.forEach((d, k) => { d.classList.toggle('on', k === i); d.classList.toggle('out', k < i); });
  bilet.forEach((b, k) => { b.classList.toggle('on', k === i); b.setAttribute('aria-current', k === i ? 'step' : 'false'); });
  $('.p-n', pod).textContent = String(i + 1).padStart(2, '0');
  $('.p-name', pod).textContent = c.n;
  $('.p-text', pod).textContent = c.t;
  $('.p-wood', pod).textContent = c.wood;
  $('.p-heat', pod).textContent = c.heat;
  $('.p-time', pod).textContent = c.time;
  pod.classList.remove('swap'); void pod.offsetWidth; pod.classList.add('swap');
  flare = performance.now();
  const sv = $('.blyudo-svet'); if (sv) sv.style.setProperty('--zk', c.f.heat.toFixed(2));
  // соседние блюда грузим заранее
  [i + 1, i + 2].forEach((k) => { if (dishes[k]) dishes[k].loading = 'eager'; });
}
showCourse(0);

function setProgress() {
  const r = run.getBoundingClientRect();
  return clamp(-r.top / Math.max(1, r.height - vh()));
}
bilet.forEach((b, i) => b.addEventListener('click', () => {
  const top = run.getBoundingClientRect().top + scrollY;
  const span = run.offsetHeight - vh();
  scrollTo({ top: top + span * ((i + 0.5) / SET.length), behavior: reduce ? 'auto' : 'smooth' });
}));

// ---------- где горит огонь ----------
function visible(el) {
  const r = el.getBoundingClientRect();
  return Math.max(0, Math.min(r.bottom, vh()) - Math.max(r.top, 0)) / vh();
}
const zones = { hero: $('.hero'), set: run, podval: $('.podval') };

function fireFor(name) {
  const ph = phone();
  if (name === 'hero') return ph ? { heat: 0.95, height: 0.5, base: 0, cx: 0.5, spread: 0.9, smoke: 0 } : { heat: 0.9, height: 0.52, base: 0, cx: 0.55, spread: 0.85, smoke: 0 };
  if (name === 'podval') return { heat: 0.62, height: ph ? 0.15 : 0.2, base: 0, cx: 0.5, spread: 1.0, smoke: 0 };
  // сет: огонь под блюдом, жар по подаче
  const c = SET[Math.max(0, cur)].f;
  const b = $('.blyudo').getBoundingClientRect();
  const cx = (b.left + b.width / 2) / innerWidth;
  const boost = clamp(1 - (performance.now() - flare) / 700) * 0.25;
  const top = 1 - (b.top + b.height * 0.5) / vh();
  return { heat: Math.min(1.15, c.heat + 0.12 + boost), height: top * (1.05 + c.height * 0.8), base: 0, cx, spread: b.width / innerWidth * 0.62, smoke: c.smoke };
}

let ticking = false;
function onScroll() {
  ticking = false;
  // подача по прокрутке
  const p = setProgress();
  showCourse(Math.min(SET.length - 1, Math.floor(p * SET.length)));
  // зона огня
  let best = null, bv = 0.02;
  for (const k in zones) { const v = visible(zones[k]); if (v > bv) { bv = v; best = k; } }
  if (!ogon) return;
  if (!best) { document.body.classList.remove('ogon-on'); ogon.run(false); return; }
  document.body.classList.add('ogon-on');
  ogon.run(true);
  ogon.set(fireFor(best));
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
// свет углей под тарелкой: ставим по центру блюда
function placeGlow() {
  const sv = $('.blyudo-svet'), si = $('.stage-in'), b = $('.blyudo');
  if (!sv || !si || !b) return;
  const r = si.getBoundingClientRect(), q = b.getBoundingClientRect();
  sv.style.setProperty('--bx', ((q.left + q.width / 2 - r.left) / r.width * 100).toFixed(2));
  sv.style.setProperty('--by', ((q.top + q.height / 2 - r.top) / r.height * 100).toFixed(2));
}
placeGlow();
addEventListener('resize', () => { placeGlow(); onScroll(); });
onScroll();
// розжиг: страница открывается тлеющими углями, огонь поднимается вместе с заголовком
if (ogon) {
  const h = fireFor('hero');
  if (reduce || scrollY > 10) ogon.set(h, true);
  else { ogon.set({ ...h, heat: 0.12, height: 0.06 }, true); setTimeout(() => { if (scrollY < 10) ogon.set(h); }, 350); }
}
// вспышка при смене блюда держит огонь живым и без прокрутки
setInterval(() => { if (ogon && document.body.classList.contains('ogon-on') && visible(run) > 0.5) ogon.set(fireFor('set')); }, 120);

// ---------- меню: разделы на телефоне ----------
const tabs = $$('.menu-tabs button');
tabs.forEach((t) => t.addEventListener('click', () => {
  tabs.forEach((x) => x.setAttribute('aria-selected', x === t ? 'true' : 'false'));
  $$('.menu-col').forEach((c) => c.classList.toggle('on', c.dataset.col === t.dataset.tab));
}));

// ---------- свет за курсором на карточках брони ----------
$$('[data-glow]').forEach((el) => el.addEventListener('pointermove', (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  el.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));

// ================= бронь на схеме зала =================
const DNI = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const VO = ['в воскресенье', 'в понедельник', 'во вторник', 'в среду', 'в четверг', 'в пятницу', 'в субботу'];
const MES = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const TIMES = ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
const PEAK = new Set(['19:00', '19:30', '20:00', '20:30']);
const TABLES = [
  { id: 'S', name: 'Стойка у очага', zone: 'лицом к огню и шефу', cap: 8, x: 22, y: 14.5, w: 56, h: 8, stoyka: true },
  { id: '1', zone: 'у окна', cap: 2, x: 6, y: 33, w: 9, h: 12 },
  { id: '2', zone: 'у окна', cap: 2, x: 6, y: 50.5, w: 9, h: 12 },
  { id: '3', zone: 'у окна', cap: 2, x: 6, y: 68, w: 9, h: 12 },
  { id: '4', zone: 'в центре зала', cap: 4, x: 22, y: 38, w: 12, h: 15 },
  { id: '5', zone: 'в центре зала', cap: 4, x: 39, y: 38, w: 12, h: 15 },
  { id: '6', zone: 'в центре зала', cap: 4, x: 56, y: 38, w: 12, h: 15 },
  { id: '7', zone: 'ближе к очагу', cap: 4, x: 30, y: 66, w: 12, h: 15 },
  { id: '8', zone: 'ближе к очагу', cap: 4, x: 47, y: 66, w: 12, h: 15 },
  { id: '9', zone: 'большой круглый стол', cap: 6, x: 78, y: 29, w: 15, round: true },
  { id: '10', name: 'Кабинет', zone: 'за стеклом, отдельно от зала', cap: 8, x: 77.5, y: 70, w: 19, h: 24 },
];
const sklon = (n, a, b, c) => (n % 10 === 1 && n % 100 !== 11) ? a : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? b : c;
const gostey = (n) => n + ' ' + sklon(n, 'гость', 'гостя', 'гостей');
const mest = (n) => n + ' ' + sklon(n, 'место', 'места', 'мест');
const tName = (t) => t.name || 'Стол ' + t.id;

// детерминированная «занятость»: одна и та же на один день и время
function rnd(...a) {
  let h = 2166136261;
  for (const ch of a.join('|')) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}
const today = new Date(); today.setHours(0, 0, 0, 0);
const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(today); d.setDate(d.getDate() + i); return d; });
const dayKey = (d) => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
const minutes = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
function passed(di, time) {
  if (di !== 0) return false;
  const n = new Date();
  return n.getHours() * 60 + n.getMinutes() > minutes(time) - 30;
}
function stoykaTaken(di, time) { return Math.floor(rnd('s', dayKey(days[di]), time) * (PEAK.has(time) ? 8 : 5)); }
function busy(t, di, time) {
  if (t.stoyka) return false;
  return rnd(t.id, dayKey(days[di]), time) < (PEAK.has(time) ? 0.58 : 0.3) + (di > 0 && days[di].getDay() % 6 === 5 ? 0.1 : 0);
}
function fits(t, g) {
  if (t.stoyka) return g <= 4;
  if (t.cap === 2) return g <= 2;
  if (t.cap === 4) return g >= 2 && g <= 4;
  if (t.cap === 6) return g >= 4 && g <= 6;
  return g >= 6;
}
function freeFor(t, di, time, g) {
  if (passed(di, time)) return false;
  if (t.stoyka) return 8 - stoykaTaken(di, time) >= g;
  return !busy(t, di, time);
}
function zoneOf(di, time, g) {
  if (passed(di, time)) return null;
  const ok = TABLES.filter((t) => fits(t, g) && freeFor(t, di, time, g));
  if (!ok.length) return null;
  if (ok.some((t) => t.stoyka)) return 'у огня';
  if (ok.some((t) => t.cap === 2 && g <= 2)) return 'у окна';
  return 'в зале';
}

const st = { g: 2, di: 0, time: null, table: null, holdUntil: 0 };
const elDni = $('.dni'), elVr = $('.vremya'), elPlan = $('.plan'), elMsg = $('.plan-msg');

// стулья вокруг стола, в долях самого стола
function chairs(t) {
  if (t.stoyka) return [];
  if (t.cap === 2) return [[-34, 50], [134, 50]];
  if (t.cap === 4) return [[28, -20], [72, -20], [28, 120], [72, 120]];
  if (t.cap === 6) return Array.from({ length: 6 }, (_, i) => { const a = i / 6 * Math.PI * 2 - Math.PI / 2; return [50 + 64 * Math.cos(a), 50 + 64 * Math.sin(a)]; });
  return [[20, -13], [50, -13], [80, -13], [20, 113], [50, 113], [80, 113], [-9, 50], [109, 50]];
}
// схема: столы и стулья стойки
TABLES.forEach((t) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 't' + (t.round ? ' kruglyy' : '') + (t.stoyka ? ' t-stoyka' : '');
  b.style.setProperty('--x', t.x); b.style.setProperty('--y', t.y); b.style.setProperty('--w', t.w);
  if (t.round) b.style.aspectRatio = '1'; else b.style.setProperty('--h', t.h);
  b.dataset.id = t.id;
  b.setAttribute('aria-pressed', 'false');
  b.innerHTML = t.stoyka ? '<b>Стойка шефа</b><small>8 мест у огня</small>' : t.name ? `<b>${t.name}</b><small>до ${mest(t.cap)}</small>` : `<b>${t.id}</b><small>${mest(t.cap)}</small>`;
  b.insertAdjacentHTML('beforeend', chairs(t).map(([x, y]) => `<i class="s" style="left:${x}%;top:${y}%"></i>`).join(''));
  b.addEventListener('click', () => pickTable(t));
  t.el = b;
  elPlan.appendChild(b);
});
const stulya = Array.from({ length: 8 }, (_, i) => {
  const s = document.createElement('span');
  s.className = 'stul';
  s.setAttribute('aria-hidden', 'true');
  s.style.setProperty('--x', 24.4 + i * 6.6);
  s.style.setProperty('--y', 24.2);
  elPlan.appendChild(s);
  return s;
});

let nedelya = 0;
const dalee = $('.dni-dalee');
dalee.addEventListener('click', () => { nedelya = 1 - nedelya; renderDni(); });
function renderDni() {
  elDni.innerHTML = '';
  dalee.textContent = nedelya ? 'Ближайшие семь дней' : 'Следующие семь дней';
  days.forEach((d, i) => {
    if (Math.floor(i / 7) !== nedelya) return;
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', i === st.di ? 'true' : 'false');
    b.setAttribute('aria-label', `${DNI[d.getDay()]}, ${d.getDate()} ${MES[d.getMonth()]}`);
    b.innerHTML = `<small>${i === 0 ? 'сег' : i === 1 ? 'завт' : DNI[d.getDay()]}</small><b>${d.getDate()}</b>`;
    b.addEventListener('click', () => { st.di = i; ensureTime(); render(); });
    elDni.appendChild(b);
  });
}
function renderVremya() {
  elVr.innerHTML = '';
  TIMES.forEach((tm) => {
    const z = zoneOf(st.di, tm, st.g);
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', tm === st.time ? 'true' : 'false');
    b.disabled = !z;
    b.innerHTML = `<b>${tm}</b><small>${z || (passed(st.di, tm) ? 'прошло' : 'занято')}</small>`;
    b.addEventListener('click', () => { st.time = tm; render(); });
    elVr.appendChild(b);
  });
}
function ensureTime() {
  if (st.time && zoneOf(st.di, st.time, st.g)) return;
  const pref = TIMES.filter((t) => minutes(t) >= minutes('19:00')).concat(TIMES);
  st.time = pref.find((t) => zoneOf(st.di, t, st.g)) || null;
}
function renderPlan() {
  let anyFree = false;
  TABLES.forEach((t) => {
    const f = fits(t, st.g), free = st.time ? freeFor(t, st.di, st.time, st.g) : false;
    t.el.disabled = !free;
    t.el.classList.toggle('nefit', !f);
    t.el.setAttribute('aria-pressed', st.table === t ? 'true' : 'false');
    t.el.setAttribute('aria-label', `${tName(t)}, ${t.zone}, ${t.stoyka ? '8 мест' : mest(t.cap)}: ${free ? (f ? 'свободно' : 'не на ваше число гостей') : 'занято'}`);
    if (free && f) anyFree = true;
  });
  const taken = st.time ? stoykaTaken(st.di, st.time) : 8;
  stulya.forEach((s, i) => {
    s.classList.toggle('zan', i >= 8 - taken);
    s.classList.toggle('sel', st.table && st.table.stoyka && i < st.g);
  });
  if (!st.time) elMsg.textContent = 'На этот день всё занято. Посмотрите соседние дни.';
  else if (!anyFree) elMsg.textContent = `На ${st.time} для ${st.g === 1 ? 'одного гостя' : st.g + ' гостей'} мест нет. Попробуйте другое время.`;
  else if (!st.table) elMsg.textContent = `Свободные на ${st.time} столы обведены. Нажмите на стол, который нравится.`;
  else elMsg.textContent = '';
}
function dayText() {
  const d = days[st.di];
  return `${st.di === 0 ? 'сегодня' : st.di === 1 ? 'завтра' : DNI[d.getDay()]}, ${d.getDate()} ${MES[d.getMonth()]}`;
}
function renderItog() {
  const t = st.table;
  $('.itog-stol').textContent = t ? tName(t) : 'Выберите стол на схеме';
  $('.itog-detal').textContent = t ? `${t.zone} · ${gostey(st.g)} · ${dayText()}, ${st.time}` : (st.time ? `${gostey(st.g)} · ${dayText()}, ${st.time}` : '');
}
function render() {
  if (st.table && !(fits(st.table, st.g) && st.time && freeFor(st.table, st.di, st.time, st.g))) { st.table = null; st.holdUntil = 0; }
  $$('.gosti button').forEach((b) => b.setAttribute('aria-checked', +b.dataset.g === st.g ? 'true' : 'false'));
  $$('button', elDni).forEach((b, i) => b.setAttribute('aria-checked', i + nedelya * 7 === st.di ? 'true' : 'false'));
  renderVremya(); renderPlan(); renderItog(); tickHold();
}
function pickTable(t) {
  if (!fits(t, st.g)) {
    elMsg.textContent = t.stoyka ? 'За стойку садим до четырёх гостей.' : `${tName(t)} рассчитан на ${t.cap === 8 ? 'компанию от шести' : mest(t.cap)}. Для ${gostey(st.g)} подойдут обведённые.`;
    return;
  }
  st.table = st.table === t ? null : t;
  st.holdUntil = st.table ? Date.now() + 5 * 60 * 1000 : 0;
  render();
}
function tickHold() {
  const el = $('.itog-hold');
  if (!st.table || !st.holdUntil) { el.textContent = ''; return; }
  const left = Math.max(0, Math.round((st.holdUntil - Date.now()) / 1000));
  if (left === 0) {
    st.table = null; st.holdUntil = 0;
    render();
    elMsg.textContent = 'Пять минут прошло, стол снова свободен для всех. Выберите его ещё раз.';
    return;
  }
  el.textContent = `Держим стол за вами ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
}
setInterval(() => { if (st.table && $('.b-ok').hidden) tickHold(); }, 1000);

$$('.gosti button').forEach((b) => b.addEventListener('click', () => { st.g = +b.dataset.g; ensureTime(); render(); }));

// форма
const form = $('.b-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const err = $('.b-err');
  const imya = form.imya.value.trim(), tel = form.tel.value.replace(/\D/g, '');
  form.imya.classList.toggle('oshibka', !imya);
  form.tel.classList.toggle('oshibka', tel.length < 10);
  if (!st.table) { err.textContent = 'Сначала выберите стол на схеме.'; return; }
  if (!imya || tel.length < 10) { err.textContent = !imya ? 'Напишите, как к вам обращаться.' : 'Проверьте телефон: нужно десять цифр после +7.'; return; }
  err.textContent = '';
  const t = st.table;
  const d = days[st.di];
  const kogda = st.di === 0 ? 'сегодня' : st.di === 1 ? 'завтра' : `${VO[d.getDay()]}, ${d.getDate()} ${MES[d.getMonth()]},`;
  $('.ok-detal').textContent = `${imya}, ждём вас ${kogda} в ${st.time}. ${tName(t)}, ${t.zone}, ${gostey(st.g)}. Позвоним накануне, чтобы подтвердить.`;
  st.holdUntil = 0; $('.itog-hold').textContent = '';
  form.hidden = true; $('.b-itog').hidden = true; $('.b-ok').hidden = false;
});
$('.ok-new').addEventListener('click', () => {
  form.hidden = false; $('.b-itog').hidden = false; $('.b-ok').hidden = true;
  st.table = null; render();
});
$('.ok-cal').addEventListener('click', () => {
  const d = days[st.di], [h, m] = (st.time || '19:30').split(':').map(Number);
  const p = (n) => String(n).padStart(2, '0');
  const s = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(h)}${p(m)}00`;
  const e2 = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(h + 2)}${p(m)}00`;
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Ugli//RU', 'BEGIN:VEVENT', `DTSTART:${s}`, `DTEND:${e2}`, 'SUMMARY:Ужин в «Углях»', 'LOCATION:Нижний Новгород, Рождественская, 24', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'ugli-stol.ics';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
});

// первый экран: два ближайших свободных времени сегодня, иначе завтра
function heroSlots() {
  let di = 0;
  let free = TIMES.filter((t) => minutes(t) >= minutes('19:00') && zoneOf(0, t, 2));
  if (free.length < 2) { di = 1; free = TIMES.filter((t) => minutes(t) >= minutes('19:00') && zoneOf(1, t, 2)); }
  const second = free.find((t) => free[0] && minutes(t) - minutes(free[0]) >= 90) || free[1];
  const pick = [free[0], second].filter((v, i, a) => v && a.indexOf(v) === i);
  $('.hero-card .kicker').textContent = di === 0 ? 'Сегодня свободно' : 'Завтра свободно';
  const box = $('[data-hero-slots]');
  box.innerHTML = '';
  pick.forEach((t) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'slot';
    b.innerHTML = `<b>${t}</b><small>${zoneOf(di, t, 2)}</small>`;
    b.addEventListener('click', () => {
      st.di = di; st.g = 2; st.time = t; nedelya = 0; renderDni(); render();
      $('#bron').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
    box.appendChild(b);
  });
}

renderDni();
ensureTime();
render();
heroSlots();
