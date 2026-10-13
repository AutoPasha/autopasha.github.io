// Режиссёр страницы «Медь»: одно зерно и горсть вокруг на весь сайт, обжарка
// по ползунку и прокрутке, заказ к выходу с живым чеком.
import { createZerno } from './zerno.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const PORTRAIT = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 9/10)');
const phone = () => PORTRAIT.matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const vh = () => innerHeight;
const rub = (n) => n.toLocaleString('ru-RU').replace(/\s/g, ' ') + ' ₽';
const hhmm = (d) => d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');

// ---------- заголовки: слова выезжают из-под маски ----------
$$('.disp').forEach(h => {
  $$('.m', h).forEach(m => { m.innerHTML = `<span>${m.innerHTML}</span>`; });
  h.classList.add('rv');
});
const io = new IntersectionObserver((es) => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.2 });
$$('.rv').forEach(el => io.observe(el));

// ---------- манифест: слова загораются по мере прокрутки ----------
const man = $('[data-words]');
man.innerHTML = man.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
const words = $$('.w', man);
let litN = -1;
function manStep() {
  const r = man.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp((vh() * 0.86 - r.top) / (r.height + vh() * 0.3));
  const n = reduce ? words.length : Math.round(p * words.length);
  if (n === litN) return;
  litN = n;
  words.forEach((w, i) => w.classList.toggle('on', i < n));
}

// ---------- бегущая лента стоит, когда её не видно ----------
const track = $('.lenta-track');
new IntersectionObserver(([e]) => { track.style.animationPlayState = e.isIntersecting ? 'running' : 'paused'; }).observe($('.lenta'));

// ---------- обжарка: семь ступеней ----------
const ST = [
  { name: 'Сырое', t: 0, notes: ['сено', 'горох', 'свежая трава'], text: 'Твёрдое, как камешек. Пить его нельзя, а хранить можно год.' },
  { name: 'Сушка', t: 4.5, notes: ['хлеб', 'солома'], text: 'Зерно желтеет и отдаёт воду. В зале пахнет свежим хлебом.' },
  { name: 'Корица', t: 8.17, notes: ['лимон', 'зелёное яблоко'], text: 'Первый треск. Кислотность резкая, сладости пока нет.' },
  { name: 'Светлая', t: 9.5, notes: ['бергамот', 'персик', 'жасмин'], text: 'Так жарим для фильтра: Гуджи звучит ярче всего.' },
  { name: 'Средняя', t: 10.67, notes: ['молочный шоколад', 'абрикос', 'карамель'], text: 'Так жарим для эспрессо: сладко и плотно, хорошо и с молоком.' },
  { name: 'Тёмная', t: 12, notes: ['горький шоколад', 'жареный орех'], text: 'Второй треск. Ягоды уходят, остаются горечь и тело.' },
  { name: 'Французская', t: 13, notes: ['дым', 'уголь'], text: 'Зерно в масле. Так мы не жарим: от Гуджи здесь ничего не осталось.' },
];
// Кривая обжарки: минута → температура зерна (загрузка в горячий барабан, точка разворота, подъём)
const CURVE = [[0, 200], [0.5, 140], [1.1, 96], [2, 112], [3, 136], [4.5, 160], [6, 178], [7, 188], [8.17, 196], [9.5, 205], [10.67, 212], [12, 224], [13, 232]];
const tempAt = (m) => {
  for (let i = 1; i < CURVE.length; i++) {
    if (m <= CURVE[i][0]) { const [a, ta] = CURVE[i - 1], [b, tb] = CURVE[i]; return lerp(ta, tb, (m - a) / (b - a)); }
  }
  return CURVE[CURVE.length - 1][1];
};
// ступень (0..6, дробная) → минута обжарки
const minAt = (r) => { const i = Math.min(5, Math.floor(r)), t = r - i; return lerp(ST[i].t, ST[i + 1].t, t); };
const KX = (m) => m / 13 * 320, KY = (t) => 180 - (t - 80) / (240 - 80) * 170;
const path = (to) => {
  const pts = [];
  for (let m = 0; m <= to + 1e-6; m += 0.1) pts.push(`${KX(m).toFixed(1)} ${KY(tempAt(m)).toFixed(1)}`);
  if (to > 0) pts.push(`${KX(to).toFixed(1)} ${KY(tempAt(to)).toFixed(1)}`);
  return pts.length ? 'M' + pts.join('L') : '';
};
$('.kr-line').setAttribute('d', path(13));
const krDone = $('.kr-done'), krDot = $('.kr-dot');

