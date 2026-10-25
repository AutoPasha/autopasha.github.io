// Сцены-фотографии: кадр, посчитанный в Cycles (свет, тени, отражения как у
// настоящей съёмки), и его карта глубины. Камера двигается по глубине —
// ближнее смещается сильнее дальнего, поэтому кадр живёт как 3D; дым и пыль
// рисуются поверх по той же глубине. В эфире живой экран телевизора ложится
// в стекло по четырём углам, посчитанным при рендере.
import * as THREE from 'three';
import { makeScreen } from './screen.js';

const vert = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

const frag = /* glsl */`
  precision highp float;
  uniform sampler2D uA; uniform sampler2D uDA;   // кадр и глубина
  uniform sampler2D uB; uniform sampler2D uDB;   // следующий кадр (смена канала)
  uniform float uMix;
  uniform vec4 uViewA; uniform vec4 uViewB;      // окно в кадре: центр xy, размер zw (доли кадра)
  uniform vec2 uOff;                             // сдвиг камеры по глубине
  uniform float uDolly;                          // наезд: ближнее растёт быстрее дальнего
  uniform float uPivot;                          // глубина, которая стоит на месте
  uniform float uTime;
  uniform float uSmoke; uniform vec3 uSmokeCol;
  uniform float uDust;
  uniform float uReady;
  uniform sampler2D uScreen; uniform float uHasScreen; uniform mat3 uHom; uniform vec2 uScrAspect;
  uniform float uScrGlow;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
  float rbox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }

  // точка кадра для пикселя экрана: окно, наезд и сдвиг по глубине (три уточнения)
  vec2 lookup(sampler2D D, vec4 view, out float depth) {
    vec2 base = view.xy + (vUv - 0.5) * view.zw;
    vec2 uv = base;
    float d = 0.5;
    for (int i = 0; i < 3; i++) {
      d = texture2D(D, uv).r;
      float k = d - uPivot;
      uv = view.xy + (base - view.xy) / (1.0 + uDolly * k) + uOff * k;
    }
    depth = d;
    return uv;
  }

  vec3 screenOver(vec3 col, vec2 uv) {
    vec3 p = uHom * vec3(uv, 1.0);
    vec2 s = p.xy / p.z;
    vec2 q = (s - 0.5) * uScrAspect;
    float dd = rbox(q, uScrAspect * 0.5, 0.06);
    float a = 1.0 - smoothstep(-0.003, 0.002, dd);
    vec3 scr = texture2D(uScreen, clamp(s, 0.0, 1.0)).rgb;
    col = mix(col, scr, a);
    // свечение экрана на стол и корпус: средний цвет картинки
    vec3 avg = texture2D(uScreen, vec2(0.5), 7.0).rgb;
    float g = exp(-max(dd, 0.0) * 9.0) * (1.0 - a);
    col += avg * g * uScrGlow;
    return col;
  }

  void main() {
    float dA, dB;
    vec2 ua = lookup(uDA, uViewA, dA);
    vec3 col = texture2D(uA, ua).rgb;
    if (uHasScreen > 0.5) col = screenOver(col, ua);
    float d = dA;
    if (uMix > 0.001) {
      vec2 ub = lookup(uDB, uViewB, dB);
      vec3 cb = texture2D(uB, ub).rgb;
      col = mix(col, cb, uMix);
      d = mix(dA, dB, uMix);
    }
    // дым: медленные клубы, гуще в глубине, подсвечены тёплым из-за предмета
    vec2 sp = vUv * vec2(1.6, 1.0);
    float sm = fbm(sp * 2.2 + vec2(uTime * 0.018, -uTime * 0.01));
    sm = smoothstep(0.35, 0.85, sm + 0.25 * fbm(sp * 5.0 - uTime * 0.03));
    float far = 1.0 - d;
    col += uSmokeCol * sm * uSmoke * (0.35 + 0.65 * far) * (0.6 + 0.4 * smoothstep(1.0, 0.0, vUv.y));
    // пылинки в свете: редкие искры, плывут вверх
    vec2 g = vUv * vec2(90.0, 56.0) + vec2(0.0, -uTime * 0.6);
    vec2 cell = floor(g); vec2 f = fract(g) - 0.5;
    float h = hash(cell);
    vec2 o = vec2(hash(cell + 3.1), hash(cell + 7.7)) - 0.5;
    float dust = step(0.985, h) * smoothstep(0.08, 0.0, length(f - o * 0.6)) * (0.5 + 0.5 * sin(uTime * 2.0 + h * 40.0));
    col += uSmokeCol * dust * uDust * far;
    gl_FragColor = vec4(col * uReady, 1.0);
  }
`;

