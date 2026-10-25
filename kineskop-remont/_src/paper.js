// Лист «Вестника»: бумага с печатью из эфирного слоя (paperCanvas).
// Вход — лист накатывает на мастерскую из угла, завёрнутый цилиндром
// (приём и математика загиба — как у shader.se: радиус 0.15, тень у сгиба,
// изнанка тёплая). Выход — шредер: поднимается снизу, режет лист на полосы,
// полосы крутятся и падают, под ними уже следующая сцена.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const PAPER_FN = /* glsl */`
  uniform sampler2D tContent;
  uniform sampler2D tGrunge;
  uniform vec2 uDim;
  uniform vec3 uPaper;
  uniform vec3 uInk;
  uniform float uHead;   // высота шапки: печать под ней уходит в бумагу
  float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
  vec3 s2l(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
  // бумага в линейном цвете: пятна, волокна, затёртость у краёв, печать
  vec3 paperColor(vec2 uv) {
    vec2 px = uv * uDim;
    vec2 w = px / 520.0;
    float g = texture2D(tGrunge, w).r;
    float g2 = texture2D(tGrunge, w * 3.1 + 0.37).r;
    float fib = vn(px * vec2(0.9, 0.08)) * 0.5 + vn(px * vec2(0.07, 1.1)) * 0.5;
    float speck = step(0.9965, h21(floor(px * 0.5)));
    vec3 col = uPaper * (0.9 + 0.08 * g + 0.04 * g2 - 0.035 * fib);
    col *= 1.0 - speck * 0.35;
    // к краям лист темнее и желтее
    vec2 e = min(uv, 1.0 - uv);
    float edge = smoothstep(0.0, 0.08, min(e.x * uDim.x / uDim.y, e.y));
    col *= mix(vec3(0.86, 0.8, 0.68), vec3(1.0), edge);
    // печать: краска ложится неровно по волокнам
    vec4 ink = texture2D(tContent, uv) * (1.0 - smoothstep(uDim.y - uHead - 18.0, uDim.y - uHead + 6.0, px.y));
    float a = ink.a * (0.93 + 0.07 * smoothstep(0.2, 0.8, vn(px * 0.35))) * (0.95 + 0.05 * g);
    vec3 inkLin = ink.a > 0.0 ? s2l(ink.rgb / ink.a) : uInk;
    return mix(col, inkLin * (0.92 + 0.08 * fib), clamp(a, 0.0, 1.0));
  }
`;

const CURL_FRAG = /* glsl */`
  precision highp float;
  uniform float uProg;      // 0 — листа нет, 1 — лист лёг целиком
  uniform float uUp;
  uniform vec2 uDir;
  varying vec2 vUv;
  ${PAPER_FN}
  vec2 curlMap(float y, float B, vec3 E) {
    float r = 0.15;
    vec2 s = vec2(y, 1.0);
    if (y < E.z - r) return s;
    if (y > E.z + r) return vec2(-1.0);
    float o = asin(clamp((y - E.z) / r, -1.0, 1.0));
    float l = 3.14159265 - o;
    s = vec2(E.z + l * r, cos(l));
    if (s.x < B) return s;
    if (y < E.z) return vec2(y, 1.0);
    s = vec2(E.z + o * r, cos(o));
    return s.x < B ? s : vec2(-1.0);
  }
  void main() {
    vec2 uv = vUv;
    float o = 0.4;
    bool flip = uDir.x < 0.0;
    vec2 A = vec2(abs(uDir.x), uDir.y);
    vec2 c = A / length(A);
    float d = length(A);
    float m = mix(d * (1.0 + o * 4.0) - o * 2.0, -o * 2.0, clamp(1.0 - uProg, 0.0, 1.0));
    vec2 I = vec2(flip ? 1.0 - uv.x : uv.x, mix(1.0 - uv.y, uv.y, uUp));
    float y = dot(I, c);
    vec2 C = abs((vec2(1.0) - I) / c);
    float B = y + min(C.x, C.y);
    vec2 v = curlMap(y, B, vec3(c, m));
    if (v.x < 0.0) { gl_FragColor = vec4(0.0); return; }
    float S = (1.0 - smoothstep(0.0, o * 2.0, -(y - m))) * smoothstep(-o, o, B - (v.x + 3.14159265 * 1.5 * o + o));
    vec2 x = c * (v.x - y);
    if (flip) x.x = -x.x;
    x.y *= mix(-1.0, 1.0, uUp);
    vec3 w = paperColor(uv + x);
    vec3 col = v.y > 0.0 ? w * v.y * (1.0 - S * 0.85) : (w * 0.25 + uPaper * vec3(0.7, 0.67, 0.5)) * (-v.y);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const STRIP_VERT = /* glsl */`
  uniform float uCut;     // где режет шредер, доля высоты экрана снизу
  uniform float uTime;
  uniform float uAspect;
  uniform float uStrips;
  attribute float aStrip;
  attribute float aLocal; // -0.5..0.5 поперёк полосы
  attribute vec2 aPiece;  // низ и верх куска, на который полоса рвётся
  varying vec2 vUv;
  varying vec3 vN;
  varying float vCut;
  float h11(float p) { return fract(sin(p * 91.3458) * 47453.5453); }
  mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }
  mat3 rotZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0, -s, c, 0, 0, 0, 1); }
  void main() {
    float y = uv.y;
    float s = max(0.0, uCut - y);
    float r1 = h11(aStrip + 1.0), r2 = h11(aStrip + 7.3), r3 = h11(aStrip + 13.1);
    float wStrip = 1.0 / uStrips;
    float xc = (aStrip + 0.5) * wStrip;
    // ниже ножей полоса сужается — между полосами щель
    float gap = smoothstep(0.0, 0.015, s) * 0.16;
    float lx = aLocal * wStrip * (1.0 - gap) * uAspect;
    // полоса рвётся на куски: кусок висит, пока ножи не прошли его целиком, потом падает
    float yTop = aPiece.y;
    float yc = (aPiece.x + aPiece.y) * 0.5;
    float k = aPiece.y * 13.0;
    float tau = max(0.0, uCut - yTop);
    vec3 p;
    vec3 n = vec3(0.0, 0.0, 1.0);
    if (s <= 0.0) {
      p = vec3(xc * uAspect + lx, y, 0.0);
    } else if (tau <= 0.0) {
      // висит под ножами и чуть колышется
      float sw = sin(uTime * 2.1 + r1 * 17.0 + s * 9.0) * 0.012 * s;
      float tw = sin(uTime * 1.6 + r3 * 11.0) * 0.6 * s;
      p = vec3(xc * uAspect + lx * cos(tw) + sw, y, lx * sin(tw) + s * 0.04);
      n = vec3(-sin(tw), 0.0, cos(tw));
    } else {
      // оторвался: падает с ускорением, крутится и кувыркается
      float hi = h11(aStrip * 3.1 + k * 7.7);
      float tw = tau * (5.0 + hi * 8.0) * (hi > 0.5 ? 1.0 : -1.0);
      float rz = tau * (hi - 0.5) * 4.0;
      float rx = tau * (1.5 + r3 * 2.5);
      vec3 v = vec3(lx * cos(tw), y - yc, lx * sin(tw));
      vec3 nn = vec3(-sin(tw), 0.0, cos(tw));
      mat3 R = rotZ(rz) * rotX(rx);
      v = R * v; nn = R * nn;
      float fall = tau * 0.5 + tau * tau * (5.0 + hi * 4.0);
      vec3 c = vec3(xc * uAspect + (xc - 0.5) * tau * 0.6 * uAspect + (hi - 0.5) * tau * 0.4, yc - fall, tau * (0.15 + hi * 0.3));
      p = c + v;
      n = nn;
    }
    vN = normalize(n);
    vUv = vec2(xc + aLocal * wStrip, y);
    vCut = s;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const STRIP_FRAG = /* glsl */`
  precision highp float;
  varying vec2 vUv;
  varying vec3 vN;
  varying float vCut;
  ${PAPER_FN}
  void main() {
    vec3 w = paperColor(vUv);
    vec3 n = gl_FrontFacing ? vN : -vN;
    float lit = 0.62 + 0.38 * max(0.0, dot(n, normalize(vec3(-0.3, 0.5, 1.0))));
    vec3 col = gl_FrontFacing ? w * lit : (w * 0.25 + uPaper * vec3(0.7, 0.67, 0.5)) * lit;
    // у самых ножей лист прижат и чуть темнее
    col *= 1.0 - (1.0 - smoothstep(0.0, 0.03, vCut)) * step(0.0001, vCut) * 0.25;
    gl_FragColor = vec4(col, 1.0);
  }
`;

function makeLabel() {
  const c = document.createElement('canvas');
  c.width = 2048; c.height = 154;
  const x = c.getContext('2d');
  x.fillStyle = '#1b1c1f'; x.fillRect(0, 0, 2048, 154);
  x.fillStyle = '#d9cfb6';
  x.font = 'italic 600 70px "STIX Two Text", Georgia, serif';
  x.textBaseline = 'middle';
  x.fillText('Кинескоп', 90, 80);
  x.font = '500 26px "IBM Plex Mono", monospace';
  x.fillStyle = '#8f8a7d';
  x.fillText('ШРЕДЕР · ПОСЛЕ РЕМОНТА · ГАРАНТИЯ 6 МЕС.', 470, 82);
  x.fillStyle = '#2c2d31';
  for (let i = 0; i < 26; i++) x.fillRect(1500 + i * 18, 52, 8, 52);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function createPaper({ contentTexture, grungeTexture, mobile = false }) {
  const shared = {
    tContent: { value: contentTexture },
    tGrunge: { value: grungeTexture },
    uDim: { value: new THREE.Vector2(1, 1) },
    uPaper: { value: new THREE.Color(0xeee3c8).convertSRGBToLinear() },
    uInk: { value: new THREE.Color(0x1d1a15).convertSRGBToLinear() },
    uHead: { value: 64 },
  };
  // загиб: квад во весь экран
  const curlMat = new THREE.ShaderMaterial({
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: CURL_FRAG,
    uniforms: { ...shared, uProg: { value: 1 }, uUp: { value: 1 }, uDir: { value: new THREE.Vector2(0.5, 1) } },
    transparent: true, depthTest: false, depthWrite: false,
  });
  const curlQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), curlMat);
  curlQuad.frustumCulled = false;
  const curlScene = new THREE.Scene();
  curlScene.add(curlQuad);
  const orthoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // шредер: полосы и сам аппарат в перспективе, плоскость z=0 ровно в экран
  const N = mobile ? 28 : 64, M = 56;
  const pos = [], uv = [], strip = [], local = [], piece = [], idx = [];
  const h11 = v => { const x = Math.sin(v * 91.3458) * 47453.5453; return x - Math.floor(x); };
  for (let i = 0; i < N; i++) {
    const L = 0.16 + h11(i + 7.3) * 0.1, ph = h11(i + 1) * L;
    for (let k = 0; ; k++) {
      const y0 = k * L - ph, y1 = y0 + L;
      if (y0 >= 1) break;
      if (y1 <= 0) continue;
      const a = Math.max(0, y0), b = Math.min(1, y1);
      const rows = Math.max(1, Math.ceil((b - a) * M));
      const base = pos.length / 3;
      for (let j = 0; j <= rows; j++) {
        const v = a + (b - a) * j / rows;
        for (const side of [-0.5, 0.5]) {
          pos.push(0, 0, 0); uv.push((i + 0.5 + side) / N, v); strip.push(i); local.push(side); piece.push(y0, y1);
        }
      }
      for (let j = 0; j < rows; j++) {
        const q = base + j * 2;
        idx.push(q, q + 1, q + 2, q + 1, q + 3, q + 2);
      }
    }
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  sg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  sg.setAttribute('aStrip', new THREE.Float32BufferAttribute(strip, 1));
  sg.setAttribute('aLocal', new THREE.Float32BufferAttribute(local, 1));
  sg.setAttribute('aPiece', new THREE.Float32BufferAttribute(piece, 2));
  sg.setIndex(idx);
  const stripMat = new THREE.ShaderMaterial({
    vertexShader: STRIP_VERT, fragmentShader: STRIP_FRAG,
    uniforms: { ...shared, uCut: { value: -0.2 }, uTime: { value: 0 }, uAspect: { value: 1 }, uStrips: { value: N } },
    side: THREE.DoubleSide,
  });
  const strips = new THREE.Mesh(sg, stripMat);
  strips.frustumCulled = false;

  const shredScene = new THREE.Scene();
  shredScene.add(strips);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.05, 20);

  // аппарат: корпус, щель, валы с зубьями, лампа
  const shredder = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x2a2b2f, metalness: 0.55, roughness: 0.38 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x0b0b0d, metalness: 0.2, roughness: 0.8 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x9a9da4, metalness: 1.0, roughness: 0.42 });
  const label = new THREE.MeshStandardMaterial({ map: makeLabel(), metalness: 0.2, roughness: 0.6 });
  const body = new THREE.Mesh(new RoundedBoxGeometry(1, 0.075, 0.13, 4, 0.018), [metal, metal, metal, metal, label, metal]);
  body.position.set(0, -0.0375, 0);
  shredder.add(body);
  const lip = new THREE.Mesh(new RoundedBoxGeometry(1.0, 0.014, 0.03, 2, 0.006), steel);
  lip.position.set(0, 0.002, 0.03);
  shredder.add(lip);
  const slot = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.006, 0.025), dark);
  slot.position.set(0, 0.001, -0.003);
  shredder.add(slot);
  const rollers = [];
  for (const dz of [-0.016, 0.013]) {
    const rg = new THREE.CylinderGeometry(0.01, 0.01, 0.97, 20, 1);
    rg.rotateZ(Math.PI / 2);
    const r = new THREE.Mesh(rg, steel);
    r.position.set(0, 0.006, dz);
    shredder.add(r); rollers.push(r);
  }
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.005, 16, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.3, 3.0, 0.6) }));
  led.position.set(0.45, -0.02, 0.066);
  shredder.add(led);
  shredder.rotation.x = 0.38;
  shredScene.add(shredder);
  const key = new THREE.DirectionalLight(0xfff1dd, 2.4);
  key.position.set(-1, 2, 3);
  shredScene.add(key, new THREE.AmbientLight(0xffffff, 0.35));

  let aspect = 1;
  function setSize(w, h, head = 64) {
    aspect = w / h;
    shared.uHead.value = head;
    shared.uDim.value.set(w, h);
    stripMat.uniforms.uAspect.value = aspect;
    cam.aspect = aspect;
    const d = 0.5 / Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    cam.position.set(aspect / 2, 0.5, d);
    cam.lookAt(aspect / 2, 0.5, 0);
    cam.updateProjectionMatrix();
    // на телефоне шредер шире экрана: иначе он тонкая полоска
    shredder.scale.setScalar(Math.max(aspect * 1.03, 0.8));
    shredder.position.x = aspect / 2;
  }

  // mode: curl (prog 0..1) | flat | shred (cut 0..1)
  function render(renderer, { mode, prog = 1, cut = 0, time = 0, env = null }) {
    if (env) shredScene.environment = env;
    if (mode === 'shred') {
      const c = -0.12 + cut * 1.42;
      stripMat.uniforms.uCut.value = c;
      stripMat.uniforms.uTime.value = time;
      shredder.position.y = c;
      shredder.position.z = 0.02;
      for (const r of rollers) r.rotation.x = -time * 9.0;
      renderer.render(shredScene, cam);
    } else {
      curlMat.uniforms.uProg.value = mode === 'flat' ? 1 : prog;
      renderer.render(curlScene, orthoCam);
    }
  }

  return { setSize, render };
}