const stName = $('.st-name'), stI = $('.st-i'), stTemp = $('.st-temp'), stMin = $('.st-min'), stNotes = $('.st-notes'), stText = $('.st-text');
const rng = $('#obzharka-rng');
const scale = $$('.rng-scale span');
let shownSt = -1, scrT = 0;
// Название ступени расшифровывается из случайных букв (21st, Text Scramble)
function scramble(el, text) {
  const ABC = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ';
  const id = ++scrT;
  if (reduce) { el.textContent = text; return; }
  const t0 = performance.now(), dur = 520;
  const step = (now) => {
    if (id !== scrT) return;
    const p = clamp((now - t0) / dur);
    const k = Math.floor(p * text.length);
    el.textContent = text.slice(0, k) + text.slice(k).split('').map(() => ABC[Math.floor(Math.random() * ABC.length)]).join('');
    if (p < 1) requestAnimationFrame(step); else el.textContent = text;
  };
  requestAnimationFrame(step);
}
function showRoast(r) {
  const i = Math.round(clamp(r, 0, 6));
  if (i !== shownSt) {
    shownSt = i;
    const s = ST[i];
    if (stName.textContent) scramble(stName, s.name); else stName.textContent = s.name;
    stI.textContent = String(i + 1).padStart(2, '0');
    stNotes.innerHTML = s.notes.map(n => `<li>${n}</li>`).join('');
    stText.textContent = s.text;
    scale.forEach((el, k) => el.classList.toggle('on', k === i));
  }
  const m = minAt(clamp(r, 0, 6));
  stTemp.textContent = Math.round(r < 0.05 ? 24 : tempAt(m)) + ' °C';
  stMin.textContent = Math.floor(m) + ':' + String(Math.round((m % 1) * 60) % 60).padStart(2, '0');
  krDone.setAttribute('d', path(m));
  krDot.setAttribute('cx', KX(m).toFixed(1));
  krDot.setAttribute('cy', KY(m < 0.01 ? 200 : tempAt(m)).toFixed(1));
}
let userR = null;
rng.addEventListener('input', () => { userR = +rng.value; showRoast(userR); dirty = true; });
scale.forEach(el => el.addEventListener('click', () => { userR = +el.dataset.s; rng.value = userR; showRoast(userR); dirty = true; }));

