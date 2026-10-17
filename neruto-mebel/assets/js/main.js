// Режиссёр страницы: один объект на весь сайт, сцены по прокрутке.
import { createStol, PORODY } from './stol.js';

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

// ---------- материалы и рассрочка ----------
const TEXT = {
  dub: 'Основа корпусной мебели: ровная плита под любой цвет фасада.',
  oreh: 'МДФ — для фасадов и корпусов, в плёнке и в пластике.',
  yasen: 'Фасады под шпоном: натуральная фактура дерева.',
  moreny: 'Фасады в эмали: гладкая поверхность и ровный цвет.',
};
// точную цену у них считает дизайнер после замера: на сайте от 50 000 ₽ за шкафы-купе
// и от 100 000 ₽ за гардеробные, калькулятора с формулой нет
const CENA_TEKST = 'Стоимость рассчитает дизайнер, выезд бесплатный';
const sklon = (n) => (n % 10 === 1 && n % 100 !== 11) ? 'месяц' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? 'месяца' : 'месяцев';

const conf = { L: 2.2, W: 0.95, wood: 'dub', M: 12, pay: 'Картой' };

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

// ---------- 3D-объект ----------
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
    if (!userChose && w !== shown) showWood(w);
  },
  razmer(p, st) {
    const ph = phone();
    st.bg = '#f4f3f0'; st.shadow = 0.13; st.explode = 0; st.fitL = 3.0; st.zoom = 1; st.glow = 0; st.blob = 1;
    st.az = (ph ? 26 : 12) + dAz('razmer'); st.el = ph ? 17 : 11;
    st.rect = ph ? [0.03, 0.36, 0.97, 0.64] : [0.1, 0.34, 0.9, 0.68];
  },
};

// ---------- материалы ----------
const sws = $$('.sw');
// Показать материал на изделии. Выбор человека (conf.wood) меняет только нажатие на образец:
// прокрутка через раздел материалов их перебирает, но за его пределами объект снова «ваш».
function showWood(id) {
  shown = id;
  sws.forEach(b => b.setAttribute('aria-checked', b.dataset.wood === id));
  $('.wood-name').textContent = PORODY[id].name;
  $('.wood-text').textContent = TEXT[id];
  $('.wood-price').textContent = CENA_TEKST;
  if (stol) stol.setWood(id).then(() => (dirty = true));
  sweepUntil = performance.now() + 1300;
  renderOut();
}
sws.forEach(b => b.addEventListener('click', () => {
  userChose = true; conf.wood = b.dataset.wood; showWood(b.dataset.wood);
}));

// ---------- рассрочка ----------
const dl = $('#dlina');
function renderOut() {
  const M = conf.M;
  $('.o-mest').textContent = M; $('.o-mest-s').textContent = sklon(M);
  $('.o-cena').textContent = '0%'; $('.o-wood').textContent = 'переплат';
  dimVal.textContent = M + ' мес.';
  dl.style.setProperty('--fill', ((M - 3) / 9 * 100) + '%');
  $('.s-mest').textContent = `${M} ${sklon(M)}, 0%`;
  $('.s-oplata').textContent = conf.pay;
}
let sizeTween = null;
function setLen(L, anim) {
  conf.L = L;
  if (!stol) return renderOut();
  if (sizeTween) sizeTween.kill();
  if (!anim) { stol.setSize(L, conf.W); dirty = true; return; }
  const o = { L: stol.size.L };
  sizeTween = gsap.to(o, { L, duration: 0.55, ease: 'power3.out', onUpdate: () => { stol.setSize(o.L, conf.W); dirty = true; } });
}
dl.addEventListener('input', () => { conf.M = +dl.value; renderOut(); });
$$('.seg button').forEach(b => b.addEventListener('click', () => {
  $$('.seg button').forEach(x => x.setAttribute('aria-checked', x === b));
  conf.pay = b.dataset.pay; renderOut();
}));
let demoDone = false;
function demo() {
  if (demoDone || !stol || reduce) return; demoDone = true;
  const o = { L: 2.2 };
  gsap.timeline({ onUpdate: () => { stol.setSize(o.L, conf.W); dirty = true; } })
    .to(o, { L: 2.9, duration: 1.1, ease: 'power2.inOut', delay: 0.3 })
    .to(o, { L: 1.6, duration: 1.3, ease: 'power2.inOut' })
    .to(o, { L: 2.2, duration: 1.0, ease: 'power2.inOut' });
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
  const key = `${conf.wood}|${conf.L}|${conf.W}`;
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
  img.alt = '3D-модель корпусной мебели Неруто';
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
        if (best.name !== 'poroda' && shown !== conf.wood) showWood(conf.wood);

        if (best.name !== 'razmer' && stol.size.L !== 2.2) stol.setSize(2.2, 0.95);
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
    // остальные материалы — когда браузер свободен
    setTimeout(() => ['oreh', 'yasen', 'moreny'].forEach(id => stol.preload(id)), 2500);
  }).catch((e) => { console.error('stol', e); document.body.classList.add('no3d'); });
}
renderOut();
requestAnimationFrame(frame);

// ---------- открыто сейчас ----------
// салон на Чайковского: Пн—Пт 10:00–19:00, Екатеринбург (Europe/Moscow)
const status = $('#foot-status');
if (status) {
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Moscow', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  const poka = () => {
    const p = Object.fromEntries(fmt.formatToParts(new Date()).map(x => [x.type, x.value]));
    const den = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[p.weekday];
    const min = +p.hour * 60 + +p.minute;
    status.textContent = (den >= 1 && den <= 5 && min >= 600 && min < 1140) ? 'Открыто сейчас' : 'Сейчас закрыто';
  };
  poka();
  setInterval(poka, 60000);
}