const loaderTex = new THREE.TextureLoader();
function loadTex(url, color) {
  return loaderTex.loadAsync(url).then(t => {
    t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  });
}

// гомография: четыре угла экрана в кадре -> квадрат 0..1
function homography(src) {
  // src: [[x,y]x4] в координатах текстуры (y снизу), порядок: лево-низ, право-низ, право-верх, лево-верх
  const dst = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const A = [], b = [];
  for (let i = 0; i < 4; i++) {
    const [x, y] = src[i], [u, v] = dst[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); b.push(v);
  }
  // Гаусс
  for (let c = 0; c < 8; c++) {
    let p = c; for (let r = c + 1; r < 8; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
    for (let r = 0; r < 8; r++) {
      if (r === c) continue;
      const k = A[r][c] / A[c][c];
      for (let j = c; j < 8; j++) A[r][j] -= k * A[c][j];
      b[r] -= k * b[c];
    }
  }
  const h = b.map((v, i) => v / A[i][i]);
  // three.Matrix3.set — по строкам
  return new THREE.Matrix3().set(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], 1);
}

// окно кадра под экран: покрыть экран целиком, предмет держать в фокусе
function coverView(imgAspect, scrAspect, focus, zoom = 1, frame = null) {
  let w, h;
  if (scrAspect > imgAspect) { w = 1; h = imgAspect / scrAspect; } else { h = 1; w = scrAspect / imgAspect; }
  w /= zoom; h /= zoom;
  // на узком экране окно сдвигается к предмету (focus), не вылезая за кадр
  const fx = frame ? frame[0] : focus[0], fy = frame ? frame[1] : focus[1];
  const cx = Math.min(1 - w / 2, Math.max(w / 2, fx));
  const cy = Math.min(1 - h / 2, Math.max(h / 2, fy));
  return new THREE.Vector4(cx, cy, w, h);
}

function makeMaterial() {
  const black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); black.needsUpdate = true;
  const grey = new THREE.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1); grey.needsUpdate = true;
  return new THREE.ShaderMaterial({
    vertexShader: vert, fragmentShader: frag,
    uniforms: {
      uA: { value: black }, uDA: { value: grey }, uB: { value: black }, uDB: { value: grey },
      uMix: { value: 0 },
      uViewA: { value: new THREE.Vector4(0.5, 0.5, 1, 1) }, uViewB: { value: new THREE.Vector4(0.5, 0.5, 1, 1) },
      uOff: { value: new THREE.Vector2() }, uDolly: { value: 0 }, uPivot: { value: 0.55 },
      uTime: { value: 0 }, uSmoke: { value: 0.07 }, uSmokeCol: { value: new THREE.Color(1.0, 0.72, 0.5) },
      uDust: { value: 0.6 }, uReady: { value: 0 },
      uScreen: { value: black }, uHasScreen: { value: 0 }, uHom: { value: new THREE.Matrix3() },
      uScrAspect: { value: new THREE.Vector2(1.3, 1) }, uScrGlow: { value: 0.35 },
    },
    depthTest: false, depthWrite: false,
  });
}

function makeQuadScene(mat) {
  const q = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  q.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(q);
  return { scene, camera: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1) };
}

// один снимок: загрузить кадр, глубину и разметку
// на вертикальном экране — свой кадр, снятый под телефон (имя с хвостом -m)
export const PORTRAIT = typeof innerWidth !== 'undefined' && innerHeight > innerWidth * 1.1;
function loadShot(base, name) {
  if (PORTRAIT) name += '-m';
  return Promise.all([
    loadTex(`${base}photo/${name}.jpg`, true),
    loadTex(`${base}photo/${name}-depth.png`, false),
    fetch(`${base}photo/${name}.json`).then(r => r.json()),
  ]).then(([color, depth, meta]) => ({ color, depth, meta, aspect: meta.size[0] / meta.size[1] }));
}

