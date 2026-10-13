// Кофейное зерно кодом: форма с бороздкой на плоской стороне, серебристая
// плёнка в бороздке, цвет и блеск масла от сырого зелёного до французской
// обжарки. Одно главное зерно и горсть мелких вокруг него. Камера сама
// вписывает то, что нужно показать, в заданный прямоугольник экрана.
import * as THREE from 'three';
import { RoomEnvironment } from '../lib/RoomEnvironment.js';

// Семь ступеней обжарки: цвет зерна, шероховатость, лак масла, плёнка в
// бороздке, насколько раскрылась бороздка, насколько зерно выросло
export const STUPENI = [
  { c: '#8f9a7a', r: 0.82, cc: 0.00, ch: 0.95, open: 0.00, g: 0.00, bump: 1.00 },
  { c: '#b9a26a', r: 0.76, cc: 0.00, ch: 0.80, open: 0.12, g: 0.03, bump: 0.85 },
  { c: '#8f5b37', r: 0.70, cc: 0.00, ch: 0.55, open: 0.38, g: 0.07, bump: 0.70 },
  { c: '#6c4329', r: 0.62, cc: 0.04, ch: 0.36, open: 0.56, g: 0.10, bump: 0.60 },
  { c: '#4e2f1d', r: 0.52, cc: 0.14, ch: 0.20, open: 0.72, g: 0.13, bump: 0.50 },
  { c: '#382115', r: 0.38, cc: 0.55, ch: 0.07, open: 0.86, g: 0.16, bump: 0.40 },
  { c: '#1f120b', r: 0.24, cc: 1.00, ch: 0.00, open: 1.00, g: 0.18, bump: 0.30 },
];
const LIN = STUPENI.map(s => new THREE.Color(s.c));   // Color хранит линейные значения
const CHAFF = new THREE.Color('#d8d0ac');

function stupen(r) {
  const k = Math.max(0, Math.min(6, r));
  const i = Math.min(5, Math.floor(k)), t = k - i;
  const a = STUPENI[i], b = STUPENI[i + 1];
  const m = (x, y) => x + (y - x) * t;
  return {
    color: LIN[i].clone().lerp(LIN[i + 1], t),
    r: m(a.r, b.r), cc: m(a.cc, b.cc), ch: m(a.ch, b.ch), open: m(a.open, b.open), g: m(a.g, b.g), bump: m(a.bump, b.bump),
  };
}

function rng(seed) {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}

