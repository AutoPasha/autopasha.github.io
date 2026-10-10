(function () {
  var doc = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var desktop = matchMedia('(min-width: 900px)');
  var intro = document.querySelector('.intro');
  var video = document.querySelector('.hero__video');

  if (video && reduce) video.pause();

  var lenis = null;
  if (!reduce && window.Lenis && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -64 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  if (reduce || !window.gsap) {
    if (intro) intro.remove();
    doc.classList.remove('intro-on');
    return;
  }

  var lines = document.querySelectorAll('[data-line]');
  var plate = document.querySelector('.hero__plate');
  var strips = document.querySelectorAll('.strip');
  gsap.set(lines, { yPercent: 110 });
  gsap.set(strips, { autoAlpha: 0 });
  gsap.set(plate, { autoAlpha: 0, y: 40 });
  if (video) gsap.set(video, { clipPath: 'inset(42% 0% 42% 0%)' });

  function heroIn() {
    var tl = gsap.timeline();
    tl.to(video, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.out' }, 0)
      .to(lines, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.12 }, 0.2)
      .to(strips, { autoAlpha: 1, duration: 0.6 }, 0.5)
      .to(plate, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 0.35);
  }

  function endIntro() {
    doc.classList.remove('intro-on');
    if (intro) intro.remove();
  }

  var seen = false;
  try { seen = !!sessionStorage.getItem('podemnik-intro'); } catch (e) {}

  if (doc.classList.contains('intro-on') && intro) {
    var n = intro.querySelector('[data-intro-n]');
    var line = intro.querySelector('.intro__line');
    var counter = { v: 1 };
    gsap.set(line, { scaleX: 0, transformOrigin: '0% 50%' });
    gsap.timeline({
      onComplete: function () {
        try { sessionStorage.setItem('podemnik-intro', '1'); } catch (e) {}
        endIntro();
      }
    })
      .to(line, { scaleX: 1, duration: 0.7, ease: 'expo.out' }, 0)
      .to(counter, {
        v: 6, duration: 0.8, ease: 'none', snap: { v: 1 },
        onUpdate: function () { n.textContent = Math.round(counter.v); }
      }, 0)
      .to(intro, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8, ease: 'expo.inOut' }, '+=0.1')
      .add(heroIn, '-=0.5');
  } else {
    if (intro) intro.remove();
    heroIn();
  }

  // ленты: скорость и направление от скорости колеса, как ScrollVelocity
  var tracks = [];
  function fillTrack(track) {
    var unit = track.querySelector('.strip__unit');
    track.querySelectorAll('.strip__unit:not(:first-child)').forEach(function (u) { u.remove(); });
    var w = unit.offsetWidth;
    if (!w) return 0;
    var copies = Math.ceil((window.innerWidth * 1.4) / w) + 1;
    for (var i = 0; i < copies; i++) {
      var c = unit.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    }
    return w;
  }
  function buildTracks() {
    tracks = [];
    document.querySelectorAll('[data-strip]').forEach(function (track, i) {
      var w = fillTrack(track);
      if (w) tracks.push({ el: track, w: w, pos: 0, dir: i % 2 ? -1 : 1 });
    });
  }
  buildTracks();
  if (document.fonts) document.fonts.ready.then(function () { buildTracks(); ScrollTrigger.refresh(); });

  var lastY = window.scrollY;
  var sv = 0;
  var last = 0;
  gsap.ticker.add(function (time, dt) {
    var step = Math.min(0.05, dt / 1000);
    var y = window.scrollY;
    var raw = (y - lastY) / Math.max(step, 0.001);
    lastY = y;
    sv += (raw - sv) * (1 - Math.exp(-step * 8));
    var sign = sv > 25 ? 1 : sv < -25 ? -1 : 0;
    var factor = Math.min(5, Math.abs(sv) / 1000 * 5);
    tracks.forEach(function (t, i) {
      if (sign) t.dir = sign * (i % 2 ? -1 : 1);
      var move = t.dir * 70 * step * (1 + factor);
      t.pos = (((t.pos + move) % t.w) + t.w) % t.w;
      t.el.style.transform = 'translate3d(' + (-t.pos).toFixed(2) + 'px,0,0)';
    });
  });

  // абзац: слова проявляются по мере чтения
  var words = document.querySelector('[data-words]');
  if (words) {
    var parts = words.textContent.trim().split(/\s+/);
    words.textContent = '';
    parts.forEach(function (p, i) {
      var s = document.createElement('span');
      s.className = 'w';
      s.textContent = p;
      words.appendChild(s);
      if (i < parts.length - 1) words.appendChild(document.createTextNode(' '));
    });
    var wspans = words.querySelectorAll('.w');
    gsap.set(wspans, { opacity: 0.15 });
    gsap.timeline({
      scrollTrigger: { trigger: words, start: 'top 85%', end: 'bottom 55%', scrub: true }
    }).to(wspans, { opacity: 1, duration: 0.2, stagger: { each: 0.1 }, ease: 'none' });
  }

  // чертёж
  var NODES = [
    { name: 'Двигатель', price: '1 200 ₽', text: 'Компьютерная диагностика 1 200 ₽. Замена масла и фильтра от 900 ₽, это работа. Запчасти свои или ваши.', photos: ['assets/img/diag.jpg', 'assets/img/oil.jpg'], alts: ['Ноутбук диагностики у открытого капота', 'Замена масла и фильтра'] },
    { name: 'Тормоза', price: 'от 1 500 ₽', text: 'Замена тормозных колодок на оси от 1 500 ₽. Гарантия на работы 12 месяцев.', photos: ['assets/img/brakes.jpg'], alts: ['Тормозной диск и суппорт крупно'] },
    { name: 'Подвеска', price: 'по осмотру', text: 'Ремонт подвески по результатам осмотра. Гарантия на работы 12 месяцев.', photos: ['assets/img/team.jpg'], alts: ['Два мастера у верстака'] },
    { name: 'Колёса', price: '2 400 ₽', text: 'Развал-схождение 2 400 ₽. Шиномонтаж R15-R17 от 2 200 ₽ за комплект.', photos: ['assets/img/wheel.jpg'], alts: ['Стенд развал-схождения'] },
    { name: 'Кондиционер', price: '2 800 ₽', text: 'Заправка кондиционера 2 800 ₽. Гарантия на работы 12 месяцев.', photos: [], alts: [] }
  ];
  var dName = document.querySelector('[data-d-name]');
  var dText = document.querySelector('[data-d-text]');
  var dPrice = document.querySelector('[data-d-price]');
  var dImgs = document.querySelectorAll('[data-d-img]');
  var pressables = document.querySelectorAll('[data-i]');

  function select(i) {
    var d = NODES[i];
    dName.textContent = d.name;
    dText.textContent = d.text;
    dPrice.textContent = d.price;
    dImgs.forEach(function (img, k) {
      if (d.photos[k]) {
        img.src = d.photos[k];
        img.alt = d.alts[k];
        img.hidden = false;
      } else {
        img.removeAttribute('src');
        img.hidden = true;
      }
    });
    pressables.forEach(function (b) {
      b.setAttribute('aria-pressed', String(Number(b.dataset.i) === i));
    });
  }
  pressables.forEach(function (b) {
    b.addEventListener('click', function () { select(Number(b.dataset.i)); });
  });
  select(0);

  function buildChart(paused) {
    var sel = desktop.matches ? '.chert__svg--side .draw' : '.chert__svg--top .draw';
    var paths = document.querySelectorAll(sel);
    var dots = document.querySelectorAll('.uzel__dot');
    var rings = document.querySelectorAll('.uzel__ring');
    var leads = document.querySelectorAll('.chert__lead line');
    var labels = document.querySelectorAll('.spisok li');
    gsap.set(paths, { strokeDasharray: '1 1', strokeDashoffset: 1 });
    gsap.set(dots, { scale: 0 });
    gsap.set(rings, { scale: 0 });
    gsap.set(leads, { opacity: 0 });
    gsap.set(labels, { autoAlpha: 0 });
    var tl = gsap.timeline({ paused: paused });
    tl.to(paths, { strokeDashoffset: 0, duration: 1, stagger: { each: 0.09 }, ease: 'none' })
      .to(leads, { opacity: 1, duration: 0.3, stagger: 0.05 }, '>-0.1')
      .to(dots, { scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(3)' }, '>-0.1')
      .to(rings, { scale: 1, duration: 0.6, stagger: 0.08, ease: 'expo.out' }, '<')
      .to(labels, { autoAlpha: 1, duration: 0.4, stagger: 0.08 }, '<');
    return tl;
  }

  var mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', function () {
    var tl = buildChart(false);
    ScrollTrigger.create({
      trigger: '.chert__art',
      start: 'center center',
      end: '+=120%',
      pin: '.chert',
      scrub: 1,
      animation: tl
    });
    var frame = document.querySelector('.final__frame');
    var img = frame.querySelector('img');
    gsap.fromTo(frame, { clipPath: 'inset(22% 26% 22% 26%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
      scrollTrigger: { trigger: '.final', start: 'top top', end: '+=90%', pin: true, scrub: true }
    });
    gsap.fromTo(img, { scale: 1.25 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: '.final', start: 'top top', end: '+=90%', scrub: true }
    });
  });
  mm.add('(max-width: 899px)', function () {
    var tl = buildChart(true);
    ScrollTrigger.create({
      trigger: '.chert__art',
      start: 'top 80%',
      once: true,
      onEnter: function () { tl.play(); }
    });
    var frame = document.querySelector('.final__frame');
    gsap.set(frame, { clipPath: 'inset(0% 0% 0% 0%)' });
  });

  // табло
  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  document.querySelectorAll('[data-flap]').forEach(function (el) {
    var text = el.textContent.trim();
    el.setAttribute('aria-label', text);
    el.textContent = '';
    var tiles = [];
    Array.prototype.forEach.call(text, function (ch) {
      var t = document.createElement('span');
      t.className = 'flap__tile' + (ch === ' ' ? ' flap__tile--sp' : '');
      t.setAttribute('aria-hidden', 'true');
      t.textContent = ch === ' ' ? ' ' : charset.charAt(Math.floor(Math.random() * charset.length));
      el.appendChild(t);
      tiles.push({ node: t, ch: ch });
    });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: function () {
        tiles.forEach(function (tile, i) {
          if (tile.ch === ' ') return;
          var s = { v: 0 };
          var steps = 10;
          gsap.to(s, {
            v: steps, duration: 0.08 * steps, delay: i * 0.05, ease: 'none', snap: { v: 1 },
            onUpdate: function () {
              tile.node.textContent = s.v >= steps ? tile.ch : charset.charAt(Math.floor(Math.random() * charset.length));
            }
          });
        });
      }
    });
  });

  // магнитная кнопка только при мыши
  if (matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnet]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.3,
          y: (e.clientY - r.top - r.height / 2) * 0.3,
          duration: 0.6, ease: 'expo.out'
        });
      });
      el.addEventListener('pointerleave', function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }
})();
