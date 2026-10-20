// Режиссёр страницы: один стол на весь сайт, сцены по прокрутке.
import { createStol } from './stol.js';

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

// ---------- модели кухонь: названия, размеры и цены с их сайта ----------
const МОДЕЛИ = {
  dub:    { name: 'Софт Р',    text: 'Размер 3000 мм, столешница 38 мм. Оттенки: Белый софт, Серый эмалит.', price: 77420 },
  oreh:   { name: 'Волна',    text: 'Размер 3600 мм, столешница 28 мм. Оттенок: Белый софт.', price: 89300 },
  yasen:  { name: 'Интегра Т', text: 'Размер 3400 мм, столешница 28 мм. Оттенки: Белый софт, Серый эмалит.', price: 109300 },
  moreny: { name: 'Интрега Т', text: 'Размер 4100 мм, столешница 38 мм. Оттенок: Белый софт.', price: 114450 },
};

const conf = { L: 3.4, W: 0.95, model: 'dub', form: 'Прямая' };

// ---------- слова манифеста ----------
const man = $('[data-words]');
man.innerHTML = man.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
const words = $$('.w', man);

// ---------- плитки и прочее появление ----------
const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
$$('.tile').forEach(t => io.observe(t));

// ---------- карусель шагов ----------
const cards = $('.cards'), dots = $$('.dots i');
cards.addEventListener('scroll', () => {
  const c = $$('.card', cards); const w = c[0].getBoundingClientRect().width + 20;
  const i = clamp(Math.round(cards.scrollLeft / w), 0, c.length - 1);
  dots.forEach((d, k) => d.classList.toggle('on', k === i));
}, { passive: true });
$$('.arr').forEach(b => b.addEventListener('click', () => {
  const w = $('.card', cards).getBoundingClientRect().width + 20;
  cards.scrollBy({ left: w * +b.dataset.d, behavior: 'smooth' });
}));

// ---------- стол ----------
let stol = null;
try {
  stol = createStol($('#stol'));
} catch (e) {
  document.body.classList.add('no3d');
}
requestAnimationFrame(() => document.body.classList.add('go'));

const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
const vh = () => innerHeight;
function progress(el, pinned) {
  const r = el.getBoundingClientRect();
  if (!pinned) return clamp(-r.top / vh());
  return clamp(-r.top / Math.max(1, r.height - vh()));
}

// Вход: стол собирается сам, пока читают заголовок
const intro = { e: reduce ? 0 : 0.85, az: reduce ? 0 : 38, lift: reduce ? 0 : 1 };

// ---------- сцены ----------
const notes = $$('.note');
const svg = $('.leaders');
svg.innerHTML = notes.map(() => '<line/><circle r="4"/><circle class="ring" r="9"/>').join('');
const lines = $$('line', svg), dotsA = $$('circle:not(.ring)', svg), rings = $$('.ring', svg);
const dim = $('.dim'), dimVal = $('.dim-val');
let shown = 'dub', userChose = false;

const heroText = $('.hero-text');
function heroBottom() {
  const r = heroText.getBoundingClientRect();
  return clamp((r.bottom + scrollY) / vh(), 0.3, 0.7);
}

// Стол можно повернуть пальцем или мышью: вбок тянешь — крутится, вверх-вниз листается страница
const drag = { az: 0, scene: '' };
function bindDrag(el, name) {
  let x0 = null, a0 = 0;
  el.style.touchAction = 'pan-y';
  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, input, label') || (e.pointerType === 'mouse' && e.button !== 0)) return;
    x0 = e.clientX; a0 = drag.scene === name ? drag.az : 0; drag.scene = name;
    el.classList.add('grabbing');
  });
  addEventListener('pointermove', (e) => { if (x0 === null) return; drag.az = clamp(a0 + (e.clientX - x0) * 0.3, -160, 160); dirty = true; });
  const up = () => { x0 = null; el.classList.remove('grabbing'); };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
}
bindDrag($('.hero'), 'hero'); bindDrag($('.poroda .stage'), 'poroda'); bindDrag($('.razmer .stage'), 'razmer');
const dAz = (name) => (drag.scene === name ? drag.az : 0);

