'use strict';
// Северсталькон: пять актов, один цикл кадра. Каждый акт берёт свою долю
// прокрутки (0..1) и рисует только когда виден. Только transform, opacity
// и clip-path; на касании прокрутка родная (Lenis только для колеса).

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => 1 - Math.pow(1 - t, 3);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = () => innerWidth <= 760;

const lenis = !reduced && window.Lenis ? new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false }) : null;

// доля прокрутки закреплённого акта: 0 — акт встал, 1 — уходит
function pinProgress(sec) {
  const r = sec.getBoundingClientRect();
  const span = sec.offsetHeight - innerHeight;
  return span > 0 ? clamp(-r.top / span) : clamp(1 - r.bottom / (innerHeight + r.height));
}
const visible = el => { const r = el.getBoundingClientRect(); return r.bottom > -40 && r.top < innerHeight + 40; };

/* ───── Акт 1. Развеска ───── */
const PRINTS = [
  ['obj-angar', 'Онега', 'Ангар для техники', '128 т · 1 800 м² · 38 дней', 'Зимний вариант: утеплённый контур, ворота 6 на 6 м, продуваемые связи. Производство и монтаж за 38 дней.'],
  ['obj-most', 'Вологда', 'Пешеходный мост, 54 м', '96 т · 61 день от замера', 'Сквозные фермы, настил из профнастила, поручни в сигнальный оранжевый по требованию заказчика.'],
  ['obj-sklad', 'Вологда', 'Склад 2 400 м²', '214 т · пролёт 24 м · 46 дней', 'Стальные колонны и фермы под кровлю. Объект сдан в марте 2025 года.'],
  ['tsekh', 'Череповец · цех 3', 'Цех 6 800 м²', 'мостовой кран 32 т · до 900 т в месяц', 'Промышленная ул., 14. Режем, гнём, варим и красим сами, с 2009 года.'],
  ['fermy', 'Череповец · склад', 'Фермы и балки', 'от 126 400 ₽/т · от 14 дней', 'Сварные фермы из парных уголков и двутавра, прогоны, связи. Часть профилей на складе, отгружаем сразу.'],
  ['rezerveyar', 'Ухта', 'Резервуары 2 × 400 м³', '74 т · 52 дня с монтажом', 'Два корпуса с площадками. Швы аттестованными сварщиками, акт на гидроиспытание.'],
  ['svar', 'Череповец · цех 3', 'Сварка узлов', '24 сварщика с аттестацией НАКС', 'Швы под ультразвуковой или визуально-измерительный контроль, протокол ОТК на каждую партию.'],
  ['hero-angar', 'Онега', 'Каркас ангара', 'пролёт 24 м · шаг колонн 6 м', 'Высота до конька 8,4 м. Каркасы зданий и ангаров от 118 000 ₽ за тонну, от 21 дня.'],
  ['plazma', 'Череповец · цех 3', 'Плазменная резка Messer', 'лист до 12 м · толщина до 40 мм', 'Нестандарт по вашим чертежам от 134 700 ₽ за тонну, от 18 дней.'],
  ['lestnitsa', 'Череповец · производство', 'Лестницы и площадки', 'от 143 000 ₽/т · от 10 дней', 'Марши, площадки обслуживания, ограждения кровли. Перила по ГОСТ, есть горячее цинкование.'],
  ['pokras', 'Череповец · цех 3', 'Покрасочный участок', 'грунт ГФ-021 · эпоксид · RAL', 'Дробеструй до Sa 2,5 перед покраской, цвет по RAL заказчика.'],
  ['inzhener', 'Отдел продаж', 'Сначала разбираем чертёж', 'расчёт за 2 рабочих дня', 'Присылайте pdf, dwg или планы здания: инженер даст вес, стоимость металла и работ.'],
];
const N = PRINTS.length;
const hang = $('.hang');
const rail = $('#rail');
const label = $('#label');
const bar = $('.hang-bar i');
const hangBg = $('.hang-bg');
const prints = PRINTS.map(([img, place, title], i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'print';
  b.setAttribute('aria-label', `${title}, ${place}: открыть`);
  b.innerHTML = `<img src="assets/img/${img}.jpg" alt="" decoding="async" ${i < 4 ? '' : 'loading="lazy"'}>`;
  b.addEventListener('click', () => openPeek(i, b));
  rail.append(b);
  return b;
});
let pos = 0, drift = 0, front = -1, last = performance.now();

