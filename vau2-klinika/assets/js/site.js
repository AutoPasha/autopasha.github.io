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

    /* живой кадр кабинета: свой ролик для широкого и для вертикального экрана */
    var vid = $('#a1-vid');
    if (vid && !reduce) {
      var узкий = window.matchMedia('(max-width: 899px)').matches;
      /* VP9 играют Chrome, Firefox и свежий Safari; где не умеют — тот же ролик в H.264 */
      var ext = vid.canPlayType('video/webm; codecs="vp9"') ? '.webm' : '.mp4';
      vid.src = (узкий ? vid.dataset.mob : vid.dataset.desk).replace(/\.mp4$/, ext);
      vid.addEventListener('playing', function () { vid.classList.add('is-on'); }, { once: true });
      var пуск = vid.play();
      if (пуск && пуск.catch) пуск.catch(function () {});
    }

    if (!reduce) {
      /* вход: кадр кабинета медленно отъезжает, заголовок поднимается из маски */
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('#a1-main .a1-media', { scale: 1.16, duration: 2.6, ease: 'power3.out' }, 0)
        .from('.plate-h .mask > span', { yPercent: 110, duration: 1.15, stagger: .09 }, .15)
        .from('.plate-k, .plate-row', { y: 16, opacity: 0, duration: 1, stagger: .1 }, .45);

      /* компьютер: кадр ужимается в центр, вокруг собирается стена, заголовок уходит вверх */
      gsap.matchMedia().add('(min-width: 900px)', function () {
        gsap.timeline({
          scrollTrigger: { trigger: wall.scene, start: 'top top', end: 'bottom bottom', scrub: .4 }
        })
          .to(plate, { y: -90, opacity: 0, duration: .2, ease: 'power1.in' }, 0)
          .to('#a1-main', { clipPath: 'inset(23% 31% 23% 31%)', duration: .55, ease: 'power2.inOut' }, 0)
          .to('.a1-shade', { opacity: 0, duration: .35, ease: 'none' }, .05)
          .fromTo('.wf-in', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .3, stagger: .025, ease: 'power2.out' }, .22)
          .to({}, { duration: .3 });
      });
      /* телефон: кадр чуть плывёт вниз, пока его пролистывают */
      gsap.matchMedia().add('(max-width: 899px)', function () {
        gsap.to('#a1-main .a1-media', {
          yPercent: 7, ease: 'none',
          scrollTrigger: { trigger: wall.stick, start: 'top top', end: 'bottom top', scrub: true }
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

    /* первый визит: строки заголовка из маски, кадры раскрываются и плывут, минуты набегают */
    if (!reduce) {
      gsap.from('.vz-line > span', {
        yPercent: 108, duration: 1.1, stagger: .09, ease: 'expo.out',
        scrollTrigger: { trigger: '.vz-h', start: 'top 86%', once: true }
      });
      $$('.vz').forEach(function (el) {
        var media = $('.vz-media', el), pic = $('.vz-pic', el), num = $('.vz-count', el);
        gsap.fromTo(media, { clipPath: 'inset(14% 10% 14% 10%)' }, {
          clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
          scrollTrigger: { trigger: media, start: 'top 96%', end: 'top 52%', scrub: .4 }
        });
        gsap.fromTo(pic, { yPercent: -6 }, {
          yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: media, start: 'top bottom', end: 'bottom top', scrub: true }
        });
        gsap.from($('.vz-text', el), {
          y: 34, opacity: 0, duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        });
        if (num && num.dataset.to) {
          var box = { v: 0 }, to = parseFloat(num.dataset.to);
          num.textContent = '0';
          gsap.to(box, {
            v: to, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true },
            onUpdate: function () { num.textContent = String(Math.round(box.v)); }
          });
        }
      });
    }
  }

  /* ============================================================
     Акт 2: прайс барабаном, цена набегает, кадр меняется шторкой
     ============================================================ */
  var pr = {
    scene: $('#a2-scene'), reel: $('#pr-reel'), list: $('#pr-list'),
    rows: $$('.pr-row'), pics: $$('.pc-pic'),
    num: $('#pr-num'), pre: $('#pr-pre'), why: $('#pr-why'),
    pos: 0, target: 0, cur: 0, shown: { v: 0 }, mid: [], h: [], vt: []
  };
  if (pr.scene && pr.rows.length) {
    var n2 = pr.rows.length;
    /* середины строк по раскладке: за кадр раскладку не читаем */
    var prMeasure = function () {
      for (var i = 0; i < n2; i++) { pr.h[i] = pr.rows[i].offsetHeight; pr.mid[i] = pr.rows[i].offsetTop + pr.h[i] / 2; }
      pr.vt = [];
    };
    prMeasure();
    window.addEventListener('resize', prMeasure);
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(prMeasure);

    var groups = function (v) { return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); };
    pr.show = function (k) {
      if (k === pr.cur) return;
      var old = pr.cur;
      pr.cur = k;
      pr.rows[old].classList.remove('is-on');
      pr.rows[k].classList.add('is-on');
      pr.pics.forEach(function (p) { p.classList.remove('was'); });
      pr.pics[old].classList.remove('is-on'); pr.pics[old].classList.add('was');
      pr.pics[k].classList.add('is-on');
      var row = pr.rows[k];
      pr.pre.textContent = row.dataset.pre || '';
      pr.why.textContent = row.dataset.why || '';
      var to = parseFloat(row.dataset.cost) || 0;
      if (reduce) { pr.shown.v = to; pr.num.textContent = groups(to); return; }
      /* цена набегает от прежней к новой, как счётчик */
      gsap.to(pr.shown, {
        v: to, duration: .7, ease: 'power4.out', overwrite: true,
        onUpdate: function () { pr.num.textContent = groups(pr.shown.v); }
      });
    };

    ScrollTrigger.create({
      trigger: pr.scene, start: 'top top', end: 'bottom bottom',
      onUpdate: function (self) {
        /* небольшая стоянка на первой и последней строке */
        pr.target = clamp((self.progress - .05) / .88, 0, 1) * (n2 - 1);
      }
    });
    pr.tick = function () {
      pr.pos += (pr.target - pr.pos) * (reduce ? 1 : .14);
      var k = clamp(Math.round(pr.pos), 0, n2 - 1);
      if (k !== pr.cur) pr.show(k);
      if (reduce) return;
      /* строка в фокусе стоит посередине барабана */
      var a = Math.floor(pr.pos), b = Math.min(n2 - 1, a + 1), f = pr.pos - a;
      var c = pr.mid[a] + (pr.mid[b] - pr.mid[a]) * f;
      var RH = pr.reel.clientHeight, shift = RH / 2 - c;
      var ty = 'translate3d(0,' + shift.toFixed(1) + 'px,0)';
      if (pr.vt.list !== ty) { pr.list.style.transform = ty; pr.vt.list = ty; }
      for (var i = 0; i < n2; i++) {
        var ad = Math.abs(i - pr.pos);
        var s = 1 - Math.min(ad, 1) * .4, op = 1 - Math.min(ad, 2) * .17;
        /* строка, что не влезла в окно барабана целиком, не видна вовсе: под кадром и шапкой текста нет */
        var half = pr.h[i] * s / 2, y = pr.mid[i] + shift;
        var inside = y - half >= -2 && y + half <= RH + 2;
        var t2 = 'scale(' + s.toFixed(3) + ')|' + op.toFixed(2) + '|' + inside;
        if (pr.vt[i] !== t2) {
          pr.rows[i].style.transform = 'scale(' + s.toFixed(3) + ')';
          pr.rows[i].style.opacity = inside ? op.toFixed(2) : '0';
          pr.rows[i].style.visibility = inside ? '' : 'hidden';
          pr.vt[i] = t2;
        }
      }
    };
  }

  /* ============================================================
     Акт 3: врачи, крупные кадры по горизонтали
     ============================================================ */
  var drs = {
    scene: $('#dr-scene'), stick: $('.dr-stick'), track: $('#dr-track'),
    figs: $$('.dr-ph'), imgs: $$('.dr-ph img'),
    wide: window.matchMedia('(min-width: 900px)'), vt: []
  };
  if (drs.scene && drs.track) {
    var drTravel = function () { return Math.max(0, drs.track.scrollWidth - window.innerWidth); };
    /* высота сцены по длине ленты: сколько ехать вбок, столько и листать */
    var drFit = function () {
      if (reduce || !drs.wide.matches) { drs.scene.style.height = ''; return; }
      /* плюс стоянка в 0,8 экрана: заголовок раздела успевают прочесть до того, как лента поедет */
      drs.scene.style.height = Math.round(drs.stick.offsetHeight * 1.9 + drTravel()) + 'px';
    };
    drFit();
    var drW = window.innerWidth;
    window.addEventListener('resize', function () {
      if (window.innerWidth === drW) return;
      drW = window.innerWidth; drFit(); ScrollTrigger.refresh();
    });
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { drFit(); ScrollTrigger.refresh(); });
    window.addEventListener('load', drFit);

    if (!reduce) {
      var mm = gsap.matchMedia();
      mm.add('(min-width: 900px)', function () {
        gsap.to(drs.track, {
          x: function () { return -drTravel(); },
          ease: 'none',
          scrollTrigger: { trigger: drs.scene, start: 'top -80%', end: 'bottom 110%', scrub: .5, invalidateOnRefresh: true }
        });
        gsap.from('.dr-intro > *', {
          y: 30, opacity: 0, duration: 1.1, stagger: .08, ease: 'expo.out',
          scrollTrigger: { trigger: drs.scene, start: 'top 70%', once: true }
        });
      });
      mm.add('(max-width: 899px)', function () {
        drs.figs.forEach(function (f) {
          gsap.fromTo(f, { clipPath: 'inset(12% 8% 12% 8%)' }, {
            clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
            scrollTrigger: { trigger: f, start: 'top 96%', end: 'top 50%', scrub: .4 }
          });
        });
        $$('.dr-tx').forEach(function (t) {
          gsap.from(t, {
            y: 30, opacity: 0, duration: 1, ease: 'expo.out',
            scrollTrigger: { trigger: t, start: 'top 90%', once: true }
          });
        });
      });
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
     Общий цикл: стена, прайс, врачи
     ============================================================ */
  function tick(t) {
    /* --- стена --- */
    if (wall.scene && wall.frames.length && !reduce) {
      var r1 = wall.scene.getBoundingClientRect();
      if (r1.bottom > -240 && r1.top < window.innerHeight + 240) {
        var run = wall.scene.offsetHeight - wall.stick.offsetHeight;
        var H1 = window.innerHeight;
        var p, amp;
        if (run > 8) { p = clamp(-r1.top / run, 0, 1); amp = .08 * H1; }
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

    /* --- прайс --- */
    if (pr.tick) {
      var r2 = pr.scene.getBoundingClientRect();
      if (r2.bottom > -240 && r2.top < window.innerHeight + 240) pr.tick();
    }

    /* --- врачи: кадр внутри рамки плывёт против хода --- */
    if (drs.scene && !reduce) {
      var near = drs.stick.getBoundingClientRect();
      if (near.bottom > -240 && near.top < window.innerHeight + 240) {
        var Wv = window.innerWidth, Hv = window.innerHeight, wide = drs.wide.matches;
        for (var q = 0; q < drs.figs.length; q++) {
          var fr = drs.figs[q].getBoundingClientRect();
          var d = wide ? (fr.left + fr.width / 2 - Wv / 2) / Wv : (fr.top + fr.height / 2 - Hv / 2) / Hv;
          d = clamp(d, -1, 1) * -5.5;
          var tf2 = (wide ? 'translate3d(' + d.toFixed(2) + '%,0,0)' : 'translate3d(0,' + d.toFixed(2) + '%,0)') + ' scale(1.14)';
          if (drs.vt[q] !== tf2) { drs.imgs[q].style.transform = tf2; drs.vt[q] = tf2; }
        }
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