const easeOut = x => 1 - Math.pow(1 - x, 3);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Сцена из одного снимка: мастерская, часы, связь.
// p — ход внутри раздела: медленный наезд; указатель — сдвиг по глубине.
export function createPhotoScene({ base, name, mobile = false, smoke = 0.07, dust = 0.6, smokeColor = [1.0, 0.72, 0.5], push = 0.1, frame = null }) {
  const mat = makeMaterial();
  const { scene, camera } = makeQuadScene(mat);
  const u = mat.uniforms;
  u.uSmoke.value = smoke; u.uDust.value = mobile ? dust * 0.6 : dust; u.uSmokeCol.value.setRGB(...smokeColor);
  let shot = null, ready = null, aspect = 1, fade = 0;
  const ptr = new THREE.Vector2();
  function load() {
    if (!ready) ready = loadShot(base, name).then(s => { shot = s; u.uA.value = s.color; u.uDA.value = s.depth; u.uPivot.value = 0.6; }).catch(e => console.warn('сцена', name, e));
    return ready;
  }
  function setAspect(a) { aspect = a; }
  function update(t, dt, { p = 0, pointer = null } = {}) {
    u.uTime.value = t;
    if (!shot) { u.uReady.value = 0; return; }
    fade = Math.min(1, fade + dt * 1.5);
    u.uReady.value = easeOut(fade);
    const f = [shot.meta.focus[0], 1 - shot.meta.focus[1]];
    const zoom = 1.04 + push * easeOut(clamp(p));
    u.uViewA.value.copy(coverView(shot.aspect, aspect, f, zoom, frame && (aspect < 1 ? null : frame)));
    if (pointer) ptr.lerp(pointer, 1 - Math.pow(0.02, dt)); else ptr.multiplyScalar(Math.pow(0.05, dt));
    const sway = 0.006 * Math.sin(t * 0.21);
    u.uOff.value.set(-ptr.x * 0.014 + sway + (p - 0.5) * 0.02, -ptr.y * 0.009);
    u.uDolly.value = 0.06 * p;
  }
  return { scene, camera, load, setAspect, update, ready: () => ready };
}

// Каналы: по снимку на канал, смена — растворением; при смене film даёт помехи.
export function createPhotoChannels({ base, names, mobile = false }) {
  const mat = makeMaterial();
  const { scene, camera } = makeQuadScene(mat);
  const u = mat.uniforms;
  u.uSmoke.value = 0.05; u.uDust.value = mobile ? 0.3 : 0.5;
  const shots = new Array(names.length).fill(null);
  const loading = new Array(names.length).fill(null);
  let aspect = 1, current = -1, prev = -1, mix = 1, since = 0;
  const ptr = new THREE.Vector2();
  function ensure(i) {
    if (!loading[i]) loading[i] = loadShot(base, names[i]).then(s => { shots[i] = s; }).catch(e => console.warn('канал', names[i], e));
    return loading[i];
  }
  function show(i) {
    if (i === current) return;
    ensure(i);
    prev = current; current = i; mix = prev < 0 ? 1 : 0; since = 0;
  }
  function view(s, t, extra = 0) {
    const f = [s.meta.focus[0], 1 - s.meta.focus[1]];
    return coverView(s.aspect, aspect, f, 1.05 + extra);
  }
  function update(t, dt, { pointer = null } = {}) {
    u.uTime.value = t;
    since += dt;
    const a = shots[current], b = prev >= 0 ? shots[prev] : null;
    if (!a) { u.uReady.value = b ? 1 : 0; if (b) { u.uA.value = b.color; u.uDA.value = b.depth; u.uMix.value = 0; } return; }
    mix = Math.min(1, mix + dt * 2.8);
    // смесь: A — новый канал, B — прежний (уходит)
    u.uA.value = a.color; u.uDA.value = a.depth;
    u.uViewA.value.copy(view(a, t, 0.04 * easeOut(Math.min(1, since / 6))));
    if (b && mix < 1) {
      u.uB.value = b.color; u.uDB.value = b.depth; u.uViewB.value.copy(view(b, t, 0.04));
      u.uMix.value = 1 - easeOut(mix);
    } else u.uMix.value = 0;
    u.uReady.value = 1;
    if (pointer) ptr.lerp(pointer, 1 - Math.pow(0.02, dt)); else ptr.multiplyScalar(Math.pow(0.05, dt));
    u.uOff.value.set(-ptr.x * 0.016 + 0.008 * Math.sin(t * 0.25), -ptr.y * 0.01);
    u.uDolly.value = 0.04;
    u.uPivot.value = 0.6;
  }
  return {
    scene, camera, ensure, show, update,
    setAspect(a) { aspect = a; },
    get current() { return current; },
    // устройство больше не крутится руками: снимок, а не модель
    dragStart() {}, dragMove() {}, dragEnd() {},
  };
}

