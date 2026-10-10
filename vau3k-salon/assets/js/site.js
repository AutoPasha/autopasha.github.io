/* Шёлк. Всё движение на странице: превращение, заставка, окно, появления. */
(function () {
  'use strict';

  var doc = document;
  var $ = function (s, k) { return (k || doc).querySelector(s); };
  var $$ = function (s, k) { return Array.prototype.slice.call((k || doc).querySelectorAll(s)); };

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';

  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  /* ---------------- плавная прокрутка ---------------- */
  var lenis = null;
  if (!reduced && hasGSAP && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, touchMultiplier: 1.4 });
    lenis.on('scroll', function () {
      if (window.ScrollTrigger) ScrollTrigger.update();
      kinoTarget();
    });
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------------- превращение ---------------- */
  var sec = $('#kino');
  var stick, wrap, cv, ctx, railI, railN;
  var TOTAL = 273;
  var SC0 = 91;
  var POS_DESK = [{ x: 0, y: 0, s: 1 }, { x: 0, y: 0, s: 1.04 }, { x: 0, y: 0, s: 1.08 }];   /* во весь экран: медленный наезд камеры вместо переезда кадра */
  var POS_MOB = [{ x: 0, y: 0, s: 1 }, { x: 0, y: -1.5, s: 0.97 }, { x: 0, y: -3, s: 0.93 }];
  var imgs = [], ok = [], lastIdx = -1, W = 0, H = 0, cur = 0, tgt = 0, inView = true, queue = [], busy = 0;
  var kinoTexts = [];

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function smooth(v) { return v * v * (3 - 2 * v); }

  function frameSrc(i, dir) {
    var n = i + 1;
    return 'assets/kino/' + dir + '/' + (n < 10 ? '000' : n < 100 ? '00' : '0') + n + '.webp';
  }

  function kinoTarget() {
    if (!sec) return;
    var r = sec.getBoundingClientRect();
    var span = sec.offsetHeight - stick.offsetHeight;
    var v = span > 0 ? -r.top / span : 0;
    tgt = v < 0 ? 0 : v > 1 ? 1 : v;
  }

  function sizeCanvas() {
    var r = wrap.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, window.matchMedia('(max-width: 899px)').matches ? 1.75 : 2);
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lastIdx = -1;
  }

  function nearest(i) {
    if (ok[i]) return i;
    for (var k = 1; k < 26; k++) {
      if (i - k >= 0 && ok[i - k]) return i - k;
      if (i + k < TOTAL && ok[i + k]) return i + k;
    }
    return -1;
  }

  function draw(i) {
    var im = imgs[i];
    if (!im || !im.naturalWidth) return;
    var s = Math.min(W / im.naturalWidth, H / im.naturalHeight);
    var w = im.naturalWidth * s, h = im.naturalHeight * s;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
  }

  function paint() {
    var p = tgt;
    var fi = Math.round(p * (TOTAL - 1));
    var idx = nearest(fi);
    if (idx >= 0 && idx !== lastIdx) { draw(idx); lastIdx = idx; }
    else if (idx < 0) lastIdx = -1;

    var pos = window.matchMedia('(max-width: 899px)').matches ? POS_MOB : POS_DESK;
    var t = clamp01(p) * 3, i = Math.min(1, Math.floor(t)), e = smooth(clamp01(t - i));
    var a = pos[i], b = pos[i + 1];
    var x = a.x + (b.x - a.x) * e, y = a.y + (b.y - a.y) * e, s = a.s + (b.s - a.s) * e;
    wrap.style.transform = 'translate3d(' + x.toFixed(2) + 'vw,' + y.toFixed(2) + 'svh,0) scale(' + s.toFixed(3) + ')';

    var si = t < 1 ? 0 : t < 2 ? 1 : 2, l = t - si;
    for (var k = 0; k < kinoTexts.length; k++) {
      var el = kinoTexts[k], o = 0, ty = 0;
      if (k === si) {
        if (reduced) { o = 1; }
        else {
          var inn = k === 0 ? 1 : smooth(clamp01(l / 0.08));
          var outt = 1 - smooth(clamp01((l - (k === 2 ? 0.985 : 0.92)) / 0.08));
          o = inn * outt;
          ty = (1 - inn) * 52 - (1 - outt) * 52;
        }
      }
      if (Math.abs((el.__o === undefined ? -1 : el.__o) - o) > 0.003) {
        el.__o = o;
        el.style.opacity = o.toFixed(3);
        el.style.transform = reduced ? 'none' : 'translate3d(0,' + ty.toFixed(1) + 'px,0)';
        el.style.visibility = o < 0.004 ? 'hidden' : 'visible';
      }
    }

    if (railI) railI.style.height = (p * 100).toFixed(2) + '%';
    if (railN && !reduced) railN.textContent = 'кадр ' + (fi + 1) + ' из ' + TOTAL;
  }

  function pump() {
    if (!queue.length || busy > 5) return;
    var dir = window.matchMedia('(max-width: 899px)').matches ? 'm' : 'd';
    while (queue.length && busy < 6) {
      var i = queue.shift();
      var im = new Image();
      im.decoding = 'async';
      im.__i = i;
      im.onload = function () {
        ok[this.__i] = 1;
        busy--;
        if (inView) pump();
      };
      im.onerror = function () { ok[this.__i] = 0; busy--; };
      im.src = frameSrc(i, dir);
      imgs[i] = im;
      busy++;
    }
  }

  function loadSet() {
    imgs = new Array(TOTAL);
    ok = new Array(TOTAL);
    busy = 0;
    var order = [], i;
    for (i = 0; i < 30; i++) order.push(i);
    for (i = 30; i < TOTAL; i += 7) order.push(i);
    for (i = 30; i < TOTAL; i++) if (i % 7 !== 0) order.push(i);
    queue = order;
    pump();
  }

  if (sec) {
    stick = $('.kino-stick', sec);
    wrap = $('#kino-canvas');
    cv = $('#kino-cv');
    ctx = cv.getContext('2d');
    railI = $('#rail-i');
    railN = $('#rail-n');
    kinoTexts = $$('.kino-text', sec);

    sizeCanvas();
    loadSet();
    kinoTarget();
    paint();

    window.addEventListener('resize', function () {
      sizeCanvas();
      kinoTarget();
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, { passive: true });
    window.addEventListener('scroll', kinoTarget, { passive: true });
    window.addEventListener('orientationchange', function () { setTimeout(function () { loadSet(); }, 300); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { inView = es[0].isIntersecting; }, { threshold: 0 }).observe(sec);
    }

    var tick = function () {
      cur = reduced ? tgt : cur + (tgt - cur) * 0.11;
      if (Math.abs(tgt - cur) < 0.0004) cur = tgt;
      if (inView) paint();
    };
    if (hasGSAP) gsap.ticker.add(tick);
    else (function loop() { tick(); requestAnimationFrame(loop); })();
  }

  /* ---------------- заставка и сборка первого экрана ---------------- */
  var zast = $('#zastavka');
  var heroDone = false;

  function heroIn() {
    if (heroDone || !hasGSAP || reduced) return;
    heroDone = true;
    var tl = gsap.timeline();
    tl.fromTo('.kino-t0 .stroka > span', { yPercent: 112 }, { yPercent: 0, duration: 1.25, ease: 'expo.out' }, 0);
    tl.fromTo(['#kino-cv', '.kino-post'], { scaleY: 0.05, transformOrigin: '50% 50%' },
      { scaleY: 1, duration: 1.5, ease: 'expo.out' }, 0.05);
    tl.fromTo('.kino-t0 .kino-b', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.45);
    tl.fromTo('.hap-in', { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: .8, ease: 'power3.out' }, 0.2);
  }

  if (zast) {
    var seen = false;
    try { seen = sessionStorage.getItem('shelk-zastavka') === '1'; } catch (e) {}
    if (reduced || seen || !hasGSAP) {
      zast.remove();
      heroDone = true;
    } else {
      try { sessionStorage.setItem('shelk-zastavka', '1'); } catch (e) {}
      var num = $('#zast-num'), obj = { v: 0 };
      var start = function () {
        var tl = gsap.timeline();
        tl.fromTo('#zast-foto', { scale: 0.94 }, { scale: 1, duration: 0.5, ease: 'expo.out' }, 0);
        tl.to(obj, {
          v: TOTAL, duration: 0.95, ease: 'none',
          onUpdate: function () { num.textContent = Math.round(obj.v); }
        }, 0.05);
        tl.fromTo('#zast-line', { width: '0%' }, { width: '100%', duration: 1, ease: 'power2.inOut' }, 0.05);
        tl.to('#zast-foto', { scale: 1.3, duration: 0.45, ease: 'power2.in' }, 0.85);
        tl.to(zast, {
          clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'expo.inOut',
          onComplete: function () { zast.remove(); }
        }, 0.95);
        tl.add(heroIn, 0.25);
      };
      var go = function () { start(); };
      if (doc.fonts && doc.fonts.ready) {
        var t0 = setTimeout(go, 1400);
        doc.fonts.ready.then(function () { clearTimeout(t0); go(); });
      } else {
        window.addEventListener('load', go, { once: true });
      }
    }
  } else {
    heroDone = true;
  }

  /* ---------------- шапка и меню ---------------- */
  var hap = $('#hap');
  if (hap) {
    var hapTick = function () { hap.classList.toggle('tihaya', window.scrollY > 30); };
    window.addEventListener('scroll', hapTick, { passive: true });
    hapTick();
  }

  var burger = $('#burger'), men = $('#men');
  if (burger && men) {
    var menOpen = false;
    var setMen = function (open) {
      menOpen = open;
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
      men.setAttribute('aria-hidden', open ? 'false' : 'true');
      doc.body.classList.toggle('menu-open', open);
      if (hasGSAP && !reduced) {
        gsap.to(men, {
          clipPath: open ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
          duration: open ? 0.7 : 0.45, ease: open ? 'expo.out' : 'expo.in'
        });
      } else {
        men.style.clipPath = open ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)';
      }
    };
    burger.addEventListener('click', function () { setMen(!menOpen); });
    $$('a', men).forEach(function (a) {
      a.addEventListener('click', function () { setMen(false); });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menOpen) { setMen(false); burger.focus(); }
    });
  }

  /* ---------------- якоря ---------------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = doc.querySelector(id);
      if (!t) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(t, { offset: -60, duration: 1.2 });
      else t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ---------------- окно: закрепление и слова ---------------- */
  if (hasGSAP && window.ScrollTrigger) {
    var oknoText = $('#okno-text');
    if (oknoText && !reduced) {
      var words = oknoText.textContent.trim().split(/\s+/);
      oknoText.textContent = '';
      words.forEach(function (w, i) {
        var s = doc.createElement('w');
        s.textContent = w;
        oknoText.appendChild(s);
        if (i < words.length - 1) oknoText.appendChild(doc.createTextNode(' '));
      });
      gsap.to(oknoText.querySelectorAll('w'), {
        opacity: 1, ease: 'none',
        scrollTrigger: { trigger: '#okno', start: 'top 70%', end: 'top top', scrub: true },
        stagger: 0.02
      });
    }

    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', function () {
      gsap.timeline({
        scrollTrigger: { trigger: '#okno', start: 'top top', end: 'bottom bottom', scrub: true }
      })
        .fromTo('.okno-foto-in', { clipPath: 'inset(0 27% 0 27%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' }, 0)
        .fromTo('.okno-foto-in img', { scale: 1.3 }, { scale: 1, ease: 'none' }, 0);
    });

    ScrollTrigger.batch('.mast-stroka', {
      start: 'top 94%',
      once: true,
      onEnter: function (rows) {
        gsap.fromTo(rows, { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out', overwrite: true });
      }
    });

    var knopkas = $$('.kino-t0 .knopka, .finale-knop .knopka');
    if (window.matchMedia('(hover: hover) and (min-width: 900px)').matches && !reduced) {
      knopkas.forEach(function (b) {
        b.addEventListener('mousemove', function (e) {
          var r = b.getBoundingClientRect();
          gsap.to(b, {
            x: (e.clientX - (r.left + r.width / 2)) * 0.2,
            y: (e.clientY - (r.top + r.height / 2)) * 0.3,
            duration: 0.5, ease: 'power3.out'
          });
        });
        b.addEventListener('mouseleave', function () {
          gsap.to(b, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
        });
      });
    }
  }

  /* ---------------- фото за курсором над строками цен ---------------- */
  if (hasGSAP && window.matchMedia('(hover: hover) and (min-width: 900px)').matches && !reduced) {
    var stroki = $$('.kz-stroka[data-foto]');
    if (stroki.length) {
      var sled = doc.createElement('div');
      sled.className = 'm-sled';
      sled.setAttribute('aria-hidden', 'true');
      var sledImg = doc.createElement('img');
      sledImg.alt = '';
      sled.appendChild(sledImg);
      doc.body.appendChild(sled);
      var sx = gsap.quickTo(sled, 'x', { duration: .55, ease: 'power3' });
      var sy = gsap.quickTo(sled, 'y', { duration: .55, ease: 'power3' });
      var sledHide = function () { sled.classList.remove('on'); };
      doc.addEventListener('mousemove', function (e) {
        if (sled.classList.contains('on')) { sx(e.clientX); sy(e.clientY); }
      }, { passive: true });
      window.addEventListener('scroll', sledHide, { passive: true });
      stroki.forEach(function (s) {
        s.addEventListener('mouseenter', function () {
          sledImg.src = s.getAttribute('data-foto');
          sled.classList.add('on');
        });
        s.addEventListener('mouseleave', sledHide);
      });
    }
  }

  /* ---------------- форма ---------------- */
  var forma = $('#zapis-form');
  if (forma) {
    forma.addEventListener('submit', function (e) {
      e.preventDefault();
      var need = ['imya', 'telefon'];
      var okAll = true;
      need.forEach(function (n) {
        var f = forma.elements[n];
        if (!f || !f.value.trim()) { okAll = false; f.style.borderColor = 'var(--wine)'; }
        else f.style.borderColor = '';
      });
      if (!okAll) return;
      forma.classList.add('ok');
    });
  }
})();