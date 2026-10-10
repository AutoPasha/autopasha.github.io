/* Подъёмник: движение. Один цикл кадров на всех (gsap.ticker), начальные
   состояния задаются только здесь, в CSS их нет. */
(function () {
  'use strict';

  var ТИХО = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  if (gsap && ST) {
    gsap.registerPlugin(ST);
    ST.config({ ignoreMobileResize: true });
  }
  gsap && gsap.ticker.lagSmoothing(0);

  /* ---------- плавная прокрутка ---------- */
  var lenis = null;
  if (!ТИХО && window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.1,
      syncTouch: false,
      smoothWheel: true,
      touchMultiplier: 1
    });
    lenis.on('scroll', function () { ST && ST.update(); });
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  }

  /* ---------- заставка: один раз за сессию ---------- */
  var zastavka = document.getElementById('zastavka');
  if (zastavka) {
    var kl = 'pd-zastavka';
    var byl = false;
    try { byl = sessionStorage.getItem(kl) === '1'; } catch (e) {}
    if (byl || ТИХО || !gsap) {
      zastavka.parentNode.removeChild(zastavka);
    } else {
      try { sessionStorage.setItem(kl, '1'); } catch (e) {}
      gsap.timeline()
        .fromTo('#zastavkaPolosa', { scaleX: 0 }, { scaleX: 1, duration: .78, ease: 'power2.inOut' })
        .to(zastavka, { clipPath: 'inset(0% 0% 100% 0%)', duration: .55, ease: 'expo.inOut' }, '+=0.12')
        .add(function () { zastavka.parentNode.removeChild(zastavka); });
    }
  }

  /* ---------- превращение: кадры по прокрутке ---------- */
  var stage = document.getElementById('kinoStage');
  var kino = document.getElementById('kino');
  if (kino && stage) {
    var box = document.getElementById('kinoBox');
    var canvas = document.getElementById('kinoCanvas');
    var ctx = canvas.getContext('2d', { alpha: true });
    var polosa = document.getElementById('kinoPolosa');
    var schetchik = document.getElementById('kinoKadr');
    var paneli = Array.prototype.slice.call(document.querySelectorAll('.kino-panel'));
    var sceny = Array.prototype.slice.call(document.querySelectorAll('.kino-sceny b'));

    var VSEGO = 242;      /* кадров в превращении */
    var GRAN = 151;       /* первый кадр второй сцены (нумерация с нуля) */
    var setka = window.innerWidth < 640 ? 'm' : 'd';
    var poster = new Image();
    function posterKadr() {
      poster.src = setka === 'm' ? 'assets/kino/poster-m.jpg' : 'assets/kino/poster-d.jpg';
      if (poster.complete) pokazatPoster();
      else poster.onload = pokazatPoster;
    }
    function pokazatPoster() { if (!kadry[pokaz]) risovat(poster); }
    var kadry = new Array(VSEGO);
    var nakach = 0;
    var nakachano = 0;
    var pokaz = -1;
    var tek = 0;
    var cel = 0;
    var x1 = 0, x2 = 0;
    var tolkoe = window.innerWidth < 900;

    function imyaKadra(i) {
      return 'assets/kino/' + setka + '/' + String(i + 1).padStart(4, '0') + '.webp';
    }

    function postroit() {
      var panel = paneli[0];
      var telo = panel ? panel.querySelector('.kino-telo') : null;
      var pad = panel ? parseFloat(getComputedStyle(panel).paddingLeft) : 0;
      var stageW = stage.clientWidth;
      var boxW = box.offsetWidth;
      var bw = telo ? telo.offsetWidth : 0;
      if (tolkoe || !bw) { x1 = 0; x2 = 0; return; }
      var zazor = 30;
      /* сцена 1: предмет справа от текстовой колонки */
      var left1 = pad + bw + zazor;
      if (left1 + boxW > stageW - pad) left1 = stageW - pad - boxW;
      if (left1 < pad) left1 = pad;
      /* сцена 2: предмет слева от правой колонки */
      var left2 = pad;
      if (left2 + boxW > stageW - pad - bw - zazor) left2 = Math.max(0, stageW - pad - bw - zazor - boxW);
      x1 = left1 + boxW / 2 - stageW / 2;
      x2 = left2 + boxW / 2 - stageW / 2;
    }

    function razmer() {
      var r = box.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
      postroit();
    }

    function risovat(kadr) {
      var W = canvas.width, H = canvas.height;
      var s = Math.min(W / kadr.width, H / kadr.height);
      var w = kadr.width * s, h = kadr.height * s;
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(kadr, (W - w) / 2, (H - h) / 2, w, h);
    }

    /* Кадров 242, а декодированный кадр весит 3-4 МБ: держим в памяти только
       окно вокруг текущего плюс каждый восьмой (грубый проход). Остальное
       отпускаем: браузер отдаёт из кэша запроса за миллисекунды. */
    var SHIROK = 8;
    var OKNO = 8;

    function zagruzit(i) {
      if (kadry[i]) return;
      var im = new Image();
      im.onload = function () { kadry[i] = im; nakachano++; };
      im.src = imyaKadra(i);
    }

    function osvobodit(tam) {
      for (var j = 0; j < VSEGO; j++) {
        var im = kadry[j];
        if (!im) continue;
        if (j % SHIROK === 0) continue;
        if (Math.abs(j - tam) <= OKNO) continue;
        im.src = '';
        kadry[j] = null;
      }
    }

    function porciya() {
      if (nakach >= VSEGO) return;
      var konets = Math.min(nakach + 6, VSEGO);
      for (var i = nakach; i < konets; i++) zagruzit(i);
      nakach = konets;
      setTimeout(porciya, 60);
    }

    /* сначала каждый восьмой кадр, потом остальные */
    for (var i = 0; i < VSEGO; i += 8) zagruzit(i);
    setTimeout(porciya, 250);

    function progress() {
      var r = kino.getBoundingClientRect();
      var total = r.height - window.innerHeight;
      if (total <= 0) return 0;
      var p = -r.top / total;
      return p < 0 ? 0 : (p > 1 ? 1 : p);
    }

    function gladko(t) {
      if (t < 0) t = 0; else if (t > 1) t = 1;
      return t * t * (3 - 2 * t);
    }

    function kadrit(t) {
      cel = progress() * (VSEGO - 1);
      if (!ТИХО) {
        tek += (cel - tek) * 0.22;
        if (Math.abs(cel - tek) < 0.03) tek = cel;
      } else {
        tek = cel;
      }
      var i = Math.round(tek);
      if (i !== pokaz) {
        pokaz = i;
        if (kadry[i]) {
          risovat(kadry[i]);
          osvobodit(i);
        } else {
          zagruzit(i);           /* кадра ещё нет: держим предыдущий, без мигания */
        }
        if (schetchik) schetchik.textContent = i + 1;
      }
      /* переход между сценами */
      var t = gladko((tek - (GRAN - 13)) / 26);
      if (tolkoe) { x1 = 0; x2 = 0; }
      var x = x1 + (x2 - x1) * t;
      box.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)';
      if (paneli[0] && paneli[1]) {
        paneli[0].style.opacity = Math.max(0, 1 - 2 * t).toFixed(3);   /* сначала уходит старый текст, потом входит новый: не налезают */
        paneli[0].style.transform = 'translate3d(0,' + (-36 * t).toFixed(1) + 'px,0)';
        paneli[1].style.opacity = Math.max(0, 2 * t - 1).toFixed(3);
        paneli[1].style.transform = 'translate3d(0,' + (36 * (1 - t)).toFixed(1) + 'px,0)';
        paneli[1].style.pointerEvents = t > .6 ? 'auto' : 'none';
        paneli[0].style.pointerEvents = t > .4 ? 'none' : 'auto';
      }
      if (polosa) polosa.style.transform = 'scaleX(' + (cel / (VSEGO - 1)).toFixed(4) + ')';
      if (sceny.length === 2) {
        sceny[0].classList.toggle('on', t < .5);
        sceny[1].classList.toggle('on', t >= .5);
      }
    }

    gsap ? gsap.ticker.add(function () { kadrit(0); })
          : (function loop() { kadrit(0); requestAnimationFrame(loop); })();

    razmer();
    posterKadr();
    window.addEventListener('resize', function () {
      var novaya = window.innerWidth < 640 ? 'm' : 'd';
      tolkoe = window.innerWidth < 900;
      if (novaya !== setka) {
        setka = novaya;
        kadry = new Array(VSEGO);
        nakach = 0; nakachano = 0;
        posterKadr();
        for (var j = 0; j < VSEGO; j += 8) zagruzit(j);
        setTimeout(porciya, 250);
      }
      razmer();
    });

    /* заголовок первой сцены собирается из маски один раз */
    if (gsap && !ТИХО) {
      var stroki = document.querySelectorAll('.kino-panel[data-panel="1"] .kino-zag .stroka > span');
      gsap.set(stroki, { yPercent: 108 });
      gsap.to(stroki, { yPercent: 0, duration: 1.25, ease: 'expo.out', stagger: .1, delay: .25 });
    }

    /* магнит под мышью у главных кнопок превращения */
    if (gsap && !ТИХО && window.matchMedia('(hover: hover) and (min-width: 900px)').matches) {
      Array.prototype.forEach.call(document.querySelectorAll('.kino-panel .knopka'), function (kn) {
        var gx = gsap.quickTo(kn, 'x', { duration: .45, ease: 'power3' });
        var gy = gsap.quickTo(kn, 'y', { duration: .45, ease: 'power3' });
        kn.addEventListener('mousemove', function (e) {
          var r = kn.getBoundingClientRect();
          gx((e.clientX - r.left - r.width / 2) * .28);
          gy((e.clientY - r.top - r.height / 2) * .5);
        });
        kn.addEventListener('mouseleave', function () { gx(0); gy(0); });
      });
    }
  }

  /* ---------- отзыв: слова светлеют по мере чтения ---------- */
  var rep = document.getElementById('otzyvyRep');
  if (rep && gsap && ST && !ТИХО) {
    var tekst = rep.textContent.trim();
    var slova = tekst.split(/\s+/).map(function (s) {
      return '<span class="sl">' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>';
    }).join(' ');
    rep.innerHTML = slova;
    gsap.fromTo(rep.querySelectorAll('.sl'), { opacity: .55, y: 18 }, {
      opacity: 1, y: 0, ease: 'none', stagger: .05,
      scrollTrigger: { trigger: rep, start: 'top 88%', end: 'bottom 55%', scrub: true }
    });
  }

  /* ---------- жёлтая линия рисуется по ходу ---------- */
  var nit = document.querySelector('.otzyvy-linia line');
  if (nit && gsap && ST && !ТИХО) {
    var dl = 600;
    try { dl = nit.getTotalLength() || 600; } catch (e) {}
    gsap.fromTo(nit, { strokeDasharray: dl, strokeDashoffset: dl }, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: '.otzyvy-telo', start: 'top 85%', end: 'top 40%', scrub: true }
    });
  }

  /* ---------- меню ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var otkryto = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!otkryto));
      if (otkryto) {
        menu.hidden = true;
        if (lenis) lenis.start();
      } else {
        menu.hidden = false;
        if (lenis) lenis.stop();
      }
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
        if (lenis) lenis.start();
      }
    });
  }

  /* ---------- Esc закрывает меню и отдаёт страницу прокрутке ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !burger || !menu || menu.hidden) return;
    burger.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    if (lenis) lenis.start();
    burger.focus();
  });

  /* ---------- якоря с плавной прокруткой ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    var cel = document.querySelector(id);
    if (!cel) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(cel, { offset: id === '#top' ? 0 : -60, duration: 1.2 });
    else cel.scrollIntoView({ behavior: ТИХО ? 'auto' : 'smooth', block: 'start' });
  });
})();