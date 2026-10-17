// Режиссёр страницы «Авто Мото GPi»: одно колесо на всю страницу, сцены по прокрутке,
// смета по их ценам, отчёт по работам и запись на время.
import { createKoleso } from './koleso.js';

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
const rub = (n) => n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽';
const vh = () => innerHeight;

// ---------- смета ----------
// Цены на странице — ровно те, что опубликованы на сайте Авто Мото GPi:
// GNV DOT 4, Motul DOT 3&4 и Motul DOT 5.1. Стоимость работ, химии и
// расходников сервис называет после осмотра — цифры оттуда не выдумываем.
const ZH = {
  gnv: ['GNV DOT 4, ~1 л', 750], m34: ['Motul DOT 3&4, ~1 л', 1900], m51: ['Motul DOT 5.1, ~1 л', 2000],
};
const USL = {
  to:   { k: 'ТО и расходники', r: 'Техническое обслуживание',    p: null, h: 'уточним после записи' },
  dvsc: { k: 'Масло ДВС',       r: 'Замена масла ДВС',             p: null, h: 'уточним после записи' },
  akpp: { k: 'Масло АКПП',      r: 'Аппаратная замена масла АКПП', p: null, h: 'уточним после записи' },
  af:   { k: 'Антифриз',        r: 'Аппаратная замена антифриза',  p: null, h: 'уточним после записи' },
  ac:   { k: 'Кондиционер',     r: 'Заправка кондиционера',       p: null, h: 'около часа' },
  dpf:  { k: 'Очистка DPF',     r: 'Работа по очистке DPF',       p: null, h: 'от двух часов' },
};
const HIM = ['Промывочная химия Motul', null], FIL = ['Фильтр салона', null], DEZ = ['Дезинфекция салона', null];
const BAK = 'по осмотру';
const conf = { work: 'ac', fluid: 'no', chem: 'no', parts: 'no' };
function smeta() {
  const u = USL[conf.work], rows = [[u.r, u.p, u.p ? (conf.work === 'ac' ? '≈ ' : 'от ') : null]];
  if (conf.work === 'dpf' && conf.chem === 'him') rows.push([HIM[0], HIM[1], '≈ ']);
  if (ZH[conf.fluid] && conf.work !== 'ac' && conf.work !== 'dpf') rows.push([ZH[conf.fluid][0], ZH[conf.fluid][1], '']);
  if (conf.parts !== 'no') rows.push([FIL[0], FIL[1], 'от ']);
  if (conf.parts === 'filterdez') rows.push([DEZ[0], DEZ[1], 'от ']);
  const sum = rows.reduce((a, r) => a + (r[1] || 0), 0);
  return { k: u.k, rows, sum, h: u.h, ot: rows.some((r) => r[2] === 'от '), z: !rows.some((r) => !r[1]) };
}
let shownSum = 0, sumTw = null;
function renderSmeta() {
  const s = smeta(), sum = s.ot ? 'от ' : '';
  $('.chek-car').textContent = s.k;
  $('.chek-rows').innerHTML = s.rows.map(([t, v, q]) => `<li><span>${t}</span><b>${v ? q + rub(v) : BAK}</b></li>`).join('');
  $('.chek-h').textContent = s.h;
  if (sumTw) { sumTw.kill(); sumTw = null; }          // старый счёт не должен дописывать в новую смету
  if (!s.z) { shownSum = 0; $('.chek-sum').textContent = BAK; $('.z-sum').textContent = `${s.k} · ${BAK}`; return; }
  const o = { v: shownSum };
  sumTw = gsap.to(o, { v: s.sum, duration: reduce ? 0 : 0.6, ease: 'power2.out', onUpdate: () => { $('.chek-sum').textContent = sum + rub(Math.round(o.v / 10) * 10); } });
  shownSum = s.sum;
  $('.z-sum').textContent = `${s.k} · ${sum}${rub(s.sum)}`;
}
$$('.chips').forEach(g => g.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  $$('button', g).forEach(x => x.setAttribute('aria-checked', x === b));
  conf[g.dataset.k] = b.dataset.v;
  renderSmeta();
}));