const SC = {
  hero(p, st) {
    const ph = phone();
    st.bg = '#f4f3f0'; st.shadow = 0.13; st.fitL = 0; st.zoom = 1; st.glow = 0; st.blob = 1;
    st.az = (ph ? 58 : 36) - 22 * p + intro.az + dAz('hero'); st.el = (ph ? 19 : 12) + 9 * p;
    st.explode = intro.e;
    const y0 = (heroBottom() + (ph ? 0.02 : 0.03)), lift = 0.04 * intro.lift;
    st.rect = ph ? [-0.02, y0 + lift, 1.02, 0.97 + lift] : [0.14, y0 + lift, 0.86, 0.99 + lift];
  },
  razbor(p, st) {
    const ph = phone();
    st.bg = '#0d0c0b'; st.shadow = 0; st.fitL = 0; st.zoom = 1; st.glow = 1; st.blob = 0.6;
    const e = smooth(0.12, 0.4, p) * (1 - smooth(0.8, 0.93, p));
    st.explode = e;
    st.az = ph ? lerp(58, 22, smooth(0, 0.95, p)) : lerp(36, -14, smooth(0, 0.95, p)); st.el = lerp(14, 24, smooth(0, 0.45, p));
    st.rect = ph ? [0.06, 0.3, 0.94, 0.7] : [0.4, 0.15, 0.95, 0.88];
    const shown = (i) => p > 0.38 + i * 0.1 && p < 0.82;
    notes.forEach((n, i) => {
      const on = ph ? (p > 0.38 + i * 0.1 && p < Math.min(0.82, 0.48 + i * 0.1)) : shown(i);
      n.classList.toggle('on', on);
      lines[i].style.opacity = dotsA[i].style.opacity = rings[i].style.opacity = on ? 1 : 0;
      if (ph && !(p > 0.38 && p < 0.82)) dotsA[i].style.opacity = rings[i].style.opacity = 0;
    });
    $('.razbor-end').classList.toggle('on', p > 0.88);
    $('.razbor-head').style.opacity = ph ? 1 - smooth(0.84, 0.88, p) : 1 - smooth(0.3, 0.37, p);
  },
  poroda(p, st) {
    const ph = phone();
    st.bg = '#efeeea'; st.shadow = 0.13; st.fitL = 0; st.explode = 0; st.zoom = 1; st.glow = 0; st.blob = 1;
    st.az = (ph ? lerp(62, 40, p) : lerp(42, 14, p)) + dAz('poroda'); st.el = lerp(24, 19, p);
    st.rect = ph ? [0.04, 0.33, 0.96, 0.6] : [0.1, 0.34, 0.9, 0.73];
    const ids = ['dub', 'oreh', 'yasen', 'moreny'];
    const w = ids[Math.min(3, Math.floor(p * 4))];
    if (!userChose && w !== shown) showModel(w);
  },
  razmer(p, st) {
    const ph = phone();
    st.bg = '#f4f3f0'; st.shadow = 0.13; st.explode = 0; st.fitL = 3.0; st.zoom = 1; st.glow = 0; st.blob = 1;
    st.az = (ph ? 26 : 12) + dAz('razmer'); st.el = ph ? 17 : 11;
    st.rect = ph ? [0.03, 0.36, 0.97, 0.64] : [0.1, 0.34, 0.9, 0.68];
  },
};

// ---------- модели ----------
const sws = $$('.sw');
// Показать модель на столе. Выбор человека (conf.model) меняет только нажатие на образец:
// прокрутка через раздел моделей их перебирает, но за его пределами стол снова «ваш».
function showModel(id) {
  shown = id;
  sws.forEach(b => b.setAttribute('aria-checked', b.dataset.model === id));
  const m = МОДЕЛИ[id];
  $('.wood-name').textContent = m.name;
  $('.wood-text').textContent = m.text;
  $('.wood-price').textContent = rub(m.price);
  if (stol) stol.setWood(id).then(() => (dirty = true));
  sweepUntil = performance.now() + 1300;
  renderOut();
}
sws.forEach(b => b.addEventListener('click', () => {
  userChose = true; conf.model = b.dataset.model; showModel(b.dataset.model);
}));