// ---------- зерно ----------
let z = null;
try { z = createZerno($('#zerno')); } catch (e) { document.body.classList.add('no3d'); }
requestAnimationFrame(() => document.body.classList.add('go'));
// Вход: горсть слетается к главному зерну, пока читают заголовок
const intro = { v: reduce ? 0 : 0.55, t0: 0 };
if (z) z.ready.then(() => {
  document.body.classList.add('ready');
  if (reduce) return;
  intro.t0 = performance.now();
  const step = (now) => {
    const t = clamp((now - intro.t0) / 1900);
    intro.v = 0.55 * Math.pow(1 - t, 3);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
});

const hero = $('.hero'), heroIn = $('.hero-in'), obzh = $('.obzh'), obzhStage = $('.obzh .stage');
const stageParts = $$('.obzh .stage > *');
const obzhHead = $('.obzh-head'), obzhInfo = $('.obzh-info'), obzhKr = $('.krivaya'), obzhCtl = $('.obzh-ctl');
const BG_D = [13, 25, 22], BG_L = [223, 232, 226];
let bgNow = '';
function setBg(t) {
  const c = BG_D.map((v, i) => Math.round(lerp(v, BG_L[i], t)));
  const s = `rgb(${c.join(',')})`;
  if (s !== bgNow) { document.body.style.backgroundColor = s; bgNow = s; }
}

// Зерно в обжарке можно крутить пальцем или мышью: вбок — крутится, вверх-вниз — листается страница
const drag = { v: 0 };
(() => {
  let x0 = null, s0 = 0;
  const el = obzhStage;
  el.style.touchAction = 'pan-y';
  el.addEventListener('pointerdown', (e) => { if (e.target.closest('.obzh-ctl')) return; x0 = e.clientX; s0 = drag.v; });
  addEventListener('pointermove', (e) => { if (x0 === null) return; drag.v = s0 + (e.clientX - x0) * 0.012; dirty = true; });
  addEventListener('pointerup', () => { x0 = null; });
  addEventListener('pointercancel', () => { x0 = null; });
})();

const SC = {
  hero(st, r) {
    const ph = phone();
    const p = clamp(-r.top / vh());
    st.roast = 4; st.fitR = ph ? 2.5 : 2.45;
    st.spread = Math.max(0.32 * smooth(0, 1, p), intro.v);
    st.roll = 0.42; st.tilt = 0;
    let x0 = 0.42;
    if (!ph) {
      const right = Math.max(...[...heroIn.children].map(c => c.getBoundingClientRect().right));
      x0 = clamp(right / innerWidth + 0.03, 0.38, 0.6);
    }
    const sh = r.top / vh();
    st.rect = ph ? [0.02, 0.08 + sh, 0.98, 0.45 + sh] : [x0, 0.08 + sh, 0.99, 0.95 + sh];
    setBg(0);
  },
  obzh(st, r) {
    const ph = phone();
    const p = clamp(-r.top / Math.max(1, r.height - vh()));
    const top = obzhStage.getBoundingClientRect().top / vh();
    const e = smooth(0.95, 0.3, top);       // въезд сцены: фон светлеет, подписи проявляются
    setBg(e);
    const op = smooth(0.45, 1, e).toFixed(3);
    stageParts.forEach(el => { el.style.opacity = op; });
    st.spread = 1; st.fitR = 1.15; st.tilt = 0; st.roll = ph ? 0.32 : 0.42;
    if (p <= 0 && top > 0.9) userR = null;
    const r0 = userR ?? 6 * smooth(0.04, 0.9, p);
    st.roast = r0;
    if (userR === null) rng.value = r0.toFixed(2);
    showRoast(r0);
    // зерно — в свободном месте между заголовком, подписями, кривой и ползунком
    const W = innerWidth, H = vh(), off = top * H;
    const R = (el) => el.getBoundingClientRect();
    const hd = R(obzhHead), inf = R(obzhInfo), kr = R(obzhKr), ctl = R(obzhCtl);
    if (ph) {
      st.rect = [0.06, (hd.bottom - off) / H + 0.015 + top, 0.94, (inf.top - off) / H - 0.015 + top];
    } else {
      const x0 = Math.max(kr.right / W + 0.025, 0.26), x1 = inf.left / W - 0.025;
      st.rect = [x0, 0.15 + top, x1, (ctl.top - off) / H - 0.03 + top];
    }
  },
};

// ---------- шапка: плотная после первого экрана, светлая над светлыми разделами ----------
const nav = $('.nav');
const lightSecs = $$('.lots, .zakaz, .podpiska, .otzyvy');
function navStep() {
  nav.classList.toggle('solid', scrollY > 30);
  const y = 32;
  let light = lightSecs.some(s => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
  const r = obzh.getBoundingClientRect();
  if (r.top <= y && r.bottom > y && obzhStage.getBoundingClientRect().top < vh() * 0.4) light = true;
  document.body.classList.toggle('light-nav', light);
}

// ---------- стопка карточек пути (21st, Stacking Cards) ----------
const stack = $('.stack'), cards = $$('.sc');
function stackStep() {
  if (phone()) { cards.forEach(c => { c.style.transform = ''; c.firstElementChild.style.opacity = ''; }); return; }
  const r = stack.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const n = cards.length;
  cards.forEach((c, i) => {
    const next = cards[i + 1];
    if (!next) { c.style.transform = ''; c.firstElementChild.style.opacity = ''; return; }
    // сколько следующая карточка уже наехала на эту
    const a = c.getBoundingClientRect(), b = next.getBoundingClientRect();
    const cover = clamp((a.bottom - b.top) / a.height);
    const s = 1 - (n - 1 - i) * 0.035 * cover - 0.02 * cover;
    c.style.transform = `scale(${s.toFixed(4)})`;
    // текст накрытой карточки гаснет, чтобы над следующей не торчал срезанный заголовок
    const end = c.firstElementChild.lastElementChild.getBoundingClientRect().bottom;
    c.firstElementChild.style.opacity = smooth(end, end + 160, b.top).toFixed(3);
  });
}

// Отсвет за зерном рисуется фоном самого холста, под зёрнами: медный в зале, белый у окна в обжарке
const canvas = $('#zerno');
let glowNow = '';
function glow(name, [x0, y0, x1, y1]) {
  const W = innerWidth, H = innerHeight;
  const cx = (x0 + x1) / 2 * W, cy = (y0 + y1) / 2 * H, r = Math.max((x1 - x0) * W, (y1 - y0) * H) * 0.62;
  const c = name === 'hero' ? 'rgba(198,107,61,.24), rgba(198,107,61,.08) 55%' : 'rgba(250,253,251,.75), rgba(250,253,251,.25) 55%';
  const g = `radial-gradient(circle ${Math.round(r)}px at ${Math.round(cx)}px ${Math.round(cy)}px, ${c}, transparent)`;
  if (g !== glowNow) { canvas.style.background = g; glowNow = g; }
}

// ---------- кадр за кадром ----------
const scenes = [{ el: hero, name: 'hero' }, { el: obzh, name: 'obzh' }];
let dirty = true, lastKey = '', tPrev = performance.now();
function frame(now) {
  const dt = Math.min(0.1, (now - tPrev) / 1000); tPrev = now;
  manStep(); navStep(); stackStep();
  if (z) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = { ...s, r }; }
    }
    if (best) {
      const st = z.st;
      SC[best.name](st, best.r);
      const idle = !reduce && !z.soft;
      if (idle) { st.spin += dt * 0.32; st.t += dt; }
      st.flip = best.name === 'obzh' ? drag.v : 0;
      const key = [st.roast, st.spread, st.rect.join(), st.fitR, st.spin, st.flip, st.roll, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (dirty || key !== lastKey) { z.render(); glow(best.name, st.rect); lastKey = key; dirty = false; }
    } else if (obzh.getBoundingClientRect().bottom < 0) {
      setBg(1);
    } else {
      setBg(0);
    }
  }
  requestAnimationFrame(frame);
}
addEventListener('resize', () => { dirty = true; });
requestAnimationFrame(frame);

