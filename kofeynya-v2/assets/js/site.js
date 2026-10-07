/* Лампа: движение страницы. Всё, что едет по прокрутке, задаётся здесь */
(function () {
  'use strict';

  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  var LenisLib = window.lenis;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lenis = null;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  if (gsap && ST) gsap.registerPlugin(ST);

  /* ---------- Казань: время UTC+3 ---------- */
  function kazan() {
    var d = new Date();
    return new Date(d.getTime() + (180 + d.getTimezoneOffset()) * 60000);
  }
  function state() {
    var d = kazan();
    var day = d.getDay();
    var m = d.getHours() * 60 + d.getMinutes();
    var open = (day === 0 || day === 6) ? 540 : 450;
    var close = 1260;
    var openTxt = (day === 0 || day === 6) ? '9:00' : '7:30';
    if (m < open) return { txt: 'откроемся в ' + openTxt, shut: true };
    if (m >= close) return { txt: 'закрыто, завтра с ' + openTxt, shut: true };
    if (close - m <= 45) return { txt: 'закроемся через ' + (close - m) + ' мин', shut: false };
    return { txt: 'открыто до 21:00', shut: false };
  }
  function paintClock() {
    var s = state();
    var open = $('#heroOpen');
    if (open) open.textContent = s.txt;
    if (open && open.parentNode) open.parentNode.classList.toggle('is-shut', s.shut);
    $$('.spot-live').forEach(function (p) {
      var last = p.childNodes[p.childNodes.length - 1];
      if (last && last.nodeType === 3) last.nodeValue = s.txt;
      p.classList.toggle('is-shut', s.shut);
    });
  }
  paintClock();
  setInterval(paintClock, 20000);

  /* ---------- Заставка ---------- */
  var splash = $('#splash');
  var heroWord = $$('.hero-word');
  var heroBits = $$('.hero-kicker, .hero-statement, .hero-links, .hero-live, .hero-sub');
  var seen = false;
  try { seen = sessionStorage.getItem('lampaSplash') === '1'; } catch (e) { seen = false; }

  function heroIn() {
    document.body.classList.add('is-ready');
    if (!reduce && heroWord.length) gsap.to(heroWord, { yPercent: 0, duration: 1.5, ease: 'expo.out' });
    if (!reduce) gsap.to(heroBits, { y: 0, opacity: 1, duration: 1.1, stagger: .09, ease: 'expo.out', delay: .12 });
  }

  if (heroWord.length && !reduce) gsap.set(heroWord, { yPercent: 112 });
  if (heroBits.length && !reduce) gsap.set(heroBits, { y: 26, opacity: 0 });

  if (splash) {
    if (seen || reduce) {
      splash.classList.add('is-gone');
      splash.style.display = 'none';
      heroIn();
    } else {
      var num = $('#splashNum');
      var prog = { v: 0 };
      gsap.to(prog, {
        v: 100, duration: .85, ease: 'power2.inOut',
        onUpdate: function () { if (num) num.textContent = Math.round(prog.v); },
        onComplete: function () {
          splash.classList.add('is-gone');
          try { sessionStorage.setItem('lampaSplash', '1'); } catch (e) {}
          heroIn();
          setTimeout(function () { splash.style.display = 'none'; }, 1400);
        }
      });
    }
  } else {
    heroIn();
  }

  /* ---------- Плавная прокрутка ---------- */
  if (LenisLib && !reduce) {
    lenis = new LenisLib({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.5 });
    lenis.on('scroll', ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  window.lenis = lenis;

  /* ---------- Шапка ---------- */
  var top = $('#top');
  var burger = $('#burger');
  var nav = $('#nav');
  if (burger && nav && top) {
    burger.addEventListener('click', function () {
      var open = top.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        top.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }
  function headState() {
    if (!top) return;
    var y = window.scrollY || window.pageYOffset;
    top.classList.toggle('is-solid', y > window.innerHeight * 0.72);
  }
  if (top && ST) {
    var paperOn = {};
    var paperKeys = $$('[data-paper]');
    function paintHead() {
      var on = false;
      for (var k in paperOn) { if (paperOn[k]) { on = true; break; } }
      top.classList.toggle('is-paper', on);
    }
    paperKeys.forEach(function (el, i) {
      paperOn[i] = false;
      ST.create({
        trigger: el, start: 'top 70px', end: 'bottom 70px',
        onToggle: function (s) { paperOn[i] = s.isActive; paintHead(); }
      });
    });
  }
  window.addEventListener('scroll', headState, { passive: true });
  headState();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  window.addEventListener('load', function () { ST.refresh(); });

  /* ---------- Видео спит вне экрана ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { if (v.paused) v.play().catch(function () {}); }
        else v.pause();
      });
    }, { threshold: .1 });
    $$('video').forEach(function (v) { io.observe(v); });
  }

  if (reduce) return;

  /* ---------- Первый экран на прокрутке ---------- */
  (function heroScroll() {
    if (!ST) return;
    var film = $('.hero-film');
    var glow = $('.hero-glow');
    var title = $('.hero-title');
    var inner = $('.hero-inner');
    ST.create({
      trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true,
      onUpdate: function (self) {
        var p = self.progress;
        if (film) gsap.set(film, { yPercent: p * 9, scale: 1.06 + p * .07 });
        if (glow) gsap.set(glow, { opacity: 1 - p * .85 });
        if (title) gsap.set(title, { yPercent: p * 14, opacity: 1 - clamp(p * 1.5, 0, .92) });
        if (inner) gsap.set(inner, { yPercent: -p * 5 });
      }
    });
  })();

  /* ---------- День кофейни ---------- */
  (function dayScene() {
    var scene = $('.day-scene');
    if (!scene || !ST) return;
    var dayBg = $('#dayBg');
    var media = $('.day-media', scene);
    var DAY = ['assets/img/hero-counter.jpg', 'assets/img/croissant.jpg', 'assets/img/bread-board.jpg', 'assets/img/hall-night.jpg'];
    var imgCur = -1;
    var notes = $$('.day-note', scene);
    var rail = $$('.day-rail li', scene);
    var lamp = $('#dayLamp');
    var bar = $('#dayBar');
    var cap = $('#dayClockCap');
    var caps = ['Первый хлеб', 'Вторая выпечка', 'Хлеб на вечер', 'Гасим свет'];
    var cur = -1;

    $$('.dg', scene).forEach(function (d) {
      var drum = $('.dg-drum', d);
      if (!drum) return;
      var html = '';
      for (var i = 0; i < 10; i++) html += '<b>' + i + '</b>';
      drum.innerHTML = html;
      d.dataset.cur = '-1';
      d.dataset.prev = '0';
    });
    function setDigit(sel, v) {
      var d = $('[data-dg="' + sel + '"]', scene);
      if (!d || d.dataset.cur === String(v)) return;
      d.dataset.cur = String(v);
      var prev = Number(d.dataset.prev) || 0;
      d.dataset.prev = String(v);
      gsap.fromTo($('.dg-drum', d), { yPercent: prev * -10 }, { yPercent: v * -10, duration: .7, ease: 'power3.out' });
    }
    function activate(i) {
      if (i === cur) return;
      cur = i;
      rail.forEach(function (r, k) { r.classList.toggle('is-on', k === i); });
      if (cap) cap.textContent = caps[i];
      if (imgCur !== i && dayBg) {
        imgCur = i;
        dayBg.style.backgroundImage = 'url(' + DAY[i] + ')';
        gsap.fromTo(dayBg, { filter: 'blur(22px) saturate(.4)' }, { filter: 'blur(0px)', duration: 1.1, ease: 'power2.out' });
      }
    }

    ST.create({
      trigger: scene, start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: function (self) {
        var p = self.progress;
        var f = p * 4;
        activate(clamp(Math.floor(f), 0, 3));
        var mins = 450 + (1260 - 450) * p;
        var hh = Math.floor(mins / 60), mm = Math.floor(mins % 60);
        setDigit('h10', Math.floor(hh / 10));
        setDigit('h1', hh % 10);
        setDigit('m10', Math.floor(mm / 10));
        setDigit('m1', mm % 10);
        if (lamp) gsap.set(lamp, { opacity: clamp(p * 1.1, 0, .95) });
        if (bar) gsap.set(bar, { scaleX: p });
        notes.forEach(function (n, i) {
          var v = clamp(1 - Math.abs(f - (i + .5)) * 2.1, 0, 1);
          gsap.set(n, { opacity: v, y: (1 - v) * 20 });
        });
        if (media) {
          var warm = 'saturate(' + (.66 + p * .52).toFixed(2) + ') brightness(' + (1.06 - p * .16).toFixed(2) + ')';
          gsap.set(media, { filter: warm });
        }
      }
    });
  })();

  /* ---------- Меню: четыре главы на одной закреплённой сцене ---------- */
  (function menuScene() {
    var scene = $('#menuScene');
    if (!scene || !ST) return;
    var pages = $$('.chap-page', scene);
    var chaps = $$('.chap');
    var bar = $('#menuBar');
    var cur = -1;
    var N = pages.length;

    function activate(i) {
      if (i === cur) return;
      cur = i;
      pages.forEach(function (p, k) {
        p.classList.toggle('is-on', k === i);
        p.setAttribute('aria-hidden', k === i ? 'false' : 'true');
        if (k === i) p.removeAttribute('inert'); else p.setAttribute('inert', '');
      });
      chaps.forEach(function (c, k) {
        c.classList.toggle('is-on', k === i);
        if (k === i) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
      });
      var page = pages[i];
      gsap.fromTo($$('.ln', page), { yPercent: 46, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .8, stagger: .05, ease: 'power3.out' });
      gsap.fromTo($$('.chap-list', page), { yPercent: 34, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'expo.out' });
      gsap.fromTo($$('.chap-cap, .chap-note', page), { opacity: 0 }, { opacity: 1, duration: .8, stagger: .1, delay: .25, ease: 'power2.out' });
    }

    ST.create({
      trigger: scene, start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: function (self) {
        var p = self.progress;
        var f = p * N;
        var i = clamp(Math.floor(f), 0, N - 1);
        activate(i);
        if (bar) gsap.set(bar, { scaleX: p });
        for (var k = 0; k < N; k++) {
          var page = pages[k];
          var photo = $('.chap-slab', page);
          var inner = $('.chap-slab-in', page);
          var word = $('.chap-h', page);
          var d = f - k;
          // главы сменяются резко: наложение двух страниц текста и пустой кадр
          // между ними одинаково плохи, поэтому переход отдаёт список позиций
          gsap.set(page, { opacity: (k === i ? 1 : 0), zIndex: k });
          if (k === i) {
            var local = d;
            var open = clamp(local * 3.2, 0, 1);
            var insetY = (1 - open) * 16;
            if (photo) gsap.set(photo, { clipPath: 'inset(' + insetY.toFixed(2) + '% 0% ' + insetY.toFixed(2) + '% 0%)' });
            if (inner) gsap.set(inner, { scale: 1.18 - open * .14, yPercent: -3 + local * 7 });
            if (word) gsap.set(word, { yPercent: -local * 5 });
          }
        }
      }
    });

    chaps.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = Number(btn.dataset.ch);
        var total = scene.offsetHeight - window.innerHeight;
        var y = scene.offsetTop + total * ((i + .4) / N);
        if (lenis) lenis.scrollTo(y, { duration: 1.1 });
        else window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  })();
})();/* Лампа: обжарка, пекарня, точки, компании, лист заявки, подвал */
(function () {
  'use strict';

  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;
  var lenis = window.lenis;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function money(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'; }

  /* ---------- Точки: на телефоне вторичное сворачивается в аккордеон ---------- */
  (function spotsAcc() {
    var accs = $$('.spot-acc');
    if (!accs.length) return;
    function fit() {
      var narrow = window.innerWidth <= 860;
      accs.forEach(function (a) {
        if (narrow) a.removeAttribute('open');
        else a.setAttribute('open', '');
      });
    }
    fit();
    var t = null;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(fit, 160);
    }, { passive: true });
  })();

  if (reduce || !ST) { sheet(); return; }

  /* ---------- Появление из маски и мягкий подъём ---------- */
  function maskIn(sel, delay) {
    var els = $$(sel);
    els.forEach(function (el) {
      ST.create({
        trigger: el, start: 'top 92%', once: true,
        onEnter: function () {
          gsap.fromTo(el,
            { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
            { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.15, ease: 'expo.out', delay: delay || 0 });
        }
      });
    });
  }
  function fadeUp(sel, opt) {
    var els = $$(sel);
    if (!els.length) return;
    gsap.set(els, { y: 22, opacity: 0 });
    var box = els[0].closest('section') || els[0];
    ST.create({
      trigger: box, start: 'top 84%', once: true,
      onEnter: function () {
        gsap.to(els, { y: 0, opacity: 1, duration: 1.05, stagger: (opt && opt.stagger) || .09, ease: 'power3.out', delay: (opt && opt.delay) || 0 });
      }
    });
  }
  function wordRead(sel) {
    var el = $(sel);
    if (!el || el.dataset.splitDone) return;
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    var out = [];
    words.forEach(function (w) {
      var s = document.createElement('span');
      s.style.display = 'inline-block';
      s.textContent = w;
      el.appendChild(s);
      el.appendChild(document.createTextNode(' '));
      out.push(s);
    });
    el.dataset.splitDone = '1';
    gsap.set(out, { opacity: .16 });
    ST.create({
      trigger: el, start: 'top 88%', end: 'bottom 65%', scrub: true,
      onUpdate: function (self) { gsap.set(out, { opacity: .16 + .84 * self.progress }); }
    });
  }

  maskIn('.bak-h, .spots-h, .firm-h, .menu-h, .day-open-h, .bak-typo');
  fadeUp('.bak-lead, .spots-lead, .firm-lead, .menu-lead, .day-open-note, .day-open-cap, .menu-cap, .fp-cap');
  wordRead('.firm-lead');
  fadeUp('.bcard', { stagger: .07 });
  fadeUp('.spot-city, .spot-note, .spot-meta, .spot-maps, .spot-sum');
  fadeUp('.fp-item', { stagger: .08 });
  fadeUp('.firm-steps li', { stagger: .08 });
  fadeUp('.foot-about, .foot-sched, .foot-col a, .foot-hours, .foot-t, .foot-big, .foot-legal', { stagger: .04 });

  /* ---------- Смета: числа досчитываются до своих ---------- */
  $$('.fp-count').forEach(function (el) {
    var to = Number(el.dataset.count) || 0;
    if (!to) return;
    var fmt = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); };
    var o = { v: 0 };
    ST.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: function () {
        gsap.to(o, {
          v: to, duration: 1.7, ease: 'power2.out',
          onUpdate: function () { el.textContent = fmt(o.v); },
          onComplete: function () { el.textContent = fmt(to); }
        });
      }
    });
  });

  /* Линия под шагами рисуется по ходу */
  var steps = $$('.firm-steps li');
  steps.forEach(function (li, i) {
    var line = document.createElement('i');
    line.style.cssText = 'position:absolute;left:0;top:0;height:1px;width:100%;background:rgba(242,232,218,.5);transform-origin:0 50%;transform:scaleX(0);';
    li.style.position = 'relative';
    li.style.borderTopColor = 'transparent';
    li.appendChild(line);
    ST.create({
      trigger: li, start: 'top 90%', end: 'top 55%', scrub: true,
      onUpdate: function (s) { gsap.set(line, { scaleX: s.progress }); }
    });
  });

  /* ---------- Обжарка: фотография раскрывается на весь экран ---------- */
  (function roast() {
    var sec = $('#obzharka');
    if (!sec) return;
    var frame = $('#roastFrame');
    var img = $('#roastImg');
    var scrim = $('#roastScrim');
    var layer = $('.roast-layer');
    var svg = $('#roastLine');
    var path = svg && $('path', svg);
    var len = 0;
    if (path && path.getTotalLength) {
      len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    }
    /* Размеры карточки: снимаем их со стиля, а не с кадра, который уже может
       ехать по скроллу. По ним же считаем, до каких размеров карточка
       разворачивается во весь экран к концу сцены. */
    var L0 = 0, T0 = 0, F0 = 0, Fh0 = 0, VW = 0, VH = 0;
    function measure() {
      if (!frame) return;
      var l = frame.style.left, t = frame.style.top, w = frame.style.width, h = frame.style.height;
      frame.style.left = frame.style.top = frame.style.width = frame.style.height = '';
      L0 = frame.offsetLeft; T0 = frame.offsetTop; F0 = frame.offsetWidth; Fh0 = frame.offsetHeight;
      VW = frame.parentElement.clientWidth; VH = frame.parentElement.clientHeight;
      frame.style.left = l; frame.style.top = t; frame.style.width = w; frame.style.height = h;
    }
    measure();
    window.addEventListener('resize', measure, { passive: true });
    ST.create({
      trigger: sec, start: 'top top', end: 'bottom bottom', scrub: true,
      onRefresh: measure,
      onEnter: measure,
      onUpdate: function (self) {
        var p = self.progress;
        var k = clamp(p * 1.6, 0, 1);
        /* Надпись уходит раньше, чем карточка дойдёт до её края и раньше, чем
           приедет щель пекарни: сцены наезжают друг на друга, и два текста на
           одном кадре ложились бы друг на друга. */
        var m = clamp((p - .62) / .18, 0, 1);
        if (layer && !reduce) gsap.set(layer, { opacity: 1 - clamp((p - .52) / .09, 0, 1) });
        if (frame) {
          if (!VW) measure();
          gsap.set(frame, {
            clipPath: 'inset(' + ((1 - k) * 15).toFixed(2) + 'vh ' + ((1 - k) * 21).toFixed(2) + 'vw round ' + ((1 - k) * 22).toFixed(1) + 'px)',
            borderRadius: ((1 - k) * 22).toFixed(1) + 'px',
            left: (L0 * (1 - m)).toFixed(1) + 'px',
            top: (T0 * (1 - m)).toFixed(1) + 'px',
            width: (F0 + (VW - F0) * m).toFixed(1) + 'px',
            height: (Fh0 + (VH - Fh0) * m).toFixed(1) + 'px'
          });
        }
        if (img) gsap.set(img, { scale: 1.32 - .3 * k, yPercent: -4 + 8 * p });
        /* Затемнение держит надпись поверх фотографии. Надпись ушла — уходит и
           затемнение: иначе кадр, развернувшийся во весь экран, остаётся
           чёрным пятном и между двумя сценами снова пустое место. */
        if (scrim) gsap.set(scrim, { opacity: clamp(p * 1.5, 0, 1) * (1 - clamp((p - .56) / .14, 0, 1)) });
        if (path) gsap.set(path, { strokeDashoffset: len * (1 - clamp((p - .18) / .5, 0, 1)) });
      }
    });
    var buy = $('.roast-buy');
    if (buy) {
      gsap.set(buy, { y: 40, opacity: 0 });
      ST.create({
        trigger: buy, start: 'top 92%', once: true,
        onEnter: function () { gsap.to(buy, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }); }
      });
    }
  })();

  /* ---------- Пекарня: кадры разной глубины ---------- */
  (function bak() {
    var rail = $('#bakRail');
    if (!rail) return;
    var cards = $$('.bcard', rail);
    var wide = window.innerWidth > 860;
    cards.forEach(function (c, i) {
      var inner = $('.bcard-in', c);
      if (!inner) return;
      if (!wide) return;
      ST.create({
        trigger: c, start: 'top bottom', end: 'bottom top', scrub: true,
        onUpdate: function (self) { gsap.set($('img', inner), { yPercent: -6 + 12 * self.progress }); }
      });
      gsap.set($('figcaption', c), { y: 26, opacity: 0 });
      ST.create({
        trigger: c, start: 'top 88%', once: true,
        onEnter: function () { gsap.to($('figcaption', c), { y: 0, opacity: 1, duration: .9, ease: 'power3.out', delay: i * .04 }); }
      });
    });
  })();

  /* ---------- Пекарня: щель между словами, из неё растёт кадр ----------
     Сначала щель раскрывается в узкую рамку во всю высоту экрана (слова
     по краям она не достаёт), потом слова уходят, и только потом кадр
     раздвигается на весь экран: листать дальше не приходится по пустоте. */
  (function bakGap() {
    var sec = $('.bak-gap');
    if (!sec || !ST) return;
    var wrap = $('.bak-gap-sticky', sec);
    var photo = $('.bg-photo', sec);
    var img = $('.bg-photo-in', sec);
    var a = $('.bg-a', sec);
    var b = $('.bg-b', sec);
    var sm = function (t) { return t * t * (3 - 2 * t); };
    var W0 = 0, H0 = 0, W1 = 0, H1 = 0;
    function measure() {
      if (!photo || !wrap) return;
      // размеры берём из стиля, а не из кадра, который уже мог расти по скроллу
      var w = photo.style.width, h = photo.style.height;
      photo.style.width = ''; photo.style.height = '';
      W0 = photo.offsetWidth; H0 = photo.offsetHeight;
      photo.style.width = w; photo.style.height = h;
      W1 = wrap.clientWidth; H1 = wrap.clientHeight;
    }
    measure();
    window.addEventListener('resize', measure, { passive: true });
    ST.create({
      trigger: sec, start: 'top top', end: 'bottom bottom', scrub: true,
      onEnter: measure,
      onRefresh: measure,
      onUpdate: function (self) {
        var p = self.progress;
        if (!W1) measure();
        var k = sm(clamp(p / .18, 0, 1));                       // щель раскрывается
        var g = sm(clamp((p - .30) / .62, 0, 1));              // кадр идёт во весь экран
        var inset = (50 - 50 * k).toFixed(2);
        if (photo) {
          gsap.set(photo, {
            clipPath: 'inset(0 ' + inset + '% 0 ' + inset + '%)',
            width: Math.round(W0 * k + (W1 - W0 * k) * g),
            height: Math.round(H0 + (H1 - H0) * k)
          });
        }
        /* Кадр ползёт и на последних процентах сцены: иначе последний экран щели
           стоит на месте и прокрутка идёт вхолостую. */
        if (img) gsap.set(img, { scale: 1.22 - .22 * k + .08 * p, yPercent: -4 + 8 * k + 5 * p });
        var f = sm(clamp((p - .24) / .16, 0, 1));               // слова уходят в тень
        if (a) gsap.set(a, { opacity: 1 - f, x: -f * 2 });
        if (b) gsap.set(b, { opacity: 1 - f, x: f * 2 });
      }
    });
  })();

  /* ---------- Точки: фото едет, текст приходит ---------- */
  (function spots() {
    var sec = $('#tochki');
    if (!sec) return;
    var pics = $$('.spot-photo img, .spot-photo-b img, .spots-band img');
    if (pics.length && window.innerWidth > 860) {
      ST.create({
        trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true,
        onUpdate: function (self) {
          pics.forEach(function (p, i) { gsap.set(p, { yPercent: -4 + 8 * ((self.progress + i * .12) % 1) }); });
        }
      });
    }
    var band = $('.spots-band');
    if (band) {
      gsap.set($('img', band), { scale: 1.12 });
      ST.create({
        trigger: band, start: 'top bottom', end: 'bottom top', scrub: true,
        onUpdate: function (self) { gsap.set($('img', band), { scale: 1.12 - .1 * self.progress }); }
      });
    }
  })();

  /* ---------- Меню: круглое фото едет за курсором от строки к строке ---------- */
  (function cursorPhoto() {
    var lines = $$('.chap-lines');
    var previewMedia = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
    if (!lines.length || !previewMedia.matches) return;
    /* только кадры, которых больше нет в других блоках страницы */
    var PH = {
      0: ['assets/img/window-cup.jpg', 'assets/img/hero-counter.jpg', 'assets/img/roaster.jpg', 'assets/img/shelves.jpg', 'assets/img/coffee-bag.jpg'],
      1: ['assets/img/shelves.jpg', 'assets/img/window-cup.jpg', 'assets/img/bread-board.jpg', 'assets/img/barista.jpg', 'assets/img/coffee-bag.jpg'],
      2: ['assets/img/bread-board.jpg', 'assets/img/hero-counter.jpg', 'assets/img/shelves.jpg', 'assets/img/barista.jpg', 'assets/img/window-cup.jpg', 'assets/img/roaster.jpg'],
      3: ['assets/img/hero-counter.jpg', 'assets/img/barista.jpg', 'assets/img/window-cup.jpg', 'assets/img/bread-board.jpg', 'assets/img/coffee-bag.jpg']
    };
    var disc = document.createElement('div');
    disc.className = 'cursor-photo';
    disc.setAttribute('aria-hidden', 'true');
    var im = document.createElement('img');
    im.alt = '';
    disc.appendChild(im);
    document.body.appendChild(disc);

    var x = 0, y = 0, tx = 0, ty = 0, on = false, src = '';
    var activePage = null;
    function set(v) {
      on = v;
      disc.classList.toggle('is-on', on);
    }

    // Показываем только после движения мыши. Прокрутка под неподвижным
    // курсором тоже вызывает mouseover, но не должна возвращать превью.
    function hide() { set(false); activePage = null; }
    window.addEventListener('scroll', hide, { passive: true });
    window.addEventListener('wheel', hide, { passive: true });
    window.addEventListener('resize', hide, { passive: true });
    window.addEventListener('blur', hide);
    previewMedia.addEventListener('change', hide);

    lines.forEach(function (box) {
      var page = box.closest('.chap-page');
      var ch = page ? Number(page.dataset.ch) : 0;
      var list = PH[ch] || PH[0];
      box.addEventListener('mousemove', function (e) {
        var ln = e.target.closest ? e.target.closest('.ln') : null;
        if (!ln || !previewMedia.matches || !page.classList.contains('is-on')) { hide(); return; }
        var slab = $('.chap-slab', page).getBoundingClientRect();
        var radius = disc.offsetWidth / 2;
        var left = Math.max(slab.left, 0) + radius + 12;
        var right = Math.min(slab.right, window.innerWidth) - radius - 12;
        var top = Math.max(slab.top, 0) + radius + 12;
        var bottom = Math.min(slab.bottom, window.innerHeight) - radius - 12;
        if (left > right || top > bottom) { hide(); return; }
        // Превью движется в фотополосе, за пределами листа с меню.
        tx = clamp(e.clientX, left, right);
        ty = clamp(e.clientY, top, bottom);
        var i = Array.prototype.indexOf.call(box.children, ln);
        var next = list[(i < 0 ? 0 : i) % list.length];
        if (next !== src) { src = next; im.src = next; }
        if (!on || activePage !== page) { x = tx; y = ty; }
        activePage = page;
        set(true);
      });
      box.addEventListener('mouseleave', hide);
    });

    gsap.ticker.add(function () {
      if (!on) return;
      if (!activePage || !activePage.classList.contains('is-on')) { hide(); return; }
      x += (tx - x) * .12;
      y += (ty - y) * .12;
      disc.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) translate(-50%,-50%)';
    });
  })();

  /* ---------- Подвал: слово поднимается по буквам ---------- */
  (function foot() {
    var w = $('.foot-word');
    if (!w || w.dataset.splitDone) return;
    var txt = w.textContent.trim();
    w.textContent = '';
    var letters = [];
    txt.split('').forEach(function (ch, i) {
      var s = document.createElement('span');
      s.style.display = 'inline-block';
      s.textContent = ch;
      w.appendChild(s);
      if (i < txt.length - 1) w.appendChild(document.createTextNode(' '));
      letters.push(s);
    });
    w.dataset.splitDone = '1';
    gsap.set(letters, { yPercent: 112 });
    ST.create({
      trigger: w, start: 'top 96%', once: true,
      onEnter: function () { gsap.to(letters, { yPercent: 0, duration: 1.3, stagger: .05, ease: 'expo.out' }); }
    });
  })();

  /* ---------- Круглая магнитная кнопка ---------- */
  (function magnet() {
    var m = $('#magnetBtn');
    if (!m || !fine) return;
    m.addEventListener('mousemove', function (e) {
      var r = m.getBoundingClientRect();
      gsap.to(m, {
        x: (e.clientX - r.left - r.width / 2) * .26,
        y: (e.clientY - r.top - r.height / 2) * .3,
        duration: .7, ease: 'power3.out'
      });
    });
    m.addEventListener('mouseleave', function () {
      gsap.to(m, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, .45)' });
    });
  })();

  sheet();

  /* ---------- Лист заявки ---------- */
  function sheet() {
    var sh = $('#sheet');
    var paper = $('#sheetPaper');
    var scrim = $('#sheetScrim');
    var open = $('#magnetBtn');
    var close = $('#sheetX');
    if (!sh || !paper || !open) return;

    var people = 12;
    var day = null;
    var count = $('#bkCount');
    var sum = $('#bkSum');
    var days = $('#bkDays');
    var err = $('#formError');
    var form = $('#firmForm');

    function kazan() {
      var d = new Date();
      return new Date(d.getTime() + (180 + d.getTimezoneOffset()) * 60000);
    }
    function paint() {
      if (count) count.textContent = people;
      if (sum) sum.textContent = money(people * 640) + ' за кофе, выпечка считается отдельно';
    }
    function buildDays() {
      if (!days) return;
      var base = kazan();
      var html = '';
      for (var i = 1; i <= 5; i++) {
        var d = new Date(base.getTime() + i * 86400000);
        var wd = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][d.getDay()];
        var iso = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        var label = wd + ' ' + d.getDate();
        html += '<button type="button" data-date="' + iso + '" data-label="' + label + '">' + label + '</button>';
      }
      days.innerHTML = html;
      $$('button', days).forEach(function (b) {
        b.addEventListener('click', function () {
          $$('button', days).forEach(function (o) { o.classList.remove('is-on'); });
          b.classList.add('is-on');
          day = { iso: b.dataset.date, label: b.dataset.label };
        });
      });
      var first = $('button', days);
      if (first) first.click();
    }
    buildDays();
    paint();

    $$('.sf-step button').forEach(function (b) {
      b.addEventListener('click', function () {
        people = clamp(people + Number(b.dataset.people), 6, 80);
        paint();
      });
    });

    function show() {
      sh.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      if (reduce) { gsap.set(scrim, { opacity: 1 }); gsap.set(paper, { y: 0, opacity: 1 }); }
      else {
        gsap.fromTo(scrim, { opacity: 0 }, { opacity: 1, duration: .4, ease: 'power2.out' });
        gsap.fromTo(paper, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: 'expo.out' });
      }
      var f = $('#f-name');
      if (f) setTimeout(function () { f.focus(); }, 220);
    }
    function hide() {
      var done = function () {
        sh.hidden = true;
        document.documentElement.style.overflow = '';
      };
      if (reduce) done();
      else {
        gsap.to(scrim, { opacity: 0, duration: .3 });
        gsap.to(paper, { y: 30, opacity: 0, duration: .35, onComplete: done });
      }
    }
    open.addEventListener('click', show);
    if (close) close.addEventListener('click', hide);
    if (scrim) scrim.addEventListener('click', hide);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !sh.hidden) hide();
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = $('#f-name').value.trim();
        var tel = $('#f-tel').value.trim();
        if (!name || !tel || !day) {
          if (err) err.hidden = false;
          return;
        }
        if (err) err.hidden = true;
        var text = 'Кофе-брейк или выпечка на заказ\n' +
          'Имя: ' + name + '\n' +
          'Телефон: ' + tel + '\n' +
          'Человек: ' + people + '\n' +
          'Дата: ' + day.label + '\n' +
          'Кофе: ' + money(people * 640);
        window.open('https://t.me/lampa_kzn?text=' + encodeURIComponent(text), '_blank', 'noopener');
        hide();
      });
    }
  }
})();