// ---------- запись: семь дней и окна ----------
const WD = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const SLOTS = ['9:00', '10:30', '12:00', '13:30', '15:00', '16:30'];
const days = $('.days'), slots = $('.slots');
const today = new Date();
days.innerHTML = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today); d.setDate(today.getDate() + i);
  const top = i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : WD[d.getDay()];
  return `<button type="button" role="radio" aria-checked="${i === 1}" data-i="${i}">${top}<b>${d.getDate()}</b></button>`;
}).join('');
function renderSlots(i) {
  slots.innerHTML = SLOTS.map((t, k) => {
    const busy = ((i * 7 + k * 3) % 5 === 0) || (i === 0 && k < 3);
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

// ---------- переписка мастера ----------
const hod = $('.hod'), msgs = $$('.msg');
function hodStep() {
  const r = hod.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp(-r.top / Math.max(1, r.height - vh()));
  const n = clamp(1 + Math.floor(p * (msgs.length + 0.2)), 1, msgs.length);
  msgs.forEach((m, i) => m.classList.toggle('on', i < n));
}

// ---------- колесо ----------
let kol = null;
try { kol = createKoleso($('#koleso')); } catch (e) { document.body.classList.add('no3d'); }
requestAnimationFrame(() => document.body.classList.add('go'));
const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
const intro = { x: reduce ? 0 : 0.62, spin: reduce ? 0 : -7.5 };
const heroText = $('.hero-text');
const heroBottom = () => clamp((heroText.getBoundingClientRect().bottom + scrollY) / vh(), 0.3, 0.7);

const notes = $$('.note'), svg = $('.leaders');
svg.innerHTML = notes.map(() => '<line/><circle r="4"/><circle class="ring" r="9"/>').join('');
const lines = $$('line', svg), dotsA = $$('circle:not(.ring)', svg), rings = $$('.ring', svg);

const drag = { az: 0, scene: '' };
function bindDrag(el, name) {
  let x0 = null, a0 = 0;
  el.style.touchAction = 'pan-y';
  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, input, label') || (e.pointerType === 'mouse' && e.button !== 0)) return;
    x0 = e.clientX; a0 = drag.scene === name ? drag.az : 0; drag.scene = name; el.classList.add('grabbing');
  });
  addEventListener('pointermove', (e) => { if (x0 === null) return; drag.az = clamp(a0 + (e.clientX - x0) * 0.3, -150, 150); dirty = true; });
  const up = () => { x0 = null; el.classList.remove('grabbing'); };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
}
bindDrag($('.hero'), 'hero'); bindDrag($('.razbor .stage'), 'razbor');
const dAz = (n) => (drag.scene === n ? drag.az : 0);

const SC = {
  hero(p, st) {
    const ph = phone();
    st.bg = '#0a0a0b'; st.explode = 0; st.zoom = 1; st.focus = '';
    st.az = (ph ? 30 : 24) - 16 * p + dAz('hero'); st.el = 5 + 4 * p;
    st.spin = intro.spin + p * 2.2;
    const y0 = heroBottom() + 0.02, x = intro.x;
    st.rect = ph ? [0.06 + x, y0, 0.94 + x, 1.04] : [0.2 + x, y0, 0.8 + x, 1.14];
  },
  razbor(p, st) {
    const ph = phone();
    st.bg = '#0a0a0b'; st.zoom = 1;
    st.explode = smooth(0.1, 0.42, p) * (1 - smooth(0.82, 0.94, p));
    st.az = lerp(24, ph ? 70 : 78, smooth(0.02, 0.45, p)) - 46 * smooth(0.82, 0.98, p) + dAz('razbor');
    st.el = lerp(5, 14, smooth(0, 0.45, p));
    st.spin = 2.2 + p * 1.2;
    st.rect = ph ? [0.06, 0.3, 0.94, 0.7] : [0.4, 0.12, 0.96, 0.9];
    let last = '';
    notes.forEach((n, i) => {
      const on = ph ? (p > 0.38 + i * 0.12 && p < Math.min(0.82, 0.5 + i * 0.12)) : (p > 0.38 + i * 0.12 && p < 0.82);
      n.classList.toggle('on', on);
      if (on) last = n.dataset.f;
      lines[i].style.opacity = dotsA[i].style.opacity = rings[i].style.opacity = on ? 1 : 0;
    });
    st.focus = last;
    $('.razbor-end').classList.toggle('on', p > 0.88);
    $('.razbor-head').style.opacity = ph ? 1 - smooth(0.84, 0.88, p) : 1 - smooth(0.3, 0.37, p);
  },
};

const stageTop = (sel) => $(sel + ' .stage').getBoundingClientRect().top;
function placeNotes() {
  const ph = phone();
  const off = stageTop('.razbor');
  const left = Math.max(24, innerWidth / 2 - 590), right = Math.min(innerWidth - 24, innerWidth / 2 + 590);
  let prevBottom = 80;
  notes.forEach((n, i) => {
    const a0 = kol.project(n.dataset.a), a = { x: a0.x, y: a0.y - off };
    const side = n.dataset.side || 'l', h = n.offsetHeight || 110;
    const x = side === 'l' ? left : right - 270;
    let y = clamp(a.y - 18, 80, innerHeight - h - 24);
    if (side === 'l') { y = Math.max(y, prevBottom + 18); prevBottom = y + h; }
    if (!ph) { n.style.left = x + 'px'; n.style.top = y + 'px'; }
    const tx = side === 'l' ? x + 282 : x - 12;
    lines[i].setAttribute('x1', a.x); lines[i].setAttribute('y1', a.y); lines[i].setAttribute('x2', tx); lines[i].setAttribute('y2', y + 14);
    dotsA[i].setAttribute('cx', a.x); dotsA[i].setAttribute('cy', a.y);
    rings[i].setAttribute('cx', a.x); rings[i].setAttribute('cy', a.y);
  });
}

const LIGHT = $$('.smeta, .hod, .bento, .zapis, .foot');
let dirty = true, lastKey = '', active = null;
function frame() {
  manStep(); hodStep();
  document.body.classList.toggle('on-light', LIGHT.some(el => { const r = el.getBoundingClientRect(); return r.top < 52 && r.bottom > 52; }));
  if (kol) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = s; }
    }
    if (best) {
      const p = best.name === 'hero' ? clamp(-best.el.getBoundingClientRect().top / vh()) : clamp(-best.el.getBoundingClientRect().top / Math.max(1, best.el.offsetHeight - vh()));
      SC[best.name](p, kol.st);
      const stage = best.el.querySelector('.stage');
      const shift = stage ? stage.getBoundingClientRect().top / vh() : -scrollY / vh();
      const r0 = kol.st.rect; kol.st.rect = [r0[0], r0[1] + shift, r0[2], r0[3] + shift];
      if (best !== active) { active = best; drag.az = 0; drag.scene = ''; dirty = true; }
      const st = kol.st;
      const key = [st.az, st.el, st.explode, st.spin, st.rect.join(), st.focus, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (dirty || key !== lastKey) {
        kol.render(); lastKey = key; dirty = false;
        if (best.name === 'razbor') placeNotes();
      }
    }
  }
  requestAnimationFrame(frame);
}

renderSmeta();
if (kol) {
  document.body.classList.add('ready');
  if (!reduce) gsap.to(intro, { x: 0, spin: 0, duration: 2.2, ease: 'power3.out', delay: 0.15, onUpdate: () => (dirty = true) });
}
requestAnimationFrame(frame);
