/* «Ясень»: превращение на кадрах, сцены, акты. Чистый JS, без сети. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var doc = document.documentElement;
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  gsap.ticker.lagSmoothing(0);

  /* ---------------- заставка ---------------- */
  (function zastavka() {
    var el = $('#zastavka');
    if (!el) return;
    var kl = sessionStorage.getItem('yasen_zast');
    if (reduced || kl) { el.style.display = 'none'; return; }
    sessionStorage.setItem('yasen_zast', '1');
    var lin = $('#zastLin');
    gsap.set(lin, { scaleX: 0, transformOrigin: 'left center' });
    gsap.to(lin, { scaleX: 1, duration: 1.0, ease: 'expo.out' });
    gsap.to(el, { delay: 1.15, onComplete: function () { el.style.display = 'none'; } });
    el.classList.add('is-uvolnil');
  })();

  /* ---------------- плавная прокрутка ---------------- */
  var lenis = new Lenis({
    duration: 1.05,
    syncTouch: false,
    smoothWheel: true,
    touchMultiplier: 1.4
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (time) { lenis.raf(time * 1000); });

  var topbar = $('.top');
  lenis.on('scroll', function (e) {
    topbar.classList.toggle('is-tihiy', e.scroll > 24);
  });

  /* ---------------- превращение ---------------- */
  var KADROV = 287;
  var NAChALE = [1, 92, 243];          /* первый кадр каждой сцены, 1-based */
  var POZICIY = {
    /* сцена: [сдвиг по X в долях ширины экрана, сдвиг по Y в долях высоты wrap] */
    desktop: [[0.15, 0.02], [-0.15, 0.0], [0.0, 0.1]],
    mobile: [[0.0, -0.16], [0.0, -0.02], [0.0, -0.2]]
  };

  var kino = $('#kino');
  var wrap = $('#kinoWrap');
  var cv = $('#kinoCv');
  var ctx = cv.getContext('2d', { alpha: true });
  var shkalaRun = $('#shkalaRun');
  var sety = { d: 'assets/kino/d/', m: 'assets/kino/m/' };
  var isM = window.matchMedia('(max-width: 899px)').matches;
  var imgs = new Array(KADROV);
  var poster = new Image();
  var target = 0, cur = 0, procent = 0, lastScena = -1;
  var shkal = { cur: 0, target: 0 };

  gsap.set(shkalaRun, { scaleY: 0, transformOrigin: 'top center' });
  gsap.set(wrap, { x: 0, y: 0 });

  poster.src = isM ? 'assets/kino/poster-m.jpg' : 'assets/kino/poster-d.jpg';

  var zagruzka = 0;
  function kadr(i) {
    if (imgs[i]) return;
    var im = new Image();
    im.decoding = 'async';
    im.src = sety[isM ? 'm' : 'd'] + String(i + 1 < 10 ? '000' : i + 1 < 100 ? '00' : '0') + (i + 1) + '.webp';
    imgs[i] = im;
    zagruzka++;
  }

  function poidi() {
    var i, por;
    /* сначала каждый восьмой, чтобы полоса хода была видна сразу */
    for (i = 0; i < KADROV; i += 8) kadr(i);
    por = 0;
    (function dalshe() {
      if (por >= KADROV) return;
      for (var j = 0; j < 5 && por < KADROV; j++, por++) kadr(por);
      setTimeout(dalshe, 60);
    })();
  }
  poidi();

  function risovka() {
    var w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var pw = Math.round(w * dpr), ph = Math.round(h * dpr);
    if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
    ctx.clearRect(0, 0, pw, ph);

    var n = Math.round(cur);
    var im = imgs[clamp(n, 0, KADROV - 1)];
    if (!im || !im.complete || !im.naturalWidth) im = poster;
    if (!im.naturalWidth) return;

    var iw = im.naturalWidth, ih = im.naturalHeight;
    var k = Math.max(pw / iw, ph / ih);   /* кадр всегда заполняет окно: края видео не видны */
    var dw = iw * k, dh = ih * k;
    ctx.drawImage(im, Math.round((pw - dw) / 2), Math.round((ph - dh) / 2), Math.round(dw), Math.round(dh));
  }

  function nomerSceny(p) {
    if (p < 0.315) return 0;
    if (p < 0.845) return 1;
    return 2;
  }

  function poeSceny(n) {
    var spisok = $$('.scena');
    if (n === lastScena) return;
    lastScena = n;
    spisok.forEach(function (el, i) { el.classList.toggle('is-aktiven', i === n); });
    var stroki = $$('.scena.is-aktiven .msk > span');
    gsap.killTweensOf(stroki);
    gsap.set(stroki, { yPercent: reduced ? 0 : 108 });
    gsap.to(stroki, {
      yPercent: 0, duration: reduced ? 0 : 1.15, ease: 'expo.out',
      stagger: reduced ? 0 : 0.09, delay: reduced ? 0 : 0.12
    });
    var poz = isM ? POZICIY.mobile : POZICIY.desktop;
    var sx = poz[n][0] * window.innerWidth;
    var sy = poz[n][1] * wrap.clientHeight;
    gsap.to(wrap, { x: sx, y: sy, duration: reduced ? 0 : 1.4, ease: 'expo.out', overwrite: 'auto' });
  }

  var kinoBox = kino;
  function progress() {
    var r = kinoBox.getBoundingClientRect();
    var total = kinoBox.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    return clamp(-r.top / total, 0, 1);
  }

  /* один общий цикл кадров */
  gsap.ticker.add(function () {
    procent = progress();
    target = procent * (KADROV - 1);
    cur += (target - cur) * 0.16;
    if (Math.abs(target - cur) < 0.01) cur = target;
    shkal.target = procent;
    shkal.cur += (shkal.target - shkal.cur) * 0.18;
    gsap.set(shkalaRun, { scaleY: shkal.cur });
    poeSceny(nomerSceny(procent));
    risovka();
  });

  window.addEventListener('resize', function () {
    var b = window.matchMedia('(max-width: 899px)').matches;
    if (b !== isM) { isM = b; imgs = new Array(KADROV); poster.src = isM ? 'assets/kino/poster-m.jpg' : 'assets/kino/poster-d.jpg'; poidi(); }
  }, { passive: true });

  /* фото за курсором в строках услуг */
  var kf = $('#kursorFoto');
  if (kf && window.matchMedia('(hover: hover)').matches) {
    var kx = 0, ky = 0, tx = 0, ty = 0, zhiv = false;
    gsap.set(kf, { opacity: 0, xPercent: -50, yPercent: -50 });
    $$('.stroka').forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        var f = a.getAttribute('data-foto');
        if (f) kf.querySelector('img').src = f;
        zhiv = true;
        gsap.to(kf, { opacity: 1, duration: 0.4, ease: 'expo.out' });
      });
      a.addEventListener('mouseleave', function () { zhiv = false; gsap.to(kf, { opacity: 0, duration: 0.3 }); });
    });
    window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
    window.addEventListener('scroll', function () {
      if (!zhiv) return;
      zhiv = false;
      gsap.to(kf, { opacity: 0, duration: 0.25 });
    }, { passive: true });
    gsap.ticker.add(function () {
      if (!zhiv) return;
      kx += (tx - kx) * 0.12; ky += (ty - ky) * 0.12;
      gsap.set(kf, { x: kx, y: ky });
    });
  }/* ---------------- якоря ---------------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      lenis.scrollTo(t, { offset: -70, duration: 1.2 });
    });
  });

  /* ---------------- магнитная кнопка ---------------- */
  if (!reduced) {
    var krug = $('.btn-krug');
    if (krug) {
      var rx = 0, ry = 0, tx2 = 0, ty2 = 0, vnutri = false;
      krug.addEventListener('mouseenter', function () { vnutri = true; });
      krug.addEventListener('mouseleave', function () { vnutri = false; tx2 = 0; ty2 = 0; });
      krug.addEventListener('mousemove', function (e) {
        var r = krug.getBoundingClientRect();
        tx2 = (e.clientX - (r.left + r.width / 2)) * 0.32;
        ty2 = (e.clientY - (r.top + r.height / 2)) * 0.32;
      }, { passive: true });
      gsap.ticker.add(function () {
        if (!vnutri) return;
        rx += (tx2 - rx) * 0.12; ry += (ty2 - ry) * 0.12;
        gsap.set(krug, { x: rx, y: ry });
      });
    }
  }

  /* ---------------- заголовки актов по словам ---------------- */
  $$('.msk-slova').forEach(function (h) {
    if (reduced) return;
    var slova = h.textContent.trim().split(/\s+/);
    h.textContent = '';
    slova.forEach(function (sl, i) {
      var s = document.createElement('span');
      s.style.display = 'inline-block';
      s.textContent = sl;
      h.appendChild(s);
      if (i < slova.length - 1) h.appendChild(document.createTextNode(' '));
    });
    gsap.set(h.querySelectorAll('span'), { y: 16, opacity: 0 });
    ScrollTrigger.create({
      trigger: h, start: 'top 84%',
      onEnter: function () {
        gsap.to(h.querySelectorAll('span'), {
          y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.045, overwrite: 'auto'
        });
      }
    });
  });

  /* ---------------- фото растёт из карточки ---------------- */
  var lesFoto = $('.les-foto img');
  if (lesFoto) {
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', function () {
      gsap.fromTo(lesFoto,
        { clipPath: 'inset(26% 62% 26% 62%)', scale: 1.03 },
        {
          clipPath: 'inset(0% 0% 0% 0%)', scale: 1, ease: 'none',
          scrollTrigger: { trigger: '#les', start: 'top 72%', end: 'bottom 55%', scrub: 0.6 }
        });
    });
    mm.add('(max-width: 899px)', function () {
      gsap.fromTo(lesFoto, { scale: 1.04 }, {
        scale: 1, ease: 'none',
        scrollTrigger: { trigger: '#les', start: 'top 85%', end: 'bottom 70%', scrub: 0.6 }
      });
    });
  }

  /* ---------------- лента шагов ---------------- */
  if (!reduced) {
    var track = $('#shagiTrack');
    if (track) {
      var mm2 = gsap.matchMedia();
      mm2.add('(min-width: 900px)', function () {
        /* лента едет только если не помещается: на широких экранах все шаги видны сразу */
        var nuzhno = function () { return track.scrollWidth + track.parentElement.getBoundingClientRect().left - window.innerWidth;   /* лента начинается не от края окна: докручиваем до последней карточки целиком */ };
        if (nuzhno() < 24) { gsap.set(track, { x: 0 }); return; }
        gsap.to(track, {
          x: function () { return -nuzhno(); },
          ease: 'none',
          scrollTrigger: {
            trigger: '.shagi', start: 'top top',
            end: function () { return '+=' + nuzhno(); },
            pin: '.shagi-stick', scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1
          }
        });
      });
    }
  }

  /* ---------------- цены: цифры перелистываются ---------------- */
  $$('.ceny-stroka').forEach(function (stroka) {
    if (reduced) return;
    var c = stroka.querySelector('.ceny-c');
    var tekst = c.getAttribute('data-cena') || c.textContent;
    c.textContent = '';
    var bok = document.createElement('span');
    bok.style.display = 'inline-block';
    bok.style.overflow = 'hidden';
    bok.style.verticalAlign = 'bottom';
    bok.style.lineHeight = '1.18';
    Array.prototype.forEach.call(tekst, function (sim) {
      var s = document.createElement('span');
      s.style.display = 'inline-block';
      s.textContent = sim === ' ' ? '\u00a0' : sim;
      bok.appendChild(s);
    });
    c.appendChild(bok);
    var sym = bok.querySelectorAll('span');
    gsap.set(sym, { yPercent: 118, opacity: 0 });
    ScrollTrigger.create({
      trigger: stroka, start: 'top 88%',
      onEnter: function () {
        gsap.to(sym, { yPercent: 0, opacity: 1, duration: 0.75, ease: 'expo.out', stagger: 0.028, overwrite: 'auto' });
      }
    });
  });

  /* ---------------- появление блоков ---------------- */
  if (!reduced) {
    $$('.uslugi-tekst > *, .les-tekst > *, .ceny-golova > *, .zapis-forma > *, .otzyv > *, .podval-verh, .shagi-golovka').forEach(function (el) {
      gsap.set(el, { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: el, start: 'top 90%',
        onEnter: function () {
          gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', overwrite: 'auto' });
        }
      });
    });
    $$('.shagi-shag').forEach(function (el, i) {
      gsap.set(el, { opacity: 0, y: 26 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: i * 0.05,
        scrollTrigger: { trigger: '.shagi-track', start: 'top 86%' }
      });
    });
  }

  /* ---------------- форма ---------------- */
  var forma = $('#forma');
  if (forma) {
    forma.addEventListener('submit', function (e) {
      e.preventDefault();
      var otvet = $('#formaOtvet');
      otvet.hidden = false;
      gsap.fromTo(otvet, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' });
      forma.querySelectorAll('input, select, button').forEach(function (el) { el.disabled = true; });
      forma.querySelector('.btn-oreh').textContent = 'Заявка отправлена';
    });
  }

  /* ---------------- подвал: имя приезжает ---------------- */
  if (!reduced) {
    var slovo = $('.podval-slovo');
    if (slovo) {
      ScrollTrigger.create({
        trigger: slovo, start: 'top 96%',
        onEnter: function () {
          gsap.fromTo(slovo, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out' });
        }
      });
    }
  }

  /* ---------------- пересчёт после загрузки шрифтов ---------------- */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });

})();