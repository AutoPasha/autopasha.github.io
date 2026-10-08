(() => {
'use strict';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
if (reduced.matches || !window.gsap || !window.ScrollTrigger) return;
gsap.registerPlugin(ScrollTrigger);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NS = 'http://www.w3.org/2000/svg';
const mk = (tag, attrs, parent) => {
  const el = document.createElementNS(NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  if (parent) parent.append(el);
  return el;
};
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeIn = gsap.parseEase('power2.in');
const easeOut = gsap.parseEase('power3.out');
const fine = matchMedia('(pointer: fine)').matches;
const isPhone = () => innerWidth <= 760;

// Лепестки: каждый — область за дугой, которая касается окружности радиуса r.
// Дуга выгнута наружу, поэтому отверстие выходит скруглённым многоугольником,
// а кромка соседнего лепестка ложится сверху тонким бликом.
function buildBlades(group, n) {
  const list = [];
  for (let i = 0; i < n; i++) {
    const g = mk('g', {}, group);
    list.push({ g, fill: mk('path', { class: 'blade' }, g), rim: mk('path', { class: 'blade-rim' }, g), base: i * 360 / n });
  }
  return list;
}
function shapeBlades(list, D) {
  const Rc = D * 1.6, L = D * 1.45, yL = Rc - Math.sqrt(Rc * Rc - L * L), H = D * 3.2;
  const edge = `M ${-L} ${yL} A ${Rc} ${Rc} 0 0 1 ${L} ${yL}`;
  list.forEach(b => {
    b.fill.setAttribute('d', `${edge} L ${L} ${H} L ${-L} ${H} Z`);
    b.rim.setAttribute('d', edge);
  });
}
// Повторное значение не пишем: лишняя запись атрибута перерисовывает весь слой.
function setBlades(list, r, twist) {
  const key = `${r.toFixed(1)}|${twist.toFixed(2)}`;
  if (list.key === key) return;
  list.key = key;
  list.forEach(b => b.g.setAttribute('transform', `rotate(${(b.base + twist).toFixed(2)}) translate(0 ${r.toFixed(1)})`));
}

// ---------- Акт 1: видоискатель ----------
const act = $('.lens-act'), stage = $('.stage');
const frames = $$('.frame'), imgs = frames.map(f => $('img', f));
const copies = $$('.copy');
const tabs = $$('.seasons button');
const names = ['осень', 'зима', 'весна', 'лето'];
const irisSvg = $('#iris'), hudSvg = $('#hud'), dial = $('#dial'), dialSvg = $('#dial-svg');
const blades = buildBlades($('#blades'), 7);
let W = 0, H = 0, Ropen = 0;

// Заголовок режем на буквы руками: каждая уходит вниз и приходит снизу.
copies.forEach(c => $$('.ln', c).forEach(ln => {
  const walk = node => [...node.childNodes].forEach(ch => {
    if (ch.nodeType === 3) {
      const frag = document.createDocumentFragment();
      [...ch.textContent].forEach(s => {
        if (s === ' ') { frag.append(' '); return; }
        const sp = document.createElement('span'); sp.className = 'ch'; sp.textContent = s; frag.append(sp);
      });
      ch.replaceWith(frag);
    } else walk(ch);
  });
  walk(ln);
}));
const chars = copies.map(c => $$('.ch', c));
const extras = copies.map(c => [$('.kicker', c), $('.plate', c)]);
gsap.set(chars.flat(), { yPercent: 115 });
gsap.set(extras.flat(), { opacity: 0, y: 14 });

let shown = -1;
function showCopy(k) {
  if (k === shown) return;
  const prev = shown; shown = k;
  if (prev >= 0) {
    gsap.killTweensOf(chars[prev]); gsap.killTweensOf(extras[prev]);
    gsap.to(chars[prev], { yPercent: 115, duration: .42, stagger: .018, ease: 'power2.in' });
    gsap.to(extras[prev], { opacity: 0, y: 10, duration: .3, ease: 'power1.in', onComplete: () => { if (shown !== prev) copies[prev].classList.remove('is-on'); } });
  }
  if (k >= 0) {
    copies[k].classList.add('is-on');
    gsap.killTweensOf(chars[k]); gsap.killTweensOf(extras[k]);
    gsap.to(chars[k], { yPercent: 0, duration: .95, stagger: .04, ease: 'expo.out', delay: .06 });
    gsap.to(extras[k], { opacity: 1, y: 0, duration: .8, stagger: .14, ease: 'power3.out', delay: .28 });
  }
}

// Шкала объектива и кольца видоискателя по центру кадра.
const rings = $('#hud-rings'), scale = $('#hud-scale');
function buildHud() {
  rings.textContent = ''; scale.textContent = '';
  const m = Math.min(W, H), ph = isPhone(), r1 = m * (ph ? .41 : .29), r2 = m * (ph ? .475 : .43), r3 = Math.hypot(W, H) * .52;
  stage.style.setProperty('--ring', `${r2}px`);
  stage.style.setProperty('--dial', `${2 * r2 + 40}px`);
  dialSvg.setAttribute('viewBox', `${-r2 - 20} ${-r2 - 20} ${2 * r2 + 40} ${2 * r2 + 40}`);
  mk('circle', { r: r1 }, rings);
  mk('circle', { r: r2 }, rings);
  mk('circle', { r: r3, class: 'far' }, rings);
  [[0, -r1], [0, r1], [-r2, 0], [r2, 0]].forEach(([x, y]) => mk('circle', { cx: x, cy: y, r: 3.2, class: 'dot' }, rings));
  const ticks = isPhone() ? 72 : 120;
  for (let i = 0; i < ticks; i++) {
    const a = i / ticks * Math.PI * 2, major = i % (ticks / 12) === 0, len = major ? 14 : 6;
    mk('line', { x1: Math.sin(a) * (r2 - len), y1: -Math.cos(a) * (r2 - len), x2: Math.sin(a) * r2, y2: -Math.cos(a) * r2, class: major ? 'major' : '' }, scale);
  }
  ['1.4', '2', '2.8', '4', '5.6', '8', '11', '16'].forEach((f, i) => {
    const a = (i * 45 + 22.5) * Math.PI / 180, rr = r2 - 30;
    const t = mk('text', { x: Math.sin(a) * rr, y: -Math.cos(a) * rr + 4, 'text-anchor': 'middle' }, scale);
    t.textContent = `f/${f}`;
  });
}
function layoutStage() {
  W = stage.offsetWidth; H = stage.offsetHeight;
  const box = `${-W / 2} ${-H / 2} ${W} ${H}`;
  irisSvg.setAttribute('viewBox', box); hudSvg.setAttribute('viewBox', box);
  const D = Math.hypot(W, H) / 2 + 30;
  Ropen = D + 4;
  shapeBlades(blades, D);
  buildHud();
}
layoutStage();

const S = { p: 0 }, intro = { v: 1 }, blink = { v: 0 }, outro = { v: 0 };
const A = .28, B = .46, C = .5, E = .66;
let cur = 0;
function closure(l) {
  if (l < A) return 0;
  if (l < B) return easeIn((l - A) / (B - A));
  if (l < C) return 1;
  if (l < E) return 1 - easeOut((l - C) / (E - C));
  return 0;
}
function frameScale(k, P) {
  const openEnd = k === 0 ? 0 : k - 1 + E, closeStart = k === 3 ? 3 : k + A;
  if (k > 0 && P < openEnd) return 1.26 - .18 * easeOut(clamp((P - (k - 1 + C)) / (E - C)));
  return 1.08 - .06 * clamp((P - openEnd) / (closeStart - openEnd)) + (k === 0 ? .2 * intro.v : 0);
}
let reel = -1; // кадр, который показывает вступление; -1 — кадр ведёт прокрутка
function render() {
  const P = S.p, step = Math.min(Math.floor(P), 2), l = P - step;
  const k = reel >= 0 ? reel : step + (l >= (B + C) / 2 ? 1 : 0);
  const t = Math.max(closure(l), intro.v, outro.v, P < .04 ? blink.v : 0);
  setBlades(blades, Ropen * (1 - t), 34 * t);
  if (k !== cur) {
    frames[cur].classList.remove('is-on'); frames[k].classList.add('is-on');
    tabs[cur].classList.remove('is-on'); tabs[k].classList.add('is-on');
    $('#counter-name').textContent = names[k]; $('#counter-num').textContent = k + 1;
    cur = k;
  }
  imgs[k].style.transform = `scale(${frameScale(k, P).toFixed(4)})`;
  dial.style.transform = `rotate(${(P * 26).toFixed(2)}deg)`;
  showCopy(t < .16 && reel < 0 ? k : -1);
}
const lensTween = gsap.to(S, { p: 3, ease: 'none', onUpdate: () => { if (S.p > .02 && reel >= 0) stopReel(); render(); },
  scrollTrigger: { trigger: act, start: 'top top', end: 'bottom bottom', scrub: .6, invalidateOnRefresh: true } });
render();
// Выход: сцена уезжает вверх, а лепестки смыкаются, и страница входит в тёмный акт без шва.
gsap.to(outro, { v: 1, ease: 'power1.in', onUpdate: render,
  scrollTrigger: { trigger: act, start: 'bottom bottom', end: 'bottom 15%', scrub: .5 } });
// Вступление: объектив щёлкает по сезонам от лета к осени, как пробная серия кадров,
// и останавливается на осени с заголовком. Гость начал листать — серия обрывается.
const reelTl = gsap.timeline({ delay: .25, onUpdate: render, onComplete: () => { reel = -1; render(); } });
reel = 3;
[3, 2, 1].forEach(f => {
  reelTl.add(() => { reel = f; render(); })
    .to(intro, { v: 0, duration: .5, ease: 'power3.out' })
    .to(intro, { v: 1, duration: .34, ease: 'power2.in' }, '+=.38');
});
reelTl.add(() => { reel = 0; render(); }).to(intro, { v: 0, duration: 1.1, ease: 'power3.out' });
reelTl.add(() => { reel = -1; render(); }, '-=.55');
function stopReel() {
  if (!reelTl.isActive() && reel < 0) return;
  reelTl.kill(); reel = -1;
  gsap.to(intro, { v: 0, duration: .5, ease: 'power3.out', onUpdate: render });
  removeEventListener('wheel', stopReel); removeEventListener('touchstart', stopReel); removeEventListener('keydown', stopReel);
}
addEventListener('wheel', stopReel, { passive: true });
addEventListener('touchstart', stopReel, { passive: true });
addEventListener('keydown', stopReel);
// Пока гость стоит на первом кадре, объектив чуть дышит и шкала плывёт.
gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 5.5 })
  .to(blink, { v: .09, duration: .55, ease: 'sine.inOut', onUpdate: render })
  .to(blink, { v: 0, duration: .8, ease: 'sine.inOut', onUpdate: render });

function goTo(k) {
  const st = lensTween.scrollTrigger;
  const P = k === 0 ? 0 : k - 1 + E + .1;
  scrollTo({ top: st.start + (st.end - st.start) * P / 3, behavior: 'smooth' });
}
tabs.forEach(b => b.addEventListener('click', () => goTo(+b.dataset.k)));
$('.nav-arrow.prev').addEventListener('click', () => goTo(Math.max(0, cur - 1)));
$('.nav-arrow.next').addEventListener('click', () => {
  if (cur < 3) goTo(cur + 1);
  else scrollTo({ top: $('#kitchen').getBoundingClientRect().top + scrollY, behavior: 'smooth' });
});

if (fine) {
  const fx = gsap.quickTo('#frames', 'x', { duration: .9, ease: 'power3' }), fy = gsap.quickTo('#frames', 'y', { duration: .9, ease: 'power3' });
  const ix = gsap.quickTo('.iris, .hud', 'x', { duration: 1.1, ease: 'power3' }), iy = gsap.quickTo('.iris, .hud', 'y', { duration: 1.1, ease: 'power3' });
  stage.addEventListener('pointermove', e => {
    const dx = e.clientX / innerWidth - .5, dy = e.clientY / innerHeight - .5;
    fx(dx * -24); fy(dy * -24); ix(dx * 12); iy(dy * 12);
  });
  stage.addEventListener('pointerleave', () => { fx(0); fy(0); ix(0); iy(0); });
}

// ---------- Акт 2: почерк ----------
const lit = $('.lit');
(function splitWords(node) {
  [...node.childNodes].forEach(ch => {
    if (ch.nodeType !== 3) return splitWords(ch);
    const frag = document.createDocumentFragment();
    ch.textContent.split(' ').forEach((w, i, arr) => {
      if (w) { const s = document.createElement('span'); s.className = 'w'; s.textContent = w; frag.append(s); }
      if (i < arr.length - 1) frag.append(' ');
    });
    ch.replaceWith(frag);
  });
})(lit);
gsap.fromTo($$('.w', lit), { opacity: .14 }, { opacity: 1, stagger: .1, ease: 'none',
  scrollTrigger: { trigger: lit, start: 'top 84%', end: 'bottom 46%', scrub: .5 } });

$$('.curtain').forEach(el => {
  const cover = document.createElement('div'); cover.className = 'cover'; el.append(cover);
  gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%', once: true } })
    .to(cover, { scaleY: 0, duration: 1.25, ease: 'expo.inOut' })
    .fromTo($('img', el), { scale: 1.3 }, { scale: 1, duration: 1.6, ease: 'expo.out' }, .1);
});
// Цифры поднимаются по очереди, но всегда с настоящим значением: счётчик посреди хода показывал бы «0 человек».
gsap.fromTo('.facts-line b', { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, stagger: .16, ease: 'expo.out',
  scrollTrigger: { trigger: '.facts-line', start: 'top 82%', once: true } });

// ---------- Акт 3: печь ----------
const oven = $('.oven'), ovenImg = $('.oven-window img'), ovenDark = $('.oven-dark');
const ovenTime = $('#oven-time'), ovenBar = $('#oven-bar');
const O = { q: 0 };
function renderOven() {
  const q = O.q;
  ovenDark.style.opacity = (.5 * (1 - easeOut(q))).toFixed(3);
  ovenImg.style.transform = `scale(${(1.18 - .18 * q).toFixed(4)})`;
  ovenBar.style.transform = `scaleX(${q.toFixed(4)})`;
  const m = 600 + Math.round(q * 120);
  ovenTime.textContent = `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
}
gsap.to(O, { q: 1, ease: 'none', onUpdate: renderOven, scrollTrigger: { trigger: oven, start: 'top top', end: 'bottom bottom', scrub: .5 } });
renderOven();

// Искры: тёплые точки поднимаются из печи, их больше, чем жарче.
const cv = $('#sparks'), ctx = cv.getContext('2d');
let cw = 0, chh = 0, dpr = 1, running = false;
const sparks = [];
function sizeSparks() {
  dpr = Math.min(devicePixelRatio || 1, 1.5);
  cw = cv.offsetWidth; chh = cv.offsetHeight;
  cv.width = Math.round(cw * dpr); cv.height = Math.round(chh * dpr);
}
function spawn(s) {
  s.x = cw * (.38 + Math.random() * .5); s.y = chh * (.72 + Math.random() * .3);
  s.vy = -(.5 + Math.random() * 1.8) * chh / 700; s.vx = (Math.random() - .5) * .6;
  s.life = 0; s.max = 90 + Math.random() * 120; s.r = .8 + Math.random() * 1.9; s.ph = Math.random() * 6;
  return s;
}
for (let i = 0; i < 110; i++) sparks.push(spawn({}));
function drawSparks() {
  if (!running) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cw, chh);
  ctx.globalCompositeOperation = 'lighter';
  const live = Math.round(8 + 102 * O.q);
  for (let i = 0; i < live; i++) {
    const s = sparks[i];
    s.life++; s.y += s.vy; s.x += s.vx + Math.sin((s.life + s.ph * 20) / 14) * .35;
    if (s.life > s.max || s.y < -10) spawn(s);
    const a = Math.sin(Math.PI * s.life / s.max) * (.35 + .65 * O.q);
    ctx.fillStyle = `rgba(255,${150 + (s.ph * 12 | 0)},80,${a.toFixed(3)})`;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
  }
  requestAnimationFrame(drawSparks);
}
sizeSparks();
ScrollTrigger.create({ trigger: oven, start: 'top bottom', end: 'bottom top',
  onToggle: self => { running = self.isActive; if (running) requestAnimationFrame(drawSparks); } });

// ---------- Акт 4: меню разворотами ----------
// Окно с фото и сама картинка едут с разной скоростью: два слоя глубины.
$$('.spread .win').forEach((win, i) => {
  const st = { trigger: win, start: 'top bottom', end: 'bottom top', scrub: .8 };
  gsap.fromTo(win, { yPercent: 10, rotation: i % 2 ? 3 : -2 }, { yPercent: -10, rotation: 0, ease: 'none', scrollTrigger: st });
  gsap.fromTo($('img', win), { yPercent: -8, scale: 1.18 }, { yPercent: 8, scale: 1.08, ease: 'none', scrollTrigger: { ...st } });
});
gsap.fromTo('.big-price', { xPercent: 12 }, { xPercent: -18, ease: 'none',
  scrollTrigger: { trigger: '.spread-b', start: 'top bottom', end: 'bottom top', scrub: 1 } });
gsap.fromTo('.band img', { scale: 1.25, yPercent: -4 }, { scale: 1, yPercent: 4, ease: 'none',
  scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: .8 } });
gsap.fromTo('.tag-c', { yPercent: 40 }, { yPercent: 0, ease: 'none',
  scrollTrigger: { trigger: '.spread-c', start: 'top 80%', end: 'bottom 70%', scrub: .8 } });
// Строки цитат поднимаются из-под линии, каждая со своей задержкой.
$$('.quote').forEach(q => {
  const inner = $$('.ln', q).map(ln => { const sp = document.createElement('span'); sp.style.display = 'block'; while (ln.firstChild) sp.append(ln.firstChild); ln.append(sp); return sp; });
  gsap.fromTo(inner, { yPercent: 105 }, { yPercent: 0, duration: 1.1, stagger: .12, ease: 'expo.out',
    scrollTrigger: { trigger: q, start: 'top 85%', once: true } });
});
gsap.fromTo('.sources-photo img', { yPercent: -5 }, { yPercent: 5, ease: 'none',
  scrollTrigger: { trigger: '.sources-photo', start: 'top bottom', end: 'bottom top', scrub: .8 } });

// ---------- Акт 5: чек ----------
// Строка, ещё не вылезшая из щели, не видна вовсе: так она не висит обрезанной над кассой.
const mouth = $('.till-mouth'), rLines = $$('.receipt > *');
const hideUnprinted = () => {
  const top = mouth.getBoundingClientRect().top;
  rLines.forEach(el => { el.style.opacity = el.getBoundingClientRect().top < top ? 0 : 1; });
};
gsap.fromTo('.receipt', { yPercent: -86, rotation: -1.4 }, { yPercent: 0, rotation: 0, ease: 'none', onUpdate: hideUnprinted,
  scrollTrigger: { trigger: '.till', start: 'top 86%', end: 'top 22%', scrub: .6 } });
hideUnprinted();

// ---------- Финал: диафрагма на стол ----------
const apBlades = buildBlades($('#ap-blades'), 7);
shapeBlades(apBlades, 440);
const apScale = $('#ap-scale');
(function buildApScale() {
  for (let i = 0; i < 120; i++) {
    const a = i / 120 * Math.PI * 2, major = i % 10 === 0, r1 = major ? 440 : 448;
    mk('line', { x1: Math.sin(a) * r1, y1: -Math.cos(a) * r1, x2: Math.sin(a) * 462, y2: -Math.cos(a) * 462, class: major ? 'major' : '' }, apScale);
  }
})();
const apImg = $('#ap-img'), F = { t: 1 };
function renderAp() {
  setBlades(apBlades, 442 * (1 - F.t), 34 * F.t);
  apImg.setAttribute('transform', `scale(${(1 + .3 * F.t).toFixed(4)})`);
}
gsap.to(F, { t: 0, ease: 'none', onUpdate: renderAp, scrollTrigger: { trigger: '.aperture', start: 'top 88%', end: 'center 52%', scrub: .6 } });
renderAp();
gsap.fromTo(apScale, { rotation: -40 }, { rotation: 50, svgOrigin: '0 0', ease: 'none',
  scrollTrigger: { trigger: '.finale', start: 'top bottom', end: 'bottom bottom', scrub: 1 } });

let rz;
addEventListener('resize', () => {
  clearTimeout(rz);
  rz = setTimeout(() => { layoutStage(); render(); sizeSparks(); }, 120);
});
reduced.addEventListener('change', () => location.reload());
})();
