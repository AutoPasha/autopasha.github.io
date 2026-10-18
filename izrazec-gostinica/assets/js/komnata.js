// Номер «Изразца» в разрезе: две стены, кирпичная с окном на Волгу и
// оштукатуренная с изголовьем, печь с изразцами в углу, кровать, лампа у
// кровати, кресло у окна, шторы до пола. Одно число st.time ведёт сутки:
// 0 — полдень, 0.5 — закат, 1 — ночь. Солнце (ночью луна) входит в окно и
// кладёт пятно на пол, лампа загорается к вечеру, шторы закрываются ночью.
// Камера сама вписывает комнату в заданную часть экрана.
import * as THREE from 'three';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };

// три опорных состояния суток, между ними плавно
const KEYS = {
  zenith: ['#6d9cc9', '#3e4d78', '#0a1126'],
  horizon: ['#d6e3ea', '#f2a066', '#1b2340'],
  sil: ['#7d8891', '#3a3145', '#0b0e18'],
  hemiSky: ['#dfe8ff', '#ffd2ad', '#3b4a78'],
  hemiI: [1.15, 0.6, 0.06],
  sunC: ['#fff2de', '#ff9248', '#a7b9ff'],
  sunI: [3.2, 2.6, 0.5],
  sunEl: [34, 11, 26],
};
const ca = new THREE.Color(), cb = new THREE.Color();
function key(name, t, out) {
  const k = KEYS[name], i = t < 0.5 ? 0 : 1, f = t < 0.5 ? t / 0.5 : (t - 0.5) / 0.5;
  if (typeof k[0] === 'number') return k[i] + (k[i + 1] - k[i]) * f;
  ca.set(k[i]); cb.set(k[i + 1]);
  return out.copy(ca).lerp(cb, f);
}

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function rng(seed) { return () => ((seed = (seed * 16807) % 2147483647) / 2147483647); }