// ---------- заказ к выходу ----------
const DRINKS = {
  espresso: { name: 'Эспрессо', base: 160, sizes: [['30 мл', 0], ['двойной', 60]], milk: 'no', ice: 'no' },
  americano: { name: 'Американо', base: 180, sizes: [['250 мл', 0], ['350 мл', 30]], milk: 'opt' },
  kapuchino: { name: 'Капучино', base: 240, sizes: [['250 мл', 0], ['350 мл', 40], ['450 мл', 80]], milk: 'yes' },
  flat: { name: 'Флэт уайт', base: 260, sizes: [['180 мл', 0]], milk: 'yes' },
  raf: { name: 'Раф «Медь»', base: 290, sizes: [['350 мл', 0]], milk: 'yes' },
  filtr: { name: 'Фильтр дня', base: 190, sizes: [['250 мл', 0], ['350 мл', 40]], milk: 'opt' },
  tonik: { name: 'Эспрессо-тоник', base: 270, sizes: [['300 мл', 0]], milk: 'no', ice: 'always' },
};
const MILK = [['net', 'Без молока', 0], ['obych', 'Обычное', 0], ['ovs', 'Овсяное', 60], ['mind', 'Миндальное', 70], ['bezl', 'Безлактозное', 30]];
const POINTS = { rozh: 'Рождественская, 39, полка у окна', pokr: 'Б. Покровская, 57, полка у кассы' };
const order = { d: 'kapuchino', size: 0, milk: 'obych', adds: new Set(), point: 'rozh', slot: 0, name: '', bags: new Map() };

