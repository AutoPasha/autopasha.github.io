// Режиссёр страницы «Тона»: одна прядь на всю страницу, оттенки и переход по прокрутке.
import { createPryad, OTTENKI } from './pryad.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const PORTRAIT = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 9/10)');
const phone = () => PORTRAIT.matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const vh = () => innerHeight;
gsap.ticker.lagSmoothing(0);

const TEXT = {
  pesok: 'Тёплый и мягкий. Хорошо ложится на светло-русые волосы.',
  karamel: 'Самый частый выбор осенью. Добавляет волосам глубины.',
  kashtan: 'Глубокий и спокойный. Почти не требует коррекции.',
  med: 'Яркий и тёплый. Дольше держится, если мыть голову прохладной водой.',
  pepel: 'Холодный, с серебром. Нужен уход от желтизны.',
};
const conf = { ton: 'karamel', usl: 'Балаяж' };

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

// ---------- кадр ----------
const kadr = $('.kadr'), kf = $('.kadr-frame'), kt = $('.kadr-text');
function kadrStep() {
  const r = kadr.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp(-r.top / Math.max(1, r.height - vh()));
  const g = smooth(0, 0.62, p), ph = phone();
  kf.style.setProperty('--iy', lerp(ph ? 22 : 15, 0, g) + '%');
  kf.style.setProperty('--ix', lerp(ph ? 8 : 21, 0, g) + '%');
  kf.style.setProperty('--ir', lerp(32, 0, g) + 'px');
  kf.style.setProperty('--is', lerp(1.16, 1, g));
  const o = smooth(0.55, 0.78, p);
  kf.style.setProperty('--io', o); kt.style.setProperty('--io', o);
}

// ---------- запись ----------
const WD = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const SLOTS = ['10:00', '12:30', '15:00', '17:30', '19:00', '20:00'];
const days = $('.days'), slots = $('.slots'), today = new Date();
days.innerHTML = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today); d.setDate(today.getDate() + i);
  return `<button type="button" role="radio" aria-checked="${i === 1}" data-i="${i}">${i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : WD[d.getDay()]}<b>${d.getDate()}</b></button>`;
}).join('');
function renderSlots(i) {
  slots.innerHTML = SLOTS.map((t, k) => {
    const busy = ((i * 5 + k * 3) % 4 === 0) || (i === 0 && k < 3);
    return `<button type="button" role="radio" aria-checked="false" ${busy ? 'disabled aria-label="' + t + ', занято"' : ''}>${t}</button>`;
  }).join('');
  const free = $('.slots button:not(:disabled)'); if (free) free.setAttribute('aria-checked', 'true');
}
renderSlots(1);
const radio = (box, sel = 'button') => box.addEventListener('click', (e) => {
  const b = e.target.closest(sel); if (!b || b.disabled) return;
  $$(sel, box).forEach(x => x.setAttribute('aria-checked', x === b));
  if (box === days) renderSlots(+b.dataset.i);
});
radio(days); radio(slots); radio($('.masters'));
const zsum = () => { $('.z-sum').textContent = `${conf.usl} · ${OTTENKI[conf.ton].name}`; };
$$('[data-usl]').forEach(a => a.addEventListener('click', () => { conf.usl = a.dataset.usl; zsum(); }));

// ---------- прядь ----------
let pr = null;
try { pr = createPryad($('#pryad')); } catch (e) { document.body.classList.add('no3d'); }
requestAnimationFrame(() => document.body.classList.add('go'));
const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
const heroText = $('.hero-text');
const intro = { drop: reduce ? 0 : 0.35 };

let shown = 'karamel', userChose = false, sweepUntil = 0;
const sws = $$('.sw');
function showTon(id) {
  shown = id;
  sws.forEach(b => b.setAttribute('aria-checked', b.dataset.ton === id));
  $('.ton-name').textContent = OTTENKI[id].name; $('.ton-text').textContent = TEXT[id];
  if (pr) pr.setTon(id); sweepUntil = performance.now() + 1500;
}
sws.forEach(b => b.addEventListener('click', () => { userChose = true; conf.ton = b.dataset.ton; showTon(conf.ton); zsum(); }));

