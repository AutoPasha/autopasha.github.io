/* ============================================================
   Сезон: движение и поведение сайта.
   Библиотеки подключены локально: GSAP + ScrollTrigger + SplitText
   + Lenis. Если их нет или движение выключено, сайт остаётся
   рабочим: сезоны листаются обычным слушателем прокрутки, блоки
   просто показываются.
   1. Плавная прокрутка Lenis и его связка со ScrollTrigger.
   2. Первый экран: год листается на прокрутке (scrub), кадры
      сменяются через точечную маску (Halftone/PixelTransition).
   3. Меню: названия блюд проявляются по словам (SplitText),
      рядом с блюдом всплывает его кадр.
   4. Магнитные кнопки.
   5. Лента кадров про шефа едет вбок на прокрутке (pin + scrub).
   6. Открыто сейчас, бронь в Telegram, мобильное меню.
   ============================================================ */
(function () {
  'use strict';

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduced = motionQuery.matches;
  var hasGsap = typeof window.gsap !== 'undefined';
  var hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';
  var gsap = hasGsap ? window.gsap : null;
  var ST = hasST ? window.ScrollTrigger : null;
  var lenis = null;

  if (hasGsap && ST) gsap.registerPlugin(ST);
  if (hasST && window.SplitText) gsap.registerPlugin(window.SplitText);

  /* ---------- 1. Плавная прокрутка ---------- */
  if (!reduced && typeof window.Lenis === 'function') {
    lenis = new window.Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.4
    });
    if (hasGsap && ST) {
      lenis.on('scroll', ST.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      var rafLoop = function (time) { lenis.raf(time); requestAnimationFrame(rafLoop); };
      requestAnimationFrame(rafLoop);
    }

    /* Якорные ссылки через Lenis: прыжок не обрывается на середине */
    document.addEventListener('click', function (ev) {
      var a = ev.target.closest ? ev.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      lenis.scrollTo(target, { offset: id === '#top' ? 0 : -70, duration: 1.15 });
      if (history.replaceState) history.replaceState(null, '', id);
    });
  }

  /* ---------- 2. Первый экран: сезоны и точечная смена кадров ---------- */
  var SEASONS = ['autumn', 'winter', 'spring', 'summer'];
  var MENU_NAME = { autumn: 'Меню осени', winter: 'Меню зимы', spring: 'Меню весны', summer: 'Меню лета' };

  var hero = document.querySelector('[data-hero]');
  var scenes = [].slice.call(document.querySelectorAll('.scene'));
  var lines = [].slice.call(document.querySelectorAll('.hero-line'));
  var tabs = [].slice.call(document.querySelectorAll('[data-season-btn]'));
  var bar = document.getElementById('seasonBar');
  var menuName = document.querySelector('.menu-season-name');
  var mask = document.querySelector('[data-mask]');
  var mctx = mask && mask.getContext ? mask.getContext('2d') : null;
  var current = -1;
  var tw = null;          /* текущая анимация маски */
  var maskOn = false;

  function cssWidth(el, prop) { return el ? parseFloat(getComputedStyle(el)[prop]) : 0; }

  function sizeMask() {
    if (!mask) return;
    var w = Math.max(1, Math.round(mask.clientWidth));
    var h = Math.max(1, Math.round(mask.clientHeight));
    /* Рисуем в половинном разрешении: точек много, разницы не видно */
    mask.width = Math.round(w * 0.5);
    mask.height = Math.round(h * 0.5);
  }
  if (mask) {
    sizeMask();
    window.addEventListener('resize', sizeMask);
  }

  /* Рисуем входящий кадр и стираем его точечной маской, точки
     расходятся от правой трети, где в кадре свет и тарелка. */
  function drawMask(t, img) {
    if (!mctx || !img || !img.naturalWidth) return;
    var mw = mask.width, mh = mask.height;
    mctx.setTransform(1, 0, 0, 1, 0, 0);
    mctx.globalCompositeOperation = 'source-over';
    mctx.clearRect(0, 0, mw, mh);

    var pos = getComputedStyle(img).objectPosition.split(' ');
    var px = parseFloat(pos[0]) / 100 || 0.5;
    var py = pos.length > 1 ? (parseFloat(pos[1]) / 100 || 0.5) : 0.5;

    var iw = img.naturalWidth, ih = img.naturalHeight;
    var s = Math.max(mw / iw, mh / ih);
    var dw = iw * s, dh = ih * s;
    mctx.drawImage(img, (mw - dw) * px, (mh - dh) * py, dw, dh);

    var cols = mw < 520 ? 20 : 30;
    var rows = Math.max(8, Math.round(cols * mh / mw));
    var cw = mw / cols, chh = mh / rows;
    var cx = mw * 0.74, cy = mh * 0.42;
    var diag = Math.sqrt(cw * cw + chh * chh);

    mctx.globalCompositeOperation = 'destination-out';
    mctx.fillStyle = '#000';
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = (c + 0.5) * cw, y = (r + 0.5) * chh;
        var d = Math.sqrt(Math.pow((x - cx) / mw, 2) + Math.pow((y - cy) / mh, 2));
        var delay = d * 0.4;
        var p = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
        var e = p * p * (3 - 2 * p);
        var rad = e * diag * 0.62;
        if (rad < 0.4) continue;
        mctx.beginPath();
        mctx.arc(x, y, rad, 0, Math.PI * 2);
        mctx.fill();
      }
    }
    mctx.globalCompositeOperation = 'source-over';
  }

  function clearMask() {
    if (!mctx) return;
    mctx.setTransform(1, 0, 0, 1, 0, 0);
    mctx.clearRect(0, 0, mask.width, mask.height);
    mask.classList.remove('on');
    maskOn = false;
  }

  /* Финиш: точками проявляется новый кадр, он же встаёт в фон */
  function swapTo(i) {
    scenes.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
    clearMask();
  }

  function runMask(i, prev) {
    var img = scenes[i] && scenes[i].querySelector('img');
    if (!mctx || !img) { swapTo(i); return; }
    /* Если гость листает быстро: показываем кадр, на котором остановились,
       и начинаем новую смену с него, а не с начала предыдущей точки. */
    if (tw) { tw.kill(); tw = null; hero.classList.remove('is-mask'); swapTo(prev); }
    hero.classList.add('is-mask');
    mask.classList.add('on');
    maskOn = true;
    drawMask(0, img);
    var st = { t: 0 };
    var finish = function () {
      tw = null;
      hero.classList.remove('is-mask');
      swapTo(i);
    };
    if (gsap) {
      tw = gsap.to(st, {
        t: 1, duration: 0.9, ease: 'power2.inOut',
        onUpdate: function () { drawMask(st.t, img); },
        onComplete: finish
      });
    } else {
      var t0 = performance.now();
      var step = function (now) {
        var p = Math.min(1, (now - t0) / 900);
        var e = p * p * (3 - 2 * p);
        drawMask(e, img);
        if (p < 1) requestAnimationFrame(step); else finish();
      };
      requestAnimationFrame(step);
    }
  }

  function setSeason(i, fill) {
    i = Math.max(0, Math.min(3, i));
    if (i === current) {
      if (bar) bar.style.transform = 'scaleX(' + Math.max(0.06, fill).toFixed(3) + ')';
      return;
    }
    var first = current === -1;
    var prev = current;
    current = i;
    var name = SEASONS[i];
    document.documentElement.setAttribute('data-season', name);
    if (first || !maskOn) {
      scenes.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
    }
    lines.forEach(function (l, k) { l.classList.toggle('is-on', k === i); });
    tabs.forEach(function (t, k) {
      t.classList.toggle('is-on', k === i);
      t.setAttribute('aria-selected', k === i ? 'true' : 'false');
    });
    if (menuName) menuName.textContent = MENU_NAME[name];
    if (bar) bar.style.transform = 'scaleX(' + Math.max(0.06, fill).toFixed(3) + ')';
    if (!first && mctx) runMask(i, prev);
  }

  if (hero) {
    if (reduced || !hasST) {
      /* Без ScrollTrigger и без движения: год не листается, показан один кадр */
      setSeason(0, 1);
      if (!reduced) {
        var plain = function () {
          var span = hero.offsetHeight - window.innerHeight;
          if (span <= 0) return;
          var p = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / span));
          setSeason(Math.min(3, Math.floor(p * 4)), p * 4 - Math.floor(p * 4));
        };
        window.addEventListener('scroll', plain, { passive: true });
        window.addEventListener('resize', plain);
        plain();
      }
    } else {
      ST.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: function (self) {
          var p = self.progress;
          var idx = Math.min(3, Math.floor(p * 4));
          setSeason(idx, p * 4 - idx);
        }
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        setSeason(i, 1);
        if (reduced) return;
        var top = hero.offsetTop + (hero.offsetHeight - window.innerHeight) * (i / 4 + 0.02);
        if (lenis) lenis.scrollTo(top, { duration: 1.2 });
        else window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }
