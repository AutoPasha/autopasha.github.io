// Текстуры, которые рисуем сами: настроечная таблица, дым, зерно.
import * as THREE from 'three';

const TT = '"Bedstead", "IBM Plex Mono", monospace';

// Настроечная таблица в духе УЭИТ: сетка, круг, цветные полосы, клин яркости,
// в центре имя мастерской. progress 0..1 рисует полосу загрузки, null — без неё.
export function drawTestCard(ctx, w, h, progress = null, t = 0) {
  ctx.save();
  ctx.fillStyle = '#7d7f84';
  ctx.fillRect(0, 0, w, h);

  // рамка из чёрно-белых прямоугольников по краю
  const cell = w / 20;
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = i % 2 ? '#f2f2ee' : '#111';
    ctx.fillRect(i * cell, 0, cell, cell * 0.45);
    ctx.fillStyle = i % 2 ? '#111' : '#f2f2ee';
    ctx.fillRect(i * cell, h - cell * 0.45, cell, cell * 0.45);
  }
  const rows = Math.round(h / cell);
  for (let j = 0; j < rows; j++) {
    ctx.fillStyle = j % 2 ? '#f2f2ee' : '#111';
    ctx.fillRect(0, j * cell, cell * 0.45, cell);
    ctx.fillStyle = j % 2 ? '#111' : '#f2f2ee';
    ctx.fillRect(w - cell * 0.45, j * cell, cell * 0.45, cell);
  }

  // белая сетка
  ctx.strokeStyle = 'rgba(245,245,240,.9)';
  ctx.lineWidth = Math.max(1, w / 512);
  for (let x = cell; x < w; x += cell) { ctx.beginPath(); ctx.moveTo(x, cell * 0.45); ctx.lineTo(x, h - cell * 0.45); ctx.stroke(); }
  for (let y = cell; y < h; y += cell) { ctx.beginPath(); ctx.moveTo(cell * 0.45, y); ctx.lineTo(w - cell * 0.45, y); ctx.stroke(); }

  // угловые круги с перекрестием
  const small = h * 0.13;
  [[0.13, 0.17], [0.87, 0.17], [0.13, 0.83], [0.87, 0.83]].forEach(([cx, cy]) => {
    const x = cx * w, y = cy * h;
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath(); ctx.arc(x, y, small, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#eee'; ctx.lineWidth = w / 400;
    ctx.beginPath(); ctx.arc(x, y, small * 0.92, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - small, y); ctx.lineTo(x + small, y); ctx.moveTo(x, y - small); ctx.lineTo(x, y + small); ctx.stroke();
    for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.arc(x, y, small * k / 4, 0, Math.PI * 2); ctx.stroke(); }
  });

  // большой круг
  const R = h * 0.43, cx = w / 2, cy = h / 2;
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = '#222'; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

  const band = R * 2 / 9;
  let y0 = cy - R;
  // цветные полосы
  const bars = ['#f4f4f0', '#e8d33a', '#3bc7cf', '#3fb34a', '#c43fb4', '#d4362f', '#2d3fc9', '#111'];
  bars.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(cx - R + i * (R * 2 / 8), y0, R * 2 / 8 + 1, band * 1.6); });
  y0 += band * 1.6;
  // решётки разной частоты
  const groups = 6, gw = R * 2 / groups;
  for (let g = 0; g < groups; g++) {
    const step = Math.max(2, (groups - g) * w / 400);
    for (let x = cx - R + g * gw; x < cx - R + (g + 1) * gw; x += step * 2) {
      ctx.fillStyle = '#eee'; ctx.fillRect(x, y0, step, band);
    }
  }
  y0 += band;
  // центр: чёрная плашка с именем
  ctx.fillStyle = '#0c0c0c'; ctx.fillRect(cx - R, y0, R * 2, band * 2.6);
  ctx.fillStyle = '#f3efe6';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `${Math.round(band * 1.15)}px ${TT}`;
  ctx.fillText('КИНЕСКОП', cx, y0 + band * 1.05);
  ctx.font = `${Math.round(band * 0.42)}px ${TT}`;
  ctx.fillStyle = '#c9c4b8';
  ctx.fillText('МАСТЕРСКАЯ РЕМОНТА ТЕХНИКИ', cx, y0 + band * 2.05);
  y0 += band * 2.6;
  // клин яркости
  for (let i = 0; i < 10; i++) {
    const v = Math.round(i / 9 * 235 + 10);
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(cx - R + i * (R * 2 / 10), y0, R * 2 / 10 + 1, band);
  }
  y0 += band;
  // полоса загрузки или часы
  ctx.fillStyle = '#151515'; ctx.fillRect(cx - R, y0, R * 2, band * 2);
  ctx.font = `${Math.round(band * 0.5)}px ${TT}`;
  if (progress !== null) {
    const bw = R * 1.2, bh = band * 0.55, bx = cx - bw / 2, by = y0 + band * 0.35;
    ctx.strokeStyle = '#f3efe6'; ctx.lineWidth = w / 340; ctx.strokeRect(bx, by, bw, bh);
    const n = 18, filled = Math.floor(progress * n + 1e-6);
    for (let i = 0; i < filled; i++) { ctx.fillStyle = '#f3efe6'; ctx.fillRect(bx + 4 + i * (bw - 8) / n, by + 4, (bw - 8) / n - 4, bh - 8); }
    ctx.fillStyle = '#f3efe6';
    ctx.fillText(`НАСТРОЙКА ${String(Math.round(progress * 100)).padStart(3, ' ')}%`, cx, y0 + band * 1.45);
  } else {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0'), ss = String(d.getSeconds()).padStart(2, '0');
    ctx.fillStyle = '#f3efe6';
    ctx.font = `${Math.round(band * 0.8)}px ${TT}`;
    ctx.fillText(`${hh}:${mm}:${ss}`, cx, y0 + band * 0.75);
    ctx.font = `${Math.round(band * 0.4)}px ${TT}`;
    ctx.fillStyle = '#c9c4b8';
    ctx.fillText('ПРИЁМ ТЕХНИКИ С 10 ДО 21', cx, y0 + band * 1.5);
  }
  ctx.restore();
  ctx.strokeStyle = '#f3efe6'; ctx.lineWidth = w / 300;
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();
}