// переход: ползунок и граница; пока человек не тронул — показываем сами прокруткой
let blendUser = null, softV = 0.35;
const blendIn = $('#blend');
blendIn.addEventListener('input', () => { blendUser = +blendIn.value / 100; dirty = true; });
$$('.seg button').forEach(b => b.addEventListener('click', () => {
  $$('.seg button').forEach(x => x.setAttribute('aria-checked', x === b)); softV = +b.dataset.s; dirty = true;
}));

let lastY = scrollY, vel = 0;
const SC = {
  hero(p, st) {
    const ph = phone();
    st.bg = '#f3efe9'; st.blend = 0.55; st.soft = 0.35;
    st.rot = 0.25 - p * 0.9;
    const top = -0.14 - intro.drop;
    if (ph) { const y0 = clamp((heroText.getBoundingClientRect().bottom + scrollY) / vh(), 0.3, 0.7) - 0.02; st.rect = [0.18, y0 + 0.02 - intro.drop, 0.82, 1.1 - intro.drop]; }
    else st.rect = [0.5, top, 0.9, 1.02 - intro.drop];
  },
  ottenki(p, st) {
    const ph = phone();
    st.bg = '#f3efe9'; st.blend = 0.55; st.soft = 0.35; st.rot = -0.4 + p * 1.2;
    st.rect = ph ? [0.2, 0.27, 0.8, 0.66] : [0.52, -0.08, 0.9, 1.0];
    const ids = Object.keys(OTTENKI);
    const w = ids[Math.min(ids.length - 1, Math.floor(p * ids.length))];
    if (!userChose && w !== shown) showTon(w);
  },
  perehod(p, st) {
    const ph = phone();
    st.bg = '#14110f'; st.rot = 0.3 - p * 0.7;
    st.blend = blendUser ?? lerp(0.78, 0.25, smooth(0.08, 0.8, p));
    if (blendUser === null) blendIn.value = Math.round(st.blend * 100);
    st.soft = softV;
    st.rect = ph ? [0.24, 0.06, 0.76, 0.5] : [0.56, 0.07, 0.88, 0.96];
  },
};

let dirty = true, lastKey = '', active = null;
const LIGHT_DARK = $('.perehod');
function frame() {
  manStep(); kadrStep();
  { const r = LIGHT_DARK.getBoundingClientRect(); document.body.classList.toggle('on-dark', r.top < 52 && r.bottom > 52); }
  const dy = scrollY - lastY; lastY = scrollY;
  vel = vel * 0.86 + clamp(dy / 40, -1, 1) * 0.14;
  if (pr) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = s; }
    }
    if (best) {
      const p = best.name === 'hero' ? clamp(-best.el.getBoundingClientRect().top / vh()) : clamp(-best.el.getBoundingClientRect().top / Math.max(1, best.el.offsetHeight - vh()));
      SC[best.name](p, pr.st);
      const stage = best.el.querySelector('.stage');
      const shift = stage ? stage.getBoundingClientRect().top / vh() : -scrollY / vh();
      const r0 = pr.st.rect; pr.st.rect = [r0[0], r0[1] + shift, r0[2], r0[3] + shift];
      pr.st.sway = vel;
      if (best !== active) { active = best; dirty = true; if (best.name !== 'ottenki' && shown !== conf.ton) showTon(conf.ton); }
      const st = pr.st;
      const key = [st.rot, st.blend, st.soft, st.sway, st.rect.join(), st.bg, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(3) : x).join('|');
      if (dirty || key !== lastKey || performance.now() < sweepUntil) { pr.render(); lastKey = key; dirty = false; }
    }
  }
  requestAnimationFrame(frame);
}

zsum();
if (pr) {
  document.body.classList.add('ready');
  if (!reduce) gsap.to(intro, { drop: 0, duration: 2.4, ease: 'power3.out', delay: 0.1, onUpdate: () => (dirty = true) });
}
requestAnimationFrame(frame);