/* ---------- 3. Меню осени: слова и кадр блюда ---------- */
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var wordMap = new Map();

  if (gsap && window.SplitText && !reduced) {
    [].slice.call(document.querySelectorAll('.dish h4')).forEach(function (h) {
      var split = new window.SplitText(h, { type: 'words', mask: 'words' });
      gsap.set(split.words, { opacity: 0, yPercent: 80 });
      wordMap.set(h.closest('.dish'), split.words);
    });
  }

  var peek = document.querySelector('[data-peek]');
  if (peek && canHover && !reduced && gsap) {
    var pk = peek.querySelector('img');
    var peekX = gsap.quickTo(peek, 'x', { duration: 0.5, ease: 'power3' });
    var peekY = gsap.quickTo(peek, 'y', { duration: 0.5, ease: 'power3' });
    var peekShown = false;          // кадр сейчас на экране
    var peekArmed = false;          // курсор уже двигался внутри строки меню
    var peekCX = 0, peekCY = 0;     // последние координаты курсора
    var peekScrollAt = -1e9;        // когда было последнее событие прокрутки

    /* Стартовая точка за экраном и нулевая прозрачность: пока
       координат нет, кадр не может вылезти в угол поверх логотипа. */
    gsap.set(peek, {
      autoAlpha: 0, scale: 0.92, xPercent: -50, yPercent: -50,
      x: window.innerWidth + 180, y: window.innerHeight + 180
    });

    function peekPlace(cx, cy) {
      var w = peek.offsetWidth, h = peek.offsetHeight;
      var x = cx + w / 2 + 40;
      if (x + w / 2 > window.innerWidth - 18) x = cx - w / 2 - 40;
      x = Math.max(w / 2 + 14, Math.min(window.innerWidth - w / 2 - 14, x));
      var y = Math.max(h / 2 + 14, Math.min(window.innerHeight - h / 2 - 14, cy));
      return { x: x, y: y };
    }

    /* Показываем только после первого mousemove в строке и только
       там, где курсор был в последний раз. */
    function peekShow(dish) {
      if (!peekArmed) return;
      if (performance.now() - peekScrollAt < 160) return;   // едем на колесе: кадр ждёт
      var src = dish.getAttribute('data-shot');
      if (!src) return;
      if (pk.getAttribute('src') !== src) pk.setAttribute('src', src);
      if (!peekShown) {
        peekShown = true;
        var p = peekPlace(peekCX, peekCY);
        gsap.killTweensOf(peek);
        gsap.set(peek, { x: p.x, y: p.y });
        gsap.to(peek, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'power3.out' });
      }
    }

    function peekMove(e, dish) {
      peekArmed = true;
      peekCX = e.clientX;
      peekCY = e.clientY;
      if (!peekShown) { peekShow(dish); return; }
      var p = peekPlace(e.clientX, e.clientY);
      peekX(p.x);
      peekY(p.y);
    }

    function peekHide() {
      peekArmed = false;
      if (!peekShown) return;
      peekShown = false;
      gsap.killTweensOf(peek);
      gsap.to(peek, { autoAlpha: 0, scale: 0.92, duration: 0.3, ease: 'power2.out' });
    }

    function peekOnScroll() {
      peekScrollAt = performance.now();
      peekHide();
    }

    [].slice.call(document.querySelectorAll('.dish[data-shot]')).forEach(function (dish) {
      dish.addEventListener('mousemove', function (e) { peekMove(e, dish); }, { passive: true });
      dish.addEventListener('mouseleave', peekHide);
    });
    window.addEventListener('scroll', peekOnScroll, { passive: true });
    if (lenis) lenis.on('scroll', peekOnScroll);
  }

  /* ---------- 4. Магнитные кнопки ---------- */
  if (gsap && canHover && !reduced) {
    [].slice.call(document.querySelectorAll('[data-magnet]')).forEach(function (el) {
      var xTo = gsap.quickTo(el, 'x', { duration: 0.55, ease: 'power3' });
      var yTo = gsap.quickTo(el, 'y', { duration: 0.55, ease: 'power3' });
      var pad = 62;

      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        if (Math.abs(dx) < r.width / 2 + pad && Math.abs(dy) < r.height / 2 + pad) {
          xTo(dx / 3.4);
          yTo(dy / 3.4);
        } else {
          xTo(0); yTo(0);
        }
      }, { passive: true });

      el.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
      el.addEventListener('blur', function () { xTo(0); yTo(0); });
    });
  }

  /* ---------- 5. Лента кадров про шефа: рейс в глубину ---------- */
  var stripPin = document.querySelector('[data-strip-pin]');
  var stripTrack = document.querySelector('[data-strip-track]');
  if (stripPin && stripTrack && gsap && ST && !reduced) {
    var mm = gsap.matchMedia();
    mm.add('(min-width: 861px)', function () {
      var items = [].slice.call(stripTrack.children);
      var n = items.length;
      if (!n) return;
      var DEPTH = 250, TURN = 11, OFF = 1.5;

      /* Кадры уходят в глубину по дуге и гаснут, ни один не уезжает
         за края экрана: рельс прокрутки остаётся в ширину окна. */
      function rail(p) {
        var w = items[0].offsetWidth || 340;
        var spread = w * 0.56;
        var travel = n + 3;
        for (var i = 0; i < n; i++) {
          var q = OFF + i - p * travel;
          var a = Math.abs(q);
          var fade = Math.max(0, Math.min(1, (3.5 - a) / 1.3));
          var el = items[i];
          el.style.opacity = fade.toFixed(3);
          el.style.visibility = fade > 0.02 ? 'visible' : 'hidden';
          el.style.transform = 'translate(-50%, -50%) translate3d(' +
            (q * spread).toFixed(1) + 'px, ' + (a * 5).toFixed(1) + 'px, ' +
            (-a * DEPTH).toFixed(1) + 'px) rotateY(' + (-q * TURN).toFixed(2) + 'deg) scale(' +
            Math.max(0.6, 1 - a * 0.075).toFixed(3) + ')';
        }
      }

      rail(0);
      var proxy = { p: 0 };
      var tween = gsap.to(proxy, {
        p: 1,
        ease: 'none',
        onUpdate: function () { rail(proxy.p); },
        scrollTrigger: {
          trigger: stripPin,
          start: 'top top',
          end: '+=' + Math.round(260 + n * 330),
          pin: true,
          scrub: 0.55,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      return function () {
        if (tween.scrollTrigger) tween.scrollTrigger.kill(true);
        tween.kill();
        items.forEach(function (el) { el.style.cssText = ''; });
      };
    });
  }

  /* Шрифты и картинки догрузились: пересчитываем всё, что зависит от ширины */
  if (ST) {
    window.addEventListener('load', function () { ST.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }
/* ---------- 6. Открыто сейчас по Екатеринбургу ---------- */
  var TZ = 'Asia/Yekaterinburg';
  var openState = document.getElementById('openState');
  var dateInput = document.getElementById('bkDate');
  var dateTouched = false;

  function two(n) { return (n < 10 ? '0' : '') + n; }

  /* Дата в поле: дд.мм.гггг. Год можно не писать, берём текущий или следующий. */
  function parseRuDate(raw) {
    var m = /^(\d{1,2})\.(\d{1,2})(?:\.(\d{2,4}))?$/.exec((raw || '').trim());
    if (!m) return null;
    var d = +m[1], mo = +m[2], y = m[3] ? +m[3] : null;
    if (y !== null && y < 100) y += 2000;
    if (y === null) {
      y = new Date().getFullYear();
      if (mo < new Date().getMonth() + 1 || (mo === new Date().getMonth() + 1 && d < new Date().getDate())) y += 1;
    }
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    var probe = new Date(Date.UTC(y, mo - 1, d));
    if (probe.getUTCFullYear() !== y || probe.getUTCMonth() !== mo - 1 || probe.getUTCDate() !== d) return null;
    return y + '-' + two(mo) + '-' + two(d);
  }

  function formatAsTyping(el) {
    var digits = el.value.replace(/\D/g, '').slice(0, 8);
    var out = digits;
    if (digits.length > 4) out = digits.slice(0, 2) + '.' + digits.slice(2, 4) + '.' + digits.slice(4);
    else if (digits.length > 2) out = digits.slice(0, 2) + '.' + digits.slice(2);
    if (out !== el.value) {
      el.value = out;
      var end = (out.match(/\d/g) || []).length;
      try { el.setSelectionRange(end, end); } catch (e) {}
    }
  }

  if (dateInput) {
    dateInput.addEventListener('input', function () {
      dateTouched = true;
      formatAsTyping(dateInput);
    });
  }

  function ekbParts() {
    var fmt = new Intl.DateTimeFormat('ru-RU', {
      timeZone: TZ, weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false
    });
    var parts = {};
    fmt.formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    var dayMap = { 'вс': 0, 'пн': 1, 'вт': 2, 'ср': 3, 'чт': 4, 'пт': 5, 'сб': 6 };
    var dow = typeof dayMap[parts.weekday] === 'number' ? dayMap[parts.weekday] : new Date().getDay();
    return {
      dow: dow,
      minutes: parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10),
      iso: parts.year + '-' + parts.month + '-' + parts.day,
      ru: parts.day + '.' + parts.month + '.' + parts.year
    };
  }

  function paintOpen() {
    if (!openState) return;
    var t = ekbParts();
    var late = (t.dow === 5 || t.dow === 6);
    var open = t.minutes >= 720 && (t.minutes < 1380 || (late && t.minutes < 1500));
    if (open) {
      openState.textContent = late && t.minutes >= 1380 ? 'Открыто сейчас, зал до 01:00' : 'Открыто сейчас, зал до 23:00';
      openState.classList.remove('shut');
    } else {
      openState.textContent = t.minutes < 720 ? 'Закрыто, открываемся в 12:00' : 'Закрыто, откроемся в 12:00';
      openState.classList.add('shut');
    }
    if (dateInput && !dateInput.value && !dateTouched) dateInput.value = t.ru;
  }

  paintOpen();
  setInterval(paintOpen, 60000);
  window.addEventListener('focus', paintOpen);

  /* ---------- 7. Бронь стола в Telegram ---------- */
  var form = document.getElementById('bookForm');
  var msg = document.getElementById('formMsg');
  var CHAT = 'sezon_ekb';

  function setErr(form, name, text) {
    var field = form.querySelector('[name="' + name + '"]');
    if (!field) return;
    var wrap = field.closest('.field');
    var slot = form.querySelector('[data-err="' + name + '"]');
    if (text) {
      wrap.classList.add('bad');
      if (slot) slot.textContent = text;
      field.setAttribute('aria-invalid', 'true');
    } else {
      wrap.classList.remove('bad');
      if (slot) slot.textContent = '';
      field.removeAttribute('aria-invalid');
    }
  }

  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = {
        date: parseRuDate(document.getElementById('bkDate').value),
        time: document.getElementById('bkTime').value,
        guests: document.getElementById('bkGuests').value,
        name: document.getElementById('bkName').value.trim(),
        phone: document.getElementById('bkPhone').value.trim(),
        wish: document.getElementById('bkWish').value.trim()
      };
      var bad = false;
      var t = ekbParts();

      if (!data.date) { setErr(form, 'date', 'Напишите дату в формате дд.мм.гггг, например 18.10.2026'); bad = true; }
      else if (data.date < t.iso) { setErr(form, 'date', 'Дата уже прошла, выберите сегодня или позже'); bad = true; }
      else setErr(form, 'date', '');

      if (!data.time) { setErr(form, 'time', 'Выберите время, зал открыт с 12:00 до 23:00'); bad = true; }
      else setErr(form, 'time', '');

      if (data.name.length < 2) { setErr(form, 'name', 'Напишите имя, как к вам обращаться'); bad = true; }
      else setErr(form, 'name', '');

      if (data.phone.replace(/\D/g, '').length < 10) { setErr(form, 'phone', 'Нужен телефон из 11 цифр, на него позвоним для подтверждения'); bad = true; }
      else setErr(form, 'phone', '');

      if (bad) {
        msg.textContent = 'Проверьте отмеченные поля, сообщение не отправилось.';
        msg.className = 'form-msg bad';
        var first = form.querySelector('.field.bad input, .field.bad select');
        if (first) first.focus();
        return;
      }

      var msgLines = [
        'Бронь стола в бистро Сезон',
        'Дата: ' + data.date.split('-').reverse().join('.'),
        'Время: ' + data.time,
        'Гостей: ' + data.guests,
        'Имя: ' + data.name,
        'Телефон: ' + data.phone
      ];
      if (data.wish) msgLines.push('Пожелания: ' + data.wish);

      msg.textContent = 'Откроется чат с @' + CHAT + ', отправьте сообщение, и мы ответим, пока зал открыт.';
      msg.className = 'form-msg ok';
      window.open('https://t.me/' + CHAT + '?text=' + encodeURIComponent(msgLines.join('\n')), '_blank', 'noopener');
    });

    form.addEventListener('input', function (ev) {
      var field = ev.target.closest('.field');
      if (field && field.classList.contains('bad')) {
        field.classList.remove('bad');
        var slot = field.querySelector('.err');
        if (slot) slot.textContent = '';
        ev.target.removeAttribute('aria-invalid');
      }
    });
  }

  /* ---------- 8. Появление блоков ---------- */
  var reveal = [].slice.call(document.querySelectorAll('.rv, .dish, .sups li, .lunch-list li'));

  function showBlock(el) {
    el.classList.add('in');
    var words = wordMap.get(el);
    if (words && words.length) {
      wordMap.delete(el);
      gsap.to(words, {
        opacity: 1, yPercent: 0, duration: 0.9, stagger: 0.055,
        ease: 'power3.out', overwrite: true
      });
    }
  }

  if (reduced || !('IntersectionObserver' in window)) {
    reveal.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = [].slice.call(el.parentNode.children).filter(function (n) { return reveal.indexOf(n) > -1; });
        var i = siblings.indexOf(el);
        var delay = Math.min(i < 0 ? 0 : i * 55, 320);
        if (siblings.length < 3) delay += 40;
        el.style.transitionDelay = delay + 'ms';
        showBlock(el);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    reveal.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 9. Мобильное меню ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Закрыть меню сайта' : 'Открыть меню сайта');
      document.body.classList.toggle('nav-open', open);
    });
    nav.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'A' || (ev.target.closest && ev.target.closest('a'))) {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }
})();
