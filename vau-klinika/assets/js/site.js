/* Кедр. Факты, цены и врачи взяты из ISTOCHNIK.html. */
(() => {
const D = [
  {name:'О клинике', word:'кедр', pill:'план и цена сразу', img:'hero', pos:'62% 50%',
   title:['Сначала план','и цена.','<em>Потом кресло.</em>'],
   lead:'Шесть врачей, четыре кресла и свой КТ на Демьяна Бедного, 60. Сумму врач называет до начала работ, вместе с письменным планом.'},
  {name:'Первый визит', word:'визит', pill:'0 ₽', img:'talk', pos:'50% 50%',
   title:['Сначала','<em>разговор.</em>'],
   lead:'Осмотр, снимок на КТ и письменный план со списком работ и ценой. Решать сразу не нужно.',
   rows:[['Консультация и план','0 ₽'],['Профессиональная гигиена','5 900 ₽']]},
  {name:'Лечение', word:'лечение', pill:'от 4 800 ₽', img:'hands', pos:'62% 50%',
   title:['Сохраним','<em>свой зуб.</em>'],
   lead:'Анестезия, материалы и контрольный осмотр уже в цене. Каналы лечим под микроскопом.',
   rows:[['Лечение кариеса, за зуб','от 4 800 ₽'],['Лечение каналов','от 9 700 ₽'],['Удаление зуба','от 3 200 ₽']],
   doc:[1,'Ольга Сергеевна Мельникова','терапевт, стаж 14 лет']},
  {name:'Имплантация', word:'импланты', pill:'от 54 000 ₽', img:'ct', pos:'68% 45%',
   title:['Имплант','<em>под ключ.</em>'],
   lead:'Планируем по снимку на своём КТ. Имплант, установка, абатмент и коронка из циркония в одной цене.',
   rows:[['Имплант под ключ','от 54 000 ₽'],['Коронка из диоксида циркония','28 500 ₽']],
   doc:[2,'Артём Дмитриевич Ковалёв','хирург-имплантолог, стаж 11 лет']},
  {name:'Гигиена', word:'гигиена', pill:'5 900 ₽', img:'waiting', pos:'58% 50%',
   title:['Около часа.','<em>Есть можно сразу.</em>'],
   lead:'Ультразвук, Air Flow, полировка и фторирование за один визит. Без бормашины, эмаль не страдает.',
   rows:[['Профессиональная гигиена','5 900 ₽']],
   doc:[3,'Ирина Павловна Шевцова','гигиенист, стаж 17 лет']}
];
const COUNT = ['первое','второе','третье','четвёртое','пятое'];
const N = D.length, FIRST = 4200, NEXT = 7000;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = () => innerWidth <= 760;
const G = window.gsap;
document.documentElement.classList.add('js');

const ghost = $('#ghost'), stage = $('#stage'), scene = $('#scene'), dim = $('#dim'), copy = $('#copy'), rail = $('#rail'), track = $('#track');
const src = d => `assets/img/${d.img}.jpg`;
const imgs = D.map(d => { const i = new Image(); i.decoding = 'async'; i.src = src(d); return i; });
/* Кадр сцены у каждого направления один и тот же элемент: переезжает из слоя раскрытия в сцену */
const shots = D.map((d, i) => {
  const im = i === 0 ? scene.querySelector('img') : document.createElement('img');
  im.src = src(d); im.alt = ''; im.decoding = 'async'; im.style.objectPosition = d.pos;
  return im;
});

/* Текст сцены */
const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function copyHTML(d, i) {
  const h = `<h1>${d.title.map(l => `<span class="line"><span>${l}</span></span>`).join('')}</h1><p class="lead">${d.lead}</p>`;
  if (i === 0) return h + `<a class="go" href="https://t.me/kedr_stom"><i>${ARROW}</i><span>Записаться на осмотр</span></a>
    <p class="facts"><span>Пн-сб 8:00-21:00, вс 10:00-17:00</span><span>Свой КТ</span><span>С 2014 года</span></p>`;
  const doc = d.doc ? `<div class="plate-doc"><img src="assets/img/doc-${d.doc[0]}.jpg" alt="" decoding="async"><span>${d.doc[1]}<small>${d.doc[2]}</small></span></div>` : '';
  return h + `<div class="plate">${d.rows.map(r => `<p class="plate-row"><span>${r[0]}</span><i></i><b>${r[1]}</b></p>`).join('')}${doc}</div>
    <a class="go" href="https://t.me/kedr_stom"><i>${ARROW}</i><span>Записаться</span></a>`;
}
function paintCopy(i) {
  copy.innerHTML = copyHTML(D[i], i);
  copy.classList.toggle('is-detail', i !== 0);
  ghost.dataset.word = D[i].word;
  $('#where-name').textContent = D[i].name;
  $('#where-count').textContent = `${COUNT[i]} из пяти`;
}

/* Карточки: по одной на направление, в ряду все, кроме текущего */
const cards = D.map((d, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'card'; b.setAttribute('role', 'listitem');
  b.setAttribute('aria-label', `${d.name}, ${d.pill}`);
  b.innerHTML = `<span class="card-img" style="background-image:url(${src(d)});background-position:${d.pos}"></span><span class="card-price">${d.pill}</span><span class="card-name">${d.name}</span>`;
  b.addEventListener('click', () => { user(); select(i); });
  return b;
});
const order = c => Array.from({length: N - 1}, (_, k) => (c + 1 + k) % N);
function paintRail(c) { order(c).forEach(i => rail.appendChild(cards[i])); if (cards[c].parentNode) cards[c].remove(); rail.scrollLeft = 0; }

const segs = D.map(() => { const s = document.createElement('span'); s.className = 'seg'; s.innerHTML = '<i></i>'; track.appendChild(s); return s; });
function paintTrack(c, fill) {
  segs.forEach((s, k) => { s.classList.toggle('done', k < c); s.firstChild.style.transform = k === c ? `scaleX(${fill})` : ''; });
}

let cur = 0, busy = false, auto = !rm, elapsed = 0, need = FIRST;
function user() { if (auto) { auto = false; paintTrack(cur, 1); } }

/* Шаг: карточка раздувается в экран, старый кадр уходит назад */
function select(i) {
  if (busy || i === cur) return;
  const from = cur;
  elapsed = 0; need = NEXT;
  if (rm || !G) { swapShot(i); cur = i; paintCopy(i); paintRail(i); paintTrack(i, auto ? 0 : 1); return; }
  busy = true;
  const sr = stage.getBoundingClientRect();
  let r = cards[i].isConnected ? cards[i].getBoundingClientRect() : null;
  if (!r || r.width < 10 || r.right > innerWidth + 1 || r.left < -1 || r.bottom > innerHeight || r.top < 0) {
    const w = Math.min(200, sr.width * .4), h = w * 1.5;
    r = {left: sr.left + sr.width / 2 - w / 2, top: Math.min(innerHeight, sr.bottom) - h - 40, width: w, height: h};
    r.right = r.left + w; r.bottom = r.top + h;
  }
  const W = sr.width, H = sr.height;
  const nat = imgs[i].naturalWidth ? [imgs[i].naturalWidth, imgs[i].naturalHeight] : [1344, 864];
  const cover = (w, h) => Math.max(w / nat[0], h / nat[1]);
  const s0 = cover(r.width, r.height) / cover(W, H);
  const dx = (r.left + r.width / 2) - (sr.left + W / 2), dy = (r.top + r.height / 2) - (sr.top + H / 2);
  const t0 = r.top - sr.top, l0 = r.left - sr.left, rr0 = sr.right - r.right, b0 = sr.bottom - r.bottom;

  const layer = document.createElement('div'); layer.className = 'reveal';
  const im = shots[i]; G.killTweensOf(im);
  layer.appendChild(im); stage.insertBefore(layer, $('.veil'));
  const draw = p => {
    const q = 1 - p, rad = 18 * q;
    layer.style.clipPath = `inset(${t0 * q}px ${rr0 * q}px ${b0 * q}px ${l0 * q}px round ${rad}px)`;
    im.style.transform = `translate(${dx * q}px,${dy * q}px) scale(${s0 + (1 - s0) * p})`;
  };
  draw(0);
  G.set(cards[i], {opacity: 0});
  const old = scene.querySelector('.shot img');
  G.killTweensOf(old);
  G.to(old, {scale: 1.09, duration: 1.15, ease: 'expo.inOut'});
  G.to(dim, {opacity: .6, duration: 1.15, ease: 'expo.inOut'});
  G.to(copy.querySelectorAll('.line>span'), {yPercent: -110, duration: .5, stagger: .04, ease: 'power3.in'});
  G.to(copy.querySelectorAll('.lead,.go,.facts,.plate'), {opacity: 0, y: -14, duration: .35, stagger: .03, ease: 'power2.in'});
  G.to(G.utils.toArray(rail.children).filter(c => c !== cards[i]), {opacity: .35, duration: .4});
  G.to(ghost, {xPercent: -8, opacity: 0, duration: .6, ease: 'power3.in'});
  const pr = {p: 0};
  G.to(pr, {p: 1, duration: 1.15, ease: 'expo.inOut', onUpdate: () => draw(pr.p), onComplete: () => {
    swapShot(i, im); layer.remove(); G.set(dim, {opacity: 0});
    cur = i;
    reorder(i, from);
    paintCopy(i); paintTrack(i, auto ? 0 : 1);
    G.from(copy.querySelectorAll('.line>span'), {yPercent: 110, duration: 1, stagger: .08, ease: 'expo.out'});
    G.from(copy.querySelectorAll('.lead,.plate,.go,.facts'), {opacity: 0, y: 22, duration: .8, stagger: .08, delay: .18, ease: 'power3.out'});
    G.fromTo(ghost, {xPercent: 10, opacity: 0}, {xPercent: 0, opacity: 1, duration: 1.4, ease: 'expo.out'});
    G.from(copy.querySelectorAll('.plate-row'), {opacity: 0, x: -14, duration: .6, stagger: .06, delay: .35, ease: 'power3.out'});
    busy = false;
  }});
}
function swapShot(i, im) {
  const shot = document.createElement('div'); shot.className = 'shot';
  im = im || shots[i];
  if (G) G.set(im, {clearProps: 'transform'}); else im.style.transform = '';
  shot.appendChild(im);
  scene.innerHTML = ''; scene.appendChild(shot);
  if (G && !rm && phone()) G.fromTo(im, {scale: 1}, {scale: 1.05, duration: 7, ease: 'none'});
}
/* Ряд перестраивается: остальные съезжают на места, бывший экран встаёт в конец */
function reorder(i, from) {
  const before = new Map(G.utils.toArray(rail.children).map(c => [c, c.getBoundingClientRect()]));
  paintRail(i);
  G.set(cards, {opacity: 1});
  G.utils.toArray(rail.children).forEach((c, k) => {
    const b = before.get(c), a = c.getBoundingClientRect();
    if (b && c !== cards[from]) G.fromTo(c, {x: b.left - a.left, y: b.top - a.top}, {x: 0, y: 0, duration: .9, ease: 'expo.out', clearProps: 'transform'});
    else G.fromTo(c, {opacity: 0, y: 70, rotate: 4}, {opacity: 1, y: 0, rotate: 0, duration: 1, delay: .12 + k * .03, ease: 'expo.out', clearProps: 'transform'});
  });
}

paintCopy(0); paintRail(0); paintTrack(0, 0);
$('#prev').addEventListener('click', () => { user(); select((cur + N - 1) % N); });
$('#next').addEventListener('click', () => { user(); select((cur + 1) % N); });
stage.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { user(); select((cur + 1) % N); }
  if (e.key === 'ArrowLeft') { user(); select((cur + N - 1) % N); }
});
rail.addEventListener('pointerdown', () => user(), {passive: true});

