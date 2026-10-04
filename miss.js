/* miss.js — страница «не найдено». Кусок адреса, который не нашёлся,
   повисает на углу, отрывается и падает на пол; Паша смотрит на него.
   Кусок можно взять мышью или пальцем и приставить обратно — страницы
   от этого не появится, о чём Паша честно и скажет. При «меньше движения»
   кусок сразу лежит на полу, взять его всё равно можно. */
(() => {
  const $ = (s) => document.querySelector(s);
  const stage = $('[data-stage]'), slot = $('[data-slot]'), chunk = $('[data-chunk]');
  const pasha = $('[data-pasha]'), eyes = $('[data-eyes]'), hint = $('[data-hint]');
  if (!stage || !chunk) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // кусок — тот самый путь, которого нет
  let path = location.pathname || '/';
  try { path = decodeURIComponent(path); } catch (e) { /* битая кодировка — показываем как есть */ }
  if (path.length <= 1) path = '/что-то';
  if (path.length > 22) path = path.slice(0, 21) + '…';
  chunk.textContent = path;

  const S = { x: 0, y: 0, vx: 0, vy: 0, a: 0, va: 0, mode: 'slot', t0: 0, tries: 0 };
  const G = 0.9, REST = -5;
  const box = () => stage.getBoundingClientRect();
  const slotAt = () => { const s = box(), r = slot.getBoundingClientRect(); return { x: r.left - s.left, y: r.top - s.top + (r.height - chunk.offsetHeight) / 2 }; };
  const floorY = () => stage.clientHeight - chunk.offsetHeight - 2;
  const wallX = () => { // в Пашу кусок упирается, сквозь него не катится
    const s = box(), p = pasha.getBoundingClientRect();
    return Math.min(stage.clientWidth, p.left - s.left) - chunk.offsetWidth - 4;
  };
  const render = () => { chunk.style.transform = `translate(${S.x.toFixed(1)}px,${S.y.toFixed(1)}px) rotate(${S.a.toFixed(2)}deg)`; };
  const fit = () => { slot.style.width = chunk.offsetWidth + 'px'; };
  const toSlot = () => { const p = slotAt(); S.x = p.x; S.y = p.y; S.a = 0; S.vx = S.vy = S.va = 0; S.mode = 'slot'; render(); };
  const say = (t) => { if (hint) hint.textContent = t; };
  const hop = () => { pasha.classList.remove('is-hop'); void pasha.getBoundingClientRect(); pasha.classList.add('is-hop'); };

  // глаза Паши: на кусок, а когда кусок лежит, — за курсором
  let look = null;
  const aim = (cx, cy) => {
    const p = pasha.getBoundingClientRect();
    const dx = cx - (p.left + p.width / 2), dy = cy - (p.top + p.height * 0.58);
    const d = Math.hypot(dx, dy) || 1;
    eyes.style.transform = `translate(${((dx / d) * 4.2).toFixed(2)}px,${((dy / d) * 3.4).toFixed(2)}px)`;
  };
  const aimChunk = () => { const r = chunk.getBoundingClientRect(); aim(r.left + r.width / 2, r.top + r.height / 2); };
  addEventListener('pointermove', (e) => { look = [e.clientX, e.clientY]; if (S.mode === 'rest') aim(...look); }, { passive: true });

  const breakOff = () => { S.mode = 'hinge'; S.t0 = performance.now(); };

  let raf = 0;
  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    // пока кусок держится за адрес, он следует за прорезью: шрифт мог догрузиться и сдвинуть строку
    if (S.mode === 'slot' || S.mode === 'hinge') {
      if (slot.offsetWidth !== chunk.offsetWidth) fit();
      const p = slotAt(); S.x = p.x; S.y = p.y;
      if (S.mode === 'slot') render();
    }
    if (S.mode === 'hinge') {
      // дрожит, повисает на левом углу и раскачивается
      const t = now - S.t0;
      if (t < 420) S.a = Math.sin(t / 22) * 2.4;
      else {
        const k = (t - 420) / 1000;
        S.a = 58 - 58 * Math.exp(-k * 5.5) * Math.cos(k * 15);
        if (t > 1300) { S.mode = 'fall'; S.vx = 1.1; S.vy = -1.5; S.va = -2.6; }
      }
      render(); aimChunk();
    } else if (S.mode === 'fall') {
      S.vy += G; S.x += S.vx; S.y += S.vy; S.a += S.va;
      const fy = floorY(), wx = wallX();
      if (S.x > wx) { S.x = wx; S.vx = -Math.abs(S.vx) * 0.45; if (Math.abs(S.vy) > 2) hop(); }
      if (S.x < 0) { S.x = 0; S.vx = Math.abs(S.vx) * 0.45; }
      if (S.y >= fy) {
        S.y = fy;
        if (Math.abs(S.vy) < 2.2) { S.vy = 0; S.mode = 'settle'; }
        else { S.vy = -S.vy * 0.36; S.va = (REST - S.a) * 0.18; S.vx *= 0.7; }
      }
      render(); aimChunk();
    } else if (S.mode === 'settle') {
      S.a += (REST - S.a) * 0.16; S.x += S.vx; S.vx *= 0.82;
      const wx = wallX(); if (S.x > wx) S.x = wx;
      render(); aimChunk();
      if (Math.abs(REST - S.a) < 0.3 && Math.abs(S.vx) < 0.1) {
        S.a = REST; S.mode = 'rest'; render();
        if (S.tries === 0) say('кусок можно взять и приставить обратно');
      }
    } else if (S.mode === 'drag') {
      S.a += (0 - S.a) * 0.25; render(); aimChunk();
    }
  };

  /* перетаскивание: мышью, пальцем; рядом с прорезью она подсвечивается */
  let off = null, last = null;
  const near = () => { const p = slotAt(); return Math.hypot(S.x - p.x, S.y - p.y) < 46; };
  chunk.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    chunk.setPointerCapture(e.pointerId);
    const s = box();
    off = { x: e.clientX - s.left - S.x, y: e.clientY - s.top - S.y };
    last = { x: e.clientX, y: e.clientY, t: performance.now(), vx: 0, vy: 0 };
    S.mode = 'drag';
  });
  chunk.addEventListener('pointermove', (e) => {
    if (S.mode !== 'drag' || !off) return;
    const s = box();
    S.x = Math.max(0, Math.min(stage.clientWidth - chunk.offsetWidth, e.clientX - s.left - off.x));
    S.y = Math.max(-20, Math.min(floorY(), e.clientY - s.top - off.y));
    const now = performance.now(), dt = Math.max(8, now - last.t);
    last = { x: e.clientX, y: e.clientY, t: now, vx: ((e.clientX - last.x) / dt) * 16, vy: ((e.clientY - last.y) / dt) * 16 };
    slot.classList.toggle('is-near', near());
    if (still) { render(); aimChunk(); }
  });
  const drop = () => {
    if (S.mode !== 'drag') return;
    slot.classList.remove('is-near');
    off = null;
    if (near()) putBack();
    else if (still) { S.y = floorY(); S.a = REST; S.mode = 'rest'; render(); }
    else { S.mode = 'fall'; S.vx = Math.max(-14, Math.min(14, last ? last.vx : 0)); S.vy = Math.max(-14, Math.min(14, last ? last.vy : 0)); S.va = S.vx * 0.6; }
  };
  chunk.addEventListener('pointerup', drop);
  chunk.addEventListener('pointercancel', drop);
  chunk.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    putBack();
  });

  const LINES = [
    'приставили. страницы всё равно нет, честно',
    'паша проверил дважды: такой страницы нет',
    'кусок упрямый, а адрес всё равно неполный',
  ];
  function putBack() {
    toSlot();
    hop();
    say(LINES[S.tries++ % LINES.length]);
    if (!still) setTimeout(() => { if (S.mode === 'slot') breakOff(); }, 1500);
  }

  const start = () => {
    fit();
    if (still) {
      S.x = stage.clientWidth * 0.32; S.y = floorY(); S.a = REST; S.mode = 'rest'; render(); aimChunk();
      return;
    }
    toSlot();
    raf = requestAnimationFrame(loop);
    setTimeout(breakOff, 900);
  };
  addEventListener('resize', () => {
    fit();
    if (S.mode === 'slot') toSlot();
    else if (S.mode === 'rest') { S.y = floorY(); S.x = Math.max(0, Math.min(wallX(), S.x)); render(); }
  });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(start);
})();
