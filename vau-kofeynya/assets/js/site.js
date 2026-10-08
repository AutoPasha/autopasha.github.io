(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Колода: девять фото и девять карточек-фактов вперемешку. Всё из прежнего сайта «Лампы».
  const DECK = [
    {type: '7:30', line: 'первый хлеб из печи', c: 'crust', name: 'Хлеб из печи в 7:30', desc: 'Закваску ставим в 22:00, тесто уходит в печь в 5:40. Открываемся, когда выходит первый хлеб.', when: 'Ещё два выхода: 12:00 и 17:00'},
    {img: 'window-cup', name: 'Капучино 0,3', price: '230 ₽', desc: 'На альтернативном молоке, без доплаты.', when: 'Весь день, до 21:00'},
    {type: 'по вторникам', small: true, line: 'своя обжарка', c: 'ink', name: 'Обжарка по вторникам', desc: 'Зелёное зерно берём у двух фермеров и обжариваем сами на барабанном ростере.', when: 'В кофейне к 15:00 того же дня'},
    {img: 'barista', name: 'Фильтр', price: '210 ₽', desc: '270 мл, зерно недели на обжарке.', when: 'Весь день, до 21:00'},
    {type: '250 мл', line: 'столько кофе в чашке', c: 'flour', name: 'Чашка 250 мл', desc: 'Альтернативное молоко и сироп бесплатно, двойной шот плюс 40 ₽. Воду набираем в стакан без счёта.', when: 'В обеих точках'},
    {img: 'hall-night', name: 'Профсоюзная, 23', price: '', desc: '18 мест, розетки у левой стены, пекарня и своя обжарка. В зале тихо после 19:00.', when: 'Будни 7:30–21:00, Сб–Вс 9:00–21:00'},
    {type: '11 минут', small: true, line: 'идёт обжарка', c: 'rye', name: 'Обжарка 11 минут', desc: 'Зерно сыпется из барабана тонкой струёй. Эфиопия, Колумбия, Бразилия.', when: 'По вторникам'},
    {img: 'bread-board', name: 'Хлеб на закваске', price: '340 ₽', desc: '400 г, на дикой дрожже, два дня выдержки.', when: 'Из печи в 7:30'},
    {type: '12:00', line: 'синнабоны и шарлотка', c: 'milk', name: 'Сладкая партия в 12:00', desc: 'Синнабоны с корицей и кардамоном, шарлотка с яблоками, кекс на рисовой муке.', when: 'Второй заход шарлотки в 15:00'},
    {img: 'roaster', name: 'Зерно недели', price: '', desc: 'Обжариваем сами. Сезонный напиток меняем вместе с обжаркой.', when: 'Обжарка по вторникам'},
    {type: '0 ₽', line: 'молоко и сироп', c: 'crust', name: 'Молоко и сироп бесплатно', desc: 'Альтернативное молоко и сироп в любой кофе без доплаты.', when: 'Двойной шот плюс 40 ₽'},
    {img: 'coffee-bag', name: 'Зерно на вынос', price: 'от 790 ₽', desc: 'Пачка 250 г. На Профсоюзной забрать можно без заказа.', when: 'По Казани везём в день обжарки до 18:00'},
    {type: '17:00', line: 'багеты на вечер', c: 'ink', name: 'Багет с кунжутом', price: '220 ₽', desc: 'Хлеб на вечер: к этому часу зал едет за сыром, супом и хлебом.', when: 'К 17:00, пока есть'},
    {img: 'shelves', name: 'Полка у окна', price: '', desc: 'В 8 утра вся выпечка стоит в контровом свете. К вечеру печём с запасом на 60 штук.', when: 'Хлеб: 7:30, 12:00, 17:00'},
    {type: 'до 12:00', small: true, line: 'завтраки', c: 'flour', name: 'Завтраки до 12:00', price: 'от 340 ₽', desc: 'Сырники, шакшука с фетой, омлет с грибами, авокадо с чиабаттой, гранола.', when: 'На Островском сырники тоже до полудня'},
    {img: 'hero-counter', name: 'Стойка в 8 утра', price: '', desc: 'К восьми в зале очередь из десяти человек. Завтраки подаём до 12:00.', when: 'Пн–Пт с 7:30, Сб–Вс с 9:00'},
    {type: '2 точки', small: true, line: 'Профсоюзная и Островского', c: 'milk', name: 'Островского, 57б', price: '', desc: 'Десять мест у окна на парк, кофе на вынос. Выпечка выходит в 7:30 и 12:00.', when: 'Будни 7:30–21:00, Сб–Вс 9:00–21:00'},
    {img: 'croissant', name: 'Круассан с миндалём', price: '190 ₽', desc: 'Выпекаем в 7:30, второй час он ещё тёплый.', when: 'Из печи в 7:30'}
  ];
  const N = DECK.length;
  const scene = $('#scene');
  const screen = $('.deck-screen');
  const cards = DECK.map((d, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'card' + (d.type ? ' c-' + d.c : '');
    b.setAttribute('aria-label', d.name + (d.price ? ', ' + d.price : '') + '. Подробнее');
    // фото-карточка — снимок, карточка-факт — нарисованная лицевая сторона (как печатная карточка меню)
    b.innerHTML = d.img
      ? `<img src="assets/img/${d.img}.jpg" alt="" decoding="async" draggable="false">`
      : '<canvas aria-hidden="true"></canvas>';
    b.dataset.i = i;
    scene.append(b);
    return b;
  });

  const FACE = {crust: ['#b5582a', '#fbf6ee', '#fbf6ee'], ink: ['#2a211b', '#f0b48a', '#f3e7d6'], flour: ['#e3d6c2', '#2a211b', '#2a211b'],
    milk: ['#fbf6ee', '#b5582a', '#2a211b'], rye: ['#6e4a2e', '#f6ead9', '#f6ead9']};
  let faceW = 0;
  function drawFaces() {
    const w = cards[0].offsetWidth, h = cards[0].offsetHeight;
    if (!w || w === faceW) return;
    faceW = w;
    const k = Math.min(3, (devicePixelRatio || 1) * 1.6);
    DECK.forEach((d, i) => {
      if (!d.type) return;
      const cv = cards[i].querySelector('canvas');
      cv.width = Math.round(w * k); cv.height = Math.round(h * k);
      const g = cv.getContext('2d'), [bg, big] = FACE[d.c], pad = w * .085;
      g.scale(k, k);
      g.fillStyle = bg; g.fillRect(0, 0, w, h);
      g.fillStyle = big; g.textBaseline = 'top';
      const words = d.small ? d.type.split(' ') : [d.type];
      let fs = w * (d.small ? .21 : .3);
      g.font = `400 ${fs}px Prata, Georgia, serif`;
      const widest = Math.max(...words.map(t => g.measureText(t).width));
      if (widest > w - pad * 2) { fs *= (w - pad * 2) / widest; g.font = `400 ${fs}px Prata, Georgia, serif`; }
      words.forEach((t, n) => g.fillText(t, pad, pad + n * fs * 1.02));
      g.globalAlpha = .55; g.fillRect(pad, h - pad - 1, w * .22, 2); g.globalAlpha = 1;
    });
  }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { faceW = 0; drawFaces(); });
  drawFaces();

  // Случайное, но одинаковое при каждой загрузке
  const rnd = (i, k) => { const v = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return v - Math.floor(v); };
  let W = innerWidth, H = innerHeight, mobile = W <= 760;
  const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const P = (x, y, z = 0, rx = 0, ry = 0, rz = 0, s = 1) => ({x, y, z, rx, ry, rz, s});

  // Шесть построений. Компьютер: левый нижний угол держим под подписью.
  function layout(k, i, T, a) {
    const t = i / (N - 1);
    const x0 = mobile ? 0 : W * .085;
    if (k === 0) { // подкова: сзади мелко, к зрителю крупно
      // шаг по дуге растёт вместе с карточкой: мелкие сзади плотно, крупные спереди с воздухом
      const sc = j => mobile ? .58 + .5 * Math.pow(j / (N - 1), 1.4) : .5 + .66 * Math.pow(j / (N - 1), 1.5);
      let acc = 0, all = 0;
      for (let j = 0; j < N - 1; j++) { const st = sc(j) + sc(j + 1); all += st; if (j < i) acc += st; }
      const phi = (-150 + acc / all * 296) * Math.PI / 180;
      const R = mobile ? W * .27 : Math.min(W * .23, H * .36); // на телефоне подкова целиком в экране, крайние не режутся краем
      const ry = mobile ? H * .2 : R * .8;
      const s = sc(i);
      return P(x0 + Math.sin(phi) * R * (mobile ? 1 : 1.12), -Math.cos(phi) * ry + (mobile ? 10 : 0), -240 + 300 * t, 8 * (1 - t), 0, phi * 180 / Math.PI * .1 + 3, s);
    }
    if (k === 1) { // стопка, как брошенные
      // крупно и вразброс: одна аккуратная пачка посреди пустого экрана читалась как недогруз
      return P(x0 + (rnd(i, 1) - .5) * (mobile ? 46 : 110), (rnd(i, 2) - .5) * (mobile ? 30 : 60) - (mobile ? 0 : H * .02), i * 2.5 - 20, 0, 0, (rnd(i, 3) - .5) * (mobile ? 22 : 30), mobile ? 1.22 : 1.55);
    }
    if (k === 2) { // каскад в глубину по диагонали
      if (mobile) return P(lerp(-W * .26, W * .2, t), lerp(-H * .27, H * .24, t), -220 + 260 * t, -10, -24, -9, .55 + .38 * t);
      return P(lerp(-W * .36, W * .3, t), lerp(-H * .31, H * .25, t), -240 + 320 * t, -10, -26, -10, .55 + .42 * t);
    }
    if (k === 3) { // вертушка: кольцо медленно крутится
      const phi = (i / N * 360 + T * 7 + 20) * Math.PI / 180;
      const rx = mobile ? W * .31 : Math.min(H * .31, W * .21), rr = mobile ? H * .25 : rx;
      return P(x0 + Math.sin(phi) * rx, -Math.cos(phi) * rr - (mobile ? 0 : H * .02), -60, 0, 0, phi * 180 / Math.PI, mobile ? .6 : .62);
    }
    if (k === 4) { // раскладка: карточки кувырком ложатся ровной сеткой, как меню на столе
      const cols = mobile ? 3 : 6, c = i % cols, r = Math.floor(i / cols), rows = Math.ceil(N / cols);
      const gx = mobile ? W * .29 : Math.min(W * .105, 160), gy = mobile ? H * .118 : H * .205;
      return P((mobile ? 0 : W * .13) + (c - (cols - 1) / 2) * gx, (r - (rows - 1) / 2) * gy - (mobile ? H * .02 : H * .12), -40, mobile ? 18 : 24, 0, 0, mobile ? .55 : .6);
    }
    // лента: центральная лицом, соседние повёрнуты
    const d = i - a, ad = Math.abs(d), sg = Math.sign(d);
    const g1 = mobile ? W * .42 : W * .19, gn = mobile ? W * .13 : W * .075;
    return P(sg * (Math.min(ad, 1) * g1 + Math.max(ad - 1, 0) * gn), mobile ? -H * .075 : -H * .06,
      -Math.min(ad, 1) * 220 - Math.max(ad - 1, 0) * 70, 0, -clamp(d, -1, 1) * 52, 0, (mobile ? 1.24 : 1.3) - Math.min(ad, 1) * .34);
  }

  const copySteps = $$('.copy-step');
  const copy = $('.deck-copy');
  const fName = $('#flow-name'), fPrice = $('#flow-price'), fDesc = $('#flow-desc'), fWhen = $('#flow-when');
  let shownCopy = 0, shownFlow = -1, user = 0;
  const hv = new Float32Array(N); let hoverI = -1, hx = 0, hy = 0;

  function setCopy(n) {
    if (n === shownCopy) return;
    shownCopy = n;
    copySteps.forEach((el, k) => { el.classList.toggle('is-on', k === n); el.setAttribute('aria-hidden', String(k !== n)); });
  }
  function setFlow(i) {
    if (i === shownFlow) return;
    shownFlow = i;
    const d = DECK[i];
    fName.textContent = d.name; fPrice.textContent = d.price; fDesc.textContent = d.desc.replace(/\.$/, ''); fWhen.textContent = d.when;
  }

  let target = 0, prog = 0, flowA = 7, T0 = performance.now();
  // Вступление: хлебный кадр на весь экран сжимается в переднюю карточку, колода раскрывается из-за неё
  const intro = $('.intro-shot'), introImg = intro && intro.querySelector('img'), introType = intro && intro.querySelector('.intro-type');
  const FRONT = N - 1;
  let introOn = !!intro && !reduced, introStart = 0;
  if (introOn) screen.classList.add('is-intro'); else if (intro) intro.classList.add('is-done');
  function introFrame(now, frontPose) {
    if (!introStart) introStart = now;
    // начал листать посреди вступления — проматываем его к концу, колода сразу в работе
    if (target > .002 && now - introStart < 2900) introStart = now - 2900;
    const t = (now - introStart) / 1000;
    const k = easeIO(clamp((t - 1.9) / 1.05, 0, 1));
    const c = cards[FRONT], f = 1500 / (1500 - frontPose.z);
    const r = c.getBoundingClientRect(), sr = screen.getBoundingClientRect();
    const cw = c.offsetWidth * frontPose.s * f, ch = c.offsetHeight * frontPose.s * f;
    const cx = lerp(sr.width / 2, r.left - sr.left + r.width / 2, k), cy = lerp(sr.height / 2, r.top - sr.top + r.height / 2, k);
    const sx = lerp(1, cw / sr.width, k), sy = lerp(1, ch / sr.height, k), rot = lerp(0, frontPose.rz, k);
    intro.style.transform = `translate(${cx.toFixed(1)}px,${cy.toFixed(1)}px) rotate(${rot.toFixed(2)}deg) scale(${sx.toFixed(4)},${sy.toFixed(4)}) translate(${(-sr.width / 2).toFixed(1)}px,${(-sr.height / 2).toFixed(1)}px)`;
    intro.style.borderRadius = k > .02 ? `${(14 / sx).toFixed(1)}px / ${(14 / sy).toFixed(1)}px` : '0';
    const u = Math.max(sx, sy) * lerp(1.08, 1, clamp(t / 2.6, 0, 1));
    introType.style.opacity = String(clamp(Math.min(t / .5, 1 - (t - 1.6) / .35), 0, 1).toFixed(3));
    introType.style.transform = `translateY(${(lerp(16, 0, clamp(t / .8, 0, 1)) - clamp(t - 1.6, 0, 1) * 30).toFixed(1)}px)`;
    introImg.style.transform = `scale(${(u / sx).toFixed(4)},${(u / sy).toFixed(4)})`;
    intro.style.opacity = String(clamp(1 - (t - 2.9) / .3, 0, 1).toFixed(3));
    if (t > 3.1) screen.classList.remove('is-intro');
    if (t > 4.4) { introOn = false; intro.classList.add('is-done'); }
    return t;
  }
  const last = cards.map(() => ({tf: '', o: ''}));
  let deckVisible = true;
  new IntersectionObserver(es => { deckVisible = es[0].isIntersecting; }).observe(screen);
  function frame(now) {
    if (!deckVisible && !reduced) { requestAnimationFrame(frame); return; }
    const T = (now - T0) / 1000;
    prog = reduced ? target : lerp(prog, target, .12);
    if (Math.abs(prog - target) < .0004) prog = target;
    const seq = mobile ? clamp(prog / .9, 0, 1) * 5 : clamp(prog / .84, 0, 1) * 5;
    const extra = mobile ? 0 : clamp((prog - .84) / .16, 0, 1) * 3;
    const aTarget = clamp(7 + extra + user, 0, N - 1);
    flowA = lerp(flowA, aTarget, .14);
    const base = Math.min(Math.floor(seq), 4), ph = seq - base;
    const breathe = reduced ? 0 : 1;
    const frontPose = layout(0, FRONT, T, flowA);
    const it = introOn ? introFrame(now, frontPose) : 99;
    for (let i = 0; i < N; i++) {
      const delay = Math.abs(i - 8.5) / 8.5 * .2;
      const tt = easeIO(clamp((ph - delay) / .8, 0, 1));
      const A = layout(base, i, T, flowA), B = layout(base + 1, i, T, flowA);
      const p = {};
      for (const key in A) p[key] = A[key] + (B[key] - A[key]) * tt;
      if (base === 3 || base === 4) { const flip = Math.sin(tt * Math.PI); p.rx += flip * (rnd(i, 7) - .5) * 160; p.ry += flip * (rnd(i, 8) - .5) * 120; p.z += flip * 160; }
      if (it < 4.4 && i !== FRONT) { // до раскрытия колода лежит стопкой за передней карточкой
        const fan = easeIO(clamp((it - 2.5 - (FRONT - i) * .025) / 1.05, 0, 1));
        const q = {...frontPose, z: frontPose.z - (FRONT - i) * 3, s: frontPose.s * .98};
        for (const key in p) p[key] = q[key] + (p[key] - q[key]) * fan;
      }
      // дыхание: колода живая, пока стоит
      p.y += Math.sin(T * 1.1 + i * .9) * 3 * breathe;
      p.rz += Math.sin(T * .7 + i * 1.3) * .6 * breathe;
      // наведение: карточка тянется к камере и поворачивается за курсором
      hv[i] = lerp(hv[i], i === hoverI ? 1 : 0, .16);
      if (hv[i] > .001) {
        p.z += 90 * hv[i]; p.s *= 1 + .05 * hv[i];
        p.rx += -hy * 14 * hv[i]; p.ry += hx * 16 * hv[i];
      }
      const op = seq > 4.5 ? clamp(1 - (Math.abs(i - flowA) - (mobile ? 2.2 : 5)) * .8, 0, 1) : 1;
      const c = cards[i], st = last[i];
      const tf = `translate3d(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px,${p.z.toFixed(1)}px) rotateX(${p.rx.toFixed(1)}deg) rotateY(${p.ry.toFixed(1)}deg) rotateZ(${p.rz.toFixed(1)}deg) scale(${p.s.toFixed(3)})`;
      if (tf !== st.tf) { c.style.transform = tf; st.tf = tf; }
      const o = op.toFixed(2);
      if (o !== st.o) { c.style.opacity = o; c.style.visibility = op < .02 ? 'hidden' : ''; st.o = o; }
    }
    const stepCopy = seq < .5 ? 0 : seq < 1.5 ? 1 : seq < 2.5 ? 2 : seq < 3.5 ? 3 : 4;
    const inFlow = seq > 4.45;
    setCopy(stepCopy);
    copy.classList.toggle('is-gone', inFlow);
    screen.classList.toggle('is-flow', inFlow);
    screen.classList.toggle('is-moving', seq > .05);
    if (inFlow) setFlow(Math.round(clamp(flowA, 0, N - 1)));
    if (!reduced) requestAnimationFrame(frame);
  }

  // Наведение мышью
  if (fine && !reduced) {
    cards.forEach((c, i) => {
      c.addEventListener('pointerenter', () => { hoverI = i; });
      c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); hx = (e.clientX - r.left) / r.width - .5; hy = (e.clientY - r.top) / r.height - .5; });
      c.addEventListener('pointerleave', () => { if (hoverI === i) hoverI = -1; });
    });
  }

  // Лента: стрелки, клавиши, свайп
  const step = dir => { user = clamp(user + dir, -7, N - 1 - 7); };
  $$('.flow-btn').forEach(b => b.addEventListener('click', () => step(Number(b.dataset.dir))));
  addEventListener('keydown', e => {
    if (!screen.classList.contains('is-flow') || $('#sheet').classList.contains('is-open')) return;
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
  let sx = 0, sy = 0, swiped = false;
  screen.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiped = false; }, {passive: true});
  screen.addEventListener('touchend', e => {
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (screen.classList.contains('is-flow') && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) { step(dx < 0 ? 1 : -1); swiped = true; }
  }, {passive: true});

  // Карточка позиции на весь экран
  const sheet = $('#sheet'), sMedia = $('.sheet-media'), sImg = $('#sheet-img'), sType = $('#sheet-type');
  let lenis = null, opener = null;
  const COLORS = {crust: '#b5582a', ink: '#2a211b', flour: '#e3d6c2', milk: '#fbf6ee', rye: '#6e4a2e'};
  const INK = {crust: '#fbf6ee', ink: '#f0b48a', flour: '#2a211b', milk: '#b5582a', rye: '#f6ead9'};
  function openSheet(i) {
    const d = DECK[i];
    opener = cards[i];
    sheet.classList.toggle('is-type', !!d.type);
    if (d.img) { sImg.src = `assets/img/${d.img}.jpg`; sImg.alt = d.name; sMedia.style.background = '#000'; }
    else { sImg.removeAttribute('src'); sImg.alt = ''; sType.innerHTML = `<b>${d.type}</b>`; sType.style.color = INK[d.c]; sMedia.style.background = COLORS[d.c]; }
    $('#sheet-name').textContent = d.name;
    $('#sheet-desc').textContent = d.desc;
    $('#sheet-price').textContent = d.price;
    $('#sheet-when').textContent = d.when;
    sheet.hidden = false;
    document.body.classList.add('is-locked');
    if (lenis) lenis.stop();
    const from = opener.getBoundingClientRect(), to = sMedia.getBoundingClientRect();
    if (!reduced && to.width) {
      sMedia.style.transition = 'none';
      sMedia.style.transform = `translate(${from.left - to.left}px,${from.top - to.top}px) scale(${from.width / to.width},${from.height / to.height})`;
      sMedia.getBoundingClientRect();
      sMedia.style.transition = 'transform .8s cubic-bezier(.22,.8,.24,1)';
      sMedia.style.transform = 'none';
    }
    requestAnimationFrame(() => sheet.classList.add('is-open'));
    $('#sheet-close').focus({preventScroll: true});
  }
  function closeSheet() {
    if (sheet.hidden) return;
    sheet.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    if (lenis) lenis.start();
    setTimeout(() => { if (!sheet.classList.contains('is-open')) sheet.hidden = true; }, reduced ? 0 : 420);
    if (opener) opener.focus({preventScroll: true});
  }
  cards.forEach((c, i) => c.addEventListener('click', () => { if (!swiped) openSheet(i); }));
  $('#sheet-close').addEventListener('click', closeSheet);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
  sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });

  // Открыто ли сейчас: по московскому времени
  (function openState() {
    try {
      const parts = new Intl.DateTimeFormat('ru-RU', {timeZone: 'Europe/Moscow', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'}).formatToParts(new Date());
      const get = t => (parts.find(p => p.type === t) || {}).value || '';
      const wd = get('weekday').toLowerCase(), mins = Number(get('hour')) * 60 + Number(get('minute'));
      const weekend = /сб|вс/.test(wd), from = weekend ? 9 * 60 : 7 * 60 + 30, to = 21 * 60;
      const open = mins >= from && mins < to;
      $$('.open-state').forEach(el => {
        el.classList.toggle('is-open', open);
        el.textContent = open ? 'Сейчас открыто, до 21:00' : `Сейчас закрыто, откроемся в ${weekend ? '9:00' : '7:30'}`;
      });
    } catch (e) { /* без Intl остаются часы из разметки */ }
  })();

  // Риски циферблата
  const ticks = $('.dial-ticks');
  for (let k = 0; k < 60; k++) { const i = document.createElement('i'); if (k % 5 === 0) i.className = 'major'; i.style.transform = `rotate(${k * 6}deg)`; ticks.append(i); }
  const handH = $('#hand-h'), handM = $('#hand-m'), dialTime = $('#dial-time');
  function setClock(p) {
    const minutes = 7 * 60 + 30 + p * 270;
    handM.style.transform = `rotate(${(minutes % 60) * 6 + Math.floor(minutes / 60) * 360}deg)`;
    handH.style.transform = `rotate(${(minutes / 60) * 30}deg)`;
    const h = Math.floor(minutes / 60), m = Math.floor(minutes % 60 / 5) * 5;
    dialTime.textContent = `${h}:${String(m).padStart(2, '0')}`;
  }
  const roastMin = $('#roast-min');
  function setRoast(p) {
    const sec = Math.round(p * 660);
    roastMin.textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
  }

  function onResize() { W = innerWidth; H = innerHeight; mobile = W <= 760; drawFaces(); }
  addEventListener('resize', onResize);

  if (reduced || !window.gsap || !window.ScrollTrigger) {
    document.body.classList.add('reduced');
    setClock(1); setRoast(1);
    frame(performance.now());
    addEventListener('resize', () => frame(performance.now()));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if (window.Lenis) {
    lenis = new Lenis({lerp: .11, smoothWheel: true});
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  ScrollTrigger.create({
    // пальцем (телефон и планшет) колода держит экран коротко: длинное закрепление под пальцем — «страница застряла»
    trigger: '.deck', start: 'top top', end: () => '+=' + innerHeight * (innerWidth <= 760 || matchMedia('(pointer: coarse)').matches ? 1.45 : 3.2),
    pin: '.deck-screen', anticipatePin: 1, invalidateOnRefresh: true,
    onUpdate: self => { target = self.progress; }
  });
  requestAnimationFrame(frame);

  const scrub = (el, from, to, trig, start = 'top bottom', end = 'bottom top') =>
    gsap.fromTo(el, from, {...to, ease: 'none', scrollTrigger: {trigger: trig || el, start, end, scrub: .6, invalidateOnRefresh: true}});

  // Печь: кадр отъезжает, цитата поднимается строками из-под маски
  scrub('.oven-shot img', {scale: 1.28, yPercent: -2}, {scale: 1, yPercent: 4}, '.oven-shot', 'top top', 'bottom top');
  gsap.fromTo('.oven-quote .ln > span', {yPercent: 110, opacity: 0}, {yPercent: 0, opacity: 1, ease: 'none', stagger: .12,
    scrollTrigger: {trigger: '.oven-shot', start: 'top 20%', end: 'center 30%', scrub: true}});
  scrub('.oven-title', {y: 60}, {y: -20}, '.oven-spread', 'top bottom', 'top 30%');
  $$('.schedule li').forEach((li, k) => {
    gsap.fromTo(li, {'--draw': 0, y: 50 + k * 30}, {'--draw': 1, y: 0, ease: 'none', scrollTrigger: {trigger: '.schedule', start: 'top 95%', end: 'top 45%', scrub: true}});
  });
  scrub('.oven-fig', {y: 120}, {y: -60}, '.oven-fig');
  scrub('.oven-fig img', {scale: 1.2}, {scale: 1}, '.oven-fig');

  // Обжарка: зерно темнеет, таймер идёт до 11 минут
  const heat = {p: 0};
  gsap.to(heat, {p: 1, ease: 'none', scrollTrigger: {trigger: '.roast', start: 'top 75%', end: 'center 45%', scrub: true}, onUpdate: () => {
    $('.roast-heat').style.opacity = (heat.p * .92).toFixed(3);
    $('#roast-bar').style.transform = `scaleX(${heat.p.toFixed(3)})`;
    setRoast(heat.p);
  }});
  scrub('.roast-shot img', {scale: 1.16, yPercent: -3}, {scale: 1.02, yPercent: 3}, '.roast-shot');
  // бегунок встаёт на свою степень обжарки
  [.12, .5, .9].forEach((v, k) => { const lvl = $(`.o${k + 1} .lvl`); scrub(`.o${k + 1} .lvl i`, {x: 0}, {x: () => (lvl.offsetWidth - 16) * v}, `.o${k + 1}`, 'top 90%', 'top 50%'); });
  $$('.origin h3').forEach((h, k) => scrub(h, {xPercent: -4 - k * 2}, {xPercent: 2}, h.closest('.origin')));
  scrub('.pack', {y: 80}, {y: mobile ? 0 : -80}, '.pack');

  // Завтраки: стрелка идёт к полудню
  const clock = {p: 0};
  setClock(0);
  gsap.to(clock, {p: 1, ease: 'none', scrollTrigger: {trigger: '.dial', start: 'top 85%', end: 'bottom 35%', scrub: true}, onUpdate: () => setClock(clock.p)});
  scrub('.dial-face img', {scale: 1.3, rotate: -6}, {scale: 1.08, rotate: 0}, '.dial');
  gsap.from('.breakfast li', {y: 34, opacity: 0, duration: .9, ease: 'power3.out', stagger: .08, scrollTrigger: {trigger: '.breakfast', start: 'top 82%'}});
  scrub('.noon-head h2', {xPercent: mobile ? 0 : 6}, {xPercent: 0}, '.noon', 'top bottom', 'top 30%');

  // Меню: лист лежит на столе наискось и распрямляется, фото бариста приколото сверху
  scrub('.sheet-paper', {rotate: mobile ? -2 : -4, y: 120, scale: .94}, {rotate: 0, y: 0, scale: 1}, '.doska', 'top bottom', 'top 15%');
  scrub('.pinned', {rotate: 14, y: mobile ? 50 : 90}, {rotate: 5, y: mobile ? -10 : -30}, '.doska'); // ход короткий: фото держится в углу над шапкой, на списки не заезжает
  $$('.m-col').forEach(col => gsap.from($$('.m-row', col), {y: 18, opacity: 0, duration: .7, ease: 'power3.out', stagger: .05, scrollTrigger: {trigger: col, start: 'top 85%'}}));

  // Две точки: створки съезжаются, свет в окнах загорается по ходу
  $$('.half').forEach((hf, k) => {
    if (!mobile) scrub(hf, {xPercent: k ? 8 : -8}, {xPercent: 0}, '.halves', 'top bottom', 'top 20%');
    scrub($('.win-dark', hf), {opacity: .82}, {opacity: .04}, hf, 'top 85%', 'top 10%');
    scrub($('.half-photo img', hf), {scale: 1.18}, {scale: 1}, hf);
  });
  scrub('.giant', {xPercent: 6}, {xPercent: -3}, '.giant', 'top bottom', 'bottom bottom');

  addEventListener('load', () => ScrollTrigger.refresh());
})();