/* Автосмена: один круг, пока человек ничего не трогал; наведение и уход со сцены ставят паузу */
let hover = false, seen = true, last = performance.now();
rail.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
rail.addEventListener('pointerleave', () => { hover = false; });
new IntersectionObserver(es => { seen = es[0].intersectionRatio > .35; }, {threshold: [0, .35, .6]}).observe(stage);
function tick(now) {
  const dt = Math.min(now - last, 100); last = now;
  if (auto && !busy && !hover && seen && !document.hidden) {
    elapsed += dt;
    segs[cur].firstChild.style.transform = `scaleX(${Math.min(elapsed / need, 1)})`;
    if (elapsed >= need) {
      const last1 = cur === N - 1;
      select((cur + 1) % N);
      if (last1) auto = false;
    }
  }
  if (auto || busy) requestAnimationFrame(tick); else paintTrack(cur, 1);
}
if (auto) requestAnimationFrame(tick);
document.addEventListener('visibilitychange', () => { last = performance.now(); });

/* Кадр за курсором, текст чуть навстречу */
stage.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse' || rm || !G || phone()) return;
  const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5;
  G.to(scene, {x: -nx * 36, y: -ny * 36, duration: 1.4, ease: 'power3.out', overwrite: 'auto'});
  G.to(copy, {x: nx * 12, y: ny * 12, duration: 1.4, ease: 'power3.out', overwrite: 'auto'});
  G.to(ghost, {x: -nx * 70, y: -ny * 30, duration: 1.8, ease: 'power3.out', overwrite: 'auto'});
});

