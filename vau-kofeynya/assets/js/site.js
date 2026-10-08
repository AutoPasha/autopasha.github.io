(() => {
  'use strict';
  const menu = [
    ['Капучино 0,3', '230 ₽', 'На альтернативном молоке', 'В часы работы', 'window-cup'],
    ['Эспрессо', '160 ₽', '40 мл, тёмная обжарка недели', 'В часы работы', 'barista'],
    ['Круассан с миндалём', '190 ₽', 'Утренняя выпечка', 'Из печи в 7:30', 'croissant'],
    ['Хлеб на закваске', '340 ₽', '400 г, на дикой дрожже, два дня выдержки', 'Из печи в 7:30', 'bread-board'],
    ['Синнабон', '260 ₽', 'Корица и кардамон', 'Из печи в 12:00', 'shelves'],
    ['Фильтр', '210 ₽', '270 мл, зерно недели', 'В часы работы', 'roaster'],
    ['Сырники со сметаной', '390 ₽', '200 г, сметана и варенье', 'Завтраки до 12:00', 'hero-counter'],
    ['Зерно на вынос', 'от 790 ₽', 'Пачка 250 г, забрать можно без заказа', 'Обжарка по вторникам, к 15:00', 'coffee-bag'],
    ['Гранола с йогуртом', '360 ₽', 'Своя гранола, фрукты', 'Завтраки до 12:00', 'hall-night'],
    ['Раф', '290 ₽', 'На кокосовом молоке, 200 мл', 'В часы работы', 'window-cup'],
    ['Сезонный с облепихой', '320 ₽', 'Сезонный напиток меняем по вторникам', 'Пока не разобрали', 'barista'],
    ['Шарлотка с яблоками', '280 ₽', 'Порция, 180 г', 'Сладкая партия в 12:00', 'croissant'],
    ['Багет с кунжутом', '220 ₽', 'Хлеб на вечер', 'К 17:00, пока есть', 'bread-board'],
    ['Кекс на рисовой муке', '200 ₽', 'Без глютена, без сахара в составе', 'Сладкая партия в 12:00', 'shelves'],
    ['Эфиопия, Иргачеффе', '', 'Чёрный чай, лимон, жасмин. Светлая обжарка под фильтр', 'Обжарка по вторникам, к 15:00', 'roaster'],
    ['Шакшука с фетой', '450 ₽', 'В сковороде, хлеб на заказ', 'Завтраки до 12:00', 'hero-counter'],
    ['Колумбия, Уила', '', 'Карамель, вишня, фундук. Средняя обжарка', 'Обжарка по вторникам, к 15:00', 'coffee-bag'],
    ['Омлет с грибами', '340 ₽', 'Добавьте томаты и зелень', 'Завтраки до 12:00', 'hall-night']
  ];
  const scene = document.querySelector('#scene');
  const cards = menu.map((item, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.setAttribute('aria-label', `${item[0]}, ${item[1] || 'цену уточните у бариста'}. ${item[2]}. ${item[3]}`);
    card.innerHTML = `<img src="assets/img/${item[4]}.jpg" alt="${item[0]}: фото кофейни" decoding="async" ${i > 8 ? 'loading="lazy"' : ''}><span class="card-label"><span>${item[0]}</span><b>${item[1]}</b></span>`;
    scene.append(card);
    return card;
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !window.gsap || !window.ScrollTrigger) {
    document.body.classList.add('reduced');
    cards.forEach(card => { card.querySelector('img').loading = 'eager'; });
    cards.forEach((card, i) => card.addEventListener('click', () => {
      card.setAttribute('aria-pressed', card.getAttribute('aria-pressed') !== 'true' ? 'true' : 'false');
      card.querySelector('.card-label span').textContent = card.getAttribute('aria-pressed') === 'true' ? `${menu[i][0]}. ${menu[i][2]}. ${menu[i][3]}` : menu[i][0];
      card.style.height = 'auto';
      card.querySelector('.card-label').style.height = 'auto';
      card.querySelector('.card-label').style.minHeight = '92px';
    }));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  const lenis = window.Lenis ? new Lenis({duration: 1.1, smoothWheel: true, anchors: true}) : null;
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const facts = [
    ['', ''],
    ['Своя обжарка по вторникам', 'К 15:00 зерно уже в кофейне.'],
    ['Хлеб из печи в 7:30', 'Закваску ставим в 22:00. Тесто в печь в 5:40.'],
    ['20 позиций', 'Кофе, выпечка и завтраки до полудня.'],
    ['Две точки в Казани', 'Профсоюзная, 23 и Островского, 57б.'],
    ['', '']
  ];
  const intro = document.querySelector('.intro');
  const story = document.querySelector('.story');
  const detail = document.querySelector('.menu-detail');
  const controls = document.querySelector('.menu-controls');
  const hint = document.querySelector('.scroll-hint');
  const ease = gsap.parseEase('power3.inOut');
  let mobile = innerWidth <= 700, progress = 0, selected = 0, lastAuto = -1;
  let hover = -1, tiltX = 0, tiltY = 0, wheelAngle = 0, currentFact = -1;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const position = (x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1) => ({x,y,z,rx,ry,rz,s});
  function layout(stage, i) {
    const n = i - 8.5, w = innerWidth, h = innerHeight;
    const archAngle = n / 17 * (mobile ? 160 : 200) * Math.PI / 180;
    const radius = mobile ? w * .28 : Math.min(w * .29, 410);
    if (stage === 0) return position(Math.sin(archAngle) * radius, -Math.cos(archAngle) * radius + (mobile ? 20 : 260), -Math.abs(n) * 3, 0, 0, archAngle * 180 / Math.PI, mobile ? .6 : .87);
    if (stage === 1) return position(n * 1.8 + (mobile ? 0 : w * .18), n * 1.2, i * 2, 0, 0, ((i * 7) % 9) - 4, mobile ? .9 : 1.15);
    if (stage === 2) return position(n * (mobile ? 11 : 26) + (mobile ? 0 : w * .18), n * (mobile ? 9 : 17), -i * 60, -8, -22, -8, mobile ? 1 : 1.1);
    if (stage === 3) {
      const angle = i / 18 * Math.PI * 2 + wheelAngle;
      const r = mobile ? w * .31 : Math.min(w * .24, h * .29);
      return position(Math.sin(angle) * r + (mobile ? 0 : w * .18), Math.cos(angle) * r, -70, 0, 0, -angle * 180 / Math.PI, mobile ? .46 : .7);
    }
    if (stage === 4) return position(Math.sin(i * 2.4) * (mobile ? w * .30 : w * .19) + (mobile ? 0 : w * .18), Math.cos(i * 1.8) * (mobile ? h * .13 : h * .28), -100 - (i % 4) * 100, ((i * 37) % 90) - 45, ((i * 53) % 100) - 50, ((i * 71) % 60) - 30, mobile ? .64 : .88);
    const d = i - selected;
    return position(d * (mobile ? w * .43 : 230), mobile ? -5 : 0, -Math.abs(d) * 150, 0, d === 0 ? 0 : d > 0 ? -55 : 55, 0, d === 0 ? (mobile ? 1.13 : 1.4) : (mobile ? .88 : 1));
  }
  function updateDetail() {
    const item = menu[selected];
    document.querySelector('#detail-name').innerHTML = `${item[0]}${item[1] ? ' <span class="detail-price">· ' + item[1] + '</span>' : ''}`;
    document.querySelector('#detail-description').textContent = item[2];
    document.querySelector('#detail-ready').textContent = item[3];
    document.querySelector('#menu-count').textContent = `${selected + 1} / 18`;
    document.querySelector('#previous').disabled = selected === 0;
    document.querySelector('#next').disabled = selected === 17;
    cards.forEach((card, i) => card.setAttribute('aria-pressed', String(i === selected)));
  }
  function render() {
    const sequence = Math.min(progress / .79, 1) * 5;
    const base = Math.min(4, Math.floor(sequence));
    const phase = sequence - base;
    const stage = clamp(Math.round(sequence), 0, 5);
    if (stage !== currentFact) {
      document.querySelector('#fact').textContent = facts[stage][0];
      document.querySelector('#fact-note').textContent = facts[stage][1];
      currentFact = stage;
    }
    const introAlpha = clamp(1 - sequence * 1.8, 0, 1);
    intro.style.opacity = introAlpha;
    intro.style.transform = `translateY(${(1-introAlpha)*25}px)`;
    story.style.opacity = Math.min(clamp(sequence - .5, 0, 1), clamp(5 - sequence, 0, 1));
    const finalAlpha = clamp((sequence - 4.5) * 2, 0, 1);
    detail.style.opacity = hover >= 0 ? 0 : finalAlpha;
    controls.style.opacity = finalAlpha;
    controls.style.visibility = finalAlpha > .95 ? 'visible' : 'hidden';
    hint.style.opacity = 1 - finalAlpha;
    document.querySelector('.progress-line span').style.transform = `scaleX(${progress})`;
    const ribbon = sequence === 5;
    const storyTop = story.offsetTop;
    const storyRight = story.offsetLeft + story.offsetWidth;
    const originX = scene.offsetLeft;
    const originY = scene.offsetTop;
    cards.forEach((card, i) => {
      const delay = Math.abs(i - 8.5) * .02;
      const t = ease(clamp((phase - delay) / (1 - .17), 0, 1));
      const a = layout(base, i), b = layout(base + 1, i), p = {};
      Object.keys(a).forEach(key => p[key] = a[key] + (b[key] - a[key]) * t);
      if (hover === i) {
        p.z += 80; p.rx = tiltX; p.ry = tiltY; p.rz = 0;
        p.s = Math.max(p.s, 1);
      }
      // Зона фактов остаётся свободной даже при наклоне и приближении карточки.
      if (sequence > .1 && sequence < 5) {
        const radius = Math.hypot(card.offsetWidth, card.offsetHeight) * p.s / 2;
        const projection = 1600 / (1600 - p.z - radius);
        const clearance = Math.min(clamp((sequence - .1) / .4, 0, 1), clamp((5 - sequence) / .5, 0, 1));
        if (mobile) p.y += (Math.min(p.y, (storyTop - 28 - originY) / projection - radius) - p.y) * clearance;
        else p.x += (Math.max(p.x, (storyRight + 48 - originX) / projection + radius) - p.x) * clearance;
      }
      card.classList.toggle('caption-visible', hover >= 0 ? hover === i : ribbon && selected === i);
      card.classList.toggle('central-card', ribbon && selected === i);
      card.style.zIndex = hover === i ? 30 : '';
      card.style.transform = `translate3d(${p.x}px,${p.y}px,${p.z}px) rotateX(${p.rx}deg) rotateY(${p.ry}deg) rotateZ(${p.rz}deg) scale(${p.s})`;
      card.style.opacity = sequence > 4.9 && Math.abs(i-selected) > (mobile ? 2 : 4) ? 0 : 1;
      card.style.pointerEvents = card.style.opacity === '0' ? 'none' : 'auto';
      card.tabIndex = sequence > 4.9 && i !== selected ? -1 : 0;
    });
  }
  const trigger = ScrollTrigger.create({trigger: '.journey', start: 'top top', end: () => '+=' + innerHeight * 5, pin: '.screen', scrub: .8, animation: gsap.to({value:0}, {value:1, ease:'none', duration:1, onUpdate() {
    progress = this.targets()[0].value;
    const auto = clamp(Math.round((progress - .8) / .2 * 17), 0, 17);
    if (auto !== lastAuto) { lastAuto = auto; selected = auto; updateDetail(); }
    render();
  }}), invalidateOnRefresh: true});
  function select(index) {selected = clamp(index, 0, 17); updateDetail(); render();}
  document.querySelector('#previous').addEventListener('click', () => select(selected - 1));
  document.querySelector('#next').addEventListener('click', () => select(selected + 1));
  cards.forEach((card, i) => {
    card.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse') return;
      hover = i;
      const box = card.getBoundingClientRect();
      tiltX = -(event.clientY - box.y - box.height/2) / box.height * 10;
      tiltY = (event.clientX - box.x - box.width/2) / box.width * 10;
      render();
    });
    card.addEventListener('pointerleave', () => {hover = -1; render();});
    card.addEventListener('click', () => {
      if (progress < .79) {selected = i; lastAuto = i; const y = trigger.start + ( .8 + i / 17 * .2) * (trigger.end-trigger.start); if (lenis) lenis.scrollTo(y, {immediate: true}); else scrollTo(0,y);}
      else select(i);
    });
  });
  let touchStart = null;
  const screen = document.querySelector('.screen');
  screen.addEventListener('touchstart', event => {touchStart = [event.touches[0].clientX, event.touches[0].clientY];}, {passive:true});
  screen.addEventListener('touchend', event => {
    if (!touchStart || progress < .77) return;
    const dx = event.changedTouches[0].clientX - touchStart[0], dy = event.changedTouches[0].clientY - touchStart[1];
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select(selected + (dx < 0 ? 1 : -1));
    touchStart = null;
  }, {passive:true});
  document.addEventListener('keydown', event => {
    if (progress < .77 || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault(); select(selected + (event.key === 'ArrowRight' ? 1 : -1));
  });
  addEventListener('resize', () => {mobile = innerWidth <= 700; render();});
  gsap.ticker.add((time, delta) => {
    if (progress > .39 && progress < .64) {wheelAngle += delta * .00009; render();}
  });
  updateDetail(); render();
})();
