/* ============================================================
   Кедр: движение. Один общий цикл, пружины, никаких прыжков.
   ============================================================ */
(function () {
  'use strict';

  var doc = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ---------- заставка ---------- */
  (function splash() {
    var el = doc.getElementById('splash');
    if (!el) return;
    var seen = false;
    try { seen = sessionStorage.getItem('kedr-splash') === '1'; } catch (e) {}
    if (reduce || seen) { el.remove(); return; }
    try { sessionStorage.setItem('kedr-splash', '1'); } catch (e) {}
    var num = doc.getElementById('splash-num');
    var box = { v: 0 };
    gsap.to(box, {
      v: 100, duration: .85, ease: 'power2.out',
      onUpdate: function () { if (num) num.textContent = String(Math.round(box.v)); }
    });
    gsap.to(el, {
      opacity: 0, duration: .55, delay: .62, ease: 'power2.inOut',
      onComplete: function () { el.remove(); }
    });
  })();

  /* ---------- шапка и меню ---------- */
  (function header() {
    var top = $('.top'), burger = $('#burger'), nav = $('#nav');
    var close = $('#nav-close');
    var прибита = false;
    var measure = function () {
      прибита = top ? getComputedStyle(top).position === 'fixed' : false;
      if (top && !прибита) top.classList.remove('scrolled');
    };
    measure();
    window.addEventListener('resize', measure);
    if (top) {
      ScrollTrigger.create({
        start: 'top -8', end: 99999,
        onUpdate: function (s) { if (прибита) top.classList.toggle('scrolled', s.scroll() > 8); }
      });
    }
    if (burger && nav) {
      var закрыть = function () {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      };
      burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        nav.classList.toggle('open', !open);
      });
      if (close) close.addEventListener('click', закрыть);
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') закрыть();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') закрыть();
      });
    }
  })();

  /* ---------- магнитные кнопки ---------- */
  if (fine && !reduce) {
    $$('[data-magnet]').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * .16;
        var y = (e.clientY - r.top - r.height / 2) * .3;
        gsap.to(btn, { x: x, y: y, duration: .6, ease: 'expo.out', overwrite: true });
      });
      btn.addEventListener('pointerleave', function () {
        gsap.to(btn, { x: 0, y: 0, duration: .9, ease: 'expo.out', overwrite: true });
      });
    });
  }

  /* ---------- состояние часов работы (Новосибирск, UTC+7) ---------- */
  (function clock() {
    var box = doc.querySelectorAll('[data-status-text]');
    if (!box.length) return;
    function nsk() {
      var d = new Date();
      return new Date(d.getTime() + (d.getTimezoneOffset() + 420) * 60000);
    }
    function tick() {
      var d = nsk(), day = d.getDay(), h = d.getHours(), m = d.getMinutes();
      var open = h + m / 60, from = day === 0 ? 10 : 8, to = day === 0 ? 17 : 21;
      var txt;
      if (open < from) txt = 'Закрыто, откроемся в ' + from + ':00';
      else if (open < to) txt = 'Открыто до ' + to + ':00';
      else if (day !== 0 && open < 24) txt = 'Закрыто, завтра с ' + (day === 6 ? 10 : 8) + ':00';
      else txt = 'Закрыто, в воскресенье с 10:00';
      Array.prototype.forEach.call(box, function (b) { b.textContent = txt; });
    }
    tick();
    setInterval(tick, 30000);
  })();

  /* ============================================================
     Акт 1: мягкая стена
     ============================================================ */
  var wall = {
    scene: $('#a1-scene'), stick: $('#a1-stick'), box: $('#wall'),
    frames: $$('.wf'), d: [], cx: [], cy: [], vt: [],
    vx: [], vy: [], vs: [],
    px: 0, py: 0, tx: 0, ty: 0, on: false, last: -9
  };
  if (wall.scene) {
    /* центры кадров в координатах стены: за кадр раскладку не читаем */
    var cacheWall = function () {
      for (var i = 0; i < wall.frames.length; i++) {
        var f = wall.frames[i];
        if (!f.offsetParent && f.offsetWidth === 0) return;
        wall.cx[i] = f.offsetLeft + f.offsetWidth / 2;
        wall.cy[i] = f.offsetTop + f.offsetHeight / 2;
        wall.vt[i] = '';
      }
    };
    wall.frames.forEach(function (f, i) {
      wall.d.push(parseFloat(f.style.getPropertyValue('--d')) || 1);
      wall.cx.push(0); wall.cy.push(0); wall.vt.push('');
      wall.vx.push(0); wall.vy.push(0); wall.vs.push(1);
    });
    var plate = $('#a1-plate');

    if (!reduce) {
      /* вход: кадры раскрываются из узкой щели, заголовок едет из маски */
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.plate-h .mask > span', { yPercent: 110, duration: 1.05, stagger: .08 }, 0)
        .from('.wf-in', { clipPath: 'inset(0% 46% 0% 46%)', duration: 1.15, stagger: .055, ease: 'power3.inOut' }, .05)
        .from('.plate-p, .plate-note', { y: 14, opacity: 0, duration: .9, stagger: .08 }, .28)
        .from('.a1-plate .btn', { y: 14, opacity: 0, duration: .8 }, .4);

      /* плашка уходит вверх только там, где сцена закреплена */
      gsap.matchMedia().add('(min-width: 900px)', function () {
        gsap.to(plate, {
          y: function () { return -wall.stick.offsetHeight * .95; },
          ease: 'none',
          scrollTrigger: { trigger: wall.scene, start: 'top top', end: 'bottom bottom', scrub: .3 }
        });
      });
    }

    /* пружина от курсора только там, где есть курсор: телефон ею не машет */
    if (fine && wall.stick) {
      var move = function (e) {
        wall.tx = e.clientX; wall.ty = e.clientY;
        wall.on = true; wall.last = performance.now() / 1000;
      };
      wall.stick.addEventListener('pointermove', move, { passive: true });
      wall.stick.addEventListener('pointerdown', move, { passive: true });
      wall.stick.addEventListener('pointerleave', function () { wall.on = false; });
    }
    cacheWall();
    window.addEventListener('resize', cacheWall);
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(cacheWall);

    /* всплытие текста в хвосте акта */
    if (!reduce) {
      $$('.step').forEach(function (el) {
        gsap.from(el, {
          y: 26, opacity: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        });
      });
    }
  }

  /* ============================================================
     Акт 2: лупа над прайсом
     ============================================================ */
  var loupe = {
    scene: $('#a2-scene'), win: $('#lp-window'), list: $('#lp-list'),
    drop: $('#lp-drop'), stick: $('.a2-stick'),
    rows: $$('.lp-row'),
    x: 0, y: 0, tx: 0, ty: 0, R: 90, ready: false, last: -9, p: 0
  };
  if (loupe.scene) {
    var setDrop = function () {
      var r = loupe.drop.getBoundingClientRect();
      loupe.R = r.width / 2 || 90;
      var wb = loupe.win.getBoundingClientRect();
      if (!loupe.ready) { loupe.x = r.left + r.width / 2 - wb.left; loupe.y = r.top + r.height / 2 - wb.top; loupe.ready = true; }
    };
    setDrop();
    window.addEventListener('resize', function () { loupe.ready = false; setDrop(); ScrollTrigger.refresh(); });

    if (loupe.stick) {
      loupe.stick.addEventListener('pointermove', function (e) {
        loupe.tx = e.clientX; loupe.ty = e.clientY; loupe.last = performance.now() / 1000;
      }, { passive: true });
    }

    /* строки едут под каплей по прокрутке, телефон и компьютер одинаково */
    var travel = function () {
      return Math.max(0, loupe.list.scrollHeight - loupe.win.clientHeight);
    };
    gsap.to(loupe.list, {
      y: function () { return -travel(); },
      ease: 'none',
      scrollTrigger: { trigger: loupe.scene, start: 'top top', end: 'bottom bottom', scrub: .3 }
    });
    ScrollTrigger.create({
      trigger: loupe.scene, start: 'top top', end: 'bottom bottom',
      onUpdate: function (self) { loupe.p = self.progress; }
    });

    /* капля сама ходит по строкам, пока курсор молчит */
    var idlePoint = function (t) {
      var w = loupe.win.getBoundingClientRect(), R = loupe.R;
      var ph = t * .22, free = Math.max(10, w.width - R * 2), freeH = Math.max(10, w.height - R * 2);
      return {
        x: w.left + R + free * (.5 + Math.cos(ph * .8) * .42),
        y: w.top + R + freeH * (.03 + .94 * clamp(loupe.p + .03 + Math.sin(ph) * .09, 0, 1))
      };
    };
    loupe.idlePoint = idlePoint;
  }

  /* ============================================================
     Акт 3: врачи на невидимом колесе
     ============================================================ */
  var wheel = {
    scene: $('#a3-scene'), stick: $('.a3-stick'), area: $('#wheel'),
    cards: $$('.wcard'), tabs: $$('#wheel-tabs button'),
    rot: 0, target: 0, step: 90, lim: 0, built: false, dragging: false, sx: 0, base: 0, moved: false
  };
  if (wheel.scene) {
    /* карточка ниже барабана не ходит: иначе накрывает кнопки выбора врача */
    var build = function () {
      var card = wheel.cards[0].offsetHeight, box = wheel.area.offsetHeight;
      wheel.lim = Math.max(0, (box - card) / 2);
      wheel.step = Math.min(card * .17, Math.max(10, wheel.lim * .95), fine ? 96 : 62);
      wheel.built = true;
    };
    build();
    window.addEventListener('resize', function () { build(); ScrollTrigger.refresh(); });

    ScrollTrigger.create({
      trigger: wheel.scene, start: 'top top', end: 'bottom bottom',
      onUpdate: function (self) { if (!wheel.dragging) wheel.target = self.progress * (wheel.cards.length - 1); }
    });

    var scrollToRot = function (r) {
      var total = wheel.scene.offsetHeight - wheel.stick.offsetHeight;
      var y = wheel.scene.offsetTop + (r / (wheel.cards.length - 1)) * total;
      if (window.lenis) window.lenis.scrollTo(y, { duration: .9 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    };

    wheel.tabs.forEach(function (b) {
      b.addEventListener('click', function () { scrollToRot(parseFloat(b.dataset.go)); });
    });

    /* свайп и протяжка мышью крутят колесо */
    if (!reduce) {
      var area = $('.a3-in');
      if (area) {
        area.addEventListener('pointerdown', function (e) {
          wheel.dragging = true; wheel.moved = false; wheel.sx = e.clientX; wheel.base = wheel.target;
        });
        window.addEventListener('pointermove', function (e) {
          if (!wheel.dragging) return;
          var dx = e.clientX - wheel.sx;
          if (Math.abs(dx) > 10) wheel.moved = true;
          wheel.target = clamp(wheel.base - dx / 190, 0, wheel.cards.length - 1);
        });
        window.addEventListener('pointerup', function () {
          if (wheel.dragging && wheel.moved) scrollToRot(wheel.target);
          wheel.dragging = false;
        });
      }
    }
  }

  /* ============================================================
     Финал
     ============================================================ */
  if (!reduce) {
    $$('.fin-plate > *').forEach(function (el, i) {
      gsap.from(el, {
        y: 22, opacity: 0, duration: .9, delay: i * .05, ease: 'expo.out',
        scrollTrigger: { trigger: '.fin-in', start: 'top 88%', once: true }
      });
    });
    gsap.from('.fin-word', {
      y: 60, opacity: 0, duration: 1.2, ease: 'expo.out',
      scrollTrigger: { trigger: '.fin-word', start: 'top 96%', once: true }
    });
  }

  /* ============================================================
     Общий цикл: стена, лупа, колесо
     ============================================================ */
  function tick(t) {
    /* --- стена --- */
    if (wall.scene && wall.frames.length && !reduce) {
      var r1 = wall.scene.getBoundingClientRect();
      if (r1.bottom > -240 && r1.top < window.innerHeight + 240) {
        var run = wall.scene.offsetHeight - wall.stick.offsetHeight;
        var H1 = window.innerHeight;
        var p, amp;
        if (run > 8) { p = clamp(-r1.top / run, 0, 1); amp = .24 * H1; }
        else { p = clamp(-r1.top / Math.max(1, r1.height), 0, 1); amp = .07 * H1; }
        var wb = wall.box.getBoundingClientRect();
        var now = t;
        if (wall.on && (now - wall.last) <= 2.4) {
          wall.px += (wall.tx - wall.px) * .16;
          wall.py += (wall.ty - wall.py) * .16;
        }
        for (var i = 0; i < wall.frames.length; i++) {
          var dx = wb.left + wall.cx[i] - wall.px, dyy = wb.top + wall.cy[i] - wall.py;
          var dist = Math.sqrt(dx * dx + dyy * dyy) || 1;
          var infl = Math.max(0, 1 - dist / 300);
          var ux = dx / dist * infl * 40, uy = dyy / dist * infl * 40;
          wall.vx[i] += (ux - wall.vx[i]) * .12;
          wall.vy[i] += (uy - wall.vy[i]) * .12;
          wall.vs[i] += (1 - infl * .06 - wall.vs[i]) * .12;
          var bx = Math.sin(now * .45 + i * 1.7) * 4.5, by = Math.cos(now * .38 + i * 2.3) * 4.5;
          var tf = 'translate3d(' + (wall.vx[i] + bx).toFixed(1) + 'px,' +
            (wall.vy[i] + by - p * wall.d[i] * amp).toFixed(1) + 'px,0) scale(' + wall.vs[i].toFixed(3) + ')';
          if (wall.vt[i] !== tf) { wall.frames[i].style.transform = tf; wall.vt[i] = tf; }
        }
      }
    }

    /* --- лупа --- */
    if (loupe.scene && loupe.ready) {
      var w = loupe.win.getBoundingClientRect();
      if (w.bottom > -240 && w.top < window.innerHeight + 240) {
        var R = loupe.R;
        var tx, ty, now2 = performance.now() / 1000;
        if (!fine) {
          /* телефон: капля стоит по центру, строки едут под ней */
          tx = w.left + w.width / 2;
          ty = w.top + w.height * .5;
        } else if (now2 - loupe.last < 2.4) {
          tx = clamp(loupe.tx, w.left + R, w.right - R);
          ty = clamp(loupe.ty, w.top + R, w.bottom - R);
        } else {
          var ip = loupe.idlePoint(t);
          tx = ip.x; ty = ip.y;
        }
        tx = clamp(tx, w.left + R, w.right - R);
        ty = clamp(ty, w.top + R, w.bottom - R);
        /* положение капли внутри окна, в локальных координатах */
        loupe.x += ((tx - w.left) - loupe.x) * .12;
        loupe.y += ((ty - w.top) - loupe.y) * .12;
        loupe.drop.style.transform = 'translate3d(' + (loupe.x - R).toFixed(1) + 'px,' + (loupe.y - R).toFixed(1) + 'px,0)';
        var vx = w.left + loupe.x, vy = w.top + loupe.y;

        for (var j = 0; j < loupe.rows.length; j++) {
          var row = loupe.rows[j];
          var rr = row.getBoundingClientRect();
          var cx = rr.left + rr.width / 2, cy = rr.top + rr.height / 2;
          var near = Math.abs(cx - vx) < rr.width / 2 + R * 1.4 && Math.abs(cy - vy) < rr.height / 2 + R * 1.4;
          row.classList.toggle('is-under', Math.abs(cy - vy) < rr.height * .55 && Math.abs(cx - vx) < rr.width * .55);
          var lens = row.children[2], rim = row.children[3];
          if (!near) {
            if (lens.style.visibility !== 'hidden') { lens.style.visibility = 'hidden'; rim.style.visibility = 'hidden'; }
            continue;
          }
          if (lens.style.visibility === 'hidden') { lens.style.visibility = ''; rim.style.visibility = ''; }
          var mx = vx - rr.left, my = vy - rr.top;
          row.style.setProperty('--mx', mx.toFixed(1) + 'px');
          row.style.setProperty('--my', my.toFixed(1) + 'px');
          row.style.setProperty('--mr', (R / 1.6).toFixed(1) + 'px');
          row.style.setProperty('--mr2', (R / 1.82).toFixed(1) + 'px');
          row.style.setProperty('--ox', mx.toFixed(1) + 'px');
          row.style.setProperty('--oy', my.toFixed(1) + 'px');
          if (lens.style.transform !== 'scale(1.6)') lens.style.transform = 'scale(1.6)';
          if (rim.style.transform !== 'scale(1.82)') rim.style.transform = 'scale(1.82)';
        }
      }
    }

    /* --- колесо врачей --- */
    if (wheel.scene && wheel.built && !wheel.dragging && !reduce) {
      var near = wheel.stick.getBoundingClientRect();
      if (near.bottom > -240 && near.top < window.innerHeight + 240) {
        wheel.rot += (wheel.target - wheel.rot) * .11;
        var n = wheel.cards.length;
        for (var q = 0; q < n; q++) {
          var card = wheel.cards[q];
          var dd = q - wheel.rot, ad = Math.abs(dd);
          var y = clamp(dd > 0 ? dd * wheel.step : dd * wheel.step * .62, -wheel.lim, wheel.lim);
          var sc = 1 - Math.min(ad, 2) * .07;
          var rx = clamp(dd, -1.7, 1.7) * 11;
          var op = ad > 1.35 ? clamp(1.9 - ad, 0, 1) : 1;
          card.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) rotateX(' + rx.toFixed(2) + 'deg) scale(' + sc.toFixed(4) + ')';
          card.style.opacity = op.toFixed(2);
          card.style.zIndex = String(2000 - Math.round(ad * 1000));
          card.style.setProperty('--shade', Math.min(ad * .2, .5).toFixed(3));
          var front = ad < .5;
          if (front !== card.classList.contains('is-front')) card.classList.toggle('is-front', front);
        }
        var act = clamp(Math.round(wheel.rot), 0, n - 1);
        wheel.tabs.forEach(function (b, i) { if (i === act) b.classList.add('is-on'); else b.classList.remove('is-on'); });
      }
    }
  }

  gsap.ticker.add(tick);

  /* ---------- плавная прокрутка ---------- */
  if (!reduce && window.Lenis) {
    var lenis = new Lenis({ lerp: .09, smoothWheel: true, syncTouch: false, wheelMultiplier: 1 });
    window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  if (doc.fonts && doc.fonts.ready) {
    doc.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();