/* Появление первого экрана */
if (G && !rm) {
  G.from(scene.querySelector('img'), {scale: 1.16, duration: 2.4, ease: 'expo.out'});
  G.from('.top', {y: -24, opacity: 0, duration: 1, ease: 'power3.out', delay: .2});
  G.from(copy.querySelectorAll('.line>span'), {yPercent: 110, duration: 1.3, stagger: .1, ease: 'expo.out', delay: .15});
  G.from(copy.querySelectorAll('.lead,.go,.facts'), {opacity: 0, y: 24, duration: 1, stagger: .09, ease: 'power3.out', delay: .55});
  G.from(cards, {opacity: 0, y: 90, rotate: 5, duration: 1.3, stagger: .09, ease: 'expo.out', delay: .5, clearProps: 'transform'});
  G.from('.foot', {opacity: 0, duration: 1, delay: 1});
  G.from(ghost, {xPercent: 12, opacity: 0, duration: 2.2, ease: 'expo.out', delay: .4});
}

/* Лист плана: строки пишутся, суммы набегают */
const fmt = n => n.toLocaleString('ru-RU');
const sheet = $('#sheet');
sheet.querySelectorAll('.row').forEach((r, k) => {
  r.style.setProperty('--d', `${k * .09}s`);
  r.addEventListener('click', () => r.setAttribute('aria-expanded', String(r.getAttribute('aria-expanded') !== 'true')));
});
function countUp() {
  sheet.querySelectorAll('b[data-sum]').forEach((b, k) => {
    const to = +b.dataset.sum, pre = b.hasAttribute('data-from') ? 'от ' : '';
    if (!to || rm || !G) return;
    const o = {v: 0};
    G.to(o, {v: to, duration: .9, delay: .15 + k * .05, ease: 'power2.out', onUpdate: () => { b.textContent = `${pre}${fmt(Math.round(o.v / 100) * 100)} ₽`; }});
  });
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('on'); io.unobserve(e.target);
  if (e.target === sheet) countUp();
  if (e.target.classList.contains('end-mark') && G && !rm) G.from(e.target.querySelectorAll('span'), {yPercent: 100, duration: 1.2, stagger: .07, ease: 'expo.out'});
}), {threshold: .2});
io.observe(sheet);
$$('.step,.doc').forEach(s => io.observe(s));
const mark = $('.end-mark');
mark.innerHTML = [...mark.textContent].map(ch => `<span>${ch}</span>`).join('');
io.observe(mark);

