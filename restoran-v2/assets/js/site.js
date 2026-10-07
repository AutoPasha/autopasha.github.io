/* Сезон: движение и поведение. Чистый JS, без сети. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var narrow = window.matchMedia('(max-width: 999px)').matches;
  var hasGsap = !!window.gsap && !reduced;

  /* ---------------- искры: единственное движение, которое живёт всегда ---------------- */
  function embers(canvas, opt) {
    opt = opt || {};
    if (!canvas || !canvas.getContext) return null;
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0, dpr = 1, parts = [], raf = null, alive = true;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, opt.maxDpr || 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    function seed() {
      var n = Math.round(Math.min(opt.count || 34, (w * h) / 26000));
      parts = [];
      for (var i = 0; i < n; i++) parts.push(make(true));
    }
    function make(any) {
      return {
        x: Math.random() * w,
        y: any ? Math.random() * h : h + Math.random() * 60,
        r: (Math.random() * 1.5 + .5) * (opt.scale || 1),
        vy: -(Math.random() * .32 + .12),
        vx: (Math.random() - .5) * .22,
        a: Math.random() * .55 + .18,
        life: Math.random() * 260
      };
    }
    function step() {
      if (!alive) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy; p.vy *= .995; p.life -= 1;
        if (p.life < 0 || p.y < -20) { parts[i] = make(false); continue; }
        var k = Math.min(1, p.life / 120);
        var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, 'rgba(255,214,150,' + (p.a * k) + ')');
        g.addColorStop(.35, 'rgba(226,94,65,' + (p.a * k * .8) + ')');
        g.addColorStop(1, 'rgba(226,94,65,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }
    function start() { if (alive && !raf && !reduced) raf = requestAnimationFrame(step); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    size();
    window.addEventListener('resize', size);
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { e[0].isIntersecting ? start() : stop(); }, { threshold: 0 }).observe(canvas);
    }
    start();
    return { start: start, stop: stop };
  }

  /* ---------------- заставка ---------------- */
  (function splash() {
    var el = $('#splash');
    if (!el) return;
    if (reduced || sessionStorage.getItem('sezon-splash') === '1') { el.remove(); return; }
    sessionStorage.setItem('sezon-splash', '1');
    embers($('#splashCv'), { count: 60, scale: 1.3, maxDpr: 1.5 });
    var curtain = $('#splashCurtain');
    requestAnimationFrame(function () {
      setTimeout(function () { el.classList.add('lit'); }, 120);
      setTimeout(function () {
        curtain.style.transition = 'transform .95s cubic-bezier(.16,1,.3,1)';
        curtain.style.transform = 'translateY(-101%)';
        el.style.transition = 'opacity .5s ease .8s';
        el.style.opacity = '0';
      }, 1250);
      setTimeout(function () { el.remove(); }, 2300);
    });
  })();

  /* ---------------- первый экран: искры поверх видео ---------------- */
  embers($('#heroEmbers'), { count: 26, scale: 1, maxDpr: 1.5 });
  if (reduced) { var hv = $('#heroVideo'); if (hv) hv.remove(); }

  /* ---------------- плавная прокрутка ---------------- */
  var lenis = null;
  if (!reduced && window.Lenis && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.4 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  function goTo(sel) {
    var el = $(sel);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -10, duration: 1.3 });
    else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }

  /* ---------------- шапка, меню, якоря ---------------- */
  (function header() {
    var top = $('#top'), burger = $('#burger'), drawer = $('#drawer');
    if (burger && drawer) {
      burger.addEventListener('click', function () {
        var on = drawer.classList.toggle('on');
        burger.classList.toggle('on', on);
        burger.setAttribute('aria-expanded', on ? 'true' : 'false');
        document.body.style.overflow = on ? 'hidden' : '';
      });
      $$('#drawer a').forEach(function (a) {
        a.addEventListener('click', function () {
          drawer.classList.remove('on'); burger.classList.remove('on');
          burger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
        });
      });
    }
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id === '#top') { e.preventDefault(); lenis ? lenis.scrollTo(0) : window.scrollTo(0, 0); return; }
        if (id.length < 2 || !$(id)) return;
        e.preventDefault(); goTo(id);
      });
    });
    if (top) {
      function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  })();

  /* ---------------- шов: видео перетекает в контент ----------------
     Начальное положение задаёт только JS: в CSS у этих строк transform нет. */
  function wrapWords(node) {
    if (!node || node.dataset.split === '1') return;
    node.dataset.split = '1';
    Array.prototype.slice.call(node.childNodes).forEach(function (k) {
      if (k.nodeType === 3) {
        var frag = document.createDocumentFragment();
        k.nodeValue.split(/(\s+)/).forEach(function (w) {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
          var o = document.createElement('span'); o.className = 'w';
          var n = document.createElement('span'); n.className = 'wi'; n.textContent = w;
          o.appendChild(n); frag.appendChild(o);
        });
        node.replaceChild(frag, k);
      } else if (k.nodeType === 1) wrapWords(k);
    });
  }
  wrapWords(document.querySelector('.hrow-2'));

  (function intro() {
    var media = $('#heroMedia');
    if (!hasGsap) {
      $$('.hero-title .mask > span').forEach(function (el) { gsap.set(el, { yPercent: 0 }); });
      return;
    }
    gsap.set('.hero-title .hrow-1', { yPercent: 108 });
    gsap.set('.hero-title .hrow-2 .wi', { yPercent: 112 });
    gsap.set('#heroMedia', { clipPath: 'inset(0% 0% 100% 0%)' });
    gsap.set('.hero-sub, .hero-acts, .hero-scroll, .hero-play, .hero-side', { opacity: 0, y: 26 });

    var tl = gsap.timeline({
      delay: reduced ? 0 : 1.85,
      onComplete: function () { seam(); }
    });
    tl.to('#heroMedia', { clipPath: 'inset(0% 0% 0% 0%)', duration: 2, ease: 'expo.inOut' }, 0)
      .to('.hero-title .hrow-1', { yPercent: 0, duration: 1.3, ease: 'expo.out' }, .15)
      .to('.hero-title .hrow-2 .wi', { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: .09 }, .32)
      .to('.hero-sub', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, .8)
      .to('.hero-acts', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, .92)
      .to('.hero-play', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 1.05)
      .to('.hero-side, .hero-scroll', { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, 1.15);
  })();

  function seam() {
    var wrap = $('#seam');
    if (!wrap || !hasGsap || !window.ScrollTrigger) {
      var st = $('#seamType'), sf = $('#seamFire');
      if (st && window.gsap) gsap.set(st, { opacity: 1, y: 0 });
      if (sf && window.gsap) gsap.set(sf, { opacity: 1, x: 0 });
      return;
    }
    var media = $('#heroMedia'), field = $('.seam-field'),
        type = $('#seamType'), fire = $('#seamFire');
    var panel = narrow ? 'inset(7% 7% 45% 7%)' : 'inset(11% 4% 13% 46%)';

    gsap.set(field, { opacity: 0 });
    gsap.set(type, { opacity: 0, y: 48 });
    gsap.set(fire, { opacity: 0, x: narrow ? 30 : 60 });

    gsap.timeline({
      scrollTrigger: {
        trigger: wrap, start: 'top top', end: 'bottom bottom',
        scrub: .5, immediateRender: false
      }
    })
      .to('.hero-title', { yPercent: -22, opacity: 0, ease: 'none', duration: .34 }, 0)
      .to('.hero-sub, .hero-acts, .hero-play, .hero-side, .hero-scroll', { opacity: 0, y: -18, ease: 'none', duration: .22 }, 0)
      .to('#heroEmbers', { opacity: 0, ease: 'none', duration: .2 }, 0)
      .to(media, { clipPath: panel, ease: 'power1.inOut', duration: .62 }, .06)
      .to(field, { opacity: 1, ease: 'none', duration: .4 }, .06)
      .to(type, { opacity: 1, y: 0, ease: 'power2.out', duration: .3 }, .42)
      .to(fire, { opacity: 1, x: 0, ease: 'power2.out', duration: .28 }, .56);
  }

  /* ---------------- просмотр кадра очага во весь экран ---------------- */
  (function heroView() {
    var open = $('#heroPlay'), box = $('#heroView'), close = $('#heroViewClose');
    if (!open || !box) return;
    var vid = box.querySelector('video');
    function show(on) {
      box.hidden = !on;
      document.body.style.overflow = on ? 'hidden' : '';
      if (on) { if (vid) { vid.currentTime = 0; vid.play(); } close.focus(); }
      else { if (vid) vid.pause(); open.focus(); }
    }
    open.addEventListener('click', function () { show(true); });
    if (close) close.addEventListener('click', function () { show(false); });
    box.addEventListener('click', function (e) { if (e.target === box || e.target === vid) show(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) show(false); });
  })();

  /* ---------------- сцена: четыре сезона ---------------- */
  var SEASONS = [
    { bg: 'var(--season-autumn)', when: 'осень 2026', now: 'это сейчас',
      name: 'Форель из Режа',
      desc: 'облепиховый соус, жареный картофель с грибами. Держим до начала декабря.',
      price: '980 ₽' },
    { bg: 'var(--season-winter)', when: 'зима 2026', now: '',
      name: 'Щучьи котлеты',
      desc: 'пюре из печёной тыквы, хрен, сливочное масло. В декабре берём щуку с Косулино.',
      price: '690 ₽' },
    { bg: 'var(--season-spring)', when: 'весна 2026', now: '',
      name: 'Суп из белых грибов',
      desc: 'тот самый, с северного леса. С марта часть грибов меняем на черешню.',
      price: '540 ₽' },
    { bg: 'var(--season-summer)', when: 'лето 2026', now: '',
      name: 'Оленина с печёным картофелем',
      desc: 'на веранде, под открытым небом. Июнь и июль готовим почти всё на углях.',
      price: '1 190 ₽' }
  ];

  (function seasons() {
    var stick = $('#seasonsStick'), section = $('#seasons');
    if (!stick || !section) return;
    var shots = $$('#seasonsShots img');
    var nameEl = $('#dishName'), descEl = $('#dishDesc'), priceEl = $('#dishPrice'),
        whenEl = $('#seasonsWhen'), nowEl = $('#seasonsNow'), tabs = $$('#seasonsTabs .seasons-tab');
    var current = -1;

    function apply(i) {
      if (i === current) return;
      current = i;
      var s = SEASONS[i];
      shots.forEach(function (img, k) {
        img.classList.toggle('on', k === i);
        img.classList.toggle('past', k < i);
      });
      stick.style.background = s.bg;
      whenEl.textContent = s.when;
      nowEl.classList.toggle('on', i === 0);
      nameEl.innerHTML = '';
      var span = document.createElement('span');
      span.className = 'in';
      span.textContent = s.name;
      nameEl.appendChild(span);
      descEl.textContent = s.desc;
      priceEl.textContent = s.price;
      tabs.forEach(function (t, k) {
        t.classList.toggle('on', k === i);
        t.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
    }
    apply(0);
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        var i = +t.dataset.i;
        if (!window.ScrollTrigger) { apply(i); return; }
        var st = ScrollTrigger.getById('seasonsScene');
        if (!st) { apply(i); return; }
        var top = st.start + (st.end - st.start) * ((i + 0.45) / 4);
        lenis ? lenis.scrollTo(top, { duration: 1 }) : window.scrollTo(0, top);
      });
    });

    if (!hasGsap || !window.ScrollTrigger) return;
    ScrollTrigger.create({
      id: 'seasonsScene',
      trigger: section,
      start: 'top top',
      end: '+=190%',
      pin: stick,
      pinSpacing: true,
      scrub: true,
      onUpdate: function (self) { apply(Math.min(3, Math.floor(self.progress * 4))); }
    });
  })();
