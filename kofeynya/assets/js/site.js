/* ============================================================
   ЛАМПА: движение и поведение страницы.
   Библиотеки лежат рядом, в assets/js/lib: GSAP, ScrollTrigger,
   SplitText, Flip, Lenis и ogl (шейдеры лучей и текстуры).

   1. плавная прокрутка Lenis
   2. первый экран: лампа включается прокруткой (ScrollTrigger pin+scrub,
      SplitText по буквам, шейдер LightRays), свет идёт из точки лампы
   3. шапка и мобильное меню
   4. меню: переключение разделов (Flip для полоски, crossfade панелей)
      и проявление фото позиции при наведении
   5. пекарня: табло с перелистыванием цифр
   6. магнитные кнопки
   7. текстура обжарки шейдером Grainient
   8. живой статус точек по времени Казани
   9. форма для компаний: заявка уходит в Telegram или письмом
   Всё движение выключено при prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var SplitText = window.SplitText;
  var Flip = window.Flip;
  var Lenis = window.Lenis;
  var FX = window.LAMPA_FX || null;

  var motion = !reduce && !!gsap && !!ScrollTrigger;
  if (motion) {
    gsap.registerPlugin(ScrollTrigger);
    if (SplitText) gsap.registerPlugin(SplitText);
    if (Flip) gsap.registerPlugin(Flip);
  }

  /* ---------- 1. плавная прокрутка ---------- */
  var lenis = null;
  if (motion && Lenis) {
    lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.4
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: id === '#top' ? 0 : -74, duration: 1.15 });
      if (history.replaceState) history.replaceState(null, '', id);
    });
  }

  /* ---------- 2. первый экран: лампа ---------- */
  var hero = document.getElementById('hero');
  var pin = hero ? hero.querySelector('.hero-pin') : null;
  var rays = null;

  if (pin && !motion) {
    pin.style.setProperty('--p', '1');
  }

  if (hero && pin && motion) {
    var raysHost = document.getElementById('hero-rays');
    if (raysHost && FX && FX.createRays && window.innerWidth > 760) {
      rays = FX.createRays(raysHost, {
        origin: 'top-right',
        color: '#E8A94A',
        spread: 1.25,
        length: 2.4,
        speed: 0.55,
        fadeDistance: 1.25,
        saturation: 1.12,
        noise: 0.14,
        distortion: 0.3
      });
    }

    var setP = function (p) {
      pin.style.setProperty('--p', p.toFixed(4));
      pin.style.setProperty('--mr', (5 + 113 * p).toFixed(2) + '%');
      pin.style.setProperty('--ms', (17 + 133 * p).toFixed(2) + '%');
      if (rays) rays.setGlow(Math.max(0, Math.min(1, (p - 0.01) / 0.42)));
    };
    setP(0);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=118%',
        scrub: 0.4,
        pin: pin,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    tl.to({ p: 0 }, {
      p: 1,
      duration: 1,
      ease: 'none',
      onUpdate: function () { setP(this.targets()[0].p); }
    }, 0);

    /* заголовок собирается по буквам при заходе на страницу,
       прокрутка только включает свет: текст наверху всегда читается */
    var head = hero.querySelector('.hero-h');
    var intro = gsap.timeline({ delay: 0.12 });
    if (head && SplitText) {
      var split = new SplitText(head, { type: 'chars', charsClass: 'hchar' });
      intro.from(split.chars, {
        yPercent: 118,
        opacity: 0,
        rotateX: -68,
        transformOrigin: '50% 100%',
        duration: 0.9,
        stagger: 0.045,
        ease: 'power3.out'
      }, 0);
    }
    intro.from(hero.querySelectorAll('.hero-lead, .hero-cta'), {
      y: 28,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out'
    }, 0.22);
    intro.from(hero.querySelector('.hero-foot'), { y: 20, opacity: 0, duration: 0.6 }, 0.42);
  }

  /* ---------- 3. шапка и мобильное меню ---------- */
  var header = document.getElementById('header');
  var burger = document.querySelector('.burger');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 12); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    header.querySelectorAll('.top-nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        header.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }/* ---------- 4. меню: разделы и фото позиции ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.menu-tabs .tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.menu-panels .m-panel'));
  var mark = document.querySelector('.menu-tabs .tab-mark');
  var current = null;

  var setMark = function (tab) {
    if (!mark) return;
    if (!motion || !Flip || !tab) {
      if (tab && mark.parentElement !== tab) tab.appendChild(mark);
      return;
    }
    var state = Flip.getState(mark);
    tab.appendChild(mark);
    Flip.from(state, { duration: 0.5, ease: 'power2.inOut', absolute: true, nested: true });
  };

  var showPanel = function (tab) {
    var next = document.getElementById(tab.getAttribute('aria-controls'));
    tabs.forEach(function (t) {
      var on = t === tab;
      t.classList.toggle('is-on', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    var prev = current;
    current = next;

    if (!next) return;
    if (prev && prev !== next) prev.hidden = true;
    next.hidden = false;

    if (motion) {
      if (prev && prev !== next) {
        gsap.fromTo(prev,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -10, duration: 0.2, ease: 'power1.in', onComplete: function () { prev.hidden = true; } });
      }
      gsap.fromTo(next, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', overwrite: true });
      var rows = next.querySelectorAll('.m-row');
      if (rows.length) {
        gsap.fromTo(rows, { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.035, ease: 'power2.out', overwrite: true, clearProps: 'transform' });
      }
    }
  };

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      if (tab === current) return;
      showPanel(tab);
      setMark(tab);
    });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); showPanel(next); setMark(next); next.focus(); }
    });
  });
  if (tabs[0]) { showPanel(tabs[0]); setMark(tabs[0]); }
  if (motion && tabs[0]) {
    gsap.from(tabs, { opacity: 0, y: 14, duration: 0.5, stagger: 0.06, ease: 'power2.out', delay: 0.1, clearProps: 'all' });
  }

  /* фото позиции проявляется рядом при наведении (только мышь) */
  var preview = document.querySelector('.menu-photo');
  if (preview && fine && !reduce) {
    var pImg = preview.querySelector('img');
    var pCap = preview.querySelector('figcaption');
    var first = preview.dataset.photo;
    var firstCap = preview.dataset.caption || '';
    var cache = {};

    var loadPhoto = function (src) {
      if (cache[src]) return;
      cache[src] = new Image();
      cache[src].src = src;
    };
    panels.forEach(function (p) {
      p.querySelectorAll('.m-row[data-photo]').forEach(function (row) { loadPhoto(row.dataset.photo); });
    });

    var show = function (src, cap) {
      if (!src || src === pImg.getAttribute('src')) {
        if (cap && pCap) pCap.textContent = cap;
        return;
      }
      if (motion) {
        gsap.to(pImg, {
          opacity: 0, y: 12, duration: 0.18, ease: 'power1.in',
          onComplete: function () {
            pImg.src = src;
            gsap.fromTo(pImg, { opacity: 0, y: 16, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
          }
        });
        if (pCap) gsap.to(pCap, { opacity: 0, duration: 0.16, onComplete: function () { pCap.textContent = cap; gsap.to(pCap, { opacity: 1, duration: 0.3 }); } });
      } else {
        pImg.src = src;
        if (pCap) pCap.textContent = cap;
      }
    };

    panels.forEach(function (panel) {
      panel.querySelectorAll('.m-row[data-photo]').forEach(function (row) {
        row.addEventListener('mouseenter', function () {
          show(row.dataset.photo, row.dataset.caption || '');
        });
        row.addEventListener('mouseleave', function () { show(first, firstCap); });
      });
    });
  }

  /* ---------- 5. пекарня: табло с перелистыванием цифр ---------- */
  var flapRoot = document.querySelector('.flap');
  if (flapRoot) {
    var text = flapRoot.dataset.flap || flapRoot.textContent.trim();
    if (motion && ScrollTrigger) {
      var cells = [];
      var line = document.createElement('span');
      line.className = 'flap-line';
      for (var ci = 0; ci < text.length; ci++) {
        var ch = text[ci];
        var cell = document.createElement('span');
        cell.className = 'flap-cell' + (ch === ':' ? ' flap-colon' : '');
        var glyph = document.createElement('span');
        glyph.className = 'flap-glyph';
        glyph.textContent = ch;
        cell.appendChild(glyph);
        line.appendChild(cell);
        cells.push({ cell: cell, glyph: glyph, ch: ch });
      }
      flapRoot.textContent = '';
      flapRoot.appendChild(line);

      var play = function () {
        cells.forEach(function (c, i) {
          if (c.ch === ':') {
            gsap.fromTo(c.cell, { rotateX: -78, opacity: 0.35 }, { rotateX: 0, opacity: 1, duration: 0.6, delay: i * 0.14, ease: 'power2.inOut', transformPerspective: 340 });
            return;
          }
          var target = Number(c.ch);
          var start = (target + 4 + i) % 10;
          var state = { v: 0 };
          gsap.fromTo(c.cell, { rotateX: -78, opacity: 0.35 }, { rotateX: 0, opacity: 1, duration: 0.85, delay: i * 0.14, ease: 'power2.inOut', transformPerspective: 340 });
          gsap.to(state, {
            v: 1, duration: 0.95, delay: i * 0.14, ease: 'power2.inOut',
            onUpdate: function () {
              var p = state.v;
              var idx = p < 0.82 ? (start + Math.floor(p / 0.82 * 9)) % 10 : target;
              c.glyph.textContent = String(idx);
            },
            onComplete: function () { c.glyph.textContent = c.ch; }
          });
        });
      };

      if (flapRoot.closest('li')) {
        ScrollTrigger.create({ trigger: flapRoot, start: 'top 88%', once: true, onEnter: play });
      } else {
        play();
      }
    }
  }

  /* ---------- 6. магнитные кнопки ---------- */
  if (motion && fine) {
    document.querySelectorAll('.btn-accent, .btn-ghost').forEach(function (btn) {
      btn.classList.add('is-magnet');
      var xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' });
      var yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' });
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) / 3.4;
        var dy = (e.clientY - (r.top + r.height / 2)) / 3.4;
        xTo(gsap.utils.clamp(-15, 15, dx));
        yTo(gsap.utils.clamp(-9, 9, dy));
      });
      btn.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
    });
  }

  /* ---------- 7. текстура обжарки ---------- */
  var grainHost = document.getElementById('roast-grain');
  if (grainHost && motion && FX && FX.createGrain) {
    FX.createGrain(grainHost, { color1: '#C8802C', color2: '#6B3A13', color3: '#22150A', zoom: 1.05, cx: -0.06, cy: 0.04 });
  }/* ---------- 8. статус точек по времени Казани ---------- */
  var TZ = 'Europe/Moscow';
  var PHONE = '+7 843 207-41-96';
  var OPEN_WEEKDAY = 7 * 60 + 30;
  var OPEN_WEEKEND = 9 * 60;
  var CLOSE = 21 * 60;
  var WEEKEND = { 'сб': true, 'вс': true };

  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var hhmm = function (m) { return pad(Math.floor(m / 60)) + ':' + pad(m % 60); };

  var kazanNow = function () {
    var parts = new Intl.DateTimeFormat('ru-RU', {
      timeZone: TZ, hourCycle: 'h23', weekday: 'short', hour: '2-digit', minute: '2-digit'
    }).formatToParts(new Date());
    var out = {};
    parts.forEach(function (p) { out[p.type] = p.value; });
    return { day: out.weekday, minutes: Number(out.hour) * 60 + Number(out.minute) };
  };

  var nextDay = function (day) {
    var order = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    var i = order.indexOf(day);
    if (i < 0) i = 0;
    return order[(i + 1) % 7];
  };

  var statusText = function () {
    var now = kazanNow();
    var open = WEEKEND[now.day] ? OPEN_WEEKEND : OPEN_WEEKDAY;
    var tomorrowOpen = WEEKEND[nextDay(now.day)] ? OPEN_WEEKEND : OPEN_WEEKDAY;

    if (now.minutes < open) {
      return { open: false, text: 'Откроемся в ' + hhmm(open) };
    }
    if (now.minutes >= CLOSE) {
      return { open: false, text: 'Закрыто, откроемся завтра в ' + hhmm(tomorrowOpen) };
    }
    var left = CLOSE - now.minutes;
    if (left <= 60) {
      var mins = left % 5 === 0 ? left : left - (left % 5) + 5;
      return { open: true, text: 'Закроемся через ' + mins + ' мин' };
    }
    return { open: true, text: 'Открыто до ' + hhmm(CLOSE) };
  };

  var paintStatus = function () {
    var s = statusText();
    document.querySelectorAll('[data-status]').forEach(function (el) {
      el.textContent = s.text;
      el.classList.toggle('is-shut', !s.open);
    });
  };
  paintStatus();
  window.setInterval(paintStatus, 30000);

  /* ---------- 9. форма для компаний ---------- */
  var form = document.getElementById('biz-form');
  if (form) {
    var dateField = document.getElementById('f-date');
    var today = new Date(Date.now() + (new Date().getTimezoneOffset() + 180) * 60000);
    dateField.min = today.toISOString().slice(0, 10);
    if (!dateField.value) dateField.value = dateField.min;

    var fail = function (id, message) {
      var field = document.getElementById(id);
      var box = field.closest('.field');
      box.classList.add('is-bad');
      var err = box.querySelector('[data-err-for]');
      if (err) err.textContent = message;
      field.setAttribute('aria-invalid', 'true');
    };
    var clear = function () {
      form.querySelectorAll('.field').forEach(function (box) {
        box.classList.remove('is-bad');
        var err = box.querySelector('[data-err-for]');
        if (err) err.textContent = '';
        var input = box.querySelector('input, textarea');
        if (input) input.removeAttribute('aria-invalid');
      });
    };
    var value = function (id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };
    var digits = function (s) { return s.replace(/\D/g, ''); };

    var validate = function () {
      clear();
      var ok = true;
      if (value('f-name').length < 2) { fail('f-name', 'Напишите, как к вам обращаться'); ok = false; }
      if (digits(value('f-phone')).length < 10) { fail('f-phone', 'Нужен телефон из 11 цифр, мы перезвоним'); ok = false; }
      var people = Number(value('f-people'));
      if (!people || people < 8) { fail('f-people', 'Собираем стол от 8 человек'); ok = false; }
      if (!value('f-date')) { fail('f-date', 'Выберите дату'); ok = false; }
      else if (value('f-date') < dateField.min) { fail('f-date', 'Дата уже прошла, выберите новую'); ok = false; }
      if (!ok) {
        var bad = form.querySelector('.field.is-bad input, .field.is-bad textarea');
        if (bad) bad.focus();
      }
      return ok;
    };

    var buildText = function () {
      var lines = [
        'Здравствуйте! Заявка на кофе-брейк с сайта.',
        'Имя: ' + value('f-name'),
        'Телефон: ' + value('f-phone'),
        'Человек: ' + value('f-people'),
        'Дата: ' + value('f-date'),
        'Комментарий: ' + (value('f-note') || 'без комментария')
      ];
      return lines.join('\n');
    };

    var status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) {
        status.textContent = 'Проверьте отмеченные поля, потом нажмите кнопку ещё раз.';
        return;
      }
      var text = buildText();
      var url = 'https://t.me/share/url?url=' + encodeURIComponent('https://lampa-kzn.ru') +
        '&text=' + encodeURIComponent(text);
      var win = window.open(url, '_blank', 'noopener');
      if (!win) window.location.href = url;
      status.textContent = 'Открыли Telegram с текстом заявки. Если окно не открылось, позвоните по ' + PHONE + '.';
    });

    document.getElementById('btn-mail').addEventListener('click', function () {
      if (!validate()) {
        status.textContent = 'Проверьте отмеченные поля, потом нажмите кнопку ещё раз.';
        return;
      }
      var subject = 'Кофе-брейк, ' + value('f-date') + ', ' + value('f-people') + ' человек';
      window.location.href = 'mailto:zakaz@lampa-kzn.ru?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(buildText());
      status.textContent = 'Открыли письмо с готовой заявкой на zakaz@lampa-kzn.ru.';
    });
  }

  /* пересчёт при изменении ширины: маска, сцена и точки прилипания */
  if (motion) {
    var refresh = function () { ScrollTrigger.refresh(); };
    window.addEventListener('resize', refresh);
    window.addEventListener('load', refresh);
  }
})();