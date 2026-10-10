/* Подъёмник: движение. Без библиотек кроме gsap, ScrollTrigger, lenis. */
(function () {
  'use strict';

  var q = function (s, c) { return (c || document).querySelector(s); };
  var qa = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mqDesk = window.matchMedia('(min-width: 900px)');
  var reduced = mqReduce.matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  /* ------------------------------------------------------------ видео */

  var heroVideo = q('#heroVideo');

  if (heroVideo) {
    if (reduced) {
      heroVideo.removeAttribute('autoplay');
      heroVideo.pause();
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var p = heroVideo.play();
            if (p && p.catch) p.catch(function () {});
          } else {
            heroVideo.pause();
          }
        });
      }, { threshold: 0.05 }).observe(heroVideo);
    }
  }

  /* ---------------------------------------------------------------- меню */

  var burger = q('#burger');
  var menu = q('#menu');
  var lenis = null;

  function setMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (lenis) { open ? lenis.stop() : lenis.start(); }
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      setMenu(menu.hidden);
    });
    qa('a', menu).forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setMenu(false); burger.focus(); }
    });
  }

  function goTo(target) {
    var el = typeof target === 'string' ? q(target) : target;
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.pageYOffset;
    if (reduced || !lenis) {
      window.scrollTo(0, top - 60);
    } else {
      lenis.scrollTo(top - 60, { duration: 1.1 });
    }
  }

  qa('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      if (!q(href)) return;
      e.preventDefault();
      setMenu(false);
      goTo(href);
    });
  });

  /* -------------------------------------------------------------- заставка */

  var splash = q('#splash');

  function dismissSplash() {
    if (!splash) return;
    splash.classList.add('is-gone');
    try { window.sessionStorage.setItem('pd-splash', '1'); } catch (err) {}
  }

  if (splash) {
    var seen = false;
    try { seen = window.sessionStorage.getItem('pd-splash') === '1'; } catch (err) { seen = false; }
    if (seen || reduced || !hasGsap) {
      dismissSplash();
    } else {
      var band = q('.splash-band', splash);
      var line = q('.splash-line', splash);
      gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set('.splash-mark, .splash-sub', { opacity: 0, y: 14 });
      var sp = gsap.timeline({ onComplete: dismissSplash });
      sp.to('.splash-mark, .splash-sub', { opacity: 1, y: 0, duration: .5, ease: 'expo.out', stagger: .07 }, 0)
        .to(line, { scaleX: 1, duration: .72, ease: 'power2.inOut' }, .12)
        .to(band, { height: '100vh', duration: .42, ease: 'power2.in' }, .92)
        .to(splash, { clipPath: 'inset(0% 0% 100% 0%)', duration: .5, ease: 'expo.inOut' }, 1.05);
    }
  }

  if (!hasGsap) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ------------------------------------------------- плавная прокрутка */

  if (!reduced && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, touchMultiplier: 1.6 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* --------------------------------------------------- акт 1: полосы */

  var SEP = ' · ';

  function buildStripes() {
    return qa('.stripe').map(function (strip, i) {
      var track = q('.stripe-track', strip);
      if (!strip.__src) {
        strip.__src = q('.stripe-cell', track).textContent.replace(/[\s ]+/g, ' ').trim().replace(/\s*·\s*$/, '');
      }
      var src = strip.__src;
      var parts = src.split(SEP).filter(function (w) { return w.length; });
      var words = parts.map(function (w, k) { return k < parts.length - 1 ? w + SEP : w; });
      var probe = document.createElement('span');
      probe.className = 'stripe-cell';
      probe.style.visibility = 'hidden';
      strip.appendChild(probe);
      var maxW = Math.max(96, window.innerWidth * 0.3);
      var groups = [], cur = [], curW = 0;
      words.forEach(function (word) {
        probe.textContent = word;
        var w = probe.getBoundingClientRect().width;
        if (curW + w > maxW && cur.length) {
          groups.push(cur.join('').replace(/\s*·\s*$/, '') + SEP);
          cur = [word];
          curW = w;
        } else {
          cur.push(word);
          curW += w + 7;
        }
      });
      if (cur.length) groups.push(cur.join('').replace(/\s*·\s*$/, '') + SEP);
      strip.removeChild(probe);

      var limit = window.innerWidth * 0.7;
      var run = 0;
      var kept = [];
      for (var gi = 0; gi < groups.length; gi++) {
        var probe2 = document.createElement('span');
        probe2.className = 'stripe-cell';
        probe2.style.visibility = 'hidden';
        probe2.textContent = groups[gi];
        strip.appendChild(probe2);
        var gw = probe2.getBoundingClientRect().width;
        strip.removeChild(probe2);
        if (run + gw > limit && kept.length >= 2) break;
        run += gw;
        kept.push(groups[gi]);
      }
      groups = kept;

      track.textContent = '';
      var cells = [];
      groups.forEach(function (g) {
        var cell = document.createElement('span');
        cell.className = 'stripe-cell';
        cell.textContent = g;
        track.appendChild(cell);
        cells.push(cell);
      });
      var total = Math.max(1, cells.reduce(function (a, c) { return a + c.getBoundingClientRect().width; }, 0));
      var need = Math.max(2, Math.ceil((window.innerWidth * 2.2) / total));
      for (var k = 1; k < need; k++) {
        groups.forEach(function (g) {
          var copy = track.firstChild.cloneNode(true);
          copy.textContent = g;
          track.appendChild(copy);
          cells.push(copy);
        });
      }
      var xs = [], acc = 0;
      cells.forEach(function (c) {
        var w = c.offsetWidth;
        xs.push({ x: acc, w: w + 12, on: true, el: c });
        acc += w;
      });
      return { track: track, w: total, off: i * 37, dir: i === 0 ? -1 : 1, xs: xs, edge: 0 };
    });
  }

  var stripes = buildStripes();

  var lastY = window.pageYOffset;
  var vel = 0;

  gsap.ticker.add(function (time, dt) {
    var y = window.pageYOffset;
    var d = y - lastY;
    lastY = y;
    vel += (d - vel) * 0.16;
    var step = Math.min(dt || 16, 50) * 0.001;
    var drive = clamp(vel * 0.0009, -1.5, 1.5);
    for (var i = 0; i < stripes.length; i++) {
      var s = stripes[i];
      s.off += (s.dir * (0.5 + drive * (i === 0 ? 1 : 0.85))) * step * 60;
      var x = s.w - (((s.off % s.w) + s.w) % s.w);
      s.track.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
      var edge = window.innerWidth;
      for (var j = 0; j < s.xs.length; j++) {
        var item = s.xs[j];
        var on = x + item.x >= 4 && x + item.x + item.w <= edge - 4;
        if (on !== item.on) {
          item.on = on;
          item.el.style.visibility = on ? '' : 'hidden';
        }
      }
    }
  });

  if (reduced) {
    stripes.forEach(function (s) { s.track.style.transform = 'translate3d(0,0,0)'; });
  }

  /* ------------------------------------------ акт 1: заголовок и кадр */

  if (!reduced) {
    gsap.set('.act1-line > span', { yPercent: 106 });
    gsap.set('.act1-lead, .act1-cta, .act1-facts', { opacity: 0, y: 18 });
    var heroIn = gsap.timeline({ delay: 0.15 });
    heroIn.to('.act1-line-1 > span', { yPercent: 0, duration: 1.15, ease: 'expo.out' })
      .to('.act1-line-2 > span', { yPercent: 0, duration: 1.15, ease: 'expo.out' }, 0.09)
      .to('.act1-lead, .act1-cta', { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .1 }, .42)
      .to('.act1-facts', { opacity: 1, y: 0, duration: .8, ease: 'expo.out' }, .6);

    var mmHero = gsap.matchMedia();
    mmHero.add('(min-width: 900px)', function () {
      ScrollTrigger.create({
        trigger: '.act1',
        start: 'top top',
        end: '+=85%',
        pin: true,
        scrub: true,
        anticipatePin: 1
      });
      if (heroVideo) {
        gsap.fromTo(heroVideo, { scale: 1.04 }, {
          scale: 1.12, ease: 'none',
          scrollTrigger: { trigger: '.act1', start: 'top top', end: '+=85%', scrub: true }
        });
      }
      gsap.to('.act1-shade', {
        opacity: .6, ease: 'none',
        scrollTrigger: { trigger: '.act1', start: 'top top', end: '+=85%', scrub: true }
      });
      /* плашка уходит вверх, но остаётся читаемой: под ней видео, пустоты нет */
      gsap.to('.act1-plate', {
        yPercent: -7, ease: 'none',
        scrollTrigger: { trigger: '.act1', start: 'top top', end: '+=85%', scrub: true }
      });
      return function () {};
    });
  } else {
    gsap.set('.act1-line > span, .act1-lead, .act1-cta, .act1-facts', { clearProps: 'all' });
  }

  /* ------------------------------------------- акт 2: чертёж машины */

  var bpList = q('[data-bp-list]');
  var rows = bpList ? qa('.bp-row', bpList) : [];
  var details = bpList ? qa('.bp-detail', bpList) : [];
  var activeNode = null;

  function setActive(num) {
    qa('.bp-node.is-active').forEach(function (n) { n.classList.remove('is-active'); });
    qa('.bp-label.is-active').forEach(function (n) { n.classList.remove('is-active'); });
    var node = q('.bp-node[data-node="' + num + '"]');
    var label = q('.bp-label[data-node="' + num + '"]');
    if (node) node.classList.add('is-active');
    if (label) label.classList.add('is-active');
    activeNode = num;
  }

  function showDetail(el) {
    if (!el) return;
    el.style.display = 'grid';
    void el.offsetHeight;
    el.classList.add('is-open');
  }

  function hideDetail(el) {
    if (!el) return;
    el.classList.remove('is-open');
    window.setTimeout(function () {
      if (!el.classList.contains('is-open')) el.style.display = 'none';
    }, reduced ? 0 : 520);
  }

  function openRow(num, scroll) {
    var i = rows.length ? rows.map(function (r) { return r.getAttribute('data-node'); }).indexOf(String(num)) : -1;
    if (i < 0) return;
    rows.forEach(function (r, k) {
      var open = k === i;
      r.classList.toggle('is-open', open);
      r.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (details[k]) {
        if (open) showDetail(details[k]);
        else hideDetail(details[k]);
      }
    });
    setActive(num);
    if (scroll && rows[i].getBoundingClientRect().bottom > window.innerHeight) {
      goTo(rows[i]);
    }
  }

  rows.forEach(function (row, i) {
    row.addEventListener('click', function () {
      var num = row.getAttribute('data-node');
      var isOpen = row.classList.contains('is-open');
      if (isOpen) {
        row.classList.remove('is-open');
        row.setAttribute('aria-expanded', 'false');
        hideDetail(details[i]);
        if (String(activeNode) === String(num)) setActive('');
      } else {
        openRow(num, false);
      }
    });
  });

  qa('.bp-node').forEach(function (node) {
    var fire = function () { openRow(node.getAttribute('data-node'), true); };
    node.addEventListener('click', fire);
    node.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); fire(); }
    });
  });

  qa('.bp-label').forEach(function (label) {
    label.addEventListener('click', function () { openRow(label.getAttribute('data-node'), true); });
  });

  function prepDraw(svg) {
    if (!svg) return [];
    var els = qa('.bp-draw', svg).filter(function (el) {
      return typeof el.getTotalLength === 'function' && el.getTotalLength() > 1;
    });
    els.forEach(function (el) {
      var len = el.getTotalLength();
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
    });
    return els;
  }

  var bpCtx = null;

  function buildBlueprint() {
    if (bpCtx) { bpCtx.revert(); bpCtx = null; }
    var desk = mqDesk.matches;
    var stage = desk ? q('.bp-stage') : q('.bp-top-view');
    var svg = stage ? q('svg.bp-car', stage) : null;
    if (!svg) return;

    /* линия чертежа ровно 1.5 px на любой ширине */
    var box = svg.getBoundingClientRect();
    if (box.width > 0) {
      var vb = svg.viewBox.baseVal;
      var k = vb && vb.width ? box.width / vb.width : 1;
      svg.style.setProperty('--bp-sw', (1.5 / (k || 1)).toFixed(3) + 'px');
    }

    var draws = prepDraw(svg);
    var sheets = qa('.bp-fill, .bp-floor', svg);
    var nodes = qa('.bp-node', svg);
    var leads = qa('.bp-lead', svg);

    bpCtx = gsap.context(function () {
      if (reduced) {
        draws.forEach(function (el) { el.style.strokeDashoffset = 0; });
        gsap.set(sheets, { opacity: 1 });
        gsap.set(nodes, { opacity: 1, scale: 1 });
        gsap.set(leads, { opacity: 1 });
        return;
      }
      gsap.set(nodes, { opacity: 0, scale: .4, transformOrigin: 'center center' });
      gsap.set(sheets, { opacity: 0 });
      gsap.set(leads, { opacity: 0 });

      var tl = gsap.timeline({
        scrollTrigger: desk
          ? { trigger: '.bp-stage', start: 'top 76%', end: 'bottom 26%', scrub: .5 }
          : { trigger: '.bp-top-view', start: 'top 74%', end: 'bottom 45%', scrub: .5 }
      });
      tl.to(sheets, { opacity: 1, duration: .8, ease: 'none' }, 0)
        .to(draws, { strokeDashoffset: 0, duration: 1.5, stagger: .09, ease: 'none' }, 0)
        .to(nodes, { opacity: 1, scale: 1, duration: .28, stagger: .1, ease: 'back.out(2)' }, 1.25)
        .to(leads, { opacity: 1, duration: .3, stagger: .09, ease: 'none' }, 1.95);
    });
  }

  buildBlueprint();
  mqDesk.addEventListener('change', function () {
    setActive('');
    buildBlueprint();
    ScrollTrigger.refresh();
  });

  /* -------------------------------------------- акт 3: табло записи */

  var boardRows = qa('.board-row');
  var CHARS = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ0123456789';

  function buildTiles(row) {
    var holder = q('.row-tiles', row);
    var label = q('.row-text', row);
    if (!holder || !label) return [];
    holder.textContent = '';
    var text = label.textContent.trim();
    row.__text = text;
    var tiles = text.split('').map(function (ch) {
      var tile = document.createElement('span');
      tile.className = 'tile';
      var top = document.createElement('span');
      top.className = 't-top';
      top.textContent = ch;
      var bot = document.createElement('span');
      bot.className = 't-bot';
      bot.textContent = ch;
      tile.appendChild(top);
      tile.appendChild(bot);
      holder.appendChild(tile);
      tile.__top = top;
      tile.__bot = bot;
      tile.__final = ch;
      return tile;
    });
    row.__tiles = tiles;
    row.classList.add('is-tiles');
    return tiles;
  }

  function stepTile(tile, ch, settle) {
    tile.__top.textContent = ch;
    tile.classList.add('is-flip');
    window.setTimeout(function () { tile.__bot.textContent = ch; }, 62);
    window.setTimeout(function () { if (settle) tile.classList.remove('is-flip'); }, 150);
  }

  function flipRow(i, delay) {
    var row = boardRows[i];
    if (!row) return;
    var tiles = row.__tiles && row.__tiles.length ? row.__tiles : buildTiles(row);
    if (!tiles.length) return;
    tiles.forEach(function (tile, k) {
      if (reduced || tile.__final === ' ') {
        tile.__top.textContent = tile.__final;
        tile.__bot.textContent = tile.__final;
        return;
      }
      var seq = [];
      var n = 3 + Math.floor(Math.random() * 3);
      for (var s = 0; s < n; s++) seq.push(CHARS.charAt(Math.floor(Math.random() * CHARS.length)));
      seq.push(tile.__final);
      var step = 0;
      var go = function () {
        if (step >= seq.length) return;
        stepTile(tile, seq[step], step === seq.length - 1);
        step++;
        if (step < seq.length) window.setTimeout(go, 110 - Math.min(26, step * 4));
      };
      window.setTimeout(go, delay + k * 36);
    });
  }

  var flipped = 0;

  function flipNextRow() {
    if (flipped >= boardRows.length) return;
    flipRow(flipped, 0);
    flipped++;
  }

  function flipAllRows(delay) {
    var first = flipped;
    for (var i = first; i < boardRows.length; i++) {
      (function (idx) {
        window.setTimeout(function () { flipRow(idx, 0); }, delay + (idx - first) * 210);
      })(i);
    }
    flipped = boardRows.length;
  }

  /* табло живёт: одно окно освободилось и перещёлкивается на «свободно» */
  var liveTimer = null;
  function liveRow() {
    if (reduced || flipped < boardRows.length) return;
    var row = boardRows[2];
    if (!row) return;
    q('.row-text', row).textContent = '14:00 СВОБОДНО';
    row.setAttribute('data-text', '14:00 СВОБОДНО');
    buildTiles(row);
    flipRow(2, 0);
  }

  /* плитки собираем сразу: табло всегда читается, анимация его только проигрывает */
  if (!reduced) {
    boardRows.forEach(function (row) { buildTiles(row); });
  }

  var mmBoard = gsap.matchMedia();

  /* телефон: табло перещёлкивается, когда до него дошла прокрутка */
  mmBoard.add('(max-width: 899px) and (prefers-reduced-motion: no-preference)', function () {
    gsap.set('.board-wrap', { opacity: 0, y: 22 });
    var st = ScrollTrigger.create({
      trigger: '.board-stage',
      start: 'top 82%',
      once: true,
      onEnter: function () {
        gsap.to('.board-wrap', { opacity: 1, y: 0, duration: .8, ease: 'expo.out' });
        flipAllRows(280);
        liveTimer = window.setTimeout(liveRow, 4600);
      }
    });
    return function () {
      st.kill();
      if (liveTimer) { window.clearTimeout(liveTimer); liveTimer = null; }
      flipped = 0;
      gsap.set('.board-wrap', { opacity: 1, y: 0 });
    };
  });

  /* компьютер: табло закреплено, строки перещёлкиваются по ходу прокрутки */
  mmBoard.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', function () {
    gsap.set('.board-wrap', { opacity: 1, y: 0 });
    var st = ScrollTrigger.create({
      trigger: '.board-stage',
      start: 'top top',
      end: '+=40%',
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onUpdate: function (self) {
        var want = Math.min(boardRows.length, Math.ceil(clamp(self.progress, 0, 1) * (boardRows.length + .4)));
        while (flipped < want) { flipNextRow(); }
        if (flipped >= boardRows.length && !liveTimer) liveTimer = window.setTimeout(liveRow, 2400);
      }
    });
    return function () {
      st.kill();
      if (liveTimer) { window.clearTimeout(liveTimer); liveTimer = null; }
      flipped = 0;
    };
  });

  if (reduced) {
    gsap.set('.board-wrap, .act3-head, .act3-bottom', { clearProps: 'all' });
  }

  /* --------------------------------------------------- финал */

  if (!reduced) {
    gsap.set('.final-plate > *', { opacity: 0, y: 20 });
    gsap.set('.final-name', { opacity: 0, y: 46 });
    ScrollTrigger.create({
      trigger: '.final',
      start: 'top 62%',
      once: true,
      onEnter: function () {
        gsap.to('.final-plate > *', { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08 });
        gsap.to('.final-name', { opacity: 1, y: 0, duration: 1.15, ease: 'expo.out' });
        gsap.fromTo('.final-img', { scale: 1.08 }, { scale: 1, duration: 6, ease: 'power2.out' });
      }
    });
  }

  /* --------- пересчёт при смене ширины (ленты и толщина чертежа) ------ */

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      stripes = buildStripes();
      buildBlueprint();
      ScrollTrigger.refresh();
    }, 220);
  });

  window.addEventListener('load', function () {
    stripes = buildStripes();
    buildBlueprint();
    ScrollTrigger.refresh();
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      stripes = buildStripes();
      buildBlueprint();
      ScrollTrigger.refresh();
    });
  }
})();