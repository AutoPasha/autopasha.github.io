/* Сезон: движение сайта. Три акта и карусель. Без сборки и сети. */
(function () {
  'use strict';

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var easeInOut = function (t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- плавная прокрутка ---------- */
  if (!RM.matches && window.Lenis) {
    var lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, touchMultiplier: 1.6 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- подгонка кегля слова под ширину экрана ---------- */
  function polePx() {
    var v = getComputedStyle(document.documentElement).getPropertyValue('--pole');
    return parseFloat(v) || 20;
  }
  function fitLine(line, targetW, maxH) {
    var halves = $$('.hw-half i', line);
    if (!halves.length) return;
    halves.forEach(function (i) { i.style.fontSize = '100px'; });
    var w = 0;
    halves.forEach(function (i) { w += i.getBoundingClientRect().width; });
    if (!w) return;
    var size = targetW * 100 / w;
    if (maxH) size = Math.min(size, maxH * 100 / 94);
    halves.forEach(function (i) { i.style.fontSize = size.toFixed(2) + 'px'; });
  }
  function fitWords() {
    var a1stage = $('.a1-stage');
    if (a1stage) {
      var W = a1stage.clientWidth, H = a1stage.clientHeight, P = polePx();
      var desk = $('.hw-desk');
      if (desk) fitLine(desk, (W - 2 * P) * 0.8, H * 0.48);
      $$('.hw-mob .hw-line').forEach(function (ln) { fitLine(ln, (W - 2 * P) * 0.74, H * 0.32); });
    }
    var a4 = $('.a4');
    if (a4) fitLine($('.hw-line', a4), a4.clientWidth - polePx() * 3, a4.clientHeight * 0.32);
  }

  /* ---------- разбивка текста по словам ---------- */
  function splitWords(el) {
    if (!el || el.dataset.split) return [];
    el.dataset.split = '1';
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach(function (w, i) {
      var s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      el.appendChild(s);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    return $$('.w', el);
  }

  /* ================= АКТ 1: колода блюд =================
     Семь карт веером, потом по одной уходят вправо, а верхняя (последняя)
     остаётся и вырастает в большое фото. Плашка с блюдом и ценой всё время
     едет к нижнему краю этой карты, чтобы подпись не осталась одна. */
  (function act1() {
    var stage = $('#a1');
    var sec = $('.a1-sec');
    if (!stage || !sec) return;
    var all = $$('.a1-card');
    var rows = $$('.pl-row');
    var halfL = $$('.hw-half--l i');
    var halfR = $$('.hw-half--r i');
    var plaque = $('.a1-plaque');   // плашка целиком, не маска внутри неё

    function fan(n, W, H, cw) {
      var phone = W < 900;
      var out = [];
      var fanW = phone ? W * 0.74 : W * 0.72;
      var step = n > 1 ? (fanW - cw) / (n - 1) : 0;
      for (var i = 0; i < n; i++) {
        var t = n === 1 ? 0 : (i - (n - 1) / 2) / ((n - 1) / 2);
        out.push({
          x: t * step * (n - 1) / 2,
          y: (1 - Math.cos(t * 1.25)) * H * 0.06,
          rot: t * (phone ? 14 : 24),
          scale: 1 + (1 - Math.abs(t)) * 0.07,
          z: 300 - Math.round(Math.abs(t) * 50)
        });
      }
      return out;
    }

    function splitGap(W) {
      var lines = $$('.hw-line');
      var widest = 0;
      lines.forEach(function (l) {
        if (!l.offsetParent) return;
        widest = Math.max(widest, l.getBoundingClientRect().width);
      });
      return clamp((W - widest) / 2 - 6, 34, 240);
    }

    var deckEl = $('.a1-deck');
    var plaqueTop0 = -1;

    function render(p) {
      var W = stage.clientWidth, H = stage.clientHeight;
      var phone = W < 900;
      var n = phone ? 5 : 7;
      var cards = all.slice(0, n);
      var top = n - 1;                 // карта, которая останется верхней
      var cw = all[0].offsetWidth || 200;
      var f = fan(n, W, H, cw);
      var conv = easeInOut(clamp(p / 0.26, 0, 1));
      var dealStart = 0.3, dealEnd = 0.94;
      var stepT = (dealEnd - dealStart) / Math.max(1, n - 1);
      var t = (p - dealStart) / stepT;
      var split = splitGap(W);
      // колода растёт в одну крупную карту и встаёт по центру экрана
      var big = easeInOut(clamp((p - 0.3) / 0.14, 0, 1));
      var bigW = phone ? Math.min(W * 0.86, 340) : Math.min(W * 0.4, 560);
      var grow = 1 + (bigW / cw - 1) * big;
      var rise = (H * 0.5 - deckEl.offsetTop) * big;
      var bigH = cw * 1.26 * grow;
      if (plaqueTop0 < 0) plaqueTop0 = plaque.offsetTop;
      // плашка прижата к нижнему краю крупной карты
      var ph = plaque.offsetHeight || 50;
      var want = deckEl.offsetTop + rise + bigH / 2 - ph - 12;
      plaque.style.top = Math.round(lerp(plaqueTop0, want, big)) + 'px';

      for (var i = 0; i < n; i++) {
        var c = cards[i];
        var dx = lerp(f[i].x, 0, conv);
        var dy = lerp(f[i].y, 0, conv);
        var dr = lerp(f[i].rot, 0, conv);
        var ds = lerp(f[i].scale, 1 - i * 0.045, conv) * grow;
        var op = 1;
        if (p > dealStart) {
          var k = clamp(t - i, 0, 1);
          if (i < top && i < t) {       // улетают все, кроме верхней
            var e = easeOut(k);
            dx += W * 0.62 * e;
            dy -= 60 * e;
            dr += 22 * e;
            ds *= 1 + 0.06 * e;
            op = 1 - clamp((k - 0.5) / 0.4, 0, 1);
          } else if (i > 0 && k > 0) {
            ds += 0.045 * easeOut(k);
          }
        }
        c.style.transform = 'translate(calc(-50% + ' + dx.toFixed(2) + 'px), calc(-50% + ' + (dy + rise).toFixed(2) + 'px)) rotate(' + dr.toFixed(3) + 'deg) scale(' + ds.toFixed(4) + ')';
        c.style.zIndex = String(20 - i);
        c.style.opacity = op.toFixed(3);
      }

      var convW = easeInOut(clamp(p / 0.18, 0, 1));
      var fadeW = clamp((p - 0.22) / 0.08, 0, 1);
      halfL.forEach(function (el) { el.style.transform = 'translateX(' + (-split * (1 - convW)).toFixed(2) + 'px) translateY(' + (-70 * fadeW).toFixed(2) + 'px)'; });
      halfR.forEach(function (el) { el.style.transform = 'translateX(' + (split * (1 - convW)).toFixed(2) + 'px) translateY(' + (-70 * fadeW).toFixed(2) + 'px)'; });
      $('.a1-word').style.opacity = (1 - fadeW).toFixed(3);

      var idx = p <= dealStart ? 0 : clamp(Math.round(t), 0, n - 1);
      if (plaque.dataset.idx !== String(idx)) {
        plaque.dataset.idx = String(idx);
        rows.forEach(function (r, i2) { r.classList.toggle('is-on', i2 === idx); });
      }
    }

    function start() {
      var W = stage.clientWidth, H = stage.clientHeight;
      var n = W < 900 ? 5 : 7;
      var cards = all.slice(0, n);
      var f = fan(n, W, H, all[0].offsetWidth);
      var split = splitGap(W);
      gsap.set(cards, { xPercent: -50, yPercent: -50 });
      var intro = gsap.timeline({ delay: 0.4 });
      intro
        .to(cards, {
          duration: 1.25, ease: 'back.out(1.4)', stagger: 0.06,
          x: function (i) { return f[i].x; },
          y: function (i) { return f[i].y; },
          rotation: function (i) { return f[i].rot; },
          scale: function (i) { return f[i].scale; },
          onStart: function () { cards.forEach(function (c, i) { c.style.zIndex = String(20 - Math.abs(i - (n - 1) / 2)); }); }
        }, 0)
        .to(halfL, { x: -split, duration: 1.15, ease: 'expo.out', stagger: 0.03 }, 0)
        .to(halfR, { x: split, duration: 1.15, ease: 'expo.out', stagger: 0.03 }, 0);
      render(0);
    }

    function finalState() {
      var W = stage.clientWidth, H = stage.clientHeight;
      var phone = W < 900;
      var n = phone ? 5 : 7;
      var cw = all[0].offsetWidth || 200;
      var bigW = phone ? Math.min(W * 0.86, 340) : Math.min(W * 0.4, 560);
      var grow = bigW / cw;
      var rise = H * 0.5 - deckEl.offsetTop;
      all.slice(0, n).forEach(function (c, i) {
        c.style.transform = 'translate(calc(-50%), calc(-50% + ' + rise.toFixed(1) + 'px)) scale(' + ((1 - i * 0.045) * grow).toFixed(4) + ')';
        c.style.zIndex = String(20 - i);
        c.style.opacity = '1';
      });
      var ph = plaque.offsetHeight || 50;
      plaque.style.top = Math.round(H * 0.5 + cw * 1.26 * grow / 2 - ph - 12) + 'px';
      halfL.concat(halfR).forEach(function (el) { el.style.transform = 'none'; });
      $('.a1-word').style.opacity = '1';
      rows.forEach(function (r, i) { r.classList.toggle('is-on', i === n - 1); });
    }

    fitWords();
    if (RM.matches) {
      finalState();
    } else {
      start();
      ScrollTrigger.create({
        trigger: sec,
        start: 'top top',
        end: function () { return '+=' + Math.round(stage.clientHeight * (window.innerWidth < 900 ? 1.4 : 2.3)); },
        pin: stage,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: function (self) { render(self.progress); }
      });
    }
  })();

  /* ================= АКТ 2: фото сезона в стену =================
     Большое фото уезжает с экрана в панель стены; под панелью лежит своё фото,
     так что пустой рамки не видно ни в начале, ни в конце. */
  (function act2() {
    var run = $('#a2run');
    var stage = $('.a2-stage');
    var move = $('#a2move');
    var inner = $('#a2movein');
    var slot = $('.a2-slot');
    if (!run || !stage) return;

    var tabs = $$('.a2-tab');
    var lines = $$('[data-season-line]');
    var SEASON_SHOTS = {
      spring: { src: 'assets/img/hero-spring.jpg', alt: 'Весна в бистро, свет сквозь окно зала' },
      summer: { src: 'assets/img/hero-summer.jpg', alt: 'Летняя веранда бистро с гирляндами и бокалами на столе' },
      autumn: { src: 'assets/img/hero-autumn.jpg', alt: 'Тёмный зал бистро с открытой кухней и тарелкой на столе' },
      winter: { src: 'assets/img/hero-winter.jpg', alt: 'Зимний вечер в бистро, тёплый свет печи, пледы на столе' }
    };
    ['spring', 'summer', 'autumn', 'winter'].forEach(function (k) {
      var im = new Image(); im.src = SEASON_SHOTS[k].src;
    });
    var SEASONS = {
      spring: { bg: 'var(--s-vesna)', l1: 'С 1 марта весеннее меню', l2: 'Первая зелень, редис с жирной сметаной, клюква в десертах' },
      summer: { bg: 'var(--s-leto)', l1: 'С 1 июня открываем веранду', l2: 'Холодные супы, уха на углях, всё из своего огорода' },
      autumn: { bg: 'var(--s-osen)', l1: 'Меню меняется четыре раза в год', l2: 'Сейчас осень, карта до 1 декабря' },
      winter: { bg: 'var(--s-zima)', l1: 'С 1 декабря зимнее меню', l2: 'Копчёная курица с облепихой, щи и медовик с брусникой' }
    };

    var tiles = $$('.a2-tile');
    var geo = null;

    function measure() {
      var W = stage.clientWidth, H = stage.clientHeight;
      var s = slot.getBoundingClientRect(), b = stage.getBoundingClientRect();
      var x = s.left - b.left, y = s.top - b.top, w = s.width, h = s.height;
      geo = {
        k: Math.max(w / W, h / H),
        tx: (x + w / 2) - (W * Math.max(w / W, h / H)) / 2,
        ty: (y + h / 2) - (H * Math.max(w / W, h / H)) / 2,
        ins: [y, W - x - w, H - y - h, x]
      };
    }

    function render(p) {
      if (!geo) return;
      var e = easeInOut(clamp(p / 0.68, 0, 1));
      var k = lerp(1, geo.k, e);
      inner.style.transform = 'translate(' + (geo.tx * e).toFixed(2) + 'px,' + (geo.ty * e).toFixed(2) + 'px) scale(' + k.toFixed(4) + ')';
      move.style.clipPath = 'inset(' + (geo.ins[0] * e).toFixed(1) + 'px ' + (geo.ins[1] * e).toFixed(1) + 'px ' + (geo.ins[2] * e).toFixed(1) + 'px ' + (geo.ins[3] * e).toFixed(1) + 'px)';
      tiles.forEach(function (t, i) {
        var a = clamp((p - 0.18 - i * 0.07) / 0.26, 0, 1);
        var s = easeOut(a);
        t.style.opacity = s.toFixed(3);
        t.style.transform = 'scale(' + (0.9 + 0.1 * s).toFixed(4) + ')';
      });
    }

    if (RM.matches) {
      measure();
      render(1);
    } else {
      measure();
      render(0);
      ScrollTrigger.create({
        trigger: run, start: 'top top', end: 'bottom bottom', scrub: 0.45, invalidateOnRefresh: true,
        onRefresh: function (self) { measure(); render(self.progress); },
        onUpdate: function (self) { render(self.progress); }
      });
      var words = [];
      lines.forEach(function (l) { words = words.concat(splitWords(l)); });
      if (words.length) {
        gsap.fromTo(words, { opacity: 0 }, {
          opacity: 1, duration: 0.4, stagger: 0.05, ease: 'none',
          scrollTrigger: { trigger: run, start: 'top top', end: 'bottom bottom', scrub: 0.4 }
        });
      }
    }

    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.dataset.seasonBtn;
        var s = SEASONS[key];
        if (!s) return;
        tabs.forEach(function (b) { b.classList.toggle('is-on', b === btn); });
        var sec = $('.a2');
        if (sec) sec.style.setProperty('--season-fon', s.bg);
        var imgs = $$('.a2-move-in img');
        var front = imgs[0], back = imgs[1];
        if (front && back && front.dataset.seasonImg !== key) {
          var shot = SEASON_SHOTS[key];
          back.src = shot.src;
          back.alt = shot.alt;
          back.dataset.seasonImg = key;
          back.style.opacity = '0';
          window.requestAnimationFrame(function () { back.style.opacity = '1'; });
          window.setTimeout(function () { front.style.opacity = '0'; }, 850);
          imgs[0] = back;
          imgs[1] = front;
        }
        lines.forEach(function (l) {
          l.textContent = l.dataset.seasonLine === '1' ? s.l1 : s.l2;
        });
      });
    });
  })();

  /* ================= АКТ 3: карусель с инерцией =================
     Кольцо из четырёх карточек: соседи видны с обеих сторон, пустых полей нет. */
  (function act3() {
    var sec = $('#vecher');
    var car = $('#car');
    if (!sec || !car) return;
    var cards = $$('.a3-card', car);
    var n = cards.length;
    var names = cards.map(function (c) { return c.dataset.name; });
    var texts = cards.map(function (c) { return c.dataset.text; });
    var prices = cards.map(function (c) { return c.dataset.price; });
    var nameEl = $('#carName'), priceEl = $('#carPrice'), textEl = $('#carText');
    var base = 0, off = 0, vel = 0, dragging = false, moved = 0, startX = 0, startOff = 0, lastX = 0;
    var cur = -1;
    var half = n / 2;

    function spacing() {
      var w = cards[0].offsetWidth || 280;
      return w * (window.innerWidth < 900 ? 0.66 : 0.72);
    }

    function render() {
      var sp = spacing();
      var pos = base + off;
      if (pos < 0) pos *= 0.28;
      else if (pos > n - 1) pos = (n - 1) + (pos - (n - 1)) * 0.28;
      cards.forEach(function (c, i) {
        var d = i - pos;
        d = ((d + half) % n + n) % n - half;      // кольцо: слева и справа всегда есть сосед
        var a = Math.abs(d);
        var tr = 'translateX(' + (d * sp).toFixed(2) + 'px) translateY(' + (a * 9).toFixed(2) + 'px) translateZ(' + (-a * 130).toFixed(2) + 'px) rotateY(' + (-d * 13).toFixed(2) + 'deg) scale(' + (1 - Math.min(a, 2.4) * 0.085).toFixed(4) + ')';
        c.style.transform = tr;
        c.style.zIndex = String(40 - Math.round(a * 4));
        c.style.opacity = clamp(1.3 - a * 0.62, 0, 1).toFixed(3);
        c.style.filter = 'brightness(' + (1 - Math.min(a, 1.6) * 0.16).toFixed(3) + ')';
      });
      var idx = ((Math.round(pos) % n) + n) % n;
      if (idx !== cur) {
        cur = idx;
        if (nameEl) nameEl.textContent = names[idx];
        if (priceEl) priceEl.textContent = prices[idx];
        if (textEl) textEl.textContent = texts[idx];
      }
      return pos;
    }

    function go(dir) {
      vel = 0;
      off = clamp(Math.round(base + off) + dir, 0, n - 1) - base;
    }

    var seen = true;
    function tick() {
      if (!seen) return;
      if (!dragging) {
        if (Math.abs(vel) > 0.0006) {
          off += vel;
          vel *= 0.93;
        } else {
          var target = clamp(Math.round(base + off), 0, n - 1) - base;
          off += (target - off) * 0.13;
          if (Math.abs(target - off) < 0.0006) off = target;
        }
      }
      render();
    }

    if (!RM.matches) {
      gsap.ticker.add(tick);
      car.addEventListener('pointerdown', function (e) {
        dragging = true;
        moved = 0;
        startX = lastX = e.clientX;
        startOff = off;
        vel = 0;
        car.classList.add('is-drag');
        if (car.setPointerCapture) car.setPointerCapture(e.pointerId);
      });
      car.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        moved = Math.max(moved, Math.abs(e.clientX - startX));
        var dx = e.clientX - startX;
        off = startOff - dx / spacing();
        vel = (lastX - e.clientX) / spacing() * 0.5;
        lastX = e.clientX;
      });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
        car.addEventListener(ev, function () {
          dragging = false;
          car.classList.remove('is-drag');
          if (ev === 'pointerup' && moved < 8) go(1);
        });
      });
      var prev = $('[data-car-prev]'), next = $('[data-car-next]');
      if (prev) prev.addEventListener('click', function () { go(-1); });
      if (next) next.addEventListener('click', function () { go(1); });

      ScrollTrigger.create({
        trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.5, invalidateOnRefresh: true,
        onUpdate: function (self) { base = self.progress * (n - 1); },
        onToggle: function (self) { seen = self.isActive; if (seen) render(); }
      });
    }
    render();
  })();

  /* ================= Шапка, меню, магнитные кнопки ================= */
  (function chrome() {
    var hdr = $('#hdr');
    var burger = $('#burger');
    var mobmenu = $('#mobmenu');

    if (RM.matches) {
      if (hdr) hdr.classList.add('is-solid');
    } else {
      ScrollTrigger.create({
        start: 0, end: 'max',
        onUpdate: function (self) { if (hdr) hdr.classList.toggle('is-solid', self.scroll() > 40); }
      });
      var a4 = $('.a4');
      if (hdr && a4) {
        ScrollTrigger.create({
          trigger: a4, start: 'top 70px', end: 'bottom 70px',
          onToggle: function (self) { hdr.classList.toggle('is-light', self.isActive); }
        });
      }
      /* Шапка прячется, пока страница едет: под логотипом не должен
         наполовину пропадать текст. Вернулась через 0,6 с после остановки,
         наверху и при открытом меню видна сразу. */
      if (hdr) {
        var lastY = window.scrollY || 0;
        var still = performance.now();
        var shown = true;
        gsap.ticker.add(function () {
          var y = window.scrollY || document.documentElement.scrollTop || 0;
          if (Math.abs(y - lastY) > 0.6) { lastY = y; still = performance.now(); }
          var open = !!(mobmenu && mobmenu.classList.contains('is-open'));
          var need = y < 36 || open || (performance.now() - still > 620);
          if (need !== shown) {
            shown = need;
            hdr.classList.toggle('is-hide', !need);
          }
        });
      }
    }

    if (burger && mobmenu) {
      burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        burger.setAttribute('aria-label', open ? 'Открыть меню сайта' : 'Закрыть меню сайта');
        mobmenu.classList.toggle('is-open', !open);
      });
      $$('a', mobmenu).forEach(function (a) {
        a.addEventListener('click', function () {
          burger.setAttribute('aria-expanded', 'false');
          burger.setAttribute('aria-label', 'Открыть меню сайта');
          mobmenu.classList.remove('is-open');
        });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobmenu.classList.contains('is-open')) {
          burger.setAttribute('aria-expanded', 'false');
          mobmenu.classList.remove('is-open');
        }
      });
    }

    if (!RM.matches && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      $$('[data-magnet]').forEach(function (el) {
        var xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
        var yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
        el.addEventListener('pointermove', function (e) {
          var r = el.getBoundingClientRect();
          xTo((e.clientX - r.left - r.width / 2) * 0.22);
          yTo((e.clientY - r.top - r.height / 2) * 0.3);
        });
        el.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
      });
    }
  })();

  /* ---------- пересчёт при изменении размеров ---------- */
  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      fitWords();
      ScrollTrigger.refresh();
    }, 180);
  });

  window.addEventListener('load', function () {
    fitWords();
    ScrollTrigger.refresh();
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { fitWords(); ScrollTrigger.refresh(); });
  }
})();