/* Прокрутка: у каждого акта своё движение, ничего не закрепляется */
const steps = $$('.step'), bar = document.createElement('span');
bar.className = 'steps-bar'; $('#steps').appendChild(bar);
const inner = $$('.step-photo img,.doc figure img'), floats = $$('.float'), docs = $$('.doc,.review'), planImg = $('.plan-photo img'), door = $('#door'), room = $('.door-room img'), leafL = $('.leaf-l'), leafR = $('.leaf-r');
const clamp = v => Math.max(0, Math.min(1, v));
let pend = false;
function onScroll() {
  pend = false;
  if (rm) return;
  const vh = innerHeight;
  const pr = planImg.getBoundingClientRect();
  if (pr.bottom > 0 && pr.top < vh) planImg.style.transform = `translateY(${((pr.top + pr.height / 2) / vh - .5) * -40}px) scale(1.12)`;
  const sl = $('#steps').getBoundingClientRect();
  bar.style.transform = `scaleX(${clamp((vh * .6 - sl.top) / sl.height)})`;
  let best = null, bd = 1e9;
  steps.forEach(s => { const r = s.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - vh / 2); if (d < bd && r.bottom > 0 && r.top < vh) { bd = d; best = s; } });
  steps.forEach(s => s.classList.toggle('now', s === best));
  if (!phone()) docs.forEach(d => {
    const r = d.parentNode.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) return;
    d.style.transform = `translateY(${(r.top + r.height / 2 - vh / 2) * +d.dataset.speed}px)`;
  }); else docs.forEach(d => { d.style.transform = ''; });
  inner.forEach(im => {
    const r = im.parentNode.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    im.style.setProperty('--py', `${((r.top + r.height / 2) / vh - .5) * -r.height * .14}px`);
  });
  floats.forEach((f, k) => {
    const r = f.parentNode.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    f.style.transform = `translateY(${((r.top + r.height / 2) / vh - .5) * (k % 2 ? 90 : -70)}px)`;
  });
  const dr = door.getBoundingClientRect();
  if (dr.top < vh * 1.2 && dr.bottom > 0) {
    const p = clamp((vh * .8 - dr.top) / (vh * .7)), e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    leafL.style.transform = `translateX(${-e * 101}%)`;
    leafR.style.transform = `translateX(${e * 101}%)`;
    room.style.transform = `scale(${1.18 - .16 * e})`;
  }
}
addEventListener('scroll', () => { if (!pend) { pend = true; requestAnimationFrame(onScroll); } }, {passive: true});
addEventListener('resize', onScroll);
onScroll();
})();