export function makeTestCard(w = 1024, h = 768) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  drawTestCard(ctx, w, h, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return { canvas: c, ctx, tex, draw(progress, t) { drawTestCard(ctx, w, h, progress, t); tex.needsUpdate = true; } };
}

// Мягкое пятно дыма: несколько октав шума внутри круга.
function hash(x, y, s) {
  const n = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453;
  return n - Math.floor(n);
}
function vnoise(x, y, s) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi, s), b = hash(xi + 1, yi, s), c = hash(xi, yi + 1, s), d = hash(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function makeSmokeTexture(seed = 1, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      let f = 0, amp = 0.5, fr = 3;
      for (let o = 0; o < 5; o++) { f += amp * vnoise(nx * fr, ny * fr, seed + o); amp *= 0.5; fr *= 2.03; }
      const dx = nx - 0.5, dy = ny - 0.5;
      const r = Math.sqrt(dx * dx + dy * dy) * 2;
      const fall = Math.max(0, 1 - r);
      const a = Math.pow(Math.max(0, f - 0.28) * 1.6, 1.4) * fall * fall;
      const i = (y * size + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
      img.data[i + 3] = Math.min(255, a * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Пятнистая «грязь» для пола и задника.
export function makeGrungeTexture(size = 512, seed = 7) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      let f = 0, amp = 0.55, fr = 4;
      for (let o = 0; o < 6; o++) {
        // бесшовность: шум на торе
        const a1 = nx * Math.PI * 2, a2 = ny * Math.PI * 2;
        f += amp * vnoise(Math.cos(a1) * fr * 0.3 + Math.sin(a2) * fr * 0.17 + fr, Math.sin(a1) * fr * 0.3 + Math.cos(a2) * fr * 0.21 + fr, seed + o);
        amp *= 0.5; fr *= 2.1;
      }
      const v = Math.max(0, Math.min(255, (f * 0.9 + hash(x, y, seed) * 0.12) * 255));
      const i = (y * size + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}
