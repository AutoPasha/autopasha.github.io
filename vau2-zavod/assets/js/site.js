/* Северсталькон: три акта. Один цикл кадров на всех, движение только transform и opacity. */
(function () {
  'use strict';

  var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isPhone = matchMedia('(max-width: 899px)');

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ---------- плавная прокрутка ---------- */
  var lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, touchMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);

  /* ---------- общие числа цикла ---------- */
  var lastY = window.scrollY, lastT = -1;
  var vel = 0;          /* пикселей в секунду */
  var boost = 0;        /* вклад прокрутки в скорость полёта */
  var boost3 = 0;       /* вклад прокрутки в стену объектов */

  function tick(now) {
    if (lastT < 0) lastT = now;
    var dt = Math.min(Math.max((now - lastT), 0), 0.05);
    lastT = now;
    var y = window.scrollY;
    var dy = y - lastY; lastY = y;
    vel = vel * 0.86 + (dt ? dy / dt : 0) * 0.14;
    boost += (Math.min(Math.abs(vel) * 1.6, 900) - boost) * 0.14;
    boost3 += (Math.min(Math.abs(vel) * 0.5, 420) - boost3) * 0.1;

    if (!REDUCED) {
      fieldTick(dt);
      swarmTick();
      wallTick(dt);
    }
  }
  gsap.ticker.add(tick);

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function put(el, tr, op) {
    if (el._tr !== tr) { el.style.transform = tr; el._tr = tr; }
    if (el._op !== op) { el.style.opacity = op; el._op = op; }
  }

  /* ================= АКТ 1. Полёт сквозь поле отпечатков ================= */
  var field = document.getElementById('field');
  var cardEls = Array.prototype.slice.call(field.children);
  var cards = [];
  var fW = 0, fH = 0;
  var FAR = -3900, NEAR = 340;

  function buildField() {
    /* поле занимает только часть экрана над плашкой: подложка заголовка всегда сплошная */
    var band = document.getElementById('a1panel');
    if (band) field.style.bottom = (band.offsetHeight + 2) + 'px';
    fW = field.clientWidth; fH = field.clientHeight;
    var phone = isPhone.matches;
    var count = phone ? 7 : cardEls.length;
    /* на телефоне поле ближе к камере: отпечатки крупнее, их семь */
    FAR = phone ? -2900 : -3900;
    var span = 560 - FAR;
    cardEls.forEach(function (el, i) { el.style.display = i < count ? '' : 'none'; });
    cards = [];
    for (var i = 0; i < count; i++) {
      var el = cardEls[i];
      /* фазы заданы один раз: положение каждого отпечатка считается только от
         прокрутки, поэтому верх страницы после возврата выглядит так же */
      cards.push({
        el: el, w: el.offsetWidth, h: el.offsetHeight,
        z0: FAR + span * (i / count) + rnd(-220, 220),
        a: rnd(0, Math.PI * 2), b: rnd(0, Math.PI * 2), c: rnd(0, Math.PI * 2),
        rk: rnd(0.75, 1.35), yk: rnd(0.8, 1.25),
        x: 0, y: 0, r: 0, z: 0
      });
    }
    fieldTick(0);
  }

  var tiltX = 0, tiltY = 0, tX = 0, tY = 0, lastTilt = '';
  if (!REDUCED && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', function (e) {
      tY = ((e.clientX / window.innerWidth) - 0.5) * 7;
      tX = ((e.clientY / window.innerHeight) - 0.5) * -7;
    }, { passive: true });
  }

  function cardOpacity(c) {
    /* отпечаток проявляется издалека и гаснет у самой камеры */
    var far = clamp((c.z - FAR) / 700, 0, 1);
    var near = clamp((NEAR - c.z) / 720, 0, 1);
    var o = far * near;
    return o < 0.01 ? '0' : o.toFixed(3);
  }

  function cardTransform(c) {
    return 'translate3d(calc(-50% + ' + c.x.toFixed(1) + 'px), calc(-50% + ' + c.y.toFixed(1) +
      'px), ' + c.z.toFixed(1) + 'px) rotate(' + c.r.toFixed(2) + 'deg)';
  }

  var TAU = Math.PI * 2;
  var ХОД = 3.1;   /* сколько единиц глубины на пиксель прокрутки */

  function fieldTick(dt) {
    if (!cards.length) return;
    var span = 560 - FAR;
    /* колесо физически ускоряет полёт: добавка от скорости гаснет, когда
       прокрутка останавливается, и не сбивает поле с исходного состояния */
    var t = window.scrollY * ХОД - clamp(vel, -1500, 1500) * 0.22;
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      var rel = (c.z0 - FAR + t) % span;
      if (rel < 0) rel += span;
      c.z = FAR + rel;
      var ph = rel / span;
      c.x = Math.cos(ph * TAU * c.rk + c.a) * fW * 0.36;
      c.y = Math.sin(ph * TAU * c.rk * c.yk + c.b) * fH * 0.34;
      c.r = Math.sin(ph * TAU * 1.6 + c.c) * 6.5;
      put(c.el, cardTransform(c), cardOpacity(c));
    }
    tiltX += (tX - tiltX) * 0.06;
    tiltY += (tY - tiltY) * 0.06;
    /* наклон поля пишем только когда он изменился: иначе браузер пересобирает
       всю 3D-сцену каждый кадр даже при неподвижной мыши */
    var nx = tiltX.toFixed(2), ny = tiltY.toFixed(2);
    var key = nx + '/' + ny;
    if (key !== lastTilt) {
      lastTilt = key;
      field.style.transform = 'rotateX(' + nx + 'deg) rotateY(' + ny + 'deg)';
    }
  }

  /* заголовок выезжает из-под маски */
  var heroLines = Array.prototype.slice.call(document.querySelectorAll('.a1-line > span'));
  function heroIn() {
    heroLines.forEach(function (el, i) {
      gsap.fromTo(el, { yPercent: 112 }, { yPercent: 0, duration: 1.15, delay: 0.08 + i * 0.1, ease: 'expo.out' });
    });
    var num = document.querySelector('.a1-h .num');
    if (!num) return;
    var o = { v: 0 };
    gsap.to(o, {
      v: 46, duration: 1.4, ease: 'expo.out',
      onUpdate: function () { num.textContent = Math.round(o.v); }
    });
  }
  if (!REDUCED) heroIn();

  /* ================= АКТ 2. Рой собирается в кластер ================= */
  var act2 = document.getElementById('akt2');
  var stage2 = document.getElementById('a2stage');
  var tiles = Array.prototype.slice.call(stage2.querySelectorAll('.tile'));
  var panel = document.getElementById('a2panel');
  var a2p = REDUCED ? 1 : 0;
  var homes = [], swarms = [];
  var focus = -1, focusT = 0, focusBox = null;

  function restRotOf(el) {
    var v = parseFloat(getComputedStyle(el).getPropertyValue('--rot'));
    return isNaN(v) ? 0 : v;
  }

  function measure2() {
    var sr = stage2.getBoundingClientRect();
    var W = window.innerWidth;
    /* сцена центрирована в окне: считаем допустимый разброс от её левого края */
    var stageLeft = Math.max(0, (W - sr.width) / 2);
    homes = tiles.map(function (el) {
      return { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight, rot: restRotOf(el) };
    });
    swarms = homes.map(function (h) {
      var r = rnd(-20, 20), sc = rnd(0.4, 0.72);
      var a = (Math.abs(r) + Math.abs(h.rot)) * Math.PI / 180;
      /* полуразмах плитки в полёте: поворот и масштаб считаем вместе */
      var hx = (h.w * Math.abs(Math.cos(a)) + h.h * Math.abs(Math.sin(a))) / 2 * sc;
      var cx = stageLeft + h.x + h.w / 2;
      var lo = -8 - (cx - hx), hi = W + 8 - (cx + hx);
      if (hi < lo) hi = lo;
      var lim = Math.min(Math.abs(lo), Math.abs(hi));
      return {
        x: rnd(-1, 1) * lim,
        y: rnd(-1, 1) * sr.height * rnd(0.2, 0.46) - 18,
        r: r, s: sc
      };
    });
  }

  function открытое() { return 'inset(0% 0% 0% 0%)'; }
  function закрытое() { return isPhone.matches ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)'; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function easeIO(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function swarmTick() {
    var sW = stage2.clientWidth;
    var t = focusObj.t > 0 ? easeIO(focusObj.t) : 0;
    for (var i = 0; i < tiles.length; i++) {
      var el = tiles[i], h = homes[i] || { x: 0, y: 0, w: 1, h: 1, rot: 0 };
      var p = clamp((a2p - i * 0.045) / 0.68, 0, 1), e = easeOut(p);
      var s = swarms[i] || { x: 0, y: 0, r: 0, s: 1 };
      var dx = s.x * (1 - e), dy = s.y * (1 - e);
      var rot = s.r * (1 - e) + h.rot;
      var sc = s.s + (1 - s.s) * e;
      var pe = e;

      if (focus >= 0 && t > 0) {
        pe = 1;
        if (i === focus) {
          var b = focusBox || focusBoxFor(h);
          /* единый масштаб: пропорции снимка не гулят */
          var fsc = Math.min(b.w / h.w, b.h / h.h, 1.75);
          var cx = h.x + h.w / 2, cy = h.y + h.h / 2;
          dx += (b.x + b.w / 2 - cx) * t;
          dy += (b.y + b.h / 2 - cy) * t;
          var sx = sc + (fsc - sc) * t;
          el.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0) rotate(' +
            (rot * (1 - t)).toFixed(2) + 'deg) scale(' + sx.toFixed(3) + ')';
          el.style.opacity = '1';
          el.style.setProperty('--p', '1');
          continue;
        }
        var dirX = (h.x + h.w / 2) > (focusBox ? focusBox.x + focusBox.w / 2 : sW / 2) ? 1 : -1;
        dx += dirX * 44 * t; dy += 24 * t;
        sc += -0.1 * t;
        el.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0) rotate(' +
          (rot * (1 - t)).toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
        el.style.opacity = (1 - 0.82 * t).toFixed(3);
        el.style.setProperty('--p', clamp(1 - 1.4 * t, 0, 1).toFixed(3));
        continue;
      }

      el.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0) rotate(' +
        rot.toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
      el.style.opacity = '1';
      el.style.setProperty('--p', pe.toFixed(3));
    }
  }

  /* куда встаёт раскрытая плитка: левая часть сцены, свободная от плашки */
  function focusBoxFor(h) {
    var sW = stage2.clientWidth, sH = stage2.clientHeight;
    var sr = stage2.getBoundingClientRect(), pr = panel.getBoundingClientRect();
    if (isPhone.matches) {
      var hTop = pr.top - sr.top - 12;
      return { x: 0, y: 0, w: sW, h: clamp(hTop, sH * 0.34, sH) };
    }
    var stageLeft = Math.max(0, (window.innerWidth - sW) / 2);
    var pL = pr.left - stageLeft;
    var bw = clamp(pL - 30, sW * 0.34, sW * 0.62);
    return { x: 0, y: 0, w: bw, h: sH };
  }

  function openTile(i) {
    if (focus === i) return;
    closeTile(true);
    focus = i;
    var el = tiles[i];
    document.getElementById('a2ph').textContent = el.dataset.title;
    document.getElementById('a2pt').textContent = el.dataset.text;
    document.getElementById('a2pp').textContent = el.dataset.price;
    document.getElementById('a2ps').textContent = el.dataset.term;
    panel.removeAttribute('inert');
    panel.setAttribute('aria-hidden', 'false');
    tiles.forEach(function (tt, k) { tt.classList.toggle('is-dim', k !== i); });
    focusBox = focusBoxFor(homes[i]);
    gsap.fromTo(panel, { clipPath: закрытое() },
      { clipPath: открытое(), duration: 0.7, ease: 'power3.inOut' });
    focusAnim = gsap.to(focusObj, { t: 1, duration: 0.7, ease: 'power3.inOut' });
  }

  var focusObj = { t: 0 }, focusAnim = null;

  function closeTile(instant) {
    if (focus < 0) return;
    focus = -1;
    tiles.forEach(function (tt) { tt.classList.remove('is-dim'); });
    if (focusAnim) focusAnim.kill();
    var d = instant ? 0.3 : 0.55;
    gsap.to(focusObj, {
      t: 0, duration: d, ease: 'power3.inOut',
      onComplete: function () { panel.setAttribute('aria-hidden', 'true'); }
    });
    gsap.to(panel, {
      clipPath: закрытое(),
      duration: d, ease: 'power3.inOut',
      onComplete: function () { panel.setAttribute('inert', ''); }
    });
  }

  tiles.forEach(function (el, i) {
    el.addEventListener('click', function () { openTile(i); });
  });
  document.getElementById('a2close').addEventListener('click', function () { closeTile(); });
  stage2.addEventListener('pointerdown', function (e) {
    if (focus >= 0 && !e.target.closest('.tile')) closeTile();
  });
  window.addEventListener('scroll', function () {
    if (focus >= 0 && !panel.contains(document.activeElement)) closeTile(true);
  }, { passive: true });

  panel.setAttribute('inert', '');
  gsap.set(panel, { clipPath: закрытое() });
  measure2();
  swarmTick();

  var mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', function () {
    ScrollTrigger.create({
      trigger: act2, start: 'top top', end: '+=120%', pin: '.a2-pin', pinSpacing: true,
      onUpdate: function (self) { a2p = self.progress; }
    });
  });
  mm.add('(max-width: 899px)', function () {
    ScrollTrigger.create({
      trigger: act2, start: 'top top', end: '+=55%', pin: '.a2-pin', pinSpacing: true,
      onUpdate: function (self) { a2p = self.progress; }
    });
  });

  /* ================= АКТ 3. Стена объектов на цилиндре ================= */
  var wall = document.getElementById('wall');
  var rows = Array.prototype.slice.call(wall.querySelectorAll('.a3-row'));
  var rowData = rows.map(function (row, i) {
    var ts = Array.prototype.slice.call(row.querySelectorAll('.a3-t'));
    return {
      el: row, tiles: ts, phase: i * 1.7, speed: (i % 2 ? -0.72 : 1) * (0.22 + i * 0.06),
      w: 0, amp: 0, step: 0, vis: []
    };
  });

  function measure3() {
    var phone = isPhone.matches;
    var wW = wall.clientWidth;
    rowData.forEach(function (rd) {
      var vis = rd.tiles.filter(function (t) { return t.offsetWidth > 0; });
      rd.step = phone ? 8 : 13;
      rd.w = vis.reduce(function (a, t) { return a + t.offsetWidth; }, 0) + (vis.length - 1) * 16;
      rd.amp = Math.max(10, (wW - rd.w) / 2 * 0.92);
      rd.vis = vis;
    });
  }

  function wallTick(dt) {
    for (var i = 0; i < rowData.length; i++) {
      var rd = rowData[i];
      if (!rd.vis || !rd.vis.length) continue;
      rd.phase += dt * (rd.speed + boost3 * 0.0012 * rd.speed * 26);
      var off = Math.sin(rd.phase) * rd.amp;
      put(rd.el, 'translate3d(' + (-rd.w / 2 + off).toFixed(1) + 'px,0,0)', '');
      var c = (rd.vis.length - 1) / 2;
      for (var k = 0; k < rd.vis.length; k++) {
        var d = k - c;
        put(rd.vis[k], 'rotateY(' + (d * rd.step).toFixed(2) + 'deg) translateZ(' +
          (-Math.abs(d) * 105).toFixed(0) + 'px)', '');
      }
    }
  }

  measure3();
  wallTick(0);

  /* ================= Финал: кадр сварки ================= */
  var finPh = document.querySelector('.fin-ph img');
  if (finPh && !REDUCED) {
    ScrollTrigger.create({
      trigger: '.fin', start: 'top bottom', end: 'bottom top',
      onUpdate: function (self) {
        var s = (1.08 - self.progress * 0.08).toFixed(3);
        if (finPh._tr !== s) { finPh.style.transform = 'scale(' + s + ')'; finPh._tr = s; }
      }
    });
  }

  /* ================= Мелочи: меню, магнит, якоря ================= */
  var burger = document.getElementById('burger');
  var mmenu = document.getElementById('mmenu');
  burger.addEventListener('click', function () {
    var open = mmenu.hasAttribute('hidden');
    if (open) { mmenu.removeAttribute('hidden'); burger.setAttribute('aria-expanded', 'true'); lenis.stop(); }
    else { mmenu.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); lenis.start(); }
  });
  mmenu.addEventListener('click', function (e) {
    if (e.target.closest('a')) { mmenu.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); lenis.start(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (focus >= 0) closeTile();
    if (!mmenu.hasAttribute('hidden')) { mmenu.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); lenis.start(); }
  });

  if (!REDUCED && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-magnet]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var mx = (e.clientX - r.left - r.width / 2) * 0.24;
        var my = (e.clientY - r.top - r.height / 2) * 0.34;
        gsap.to(el, { x: mx, y: my, duration: 0.5, ease: 'power3.out' });
      });
      el.addEventListener('mouseleave', function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -8, duration: 1.2 });
    });
  });

  /* ================= Заставка ================= */
  var intro = document.getElementById('intro');
  if (intro) {
    if (REDUCED || sessionStorage.getItem('sk-intro')) {
      intro.remove();
    } else {
      sessionStorage.setItem('sk-intro', '1');
      var digits = Array.prototype.slice.call(intro.querySelectorAll('.intro-d'));
      digits.forEach(function (d, i) {
        var target = d.textContent;
        var o = { v: 0 };
        gsap.to(o, {
          v: 9, duration: 0.42, delay: 0.06 + i * 0.06, ease: 'none',
          onUpdate: function () { d.textContent = Math.floor(o.v) === 0 ? Math.floor(Math.random() * 10) : target; },
          onComplete: function () { d.textContent = target; }
        });
      });
      gsap.to(intro, { yPercent: -100, duration: 0.72, delay: 0.5, ease: 'expo.inOut',
        onComplete: function () { intro.remove(); } });
      gsap.set('.intro-note', { opacity: 0 });
      gsap.set(digits, { opacity: 0, yPercent: 30 });
      gsap.to(digits, { opacity: 1, yPercent: 0, duration: 0.4, stagger: 0.06, ease: 'expo.out' });
      gsap.to('.intro-note', { opacity: 1, duration: 0.5, delay: 0.3 });
    }
  }

  /* ================= Пересчёт ================= */
  var rt;
  function relayout() {
    clearTimeout(rt);
    rt = setTimeout(function () {
      buildField();
      measure2();
      measure3();
      ScrollTrigger.refresh();
    }, 140);
  }
  window.addEventListener('resize', relayout);
  window.addEventListener('orientationchange', relayout);
  window.addEventListener('load', function () { buildField(); ScrollTrigger.refresh(); });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { relayout(); });
  }
  buildField();
})();