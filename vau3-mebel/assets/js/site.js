/* «Ясень»: волокно, чертёж, образцы. Всё движение в одном цикле gsap.ticker. */
(function () {
  'use strict';

  var doc = document;
  var q = function (s, c) { return (c || doc).querySelector(s); };
  var qa = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mqHover = window.matchMedia('(hover: hover)');
  var reduce = mqReduce.matches;
  var mobile = function () { return window.innerWidth < 900; };

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ---------- плавная прокрутка ---------- */
  if (!reduce) {
    var lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ================================================================
     0. Видео первого экрана: без движения отдаём постер
     ================================================================ */
  qa('.a1-video').forEach(function (v) {
    if (reduce) {
      v.removeAttribute('autoplay');
      v.pause();
      v.currentTime = 0;
    } else {
      var play = v.play();
      if (play && play.catch) play.catch(function () { /* браузер не дал: останется постер */ });
    }
  });

  /* ================================================================
     1. Линии волокна поверх фото первого экрана
     ================================================================ */
  var SVGNS = 'http://www.w3.org/2000/svg';
  var fiber = (function () {
    var svg = q('#fiber');
    if (!svg) return [];
    var n = mobile() ? 16 : 24;
    var paths = [];
    for (var i = 0; i < n; i++) {
      var y = (i + 0.5) * (1000 / n);
      var a = 9 + Math.random() * 24;
      var p = doc.createElementNS(SVGNS, 'path');
      p.setAttribute('d',
        'M-40,' + (y - a * 0.5).toFixed(1) +
        ' C110,' + (y + a).toFixed(1) +
        ' 250,' + (y - a * 1.25).toFixed(1) +
        ' 395,' + (y + a * 0.45).toFixed(1) +
        ' S535,' + (y - a * 0.85).toFixed(1) +
        ' 640,' + (y + a * 0.3).toFixed(1));
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', 'currentColor');
      p.setAttribute('stroke-width', (0.7 + Math.random() * 1.5).toFixed(2));
      p.setAttribute('stroke-linecap', 'round');
      p.setAttribute('vector-effect', 'non-scaling-stroke');
      svg.appendChild(p);
      paths.push(p);
    }
    return paths;
  })();

  if (!reduce && fiber.length) {
    fiber.forEach(function (p) {
      var len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
  }

  /* дышит каждая вторая линия: на телефоне и в софтверном рендере это
     вдвое дешевле, а глазом разницы не видит */
  var breath = null;
  var fiberBreath = function (dur) {
    if (!fiber.length) return;
    var half = fiber.filter(function (p, i) { return i % 2 === 0; });
    breath = gsap.to(half, {
      x: 'random(-3, 3)', y: 'random(-3, 3)', duration: dur, ease: 'sine.inOut',
      yoyo: true, repeat: -1, stagger: { each: 0.06, from: 'random' }
    });
  };

  /* первый экран ушёл из поля зрения: видео встаёт на пауту и линии не дышат */
  var act1 = q('.act1');
  if (act1 && window.IntersectionObserver) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = q('.a1-video');
        if (v) {
          if (e.isIntersecting && !reduce) {
            var pr = v.play();
            if (pr && pr.catch) pr.catch(function () {});
          } else {
            v.pause();
          }
        }
        if (breath) { if (e.isIntersecting) breath.play(); else breath.pause(); }
      });
    }, { threshold: 0.02 });
    io.observe(act1);
  }

  /* ================================================================
     2. Сборка первого экрана
     ================================================================ */
  var heroLines = qa('.a1-h .mask > span');
  var heroBits = qa('.a1-lead, .a1-plate, .a1-city');

  if (!reduce) {
    gsap.set(heroLines, { yPercent: 112 });
    gsap.set(heroBits, { yPercent: 26, opacity: 0 });
  }

  var heroPlayed = false;
  function playHero() {
    if (heroPlayed) return;
    heroPlayed = true;
    if (reduce) { doc.documentElement.classList.remove('preload'); return; }
    var tl = gsap.timeline({ onComplete: function () { doc.documentElement.classList.remove('preload'); } });
    tl.to(heroLines, { yPercent: 0, duration: 1.25, ease: 'expo.out', stagger: 0.085 }, 0);
    tl.to(heroBits, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.07 }, 0.18);
    if (fiber.length) {
      tl.to(fiber, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        stagger: { each: 0.028, from: 'start' }
      }, 0.1);
      tl.add(function () { fiberBreath(3.8); }, 1.6);
    }
  }

  /* заставка: один раз за сессию */
  var curtain = q('#curtain');
  var seen = false;
  try { seen = sessionStorage.getItem('yasen_intro') === '1'; } catch (e) { seen = false; }

  if (reduce) {
    if (curtain) curtain.remove();
    playHero();
  } else if (seen || !curtain) {
    if (curtain) curtain.remove();
    doc.documentElement.classList.remove('preload');
    heroPlayed = true;
    heroLines.forEach(function (el) { gsap.set(el, { yPercent: 0 }); });
    gsap.set(heroBits, { yPercent: 0, opacity: 1 });
    if (fiber.length) {
      gsap.set(fiber, { strokeDashoffset: 0 });
      fiberBreath(3.8);
    }
  } else {
    var counter = { v: 0 };
    gsap.set('#curtainFill', { scaleX: 0 });
    var intro = gsap.timeline({
      onComplete: function () {
        window.__introDone = true;
        try { sessionStorage.setItem('yasen_intro', '1'); } catch (e) {}
        if (curtain && curtain.parentNode) curtain.parentNode.removeChild(curtain);
      }
    });
    intro.to(counter, {
      v: 100, duration: 0.95, ease: 'power2.inOut',
      onUpdate: function () { q('#curtainCount').textContent = Math.round(counter.v); }
    }, 0)
      .to('#curtainFill', { scaleX: 1, duration: 0.95, ease: 'power2.inOut' }, 0)
      .to(curtain, { yPercent: -100, duration: 1.0, ease: 'expo.inOut' }, 0.95)
      .add(playHero, 1.05);
  }

  /* ================================================================
     3. Акт 1: шпон снимается вверх, под ним цех
     ================================================================ */
  if (!reduce) {
    var tl1 = gsap.timeline({ defaults: { ease: 'none' } });
    tl1.to('#fiber', { opacity: .22, duration: .5 }, 0)
      .to('[data-band="1"]', { yPercent: -9, duration: 1 }, 0)
      .to('[data-band="2"]', { yPercent: -19, duration: 1 }, 0)
      .to('[data-band="3"]', { yPercent: -32, duration: 1 }, 0)
      /* текст и адрес остаются в кадре до конца: между актами не пусто */
      .to('.a1-copy', { yPercent: -9, duration: 1 }, 0)
      .to('.a1-word', { yPercent: -26, xPercent: 6, duration: 1 }, 0)
      .to('.a1-platecap', { yPercent: -280, duration: .3 }, 0);

    ScrollTrigger.create({
      trigger: '.act1',
      start: 'top top',
      end: function () { return '+=' + Math.round(window.innerHeight * (mobile() ? 0.95 : 1.5)); },
      pin: '.a1-stage',
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.55,
      animation: tl1
    });
  }

  /* ================================================================
     4. Акт 2: чертёж раскрывается в фото, размеры улетают к краям
        и на их месте встают строки «как работаем»
     ================================================================ */
  var stage2 = q('.a2-stage');
  var frame = q('#a2frame');
  var draw = q('#draw');
  var photo2 = q('.a2-photo');

  if (stage2 && frame && photo2) {
    /* Прямоугольник чертежа в процентах от сцены. Фото раскрывается ровно из него.
       Через прокси-объект, а не строкой clip-path: GSAP криво считает строки со
       start-функцией (фото схлопывалось в 145 %). */
    var clip = { t: 50, r: 50, b: 50, l: 50 };
    var applyClip = function () {
      photo2.style.clipPath = 'inset(' + clip.t.toFixed(2) + '% ' + clip.r.toFixed(2) + '% ' +
        clip.b.toFixed(2) + '% ' + clip.l.toFixed(2) + '%)';
    };
    var clipFrom = function () {
      var f = frame.getBoundingClientRect();
      var s = stage2.getBoundingClientRect();
      if (!f.width || !s.width || !s.height) return { t: 50, r: 50, b: 50, l: 50 };
      return {
        t: Math.max(0, (f.top - s.top) / s.height * 100),
        b: Math.max(0, (s.bottom - f.bottom) / s.height * 100),
        l: Math.max(0, (f.left - s.left) / s.width * 100),
        r: Math.max(0, (s.right - f.right) / s.width * 100)
      };
    };
    var clipKeys = ['t', 'r', 'b', 'l'];
    var fromClip = {};
    clipKeys.forEach(function (k) {
      fromClip[k] = function () { return clipFrom()[k]; };
    });

    /* Размеры улетают к краям экрана. Цель считаем в пикселях экрана от
       настоящего положения числа (getBBox), а в timeline отдаём разницу
       в единицах чертежа: так они не уезжают за окно ни на какой ширине. */
    var nums = draw ? qa('.dw-n', draw) : [];
    var fly = [null, null, null];
    var countFly = function () {
      var s = stage2.getBoundingClientRect();
      var f = frame.getBoundingClientRect();
      if (!s.width || !f.width || !draw) return;
      var k = f.width / 800;                       /* пикселей на единицу viewBox */
      var fromBox = function (i, sideX, fracY) {
        var el = nums[i];
        if (!el) return;
        var bb = el.getBBox();
        var w = bb.width * k, h = bb.height * k;
        var cx = f.left + bb.x * k + w / 2;
        var cy = f.top + bb.y * k + h / 2;
        var tx = sideX < 0 ? s.left + 34 + w / 2 : s.right - 34 - w / 2;
        var ty = s.top + s.height * fracY;
        fly[i] = { x: (tx - cx) / k, y: (ty - cy) / k };
      };
      fromBox(0, 1, .085);   /* 2400 -> в правый верхний угол */
      fromBox(1, -1, .085);  /* 2100 -> в левый верхний угол */
      fromBox(2, 1, .40);    /* 600  -> к правому краю, над полосой работы */
    };

    /* чертёж рисуется сам, как только до него доехали: пустым он не бывает */
    if (draw && !reduce) {
      var dwLines = qa('path', draw);
      dwLines.forEach(function (p) {
        var l = p.getTotalLength();
        gsap.set(p, { strokeDasharray: l, strokeDashoffset: l });
      });
      var drawn = false;
      var drawLines = function () {
        if (drawn) return;
        drawn = true;
        gsap.to(dwLines, {
          strokeDashoffset: 0, duration: 1.15, ease: 'power2.inOut',
          stagger: { each: 0.035, from: 'random' }, overwrite: true
        });
      };
      ScrollTrigger.create({ trigger: '.act2', start: 'top 92%', once: true, onEnter: drawLines });
      drawLines();
    }

    var c0 = clipFrom();
    clip.t = c0.t; clip.r = c0.r; clip.b = c0.b; clip.l = c0.l;
    applyClip();

    if (!reduce) {
      var steps = qa('.a2-step');
      countFly();
      var tl2 = gsap.timeline({ defaults: { ease: 'none' } });

      /* чертёж проявляется вместе с началом закрепления: пока висит первый акт,
         его всё равно не видно, а под закреплённой сценой он и не нужен */
      tl2.fromTo('.a2-frame', { scale: .972 }, { scale: 1, duration: .16 }, 0)
        .fromTo('.a2-h', { yPercent: 0, opacity: 1 }, { yPercent: -16, opacity: 0, duration: .16 }, .08)
        /* 0.10-0.18: штамп чертежа уходит, чтобы не лежать поверх фото */
        .to('.a2-cap', { opacity: 0, duration: .08 }, .10)
        /* 0.18-0.46: фото раскрывается из прямоугольника чертежа во весь экран */
        .fromTo(clip, fromClip, { t: 0, r: 0, b: 0, l: 0, duration: .28, onUpdate: applyClip }, .18)
        .fromTo('.a2-photo img', { scale: 1.12 }, { scale: 1.02, duration: .28 }, .18)
        /* 0.30-0.46: бумага гаснет, линии светлеют и остаются поверх фото */
        .to('.a2-bg', { opacity: 0, duration: .14 }, .30)
        .to('.a2-draw', { color: '#f2e9da', duration: .14 }, .32)
        .to('.a2-draw .dw-num', { color: '#f2e9da', duration: .14 }, .32)
        /* 0.46-0.64: размеры улетают к краям экрана */
        .to(nums[0], { x: function () { return fly[0] ? fly[0].x : 0; }, y: function () { return fly[0] ? fly[0].y : 0; }, opacity: 0, duration: .16 }, .46)
        .to(nums[1], { x: function () { return fly[1] ? fly[1].x : 0; }, y: function () { return fly[1] ? fly[1].y : 0; }, opacity: 0, duration: .16 }, .48)
        .to(nums[2], { x: function () { return fly[2] ? fly[2].x : 0; }, y: function () { return fly[2] ? fly[2].y : 0; }, opacity: 0, duration: .16 }, .50)
        /* 0.54-0.74: спецификация уходит, на её месте поднимается «как работаем» */
        .to('.a2-side', { opacity: 0, y: 16, duration: .1 }, .54)
        .fromTo('.a2-end', { yPercent: 104 }, { yPercent: 0, duration: .18 }, .56)
        .fromTo(steps, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .08, stagger: .05 }, .66)
        /* 0.70-0.84: линии гаснут последними */
        .to('.a2-draw', { opacity: 0, duration: .14 }, .70)
        /* 0.86-1: медленный наезд на шкаф */
        .to('.a2-photo img', { scale: 1.09, duration: .14 }, .86);

      ScrollTrigger.create({
        trigger: '.act2',
        start: 'top top',
        end: function () { return '+=' + Math.round(window.innerHeight * (mobile() ? 1.45 : 2.2)); },
        pin: '.a2-stage',
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.6,
        animation: tl2
      });

      /* окно перерисовали: если сцена ещё не тронута, обновляем прямоугольник */
      ScrollTrigger.addEventListener('refresh', function () {
        countFly();
        tl2.invalidate();
        if (tl2.progress() > 0.001) return;
        var c = clipFrom();
        clip.t = c.t; clip.r = c.r; clip.b = c.b; clip.l = c.l;
        applyClip();
      });
    }
  }

  /* ================================================================
     5. Акт 3: образцы пород
     ================================================================ */
  var act3 = q('.act3');
  if (act3) {
    var states = qa('.a3-state', act3);
    var shots = qa('.a3-ph', act3);
    var samples = qa('.smp', act3);
    var loop = q('#loop');
    var loopRot = q('#loopRot');

    /* цифры лежат в HTML, анимация только перелистывает их */
    qa('.flip', act3).forEach(function (f) {
      var txt = f.textContent;
      f.textContent = '';
      txt.split('').forEach(function (ch) {
        var s = doc.createElement('span');
        s.textContent = ch === ' ' ? ' ' : ch;
        f.appendChild(s);
      });
    });

    var flipIn = function (stateEl) {
      if (!stateEl || reduce) return;
      var chars = qa('.flip > span', stateEl);
      gsap.fromTo(chars, { yPercent: 115 }, {
        yPercent: 0, duration: 0.6, ease: 'expo.out', stagger: 0.016, overwrite: true
      });
    };

    var placeLoop = function () {
      if (!loop || loop.offsetParent === null) return;
      var on = samples.filter(function (b) { return b.classList.contains('is-on'); })[0];
      if (!on) return;
      var sw = q('.smp-swatch', on);
      if (!sw) return;
      var size = sw.offsetWidth * 1.56;
      var cx = sw.offsetLeft + sw.offsetWidth / 2;
      var box = loop.parentNode;
      cx = Math.max(cx, size / 2 + 10);
      cx = Math.min(cx, box.clientWidth - size / 2 - 10);
      loop.style.width = size + 'px';
      loop.style.height = size + 'px';
      loop.style.left = cx + 'px';
      loop.style.top = (sw.offsetTop + sw.offsetHeight / 2) + 'px';
      if (!reduce) {
        gsap.to(loop, { opacity: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
      } else {
        loop.style.opacity = 1;
      }
    };

    var setWood = function (wood) {
      var btn = samples.filter(function (b) { return b.getAttribute('data-wood') === wood; })[0];
      if (!btn || act3.getAttribute('data-wood') === wood) return;
      act3.setAttribute('data-wood', wood);
      act3.style.setProperty('--a3-tone', btn.getAttribute('data-tone'));
      act3.style.setProperty('--a3-ink', btn.getAttribute('data-ink'));

      samples.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      var stateEl = null;
      states.forEach(function (s) {
        var on = s.getAttribute('data-state') === wood;
        s.classList.toggle('is-on', on);
        if (on) stateEl = s;
      });
      shots.forEach(function (s) {
        s.classList.toggle('is-on', s.getAttribute('data-shot') === wood);
      });
      placeLoop();
      flipIn(stateEl);
    };

    samples.forEach(function (b) {
      b.setAttribute('data-tone', b.getAttribute('data-wood') === 'oak' ? '#c9a877'
        : b.getAttribute('data-wood') === 'ash' ? '#d6c096'
          : b.getAttribute('data-wood') === 'walnut' ? '#4a2c1a' : '#e6ddc8');
      b.setAttribute('data-ink', b.getAttribute('data-wood') === 'walnut' ? '#f2ece1' : '#2a251f');
      b.addEventListener('click', function () { setWood(b.getAttribute('data-wood')); });
      if (mqHover.matches) {
        b.addEventListener('mouseenter', function () { setWood(b.getAttribute('data-wood')); });
      }
      b.addEventListener('focus', function () { setWood(b.getAttribute('data-wood')); });
    });

    if (loopRot && !reduce) {
      gsap.to(loopRot, { rotation: 360, svgOrigin: '100 100', duration: 26, repeat: -1, ease: 'none' });
    }
    placeLoop();
    flipIn(states[0]);

    if (!reduce) {
      gsap.fromTo('.a3-shot', { scale: .94, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1.4, ease: 'expo.out', immediateRender: false,
        scrollTrigger: { trigger: '.act3', start: 'top 72%' }
      });
      gsap.fromTo('.a3-samples', { y: 46, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', immediateRender: false,
        scrollTrigger: { trigger: '.act3', start: 'top 62%' }
      });
    }

    var rePlace = function () { placeLoop(); };
    window.addEventListener('resize', function () {
      clearTimeout(window.__a3t);
      window.__a3t = setTimeout(rePlace, 200);
    });
  }

  /* ================================================================
     6. Финал: цех во всю высоту, контакты на плашке, огромное «Ясень»
     ================================================================ */
  var finWord = q('#finword');
  var letters = [];
  if (finWord) {
    var txt = finWord.textContent.trim();
    finWord.textContent = '';
    txt.split('').forEach(function (ch) {
      var s = doc.createElement('span');
      s.textContent = ch;
      finWord.appendChild(s);
      letters.push(s);
    });
  }

  if (!reduce) {
    if (mobile()) {
      /* без закрепления: телефон просто показывает финал */
      ScrollTrigger.create({
        trigger: '.fin', start: 'top 90%', once: true,
        onEnter: function () {
          gsap.fromTo('.fin-plate', { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: .9, ease: 'expo.out', immediateRender: false });
          gsap.fromTo(letters, { y: 34, opacity: 0 },
            { y: 0, opacity: 1, duration: .9, ease: 'expo.out', stagger: .05, immediateRender: false });
        }
      });
    } else {
      var tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.fin',
          start: 'top top',
          end: '+=72%',
          pin: '.fin-stage',
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.6
        }
      });
      tl3.fromTo('.fin-photo', { scale: 1.08 }, { scale: 1, duration: 1 }, 0)
        .fromTo('.fin-plate', { yPercent: 116, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .52 }, .18)
        .fromTo(letters, { yPercent: 92, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .6, stagger: .05 }, .26);
    }
  }

  /* ================================================================
     7. Магнит на кнопках
     ================================================================ */
  if (!reduce && mqHover.matches) {
    qa('[data-magnet]').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - r.left - r.width / 2) * 0.16,
          y: (e.clientY - r.top - r.height / 2) * 0.3,
          duration: 0.5, ease: 'expo.out', overwrite: 'auto'
        });
      });
      btn.addEventListener('mouseleave', function () {
        gsap.to(btn, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.42)', overwrite: 'auto' });
      });
    });
  }

  /* ================================================================
     8. Плавные якоря
     ================================================================ */
  qa('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (typeof lenis !== 'undefined' && lenis) lenis.scrollTo(target, { offset: 0, duration: 1.1 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  doc.fonts && doc.fonts.ready && doc.fonts.ready.then(function () {
    ScrollTrigger.refresh();
  });
})();