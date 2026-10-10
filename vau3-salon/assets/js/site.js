/* ==========================================================================
   «Шёлк». Движение: сквозь буквы, веер, плёнка.
   Начальное состояние анимаций задаётся только здесь, в gsap.
   ========================================================================== */
(function () {
  'use strict';

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var RAD = Math.PI / 180;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var isSm = function () { return window.innerWidth <= 900; };

  /* ---------- плавная прокрутка ---------- */
  var lenis = null;
  if (!REDUCED && window.Lenis) {
    lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, wheelMultiplier: 0.95 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- занавес ---------- */
  var veil = $('#veil');
  if (veil) {
    var seen = false;
    try { seen = sessionStorage.getItem('shelk-veil') === '1'; } catch (e) { seen = false; }
    if (seen || REDUCED) {
      veil.parentNode.removeChild(veil);
    } else {
      try { sessionStorage.setItem('shelk-veil', '1'); } catch (e) {}
      gsap.set(veil, { pointerEvents: 'auto' });
      gsap.set('.veil-mark', { opacity: 0, y: 10 });
      gsap.set('.veil-note', { opacity: 0 });
      gsap.timeline({ onComplete: function () { if (veil.parentNode) veil.parentNode.removeChild(veil); } })
        .to('.veil-mark', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0)
        .to('.veil-line i', { scaleX: 1, duration: 0.74, ease: 'power2.inOut' }, 0.06)
        .to('.veil-note', { opacity: 1, duration: 0.4 }, 0.36)
        .to(veil, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.6, ease: 'expo.inOut' }, '+=0.1');
    }
  }

  /* ---------- магнитная кнопка ---------- */
  if (FINE && !REDUCED) {
    $$('[data-magnet]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.3,
          y: (e.clientY - r.top - r.height / 2) * 0.45,
          duration: 0.5, ease: 'power3.out', overwrite: true
        });
      });
      el.addEventListener('mouseleave', function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, .5)', overwrite: true });
      });
    });
  }

  /* ---------- меню телефона ---------- */
  var burger = $('#burger');
  var menu = $('#menu');
  function setMenu(on) {
    if (!menu) return;
    if (on) {
      menu.hidden = false;
      document.body.classList.add('is-locked');
      if (burger) burger.setAttribute('aria-expanded', 'true');
      gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.fromTo($$('a', menu), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.05 });
    } else {
      if (!menu.hidden) {
        gsap.to(menu, {
          opacity: 0, duration: 0.28, ease: 'power2.in',
          onComplete: function () { menu.hidden = true; gsap.set(menu, { opacity: 1 }); }
        });
      }
      document.body.classList.remove('is-locked');
      if (burger) burger.setAttribute('aria-expanded', 'false');
    }
  }
  if (burger) burger.addEventListener('click', function () { setMenu(menu.hidden); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && !menu.hidden) setMenu(false);
    if (e.key === 'Escape' && openSw) closeStrip();
  });

  /* ---------- якоря ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute('href');
    if (!id || id === '#') return;
    var t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    if (menu && !menu.hidden) setMenu(false);
    if (openSw) closeStrip();
    if (lenis) lenis.scrollTo(t, { offset: -8, duration: 1.2 });
    else t.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
  });

  /* ---------- шапка: подложка после первого экрана ---------- */
  var top = $('.top');
  if (top) {
    ScrollTrigger.create({
      trigger: '#hero', start: 'bottom top+=20',
      onEnter: function () { top.classList.add('is-solid'); },
      onLeaveBack: function () { top.classList.remove('is-solid'); }
    });
  }

  /* ======================================================================
     АКТ 1. СКВОЗЬ БУКВЫ
     Поле бумаги с прорезанным по буквам «Шёлк» окном, в окне видео.
     ====================================================================== */
  var hero = $('#hero');
  var stage = $('.hero-stage', hero);
  var word = $('.hero-word', hero);
  var wordIn = $('.hero-word-in', hero);
  var heroVideo = $('.hero-video', hero);
  var heroDim = $('.hero-dim', hero);
  var heroHole = $('.hero-hole', hero);
  var heroTint = $('.hero-tint', hero);
  var heroPlate = $('#heroPlate', hero);
  var heroCaps = $$('.hero-cap', hero);
  var heroFS = 100;

  /* видео: при отключённом движении кадр застывает (постер), иначе играет */
  if (heroVideo) {
    if (REDUCED) {
      heroVideo.removeAttribute('autoplay');
      try { heroVideo.pause(); } catch (e) {}
    } else {
      heroVideo.playbackRate = 0.6;      // видео плывёт, а не мельтешит
      var zag = heroVideo.play();
      if (zag && zag.catch) zag.catch(function () {});
    }
  }

  /* окно по буквам: маска со словом. Если браузер или файл не годятся —
     остаётся обычное слово чернилами, а не пустое поле. */
  (function maskOrInk() {
    var html = document.documentElement;
    var support = !!(window.CSS && CSS.supports) &&
      (CSS.supports('mask-image', 'url("a.svg")') || CSS.supports('-webkit-mask-image', 'url("a.svg")'));
    if (!support) { html.classList.add('no-mask'); return; }
    var img = new Image();
    img.onload = function () {
      html.classList.add(img.naturalWidth ? 'is-window' : 'no-mask');
    };
    img.onerror = function () { html.classList.add('no-mask'); };
    img.src = 'assets/img/word-mask.svg';
  })();

  /* подгонка запасного варианта: слово чернилами во всю ширину */
  function fitHero() {
    var w = stage.clientWidth;
    if (!w) return;
    word.style.fontSize = '100px';
    word.style.letterSpacing = '0px';
    var tw = wordIn.getBoundingClientRect().width;
    if (!tw) return;
    heroFS = 100 * (w * 0.96) / tw;
    word.style.fontSize = heroFS + 'px';
  }

  var holeBase = function () { return isSm() ? 92 : 94; };
  var holeState = { mask: holeBase(), clip: 0 };
  function applyHole() {
    if (!heroHole) return;
    var pos = holeState.mask > 100 ? '50% 46%' : '50% 46%';
    var size = holeState.mask + '% auto, 100% 100%';
    var where = pos + ', 0 0';
    var c = holeState.clip;
    heroHole.style.webkitMaskSize = size;
    heroHole.style.maskSize = size;
    heroHole.style.webkitMaskPosition = where;
    heroHole.style.maskPosition = where;
    heroHole.style.clipPath = 'inset(' + c + '% ' + c + '% ' + c + '% ' + c + '%)';
  }

  var heroTl = null;
  function buildHero() {
    fitHero();
    holeState.mask = holeBase();
    holeState.clip = 0;
    applyHole();
    if (heroTl) { heroTl.scrollTrigger && heroTl.scrollTrigger.kill(); heroTl.kill(); heroTl = null; }
    if (REDUCED) {
      gsap.set([heroPlate, heroTint], { clearProps: 'all' });
      gsap.set(heroCaps, { clearProps: 'all' });
      return;
    }
    gsap.set(heroDim, { opacity: 1 });
    gsap.set(heroTint, { opacity: 0 });
    gsap.set(heroPlate, { opacity: 0, y: 34 });
    gsap.set(heroCaps, { opacity: 1, y: 0 });

    var base = holeBase();
    /* окно и поле считаем от прогресса сами: так начальное состояние
       всегда ровно то, что задано здесь, а не «что успел отрисовать gsap». */
    function paintHole() {
      var pr = heroTl ? heroTl.progress() : 0;
      if (pr <= 0.34) {
        holeState.mask = base * (1 + 0.12 * (pr / 0.34));
        holeState.clip = 0;
      } else {
        var u = clamp((pr - 0.34) / 0.56, 0, 1);
        holeState.mask = base * (1.12 + 0.22 * u);
        holeState.clip = 50 * u;
      }
      applyHole();
    }
    heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: function () { return '+=' + Math.round(window.innerHeight * (isSm() ? 1.15 : 1.3)); },
        pin: true,
        scrub: 0.55,
        anticipatePin: 1
      },
      onUpdate: paintHole,
      defaults: { ease: 'none' }
    });
    /* 1. буквы набухают, видео в окне проявляется */
    heroTl.to(heroDim, { opacity: 0.5, duration: 0.28 }, 0.04)
      /* 2. на бумагу выезжает плашка про запись */
      .to(heroPlate, { opacity: 1, y: 0, duration: 0.22 }, 0.28)
      /* 3. поле расходится к центру */
      .to({}, { duration: 0.56 }, 0.34)
      /* 4. видео на весь экран: гаснет затемнение, ложится тинт, подписи светлеют */
      .to(heroDim, { opacity: 0, duration: 0.3 }, 0.46)
      .to(heroTint, { opacity: 1, duration: 0.3 }, 0.5)
      .to(heroCaps, { color: '#f6f1e8', duration: 0.26 }, 0.52);
    paintHole();
  }
  buildHero();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { fitHero(); ScrollTrigger.refresh(); });
  }

  /* ======================================================================
     АКТ 2. ВЕЕР УСЛУГ
     В покое стопка образцов, на прокрутке стопка раскрывается веером.
     ====================================================================== */
  var fan = $('#services');
  var deck = $('#fanDeck', fan);
  var sws = $$('.sw', deck);
  var fanHead = $('.fan-head', fan);
  var LABEL = 52;                 // высота блока подписей внутри полосы
  var layout = [];
  var fanTl = null;

  function layoutFan() {
    var W = deck.clientWidth, H = deck.clientHeight, n = sws.length;
    if (!W || !H || !n) return;
    var mid = (n - 1) / 2;
    layout = [];
    if (isSm()) {
      var hm = Math.round(clamp((H - 40) / n, 60, 96));
      var mRest = hm + 3;
      var mFan = Math.min((H - hm - 8) / (n - 1), hm + 26);
      var mOff = Math.max(0, (H - ((n - 1) * mRest + hm)) / 2);
      for (var i = 0; i < n; i++) {
        layout.push({
          w: W, h: hm,
          x: 0, y: -((n - 1 - i) * mRest) - mOff, r: 0,
          x2: 0, y2: -((n - 1 - i) * mFan), a: 0
        });
      }
    } else {
      var w = Math.min(W - 240, 1080);
      var h = Math.round(clamp((H - 46) / n, 72, 94));
      var half = w / 2;
      var room = Math.max(5, (h - LABEL) / 2 * 0.45);  // насколько полосы могут налезать друг на друга
      var step = h + 4, angle = 2, lift = half * Math.tan(2 * RAD);
      for (var a = 8; a >= 2; a -= 0.5) {
        var l = half * Math.tan(a * RAD);
        var dTan = half * (Math.tan(a * RAD) - Math.tan(a * (n - 2) / (n - 1) * RAD));
        var need = h - room + dTan;
        var can = (H - h - l) / (n - 1);
        if (can >= need) { step = Math.min(can, need + 16); angle = a; lift = l; break; }
      }
      var offR = Math.max(0, (H - ((n - 1) * (h + 4) + h)) / 2);
      var offF = Math.max(0, (H - ((n - 1) * step + h + lift)) / 2);
      for (var j = 0; j < n; j++) {
        layout.push({
          w: w, h: h,
          x: (j - mid) * 5, y: -((n - 1 - j) * (h + 4)) - offR, r: 0,
          x2: (j - mid) * 44, y2: -((n - 1 - j) * step) - offF, a: -(j / (n - 1)) * angle
        });
      }
    }
    layout.forEach(function (L, i) {
      var sw = sws[i];
      sw.style.setProperty('--sw-w', L.w + 'px');
      sw.style.setProperty('--sw-h', L.h + 'px');
      sw.style.setProperty('--z', String(n - i));
      if (REDUCED) return;
      gsap.set(sw, { x: L.x, y: L.y, rotation: L.r, transformOrigin: '50% 100%' });
    });
  }

  function buildFan() {
    layoutFan();
    if (fanTl) { fanTl.scrollTrigger && fanTl.scrollTrigger.kill(); fanTl.kill(); fanTl = null; }
    if (REDUCED) return;
    fanTl = gsap.timeline({
      scrollTrigger: {
        trigger: fan,
        start: 'top top',
        end: function () { return '+=' + Math.round(window.innerHeight * (isSm() ? 1.25 : 1.45)); },
        pin: true,
        scrub: 0.55,
        anticipatePin: 1
      },
      defaults: { ease: 'none' }
    });
    sws.forEach(function (sw, i) {
      var L = layout[i];
      fanTl.to(sw, { x: L.x2, y: L.y2, rotation: L.a, duration: 0.62 }, i * 0.085);
    });
  }

  /* выдвижение полосы вперёд */
  var openSw = null;
  function openStrip(i) {
    if (openSw) closeStrip();
    var sw = sws[i], L = layout[i];
    var panel = $('.sw-open[data-panel="' + i + '"]', deck);
    if (!panel || !L) return;
    openSw = { sw: sw, panel: panel, i: i };
    panel.hidden = false;
    var H = deck.clientHeight, W = deck.clientWidth;
    var cx = Number(gsap.getProperty(sw, 'x')) || 0;
    var cy = Number(gsap.getProperty(sw, 'y')) || 0;
    var restTop = H - L.h - cy;
    gsap.set(panel, { left: cx, top: restTop, width: L.w, height: L.h, opacity: 0 });
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .to(panel, { left: 0, top: 0, width: W, height: H, opacity: 1, duration: 0.72 }, 0)
      .to(sws.filter(function (s) { return s !== sw; }), { opacity: 0, duration: 0.3 }, 0)
      .to(fanHead, { opacity: 0, duration: 0.3 }, 0)
      .fromTo($$('.sw-open-text > *', panel), { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05 }, 0.16);
    sw.classList.add('is-open');
    $('.sw-hit', sw).setAttribute('aria-expanded', 'true');
  }
  function closeStrip() {
    if (!openSw) return;
    var o = openSw; openSw = null;
    var L = layout[o.i];
    var H = deck.clientHeight;
    var cx = Number(gsap.getProperty(o.sw, 'x')) || 0;
    var cy = Number(gsap.getProperty(o.sw, 'y')) || 0;
    var restTop = H - L.h - cy;
    gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      .to(o.panel, { left: cx, top: restTop, width: L.w, height: L.h, opacity: 0, duration: 0.45 })
      .to(sws, { opacity: 1, duration: 0.4 }, 0.05)
      .to(fanHead, { opacity: 1, duration: 0.4 }, 0.05)
      .add(function () {
        o.panel.hidden = true;
        o.sw.classList.remove('is-open');
        $('.sw-hit', o.sw).setAttribute('aria-expanded', 'false');
      });
  }
  $$('.sw-hit', deck).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var i = parseInt(btn.getAttribute('data-open'), 10);
      if (openSw && openSw.i === i) closeStrip();
      else openStrip(i);
    });
  });
  $$('[data-close]', deck).forEach(function (btn) {
    btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); closeStrip(); });
  });

  buildFan();

  /* ======================================================================
     АКТ 3. МАСТЕРА НА ПЛЁНКЕ
     Закреплена вся секция: заголовок остаётся на экране, лента едет вбок.
     ====================================================================== */
  var film = $('#masters');
  var track = $('#filmTrack', film);
  var strip = $('#filmStrip', film);
  var frames = $$('.frame', film);
  var edges = $$('.film-edge', film);
  var filmCap = $('#filmCaption', film);
  var filmTl = null;

  function fillEdges() {
    var pitch = window.innerWidth <= 900 ? 38 : 50;
    var n = Math.max(6, Math.ceil((strip.offsetWidth || track.clientWidth) / pitch) + 1);
    edges.forEach(function (e) {
      if (e.childElementCount === n) return;
      e.textContent = '';
      var frag = document.createDocumentFragment();
      for (var i = 0; i < n; i++) frag.appendChild(document.createElement('i'));
      e.appendChild(frag);
    });
  }

  var filmName = '';
  function paintFrames() {
    var r = track.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var half = r.width / 2;
    var near = null, nearD = 1e9;
    frames.forEach(function (f) {
      var b = f.getBoundingClientRect();
      var d = clamp(Math.abs(b.left + b.width / 2 - cx) / half, 0, 1);
      var img = $('img', f);
      img.style.filter = 'sepia(' + (0.82 * d).toFixed(3) + ') saturate(' + (1 - 0.5 * d).toFixed(3) + ') contrast(' + (1 - 0.05 * d).toFixed(3) + ')';
      if (d < nearD) { nearD = d; near = f; }
    });
    if (!near || !filmCap) return;
    var имя = near.getAttribute('data-name') || '';
    if (имя && имя !== filmName) {
      filmName = имя;
      $('b', filmCap).textContent = имя;
      $('span', filmCap).textContent = near.getAttribute('data-role') || '';
      if (!REDUCED) gsap.fromTo(filmCap, { opacity: .25 }, { opacity: 1, duration: .45, ease: 'power2.out' });
    }
  }

  function buildFilm() {
    fillEdges();
    if (filmTl) { filmTl.scrollTrigger && filmTl.scrollTrigger.kill(); filmTl.kill(); filmTl = null; }
    frames.forEach(function (f) { $('img', f).style.filter = ''; });
    if (isSm()) { paintFrames(); return; }
    var travel = strip.offsetWidth - track.clientWidth;
    if (REDUCED || travel < 40) { paintFrames(); return; }
    gsap.set(strip, { x: 0 });
    filmTl = gsap.timeline({
      scrollTrigger: {
        trigger: film,
        start: 'top top',
        end: '+=' + Math.round(travel),
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true
      },
      onUpdate: function () { paintFrames(); },
      defaults: { ease: 'none' }
    });
    filmTl.to(strip, { x: -travel, duration: 1 });
    paintFrames();
  }
  track.addEventListener('scroll', function () {
    if (isSm() && !REDUCED) paintFrames();
  }, { passive: true });
  buildFilm();

  /* ======================================================================
     ПЕРЕСБОРКА
     ====================================================================== */
  var rt = null;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      if (openSw) closeStrip();
      buildHero();
      buildFan();
      buildFilm();
      ScrollTrigger.refresh();
    }, 260);
  });

  window.addEventListener('load', function () {
    fitHero();
    layoutFan();
    buildFilm();
    ScrollTrigger.refresh();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      fitHero();
      buildFan();
      ScrollTrigger.refresh();
    });
  }

  ScrollTrigger.refresh();
})();