/* ---------------- меню: разделы, фото за курсором, развороты ---------------- */
  (function menu() {
    var tabs = $$('#mTabs .mtab'), panels = $$('.mpanel');
    function show(i) {
      tabs.forEach(function (x, k) {
        x.classList.toggle('on', k === i);
        x.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
      panels.forEach(function (p, k) {
        var on = k === i;
        p.classList.toggle('on', on);
        p.hidden = !on;
      });
      killPlate();
      buildPlate(panels[i]);
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }
    if (tabs.length && panels.length) {
      tabs.forEach(function (t) {
        t.addEventListener('click', function () { show(+t.dataset.p); });
      });
      show(0);
    }

    var trail = $('#trail'), img = $('#trailImg'), note = $('#trailNote');
    if (!trail) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) { trail.remove(); return; }
    var seen = false, idleTimer = null, x0 = 0, y0 = 0;

    function place() {
      trail.style.transform = 'translate3d(' + (x0 - trail.offsetWidth / 2) + 'px,' +
        (y0 - trail.offsetHeight / 2) + 'px,0)';
    }
    function showTrail(on) {
      trail.style.opacity = on ? '1' : '0';
      trail.style.transition = 'opacity .35s ease';
    }
    window.addEventListener('mousemove', function (e) {
      x0 = e.clientX; y0 = e.clientY;
      if (!seen) { seen = true; place(); }
      if (!trail.classList.contains('live')) return;
      place();
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () { showTrail(false); }, 1600);
    }, { passive: true });
    window.addEventListener('wheel', function () { showTrail(false); clearTimeout(idleTimer); }, { passive: true });

    $$('.rcard').forEach(function (d) {
      d.addEventListener('mouseenter', function () {
        if (!d.dataset.img) { trail.classList.remove('live'); showTrail(false); return; }
        img.onerror = function () { img.onerror = null; trail.classList.remove('live'); showTrail(false); };
        img.src = d.dataset.img;
        img.alt = d.dataset.note || '';
        note.textContent = d.dataset.note || '';
        trail.classList.add('live');
        place(); showTrail(true);
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () { showTrail(false); }, 2800);
      });
      d.addEventListener('focus', function () { trail.classList.remove('live'); showTrail(false); });
      d.addEventListener('blur', function () { trail.classList.remove('live'); showTrail(false); });
    });
  })();

  /* ---------------- меню: кадр едет, заголовок обложки из маски ---------------- */
  (function menuMotion() {
    if (!hasGsap || !window.ScrollTrigger) return;
    $$('.plate-fig img').forEach(function (pic) {
      var fig = pic.closest('.plate-fig');
      gsap.fromTo(pic, { yPercent: -3, scale: 1.14 }, {
        yPercent: 3, scale: 1.02, ease: 'none',
        scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
    $$('.rcard-fig img').forEach(function (pic) {
      gsap.fromTo(pic, { yPercent: -5, scale: 1.12 }, {
        yPercent: 5, scale: 1.01, ease: 'none',
        scrollTrigger: { trigger: pic.closest('.rcard'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
    gsap.fromTo('.mhead-title .in', { yPercent: 110 }, {
      yPercent: 0, ease: 'power3.out', stagger: .12,
      scrollTrigger: { trigger: '.mhead-title', start: 'top 90%', once: true }
    });
    $$('.rcard').forEach(function (row, k) {
      gsap.fromTo(row, { opacity: 0, y: 26 }, {
        opacity: 1, y: 0, duration: .9, ease: 'power3.out', delay: (k % 4) * .08,
        scrollTrigger: { trigger: row, start: 'top 95%', once: true }
      });
    });
    $$('.rest-quote').forEach(function (q) {
      gsap.fromTo(q, { opacity: 0, y: 22 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: q, start: 'top 95%', once: true }
      });
    });
  })();

  /* ---------------- меню: кадр блюда растёт из щели, тип ложится поверх ----------------
     Начальное положение (clip-path, opacity, y) задаёт только JS. */
  var plateTl = null, platePanel = null;
  function killPlate() {
    if (plateTl) { if (plateTl.scrollTrigger) plateTl.scrollTrigger.kill(); plateTl.kill(); plateTl = null; }
    platePanel = null;
  }
  function buildPlate(panel) {
    if (!panel || panel === platePanel) return;
    killPlate();
    platePanel = panel;
    if (!hasGsap || !window.ScrollTrigger) return;
    var stage = panel.querySelector('.plate-stage');
    var box = panel.querySelector('.plate');
    if (!stage || !box) return;
    var fig = stage.querySelector('.plate-fig');
    var scrim = stage.querySelector('.plate-scrim');
    var pic = fig && fig.querySelector('img');
    var no = stage.querySelector('.plate-no');
    var price = stage.querySelector('.plate-price');
    var ghost = stage.querySelector('.plate-ghost');
    var type = stage.querySelector('.plate-type');
    var side = stage.querySelector('.plate-side');
    var start = narrow ? 'inset(44% 24% 44% 24%)' : 'inset(48% 33% 48% 33%)';

    if (fig) gsap.set(fig, { clipPath: start });
    if (scrim) gsap.set(scrim, { clipPath: start });
    if (pic) gsap.set(pic, { scale: 1.24 });
    if (no) gsap.set(no, { opacity: 0, y: 16 });
    if (type) gsap.set(type, { opacity: 0, y: 56 });
    if (price) gsap.set(price, { opacity: 0, y: -16 });
    if (ghost) gsap.set(ghost, { opacity: 0, scale: .84, y: 46, transformOrigin: '100% 100%' });
    if (side) gsap.set(side, { opacity: 0, y: 34 });

    var tl = gsap.timeline({
      scrollTrigger: { trigger: box, start: 'top top', end: 'bottom bottom', scrub: .55, invalidateOnRefresh: true }
    });
    if (fig) tl.to(fig, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: .6 }, 0);
    if (scrim) tl.to(scrim, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: .6 }, 0);
    if (pic) tl.to(pic, { scale: 1.04, ease: 'none', duration: 1 }, 0);
    if (no) tl.to(no, { opacity: 1, y: 0, ease: 'power2.out', duration: .14 }, .08);
    if (type) tl.to(type, { opacity: 1, y: 0, ease: 'power2.out', duration: .22 }, .18);
    if (price) tl.to(price, { opacity: 1, y: 0, ease: 'power2.out', duration: .18 }, .28);
    if (ghost) tl.to(ghost, { opacity: 1, scale: 1, y: 0, ease: 'power2.out', duration: .26 }, .32);
    if (side) tl.to(side, { opacity: 1, y: 0, ease: 'power2.out', duration: .18 }, .6);
    plateTl = tl;
  }

  /* ---------------- шеф: кадр закреплён, абзац светится по мере чтения ---------------- */
  (function chef() {
    var section = $('#chef'), stick = $('#chefStick');
    if (!section) return;
    var shot = section.querySelector('.chef-shot-in');
    var pic = shot && shot.querySelector('img');
    var lines = $$('#chefQuote .q-in');
    var words = $$('#chefWords span');

    if (!hasGsap || !window.ScrollTrigger) {
      words.forEach(function (w) { w.classList.add('lit'); });
      return;
    }

    function reveal(p) {
      var from = narrow ? 0.08 : 0.14, to = narrow ? 0.72 : 0.86;
      var k = Math.max(0, Math.min(1, (p - from) / (to - from)));
      var n = Math.round(k * words.length);
      for (var i = 0; i < words.length; i++) {
        if (i < n) words[i].classList.add('lit'); else words[i].classList.remove('lit');
      }
    }

    if (narrow) {
      gsap.fromTo(pic, { scale: 1.12 }, { scale: 1.02, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 88%', end: 'top 40%', scrub: true } });
      gsap.fromTo(lines, { yPercent: 110 }, {
        yPercent: 0, ease: 'power2.out', duration: .6, stagger: .1,
        scrollTrigger: { trigger: section, start: 'top 80%', once: true }
      });
      ScrollTrigger.create({
        trigger: '.chef-after', start: 'top 84%', end: 'bottom 58%', scrub: true,
        onUpdate: function (self) { reveal(self.progress); }
      });
      return;
    }

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section, start: 'top top', end: '+=150%',
        pin: stick, pinSpacing: true, scrub: true
      }
    });
    tl.fromTo(shot, { clipPath: 'inset(14% 26% 14% 26%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: .85 }, 0)
      .fromTo(pic, { scale: 1.2 }, { scale: 1.04, ease: 'none', duration: 1 }, 0)
      .fromTo(lines, { yPercent: 110 }, { yPercent: 0, ease: 'power2.out', duration: .45, stagger: .12 }, .05)
      .fromTo('.chef-by', { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'power2.out', duration: .2 }, .6);

    ScrollTrigger.create({
      trigger: '.chef-after', start: 'top 80%', end: 'bottom 56%', scrub: true,
      onUpdate: function (self) { reveal(self.progress); }
    });
  })();

  /* ---------------- фермеры: линия закупок и живой коллаж ---------------- */
  (function farmers() {
    var section = $('#farmers'), stick = $('#farmersStick');
    if (!section) return;

    var line = $('#farmLine');
    if (line && hasGsap && window.ScrollTrigger) {
      var path = line.querySelector('.route-path');
      var dots = $$('.route-dot', line);
      var len = 0;
      try { if (path && path.getTotalLength) len = path.getTotalLength(); } catch (e) { len = 0; }
      if (len) {
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        ScrollTrigger.create({
          trigger: line, start: 'top 92%', end: 'top 40%', scrub: .5,
          onUpdate: function (self) {
            gsap.set(path, { strokeDashoffset: len * (1 - self.progress) });
            for (var i = 0; i < dots.length; i++) {
              var k = parseFloat(getComputedStyle(dots[i]).getPropertyValue('--k')) || 0;
              var v = Math.max(0, Math.min(1, (self.progress - (k - .14)) / .18));
              dots[i].style.transform = 'translate(-50%,-50%) scale(' + v.toFixed(3) + ')';
            }
          }
        });
      }
    }

    if (!hasGsap || !window.ScrollTrigger) return;

    /* телефон: лестница разного размера, картинки слегка едут */
    if (narrow) {
      $$('.hv').forEach(function (chip, k) {
        var pic = chip.querySelector('.hv-fig img');
        if (pic) {
          gsap.fromTo(pic, { yPercent: k % 2 ? 4 : -5, scale: 1.12 }, {
            yPercent: k % 2 ? -5 : 4, scale: 1.01, ease: 'none',
            scrollTrigger: { trigger: chip, start: 'top bottom', end: 'bottom top', scrub: true }
          });
        }
        gsap.fromTo(chip, { y: k % 2 ? 26 : -26 }, {
          y: k % 2 ? -26 : 26, ease: 'none',
          scrollTrigger: { trigger: chip, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
      return;
    }

    /* компьютер: пин на 250svh, медиа разной глубины парят вокруг центра */
    var center = $('#colCenter');
    if (center) {
      gsap.fromTo(center, { y: 40, opacity: 0 }, {
        y: -50, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 60%', end: 'bottom top', scrub: true }
      });
    }

    $$('.hv').forEach(function (chip, k) {
      var speed = parseFloat(chip.dataset.speed || '.3');
      var dir = k % 2 ? -1 : 1;
      var dist = 30 + speed * 170;
      gsap.fromTo(chip, { y: dir * -dist, opacity: 0 }, {
        y: dir * dist, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
      });
      var pic = chip.querySelector('.hv-fig img');
      if (pic) {
        gsap.fromTo(pic, { yPercent: -5 * speed, scale: 1.14 }, {
          yPercent: 5 * speed, scale: 1.03, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      }
    });
  })();

  /* ---------------- ланч и залы: фото едет, цифры перелистываются ---------------- */
  (function deal() {
    $$('.scene').forEach(function (scene) {
      var pic = scene.querySelector('.scene-fig-in img');
      if (pic && hasGsap) {
        gsap.fromTo(pic, { scale: 1.03, yPercent: -2 }, {
          scale: 1.1, yPercent: 2, ease: 'none',
          scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      }
      if (!hasGsap || !window.ScrollTrigger) return;
      $$('.odo-strip', scene).forEach(function (strip) {
        var col = strip.parentNode;
        var d = parseFloat(getComputedStyle(col).getPropertyValue('--d')) || 0;
        ScrollTrigger.create({
          trigger: scene, start: 'top 78%', end: 'top 36%', scrub: .6,
          onUpdate: function (self) {
            var h = col.clientHeight || 1;
            var off = (d + (1 - self.progress) * 10) * h;
            strip.style.transform = 'translate3d(0,' + (-off).toFixed(1) + 'px,0)';
          },
          onLeave: function () { strip.style.transform = 'translate3d(0,' + (-d * col.clientHeight) + 'px,0)'; },
          onLeaveBack: function () { strip.style.transform = ''; }
        });
      });
    });

    if (!hasGsap || !window.ScrollTrigger) return;
    gsap.fromTo('.deal-head-h2 .in', { yPercent: 108 }, {
      yPercent: 0, ease: 'power3.out', stagger: .12,
      scrollTrigger: { trigger: '.deal-head-h2', start: 'top 88%', once: true }
    });
  })();
  /* ---------------- бронь стола: лента дат, барабан времени ---------------- */
  (function booking() {
    var form = $('#bookForm');
    if (!form) return;
    var tape = $('#dateTape'), list = $('#drumList'), win = $('.drum-win', form);
    var hint = $('#bookHint');
    var defaultHint = hint ? hint.textContent : '';
    var TIMES = ['12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:15', '21:00', '21:45'];
    var WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    var guests = 2, time = '19:30';
    var today = new Date();
    var days = [];
    for (var i = 0; i < 14; i++) days.push(new Date(today.getFullYear(), today.getMonth(), today.getDate() + i));

    if (tape) {
      days.forEach(function (d, k) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'tape-btn' + (k === 0 ? ' on' : '');
        b.dataset.i = k;
        b.setAttribute('aria-pressed', k === 0 ? 'true' : 'false');
        b.setAttribute('aria-label', d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' }));
        b.innerHTML = '<span>' + WD[d.getDay()] + '</span><b>' + d.getDate() + '</b>';
        tape.appendChild(b);
      });
      tape.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('.tape-btn') : null;
        if (!b) return;
        $$('.tape-btn', tape).forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
        if (!reduced) b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    }

    var idx = TIMES.indexOf('19:30');
    if (list && win) {
      TIMES.forEach(function (t, k) {
        var li = document.createElement('li');
        if (k === idx) li.className = 'on';
        var b = document.createElement('button');
        b.type = 'button'; b.dataset.t = t; b.textContent = t;
        b.setAttribute('aria-label', 'Время ' + t);
        li.appendChild(b); list.appendChild(li);
      });
      function rowH() { return parseFloat(getComputedStyle(win).getPropertyValue('--row')) || 54; }
      function placeDrum() {
        var h = win.clientHeight || rowH() * 2.6, r = rowH();
        list.style.transform = 'translate3d(0,' + (h / 2 - r * (idx + 0.5)).toFixed(1) + 'px,0)';
      }
      function setIdx(v) {
        idx = Math.max(0, Math.min(TIMES.length - 1, v));
        time = TIMES[idx];
        $$('li', list).forEach(function (li, k) { li.classList.toggle('on', k === idx); });
        placeDrum();
      }
      list.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('button[data-t]') : null;
        if (b) setIdx(TIMES.indexOf(b.dataset.t));
      });
      var up = $('#drumUp'), down = $('#drumDown');
      if (up) up.addEventListener('click', function () { setIdx(idx - 1); });
      if (down) down.addEventListener('click', function () { setIdx(idx + 1); });
      window.addEventListener('resize', placeDrum);
      setIdx(idx);
      setTimeout(placeDrum, 400);
    }

    var gOut = $('#gOut'), platesBox = $('#plates');
    var MAXSEATS = 12;
    function plural(n) {
      if (n % 10 === 1 && n % 100 !== 11) return 'гость';
      if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) return 'гостя';
      return 'гостей';
    }
    function setGuests(n) {
      guests = Math.max(1, Math.min(MAXSEATS, n));
      if (gOut) gOut.textContent = guests + ' ' + plural(guests);
      if (platesBox) {
        $$('.plate-btn', platesBox).forEach(function (b, k) {
          b.classList.toggle('on', k < guests);
          b.setAttribute('aria-pressed', k + 1 === guests ? 'true' : 'false');
        });
      }
    }
    if (platesBox) {
      for (var s = 1; s <= MAXSEATS; s++) {
        var pb = document.createElement('button');
        pb.type = 'button';
        pb.className = 'plate-btn';
        pb.dataset.n = s;
        pb.setAttribute('aria-label', 'Стол на ' + s + ' ' + plural(s));
        pb.setAttribute('aria-pressed', 'false');
        pb.addEventListener('click', function () { setGuests(+this.dataset.n); });
        platesBox.appendChild(pb);
      }
    }
    setGuests(guests);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#bName').value.trim();
      var tel = $('#bPhone').value.trim();
      var on = tape ? $('.tape-btn.on', tape) : null;
      var d = days[on ? +on.dataset.i : 0];
      var dateText = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' });
      if (name.length < 2) {
        if (hint) hint.textContent = 'Напишите имя, по нему вас встретят у стола.';
        $('#bName').focus(); return;
      }
      if (tel.replace(/\D/g, '').length < 10) {
        if (hint) hint.textContent = 'Телефон нужен целиком, на случай если Telegram будет закрыт.';
        $('#bPhone').focus(); return;
      }
      if (hint) hint.textContent = defaultHint;
      var msg = 'Бронь в бистро «Сезон». Дата: ' + dateText + ', время ' + time + ', гостей: ' + guests +
        '. Имя: ' + name + '. Телефон: ' + tel + '.';
      window.open('https://t.me/share/url?url=' + encodeURIComponent('https://t.me/sezon_ekb') +
        '&text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  })();

  /* ---------------- бронь: печь раскрывается из щели, лист приезжает ---------------- */
  (function bookingScene() {
    var section = $('#booking'), stage = $('#bookStage');
    if (!section || !stage || narrow) return;
    if (!hasGsap || !window.ScrollTrigger) return;
    var bg = stage.querySelector('.book-bg-in');
    var veil = stage.querySelector('.book-veil');
    var pic = stage.querySelector('.book-bg img');
    var note = stage.querySelector('.book-note');
    var sheet = stage.querySelector('.sheet');
    var start = 'inset(48% 32% 48% 32%)';
    if (bg) gsap.set(bg, { clipPath: start });
    if (veil) gsap.set(veil, { clipPath: start });
    if (pic) gsap.set(pic, { scale: 1.22 });
    if (note) gsap.set(note, { opacity: 0, x: -46 });
    if (sheet) gsap.set(sheet, { opacity: 0, x: 52 });
    gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom bottom', scrub: .55, invalidateOnRefresh: true }
    })
      .to(bg, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: .68 }, 0)
      .to(veil, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: .68 }, 0)
      .to(pic, { scale: 1.04, ease: 'none', duration: 1 }, 0)
      .to(note, { opacity: 1, x: 0, ease: 'power2.out', duration: .24 }, .34)
      .to(sheet, { opacity: 1, x: 0, ease: 'power2.out', duration: .26 }, .44);
  })();

  /* ---------------- часы Екатеринбурга ---------------- */
  (function clock() {
    var openEl = $('#openNow'), textEl = $('#openText'), live = $('#heroLive');
    var bookEl = $('#openNowBook'), bookText = $('#openTextBook');
    if (!openEl) return;
    function ekb() {
      var s = new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'Asia/Yekaterinburg', hour: '2-digit', minute: '2-digit', hour12: false, weekday: 'short'
      }).format(new Date());
      var p = s.split(',');
      var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
      var hm = (p[1] || '').trim().split(':');
      return { day: days.indexOf(p[0].trim()), mins: (+hm[0]) * 60 + (+hm[1]) };
    }
    function refresh() {
      var t = ekb();
      var late = t.day === 5 || t.day === 6;
      var openTo = late ? 25 * 60 : 23 * 60;
      var isOpen = t.mins >= 12 * 60 && t.mins < openTo;
      openEl.classList.toggle('shut', !isOpen);
      textEl.textContent = isOpen
        ? 'открыто сейчас, до ' + (late ? '01:00' : '23:00')
        : (t.mins < 12 * 60 ? 'закрыто, откроемся в 12:00' : 'закрыто, откроемся завтра в 12:00');
      if (bookEl) {
        bookEl.classList.toggle('shut', !isOpen);
        bookText.textContent = textEl.textContent;
      }
      if (live) live.innerHTML = '<b>сегодня до ' + (late ? '01:00' : '23:00') + '</b> · свободно 19:30, 20:15';
    }
    refresh();
    setInterval(refresh, 30000);
  })();

  /* ---------------- подвал: слово ровно во всю ширину экрана ---------------- */
  (function footWord() {
    var el = $('#footWord');
    if (!el) return;
    function fit() {
      var w = el.parentNode.clientWidth;
      if (!w) return;
      el.style.fontSize = '100px';
      var t = el.getBoundingClientRect().width;
      if (t > 4) el.style.fontSize = (((w - 2) / t) * 100).toFixed(2) + 'px';
    }
    fit();
    window.addEventListener('resize', fit);
    window.addEventListener('load', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  })();

  /* ---------------- магнитная кнопка ---------------- */
  (function magnet() {
    if (!hasGsap) return;
    $$('.magnet').forEach(function (btn) {
      var xTo, yTo;
      btn.addEventListener('mouseenter', function () {
        xTo = gsap.quickTo(btn, 'x', { duration: .5, ease: 'power3.out' });
        yTo = gsap.quickTo(btn, 'y', { duration: .5, ease: 'power3.out' });
      });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        if (xTo) { xTo(Math.max(-14, Math.min(14, dx * .1))); yTo(Math.max(-10, Math.min(10, dy * .14))); }
      });
      btn.addEventListener('mouseleave', function () { gsap.to(btn, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1,.5)' }); });
    });
  })();

  /* ---------------- появление блоков ---------------- */
  (function rise() {
    if (!window.gsap || !window.ScrollTrigger) return;
    if (reduced) return;
    var items = $$('.book-note, .sheet, .foot-top > div, .foot-bot, .chef-facts, .deal-head, .seam-facts, .rest-cap');
    items.forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 94%', once: true }
      });
    });
  })();

  function refreshTriggers() {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }
  window.addEventListener('load', refreshTriggers);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(refreshTriggers, 120); });
})();
