/* Северсталькон: камера по кадрам, сцены, выноски, заставка, заявка. Без
   библиотек кроме локальных lenis, gsap и ScrollTrigger. Начальное состояние
   анимаций задаётся только здесь, в CSS начальных transform и dashoffset нет. */
(function () {
  'use strict';

  var KADRY = {
    fps: 12,
    kadrov: 233,
    sceny: [1, 66, 113],
    imena: ['КАРКАС ЦЕХА', 'СВАРНОЙ ШОВ', 'ЦЕХ С ВЫСОТЫ']
  };
  /* окна текста по кадрам: появление, уход */
  var OKNA = [
    [-20, 0, 44, 55],
    [69, 77, 99, 109],
    [118, 130, 200, 222]
  ];

  var тряс = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var G = window.gsap || null;
  var ST = window.ScrollTrigger || null;
  var lenis = null;

  /* Плавная прокрутка и ScrollTrigger --------------------------------- */

  if (!тряс && window.Lenis && G && ST) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true, touchMultiplier: 1.1 });
    lenis.on('scroll', ST.update);
    G.ticker.add(function (t) { lenis.raf(t * 1000); });
    G.ticker.lagSmoothing(0);
  }
  ST && setTimeout(function () { ST.refresh(); }, 400);

  /* КИНО ---------------------------------------------------------------- */

  var scena = document.querySelector('[data-kino]');
  if (scena) {
    var holst = scena.querySelector('.kino-holst');
    var poster = scena.querySelector('.kino-poster');
    var polosa = scena.querySelector('[data-polosa]');
    var zagruzka = scena.querySelector('[data-zagruzka]');
    var nomerEl = scena.querySelector('[data-nomer]');
    var imenaEl = scena.querySelector('[data-imena]');
    var zakras = scena.querySelector('[data-zakras]');
    var delki = scena.querySelectorAll('[data-del]');
    var sceny = scena.querySelectorAll('.scena');

    var ctx = holst.getContext('2d', { alpha: false });
    var portret = matchMedia('(orientation: portrait)').matches;
    var kadry = new Array(KADRY.kadrov + 1);
    var ochered = [], zanyato = 0, gruzeno = 0, pervaiaVolna = 0, vseGotovo = false;
    var shirina = 0, vysota = 0;
    var cel = 0, tek = 0, risovatSnova = true, posledniiKadr = -1, posledniaiaScena = -1;
    var parallaks = 0;

    for (var d = 0; d < delki.length; d++) {
      var nomerDelki = KADRY.sceny[d + 1] / KADRY.kadrov;
      delki[d].style.left = (nomerDelki * 100).toFixed(2) + '%';
    }

    function pust(kadr) {
      return (portret ? 'assets/kino/m/' : 'assets/kino/d/') +
        (kadr < 10 ? '000' : kadr < 100 ? '00' : kadr < 1000 ? '0' : '') + kadr + '.webp';
    }

    function razmerit() {
      var r = scena.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      shirina = Math.max(1, Math.round(r.width));
      vysota = Math.max(1, Math.round(r.height));
      holst.width = Math.round(shirina * dpr);
      holst.height = Math.round(vysota * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      risovatSnova = true;
      linii();
    }

    /* ЛИНИИ-ВЫНОСКИ: от точки кадра к подписи, длина и плечо по размерам.
       Геометрия пересчитывается при перевёрстке, а не задана вручную. */

    function linii() {
      for (var i = 0; i < sceny.length; i++) {
        var set = sceny[i].querySelector('.vynos-set');
        if (!set || !set.offsetParent) continue;
        var svg = set.querySelector('.vynos-linii');
        var tochki = set.querySelectorAll('.tochka');
        var podpisi = sceny[i].querySelectorAll('.vynos');
        if (!svg || !tochki.length) continue;
        var puti = svg.querySelectorAll('.vynos-liniya');
        var sr = set.getBoundingClientRect();
        if (!sr.width || !sr.height) continue;
        for (var k = 0; k < tochki.length && k < puti.length; k++) {
          var podpis = podpisi[k];
          if (!podpis) continue;
          var kr = tochki[k].getBoundingClientRect();
          var pr = podpis.getBoundingClientRect();
          if (!pr.width || !pr.height || !kr.width) continue;
          var tochkaX = (kr.left + kr.width / 2 - sr.left) / sr.width * 1000;
          var tochkaY = (kr.top + kr.height / 2 - sr.top) / sr.height * 1000;
          var levo = pr.right - sr.left < sr.width / 2;
          var ux = (levo ? pr.right : pr.left) - sr.left;
          var uy = pr.top + Math.min(pr.height * 0.32, 38) - sr.top;
          ux = ux / sr.width * 1000;
          uy = uy / sr.height * 1000;
          var plecho = levo ? 46 : -46;
          puti[k].setAttribute('d',
            'M' + tochkaX.toFixed(1) + ' ' + tochkaY.toFixed(1) +
            ' L' + (ux + plecho).toFixed(1) + ' ' + uy.toFixed(1) +
            ' L' + ux.toFixed(1) + ' ' + uy.toFixed(1));
        }
      }
    }

    function kachat() {
      while (zanyato < 6 && ochered.length) {
        var nomer = ochered.shift();
        zanyato++;
        var img = new Image();
        img.decoding = 'async';
        var sosed = nomer % 8 === 0;
        img.onload = function () {
          gruzeno++;
          if (sosed) pervaiaVolna++;
          zanyato--;
          if (polosa) polosa.style.transform = 'scaleX(' + (gruzeno / KADRY.kadrov).toFixed(3) + ')';
          kachat();
          if (!vseGotovo && (gruzeno === KADRY.kadrov || (!ochered.length && !zanyato))) {
            vseGotovo = true;
            if (zagruzka) zagruzka.classList.add('gotov');
          }
        };
        img.onerror = function () { zanyato--; kachat(); };
        img.src = pust(nomer);
        kadry[nomer] = img;
      }
    }

    function начать() {
      ochered = [];
      kadry = new Array(KADRY.kadrov + 1);
      gruzeno = 0; pervaiaVolna = 0; zanyato = 0; vseGotovo = false;
      for (var i = 8; i <= KADRY.kadrov; i += 8) ochered.push(i);
      for (var j = 1; j <= KADRY.kadrov; j++) if (j % 8 !== 0) ochered.push(j);
      poster.style.opacity = '1';
      holst.classList.remove('gotov');
      kachat();
    }

    function выбратьПортрет() {
      var b = matchMedia('(orientation: portrait)').matches;
      if (b === portret) return;
      portret = b;
      poster.src = portret ? 'assets/kino/poster-m.jpg' : 'assets/kino/poster-d.jpg';
      начать();
    }

    matchMedia('(orientation: portrait)').addEventListener
      ? matchMedia('(orientation: portrait)').addEventListener('change', выбратьПортрет)
      : 0;

    function ближайший(nomer) {
      if (kadry[nomer]) return nomer;
      for (var raz = 1; raz < KADRY.kadrov; raz++) {
        if (kadry[nomer - raz] && nomer - raz > 0) return nomer - raz;
        if (kadry[nomer + raz] && nomer + raz <= KADRY.kadrov) return nomer + raz;
      }
      return 0;
    }

    function pozh(p, a, b, c, d) {
      if (p <= a || p >= d) return 0;
      if (p < b) return (p - a) / (b - a);
      if (p > c) return (d - p) / (d - c);
      return 1;
    }

    function vidSceny(p) {
      for (var i = 0; i < sceny.length; i++) {
        var v = pozh(p, OKNA[i][0], OKNA[i][1], OKNA[i][2], OKNA[i][3]);
        var el = sceny[i];
        if (el.style.opacity !== v.toFixed(3)) {
          el.style.opacity = v.toFixed(3);
          el.style.transform = 'translate3d(0,' + ((1 - v) * 26).toFixed(2) + 'px,0)';
        }
        if (v > 0.35 && el.dataset.pokazana !== '1') {
          el.dataset.pokazana = '1';
          if (!тряс && G) {
            G.fromTo(el.querySelectorAll('.stroka > span'),
              { yPercent: 108 },
              { yPercent: 0, duration: 1.15, ease: 'expo.out', stagger: 0.085, overwrite: true });
            G.fromTo(el.querySelectorAll('.vynos'),
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.15, delay: 0.18, overwrite: true });
            G.fromTo(el.querySelectorAll('.vynos-liniya'),
              { strokeDashoffset: 1 },
              { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut', stagger: 0.15, delay: 0.34, overwrite: true });
          }
        }
        /* выноски приходят по очереди после заголовка сцены */
        var vynoski = el.querySelectorAll('.vynos');
        for (var k = 0; k < vynoski.length; k++) {
          if (vynoski[k].dataset.pokazana === '1') continue;
          var a = OKNA[i][1] + 3 + k * 5, b2 = a + 8;
          var c2 = Math.max(b2 + 4, OKNA[i][2] - 7 + k * 3), d2 = c2 + 10;
          if (pozh(p, a, b2, c2, d2) > 0.35) vynoski[k].dataset.pokazana = '1';
        }
      }
    }

    function кадрДля(nomer) {
      var n = ближайший(Math.max(1, Math.min(KADRY.kadrov, Math.round(nomer))));
      if (!n) return;
      var img = kadry[n];
      if (!img || !img.complete || !img.naturalWidth) return;
      var s = Math.max(shirina / img.naturalWidth, vysota / img.naturalHeight) * (1 + parallaks);
      var w = img.naturalWidth * s, h = img.naturalHeight * s;
      ctx.drawImage(img, (shirina - w) / 2, (vysota - h) / 2, w, h);
      if (n === Math.round(cel) + 1 || gruzeno < KADRY.kadrov) {
        if (!holst.classList.contains('gotov')) holst.classList.add('gotov');
        if (poster.style.opacity !== '0') poster.style.opacity = '0';
      }
    }

    function shag() {
      if (тряс) { tek = cel * (KADRY.kadrov - 1); }
      else { tek += (cel * (KADRY.kadrov - 1) - tek) * 0.14; }
      parallaks = 0.035 * (tek / (KADRY.kadrov - 1));
      vidSceny(tek);
      var n = Math.round(tek);
      if (risovatSnova || n !== posledniiKadr) { кадрДля(n); posledniiKadr = n; risovatSnova = false; }
      if (nomerEl) nomerEl.textContent = (n < 10 ? '00' : n < 100 ? '0' : '') + n + ' / ' + KADRY.kadrov;
      if (zakras) zakras.style.transform = 'scaleX(' + (tek / (KADRY.kadrov - 1)).toFixed(4) + ')';
      var si = 0;
      while (si < 2 && n >= KADRY.sceny[si + 1]) si++;
      if (si !== posledniaiaScena && imenaEl) {
        posledniaiaScena = si;
        imenaEl.textContent = KADRY.imena[si];
      }
    }

    function progressKino() {
      var r = scena.parentElement.getBoundingClientRect();
      var vys = window.innerHeight || document.documentElement.clientHeight;
      var p = -r.top / Math.max(1, r.height - vys);
      return Math.max(0, Math.min(1, p));
    }

    razmerit();
    начать();
    if (G && !тряс) {
      /* линии спрятаны до своей очереди: dashoffset ставит скрипт, в CSS его нет */
      G.set(scena.querySelectorAll('.vynos-liniya'), { strokeDasharray: 1, strokeDashoffset: 1 });
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { linii(); });

    if (ST) {
      ST.create({
        trigger: '.kino',
        start: 'top top',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
        onUpdate: function (self) { cel = self.progress; },
        onRefresh: function (self) { cel = self.progress; razmerit(); }
      });
    } else {
      cel = progressKino();
    }

    if (G && !тряс) G.ticker.add(function () { shag(); });
    else {
      (function vloop() { shag(); requestAnimationFrame(vloop); })();
    }
    var perezklad = null;
    function pereklad() {
      clearTimeout(perezklad);
      perezklad = setTimeout(function () { razmerit(); linii(); }, 120);
    }
    window.addEventListener('resize', function () { razmerit(); linii(); });
    window.addEventListener('orientationchange', function () { setTimeout(function () { razmerit(); выбратьПортрет(); }, 220); });
    window.addEventListener('load', function () { pereklad(); });
  }

  /* ЗАСТАВКА ------------------------------------------------------------ */

  var zastavka = document.getElementById('zastavka');
  if (zastavka) {
    var videli = false;
    try { videli = sessionStorage.getItem('ss-zastavka') === '1'; } catch (e) { videli = false; }
    if (videli || тряс || !G) {
      zastavka.classList.add('gotov');
    } else {
      try { sessionStorage.setItem('ss-zastavka', '1'); } catch (e) { videli = true; }
      var liniya = zastavka.querySelector('[data-liniya]');
      if (liniya) G.to(liniya, { scaleX: 1, duration: 1.2, ease: 'power2.inOut' });
      var cifry = zastavka.querySelectorAll('.zastavka-god span');
      Array.prototype.forEach.call(cifry, function (c, i) {
        var finale = c.textContent; /* цифра уже в HTML, скрипт только проигрывает */
        var taymer = setInterval(function () {
          c.textContent = String(Math.floor(Math.random() * 10));
        }, 52 + i * 20);
        setTimeout(function () {
          clearInterval(taymer);
          c.textContent = finale;
          G.fromTo(c, { yPercent: -14 }, { yPercent: 0, duration: 0.5, ease: 'power3.out' });
        }, 460 + i * 120);
      });
      setTimeout(function () {
        G.to(zastavka, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.95,
          ease: 'expo.inOut',
          onComplete: function () { zastavka.classList.add('gotov'); zastavka.remove(); }
        });
      }, 1500);
    }
  }

  /* ЯКОРЯ --------------------------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      var cel = document.querySelector(id);
      if (!cel) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(cel, { duration: 1.3 });
      else cel.scrollIntoView({ block: 'start' });
    });
  });

  /* ЗАЯВКА ПИСЬМОМ ------------------------------------------------------ */

  var forma = document.querySelector('.zayavka .zf-forma');
  if (forma) {
    var otvet = forma.querySelector('.zf-otvet');
    forma.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!forma.reportValidity()) return;
      var el = forma.elements;
      var tip = el.tip.value, ves = el.ves.value.trim(), gorod = el.gorod.value.trim(), tel = el.telefon.value.trim();
      var pismo = 'Здравствуйте. Нужна конструкция: ' + tip + '.\nВес или площадь: ' + ves +
        '.\nГород поставки: ' + gorod + '.\nТелефон для ответа: ' + tel + '.\n\nЧертежи пришлю письмом после ответа по расчёту.';
      var ssylka = 'mailto:zakaz@severstalkon.ru?subject=' +
        encodeURIComponent('Расчёт: ' + tip + ', ' + gorod) + '&body=' + encodeURIComponent(pismo);
      window.location.href = ssylka;
      if (otvet) otvet.textContent = 'Открываем письмо. Если почта не открылась, позвоните +7 (8202) 49-17-60.';
    });
  }

  /* ПОЯВЛЕНИЕ ЗНАКА В ЗАЯВКЕ -------------------------------------------- */

  var znak = document.querySelector('[data-znak]');
  if (znak && ST && G && !тряс) {
    ST.create({
      trigger: znak,
      start: 'top bottom-=40',
      once: true,
      onEnter: function () {
        G.fromTo(znak, { yPercent: 26, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.2, ease: 'expo.out' });
      }
    });
  }
})();