// ---------- размер ----------
const dl = $('#dlina');
function renderOut() {
  const L = conf.L;
  $('.o-mest').textContent = Math.round(L * 100);
  $('.o-mest-s').textContent = 'см по первой стороне';
  $('.o-cena').textContent = 'по замеру';
  $('.o-wood').textContent = 'точная цена кухни';
  dimVal.textContent = Math.round(L * 100) + ' см';
  dl.style.setProperty('--fill', ((L * 100 - +dl.min) / (+dl.max - +dl.min) * 100) + '%');
  $('.s-wood').textContent = МОДЕЛИ[conf.model].name;
  $('.s-size').textContent = `${Math.round(L * 100)} см`;
  $('.s-mest').textContent = conf.form;
  $('.s-cena').textContent = 'по замеру';
}
let sizeTween = null;
function setLen(L, anim) {
  conf.L = L;
  if (!stol) return renderOut();
  if (sizeTween) sizeTween.kill();
  if (!anim) { stol.setSize(L, conf.W); dl.value = Math.round(L * 100); renderOut(); dirty = true; return; }
  const o = { L: stol.size.L };
  sizeTween = gsap.to(o, { L, duration: 0.55, ease: 'power3.out', onUpdate: () => { stol.setSize(o.L, conf.W); dirty = true; } });
  renderOut();
}
dl.addEventListener('input', () => { demoDone = true; setLen(dl.value / 100, true); });
$$('.seg button').forEach(b => b.addEventListener('click', () => {
  $$('.seg button').forEach(x => x.setAttribute('aria-checked', x === b));
  conf.form = b.dataset.form; dirty = true; renderOut();
}));
let demoDone = false;
function demo() {
  if (demoDone || !stol || reduce) return; demoDone = true;
  const o = { L: 3.4 };
  gsap.timeline({ onUpdate: () => { stol.setSize(o.L, conf.W); conf.L = o.L; dl.value = Math.round(o.L * 100); renderOut(); dirty = true; } })
    .to(o, { L: 3.9, duration: 1.1, ease: 'power2.inOut', delay: 0.3 })
    .to(o, { L: 3.1, duration: 1.3, ease: 'power2.inOut' })
    .to(o, { L: 3.4, duration: 1.0, ease: 'power2.inOut', onComplete: () => { conf.L = 3.4; renderOut(); } });
}

// ---------- кадр ----------
const kadr = $('.kadr'), kf = $('.kadr-frame'), kt = $('.kadr-text');
function kadrStep() {
  const r = kadr.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp(-r.top / Math.max(1, r.height - vh()));
  const g = smooth(0.0, 0.62, p);
  const ph = phone();
  kf.style.setProperty('--iy', lerp(ph ? 22 : 15, 0, g) + '%');
  kf.style.setProperty('--ix', lerp(ph ? 8 : 21, 0, g) + '%');
  kf.style.setProperty('--ir', lerp(32, 0, g) + 'px');
  kf.style.setProperty('--is', lerp(1.16, 1.0, g));
  const o = smooth(0.55, 0.78, p);
  kf.style.setProperty('--io', o); kt.style.setProperty('--io', o);
}

// ---------- манифест ----------
function manStep() {
  const r = man.getBoundingClientRect();
  if (r.bottom < -50 || r.top > vh() + 50) return;
  // слово загорается, когда его строка поднялась до чтения: чуть выше середины экрана
  const line = vh() * 0.6;
  for (const w of words) { const b = w.getBoundingClientRect(); w.classList.toggle('on', b.top + b.height * 0.5 < line - (b.left / innerWidth) * vh() * 0.06); }
}

// ---------- снимок для заказа ----------
let snapAt = '';
const zakaz = $('#zakaz');
function snapStep() {
  if (!stol) return;
  const r = zakaz.getBoundingClientRect();
  if (r.top > vh() * 1.6 || r.bottom < 0) return;
  const key = `${conf.model}|${conf.L}|${conf.W}`;
  if (key === snapAt || performance.now() < sweepUntil) return;
  // холст сейчас закрыт плотными разделами: рисуем стол для заказа и сразу берём кадр
  const anyVisible = scenes.some(s => { const b = s.el.getBoundingClientRect(); return b.bottom > 0 && b.top < vh(); });
  if (anyVisible) return;
  snapAt = key;
  const st = stol.st;
  Object.assign(st, { bg: '#efeeea', shadow: 0.14, explode: 0, fitL: 0, zoom: 1, az: 32, el: 18, glow: 0, blob: 1 });
  const asp = innerWidth / innerHeight, box = 4 / 3;
  // вписать стол в середину кадра 4:3
  const fw = asp > box ? box / asp : 1, fh = asp > box ? 1 : asp / box;
  st.rect = [0.5 - fw * 0.42, 0.5 - fh * 0.36, 0.5 + fw * 0.42, 0.5 + fh * 0.36];
  stol.setSize(conf.L, conf.W);
  const url = stol.snapshot();
  const img = $('.zakaz-render');
  img.src = url; img.style.objectFit = 'cover';
  lastKey = '';
}