export function createKomnata(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.75 : 2));
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const bg = new THREE.Color('#120f0d');
  const camera = new THREE.PerspectiveCamera(24, 1, 0.05, 60);

  // ---------- текстуры ----------
  const brickTex = canvasTex(512, 512, (g, w, h) => {
    const r = rng(11);
    g.fillStyle = '#b7a99a'; g.fillRect(0, 0, w, h);
    const rows = 13, rh = h / rows, bw = w / 4;
    for (let y = 0; y < rows; y++) for (let x = -1; x < 5; x++) {
      const ox = (y % 2) * bw / 2, k = r();
      const R = 128 + k * 50, G = 58 + k * 22 + r() * 8, B = 42 + k * 16;
      g.fillStyle = `rgb(${R | 0},${G | 0},${B | 0})`;
      g.fillRect(x * bw + ox + 3, y * rh + 3, bw - 6, rh - 6);
      if (r() < 0.35) { g.fillStyle = 'rgba(40,20,14,.18)'; g.fillRect(x * bw + ox + 3 + r() * bw * 0.6, y * rh + 3, bw * 0.3, rh - 6); }
      if (r() < 0.25) { g.fillStyle = 'rgba(255,230,210,.10)'; g.fillRect(x * bw + ox + 3, y * rh + 3, bw - 6, (rh - 6) * 0.4); }
    }
  });
  brickTex.wrapS = brickTex.wrapT = THREE.RepeatWrapping; brickTex.repeat.set(1.1, 1.1);

  const plasterTex = canvasTex(256, 256, (g, w, h) => {
    const r = rng(5);
    g.fillStyle = '#e9e0d0'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '120,100,80' : '255,250,240'},${0.03 + r() * 0.04})`; g.fillRect(r() * w, r() * h, 1 + r() * 3, 1 + r() * 3); }
  });
  plasterTex.wrapS = plasterTex.wrapT = THREE.RepeatWrapping; plasterTex.repeat.set(2, 2);

  const floorTex = canvasTex(1024, 1024, (g, w, h) => {
    const r = rng(23), n = 24, pw = w / n;
    for (let i = 0; i < n; i++) {
      let y = -r() * 400;
      while (y < h) {
        const len = 260 + r() * 380, k = r();
        g.fillStyle = `rgb(${(122 + k * 34) | 0},${(84 + k * 22) | 0},${(54 + k * 14) | 0})`;
        g.fillRect(i * pw, y, pw, len);
        g.globalAlpha = 0.08;
        for (let s = 0; s < 6; s++) { g.fillStyle = r() < 0.5 ? '#3a2416' : '#e8c79c'; g.fillRect(i * pw + r() * pw, y, 1.5, len); }
        g.globalAlpha = 1;
        g.fillStyle = 'rgba(30,18,10,.55)'; g.fillRect(i * pw, y + len - 2, pw, 2);
        y += len;
      }
      g.fillStyle = 'rgba(30,18,10,.6)'; g.fillRect(i * pw, 0, 2, h);
    }
  });

  // изразец: глазурь от бутылочно-зелёного к бирюзе, по центру рельефная розетка
  const tileTex = canvasTex(256, 256, (g, w, h) => {
    const gr = g.createRadialGradient(w * 0.42, h * 0.38, 10, w / 2, h / 2, w * 0.75);
    gr.addColorStop(0, '#9cc9b4'); gr.addColorStop(0.6, '#5e9a84'); gr.addColorStop(1, '#3a6b5a');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(14,34,28,.55)'; g.lineWidth = 7; g.strokeRect(3, 3, w - 6, h - 6);
    g.strokeStyle = 'rgba(210,240,225,.35)'; g.lineWidth = 2; g.strokeRect(14, 14, w - 28, h - 28);
    g.save(); g.translate(w / 2, h / 2);
    for (let i = 0; i < 8; i++) {
      g.rotate(Math.PI / 4);
      g.beginPath(); g.ellipse(0, -38, 13, 34, 0, 0, Math.PI * 2);
      g.fillStyle = i % 2 ? 'rgba(20,52,42,.45)' : 'rgba(190,230,210,.28)'; g.fill();
    }
    g.beginPath(); g.arc(0, 0, 16, 0, Math.PI * 2); g.fillStyle = '#c9a75c'; g.fill();
    g.beginPath(); g.arc(-4, -4, 6, 0, Math.PI * 2); g.fillStyle = 'rgba(255,240,200,.6)'; g.fill();
    g.restore();
    for (const [x, y] of [[0, 0], [w, 0], [0, h], [w, h]]) { g.beginPath(); g.arc(x, y, 30, 0, Math.PI * 2); g.fillStyle = 'rgba(20,52,42,.35)'; g.fill(); }
  });
  tileTex.wrapS = tileTex.wrapT = THREE.RepeatWrapping;

  const rugTex = canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#8f3b2c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#d9c7a6'; g.fillRect(14, 14, w - 28, h - 28);
    g.fillStyle = '#8f3b2c'; g.fillRect(26, 26, w - 52, h - 52);
    for (let i = 0; i < 7; i++) { g.fillStyle = i % 2 ? '#2f4a5a' : '#d9c7a6'; g.fillRect(48 + i * 62, 48, 30, h - 96); }
  });

  // ---------- материалы ----------
  const M = {
    brick: [new THREE.MeshStandardMaterial({ map: brickTex, roughness: 0.92 })],
    plaster: new THREE.MeshStandardMaterial({ map: plasterTex, roughness: 0.95 }),
    floor: new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.62 }),
    slab: new THREE.MeshStandardMaterial({ color: 0x241d18, roughness: 0.9 }),
    tile: new THREE.MeshPhysicalMaterial({ map: tileTex, roughness: 0.32, clearcoat: 0.9, clearcoatRoughness: 0.12 }),
    tileTop: new THREE.MeshPhysicalMaterial({ color: 0x3d6e5e, roughness: 0.35, clearcoat: 0.8 }),
    iron: new THREE.MeshStandardMaterial({ color: 0x23211f, roughness: 0.55, metalness: 0.6 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x5b3a24, roughness: 0.55 }),
    sash: new THREE.MeshStandardMaterial({ color: 0x9aa89c, roughness: 0.5 }),
    sill: new THREE.MeshStandardMaterial({ color: 0xece6da, roughness: 0.5 }),
    linen: new THREE.MeshStandardMaterial({ color: 0xf3f0ea, roughness: 0.88 }),
    duvet: new THREE.MeshStandardMaterial({ color: 0xe9e5dc, roughness: 0.9 }),
    wool: new THREE.MeshStandardMaterial({ color: 0x5a4334, roughness: 1 }),
    fabric: new THREE.MeshStandardMaterial({ color: 0xb48a46, roughness: 0.9 }),
    curtain: new THREE.MeshStandardMaterial({ color: 0xcfc3ad, roughness: 0.95, side: THREE.DoubleSide }),
    brass: new THREE.MeshStandardMaterial({ color: 0xb08d4f, roughness: 0.35, metalness: 0.9 }),
    shade: new THREE.MeshStandardMaterial({ color: 0xefe2c4, roughness: 0.8, side: THREE.DoubleSide, emissive: 0xffb15e, emissiveIntensity: 0 }),
    bulb: new THREE.MeshBasicMaterial({ color: 0xfff1d6, toneMapped: false }),
    pot: new THREE.MeshStandardMaterial({ color: 0xa65a3a, roughness: 0.8 }),
    leaf: new THREE.MeshStandardMaterial({ color: 0x3f6a3a, roughness: 0.7 }),
    rug: new THREE.MeshStandardMaterial({ map: rugTex, roughness: 1 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xdfeee9, roughness: 0.05, transparent: true, opacity: 0.08, depthWrite: false }),
    glow: new THREE.MeshBasicMaterial({ color: 0xff7a2e, toneMapped: false }),
  };
  M.brick.push(M.plaster); // торцы проёма оштукатурены

  const room = new THREE.Group(); scene.add(room);
  const add = (geo, mat, x, y, z, parent = room, shadow = true) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
    m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m;
  };
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  // мягкий брусок: скруглённый прямоугольник с фаской, для матраса, подушек, кресла
  const rbox = (w, h, d, r = 0.04) => {
    const s = new THREE.Shape(), x = -w / 2 + r, y = -h / 2 + r, W = w - 2 * r, H = h - 2 * r, q = Math.min(r, W / 2, H / 2) * 0.9;
    s.moveTo(x + q, y); s.lineTo(x + W - q, y); s.quadraticCurveTo(x + W, y, x + W, y + q); s.lineTo(x + W, y + H - q);
    s.quadraticCurveTo(x + W, y + H, x + W - q, y + H); s.lineTo(x + q, y + H); s.quadraticCurveTo(x, y + H, x, y + H - q);
    s.lineTo(x, y + q); s.quadraticCurveTo(x, y, x + q, y);
    const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(0.001, d - 2 * r), bevelEnabled: true, bevelThickness: r, bevelSize: r, bevelSegments: 4, curveSegments: 6 });
    g.translate(0, 0, -(d - 2 * r) / 2); g.computeVertexNormals(); return g;
  };

  // ---------- коробка комнаты ----------
  const L = 1.7, WT = 0.16, HW = 2.75;
  // пол: доска сверху, тёмный срез по краям
  add(box(2 * L + WT, 0.14, 2 * L + WT), [M.slab, M.slab, M.floor, M.slab, M.slab, M.slab], -WT / 2, -0.07, -WT / 2);
  // задняя стена, штукатурка
  add(box(2 * L + WT, HW, WT), M.plaster, -WT / 2, HW / 2, -L - WT / 2);
  // левая стена, кирпич, с окном
  const WZ0 = -0.12, WZ1 = 1.0, WY0 = 0.86, WY1 = 2.38;
  {
    const s = new THREE.Shape(); s.moveTo(-L - WT, 0); s.lineTo(L, 0); s.lineTo(L, HW); s.lineTo(-L - WT, HW); s.closePath();
    const h = new THREE.Path(); h.moveTo(WZ0, WY0); h.lineTo(WZ0, WY1); h.lineTo(WZ1, WY1); h.lineTo(WZ1, WY0); h.closePath(); s.holes.push(h);
    const g = new THREE.ExtrudeGeometry(s, { depth: WT, bevelEnabled: false });
    g.rotateY(-Math.PI / 2); g.translate(-L, 0, 0);
    add(g, M.brick, 0, 0, 0);
  }
  // плинтусы
  add(box(2 * L, 0.09, 0.025), M.sill, 0, 0.045, -L + 0.0125);
  add(box(0.025, 0.09, 2 * L), M.sill, -L + 0.0125, 0.045, 0);

  // ---------- окно ----------
  const win = new THREE.Group(); room.add(win);
  const WX = -L - WT * 0.55, WCZ = (WZ0 + WZ1) / 2, WW = WZ1 - WZ0, WH = WY1 - WY0, FR = 0.06;
  // небо за окном рисует шейдер по направлению взгляда: как настоящее окно в даль
  const silTex = canvasTex(2048, 256, (g, w, h) => {
    const r = rng(41), base = h * 0.72;
    g.fillStyle = '#fff';
    // дальний берег: деревья
    g.beginPath(); g.moveTo(0, base);
    for (let x = 0; x <= w; x += 6) g.lineTo(x, base - 6 - r() * 10 - Math.sin(x * 0.01) * 4);
    g.lineTo(w, base + 10); g.lineTo(0, base + 10); g.fill();
    // дома, храмы с луковицами, колокольни
    const church = (cx, s) => {
      g.fillRect(cx - 26 * s, base - 60 * s, 52 * s, 60 * s);
      g.fillRect(cx - 9 * s, base - 92 * s, 18 * s, 32 * s);
      g.beginPath(); g.ellipse(cx, base - 104 * s, 13 * s, 15 * s, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.moveTo(cx - 6 * s, base - 112 * s); g.quadraticCurveTo(cx, base - 118 * s, cx, base - 132 * s); g.quadraticCurveTo(cx, base - 118 * s, cx + 6 * s, base - 112 * s); g.fill();
      g.fillRect(cx - 1 * s, base - 146 * s, 2 * s, 16 * s); g.fillRect(cx - 6 * s, base - 141 * s, 12 * s, 2 * s);
      for (const dx of [-18, 18]) {
        g.fillRect(cx + dx * s - 5 * s, base - 72 * s, 10 * s, 12 * s);
        g.beginPath(); g.ellipse(cx + dx * s, base - 78 * s, 7 * s, 8 * s, 0, 0, Math.PI * 2); g.fill();
      }
    };
    const tower = (cx, s) => {
      g.fillRect(cx - 12 * s, base - 120 * s, 24 * s, 120 * s);
      g.beginPath(); g.moveTo(cx - 12 * s, base - 120 * s); g.lineTo(cx, base - 168 * s); g.lineTo(cx + 12 * s, base - 120 * s); g.fill();
      g.fillRect(cx - 1 * s, base - 184 * s, 2 * s, 18 * s);
    };
    for (let x = 0; x < w;) { const hw = 40 + r() * 70, hh = 14 + r() * 26; g.fillRect(x, base - hh, hw - 4, hh); x += hw; }
    church(w * 0.36, 1.05); tower(w * 0.43, 0.9); church(w * 0.58, 0.8); church(w * 0.2, 0.65); tower(w * 0.7, 0.7);
  }, false);
  const winTex = canvasTex(2048, 256, (g, w, h) => {
    const r = rng(77), base = h * 0.72;
    for (let i = 0; i < 160; i++) { const x = r() * w, y = base - 6 - r() * 28; g.fillStyle = `rgba(255,${190 + r() * 40},120,${0.6 + r() * 0.4})`; g.fillRect(x, y, 3, 4); }
  }, false);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      zenith: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, sil: { value: new THREE.Color() },
      silTex: { value: silTex }, winTex: { value: winTex }, night: { value: 0 }, winC: { value: new THREE.Vector3() }, sunset: { value: 0 }, lights: { value: 0 },
    },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `
      uniform vec3 zenith, horizon, sil; uniform sampler2D silTex, winTex; uniform float night, sunset, lights; uniform vec3 winC;
      varying vec3 vW;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        // углы считаем от направления на центр окна и растягиваем: камера стоит далеко,
        // и честный вид в даль давал бы в окне один купол на всё стекло
        vec3 d = normalize(vW - cameraPosition), d0 = normalize(winC - cameraPosition);
        float az = (atan(d.z, -d.x) - atan(d0.z, -d0.x)) * 3.2 - 0.05;
        float el = (asin(clamp(d.y, -1., 1.)) - asin(clamp(d0.y, -1., 1.))) * 3.2 + 0.07;
        vec3 sky = mix(horizon, zenith, smoothstep(-0.02, 0.55, el));
        // низкое солнце справа у горизонта
        float sd = length(vec2(az + 0.3, (el - 0.04) * 1.6));
        sky += vec3(1., .55, .25) * sunset * (exp(-sd * 7.) * 0.9 + exp(-sd * 22.) * 0.8);
        // звёзды
        vec2 sp = floor(vec2(az, el) * 260.);
        float st = step(0.996, hash(sp)) * smoothstep(0.05, 0.3, el) * night;
        sky += vec3(st);
        // вода: отражение неба, темнее, с рябью
        float wy = -el;
        vec3 water = mix(horizon, zenith, 0.35) * 0.62;
        water += vec3(1., .6, .3) * sunset * 0.35 * exp(-abs(az + 0.3) * 9.) * (0.6 + 0.4 * sin(wy * 420.));
        vec3 col = el > -0.012 ? sky : water;
        // берег с храмами
        vec2 uv = vec2(az / 1.6 + 0.5, el / 0.25 + 0.28);
        if (uv.y > 0. && uv.y < 1.) {
          float a = texture2D(silTex, uv).a;
          float wl = texture2D(winTex, uv).a * lights;
          col = mix(col, sil, a);
          col += vec3(1., .78, .45) * wl * a;
        }
        gl_FragColor = vec4(col, 1.);
        #include <colorspace_fragment>
      }`,
    depthWrite: false,
  });
  const skyM = new THREE.Mesh(new THREE.PlaneGeometry(WW + 0.02, WH + 0.02), skyMat);
  skyM.rotation.y = Math.PI / 2; skyM.position.set(-L - WT + 0.004, (WY0 + WY1) / 2, WCZ); skyM.renderOrder = -1; win.add(skyM);
  skyMat.uniforms.winC.value.copy(skyM.position);
  // рама: короб, импост и фрамуга сверху, как в старых домах
  const sashBar = (w, h, d, x, y, z) => add(box(w, h, d), M.sash, x, y, z, win);
  sashBar(0.07, FR, WW, WX, WY0 + FR / 2, WCZ); sashBar(0.07, FR, WW, WX, WY1 - FR / 2, WCZ);
  sashBar(0.07, WH, FR, WX, (WY0 + WY1) / 2, WZ0 + FR / 2); sashBar(0.07, WH, FR, WX, (WY0 + WY1) / 2, WZ1 - FR / 2);
  sashBar(0.06, 0.05, WW, WX, WY0 + WH * 0.7, WCZ);
  sashBar(0.06, WH * 0.7, 0.05, WX, WY0 + WH * 0.35, WCZ);
  const glass = add(new THREE.PlaneGeometry(WW, WH), M.glass, WX + 0.01, (WY0 + WY1) / 2, WCZ, win, false);
  glass.rotation.y = Math.PI / 2; glass.renderOrder = 2;
  // подоконник с цветком
  add(box(0.3, 0.05, WW + 0.16), M.sill, -L + 0.07, WY0 - 0.025, WCZ);
  add(new THREE.CylinderGeometry(0.065, 0.05, 0.12, 20), M.pot, -L + 0.1, WY0 + 0.06, WCZ - 0.3);
  { const r = rng(9); for (let i = 0; i < 9; i++) { const lf = add(new THREE.SphereGeometry(0.045 + r() * 0.03, 10, 8), M.leaf, -L + 0.1 + (r() - 0.5) * 0.12, WY0 + 0.16 + r() * 0.14, WCZ - 0.3 + (r() - 0.5) * 0.14); lf.scale.set(1, 0.6, 1.4); lf.rotation.set(r() * 3, r() * 3, r() * 3); } }

  // шторы: полотно со складками, собирается к краям днём и закрывает окно ночью
  const CUR_X = -L + 0.13, CUR_Y1 = HW - 0.12, CUR_H = CUR_Y1 - 0.02;
  const SPAN0 = WZ0 - 0.32, SPAN1 = WZ1 + 0.32, HALF = (SPAN1 - SPAN0) / 2;
  add(new THREE.CylinderGeometry(0.012, 0.012, SPAN1 - SPAN0 + 0.12, 10).rotateX(Math.PI / 2), M.brass, CUR_X, CUR_Y1 + 0.03, (SPAN0 + SPAN1) / 2);
  const curtains = [0, 1].map((side) => {
    const g = new THREE.PlaneGeometry(1, CUR_H, 48, 1); g.rotateY(Math.PI / 2);
    const m = add(g, M.curtain, CUR_X, 0.02 + CUR_H / 2, 0); m.userData.side = side;
    m.userData.base = g.attributes.position.array.slice();
    return m;
  });
  function poseCurtains(c) {
    for (const m of curtains) {
      const w = 0.3 + (HALF + 0.03 - 0.3) * c, pos = m.geometry.attributes.position, b = m.userData.base;
      const folds = 9, amp = 0.05 * (1 - c * 0.55);
      for (let i = 0; i < pos.count; i++) {
        const u = b[i * 3 + 2] + 0.5; // 0..1 по ширине
        const z = m.userData.side === 0 ? SPAN0 + u * w : SPAN1 - u * w;
        pos.setXYZ(i, Math.sin(u * folds * Math.PI) * amp, b[i * 3 + 1], z);
      }
      pos.needsUpdate = true; m.geometry.computeVertexNormals();
    }
  }

  // ---------- печь в углу ----------
  const PX = -L + 0.4, PZ = -L + 0.4, PW = 0.8, PH = 2.38;
  const pech = new THREE.Group(); room.add(pech);
  const tileGeo = (w, h, d, rw, rh) => {
    const g = box(w, h, d), uv = g.attributes.uv;
    // на каждой грани изразцы своим числом, чтобы были квадратные
    const reps = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) { const i = f * 4 + k; uv.setXY(i, uv.getX(i) * reps[f][0] / rw, uv.getY(i) * reps[f][1] / rh); }
    return g;
  };
  add(box(PW + 0.08, 0.16, PW + 0.08), M.tileTop, PX, 0.08, PZ, pech);
  add(tileGeo(PW, PH - 0.42, PW, 0.266, 0.245), M.tile, PX, 0.16 + (PH - 0.42) / 2, PZ, pech);
  add(box(PW + 0.1, 0.08, PW + 0.1), M.tileTop, PX, PH - 0.22, PZ, pech);
  add(tileGeo(PW - 0.04, 0.12, PW - 0.04, 0.2, 0.12), M.tile, PX, PH - 0.12, PZ, pech);
  add(box(PW + 0.14, 0.07, PW + 0.14), M.tileTop, PX, PH - 0.03, PZ, pech);
  // чугунная дверца и поддувало, за дверцей тлеет
  const door = add(box(0.26, 0.22, 0.03), M.iron, PX, 0.62, PZ + PW / 2 + 0.012, pech);
  add(box(0.2, 0.08, 0.03), M.iron, PX, 0.3, PZ + PW / 2 + 0.012, pech);
  const ember = add(box(0.18, 0.015, 0.005), M.glow, PX, 0.53, PZ + PW / 2 + 0.03, pech, false);
  add(new THREE.SphereGeometry(0.014, 10, 8), M.brass, PX + 0.1, 0.62, PZ + PW / 2 + 0.03, pech);

  // ---------- кровать ----------
  const BX = 0.3, BW = 1.66, BL = 2.06, BZ0 = -L + 0.04;
  const bed = new THREE.Group(); room.add(bed);
  add(box(BW + 0.06, 0.26, BL), M.wood, BX, 0.2, BZ0 + BL / 2, bed);
  for (const [dx, dz] of [[-1, 0], [1, 0], [-1, 1], [1, 1]]) add(box(0.07, 0.08, 0.07), M.wood, BX + dx * (BW / 2 - 0.02), 0.04, BZ0 + 0.05 + dz * (BL - 0.1), bed);
  add(rbox(BW + 0.12, 1.0, 0.07, 0.03), M.wood, BX, 0.82, -L + 0.06, bed);
  add(box(BW + 0.18, 0.07, 0.1), M.wood, BX, 1.35, -L + 0.07, bed);
  add(rbox(BW, 0.22, BL - 0.06, 0.05), M.linen, BX, 0.44, BZ0 + BL / 2 + 0.01, bed);
  for (const dx of [-0.4, 0.4]) { const p = add(rbox(0.7, 0.17, 0.44, 0.07), M.linen, BX + dx, 0.62, BZ0 + 0.33, bed); p.rotation.x = -0.28; }
  add(rbox(BW + 0.08, 0.09, 1.38, 0.04), M.duvet, BX, 0.58, BZ0 + BL - 0.66, bed);
  add(rbox(BW + 0.14, 0.04, 0.52, 0.02), M.wool, BX, 0.635, BZ0 + BL - 0.3, bed);
  add(box(BW + 0.14, 0.36, 0.03), M.wool, BX, 0.47, BZ0 + BL + 0.055, bed);
  add(box(1.9, 0.012, 1.1), M.rug, BX - 0.1, 0.006, BZ0 + BL + 0.55);

  // ---------- тумбочка и лампа ----------
  const NX = BX + BW / 2 + 0.33, NZ = -L + 0.3;
  add(box(0.46, 0.52, 0.42), M.wood, NX, 0.26, NZ);
  add(box(0.4, 0.015, 0.02), M.brass, NX, 0.36, NZ + 0.215);
  const lamp = new THREE.Group(); lamp.position.set(NX, 0.52, NZ); room.add(lamp);
  add(new THREE.CylinderGeometry(0.075, 0.09, 0.03, 24), M.brass, 0, 0.015, 0, lamp);
  add(new THREE.CylinderGeometry(0.014, 0.014, 0.34, 12), M.brass, 0, 0.19, 0, lamp);
  add(new THREE.CylinderGeometry(0.11, 0.17, 0.22, 32, 1, true), M.shade, 0, 0.42, 0, lamp, false);
  add(new THREE.SphereGeometry(0.035, 16, 12), M.bulb, 0, 0.38, 0, lamp, false);
  const lampLight = new THREE.PointLight(0xffa860, 0, 0, 2); lampLight.position.set(0, 0.4, 0); lamp.add(lampLight);
  // книга и стакан на тумбочке
  add(box(0.16, 0.03, 0.22), new THREE.MeshStandardMaterial({ color: 0x7a2f2a, roughness: 0.8 }), NX - 0.12, 0.535, NZ + 0.06).rotation.y = 0.3;

  // ---------- кресло у окна ----------
  const chair = new THREE.Group(); chair.position.set(-L + 0.62, 0, 1.38); chair.rotation.y = 0.9; room.add(chair);
  add(rbox(0.68, 0.16, 0.66, 0.05), M.fabric, 0, 0.4, 0, chair);
  add(rbox(0.68, 0.62, 0.15, 0.05), M.fabric, 0, 0.74, -0.28, chair);
  for (const dx of [-0.36, 0.36]) add(rbox(0.12, 0.3, 0.66, 0.04), M.fabric, dx, 0.5, 0, chair);
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(new THREE.CylinderGeometry(0.018, 0.012, 0.32, 8), M.wood, dx * 0.3, 0.16, dz * 0.27, chair);

  // ---------- свет ----------
  const hemi = new THREE.HemisphereLight(0xffffff, 0x3a2a20, 1); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(phone || soft ? 1024 : 2048, phone || soft ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -3.4, right: 3.4, top: 3.4, bottom: -3.4, near: 0.5, far: 16 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.025; sun.shadow.radius = 3;
  sun.target.position.set(0, 0.6, 0.6); scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight(0xffe6cc, 0.35); fill.position.set(3, 4, 5); scene.add(fill);
  const stoveLight = new THREE.PointLight(0xff7a2e, 0, 1.6, 2); stoveLight.position.set(PX, 0.55, PZ + PW / 2 + 0.25); scene.add(stoveLight);

  // ---------- состояние ----------
  const st = { az: 38, el: 22, rect: [0.1, 0.2, 0.9, 0.9], time: 0.5, curtains: -1, zoom: 1, focus: '', bg: '#120f0d' };
  const col = new THREE.Color();
  function pose() {
    const t = clamp(st.time);
    key('zenith', t, skyMat.uniforms.zenith.value);
    key('horizon', t, skyMat.uniforms.horizon.value);
    key('sil', t, skyMat.uniforms.sil.value);
    skyMat.uniforms.night.value = smooth(0.7, 1, t);
    skyMat.uniforms.sunset.value = smooth(0.2, 0.5, t) * (1 - smooth(0.6, 0.8, t));
    skyMat.uniforms.lights.value = smooth(0.4, 0.8, t);
    hemi.color.copy(key('hemiSky', t, col)); hemi.intensity = key('hemiI', t);
    sun.color.copy(key('sunC', t, col)); sun.intensity = key('sunI', t);
    const el = key('sunEl', t) * DEG, sa = (t < 0.75 ? 0.35 : -0.25);
    sun.position.set(-Math.cos(el) * 7, Math.sin(el) * 7 + 0.6, 0.6 + sa * 7);
    const lampOn = smooth(0.32, 0.5, t);
    lampLight.intensity = lampOn * (2.2 + 1.6 * smooth(0.6, 1, t));
    M.shade.emissiveIntensity = lampOn * 1.6;
    M.bulb.color.setRGB(0.4 + 0.6 * lampOn, 0.36 + 0.58 * lampOn, 0.3 + 0.5 * lampOn);
    stoveLight.intensity = smooth(0.55, 1, t) * 0.5;
    M.glow.color.setRGB(0.25 + 0.75 * smooth(0.4, 1, t), 0.1 + 0.4 * smooth(0.4, 1, t), 0.05);
    fill.intensity = 0.12 + 0.3 * (1 - smooth(0.4, 1, t));
    renderer.toneMappingExposure = 1.1 + 0.35 * smooth(0.6, 1, t);
    poseCurtains(st.curtains >= 0 ? st.curtains : smooth(0.82, 0.97, t));
  }

  const anchor = (parent, x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); parent.add(o); return o; };
  const A = {
    bed: anchor(bed, BX + 0.25, 0.68, BZ0 + 0.95),
    pech: anchor(pech, PX + PW / 2, 1.5, PZ + PW / 2 - 0.1),
    stena: anchor(room, -L + 0.002, 1.65, 1.4),
    shtory: anchor(room, CUR_X + 0.03, 1.45, SPAN1 - 0.2),
    lampa: anchor(lamp, 0, 0.42, 0.12),
  };
  const wp = new THREE.Vector3();

  // ---------- камера ----------
  let Wd = 1, Hd = 1;
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3();
  // габарит считаем по коробке комнаты без штанги и ламп: стабилен при движении штор
  const bounds = new THREE.Box3(new THREE.Vector3(-L - WT, -0.14, -L - WT), new THREE.Vector3(L, HW, L));
  function fit() {
    let i = 0;
    for (const sx of [bounds.min.x, bounds.max.x]) for (const sy of [bounds.min.y, bounds.max.y]) for (const sz of [bounds.min.z, bounds.max.z]) corners[i++].set(sx, sy, sz);
    bounds.getCenter(center);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, y0, x1, y1] = st.rect;
    camera.aspect = Wd / Hd; camera.clearViewOffset(); camera.updateProjectionMatrix();
    let lo = 0.5, hi = 60;
    for (let k = 0; k < 26; k++) {
      const d = (lo + hi) / 2;
      camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center); camera.updateMatrixWorld();
      let mx = 0, my = 0;
      for (const c of corners) { tmp.copy(c).project(camera); mx = Math.max(mx, Math.abs(tmp.x)); my = Math.max(my, Math.abs(tmp.y)); }
      if (mx <= (x1 - x0) && my <= (y1 - y0)) hi = d; else lo = d;
    }
    camera.position.copy(center).addScaledVector(dir, hi / st.zoom); camera.lookAt(center);
    camera.setViewOffset(Wd, Hd, -((x0 + x1) / 2 - 0.5) * Wd, -((y0 + y1) / 2 - 0.5) * Hd, Wd, Hd);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  }
  function resize() { const r = canvas.getBoundingClientRect(); Wd = Math.max(1, r.width); Hd = Math.max(1, r.height); renderer.setSize(Wd, Hd, false); }
  addEventListener('resize', resize); resize();

  // подсветка детали: остальное приглушаем
  const flat = (m) => (Array.isArray(m) ? m : [m]);
  const all = [...new Set(Object.values(M).flatMap(flat))].filter(m => m.color && m !== M.glow && m !== M.bulb && m !== M.glass);
  const base = new Map(all.map(m => [m, m.color.clone()]));
  const GROUPS = {
    bed: [M.linen, M.duvet, M.wool, M.wood], pech: [M.tile, M.tileTop, M.iron],
    stena: [M.brick[0]], shtory: [M.curtain, M.brass], lampa: [M.shade, M.brass],
  };
  function focus() {
    for (const m of all) m.color.copy(base.get(m)).multiplyScalar(!st.focus || (GROUPS[st.focus] || []).includes(m) ? 1 : 0.5);
  }
  function project(name) {
    A[name].getWorldPosition(wp); wp.project(camera);
    return { x: (wp.x + 1) / 2 * Wd, y: (1 - wp.y) / 2 * Hd };
  }

  function render() {
    bg.set(st.bg); pose(); focus(); fit();
    renderer.setClearColor(bg, 1);
    renderer.render(scene, camera);
  }
  return { st, render, resize, project };
}
