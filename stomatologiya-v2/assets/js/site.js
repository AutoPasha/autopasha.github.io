/* Кедр: движение и поведение. Начальные состояния анимаций задаются только здесь. */
(function () {
  'use strict';

  var doc = document, body = doc.body;
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var GSAP = window.gsap;
  var hasGsap = !!GSAP && !!window.ScrollTrigger;

  if (hasGsap) { GSAP.registerPlugin(window.ScrollTrigger); }
  if (window.SplitText) { try { GSAP.registerPlugin(window.SplitText); } catch (e) {} }

  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var nf = new Intl.NumberFormat('ru-RU');

  /* ---------- время Новосибирска, окна записи ---------- */
  var TZ = 'Asia/Novosibirsk';
  function nskNow() {
    var p = {}, d = new Date();
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour12: false, weekday: 'short', hour: '2-digit', minute: '2-digit' });
      f.formatToParts(d).forEach(function (x) { p[x.type] = x.value; });
    } catch (e) { p = { hour: d.getHours(), minute: d.getMinutes() }; }
    var h = parseInt(p.hour, 10), m = parseInt(p.minute, 10);
    var wd = String(p.weekday || '').slice(0, 2);
    var mins = h * 60 + m;
    var open = (wd === 'Su') ? 600 : 480;
    var close = (wd === 'Su') ? 1020 : 1260;
    return {
      h: h, m: m, mins: mins, wd: wd, open: open, close: close,
      isOpen: mins >= open && mins < close,
      untilClose: close - mins
    };
  }
  function hm(mins) {
    mins = ((mins % 1440) + 1440) % 1440;
    var h = Math.floor(mins / 60), m = mins % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }
  // окна только в часы работы: после закрытия или впритык к нему — завтрашние с открытия
  function slots() {
    var n = nskNow();
    var base = Math.max(Math.ceil((n.mins + 12) / 20) * 20, n.open);
    if (base + 260 <= n.close - 40) return { day: 'сегодня', t: [hm(base), hm(base + 100), hm(base + 260)] };
    var tomorrowOpen = (n.wd === 'Sa') ? 600 : 480;
    return { day: 'завтра', t: [hm(tomorrowOpen + 20), hm(tomorrowOpen + 120), hm(tomorrowOpen + 280)] };
  }
  function paintClock() {
    var n = nskNow(), sl = slots(), s = sl.t;
    var label = $('.hb-free > .mono');
    if (label) label.textContent = 'Свободно ' + sl.day;
    var clock = $('#hero-clock');
    if (clock) clock.textContent = 'Сейчас в Новосибирске ' + hm(n.mins);
    var s1 = $('#slots'), s2 = $('#slots2');
    if (s1) s2 = s2 || s1;
    if (s1) $$('#slots a').forEach(function (a, i) { a.textContent = s[i]; });
    if (s2 && s2.id === 'slots2') s2.textContent = s[0] + ' · ' + s[1] + ' · ' + s[2];
    var open = $('#open-now');
    if (open) {
      open.innerHTML = n.isOpen
        ? 'Открыто сейчас, до ' + hm(n.close) + '. Ближайшее окно ' + sl.day + ' в ' + s[0]
        : (n.mins < n.open ? 'Откроемся в ' + hm(n.open) : 'Закрыто, завтра в ' + (n.wd === 'Su' ? '10:00' : '08:00'));
    }
  }
  paintClock();
  setInterval(paintClock, 30000);

  /* ---------- страховка заставки: экран не должен залипнуть ---------- */
  var introEl = $('#intro');
  var store = { get: function () { try { return window.sessionStorage.getItem('kedr-seen'); } catch (e) { return null; } },
                set: function () { try { window.sessionStorage.setItem('kedr-seen', '1'); } catch (e) {} } };
  var firstRun = introEl && !store.get();
  if (firstRun) doc.documentElement.style.overflow = 'hidden';
  function killIntro() {
    if (introEl && introEl.parentNode) introEl.remove();
    if (!body.classList.contains('menu-open')) doc.documentElement.style.overflow = '';
  }
  window.setTimeout(killIntro, 2600);

  /* ---------- круг «смотреть кабинет» едет за курсором ---------- */
  var reel = $('#reelbtn');
  if (reel && !RM && window.matchMedia('(pointer:fine)').matches) {
    var shown = false, raf = null, mx = window.innerWidth * .62, my = window.innerHeight * .5;
    var cx = mx, cy = my, tOut = null;
    function place() {
      cx += (mx - cx) * .14; cy += (my - cy) * .14;
      reel.style.transform = 'translate3d(' + (cx - reel.offsetWidth / 2) + 'px,' + (cy - reel.offsetHeight / 2) + 'px,0)';
      if (Math.abs(mx - cx) + Math.abs(my - cy) > .4) raf = requestAnimationFrame(place); else raf = null;
    }
    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!shown) { shown = true; body.classList.add('reel-live'); cx = mx; cy = my; }
      if (!raf) raf = requestAnimationFrame(place);
    }, { passive: true });
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      if (window.scrollY !== lastY) {
        lastY = window.scrollY;
        body.classList.remove('reel-live'); shown = false;
        window.clearTimeout(tOut);

      }
    }, { passive: true });
    reel.addEventListener('mouseenter', function () { reel.style.transform += ' scale(1.06)'; });
    reel.addEventListener('mouseleave', function () {
      reel.style.transform = 'translate3d(' + (cx - reel.offsetWidth / 2) + 'px,' + (cy - reel.offsetHeight / 2) + 'px,0)';
    });

  }

  /* ---------- меню ---------- */
  var burger = $('#burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      $('#menu').setAttribute('aria-hidden', open ? 'false' : 'true');
      doc.documentElement.style.overflow = open ? 'hidden' : '';
      if (lenis) { open ? lenis.stop() : lenis.start(); }
    });
    $$('#menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
        $('#menu').setAttribute('aria-hidden', 'true');
        doc.documentElement.style.overflow = '';
        if (lenis) lenis.start();
      });
    });
  }

  /* ---------- состояние шапки и панели связи ---------- */
  var hero = $('#hero');
  function headerState() {
    var h = hero ? hero.offsetHeight : 800;
    var y = window.scrollY || window.pageYOffset;
    body.classList.toggle('at-top', y < h * 0.7);
    body.classList.toggle('mobar-off', y < h * 0.92);
  }
  headerState();
  window.addEventListener('scroll', headerState, { passive: true });

  /* ---------- запись: выборы без полей ---------- */
  var pick = { 1: '', 2: '' };
  function paintPick() {
    var s1 = $('#bk-s1'), s2 = $('#bk-s2');
    if (s1) s1.textContent = pick[1] || '—';
    if (s2) s2.textContent = pick[2] || '—';
    var msg = 'Здравствуйте! Хочу записаться на осмотр в клинику Кедр.';
    if (pick[1]) msg += ' ' + pick[1][0].toUpperCase() + pick[1].slice(1) + '.';
    if (pick[2]) msg += ' Удобно ' + pick[2] + '.';
    var enc = encodeURIComponent(msg);
    var wa = $('#bk-wa'); if (wa) wa.href = 'https://wa.me/73833125804?text=' + enc;
    var tg = $('#bk-tg'); if (tg) tg.href = 'https://t.me/kedr_stom?text=' + enc;
  }
  [['#chips1', 1], ['#chips2', 2]].forEach(function (pair) {
    var box = $(pair[0]);
    if (!box) return;
    $$('button', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('aria-pressed') === 'true';
        $$('button', box).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        if (!on) b.setAttribute('aria-pressed', 'true');
        pick[pair[1]] = on ? '' : b.dataset.v;
        paintPick();
      });
    });
  });
  paintPick();

  /* ---------- магнитные кнопки ---------- */
  if (hasGsap && window.matchMedia('(pointer:fine)').matches && !RM) {
    $$('[data-magnet]').forEach(function (el) {
      var xTo = gsapX(el), yTo = gsapY(el), sTo = gsapS(el);
      el.addEventListener('mouseenter', function () { GSAP.to(el, { scale: 1.05, duration: .4, ease: 'power2.out' }); });
      el.addEventListener('mouseleave', function () { GSAP.to(el, { x: 0, y: 0, scale: 1, duration: .6, ease: 'elastic.out(1,0.4)' }); });
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .3);
        yTo((e.clientY - r.top - r.height / 2) * .3);
      });
      function gsapX(el) { return function (v) { GSAP.to(el, { x: v, duration: .6, ease: 'power3.out' }); }; }
      function gsapY(el) { return function (v) { GSAP.to(el, { y: v, duration: .6, ease: 'power3.out' }); }; }
      function gsapS(el) { return function (v) { GSAP.to(el, { scale: v, duration: .4 }); }; }
    });
  }

  /* ---------- видео: играет только пока видно ---------- */
  var vid = $('#hero-video');
  if (vid) {
    var tryPlay = function () { var p = vid.play(); if (p && p.catch) p.catch(function () {}); };
    tryPlay();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { e.isIntersecting ? tryPlay() : (vid.pause && vid.pause()); });
      }, { threshold: .05 }).observe(vid);
    }
  }

  /* ---------- плавная прокрутка ---------- */
  var lenis = null;
  if (hasGsap && window.Lenis && !RM) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true, anchors: true });
    lenis.on('scroll', window.ScrollTrigger.update);
    GSAP.ticker.add(function (t) { lenis.raf(t * 1000); });
    GSAP.ticker.lagSmoothing(0);
  }

  /* ---------- бегущие строки: скорость от скорости прокрутки ---------- */
  if (hasGsap && !RM) {
    var tracks = $$('.ticker-track');
    var mqT = 1, mqC = 1;
    if (window.ScrollTrigger) {
      window.ScrollTrigger.create({
        start: 0, end: 'max',
        onUpdate: function (self) { mqT = 1 + clamp(Math.abs(self.getVelocity()) / 700, 0, 2.4); }
      });
    }
    GSAP.ticker.add(function () {
      mqC += (mqT - mqC) * .1;
      if (mqC < 1.004 && mqT === 1) return;
      tracks.forEach(function (tr) {
        var base = tr.closest('.foot-run') ? 40 : (tr.closest('.one-run') ? 30 : 32);
        tr.style.animationDuration = (base / mqC).toFixed(2) + 's';
      });
    });
  }

  /* ================= сцены ================= */
  if (!hasGsap) { finish(); return; }

  var intro = $('#intro');
  var heroTl = null;

  if (RM) {
    body.classList.add('no-motion');
    if (intro) intro.remove();
    finish();
    return;
  }

  /* заставка: слово, счётчик, затем первый экран */
  if (intro && !store.get()) {
    window.setTimeout(killIntro, 2600);
    store.set();
    var letters = $$('.intro-word span', intro);
    var numEl = $('#intro-num'), fillEl = $('#intro-fill');
    var counter = { v: 0 };
    var it = GSAP.timeline({ defaults: { ease: 'power2.out' } });
    GSAP.set(letters, { y: 34, opacity: 0, filter: 'blur(14px)' });
    GSAP.set(fillEl, { scaleX: 0 });
    GSAP.set('.intro-meta span', { opacity: 0 });
    it.to(letters, { y: 0, opacity: 1, filter: 'blur(0px)', duration: .7, stagger: .09 }, .1)
      .to('.intro-meta span', { opacity: 1, duration: .4 }, .5)
      .to(fillEl, { scaleX: 1, duration: .95, ease: 'none' }, .15)
      .to(counter, {
        v: 99, duration: 1.05, ease: 'none',
        onUpdate: function () { numEl.textContent = Math.round(counter.v); }
      }, .15)
      .to('#intro', { opacity: 0, duration: .55, ease: 'power2.in' }, 1.18)
      .add(killIntro, 1.74);
    it.add(heroReveal(), 1.34);
  } else {
    if (intro) intro.remove();
    heroReveal();
  }

  function heroReveal() {
    var tl = GSAP.timeline({ defaults: { ease: 'power3.out' } });
    GSAP.set('.hero-h .hln > span', { yPercent: 108 });
    GSAP.set('.hero-line, .hero-bot', { opacity: 0, y: 16 });
    tl.to('.hero-h .hln > span', { yPercent: 0, duration: 1.05, stagger: .1 }, 0)
      .to('.hero-line', { opacity: 1, y: 0, duration: .7 }, .25)
      .to('.hero-bot', { opacity: 1, y: 0, duration: .8 }, .45);
    var v = $('#hero-video');
    if (v) GSAP.fromTo(v, { scale: 1.1 }, { scale: 1, duration: 2.2, ease: 'power2.out' });
    return tl;
  }

  /* первый экран: параллакс видео, строк и бегущей строки */
  (function () {
    var sec = $('.hero');
    if (!sec) return;
    var st = { trigger: sec, start: 'top top', end: 'bottom top', scrub: true };
    GSAP.to('.hero-media', { yPercent: 14, ease: 'none', scrollTrigger: st });
    GSAP.to('#hero-video', { scale: 1.16, ease: 'none', scrollTrigger: st });
    GSAP.to('.hero-h', { yPercent: -24, opacity: .1, ease: 'none', scrollTrigger: st });
    GSAP.to('.hero-bot', { yPercent: -46, opacity: 0, ease: 'none', scrollTrigger: st });
    GSAP.to('.hero-ticker', { yPercent: -60, ease: 'none', scrollTrigger: st });
  })();

  /* кадры в глубине страницы: медленный параллакс */
  ['.pr-hero-ph img', '.bk-ph img', '.pr-end .pr-quote'].forEach(function (sel) {
    var el = $(sel);
    if (!el) return;
    GSAP.fromTo(el, { yPercent: -5 }, {
      yPercent: 5, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* появление блоков */
  GSAP.utils.toArray('.rv').forEach(function (el) {
    GSAP.set(el, { opacity: 0, y: 34 });
    window.ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: function () { GSAP.to(el, { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }); }
    });
  });

  /* манифест: слова проявляются на прокрутке */
  (function () {
    var p = $('#man-p');
    if (!p) return;
    var words = null;
    if (window.SplitText) {
      try {
        var s = new window.SplitText(p, { type: 'words', wordsClass: 'w' });
        words = s.words;
      } catch (e) { words = null; }
    }
    if (!words) {
      words = [];
      p.innerHTML = p.textContent.split(' ').map(function (w) { return '<span class="w" style="display:inline-block">' + w + '</span>'; }).join(' ');
      words = $$('.w', p);
    }
    GSAP.set(words, { opacity: .14 });
    GSAP.to(words, {
      opacity: 1, ease: 'none', stagger: .5,
      scrollTrigger: { trigger: p, start: 'top 82%', end: 'bottom 42%', scrub: true }
    });
    var ph = $('.man-ph img');
    if (ph) GSAP.fromTo(ph, { yPercent: -6, scale: 1.06 }, {
      yPercent: 6, scale: 1, ease: 'none',
      scrollTrigger: { trigger: '.man', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  })();

  /* один кадр: квадратное фото растёт до полного экрана */
  GSAP.matchMedia().add('(min-width: 900px)', function () {
    var sec = $('.one');
    var ph = $('#one-ph');
    var cap = $('#one-cap');
    if (!sec || !ph || !cap) return;
    GSAP.set(cap, { opacity: 1, y: 0 });
    var tl = GSAP.timeline({
      scrollTrigger: {
        trigger: sec, start: 'top top', end: () => (window.innerWidth < 980 ? '+=105%' : '+=135%'), pin: '.one-stick', scrub: .6, anticipatePin: 1
      }
    });
    tl.fromTo(ph, { width: '70vw', height: '74svh', borderRadius: '50%' },
      { width: '100vw', height: '100svh', top: '50%', borderRadius: 0, ease: 'power2.inOut' }, 0)
      .fromTo('#one-video, #one-ph img', { scale: 1.06 }, { scale: 1.2, ease: 'none' }, 0)
      .to('.one-run', { yPercent: -14, opacity: 0, ease: 'power1.in' }, 0)
      .to(cap, { opacity: 1, y: 0, ease: 'power2.out' }, .55);
  });

  /* первый визит: один длинный кинематографичный кадр на четыре слоя */
  GSAP.matchMedia().add('(min-width: 900px)', function () {
    var sec = $('.visit');
    if (!sec) return;
    var frames = $$('.vt-fr', sec);
    var steps = $$('.vt-step', sec);
    var rail = $$('.vt-rail li', sec);
    var code = $('#vt-code');
    var where = $('#vt-where');
    var fill = $('#vt-fill');
    var places = ['Зона ожидания, первый этаж', 'Кабинет 2, свой КТ-аппарат', 'Стол врача у окна', 'Кресло, кабинет 2'];
    var shapes = [
      ['circle(28% at 50% 46%)', 'inset(7% 7% 7% 7% round 34px)'],
      ['inset(9% 16% 9% 16% round 260px 260px 0 0)', 'inset(3% 3% 3% 3% round 14px)'],
      ['inset(5% 22% 5% 22% round 20px)', 'inset(0% 0% 0% 0% round 0px)'],
      ['inset(4% 4% 4% 4% round 10px)', 'inset(0% 0% 0% 0% round 0px)']
    ];
    GSAP.set(steps, { opacity: 0 });
    GSAP.set(frames, { opacity: 0, clipPath: shapes[0][0] });

    var clock = { v: 0 };
    var D = steps.length;
    var tl = GSAP.timeline({
      scrollTrigger: {
        trigger: sec, start: 'top top', end: () => (window.innerWidth < 980 ? '+=210%' : '+=300%'), pin: true, scrub: .55, anticipatePin: 1,
        onUpdate: function (self) {
          var p = self.progress;
          if (fill) fill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
          var i = clamp(Math.floor(p * D), 0, D - 1);
          rail.forEach(function (li, k) { li.classList.toggle('on', k === i); });
          if (where) where.textContent = places[i];
        }
      }
    });

    frames.forEach(function (fr, i) {
      var img = $('img', fr);
      var start = i * 1;
      tl.fromTo(fr, { opacity: 0 }, { opacity: 1, duration: .45, ease: 'power1.out' }, start)
        .fromTo(fr, { clipPath: shapes[i][0] }, { clipPath: shapes[i][1], duration: 1, ease: 'power2.inOut' }, start)
        .fromTo(img, { scale: 1.04 + i * .01 }, { scale: 1.13 + i * .01, duration: 1, ease: 'none' }, start);
      if (i < D - 1) tl.to(fr, { opacity: 0, duration: .45, ease: 'power1.in' }, start + .55);
    });

    steps.forEach(function (st, i) {
      var start = i * 1;
      tl.fromTo(st, { opacity: 0, yPercent: 16, filter: 'blur(7px)' },
        { opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: .5, ease: 'power2.out' }, start);
      if (i < D - 1) tl.to(st, { opacity: 0, yPercent: -12, filter: 'blur(6px)', duration: .5, ease: 'power2.in' }, start + .5);
    });

    tl.to(clock, {
      v: 85, duration: D, ease: 'none',
      onUpdate: function () {
        if (!code) return;
        var mm = Math.floor(clock.v), ss = Math.round((clock.v - mm) * 60);
        if (ss === 60) { ss = 0; mm += 1; }
        code.textContent = (mm < 10 ? '00:' + mm : (mm < 60 ? '0' + mm : String(mm))) + ':' + (ss < 10 ? '0' + ss : ss);
      }
    }, 0);
    tl.to('.vt-head', { y: -26, opacity: .45, ease: 'power1.in', duration: .6 }, .05);
    tl.fromTo('.vt-foot', { y: 22, opacity: .3 }, { y: 0, opacity: 1, ease: 'power2.out', duration: .6 }, D - .6);
    window.__vtTimeline = tl;
  });

  /* врачи: горизонтальная лента */
  GSAP.matchMedia().add('(min-width: 900px)', function () {
    var sec = $('.docs'), track = $('#docs-track'), bar = $('#docs-bar');
    if (!sec || !track) return;
    var getX = function () {
      return -(track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(track).paddingLeft || 0));
    };
    var tween = GSAP.timeline().to({}, { duration: .55 }).to(track, { x: getX, duration: 1, ease: 'none' }).to({}, { duration: .55 });
    window.ScrollTrigger.create({
      trigger: '.docs-view', start: 'top 90px',
      end: function () { return '+=' + Math.max(1, track.scrollWidth - window.innerWidth + window.innerHeight * 1.5); },
      pin: '.docs-view', scrub: .8, invalidateOnRefresh: true, animation: tween,
      onUpdate: function (self) { if (bar) bar.style.transform = 'scaleX(' + self.progress.toFixed(4) + ')'; }
    });

  });

  GSAP.matchMedia().add('(max-width: 899px)', function () {
    var holder = $('.vt-frames'), frames = $$('.vt-fr'), steps = $$('.vt-step');
    frames.forEach(function (frame, i) { steps[i].prepend(frame); });
    return function () { frames.forEach(function (frame) { holder.appendChild(frame); }); };
  });

  /* цены: цифры перелистываются */
  $$('.price').forEach(function (el) {
    var target = parseFloat(el.dataset.price);
    if (isNaN(target)) return;
    var txt = el.textContent.trim();
    var prefix = /^от\s/i.test(txt) ? 'от ' : '';
    var o = { v: 0 };
    var write = function () { el.textContent = prefix + nf.format(Math.round(o.v)) + ' ₽'; };
    write();
    window.ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: function () {
        GSAP.to(o, {
          v: target, duration: 1.5, ease: 'power2.out', onUpdate: write,
          onComplete: function () { el.textContent = txt; }
        });
      }
    });
  });

  /* отзывы: слои двигаются с разной скоростью */
  $$('.q-item').forEach(function (item, i) {
    var img = $('img', item);
    if (img) GSAP.fromTo(img, { yPercent: -7, scale: 1.08 }, {
      yPercent: 7, scale: 1, ease: 'none',
      scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true }
    });
    GSAP.fromTo(item, { y: 0 }, {
      y: i === 1 ? -34 : (i === 0 ? 26 : 0), ease: 'none',
      scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* подвал: последнее слово на всю ширину */
  GSAP.fromTo('.foot-big', { yPercent: 12, opacity: .2 }, {
    yPercent: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: '.foot-big', start: 'top bottom', end: 'bottom bottom', scrub: true }
  });

  finish();

  function finish() {
    body.classList.remove('pre');
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
      window.addEventListener('load', function () { window.ScrollTrigger.refresh(); });
    }
  }
})();
