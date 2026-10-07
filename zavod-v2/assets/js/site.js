/* ============================================================
   Северсталькон: site.js, круг 3.
   Заставка-табло, первый экран со сварочным швом по слову,
   чертёж к металлу, газетная полоса продукции, тёмная смена цеха,
   журнальная полоса объектов, кадры заказа, заявка как сцена.
   ============================================================ */
(function () {
  'use strict';

  var doc = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var narrow = window.matchMedia('(max-width: 900px)').matches;
  doc.body.classList.remove('no-js');

  /* ---------- Плавная прокрутка ---------- */
  var lenis = null;
  function initLenis() {
    if (reduce || !window.Lenis) return null;
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, touchMultiplier: 1.4, wheelMultiplier: 1 });
    lenis.on('scroll', window.ScrollTrigger.update);
    window.gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    window.gsap.ticker.lagSmoothing(0);
    return lenis;
  }

  /* ---------- Якоря под плавную прокрутку ---------- */
  function anchors() {
    doc.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button) return;
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      var t = doc.querySelector(id);
      if (!t) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(t, { offset: -70, duration: 1.35 });
      else t.scrollIntoView({ block: 'start' });
      if (window.history && window.history.replaceState) window.history.replaceState(null, '', id);
    });
  }

  /* ---------- Заставка: год основания табло ---------- */
  var SEEN = 'ssk-boot-v3';
  function runBoot(done) {
    var boot = doc.getElementById('boot');
    if (!boot) { done(); return; }
    if (reduce) { boot.remove(); done(); return; }

    var flaps = [].slice.call(boot.querySelectorAll('.flap'));
    var seam = boot.querySelector('.boot-seam i');
    var meta = boot.querySelector('.boot-meta');
    var dur = narrow ? 0.62 : 0.86;

    /* начальное состояние задаёт только GSAP: в CSS у цифр нет transform */
    var tl = window.gsap.timeline();
    flaps.forEach(function (f, k) {
      var ftl = window.gsap.timeline();   /* четыре цифры перелистываются одновременно */
      var target = f.getAttribute('data-to');
      f.textContent = '';
      var n = 3 + (k % 3);
      var els = [];
      for (var i = 0; i <= n; i++) {
        var d = (i === n) ? target : String((parseInt(target, 10) + 1 + i + k) % 10);
        var el = doc.createElement('i');
        el.textContent = d;
        f.appendChild(el);
        els.push(el);
      }
      window.gsap.set(els, { yPercent: 100, rotateX: -88, transformOrigin: '50% 0%' });
      window.gsap.set(els[0], { yPercent: 0, rotateX: 0 });
      for (var j = 0; j < els.length - 1; j++) {
        (function (cur, nx) {
          ftl.to(cur, { rotateX: 88, duration: dur * .2, ease: 'power2.in' })
            .set(nx, { yPercent: -100, rotateX: -88, transformOrigin: '50% 0%' }, '<')
            .set(cur, { yPercent: 100 }, '<')
            .to(nx, { yPercent: 0, rotateX: 0, duration: dur * .2, ease: 'power2.out' }, '<');
        })(els[j], els[j + 1]);
      }
      tl.add(ftl, 0);
    });
    if (seam) window.gsap.to(seam, { width: '100%', duration: dur * 1.1, ease: 'power2.inOut' }, 0);
    tl.add(function () {
      window.gsap.to(boot, {
        clipPath: 'inset(0% 0% 100% 0%)', duration: narrow ? .58 : .72, ease: 'expo.inOut',
        onComplete: function () { boot.remove(); done(); }
      });
      if (meta) window.gsap.to(meta, { opacity: 0, duration: .28 });
    }, '>-0.12');
  }

  /* ---------- Слово во всю ширину: кегль по контейнеру ---------- */
  function fitWord() {
    var word = doc.getElementById('hwWord');
    if (!word) return;
    var stage = word.parentNode;

    function fit() {
      var avail = stage.clientWidth;
      if (!avail) return;
      var cs = window.getComputedStyle(word);
      var probe = doc.createElement('span');
      probe.style.cssText = 'position:absolute;left:-9999px;top:0;white-space:pre;';
      probe.style.fontFamily = cs.fontFamily;
      probe.style.fontWeight = cs.fontWeight;
      probe.style.fontSize = '100px';
      probe.style.letterSpacing = cs.letterSpacing;
      probe.style.textTransform = 'uppercase';
      doc.body.appendChild(probe);
      /* на телефоне строка одна, берём самую длинную половину слова */
      var two = window.matchMedia('(max-width: 900px)').matches;
      probe.textContent = two ? 'СТАЛЬКОН' : 'СЕВЕРСТАЛЬКОН';
      var w = probe.getBoundingClientRect().width;
      doc.body.removeChild(probe);
      if (!w) return;
      var size = avail / w * 100 * .975;
      var cap = Math.max(28, Math.min(window.innerHeight * (two ? .085 : .15), two ? 120 : 150));
      word.style.fontSize = Math.min(size, cap) + 'px';
    }
    fit();
    window.addEventListener('resize', function () {
      window.clearTimeout(fit._t);
      fit._t = window.setTimeout(fit, 160);
    });
    if (doc.fonts && doc.fonts.ready && doc.fonts.ready.then) {
      doc.fonts.ready.then(function () { fit(); window.ScrollTrigger && window.ScrollTrigger.refresh(); });
    }
  }

  /* ---------- Первый экран: кадр открывается, слово прошивает шов ---------- */
  function heroIntro() {
    var word = doc.getElementById('hwWord');
    var wrap = word ? word.parentNode : null;
    var seam = doc.getElementById('hwSeam');
    var video = doc.getElementById('heroVideo');
    var place = doc.querySelector('.hero-place');
    var board = doc.querySelector('.hero-board');
    var sub = doc.querySelector('.hero-sub');
    var foot = doc.querySelector('.hero-foot');
    var dim = doc.querySelector('.hero-dim');
    var dimPath = doc.querySelector('.hero-dim .hd-path');
    var sweep = doc.querySelector('.hero-sweep');

    if (reduce) {
      window.gsap.set([sub, place, foot, board, dim], { opacity: 1, y: 0 });
      if (dimPath) dimPath.style.strokeDashoffset = '0';
      if (seam) window.gsap.set(seam, { opacity: 0 });
      if (video) window.gsap.set(video, { clipPath: 'none' });
      return;
    }

    var w = wrap ? wrap.clientWidth : 0;
    if (seam) window.gsap.set(seam, { opacity: 0, x: 0 });
    if (sweep) window.gsap.set(sweep, { xPercent: -14 });

    var tl = window.gsap.timeline();
    /* размерная линия чертежа прочерчивается под заголовком */
    if (dimPath) {
      var dl = dimPath.getTotalLength();
      if (dl) {
        dimPath.style.strokeDasharray = dl;
        dimPath.style.strokeDashoffset = dl;
        tl.to(dimPath, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' }, .5);
      }
    }
    if (dim) {
      var dtx = dim.querySelectorAll('.hero-dim-tx span');
      tl.fromTo(dtx, { opacity: 0 }, { opacity: 1, duration: .6, ease: 'none', stagger: .08 }, .95);
    }
    tl.fromTo(video, { clipPath: 'inset(48% 0% 48% 0%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power3.inOut'
    }, 0);
    tl.fromTo(place, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, .1);
    tl.fromTo(board, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, .2);
    /* внутри h1 только сдвиг: заголовок виден сразу, без opacity */
    tl.fromTo(sub, { y: 28 }, { y: 0, duration: .95, ease: 'power3.out' }, .24);
    tl.fromTo(foot, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, .46);
    /* слово проявляется слева направо, по фронту идёт оранжевый шов */
    tl.fromTo(word, { clipPath: 'inset(0% 100% 0% 0%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', duration: narrow ? .9 : 1.25, ease: 'power3.inOut'
    }, .34);
    if (seam) {
      tl.to(seam, { opacity: 1, duration: .12, ease: 'none' }, .34);
      tl.to(seam, { x: w, duration: narrow ? .9 : 1.25, ease: 'power3.inOut' }, .34);
      tl.to(seam, { opacity: 0, duration: .35, ease: 'power2.in' }, '-=0.12');
    }
    /* световой мазок по кадру проходит один раз, как блик объектива */
    if (sweep) tl.to(sweep, { xPercent: 14, duration: 3.4, ease: 'sine.inOut' }, .2);
    /* медленный зум кадра, как в кино: 1.07 в 1 за 9 секунд */
    tl.fromTo(video, { scale: 1.07 }, { scale: 1, duration: 9, ease: 'none' }, 0);
  }

  /* ---------- Видео и кадр уезжают при прокрутке ---------- */
  function heroParallax() {
    var hero = doc.getElementById('hero');
    var video = doc.getElementById('heroVideo');
    var mid = doc.querySelector('.hero-mid');
    var word = doc.querySelector('.hero-word');
    if (!hero || reduce || !window.ScrollTrigger) return;
    if (video) {
      window.gsap.fromTo(video, { scale: 1.0 }, {
        scale: 1.14, yPercent: 5, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: .5, invalidateOnRefresh: true }
      });
    }
    if (mid) {
      window.gsap.fromTo(mid, { y: 0 }, {
        y: -70, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: .5, invalidateOnRefresh: true }
      });
    }
    if (word) {
      window.gsap.fromTo(word, { y: 0 }, {
        y: -26, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: .5, invalidateOnRefresh: true }
      });
    }
  }

  /* ---------- Живая сводка цеха ---------- */
  function liveBoard() {
    var ton = doc.getElementById('liveTon');
    var time = doc.getElementById('liveTime');
    if (!ton || !time) return;
    var base = 312, cap = 884, t = base;

    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function tick() {
      var now = new Date();
      var target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 40, 0);
      if (now > target) target.setDate(target.getDate() + 1);
      var mins = Math.max(0, Math.floor((target - now) / 60000));
      time.textContent = pad(Math.floor(mins / 60)) + ':' + pad(mins % 60);
    }
    tick();
    window.setInterval(tick, 20000);

    if (reduce) return;
    window.setInterval(function () {
      t += Math.random() < .62 ? 1 : -1;
      if (t > cap) t = base;
      if (t < base) t = base;
      ton.textContent = t;
    }, 2600);
  }

  /* ---------- Шапка и меню ---------- */
  function header() {
    var top = doc.getElementById('top');
    var burger = doc.getElementById('burger');
    var menu = doc.getElementById('menu');
    var last = window.scrollY;
    var ticking = false;

    function frame() {
      var y = window.scrollY;
      top.classList.toggle('solid', y > 60);
      if (y > 520 && y > last + 6) top.classList.add('hide');
      else if (y < last - 6) top.classList.remove('hide');
      last = y;
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(frame); ticking = true; }
    }, { passive: true });

    function setMenu(on) {
      burger.setAttribute('aria-expanded', on ? 'true' : 'false');
      if (on) {
        menu.hidden = false;
        window.requestAnimationFrame(function () { menu.classList.add('on'); });
      } else {
        menu.classList.remove('on');
        window.setTimeout(function () { menu.hidden = true; }, 460);
      }
    }
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ---------- Сцена: чертёж к металлу ---------- */
  function drawScene() {
    var sec = doc.getElementById('certezh');
    if (!sec) return;
    var planBox = sec.querySelector('.draw-plan');
    var plan = sec.querySelector('.plan');
    var linesG = plan.querySelector('.plan-lines');
    var nodesG = plan.querySelector('.plan-nodes');
    var dimsG = plan.querySelector('.plan-dims');
    var scaleG = plan.querySelector('.plan-scale');
    var lines = plan.querySelectorAll('.plan-lines path');
    var dims = plan.querySelectorAll('.plan-dims path');
    var scales = plan.querySelectorAll('.plan-scale path');
    var nodes = plan.querySelectorAll('.plan-node');
    var texts = plan.querySelectorAll('.plan-txt text');
    var iso = plan.querySelector('.plan-iso');
    var isoRot = plan.querySelector('.plan-iso-rot');
    var photo = sec.querySelector('.draw-photo');
    var photoImg = sec.querySelector('.draw-photo img');
    var steps = sec.querySelectorAll('.draw-step');
    var bar = sec.querySelector('.draw-bar i');

    if (reduce) {
      window.gsap.set(steps, { opacity: 1, y: 0 });
      window.gsap.set(bar, { scaleX: 1 });
      return;
    }

    var dashable = [].slice.call(lines).concat([].slice.call(dims), [].slice.call(scales));
    dashable.forEach(function (p) {
      var l = p.getTotalLength();
      if (!l) return;
      p.style.strokeDasharray = l;
      p.style.strokeDashoffset = l;
    });
    var each = Math.min(.014, .26 / Math.max(1, lines.length - 1));
    window.gsap.set(nodes, { scale: 0, transformOrigin: '50% 50%' });

    var state = -1;
    function setStep(i) {
      if (i === state) return;
      state = i;
      steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    }

    var tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: sec, start: 'top top', end: narrow ? '+=240%' : '+=300%',
        pin: true, scrub: .55, anticipatePin: 1, invalidateOnRefresh: true,
        onUpdate: function (self) {
          window.gsap.set(bar, { scaleX: self.progress });
          setStep(self.progress < .34 ? 0 : self.progress < .64 ? 1 : 2);
        }
      }
    });

    tl.fromTo(linesG, { opacity: 0 }, { opacity: 1, duration: .04, ease: 'none' }, 0);
    tl.to(lines, { strokeDashoffset: 0, ease: 'none', duration: .30, stagger: { each: each, from: 'start' } }, 0);
    tl.fromTo(nodesG, { opacity: 0 }, { opacity: 1, duration: .04, ease: 'none' }, .30);
    tl.to(nodes, { scale: 1, duration: .12, ease: 'back.out(2.4)', stagger: .004 }, .32);
    tl.fromTo(dimsG, { opacity: 0 }, { opacity: 1, duration: .05, ease: 'none' }, .44);
    tl.to(dims, { strokeDashoffset: 0, ease: 'none', stagger: .03, duration: .12 }, .44);
    tl.fromTo(texts, { opacity: 0 }, { opacity: 1, duration: .05, ease: 'none', stagger: .025 }, .52);
    tl.fromTo(scaleG, { opacity: 0 }, { opacity: 1, duration: .05, ease: 'none' }, .58);
    tl.to(scales, { strokeDashoffset: 0, ease: 'none', duration: .12 }, .58);
    tl.to(iso, { opacity: 1, duration: .08, ease: 'none' }, .52);
    tl.fromTo(isoRot, { rotation: -9, scale: .9, svgOrigin: '600 330' }, {
      rotation: 2, scale: 1, duration: .22, ease: 'none', svgOrigin: '600 330'
    }, .52);
    tl.to(linesG, { opacity: .2, duration: .08, ease: 'none' }, .58);
    tl.to(iso, { opacity: 0, duration: .09, ease: 'none' }, .70);
    tl.fromTo(photo, { opacity: 0, clipPath: 'inset(46% 0% 46% 0%)' }, {
      opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: .22, ease: 'power2.inOut'
    }, .66);
    tl.fromTo(photoImg, { scale: 1.14 }, { scale: 1, duration: .26, ease: 'none' }, .66);
    tl.to(planBox, { opacity: 0, duration: .12, ease: 'none' }, .82);

    setStep(0);
  }

  /* ---------- Цифры цены с перелистыванием ---------- */
  function buildPrice(el) {
    if (!el) return function () {};
    var to = (el.getAttribute('data-to') || el.textContent).trim();
    var from = to.split('').map(function (ch, i) {
      if (!/\d/.test(ch)) return ch;
      return String((parseInt(ch, 10) + 3 + i) % 10);
    }).join('');
    el.setAttribute('aria-label', to + ' рублей за тонну');
    if (reduce) { el.textContent = to; return function () {}; }
    el.textContent = '';
    var cols = [];
    for (var i = 0; i < to.length; i++) {
      if (!/\d/.test(to[i])) {
        var sp = doc.createElement('span');
        sp.textContent = to[i];
        el.appendChild(sp);
        continue;
      }
      var wrap = doc.createElement('i');
      wrap.setAttribute('aria-hidden', 'true');
      var cur = doc.createElement('b');
      var nx = doc.createElement('b');
      cur.textContent = from[i];
      nx.textContent = to[i];
      wrap.appendChild(cur); wrap.appendChild(nx);
      el.appendChild(wrap);
      cols.push({ cur: cur, nx: nx, done: false });
    }
    el.style.perspective = '600px';
    cols.forEach(function (c) {
      window.gsap.set(c.nx, { yPercent: 100, rotateX: -88, transformOrigin: '50% 0%' });
      window.gsap.set(c.cur, { transformOrigin: '50% 100%' });
    });
    return function () {
      cols.forEach(function (c, i) {
        if (c.done) return;
        var t = window.gsap.timeline({ delay: i * .05 });
        t.to(c.cur, { rotateX: 88, duration: .26, ease: 'power2.in' }, 0);
        t.to(c.nx, { yPercent: 0, rotateX: 0, duration: .3, ease: 'power2.out' }, .24);
        t.set(c.cur, { opacity: 0 }, .26);
        t.call(function () {
          c.cur.textContent = c.nx.textContent;
          window.gsap.set(c.cur, { rotateX: 0, opacity: 1 });
          window.gsap.set(c.nx, { opacity: 0 });
          c.done = true;
        }, null, .56);
      });
    };
  }

  /* ---------- Продукция: полоса строк, фото за курсором ---------- */
  function prodScene() {
    var rows = [].slice.call(doc.querySelectorAll('.pr'));
    if (!rows.length) return;
    var isNarrow = window.matchMedia('(max-width: 900px)').matches;

    rows.forEach(function (el) {
      var flip = buildPrice(el.querySelector('.price'));
      var fig = el.querySelector('.pr-fig');
      if (reduce) { flip(); return; }
      if (isNarrow && fig) {
        /* телефон: кадр панели раскрывается снизу вверх */
        window.ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: function () {
            window.gsap.fromTo(fig, { clipPath: 'inset(0% 0% 100% 0%)' }, {
              clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.out'
            });
            flip();
          }
        });
        return;
      }
      /* компьютер: фото строки едет за курсором, здесь только цена */
      window.ScrollTrigger.create({ trigger: el, start: 'top 82%', once: true, onEnter: flip });
    });

    var sheet = doc.getElementById('prodSheet');
    var prog = doc.getElementById('prodProg');
    if (sheet && prog) {
      var upd = function () {
        var max = sheet.scrollWidth - sheet.clientWidth;
        var p = max > 4 ? sheet.scrollLeft / max : 0;
        window.gsap.set(prog, { scaleX: Math.max(.2, p) });
      };
      sheet.addEventListener('scroll', upd, { passive: true });
      window.addEventListener('resize', upd);
      upd();
    }
  }

  /* ---------- Фото, которое едет за курсором по строкам ---------- */
  function trailPhoto() {
    if (reduce || window.matchMedia('(max-width: 900px)').matches) return;
    var sheet = doc.getElementById('prodSheet');
    if (!sheet) return;
    var trail = doc.createElement('figure');
    trail.className = 'trail';
    trail.setAttribute('aria-hidden', 'true');
    var img = doc.createElement('img');
    img.alt = '';
    img.width = 360; img.height = 270;
    trail.appendChild(img);
    doc.body.appendChild(trail);

    var qx = window.gsap.quickTo(trail, 'x', { duration: .55, ease: 'power3' });
    var qy = window.gsap.quickTo(trail, 'y', { duration: .55, ease: 'power3' });
    var shown = false, cur = '';

    function off() { trail.classList.remove('on'); shown = false; }
    doc.addEventListener('mousemove', function (e) {
      qx(e.clientX); qy(e.clientY);
      if (!shown && e.clientY > 120) { shown = true; trail.classList.add('on'); }
    }, { passive: true });
    window.addEventListener('scroll', off, { passive: true });

    [].slice.call(sheet.querySelectorAll('.pr')).forEach(function (row) {
      row.addEventListener('mouseenter', function () {
        var src = row.getAttribute('data-img');
        if (src && src !== cur) {
          cur = src; img.src = src;
          window.gsap.fromTo(img, { scale: 1.14 }, { scale: 1.05, duration: .9, ease: 'power2.out', overwrite: 'auto' });
        }
        trail.classList.add('on'); shown = true;
      });
      row.addEventListener('mouseleave', off);
    });
  }

  /* ---------- Заголовки секций выходят из-под маски ---------- */
  function headingReveal() {
    if (reduce || !window.ScrollTrigger) return;
    [].slice.call(doc.querySelectorAll('.prod-head h2, .shop-intro h2, .objs-head h2, .flow-head h2')).forEach(function (h) {
      var lines = [], cur = '';
      [].slice.call(h.childNodes).forEach(function (n) {
        if (n.nodeType === 3) cur += n.nodeValue;
        else if (n.tagName === 'BR') { lines.push(cur); cur = ''; }
      });
      lines.push(cur);
      if (lines.join('').trim().length < 4) return;
      h.textContent = '';
      lines.forEach(function (t) {
        var wrap = doc.createElement('span');
        wrap.className = 'ln';
        var inner = doc.createElement('span');
        inner.className = 'ln-i';
        inner.textContent = t;
        wrap.appendChild(inner);
        h.appendChild(wrap);
      });
      var inners = [].slice.call(h.querySelectorAll('.ln-i'));
      window.gsap.set(inners, { yPercent: 104 });
      window.gsap.to(inners, {
        yPercent: 0, duration: 1.05, ease: 'power3.out', stagger: .09,
        scrollTrigger: { trigger: h, start: 'top 88%', once: true }
      });
    });
  }

  /* ---------- Слова проявляются по мере чтения ---------- */
  function wordReveal(id) {
    var el = doc.getElementById(id);
    if (!el || reduce || !window.ScrollTrigger) return;
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    var spans = words.map(function (w) {
      var s = doc.createElement('span');
      s.className = 'w';
      s.textContent = w;
      el.appendChild(s);
      el.appendChild(doc.createTextNode(' '));
      return s;
    });
    window.gsap.set(spans, { opacity: .16 });
    window.gsap.to(spans, {
      opacity: 1, ease: 'none', stagger: .35,
      scrollTrigger: { trigger: el, start: 'top 88%', end: 'bottom 55%', scrub: .5 }
    });
  }

  /* ---------- Цех: станки, за курсором едет участок ---------- */
  function shopScene() {
    wordReveal('shopLead');
    wordReveal('flowLead');

    var sec = doc.getElementById('shopPin');
    if (!sec) return;
    var rows = [].slice.call(sec.querySelectorAll('#machines li'));
    var figs = [].slice.call(sec.querySelectorAll('.mach-fig'));
    var bar = doc.getElementById('shopBar');
    if (!rows.length || !figs.length || reduce) return;

    var imgs = figs.map(function (f) { return f.querySelector('img'); });
    var state = -1;

    function show(k) {
      if (k === state) return;
      state = k;
      rows.forEach(function (r, i) { r.classList.toggle('on', i === k); });
      var target = window.getComputedStyle(figs[k]).clipPath;
      if (!target || target === 'none') target = 'inset(0% 0% 0% 0%)';
      window.gsap.to(figs[k], { opacity: 1, clipPath: target, duration: .62, ease: 'power2.inOut', overwrite: 'auto' });
      window.gsap.fromTo(imgs[k], { scale: 1.15 }, { scale: 1.0, duration: .85, ease: 'none', overwrite: 'auto' });
    }

    var old = -1;
    window.ScrollTrigger.create({
      trigger: sec, start: 'top top',
      end: function () { return '+=' + (window.innerWidth < 900 ? 200 : 300) + '%'; },
      pin: true, scrub: .45, anticipatePin: 1, invalidateOnRefresh: true,
      onUpdate: function (self) {
        if (bar) window.gsap.set(bar, { scaleX: self.progress });
        var n = rows.length;
        var k = Math.min(n - 1, Math.floor(self.progress * n));
        if (k === old) return;
        if (old >= 0) window.gsap.to(figs[old], { opacity: 0, duration: .45, ease: 'power2.in' });
        old = k;
        show(k);
      }
    });
    old = 0;
    show(0);
  }

  /* ---------- Круг процента в блоке цеха ---------- */
  function ringScene() {
    var box = doc.getElementById('ringBox');
    var fg = doc.getElementById('ringFg');
    var num = doc.getElementById('ringNum');
    if (!box || !fg || !num) return;
    var len = 2 * Math.PI * 60;
    fg.style.strokeDasharray = len;
    fg.style.strokeDashoffset = len;
    if (reduce) { fg.style.strokeDashoffset = len * .14; return; }
    var o = { v: 0 };
    window.gsap.to(o, {
      v: 86, ease: 'none',
      scrollTrigger: { trigger: box, start: 'top 92%', end: 'bottom 55%', scrub: .5, invalidateOnRefresh: true },
      onUpdate: function () {
        if (num.firstChild && num.firstChild.nodeType === 3) num.firstChild.nodeValue = String(Math.round(o.v));
      }
    });
  }

  /* ---------- Объекты: журнальная полоса ---------- */
  function objsScene() {
    var figs = [].slice.call(doc.querySelectorAll('#obyekty .ob-fig'));
    if (figs.length && !reduce) {
      figs.forEach(function (fig) {
        var img = fig.querySelector('img');
        window.gsap.fromTo(fig, { clipPath: 'inset(0% 0% 100% 0%)' }, {
          clipPath: 'inset(0% 0% 0% 0%)', duration: 1.25, ease: 'power3.out',
          scrollTrigger: { trigger: fig, start: 'top 90%', once: true }
        });
        if (img) {
          window.gsap.fromTo(img, { yPercent: -5, scale: 1.08 }, {
            yPercent: 5, scale: 1, ease: 'none',
            scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: .6, invalidateOnRefresh: true }
          });
        }
      });
    }
    /* цифры на кадре считают от нуля */
    var nums = [].slice.call(doc.querySelectorAll('#obyekty .ob-a-figs b'));
    if (nums.length && !reduce) {
      nums.forEach(function (b, i) {
        var to = parseInt(b.textContent.replace(/\D/g, ''), 10) || 0;
        var o = { v: 0 };
        window.gsap.to(o, {
          v: to, duration: 1.8, ease: 'power2.out',
          scrollTrigger: { trigger: b, start: 'top 92%', once: true },
          onUpdate: function () { b.textContent = String(Math.round(o.v)); }
        });
      });
    }
    expandScene();
  }

  /* ---------- Фото, которое растёт из кадра на весь экран ---------- */
  function expandScene() {
    var sec = doc.getElementById('moX');
    if (!sec || reduce) return;
    var fig = sec.querySelector('.ob-x-fig');
    var img = fig ? fig.querySelector('img') : null;
    var cap = sec.querySelector('.ob-x-cap');
    var band = sec.querySelector('.ob-x-band');
    if (!fig || !img) return;

    function small() {
      var w = Math.min(window.innerWidth * .46, 640);
      return { w: w, h: w / 1.6 };
    }

    window.gsap.set(fig, { xPercent: -50, yPercent: -50, width: small().w, height: small().h });
    var tl = window.gsap.timeline({
      scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: .6, invalidateOnRefresh: true }
    });
    tl.to(fig, { width: '100vw', height: window.innerHeight + 'px', duration: .58, ease: 'power2.inOut' }, .08);
    tl.to(img, { scale: 1, duration: .68, ease: 'none' }, .08);
    tl.fromTo(band, { opacity: 0 }, { opacity: 1, duration: .18, ease: 'none' }, .52);
    tl.fromTo(cap, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: .2, ease: 'power2.out' }, .6);
    tl.to(cap, { y: -22, duration: .12, ease: 'none' }, .84);
  }

  /* ---------- Как идёт заказ: пять кадров, круговой переход, живая строка ---------- */
  function seqScene() {
    var sec = doc.getElementById('seq');
    if (!sec) return;
    var frames = [].slice.call(sec.querySelectorAll('.sq'));
    var labels = [].slice.call(sec.querySelectorAll('.seq-labels li'));
    var head = doc.getElementById('seqHead');
    var live = doc.getElementById('seqLive');
    if (!frames.length) return;
    var isNarrow = window.matchMedia('(max-width: 900px)').matches;

    var media = frames.map(function (f) { return f.querySelector('.sq-fig, .sq-draw'); });
    var imgs = frames.map(function (f) { return f.querySelector('img'); });
    var bodies = frames.map(function (f) { return f.querySelector('.sq-body'); });

    var planPaths = [].slice.call(sec.querySelectorAll('.sqp-lines path, .sqp-dims path'));
    planPaths.forEach(function (p) {
      var l = p.getTotalLength();
      if (!l) return;
      p.style.strokeDasharray = l;
      p.style.strokeDashoffset = l;
    });
    var planDrawn = false;
    function drawPlan() {
      if (planDrawn || !planPaths.length) return;
      planDrawn = true;
      window.gsap.to(planPaths, { strokeDashoffset: 0, ease: 'none', duration: reduce ? 0 : 1.4, stagger: reduce ? 0 : .02 });
    }

    var STAGE = ['чертёж или ТЗ', 'расчёт и договор', 'резка и сборка', 'сварка и покраска', 'доставка и монтаж'];
    var TONS = [0, 14, 96, 214, 268];
    var lastIdx = -1;

    function setHead(p) {
      if (!head) return;
      if (isNarrow) { head.style.left = '0px'; head.style.top = (p * 100) + '%'; }
      else { head.style.left = (p * 100) + '%'; head.style.top = '0px'; }
    }
    function setLive(i) {
      if (!live) return;
      live.innerHTML = 'Сейчас идёт <b>0' + (i + 1) + '</b> из 05 · ' + STAGE[i] + ' · в работе ' + TONS[i] + ' т';
    }

    function paint(p) {
      var n = frames.length;
      for (var i = 0; i < n; i++) {
        var mid = (i + .5) / n;
        var d = Math.abs(p - mid) / (0.5 / n);
        var op = Math.max(0, 1 - d);
        frames[i].style.opacity = op;
        frames[i].style.visibility = op > .012 ? 'visible' : 'hidden';
        if (imgs[i]) window.gsap.set(imgs[i], { scale: 1.02 + d * .1 });
      }
      var cur = Math.min(n - 1, Math.floor(p * n));
      if (cur !== lastIdx) {
        lastIdx = cur;
        labels.forEach(function (l, k) {
          l.classList.toggle('on', k === cur);
          l.classList.toggle('past', k < cur);
        });
        setLive(cur);
        if (cur === 1) drawPlan();
        /* органичный переход: кадр раскрывается кругом, потом садится в кадр */
        var m = media[cur];
        if (m && !reduce) {
          window.gsap.fromTo(m, { clipPath: 'circle(3% at 76% 32%)' }, {
            clipPath: 'circle(98% at 76% 32%)', duration: 1.15, ease: 'power2.inOut', overwrite: 'auto'
          });
        }
        var b = bodies[cur];
        if (b && !reduce) window.gsap.fromTo(b, { yPercent: 5 }, { yPercent: 0, duration: .8, ease: 'power3.out', overwrite: 'auto' });
      }
      setHead(p);
    }

    if (reduce || isNarrow) {
      frames.forEach(function (f) { f.style.opacity = 1; f.style.visibility = 'visible'; });
      setLive(0);
      window.ScrollTrigger.create({
        trigger: sec, start: 'top 70%', end: 'bottom bottom', scrub: .4, invalidateOnRefresh: true,
        onUpdate: function (self) { setHead(self.progress); }
      });
      /* телефон: живая строка идёт по кадрам, когда они входят в экран */
      if (!reduce) {
        frames.forEach(function (f, k) {
          window.ScrollTrigger.create({
            trigger: f, start: 'top 72%', end: 'bottom 28%',
            onToggle: function (self) { if (self.isActive) setLive(k); }
          });
        });
      }
      return;
    }

    frames[0].style.opacity = 1;
    frames[0].style.visibility = 'visible';
    setLive(0);
    paint(0);
    window.ScrollTrigger.create({
      trigger: sec, start: 'top top', end: '+=340%', pin: true, scrub: .5,
      anticipatePin: 1, invalidateOnRefresh: true, onUpdate: function (self) { paint(self.progress); }
    });
  }

  /* ---------- Финал: панорама едет по горизонтали ---------- */
  function vistaScene() {
    var sec = doc.getElementById('vista');
    if (!sec) return;
    var img = sec.querySelector('.vista-fig img');
    var live = sec.querySelector('.vista-live');
    if (reduce || !window.ScrollTrigger) {
      if (live) live.style.opacity = 1;
      return;
    }
    if (img) {
      window.gsap.fromTo(img, { xPercent: 4 }, {
        xPercent: -4, ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: .6, invalidateOnRefresh: true }
      });
    }
    if (live) {
      window.gsap.fromTo(live, { opacity: 0, y: 18 }, {
        opacity: 1, y: 0, duration: .9, ease: 'power3.out',
        scrollTrigger: { trigger: sec, start: 'top 62%', once: true }
      });
    }
  }

  /* ---------- Вертикальный шов по странице ---------- */
  function spine() {
    var el = doc.getElementById('seamSpine');
    if (!el || reduce || window.matchMedia('(max-width: 1199px)').matches) return;
    var bar = el.querySelector('i');
    window.ScrollTrigger.create({
      trigger: doc.body, start: 'top top', end: 'bottom bottom', scrub: .3,
      onUpdate: function (self) {
        if (self.progress > .04) el.classList.add('on'); else el.classList.remove('on');
        window.gsap.set(bar, { scaleY: self.progress });
      }
    });
  }

  /* ---------- Заявка: ответы собирают письмо на лету ---------- */
  function calcForm() {
    var form = doc.getElementById('calcForm');
    var file = doc.getElementById('fFile');
    var fileName = doc.getElementById('fileName');
    var status = doc.getElementById('fStatus');
    var btn = doc.getElementById('sendBtn');
    var vol = doc.getElementById('fVol');
    var volOut = doc.getElementById('volOut');
    var mail = doc.getElementById('askMail');
    var city = doc.getElementById('fCity');
    var phone = doc.getElementById('fPhone');
    var name = doc.getElementById('fName');
    var mount = doc.getElementById('fMount');
    if (!form) return;

    var fileChosen = false;
    if (file) {
      file.addEventListener('change', function () {
        fileChosen = !!(file.files && file.files[0]);
        fileName.textContent = fileChosen ? file.files[0].name : 'Приложить pdf, dwg или zip';
        paint();
      });
    }

    function type() {
      var checked = form.querySelector('input[name="type"]:checked');
      return checked ? checked.value : 'Конструкции по чертежам';
    }
    function mountTx() { return mount && mount.checked ? 'монтаж нужен' : 'только поставка'; }

    function paint() {
      if (!mail) return;
      var where = city && city.value.trim() ? city.value.trim() : 'город не указан';
      var txt = 'Письмо соберётся: ' + type() + ', ' + (vol ? vol.value : 180) + ' т, ' +
        where + ', ' + mountTx();
      if (fileChosen) txt += ', файл приложен';
      mail.textContent = txt;
    }

    [vol, city, phone, name].forEach(function (el) {
      if (!el) return;
      el.addEventListener('input', function () {
        if (el === vol && volOut) volOut.textContent = vol.value + ' т';
        paint();
      });
    });
    var chips = doc.getElementById('chips');
    if (chips) chips.addEventListener('change', paint);
    if (mount) mount.addEventListener('change', paint);
    if (vol && volOut) volOut.textContent = vol.value + ' т';
    paint();

    if (btn && finePointer) {
      var bx = window.gsap.quickTo(btn, 'x', { duration: .6, ease: 'power3' });
      var by = window.gsap.quickTo(btn, 'y', { duration: .6, ease: 'power3' });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        bx((e.clientX - (r.left + r.width / 2)) * .22);
        by((e.clientY - (r.top + r.height / 2)) * .22);
      });
      btn.addEventListener('mouseleave', function () { bx(0); by(0); });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var kind = type();
      var tons = vol ? vol.value : '180';
      var cityTx = city && city.value.trim() ? city.value.trim() : 'не указан';
      var phoneTx = phone && phone.value.trim() ? phone.value.trim() : '';
      var nameTx = name && name.value.trim() ? name.value.trim() : 'не указан';
      var fname = fileChosen ? fileName.textContent : 'не приложен';

      if (!phoneTx) {
        status.textContent = 'Оставьте телефон, инженер перезвонит в течение рабочего дня.';
        if (phone) phone.focus();
        return;
      }

      var body = [
        'Запрос расчёта с сайта.',
        '',
        'Что делаем: ' + kind,
        'Примерный тоннаж: ' + tons + ' т',
        'Город и адрес площадки: ' + cityTx,
        'Монтаж: ' + (mount && mount.checked ? 'нужен' : 'не нужен, только поставка'),
        'Телефон: ' + phoneTx,
        'Контакт: ' + nameTx,
        'Чертёж или ТЗ: ' + fname
      ].join('\n');

      var href = 'mailto:zakaz@severstalkon.ru?subject=' + encodeURIComponent('Расчёт стоимости: ' + kind) + '&body=' + encodeURIComponent(body);
      status.textContent = 'Открываем письмо на zakaz@severstalkon.ru. Файл с чертежом добавьте к письму в своём почтовом клиенте.';
      window.location.href = href;
    });
  }

  /* ---------- Прочее появление ---------- */
  function reveals() {
    var els = doc.querySelectorAll('.rv');
    if (!els.length) return;
    if (reduce || !window.ScrollTrigger) {
      [].slice.call(els).forEach(function (el) { el.classList.add('in'); });
      return;
    }
    [].slice.call(els).forEach(function (el) {
      window.ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: function () { el.classList.add('in'); } });
    });
  }

  /* ---------- Старт ---------- */
  function start() {
    if (!window.gsap || !window.ScrollTrigger) { doc.body.classList.add('ready'); return; }
    window.gsap.registerPlugin(window.ScrollTrigger);
    if (!reduce) doc.body.classList.add('motion');
    header();
    initLenis();
    anchors();
    fitWord();
    liveBoard();
    calcForm();
    reveals();

    var seen = false;
    try { seen = window.sessionStorage.getItem(SEEN) === '1'; } catch (err) { seen = false; }

    function afterBoot() {
      if (!seen) { try { window.sessionStorage.setItem(SEEN, '1'); } catch (err) {} }
      drawScene();
      prodScene();
      trailPhoto();
      headingReveal();
      shopScene();
      ringScene();
      objsScene();
      seqScene();
      vistaScene();
      heroParallax();
      spine();
      window.ScrollTrigger.refresh();
      doc.body.classList.add('ready');
    }

    if (seen || reduce) {
      var boot = doc.getElementById('boot');
      if (boot) boot.remove();
      heroIntro();
      afterBoot();
    } else {
      runBoot(function () { heroIntro(); afterBoot(); });
    }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start);
  else start();
})();