// ---------- кадр за кадром ----------
let dirty = true, lastKey = '', sweepUntil = 0, active = null;
const razborEl = $('.razbor');
function frame() {
  manStep(); kadrStep();
  { const r = razborEl.getBoundingClientRect(); document.body.classList.toggle('on-dark', r.top < 52 && r.bottom > 52); }
  if (stol) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = s; }
    }
    if (best) {
      const p = progress(best.el, best.name !== 'hero');
      SC[best.name](p, stol.st);
      // Стол едет вместе со своей сценой, пока она въезжает и уезжает: холст один на
      // всю страницу и стоит на месте, а сцена листается — без сдвига стол висел бы
      // в окне и налезал на заголовки соседней сцены.
      const stage = best.el.querySelector('.stage');
      const shift = stage ? stage.getBoundingClientRect().top / vh() : -scrollY / vh();
      const r0 = stol.st.rect;
      stol.st.rect = [r0[0], r0[1] + shift, r0[2], r0[3] + shift];
      if (best !== active) {
        active = best; drag.az = 0; drag.scene = '';
        if (best.name !== 'poroda' && shown !== conf.model) showModel(conf.model);

        if (best.name === 'razmer') { setLen(conf.L, false); }
        else if (stol.size.L !== 3.4 && best.name !== 'razmer') stol.setSize(3.4, 0.95);
        dirty = true;
      }
      if (best.name === 'razmer' && bestV > vh() * 0.6) demo();
      const st = stol.st;
      const key = [st.az, st.el, st.explode, st.rect.join(), st.bg, stol.size.L, stol.size.W, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (dirty || key !== lastKey || performance.now() < sweepUntil) {
        stol.render(); lastKey = key; dirty = false;
        if (best.name === 'razbor') placeNotes();
        if (best.name === 'razmer') placeDim(); else dim.classList.remove('on');
      }
    } else {
      document.body.classList.remove('on-dark');
      snapStep();
    }
  }
  requestAnimationFrame(frame);
}

// Подписи и размер живут внутри сцены, а точки стола считаются в окне: вычитаем сдвиг сцены
const stageTop = (sel) => $(sel + ' .stage').getBoundingClientRect().top;
function placeNotes() {
  const ph = phone();
  const off = stageTop('.razbor');
  const left = Math.max(24, innerWidth / 2 - 590), right = Math.min(innerWidth - 24, innerWidth / 2 + 590);
  const pts = notes.map(n => { const a = stol.project(n.dataset.a); return { x: a.x, y: a.y - off }; });
  // левый столбец: столешница, царга, ножки — каждая на высоте своей детали, без наложений
  let prevBottom = 80;
  notes.forEach((n, i) => {
    const a = pts[i];
    const side = n.dataset.side || 'l';
    const h = n.offsetHeight || 110;
    let x = side === 'l' ? left : right - 270;
    let y = clamp(a.y - 18, 80, innerHeight - h - 24);
    if (side === 'l') { y = Math.max(y, prevBottom + 18); prevBottom = y + h; }
    if (!ph) { n.style.left = x + 'px'; n.style.top = y + 'px'; }
    const l = lines[i];
    const tx = side === 'l' ? x + 270 + 12 : x - 12, ty = y + 14;
    l.setAttribute('x1', a.x); l.setAttribute('y1', a.y); l.setAttribute('x2', tx); l.setAttribute('y2', ty);
    dotsA[i].setAttribute('cx', a.x); dotsA[i].setAttribute('cy', a.y);
    rings[i].setAttribute('cx', a.x); rings[i].setAttribute('cy', a.y);
  });
}
function placeDim() {
  const off = stageTop('.razmer');
  const a = stol.project('start'), b = stol.project('end');
  a.y -= off; b.y -= off;
  const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x);
  dim.style.left = x0 + 'px'; dim.style.width = (x1 - x0) + 'px';
  dim.style.top = (Math.max(a.y, b.y) + 18) + 'px';
  dim.classList.add('on');
}

if (stol) {
  stol.ready.then(() => {
    document.body.classList.add('ready');
    renderOut();
    if (!reduce) {
      gsap.to(intro, { e: 0, duration: 2.1, ease: 'power3.inOut', delay: 0.15, onUpdate: () => (dirty = true) });
      gsap.to(intro, { az: 0, lift: 0, duration: 2.4, ease: 'power3.out', delay: 0.1, onUpdate: () => (dirty = true) });
    }
    // остальные породы — когда браузер свободен
    setTimeout(() => ['oreh', 'yasen', 'moreny'].forEach(id => stol.preload(id)), 2500);
  }).catch((e) => { console.error('stol', e); document.body.classList.add('no3d'); });
}
renderOut();
requestAnimationFrame(frame);