function setLabel(i) {
  if (i === front) return;
  front = i;
  const [, place, title, facts] = PRINTS[i];
  label.classList.add('is-swap');
  setTimeout(() => {
    label.querySelector('[data-l=place]').textContent = place;
    label.querySelector('[data-l=title]').textContent = title;
    label.querySelector('[data-l=facts]').textContent = facts;
    label.classList.remove('is-swap');
  }, front === -1 ? 0 : 180);
}

function layoutHang(dt) {
  const p = pinProgress(hang);
  const m = phone();
  if (!reduced && visible(hang) && !peek.open) drift += dt * (m ? 0.09 : 0.05); // сама дышит: ~0.05 кадра в секунду
  const target = p * (m ? 2.2 : 5) + drift;
  pos = reduced ? 0 : lerp(pos, target, 0.085);
  const W = innerWidth, H = innerHeight;
  let best = 0, bestD = 99;
  prints.forEach((el, i) => {
    let d = ((i - pos) % N + N) % N;          // 0..N
    if (d > N - 0.9) d -= N;                   // ушедшая за камеру — в (-0.9, 0]
    let x, y, z, ry, o;
    if (m) { x = d * 0.03 * W; y = -d * 0.05 * H; z = -d * 360; ry = -10; }
    else { x = d * 0.2 * W; y = -d * 0.07 * H; z = -d * 560; ry = -28; }
    if (d < 0) { o = clamp((d + 0.75) / 0.15); x = d * (m ? 1.4 : 0.8) * W; y = d * 0.1 * H; z = -d * 220; } // пролистанная целиком уезжает влево поверх стопки, без полупрозрачного двойника
    else o = clamp(1 - (d - (m ? 2.4 : 3.2)) / 2.2);             // дальние уходят в дымку
    el.style.opacity = o.toFixed(3);
    el.style.visibility = o < 0.02 ? 'hidden' : 'visible';
    el.style.zIndex = String(1000 - Math.round(d * 50));
    el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${z.toFixed(1)}px) rotateY(${ry}deg)`;
    el.tabIndex = d > -0.2 && d < 3 ? 0 : -1;
    if (d > -0.12 && d < bestD) { bestD = d; best = i; }
  });
  setLabel(best);
  bar.style.transform = `scaleX(${p.toFixed(4)})`;
  if (!reduced) hangBg.style.transform = `scale(${(1.08 + p * 0.1).toFixed(4)}) translate3d(0,${(-p * 3).toFixed(2)}%,0)`;
}

/* ───── Акт 2. Чертёж → каркас ───── */
const draw = $('.draw');
const stage = $('.draw-stage');
const photo = $('.draw-photo');
const scan = $('.draw-scan');
const svgNS = 'http://www.w3.org/2000/svg';
(function buildDrawing() {
  const grid = $('.draw-grid');
  for (let x = 0; x <= 1200; x += 50) grid.insertAdjacentHTML('beforeend', `<line x1="${x}" y1="0" x2="${x}" y2="800"/>`);
  for (let y = 0; y <= 800; y += 50) grid.insertAdjacentHTML('beforeend', `<line x1="0" y1="${y}" x2="1200" y2="${y}"/>`);
  // рама ангара: две колонны, двускатная ферма с раскосами, прогоны второй рамы в перспективе
  const L = 190, R = 1010, G = 690, E = 360, K = 210;            // левая, правая, земля, карниз, конёк
  const P = [];
  P.push([`M${L} ${G} V${E}`, 'main'], [`M${R} ${G} V${E}`, 'main']);
  P.push([`M${L} ${E} L600 ${K} L${R} ${E}`, 'main'], [`M${L} ${E} H${R}`, '']);
  for (let i = 1; i < 8; i++) {                                    // стойки и раскосы фермы
    const x = L + (R - L) * i / 8;
    const top = x < 600 ? E - (x - L) / (600 - L) * (E - K) : E - (R - x) / (R - 600) * (E - K);
    P.push([`M${x.toFixed(0)} ${E} V${top.toFixed(0)}`, '']);
    const xp = L + (R - L) * (i - 1) / 8;
    P.push([`M${xp.toFixed(0)} ${E} L${x.toFixed(0)} ${top.toFixed(0)}`, '']);
  }
  const dx = 120, dy = -70;                                        // вторая рама глубже
  P.push([`M${L + dx} ${G + dy} V${E + dy} L${600 + dx} ${K + dy} L${R + dx} ${E + dy} V${G + dy}`, '']);
  P.push([`M${L} ${E} l${dx} ${dy}`, ''], [`M600 ${K} l${dx} ${dy}`, ''], [`M${R} ${E} l${dx} ${dy}`, '']);
  P.push([`M${L} ${G} l${dx} ${dy}`, ''], [`M${R} ${G} l${dx} ${dy}`, '']);
  P.push([`M80 ${G} H1120`, '']);
  const g = $('.draw-lines');
  const ghost = document.createElementNS(svgNS, 'g');              // бледная калька под чертежом: сцена не пустая до первой линии
  ghost.setAttribute('class', 'draw-ghost');
  ghost.setAttribute('fill', 'none');
  g.before(ghost);
  P.forEach(([d, c]) => { const q = document.createElementNS(svgNS, 'path'); q.setAttribute('d', d); if (c) q.setAttribute('class', c); ghost.append(q); });
  P.forEach(([d, c], i) => {
    const p = document.createElementNS(svgNS, 'path');
    p.setAttribute('d', d);
    p.setAttribute('pathLength', '1');
    if (c) p.setAttribute('class', c);
    p.style.strokeDasharray = '1';
    p.style.strokeDashoffset = '1';
    p.dataset.k = (i / P.length).toFixed(3);
    g.append(p);
  });
  const dims = $('.draw-dims');
  dims.innerHTML = `
    <path d="M${L} ${G + 40} H${R} M${L} ${G + 30} v20 M${R} ${G + 30} v20"/><text x="600" y="${G + 72}" text-anchor="middle">пролёт 24 000</text>
    <path d="M${L - 50} ${G} V${K} M${L - 60} ${G} h20 M${L - 60} ${K} h20"/><text x="${L - 64}" y="${(G + K) / 2}" text-anchor="end">8 400</text>
    <text x="${R + dx - 6}" y="${E + dy - 16}" text-anchor="end">шаг колонн 6 000</text>`;
  dims.style.opacity = '0';
})();
const lines = $$('.draw-lines path');

function layoutDraw() {
  if (!visible(draw)) return;
  const p = reduced ? 1 : pinProgress(draw);
  const rd = draw.getBoundingClientRect();                         // чертить начинаем, пока сцена ещё въезжает: без пустого тёмного экрана
  const raw = reduced ? 1 : -rd.top / Math.max(1, draw.offsetHeight - innerHeight);
  const d = clamp((raw + 0.45) / 0.95);
  lines.forEach(l => { const k = +l.dataset.k * 0.6; l.style.strokeDashoffset = (1 - clamp((d - k) / 0.4)).toFixed(4); });
  $('.draw-dims').style.opacity = clamp((d - 0.55) / 0.3).toFixed(3);
  const w = clamp((p - 0.55) / 0.35);                              // 0.55..0.9 каркас проступает
  const we = ease(w);
  photo.style.clipPath = `inset(0 ${(100 - we * 100).toFixed(2)}% 0 0)`;
  scan.style.opacity = w > 0 && w < 1 ? '1' : '0';
  scan.style.transform = `translateX(${(we * stage.clientWidth).toFixed(1)}px)`;
  $('.draw-lines').style.opacity = (1 - we * 0.75).toFixed(3);
  $('.draw-ghost').style.opacity = (1 - we).toFixed(3);
  stage.classList.toggle('is-built', w >= 0.98);
}

/* ───── Акт 3. Сварка букв ───── */
const weld = $('.weld');
const word = $('.weld-word');
const weldCap = $('.weld-cap');
const letters = [...word.textContent].map(ch => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch; s.setAttribute('aria-hidden', 'true'); return s; });
word.textContent = '';
letters.forEach(s => word.append(s));
const seed = [[-0.9, -0.5, -40], [0.5, -0.2, 25], [-0.3, -0.9, -60], [0.8, -0.6, 35], [-0.7, -0.3, 50], [0.3, -1, -30], [0.9, -0.4, 45]]; // только вверх: абзац под словом не задевают
function paintLetters() {                                          // шов идёт по слову целиком
  const wr = word.getBoundingClientRect();
  letters.forEach(s => {
    s.style.backgroundSize = `${(wr.width * 3).toFixed(0)}px 100%`;
    s.style.animationDelay = `${((s.offsetLeft / Math.max(1, wr.width)) * 0.9).toFixed(2)}s`;
  });
}
let counted = false;
function layoutWeld() {
  if (!visible(weld)) return;
  const p = reduced ? 1 : pinProgress(weld);
  const a = ease(clamp(p / 0.6));
  const m = phone();
  letters.forEach((s, i) => {
    const [sx, sy, sr] = seed[i];
    const k = 1 - a;
    s.style.transform = `translate3d(${(sx * k * innerWidth * (m ? 0.06 : 0.32)).toFixed(1)}px,${(sy * k * innerHeight * (m ? 0.2 : 0.32)).toFixed(1)}px,0) rotate(${(sr * k).toFixed(2)}deg)`;
    s.style.opacity = (0.35 + 0.65 * a).toFixed(3);                 // разлёт только вверх, подпись над словом проявляется после сборки
  });
  word.classList.toggle('is-hot', a > 0.985);
  weldCap.style.opacity = clamp((a - 0.8) / 0.2).toFixed(3);      // подпись над словом проявляется, когда буквы уже на месте
  if (!counted && p > 0.45) { counted = true; countUp(); }
}
function countUp() {
  $$('[data-count]').forEach(el => {
    const to = +el.dataset.count, t0 = performance.now(), dur = reduced ? 0 : 1300;
    const step = now => {
      const t = dur ? clamp((now - t0) / dur) : 1;
      el.textContent = Math.round(to * ease(t)).toLocaleString('ru-RU');
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ───── Акт 4. Журнал объектов: большое фото закреплено рядом и меняется со строкой ───── */
const media = $$('.index-media img');
const num = $('.index-num span');
const rows = $$('.row');
let activeRow = null;
function setRow(row) {
  if (row === activeRow) return;
  activeRow = row;
  rows.forEach(r => r.classList.toggle('is-active', r === row));
  media.forEach(im => {                                            // новый кадр поднимается шторкой поверх прежнего
    const on = im.dataset.k === row.dataset.img;
    im.classList.toggle('was-on', !on && im.classList.contains('is-on'));
    if (!on) im.classList.remove('is-on');
  });
  const next = media.find(im => im.dataset.k === row.dataset.img);
  if (next) { void next.offsetWidth; next.classList.add('is-on'); }
  setTimeout(() => media.forEach(im => { if (!im.classList.contains('is-on')) im.classList.remove('was-on'); }), 950);
  const t = parseInt($('.row-t', row).textContent, 10);
  const t0 = parseInt(num.textContent, 10) || 0, start = performance.now();
  const step = now => { const k = reduced ? 1 : clamp((now - start) / 600); num.textContent = Math.round(t0 + (t - t0) * ease(k)); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
rows.forEach(row => {
  const btn = $('.row-btn', row);
  btn.addEventListener('click', () => {
    const open = !row.classList.contains('is-open');
    $$('.row.is-open').forEach(r => { r.classList.remove('is-open'); $('.row-btn', r).setAttribute('aria-expanded', 'false'); });
    row.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    setTimeout(() => lenis?.resize(), 600);
  });
  row.addEventListener('pointerenter', () => setRow(row));
});
function layoutIndex() {
  if (phone() || !visible($('.index'))) return;
  const mid = innerHeight * 0.45;                                  // строка у середины экрана — активная
  let best = rows[0], bd = 1e9;
  rows.forEach(r => { const b = r.getBoundingClientRect(); const d = Math.abs(b.top + 42 - mid); if (d < bd) { bd = d; best = r; } });
  if (!$('.row:hover')) setRow(best);
}

/* ───── Акт 5. Табло ───── */
const DIGITS = '0123456789';
$$('.flap').forEach(f => {
  f.textContent = '';
  [...f.dataset.v].forEach(ch => { const b = document.createElement('b'); b.textContent = ch === ' ' ? '' : '0'; if (ch === ' ') b.className = 'sp'; b.dataset.to = ch; f.append(b); });
  f.setAttribute('aria-label', f.dataset.v + ' ₽ за тонну');
});
const boardIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  boardIO.unobserve(e.target);
  $$('b:not(.sp)', e.target).forEach((b, i) => {
    const to = b.dataset.to;
    if (reduced) { b.textContent = to; return; }
    let n = 0; const turns = 6 + i * 2 + Math.floor(Math.random() * 3);
    const tick = () => {
      b.classList.remove('turn'); void b.offsetWidth; b.classList.add('turn');
      b.textContent = n >= turns ? to : DIGITS[(+to + n - turns + 20) % 10];
      if (n++ < turns) setTimeout(tick, 70);
    };
    setTimeout(tick, 120 * e.target.closest('.board-row').dataset.i);
  });
}), { threshold: 0.6 });
$$('.board-row').forEach((r, i) => { r.dataset.i = i; boardIO.observe($('.flap', r)); });

/* ───── Финал и шапка ───── */
const fin = $('.fin');
const finPhoto = $('.fin-photo');
const hdr = $('.hdr');
const darks = [hang, draw, weld, $('.index'), $('.board'), fin];
function layoutChrome() {
  const y = 32;
  hdr.classList.toggle('is-dark', darks.some(s => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom > y; }));
  if (!reduced && visible(fin)) {
    const r = fin.getBoundingClientRect();
    const t = clamp(1 - r.top / innerHeight);
    finPhoto.style.transform = `scale(${(1.14 - 0.14 * t).toFixed(4)})`;
  }
}

/* название в финале поднимается буквами из-под строки */
const finName = $('.fin-name');
finName.innerHTML = [...finName.textContent].map((ch, i) => `<span class="fl" style="transition-delay:${(i * 0.045).toFixed(3)}s">${ch}</span>`).join('');
new IntersectionObserver((es, io) => es.forEach(e => { if (e.isIntersecting) { finName.classList.add('is-in'); io.disconnect(); } }), { threshold: 0.4 }).observe(finName);

/* ───── Окно объекта (из развески) ───── */
const peek = $('#peek');
let opener = null;
function openPeek(i, from) {
  const [img, place, title, facts, text] = PRINTS[i];
  opener = from;
  const im = $('.peek-img', peek);
  im.src = `assets/img/${img}.jpg`;
  im.alt = title;
  $('#peek-place').textContent = place;
  $('#peek-title').textContent = title;
  $('#peek-text').textContent = `${facts}. ${text}`;
  lenis?.stop();
  peek.showModal();
  if (!reduced) {
    const a = from.getBoundingClientRect(), b = im.getBoundingClientRect();
    im.animate([
      { transformOrigin: '0 0', transform: `translate(${a.left - b.left}px,${a.top - b.top}px) scale(${a.width / b.width},${a.height / b.height})` },
      { transformOrigin: '0 0', transform: 'none' }], { duration: 620, easing: 'cubic-bezier(.22,1,.36,1)' });
    $('.peek-copy', peek).animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 260, fill: 'backwards', easing: 'cubic-bezier(.22,1,.36,1)' });
  }
  $('.peek-close', peek).focus();
}
peek.addEventListener('close', () => { lenis?.start(); opener?.focus({ preventScroll: true }); });
$('.peek-close', peek).addEventListener('click', () => peek.close());
peek.addEventListener('click', e => { if (e.target === peek || e.target.classList.contains('peek-img')) peek.close(); });
$('[data-close]', peek).addEventListener('click', () => peek.close());

/* якоря: плавно колесом, без прыжка */
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const t = document.querySelector(a.getAttribute('href'));
  if (!t) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo(t, { duration: 1.4 }); else t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}));

/* цикл */
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  lenis?.raf(now);
  layoutHang(dt);
  layoutDraw();
  layoutWeld();
  layoutIndex();
  layoutChrome();
  requestAnimationFrame(frame);
}
function relayout() { paintLetters(); }
addEventListener('resize', relayout);
document.fonts?.ready.then(relayout);
relayout();
requestAnimationFrame(frame);