// сегменты с ползущей подложкой
function segInit(seg, onPick) {
  const place = () => {
    const b = $('button[aria-checked="true"]', seg), thumb = $('.seg-thumb', seg);
    if (!b || !thumb) return;
    thumb.style.left = b.offsetLeft + 'px';
    thumb.style.width = b.offsetWidth + 'px';
  };
  seg.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b || b.disabled) return;
    $$('button', seg).forEach(x => x.setAttribute('aria-checked', String(x === b)));
    place(); onPick(b.dataset.v);
  });
  addEventListener('resize', place);
  seg._place = place;
  requestAnimationFrame(place);
  document.fonts && document.fonts.ready.then(place);
}
const segSize = $('#seg-size'), chipsMilk = $('#chips-milk'), slotsEl = $('#slots');
segInit(segSize, (v) => { order.size = +v; renderChek(); });
segInit($('#seg-point'), (v) => { order.point = v; renderChek(); });
segInit($('#seg-grind'), (v) => {
  $$('.pl-g').forEach(li => { li.textContent = v === 'zerno' ? 'в зёрнах' : 'молотый под вашу кофеварку'; });
});

function buildDrink() {
  const d = DRINKS[order.d];
  order.size = Math.min(order.size, d.sizes.length - 1);
  segSize.innerHTML = '<span class="seg-thumb" aria-hidden="true"></span>' + d.sizes.map(([n, p], i) =>
    `<button type="button" role="radio" aria-checked="${i === order.size}" data-v="${i}">${n}${p ? `<span class="mono">+${p}</span>` : ''}</button>`).join('');
  segSize._place();
  if (d.milk === 'yes' && order.milk === 'net') order.milk = 'obych';
  if (d.milk === 'no') order.milk = 'net';
  if (d.milk === 'opt' && !chipsMilk.dataset.touched) order.milk = 'net';
  if (d.milk === 'yes' && !chipsMilk.dataset.touched) order.milk = 'obych';
  chipsMilk.innerHTML = MILK.map(([k, n, p]) => {
    const off = (d.milk === 'yes' && k === 'net') || (d.milk === 'no' && k !== 'net');
    return `<button type="button" class="chip" role="radio" aria-checked="${order.milk === k}" data-k="${k}"${off ? ' disabled' : ''}>${n}${p ? ` <span class="mono">+${p}</span>` : ''}</button>`;
  }).join('');
  $$('#chips-add .chip').forEach(c => {
    const a = c.dataset.a;
    const off = (a === 'led' && d.ice) || (a === 'med' && d.milk === 'no');
    c.disabled = !!off;
    if (a === 'led' && d.ice === 'always') { order.adds.add('led'); }
    else if (off) order.adds.delete(a);
    c.setAttribute('aria-pressed', String(order.adds.has(a)));
  });
  renderChek();
}
$('.drinks').addEventListener('click', (e) => {
  const b = e.target.closest('.dr'); if (!b) return;
  $$('.dr').forEach(x => x.setAttribute('aria-checked', String(x === b)));
  order.d = b.dataset.d; buildDrink();
});
chipsMilk.addEventListener('click', (e) => {
  const b = e.target.closest('.chip'); if (!b || b.disabled) return;
  order.milk = b.dataset.k; chipsMilk.dataset.touched = '1';
  $$('.chip', chipsMilk).forEach(x => x.setAttribute('aria-checked', String(x === b)));
  renderChek();
});
$('#chips-add').addEventListener('click', (e) => {
  const b = e.target.closest('.chip'); if (!b || b.disabled) return;
  const a = b.dataset.a;
  order.adds.has(a) ? order.adds.delete(a) : order.adds.add(a);
  b.setAttribute('aria-pressed', String(order.adds.has(a)));
  renderChek();
});
$('#z-name').addEventListener('input', (e) => { order.name = e.target.value.trim(); });
$$('.lot-add').forEach(b => b.addEventListener('click', () => {
  const on = b.getAttribute('aria-pressed') !== 'true';
  b.setAttribute('aria-pressed', String(on));
  if (on) order.bags.set(b.dataset.name, +b.dataset.price); else order.bags.delete(b.dataset.name);
  renderChek();
}));

