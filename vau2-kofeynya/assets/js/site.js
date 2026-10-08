/* Лампа: три акта. Пружина, один общий цикл кадров, без библиотек кроме GSAP.
   Правила жеста: вертикальный свайп всегда листает страницу (touch-action: pan-y),
   горизонтальный тянет ленту и качает карточки. Ни одного getBoundingClientRect
   в кадре: все размеры меряются на resize/refresh, дальше только арифметика. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var html = document.documentElement;
  if (reduced) html.classList.add('no-motion');

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function spring(st, target, dt, k, d) {
    st.v += ((target - st.s) * k - st.v * d) * dt;
    st.s += st.v * dt;
    return st.s;
  }

  /* документный диапазон элемента: считаем только на пересборке */
  function docRange(el) {
    var r = el.getBoundingClientRect();
    return { top: r.top + window.scrollY, bottom: r.bottom + window.scrollY };
  }
  function onScreen(rg, slack) {
    var y = window.scrollY, s = slack || 0;
    return (y + window.innerHeight > rg.top - s) && (y < rg.bottom + s);
  }

  var refreshers = [];
  function onRefresh(fn) { refreshers.push(fn); fn(); }
  function refreshAll() { for (var i = 0; i < refreshers.length; i++) refreshers[i](); }

  /* =========================================================
     АКТ 1. Название из жидких букв
     ========================================================= */
  (function liquidType() {
    var box = document.getElementById('liquid');
    if (!box) return;
    var row = box.querySelector('.liquid-letters');
    var letters = Array.prototype.slice.call(box.querySelectorAll('.lt'));
    if (!letters.length || !row) return;

    var hero = document.getElementById('hero');
    var ptr = { x: -9999, y: -9999, on: false, touch: false };
    var heroR = { top: 0, bottom: 0 };

    var st = letters.map(function (el) {
      el.style.willChange = 'transform';
      return { el: el, s: { s: 1, v: 0 }, x: { s: 0, v: 0 }, r: { s: 0, v: 0 }, lift: reduced ? 0 : 26, last: '' };
    });
    var rects = [];

    function measure() {
      rects = st.map(function (o) {
        var r = o.el.getBoundingClientRect();
        return { x: r.left + r.width / 2 };
      });
      heroR = docRange(hero);
    }

    /* название занимает всю ширину экрана минус поля: кегль считаем по буквам */
    function fit() {
      row.style.fontSize = '';
      var avail = row.parentElement.clientWidth || window.innerWidth;
      var cs = getComputedStyle(row);
      var pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      var natural = row.getBoundingClientRect().width - pad;
      if (natural > 1 && avail > pad) {
        var fs = parseFloat(cs.fontSize);
        row.style.fontSize = (fs * ((avail - pad) / natural)).toFixed(2) + 'px';
      }
      measure();
    }

    function onMove(e) {
      ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true;
      ptr.touch = e.pointerType === 'touch';
    }
    hero.addEventListener('pointermove', onMove, { passive: true });
    hero.addEventListener('pointerdown', onMove, { passive: true });
    window.addEventListener('pointerleave', function () { ptr.on = false; }, { passive: true });
    /* палец отпустили - буквы возвращаются в строй, а не замирают надутыми */
    window.addEventListener('pointerup', function (e) {
      if (e.pointerType === 'touch') ptr.on = false;
    }, { passive: true });
    window.addEventListener('pointercancel', function () { ptr.on = false; }, { passive: true });

    /* сборка первого экрана: маска на каждой букве (clip-path),
       подъём снизу держит сам цикл ниже - transform пишет только он */
    if (!reduced && gsap) {
      gsap.fromTo(st.map(function (o) { return o.el; }),
        { clipPath: 'inset(-10% -10% 100% -10%)' },
        {
          clipPath: 'inset(-10% -10% -18% -10%)',
          duration: 1.25, ease: 'expo.out', stagger: 0.07, delay: 0.06
        });
      gsap.from('.hero-line > *', { y: 24, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.1, delay: 0.34 });
    }

    var t0 = performance.now();
    var lastShift = -99, lastTick = t0;

    gsap.ticker.add(function () {
      if (reduced) return;
      var now = performance.now();
      /* первый экран уехал - буквы не трогаем */
      if (!onScreen(heroR, 80)) { lastTick = now; return; }
      var dt = clamp((now - lastTick) / 1000, 0.001, 0.05);
      lastTick = now;
      var elapsed = (now - t0) / 1000;

      var p = clamp(-(window.scrollY - heroR.top) / Math.max(1, heroR.bottom - heroR.top), 0, 1);
      if (Math.abs(p - lastShift) > 0.002) {
        lastShift = p;
        row.style.transform = 'translate3d(0,' + (-p * 1.6).toFixed(2) + 'px,0)';
      }

      var prox = ptr.on && ptr.y > 0;
      var done = elapsed > 1.6;

      for (var i = 0; i < st.length; i++) {
        var o = st[i], c = rects[i] || { x: 0 };
        var f = 0, push = 0, side = 0;
        if (prox && !done) {
          f = clamp(1 - Math.abs(ptr.x - c.x) / 220, 0, 1);
          if (f > 0) {
            side = ptr.x > c.x ? -1 : 1;
            push = side * f * f * 26;
            var nb = rects[i + 1];
            if (nb) {
              var fn = clamp(1 - Math.abs(ptr.x - nb.x) / 220, 0, 1);
              if (fn > 0) push += (ptr.x > nb.x ? -1 : 1) * fn * fn * 12;
            }
          }
        } else if (done) {
          f = (Math.sin(elapsed * 1.1 - i * 0.8) + 1) / 2 * 0.03;
        }
        var sT = 1 + (prox && !done ? Math.pow(f, 1.4) * 0.26 : f);
        var xT = prox && !done ? push : 0;
        var rT = (prox && !done ? side * f * 2.4 : 0) + clamp(-o.x.v * 0.55, -6, 6);
        var s = spring(o.s, sT, dt, 180, 12);
        var x = spring(o.x, xT, dt, 150, 11);
        var r = spring(o.r, rT, dt, 120, 9);
        var lift = o.lift;
        if (lift) o.lift = elapsed < 1.35 ? 26 * Math.pow(2, -10 * (elapsed / 1.35)) : 0;
        var str = 'translate3d(' + x.toFixed(2) + 'px,' + lift.toFixed(2) + 'px,0) scale(' +
          s.toFixed(4) + ') rotate(' + r.toFixed(2) + 'deg)';
        if (str !== o.last) { o.last = str; o.el.style.transform = str; }
      }
    });

    window.addEventListener('resize', fit);
    window.addEventListener('load', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    fit();
    onRefresh(fit);
  })();

  /* =========================================================
     Лента с пружиной: горизонтальное перетаскивание и закрепление
     ========================================================= */
  /* Ось-замок: жест считается горизонтальным только когда палец (мышь)
     ушёл вбок сильнее, чем вверх. До этого момента браузер листает
     страницу, и мы не мешаем ему ни одним preventDefault. */
  function makeRail(opt) {
    var stage = document.getElementById(opt.stage);
    var track = document.getElementById(opt.track);
    if (!stage || !track) return null;
    var scroller = document.getElementById(opt.scroll) || stage;

    var items = Array.prototype.slice.call(track.children).filter(function (el) {
      return el.classList.contains(opt.item);
    });

    var rail = {
      stage: stage, track: track, scroller: scroller, items: items,
      max: 0, p: 0, x: 0, v: 0, sl: 0, lastSl: 0, inertia: 0,
      dragging: false, pending: false, id: null, sx: 0, sy: 0, startSl: 0,
      range: { top: 0, bottom: 0 }
    };

    rail.measure = function () {
      rail.max = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      rail.range = docRange(stage);
      if (!rail.dragging && !rail.pending) {
        scroller.scrollLeft = rail.max * rail.p;
        rail.sl = scroller.scrollLeft;
        rail.lastSl = rail.sl;
      }
    };
    rail.setProgress = function (p) {
      rail.p = clamp(p, 0, 1);
      if (!rail.dragging && !rail.pending) {
        scroller.scrollLeft = rail.max * rail.p;
        rail.sl = scroller.scrollLeft;
        rail.lastSl = rail.sl;
      }
    };
    rail.to = function (px) {
      var nx = clamp(px, 0, rail.max);
      scroller.scrollLeft = nx;
      rail.sl = nx;
      return nx;
    };

    /* положение ленты знаем из события scroll, а не из чтения каждый кадр */
    scroller.addEventListener('scroll', function () {
      if (!rail.dragging) rail.sl = scroller.scrollLeft;
    }, { passive: true });

    function begin(e) {
      if (reduced || (e.pointerType === 'mouse' && e.button > 0)) return;
      rail.pending = true;
      rail.id = e.pointerId;
      rail.sx = e.clientX;
      rail.sy = e.clientY;
      rail.startSl = rail.sl;
      rail.v = 0;
      rail.inertia = 0;
    }
    function move(e) {
      if (!rail.pending || e.pointerId !== rail.id) return;
      var dx = e.clientX - rail.sx;
      var dy = e.clientY - rail.sy;
      if (!rail.dragging) {
        if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) {
          /* жест вертикальный: отпускаем ленту, страница листается сама */
          rail.pending = false;
          return;
        }
        if (Math.abs(dx) < 6) return;
        rail.dragging = true;
        scroller.classList.add('is-drag');
      }
      var now = performance.now();
      var dt = Math.max(8, now - (rail.lt || now)) / 1000;
      var next = rail.to(rail.startSl - dx);
      rail.v = (next - rail.x) / dt;
      rail.lt = now;
      if (e.cancelable) e.preventDefault();
    }
    function end() {
      if (!rail.pending) return;
      if (rail.dragging) {
        rail.inertia = clamp(rail.v, -2600, 2600);
        scroller.classList.remove('is-drag');
      }
      rail.dragging = false;
      rail.pending = false;
      rail.id = null;
    }

    if (opt.drag) {
      scroller.addEventListener('pointerdown', begin);
      window.addEventListener('pointermove', move, { passive: false });
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
      window.addEventListener('blur', end);
    }

    rail.tick = function (dt) {
      var sl = rail.sl;
      var dv = (sl - rail.lastSl) / Math.max(dt, 0.001);
      rail.lastSl = sl;
      if (rail.dragging) {
        rail.v = dv;
      } else {
        rail.v = rail.v * 0.55 + dv * 0.45;
        if (Math.abs(rail.inertia) > 1) {
          var nx = sl + rail.inertia * dt;
          if (nx <= 0 || nx >= rail.max) { nx = clamp(nx, 0, rail.max); rail.inertia = 0; }
          else rail.inertia *= Math.pow(0.93, dt * 60);
          rail.to(nx);
          rail.lastSl = nx;
        }
      }
      rail.x = rail.sl;
      rail.p = rail.max > 0 ? clamp(rail.sl / rail.max, 0, 1) : 0;
    };

    rail.measure();
    onRefresh(function () { rail.measure(); });
    return rail;
  }

  /* =========================================================
     АКТ 2. Полароиды на верёвке
     ========================================================= */
  var rope = makeRail({ stage: 'rope-stage', track: 'rope-track', item: 'polaroid', drag: true });

  (function ropeAct() {
    if (!rope) return;
    var cards = rope.items;

    var swing = cards.map(function (c, i) {
      var veil = document.createElement('span');
      veil.className = 'pol-veil';
      var frame = c.querySelector('.pol-frame');
      if (frame) frame.appendChild(veil);
      return { el: c, veil: veil, s: { s: 0, v: 0 }, target: 0, kick: 0, ph: i * 0.85,
        shown: reduced, dragging: false, pending: false, id: null, sx: 0, sy: 0, base: 0, last: '' };
    });

    /* проявление снимка: без filter, только прозрачность подложки */
    function reveal(o) {
      if (o.shown) return;
      o.shown = true;
      if (!gsap || reduced) return;
      gsap.fromTo(o.el, { opacity: 0.25 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
      if (o.veil) gsap.to(o.veil, { opacity: 0, duration: 1.15, ease: 'power2.inOut', delay: 0.12 });
    }

    if (reduced || !window.IntersectionObserver) {
      swing.forEach(function (o) { o.veil && (o.veil.style.opacity = 0); o.shown = true; });
    } else {
      var io = new IntersectionObserver(function (list) {
        for (var i = 0; i < list.length; i++) {
          if (!list[i].isIntersecting) continue;
          var o = list[i].target.__swing;
          if (o) { reveal(o); io.unobserve(list[i].target); }
        }
      }, { root: rope.scroller, threshold: 0.18 });
      swing.forEach(function (o) { o.el.__swing = o; io.observe(o.el); });
    }

    /* карточку можно взять и качнуть - только горизонтальным движением.
       Вертикальный жест отпускает карточку сразу: страница листается сама. */
    swing.forEach(function (o) {
      var c = o.el;
      c.addEventListener('pointerdown', function (e) {
        if (reduced) return;
        o.pending = true; o.id = e.pointerId;
        o.sx = e.clientX; o.sy = e.clientY; o.px = e.clientX;
      });
      c.addEventListener('pointermove', function (e) {
        if (!o.pending || e.pointerId !== o.id) return;
        var dx = e.clientX - o.sx, dy = e.clientY - o.sy;
        if (!o.dragging) {
          if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) { o.pending = false; o.dragging = false; return; }
          if (Math.abs(dx) < 6) return;
          o.dragging = true;
          o.base = o.target;
          c.classList.add('is-drag');
        }
        var step = e.clientX - o.px;
        o.px = e.clientX;
        o.target = clamp(o.base + (e.clientX - o.sx) * 0.35, -26, 26);
        o.kick += step * 0.45;
        if (e.cancelable) e.preventDefault();
      });
      function end() {
        if (!o.pending && !o.dragging) return;
        o.pending = false; o.dragging = false;
        o.target = 0;
        c.classList.remove('is-drag');
      }
      c.addEventListener('pointerup', end);
      c.addEventListener('pointercancel', end);
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
    });

    gsap.ticker.add(function () {
      var dt = clamp(gsap.ticker.deltaRatio(60) / 60, 0.001, 0.05);
      if (!onScreen(rope.range, 60)) return;
      rope.tick(dt);
      var v = rope.v;
      var now = performance.now();
      var sway = Math.sin(now / 1100) * 0.6;
      for (var i = 0; i < swing.length; i++) {
        var o = swing[i];
        if (!o.dragging) {
          o.kick += (0 - o.kick) * Math.min(1, dt * 2);
          o.target = clamp(-v * 0.004 + o.kick, -9, 9) + sway * Math.cos(o.ph);
        }
        var r = spring(o.s, o.target, dt, 130, 9);
        var str = 'rotate(' + r.toFixed(2) + 'deg) translateY(' + (Math.abs(r) * 3).toFixed(1) + 'px)';
        if (str !== o.last) { o.last = str; o.el.style.transform = str; }
      }
    });
  })();

  /* =========================================================
     АКТ 3. Меню-карусель
     ========================================================= */
  var menuRail = makeRail({ stage: 'menu-stage', scroll: 'menu-scroll', track: 'menu-track', item: 'm-card', drag: true });

  (function menuAct() {
    if (!menuRail) return;
    var geo = [];

    function measureGeo() {
      var cw = menuRail.scroller.clientWidth;
      geo = menuRail.items.map(function (el) {
        return { el: el, c: el.offsetLeft + el.offsetWidth / 2, hw: cw / 2, last: '' };
      });
    }
    measureGeo();
    onRefresh(measureGeo);

    gsap.ticker.add(function () {
      var dt = clamp(gsap.ticker.deltaRatio(60) / 60, 0.001, 0.05);
      if (!onScreen(menuRail.range, 60)) return;
      menuRail.tick(dt);
      var skew = clamp(-menuRail.v * 0.012, -12, 12);
      var mid = menuRail.sl;
      for (var i = 0; i < geo.length; i++) {
        var g = geo[i];
        var d = Math.abs(g.c - mid - g.hw) / Math.max(1, g.hw);
        if (d > 1.35) {
          if (g.last !== 'off') { g.last = 'off'; g.el.style.transform = ''; }
          continue;
        }
        var scale = 1 - clamp(d - 0.2, 0, 1) * 0.09;
        var str = 'skewX(' + skew.toFixed(2) + 'deg) scale(' + scale.toFixed(4) + ')';
        if (str !== g.last) { g.last = str; g.el.style.transform = str; }
      }
    });
  })();

  /* =========================================================
     Закрепление актов, плавная прокрутка, шапка
     ========================================================= */
  if (ScrollTrigger) {
    ScrollTrigger.config({ ignoreMobileResize: true });
    ScrollTrigger.addEventListener('refresh', refreshAll);
  }

  function setupPins() {
    if (!ScrollTrigger || !rope || !menuRail) return;
    var mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', function () {
      rope.measure();
      menuRail.measure();
      var cap = window.innerWidth * 2;
      var dR = Math.min(rope.max, cap);
      var dM = Math.min(menuRail.max, cap);
      if (dR > 60) {
        ScrollTrigger.create({
          trigger: rope.stage, start: 'top top', end: '+=' + Math.round(dR),
          pin: true, scrub: 0.5, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: function (self) { rope.setProgress(self.progress); }
        });
      }
      if (dM > 60) {
        ScrollTrigger.create({
          trigger: menuRail.stage, start: 'top top', end: '+=' + Math.round(dM),
          pin: true, scrub: 0.5, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: function (self) { menuRail.setProgress(self.progress); }
        });
      }
      /* третья сцена: финал стоит, имя и плашка поднимаются */
      var fin = document.getElementById('kontakty');
      ScrollTrigger.create({
        trigger: fin, start: 'top top', end: '+=55%', pin: true, scrub: 0.5,
        anticipatePin: 1, invalidateOnRefresh: true
      });
      gsap.fromTo('.final-name', { yPercent: 16 }, {
        yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: fin, start: 'top top', end: '+=55%', scrub: 0.5, invalidateOnRefresh: true }
      });
      gsap.fromTo('.final-plashka > .final-inset', { yPercent: -6 }, {
        yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: fin, start: 'top top', end: '+=55%', scrub: 0.5, invalidateOnRefresh: true }
      });
    });
  }

  function initLenis() {
    if (reduced || !window.Lenis) return null;
    var lenis = new window.Lenis({
      duration: 1.05,
      syncTouch: false,
      easing: function (x) { return Math.min(1, 1.001 - Math.pow(2, -10 * x)); }
    });
    lenis.on('scroll', function () { if (ScrollTrigger) ScrollTrigger.update(); });
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    return lenis;
  }

  function initChrome(lenis) {
    var top = document.getElementById('top');
    var burger = document.querySelector('.burger');
    var panel = document.getElementById('mobile-nav');

    function setMenu(open) {
      if (!burger || !panel) return;
      burger.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    }
    function onScroll() {
      top.classList.toggle('is-solid', (window.scrollY || 0) > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (burger && panel) {
      burger.addEventListener('click', function () {
        setMenu(burger.getAttribute('aria-expanded') !== 'true');
      });
      panel.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') setMenu(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setMenu(false);
      });
    }

    /* магнит на кнопках связи */
    Array.prototype.forEach.call(document.querySelectorAll('.btn-mag'), function (el) {
      el.addEventListener('pointermove', function (e) {
        if (reduced || e.pointerType === 'touch') return;
        var r = el.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        el.style.transform = 'translate3d(' + (dx * 6).toFixed(1) + 'px,' + (dy * 4 - 2).toFixed(1) + 'px,0)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transition = 'transform .5s cubic-bezier(.16,.84,.28,1)';
        el.style.transform = 'translate3d(0,0,0)';
        setTimeout(function () { el.style.transition = ''; }, 540);
      });
    });

    /* якоря */
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      var el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { duration: 1.1, offset: -70 });
      else el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }

  function initReveals() {
    if (reduced || !ScrollTrigger) return;
    gsap.utils.toArray('.rope-head, .menu-head, .final-plashka, .foot-in').forEach(function (el) {
      var kids = Array.prototype.slice.call(el.children);
      if (!kids.length) return;
      gsap.from(kids, {
        y: 26, opacity: 0, duration: 0.85, ease: 'expo.out', stagger: 0.07,
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });
    gsap.to('.final-bg img', {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: '.final', start: 'top bottom', end: 'bottom top', scrub: true }
    });
    gsap.to('.hero-bg img', {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  function boot() {
    var lenis = initLenis();
    initChrome(lenis);
    if (!reduced) setupPins();
    initReveals();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        if (rope) rope.measure();
        if (menuRail) menuRail.measure();
        if (ScrollTrigger) ScrollTrigger.refresh();
        refreshAll();
      }, 160);
    });
    window.addEventListener('load', function () {
      if (rope) rope.measure();
      if (menuRail) menuRail.measure();
      if (ScrollTrigger) ScrollTrigger.refresh();
      refreshAll();
    });
    if (ScrollTrigger) ScrollTrigger.refresh();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.LAMPA = {
    get rope() { return rope; },
    get menu() { return menuRail; }
  };
})();