// ---------- текстуры: пятна на зерне и мелкий рельеф ----------
function canvasTex(w, h, draw, srgb) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function makeMottle() {
  const R = rng(7);
  return canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#f1f1f1'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 260; i++) {
      const x = R() * w, y = R() * h, r = 10 + R() * 46, v = 200 + Math.floor(R() * 55);
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${v},${v},${v},0.55)`); gr.addColorStop(1, `rgba(${v},${v},${v},0)`);
      g.fillStyle = gr;
      for (const dx of [-w, 0, w]) { g.save(); g.translate(dx, 0); g.fillRect(x - r, y - r, r * 2, r * 2); g.restore(); }
    }
    const id = g.getImageData(0, 0, w, h), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const n = (R() - 0.5) * 18; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    g.putImageData(id, 0, 0);
  }, true);
}
function makeBump() {
  const R = rng(11);
  return canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#808080'; g.fillRect(0, 0, w, h);
    // тонкие морщины вдоль зерна и мелкая крупа
    g.lineCap = 'round';
    for (let i = 0; i < 420; i++) {
      const x = R() * w, y = R() * h, len = 12 + R() * 40, v = R() < 0.5 ? 70 : 185;
      g.strokeStyle = `rgba(${v},${v},${v},${0.18 + R() * 0.25})`; g.lineWidth = 0.8 + R() * 1.6;
      g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + (R() - 0.5) * 8, y + len / 2, x + (R() - 0.5) * 6, y + len); g.stroke();
    }
    const id = g.getImageData(0, 0, w, h), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const n = (R() - 0.5) * 40; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    g.putImageData(id, 0, 0);
  }, false);
}

// ---------- форма зерна ----------
// u — вдоль зерна от кончика до кончика, v — по кругу; бороздка на v = 3/4
// (плоская сторона, −z). Узлы сгущены у бороздки, чтобы она вышла гладкой.
function makeBean(nu, nv, seed) {
  const R = rng(seed);
  const P = {
    W: 0.70 + (R() - 0.5) * 0.08, Tr: 0.53 + (R() - 0.5) * 0.06, Tf: 0.25 + (R() - 0.5) * 0.05,
    tip: (R() - 0.5) * 0.12, s: R() < 0.5 ? -1 : 1, n1: R() * 6.28, n2: R() * 6.28, bend: (R() - 0.5) * 0.12,
  };
  const cnt = (nu + 1) * (nv + 1);
  const pos = new Float32Array(cnt * 3), uv = new Float32Array(cnt * 2), cr = new Float32Array(cnt * 2);
  const TH = new Float32Array(cnt), PH = new Float32Array(cnt);
  const A = 0.62;  // сгущение узлов у бороздки
  let k = 0;
  for (let i = 0; i <= nu; i++) {
    for (let j = 0; j <= nv; j++, k++) {
      const v = j / nv;
      TH[k] = (i / nu) * Math.PI;
      PH[k] = 2 * Math.PI * v - A * Math.sin(2 * Math.PI * (v - 0.75)); // монотонно при A < 1
      uv[k * 2] = v; uv[k * 2 + 1] = i / nu;
    }
  }
  const idx = [];
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
    const a = i * (nv + 1) + j, b = a + nv + 1;
    if (i > 0) idx.push(a, b, a + 1);
    if (i < nu - 1) idx.push(a + 1, b, b + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setIndex(idx);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setAttribute('aCr', new THREE.BufferAttribute(cr, 2));

  function shape(open, grow) {
    const sig = 0.075 + 0.06 * open, dep = 0.10 + 0.09 * open;
    const sc = 1 + grow;
    for (let k = 0; k < cnt; k++) {
      const th = TH[k], ph = PH[k];
      const st = Math.sin(th), ct = Math.cos(th);
      const s = Math.pow(Math.max(st, 0), 0.8);
      let x = ct * (1 + P.tip * ct);
      const cy = Math.cos(ph), sz = Math.sin(ph);
      let y = s * P.W * cy;
      let z = sz >= 0 ? s * P.Tr * sz : -s * P.Tf * Math.pow(-sz, 0.5);
      // бороздка: лёгкая S-кривая вдоль зерна
      let d = ph - 1.5 * Math.PI - P.s * 0.22 * Math.sin(th * 2);
      d = Math.atan2(Math.sin(d), Math.cos(d));
      const env = Math.pow(Math.max(st, 0), 1.8);
      const core = Math.exp(-(d * d) / (sig * sig));
      const lip = Math.exp(-Math.pow((Math.abs(d) - sig * 1.7) / sig, 2));
      z += (dep * core - 0.018 * lip) * env;
      // живая неровность и чуть изогнутая спинка
      const n = 0.014 * Math.sin(3.1 * th + P.n1) * Math.sin(2.3 * ph + P.n2) + 0.008 * Math.sin(7 * th + P.n2) * Math.cos(5 * ph);
      y += P.bend * ct * ct;
      const f = (1 + n) * sc;
      pos[k * 3] = x * f; pos[k * 3 + 1] = y * f; pos[k * 3 + 2] = z * f;
      const flat = sz < 0 ? 1 : 0;
      cr[k * 2] = flat * Math.exp(-(d * d) / Math.pow(sig * 1.25, 2)) * env;
      cr[k * 2 + 1] = flat * core * env;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aCr.needsUpdate = true;
    geo.computeVertexNormals();
    // шов по кругу и кончики: усредняем нормали совпадающих узлов
    const nr = geo.attributes.normal.array;
    for (let i = 0; i <= nu; i++) {
      const a = i * (nv + 1), b = a + nv;
      for (let c = 0; c < 3; c++) { const m = (nr[a * 3 + c] + nr[b * 3 + c]) / 2; nr[a * 3 + c] = nr[b * 3 + c] = m; }
    }
    for (const i of [0, nu]) {
      const sx = i === 0 ? 1 : -1;
      for (let j = 0; j <= nv; j++) { const a = (i * (nv + 1) + j) * 3; nr[a] = sx; nr[a + 1] = 0; nr[a + 2] = 0; }
    }
    geo.attributes.normal.needsUpdate = true;
    geo.computeBoundingSphere();
  }
  return { geo, shape };
}

function beanMaterial(mottle, bump) {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, map: mottle, bumpMap: bump, bumpScale: 1.2,
    roughness: 0.6, metalness: 0, clearcoat: 0, clearcoatRoughness: 0.32,
    sheen: 0.25, sheenRoughness: 0.6, sheenColor: new THREE.Color('#c9d6c0'),
  });
  m.userData.u = { uChaff: { value: 0.5 }, uChaffCol: { value: CHAFF.clone() } };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, m.userData.u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aCr;\nvarying vec2 vCr;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvCr = aCr;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vCr;\nuniform float uChaff;\nuniform vec3 uChaffCol;')
      .replace('#include <map_fragment>', `#include <map_fragment>
        // серебристая плёнка держится в бороздке у светлых обжарок, у тёмных там глубокая тень
        diffuseColor.rgb = mix(diffuseColor.rgb, uChaffCol, clamp(vCr.x * uChaff, 0.0, 0.75));
        diffuseColor.rgb *= 1.0 - 0.7 * vCr.y * (1.0 - 0.6 * uChaff);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.85, vCr.x * uChaff);`);
  };
  return m;
}

export function createZerno(canvas, { onReady } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.75 : 2));
  // Программный рендер (безголовый браузер, ноутбук без видеокарты): без ретины и с меньшей сеткой
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.7;
  const camera = new THREE.PerspectiveCamera(24, 1, 0.05, 80);

  // Тёплый ключевой слева сверху, холодный контровой цвета патины сзади справа
  const key = new THREE.DirectionalLight(0xfff0e0, 2.4); key.position.set(-3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fd8c6, 2.2); rim.position.set(4, 2.5, -4); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffd2b0, 0.5); fill.position.set(2, -3, 3); scene.add(fill);

  const mottle = makeMottle(), bump = makeBump();
  const Q = soft ? 0.6 : 1;

  // ---------- главное зерно ----------
  const mainB = makeBean(Math.round(120 * Q), Math.round(110 * Q), 3);
  const mainMat = beanMaterial(mottle, bump);
  const main = new THREE.Mesh(mainB.geo, mainMat);
  const mainPivot = new THREE.Group(); mainPivot.add(main); scene.add(mainPivot);
  main.rotation.set(0, 0, 0);

  // ---------- горсть вокруг ----------
  const R = rng(42);
  const forms = [5, 8, 13].map(s => makeBean(Math.round(44 * Q), Math.round(40 * Q), s));
  const pile = [];
  const N = phone ? 15 : 21;
  for (let i = 0; i < N; i++) {
    const f = forms[i % 3];
    const green = i === 3 || i === 9 || i === 14 || i === 19;
    const mat = beanMaterial(mottle, bump);
    const mesh = new THREE.Mesh(f.geo, mat);
    // точка в облаке: не ближе 1,25 к центру, приплюснуто по глубине
    let p;
    for (let t = 0; t < 40; t++) {
      p = new THREE.Vector3((R() - 0.5) * 5.0, (R() - 0.5) * 4.2, (R() - 0.5) * 2.4);
      if (p.length() > 1.5 && Math.hypot(p.x / 2.5, p.y / 2.1) < 1) break;
    }
    const s = 0.34 + R() * 0.26;
    mesh.scale.setScalar(s);
    mesh.rotation.set(R() * 6.28, R() * 6.28, R() * 6.28);
    const roast = green ? 0 : 3.3 + R() * 1.9;
    pile.push({ mesh, home: p, s, roast, spin: new THREE.Vector3((R() - 0.5) * 0.5, (R() - 0.5) * 0.5, (R() - 0.5) * 0.4), form: f });
    scene.add(mesh);
  }
  for (const f of forms) f.shape(0.6, 0.1);

  function paint(mat, r) {
    const s = stupen(r);
    mat.color.copy(s.color);
    mat.roughness = s.r;
    mat.clearcoat = s.cc;
    mat.bumpScale = 1.6 * s.bump;
    mat.sheen = 0.35 * (1 - Math.min(1, r / 2));
    mat.userData.u.uChaff.value = s.ch;
    return s;
  }
  for (const b of pile) paint(b.mesh.material, b.roast);

  // ---------- состояние ----------
  const st = {
    roast: 4,            // 0..6
    spread: 0,           // 0 — горсть вокруг, 1 — горсть разлетелась за кадр
    rect: [0.5, 0.1, 0.95, 0.9],
    fitR: 3.2,           // радиус того, что вписываем
    yaw: 0, tilt: 0.0, roll: 0.42, spin: 0, flip: 0,
    t: 0,
  };
  let shapedRoast = -1;
  function applyRoast() {
    const s = paint(mainMat, st.roast);
    if (Math.abs(shapedRoast - st.roast) > 0.02) { mainB.shape(s.open, s.g); shapedRoast = st.roast; }
  }

  // ---------- камера: вписать шар радиуса fitR в прямоугольник ----------
  let W = 1, H = 1;
  function fit() {
    const [x0, y0, x1, y1] = st.rect;
    const rw = (x1 - x0), rh = (y1 - y0);
    camera.aspect = W / H;
    camera.clearViewOffset();
    camera.updateProjectionMatrix();
    const t = Math.tan(camera.fov * Math.PI / 360);
    const d = Math.max(st.fitR / (t * rh), st.fitR / (t * camera.aspect * rw)) * 1.04;
    camera.position.set(0, 0.25 * d * 0.08, d);
    camera.lookAt(0, 0, 0);
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    camera.setViewOffset(W, H, -(cx - 0.5) * W, -(cy - 0.5) * H, W, H);
    camera.updateProjectionMatrix();
  }
  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    renderer.setSize(W, H, false);
  }
  addEventListener('resize', resize);
  resize();

  const tmpQ = new THREE.Euler();
  function pose() {
    // главное зерно: длинной осью почти горизонтально, вращается вокруг вертикали
    // плоской стороной с бороздкой к зрителю; вращается вокруг своей длинной оси
    mainPivot.rotation.set(st.tilt, st.yaw, st.roll);
    main.rotation.set(Math.PI + st.spin + st.flip, 0, 0);
    const e = st.spread;
    const ee = e * e * (3 - 2 * e);
    for (const b of pile) {
      const k = 1 + ee * 3.2;
      b.mesh.position.set(b.home.x * k, b.home.y * k, b.home.z * k + ee * 2.5);
      b.mesh.rotation.set(b.mesh.userData.rx0 + b.spin.x * st.t, b.mesh.userData.ry0 + b.spin.y * st.t, b.mesh.userData.rz0 + b.spin.z * st.t);
      b.mesh.visible = ee < 0.98;
    }
  }
  for (const b of pile) { b.mesh.userData.rx0 = b.mesh.rotation.x; b.mesh.userData.ry0 = b.mesh.rotation.y; b.mesh.userData.rz0 = b.mesh.rotation.z; }

  function render() {
    applyRoast();
    pose();
    fit();
    renderer.render(scene, camera);
  }

  // Точка на экране для подписей и линий: кончик или бороздка главного зерна
  const anchors = {
    crease: () => new THREE.Vector3(0.15, 0, -0.2),
    tip: () => new THREE.Vector3(1.05, 0, 0),
  };
  function project(name) {
    const v = anchors[name]().clone().applyMatrix4(main.matrixWorld).project(camera);
    return { x: (v.x + 1) / 2 * W, y: (1 - v.y) / 2 * H };
  }

  applyRoast();
  const ready = Promise.resolve().then(() => { render(); onReady && onReady(); });
  return { st, render, resize, project, ready, soft, stupen };
}