// Окна выдачи: через 10, 15, 20, 30 и 45 минут, в часы работы кофейни
function slotTimes() {
  const now = new Date();
  const wk = (d) => d.getDay() === 0 || d.getDay() === 6;
  const open = (d) => { const o = new Date(d); o.setHours(wk(d) ? 9 : 7, wk(d) ? 0 : 30, 0, 0); return o; };
  const close = (d) => { const c = new Date(d); c.setHours(21, 0, 0, 0); return c; };
  let start = new Date(Math.ceil((now.getTime() + 10 * 60000) / 300000) * 300000);
  let tomorrow = false;
  if (start > new Date(close(now).getTime() - 15 * 60000)) {
    const t = new Date(now); t.setDate(t.getDate() + 1);
    start = new Date(open(t).getTime() + 10 * 60000); tomorrow = true;
  } else if (start < open(now)) {
    start = new Date(open(now).getTime() + 10 * 60000);
  }
  const mins = [0, 5, 10, 20, 35];
  return mins.map((m, i) => {
    const t = new Date(start.getTime() + m * 60000);
    const lbl = tomorrow ? (i === 0 ? 'завтра' : '') : (i === 0 ? `через ${Math.round((t - now) / 60000)} мин` : '');
    return { t, lbl };
  });
}
let slots = [];
function buildSlots() {
  slots = slotTimes();
  order.slot = Math.min(order.slot, slots.length - 1);
  slotsEl.innerHTML = slots.map((s, i) => `<button type="button" class="chip" role="radio" aria-checked="${i === order.slot}" data-i="${i}"><b>${hhmm(s.t)}</b>${s.lbl ? ` <span class="mono">${s.lbl}</span>` : ''}</button>`).join('');
}
slotsEl.addEventListener('click', (e) => {
  const b = e.target.closest('.chip'); if (!b) return;
  order.slot = +b.dataset.i;
  $$('.chip', slotsEl).forEach(x => x.setAttribute('aria-checked', String(x === b)));
  renderChek();
});

// Итог крутится по разрядам, как счётчик (21st, Number Ticker)
const total = $('#chek-total');
function tick(n) {
  const s = n.toLocaleString('ru-RU').replace(/\s/g, ' ');
  const cur = total.dataset.s || '';
  if (cur.length !== s.length) {
    total.innerHTML = s.split('').map(ch => ch === ' ' ? '<span class="s"></span>' : '<span class="d" style="--n:0"></span>').join('') + '<span class="r"></span>';
    void total.offsetWidth;
  }
  const ds = $$('.d', total);
  s.replace(/ /g, '').split('').forEach((ch, i) => ds[i] && ds[i].style.setProperty('--n', ch));
  total.dataset.s = s;
  total.setAttribute('aria-label', rub(n));
}

function renderChek() {
  const d = DRINKS[order.d];
  const [sz, szp] = d.sizes[order.size];
  const m = MILK.find(x => x[0] === order.milk);
  const lines = [[`${d.name}, ${sz}`, d.base + szp]];
  if (m && m[0] !== 'net') lines.push([`молоко ${m[1].toLowerCase()}`, m[2]]);
  $$('#chips-add .chip').forEach(c => { if (order.adds.has(c.dataset.a)) lines.push([c.firstChild.textContent.trim().toLowerCase(), +c.dataset.p]); });
  for (const [n, p] of order.bags) lines.push([`зерно: ${n}`, p]);
  $('.chek-drink').textContent = d.name;
  $('.chek-lines').innerHTML = lines.map(([n, p]) => `<li><span>${n}</span><span>${p ? rub(p) : '0 ₽'}</span></li>`).join('');
  const s = slots[order.slot];
  $('.chek-time').textContent = (s && s.lbl === 'завтра' ? 'завтра к ' : 'к ') + (s ? hhmm(s.t) : '');
  $('.chek-where').textContent = POINTS[order.point];
  const sum = lines.reduce((a, [, p]) => a + p, 0);
  tick(sum);
  $('#z-go').textContent = `Оплатить ${rub(sum)} и забрать`;
}
$('#z-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = $('.chek-ok');
  $('.ok-n', ok).textContent = 100 + Math.floor(Math.random() * 900);
  const s = slots[order.slot];
  $('.ok-t', ok).textContent = s ? hhmm(s.t) : '';
  $('.ok-name', ok).textContent = order.name || 'гостя';
  ok.hidden = false;
});
$('.ok-again').addEventListener('click', () => { $('.chek-ok').hidden = true; });

buildSlots();
buildDrink();
setInterval(() => { buildSlots(); renderChek(); }, 60000);