// Эфир: телевизор на столе мастерской. dive 0 — общий план, 1 — экран во весь кадр.
// Экран — тот же шейдер кинескопа (таблица, канал, помехи, надписи), отрисованный
// в свою цель и уложенный в стекло по углам из рендера.
export function createPhotoHero({ base, testTex, chanTex, osdTex, mobile = false }) {
  const mat = makeMaterial();
  const { scene, camera } = makeQuadScene(mat);
  const u = mat.uniforms;
  u.uSmoke.value = 0.085; u.uDust.value = mobile ? 0.4 : 0.7; u.uHasScreen.value = 1;
  const rt = new THREE.WebGLRenderTarget(1024, 790, { type: THREE.HalfFloatType });
  rt.texture.generateMipmaps = true; rt.texture.minFilter = THREE.LinearMipmapLinearFilter;
  const screen = makeScreen({ width: 2, height: 2, bulge: 0, test: testTex, chan: chanTex, osd: osdTex });
  screen.material.uniforms.uRadius.value = 0.0;
  const sScene = new THREE.Scene(); sScene.add(screen);
  const sCam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  u.uScreen.value = rt.texture;
  let shot = null, aspect = 1, W = 1, H = 1, dive = 0;
  let glassAspect = 4 / 3;
  const ptr = new THREE.Vector2();
  const ready = loadShot(base, 'hero').then(s => {
    shot = s;
    u.uA.value = s.color; u.uDA.value = s.depth;
    const c = s.meta.screen.map(([x, y]) => [x, 1 - y]);
    u.uHom.value.copy(homography(c));
    // соотношение сторон стекла в кадре (по нижней и левой кромке, в пикселях кадра)
    const wpx = Math.hypot((c[1][0] - c[0][0]) * s.aspect, c[1][1] - c[0][1]);
    const hpx = Math.hypot((c[3][0] - c[0][0]) * s.aspect, c[3][1] - c[0][1]);
    glassAspect = wpx / hpx;
    u.uScrAspect.value.set(glassAspect, 1);
    screen.material.uniforms.uAspect.value.set(glassAspect, 1);
    rt.setSize(Math.round(790 * glassAspect), 790);
  });
  function screenView() {
    // окно, в которое стекло входит целиком «под обрез» (экран во весь кадр)
    const c = shot.meta.screen.map(([x, y]) => [x, 1 - y]);
    const xs = c.map(p => p[0]), ys = c.map(p => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const w = (Math.max(...xs) - Math.min(...xs)) * 0.86, h = (Math.max(...ys) - Math.min(...ys)) * 0.86;
    // покрыть экран: по меньшей стороне
    let vw = w, vh = w * shot.aspect / aspect;
    if (vh > h) { vh = h; vw = h * aspect / shot.aspect; }
    return new THREE.Vector4(cx, cy, vw, vh);
  }
  function setLayout(w, h) { W = w; H = h; aspect = w / h; }
  function update(t, dt, { dive: dv = 0, pointer = null } = {}) {
    u.uTime.value = t;
    screen.material.uniforms.uTime.value = t;
    dive = clamp(dv);
    if (!shot) { u.uReady.value = 0; return; }
    u.uReady.value = 1;
    const f = [shot.meta.focus[0], 1 - shot.meta.focus[1]];
    // на широком экране телевизор правее, слева место под заголовок
    const wide = aspect > 1.05;
    const v0 = coverView(shot.aspect, aspect, f, mobile ? 1.0 : 1.02, wide ? null : [f[0], f[1] - 0.06]);
    const v1 = screenView();
    // наезд экспонентой по размеру окна: скорость приближения ровная
    const k = 1 - Math.pow(1 - dive, 1.6);
    const lw = Math.exp(Math.log(v0.z) * (1 - k) + Math.log(v1.z) * k);
    const lh = Math.exp(Math.log(v0.w) * (1 - k) + Math.log(v1.w) * k);
    const s = (v0.z - lw) / Math.max(1e-5, v0.z - v1.z);
    u.uViewA.value.set(v0.x + (v1.x - v0.x) * s, v0.y + (v1.y - v0.y) * s, lw, lh);
    if (pointer) ptr.lerp(pointer, 1 - Math.pow(0.02, dt)); else ptr.multiplyScalar(Math.pow(0.05, dt));
    const calm = 1 - k;
    u.uOff.value.set((-ptr.x * 0.016 + 0.007 * Math.sin(t * 0.2)) * calm, -ptr.y * 0.01 * calm);
    u.uDolly.value = 0.05 + 0.25 * k;
    u.uPivot.value = 0.62;
    u.uSmoke.value = 0.085 * calm;
    u.uScrGlow.value = 0.35 * calm;
  }
  function prepare(renderer) {
    renderer.setRenderTarget(rt);
    renderer.setClearColor(0x000000, 1);
    renderer.clear();
    renderer.render(sScene, sCam);
    renderer.setRenderTarget(null);
  }
  return {
    scene, camera, screen, setLayout, update, prepare, ready: () => ready,
    get glassAspect() { return glassAspect; },
  };
}
