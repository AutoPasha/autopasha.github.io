// Плёнка «Кинескопа»: один путь кадра на весь сайт, как у shader.se.
// 1) каждая сцена рисуется в свою цель; 2) сведение: линза кинескопа (бочка
// и скруглённая рамка), насыщенность, смена сцен (растворение, лист поверх,
// лист снизу), эфирный слой интерфейса, виньетка; 3) свечение на mip-цепочке
// из семи уровней; 4) след движения; 5) степень, сепия, яркость, контраст;
// 6) расслоение цветов по вертикали; 7) интерфейс второй раз, чётко;
// 8) зерно; 9) ACES и sRGB.
// Формулы линзы, свечения, зерна и порядок проходов повторяют разбор бандла
// shader.se (TSL), переписаны на GLSL своими руками.
import * as THREE from 'three';

const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

const LENS = /* glsl */`
  // бочка: смещение растёт как r^3 (у Shader: 1 + k * r2 * sqrt(r2))
  vec2 lensAH(vec2 uv, float k) {
    vec2 d = uv - 0.5;
    float r2 = dot(d, d);
    return d * (1.0 + r2 * k * sqrt(r2)) + 0.5;
  }
  // border 0: кадр подтянут так, что углы ровно на краю; border 1: углы уходят
  // за край и видна скруглённая рамка кинескопа
  vec2 lensAj(vec2 uv, float k, float border) {
    float n = mix(0.3655, 0.0, border);
    return (1.0 - k * n) * lensAH(uv, k) + k * n * 0.5;
  }
  float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  float lensMask(vec2 c, float border, vec2 dim) {
    float rad = mix(0.0, 0.04, border);
    float aa = mix(0.0, 0.005, border) + 1e-5;
    float s = smoothstep(-aa, aa, c.x) * smoothstep(-aa, aa, c.y) * smoothstep(-aa, aa, 1.0 - c.x) * smoothstep(-aa, aa, 1.0 - c.y);
    vec2 o = vec2(dim.x / dim.y, 1.0);
    float l = sdRoundBox((c - 0.5) * o, o * 0.5, rad);
    return (1.0 - smoothstep(-aa, aa, l)) * s;
  }
  bool inUnit(vec2 c) { return c.x >= 0.0 && c.x <= 1.0 && c.y >= 0.0 && c.y <= 1.0; }
  vec3 srgbToLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
`;

const COMPOSE = /* glsl */`
  precision highp float;
  uniform sampler2D tCur, tNext, tUi;
  uniform float uMode;          // 1 одна сцена, 2 переход
  uniform float uT;             // ход перехода 0..1
  uniform float uType;          // 0 растворение, 1 сразу, 2 лист поверх, 3 лист снизу, 4 шторка
  uniform vec3 uCurLens;        // линза, рамка, насыщенность
  uniform vec3 uNextLens;
  uniform vec2 uUiLens;
  uniform float uUi;            // сколько эфирного слоя в кадре
  uniform float uUiGain;
  uniform vec3 uVig;            // радиус, мягкость, сила
  uniform vec2 uDim;
  uniform float uStatic;        // помехи при переключении канала
  uniform float uTime;
  varying vec2 vUv;
  ${LENS}
  float hs(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec4 sceneAt(sampler2D t, vec3 L, vec2 uv) {
    float k = L.x, b = L.y;
    bool on = k > 0.01;
    vec2 c = lensAj(uv, k, b);
    bool d = inUnit(c);
    vec4 f = vec4(0.0);
    if (!on) f = texture2D(t, uv);
    else if (d) { f = texture2D(t, c); f.rgb *= lensMask(c, b, uDim); }
    float l = dot(f.rgb, vec3(0.299, 0.587, 0.114));
    return vec4(mix(vec3(l), f.rgb, L.z), f.a);
  }
  void main() {
    vec2 uv = vUv;
    vec2 su = uv;
    if (uStatic > 0.0) su.x += uStatic * (hs(vec2(floor(uv.y * 140.0), floor(uTime * 24.0))) - 0.5) * 0.05;
    vec4 a = sceneAt(tCur, uCurLens, su);
    if (uStatic > 0.0) a.rgb = mix(a.rgb, vec3(hs(floor(uv * uDim / 2.0) + floor(uTime * 50.0)) * 0.6), uStatic * 0.8);
    vec4 e = a;
    if (uMode > 1.5) {
      vec4 s = sceneAt(tNext, uNextLens, uv);
      vec4 u = mix(a, s, uT);
      if (uType > 1.5 && uType < 2.5) u = mix(a, s, s.a);
      if (uType > 2.5 && uType < 3.5) u = mix(s, a, a.a);
      // шторка: новая сцена поднимается вместе с краем своего раздела, край мягкий
      if (uType > 3.5) u = mix(a, s, smoothstep(1.0 - uT - 0.16, 1.0 - uT + 0.16, 1.0 - uv.y));
      e = u;
    }
    // виньетка сцены
    float g = uVig.x - length(uv - 0.5);
    float f = smoothstep(-uVig.y, uVig.y, g);
    vec3 p = mix(e.rgb, clamp(e.rgb * f, 0.0, 1.0), uVig.z);
    // эфирный слой: через ту же линзу, до свечения — надписи светятся
    vec2 ua = lensAj(uv, uUiLens.x, 1.0);
    if (uUi > 0.0) {
      // за краем текстуры — прижим к краю: подложки под шапкой не обрываются рамкой
      vec4 ui = texture2D(tUi, clamp(ua, 0.0, 1.0));
      ui.rgb = ui.a > 0.0 ? srgbToLinear(ui.rgb / ui.a) * ui.a : vec3(0.0);
      float m = uUiLens.y > 0.001 ? lensMask(ua, uUiLens.y, uDim) : 1.0;
      p = p * (1.0 - ui.a * uUi * m) + ui.rgb * uUiGain * uUi * m;
    }
    gl_FragColor = vec4(p, 1.0);
  }
`;

// первое уменьшение: порог яркости, четыре выборки
const DOWN0 = /* glsl */`
  precision highp float;
  uniform sampler2D tIn; uniform vec2 uTexel; uniform float uThr, uSmooth;
  varying vec2 vUv;
  vec4 pre(vec4 c) { float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722)); return c * smoothstep(uThr, uThr + uSmooth, l); }
  void main() {
    vec2 o = uTexel * 0.5;
    vec4 s = pre(texture2D(tIn, vUv + o * vec2(-1.0, 1.0))) + pre(texture2D(tIn, vUv + o * vec2(1.0, 1.0)))
           + pre(texture2D(tIn, vUv + o * vec2(-1.0, -1.0))) + pre(texture2D(tIn, vUv + o * vec2(1.0, -1.0)));
    gl_FragColor = s * 0.25;
  }
`;
const DOWN = /* glsl */`
  precision highp float;
  uniform sampler2D tIn; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    gl_FragColor = (texture2D(tIn, vUv + o * vec2(-1.0, 1.0)) + texture2D(tIn, vUv + o * vec2(1.0, 1.0))
                  + texture2D(tIn, vUv + o * vec2(-1.0, -1.0)) + texture2D(tIn, vUv + o * vec2(1.0, -1.0))) * 0.25;
  }
`;
// увеличение: размытое нижнее смешивается с этим уровнем по радиусу
const UP = /* glsl */`
  precision highp float;
  uniform sampler2D tIn, tSupport; uniform vec2 uTexel; uniform float uRadius;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    vec4 h = (texture2D(tIn, vUv + o * vec2(-1.0, 1.0)) + texture2D(tIn, vUv + o * vec2(1.0, 1.0))
            + texture2D(tIn, vUv + o * vec2(-1.0, -1.0)) + texture2D(tIn, vUv + o * vec2(1.0, -1.0))) * 0.25;
    gl_FragColor = mix(texture2D(tSupport, vUv), h, uRadius);
  }
`;

// свечение экраном поверх кадра, тёплый подтон, след прошлого кадра
const GLOW = /* glsl */`
  precision highp float;
  uniform sampler2D tComp, tBloom, tPrev;
  uniform float uBloom, uMotion;
  varying vec2 vUv;
  void main() {
    vec4 h = texture2D(tComp, vUv);
    vec3 b = min(texture2D(tBloom, vUv).rgb * uBloom, vec3(1.0));
    vec3 m = 1.0 - (1.0 - b) * (1.0 - h.rgb);
    m += b * vec3(1.0, 0.8, 0.0) * 0.1;
    m = mix(m, texture2D(tPrev, vUv).rgb, uMotion);
    gl_FragColor = vec4(m, 1.0);
  }
`;

const FINAL = /* glsl */`
  precision highp float;
  uniform sampler2D tIn, tUi;
  uniform float uPow, uSepia, uBright, uContrast, uCA, uAspect;
  uniform vec2 uUiLens; uniform float uUi, uUiCrisp;
  uniform float uTime, uNoise, uNoiseVel;
  uniform float uExposure;
  uniform vec2 uDim;
  varying vec2 vUv;
  ${LENS}
  vec3 grade(vec3 c) {
    c = pow(max(c, 0.0), vec3(uPow));
    vec3 sp = vec3(dot(c, vec3(0.393, 0.769, 0.189)), dot(c, vec3(0.349, 0.686, 0.168)), dot(c, vec3(0.272, 0.534, 0.131)));
    c = mix(c, sp, uSepia);
    c = clamp(c * uBright, 0.0, 1.0);
    return clamp((c - 0.5) * uContrast + 0.5, 0.0, 1.0);
  }
  vec3 aces(vec3 x) { x *= uExposure; const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14; return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0); }
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  float gauss(float x, float s) { return 1.0 / (s * 2.5066283) * exp(x * x / (-2.0 * s * s)); }
  void main() {
    vec2 uv = vUv;
    // расслоение цветов по вертикали, сильнее к краям; под надписями вдвое слабее
    vec2 r = vec2(uAspect, 1.0) / max(uAspect, 1.0);
    float n = length((uv - 0.5) * r * 2.0);
    float a = 0.001 * n * 2.0 * uCA;
    vec2 su = lensAj(uv, uUiLens.x, 1.0);
    vec2 sc = clamp(su, 0.0, 1.0);
    float ua = max(texture2D(tUi, sc).a, max(texture2D(tUi, sc - vec2(0.0, a)).a, texture2D(tUi, sc + vec2(0.0, a)).a));
    if (ua > 0.0) a *= 0.5;
    vec3 base = grade(texture2D(tIn, uv).rgb);
    vec3 ca = vec3(grade(texture2D(tIn, uv + vec2(0.0, -a)).rgb).r, base.g, grade(texture2D(tIn, uv + vec2(0.0, a)).rgb).b);
    float p = 0.005;
    float edge = min(smoothstep(0.0, p, uv.x), smoothstep(0.0, p, 1.0 - uv.x)) * min(smoothstep(0.0, p, uv.y), smoothstep(0.0, p, 1.0 - uv.y));
    vec3 col = mix(base, ca, edge);
    // интерфейс второй раз — чёткий, поверх свечения
    if (uUi > 0.0) {
      vec4 ui = texture2D(tUi, sc);
      ui.rgb = ui.a > 0.0 ? srgbToLinear(ui.rgb / ui.a) : vec3(0.0);
      float m = (uUiLens.y > 0.001 ? lensMask(su, uUiLens.y, uDim) : 1.0) * ui.a * uUi * uUiCrisp;
      col = mix(col, ui.rgb, m);
    }
    // зерно: всплывает в тенях, как у плёнки
    float h = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + uTime * uNoiseVel);
    float o = gauss(h, 0.49);
    col += vec3(o) * (1.0 - col) * uNoise;
    gl_FragColor = vec4(toSRGB(aces(col)), 1.0);
  }
`;

// Плёнка каждой сцены. Имена и смысл — как в настройках shader.se
// (pagesConfig): свои значения подобраны под наши сцены.
export const LOOKS = {
  boot:    { noiseVelocity: 1, noiseIntensity: 1.4, sepiaIntensity: 0.25, bloomThreshold: 0.5, bloomIntensity: 0.55, bloomRadius: 0.82, bloomSmoothing: 0.5, contrast: 1.0, brightness: 1.05, saturation: 0.9, motionBlur: 0.3, lensDistortion: 0.25, lensDistortionBorders: 1, pow: 1.1, chromaticAbberationStrength: 1.6, vignetteRadius: 0.52, vignetteSmoothness: 0.27, vignetteIntensity: 0.3, uiGain: 1.0, uiCrisp: 0.85, exposure: 1.0 },
  hero:    { noiseVelocity: 1, noiseIntensity: 1.12, sepiaIntensity: 0.22, bloomThreshold: 0.66, bloomIntensity: 0.85, bloomRadius: 0.78, bloomSmoothing: 0.3, contrast: 0.97, brightness: 1.12, saturation: 1, motionBlur: 0.3, lensDistortion: 0.16, lensDistortionBorders: 0, pow: 1.45, chromaticAbberationStrength: 1.04, vignetteRadius: 0.5, vignetteSmoothness: 0.3, vignetteIntensity: 0.1, uiGain: 1.0, uiCrisp: 0.85, exposure: 1.0 },
  chan:    { noiseVelocity: 1, noiseIntensity: 0.87, sepiaIntensity: 0.28, bloomThreshold: 0.7, bloomIntensity: 0.5, bloomRadius: 0.8, bloomSmoothing: 0.2, contrast: 0.98, brightness: 1.08, saturation: 0.92, motionBlur: 0.4, lensDistortion: 0.16, lensDistortionBorders: 1, pow: 1.36, chromaticAbberationStrength: 1, vignetteRadius: 0, vignetteSmoothness: 0.32, vignetteIntensity: 0, uiGain: 1.0, uiCrisp: 0.85, exposure: 1.0 },
  tt:      { noiseVelocity: 1, noiseIntensity: 0.9, sepiaIntensity: 0.06, bloomThreshold: 0.6, bloomIntensity: 0.6, bloomRadius: 0.72, bloomSmoothing: 0.3, contrast: 1.0, brightness: 1.0, saturation: 1.0, motionBlur: 0.25, lensDistortion: 0.16, lensDistortionBorders: 1, pow: 1.1, chromaticAbberationStrength: 1.4, vignetteRadius: 0.62, vignetteSmoothness: 0.3, vignetteIntensity: 0.35, uiGain: 1.0, uiCrisp: 0.8, exposure: 1.0 },
  work:    { noiseVelocity: 1, noiseIntensity: 1.48, sepiaIntensity: 0.81, bloomThreshold: 0.66, bloomIntensity: 0.75, bloomRadius: 0.75, bloomSmoothing: 0.2, contrast: 1, brightness: 1, saturation: 0.56, motionBlur: 0.5, lensDistortion: 0.16, lensDistortionBorders: 1, pow: 1.34, chromaticAbberationStrength: 2.5, vignetteRadius: 0.5, vignetteSmoothness: 0.83, vignetteIntensity: 0.45, uiGain: 1.0, uiCrisp: 0.8, exposure: 1.0 },
  paper:   { noiseVelocity: 0.05, noiseIntensity: 1, sepiaIntensity: 0.4, bloomThreshold: 0.75, bloomIntensity: 0.08, bloomRadius: 0.74, bloomSmoothing: 0.65, contrast: 1, brightness: 1, saturation: 1, motionBlur: 0, lensDistortion: 0.16, lensDistortionBorders: 0, pow: 1.25, chromaticAbberationStrength: 0.8, vignetteRadius: 0.79, vignetteSmoothness: 0.13, vignetteIntensity: 0, uiGain: 1.0, uiCrisp: 0.9, exposure: 1.0 },
  watch:   { noiseVelocity: 1, noiseIntensity: 1, sepiaIntensity: 0.26, bloomThreshold: 0.72, bloomIntensity: 1.1, bloomRadius: 0.86, bloomSmoothing: 0.29, contrast: 0.95, brightness: 1, saturation: 0.95, motionBlur: 0.3, lensDistortion: 0.16, lensDistortionBorders: 0, pow: 1.3, chromaticAbberationStrength: 1, vignetteRadius: 0, vignetteSmoothness: 0, vignetteIntensity: 0, uiGain: 1.0, uiCrisp: 0.85, exposure: 1.0 },
  radio:   { noiseVelocity: 3.5, noiseIntensity: 0.7, sepiaIntensity: 0.4, bloomThreshold: 0.66, bloomIntensity: 0.55, bloomRadius: 0.72, bloomSmoothing: 0.3, contrast: 1.0, brightness: 0.95, saturation: 0.85, motionBlur: 0.05, lensDistortion: 0.16, lensDistortionBorders: 0, pow: 1.3, chromaticAbberationStrength: 1.15, vignetteRadius: 0, vignetteSmoothness: 0, vignetteIntensity: 0, uiGain: 1.0, uiCrisp: 0.88, exposure: 1.0 },
};

export function mixLook(a, b, t) {
  const o = {};
  for (const k in a) o[k] = a[k] + ((b[k] ?? a[k]) - a[k]) * t;
  return o;
}

function pass(frag, uniforms) {
  const m = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
  return m;
}

export function createFilm(renderer, { mobile = false, lite = false } = {}) {
  const HF = THREE.HalfFloatType;
  const mkRT = (o = {}) => new THREE.WebGLRenderTarget(2, 2, { type: HF, depthBuffer: false, colorSpace: THREE.LinearSRGBColorSpace, ...o });
  const samples = (mobile || lite) ? 0 : 4;
  const rtScene = [mkRT({ depthBuffer: true, samples }), mkRT({ depthBuffer: true, samples })];
  const rtComp = mkRT();
  const LEVELS = lite ? 4 : mobile ? 5 : 7;
  const down = [], up = [];
  for (let i = 0; i < LEVELS; i++) { down.push(mkRT()); up.push(mkRT()); }
  const rtMB = [mkRT(), mkRT()];
  let mbi = 0;
  const uiTex = new THREE.Texture();
  uiTex.premultiplyAlpha = true;
  uiTex.generateMipmaps = false;
  uiTex.minFilter = THREE.LinearFilter;
  uiTex.colorSpace = THREE.NoColorSpace;

  const geo = new THREE.PlaneGeometry(2, 2);
  const quad = new THREE.Mesh(geo);
  quad.frustumCulled = false;
  const qScene = new THREE.Scene(); qScene.add(quad);
  const qCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const dim = new THREE.Vector2(1, 1);

  const mCompose = pass(COMPOSE, {
    tCur: { value: null }, tNext: { value: null }, tUi: { value: uiTex },
    uMode: { value: 1 }, uT: { value: 0 }, uType: { value: 0 },
    uCurLens: { value: new THREE.Vector3(0, 0, 1) }, uNextLens: { value: new THREE.Vector3(0, 0, 1) },
    uUiLens: { value: new THREE.Vector2() }, uUi: { value: 1 }, uUiGain: { value: 1 },
    uVig: { value: new THREE.Vector3() }, uDim: { value: dim }, uStatic: { value: 0 }, uTime: { value: 0 },
  });
  const mDown0 = pass(DOWN0, { tIn: { value: null }, uTexel: { value: new THREE.Vector2() }, uThr: { value: 0.5 }, uSmooth: { value: 0.2 } });
  const mDown = pass(DOWN, { tIn: { value: null }, uTexel: { value: new THREE.Vector2() } });
  const mUp = pass(UP, { tIn: { value: null }, tSupport: { value: null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 0.8 } });
  const mGlow = pass(GLOW, { tComp: { value: rtComp.texture }, tBloom: { value: null }, tPrev: { value: null }, uBloom: { value: 1 }, uMotion: { value: 0 } });
  const mFinal = pass(FINAL, {
    tIn: { value: null }, tUi: { value: uiTex },
    uPow: { value: 1 }, uSepia: { value: 0 }, uBright: { value: 1 }, uContrast: { value: 1 }, uCA: { value: 1 }, uAspect: { value: 1 },
    uUiLens: { value: new THREE.Vector2() }, uUi: { value: 1 }, uUiCrisp: { value: 0.7 },
    uTime: { value: 0 }, uNoise: { value: 0.03 }, uNoiseVel: { value: 1 }, uExposure: { value: 1 }, uDim: { value: dim },
  });

  let W = 2, H = 2, lastTime = -1;

  function setSize(w, h, dpr) {
    W = Math.max(2, Math.floor(w * dpr)); H = Math.max(2, Math.floor(h * dpr));
    dim.set(W, H);
    for (const rt of rtScene) rt.setSize(W, H);
    rtComp.setSize(W, H);
    rtMB[0].setSize(W, H); rtMB[1].setSize(W, H);
    let bw = W, bh = H;
    for (let i = 0; i < LEVELS; i++) {
      bw = Math.max(1, Math.floor(bw / 2)); bh = Math.max(1, Math.floor(bh / 2));
      down[i].setSize(bw, bh); up[i].setSize(bw, bh);
    }
    mFinal.uniforms.uAspect.value = w / h;
  }

  function blit(mat, target) {
    quad.material = mat;
    renderer.setRenderTarget(target);
    renderer.render(qScene, qCam);
  }

  // сцену в цель: draw(renderer) сам вызывает renderer.render
  function renderScene(i, draw, clear = [0, 0, 0, 1]) {
    const rt = rtScene[i];
    renderer.setRenderTarget(rt);
    renderer.setClearColor(new THREE.Color(clear[0], clear[1], clear[2]), clear[3]);
    renderer.clear(true, true, true);
    draw(rt);
    return rt.texture;
  }

  // память текстуры three выделяет один раз под первый размер холста (texStorage2D);
  // холст вырос или сжался (на телефоне — адресная строка) — без dispose загрузка
  // падает молча, и надписи застывают или пропадают
  let uiW = 0, uiH = 0;
  function setUi(canvas, version) {
    if (uiTex.image !== canvas) { uiTex.image = canvas; }
    if (canvas.width !== uiW || canvas.height !== uiH) {
      if (uiW) uiTex.dispose();
      uiW = canvas.width; uiH = canvas.height;
    }
    uiTex.needsUpdate = true;
  }

  // f: { cur, next, mode, t, type, curLook, nextLook, look, time, ui }
  function render(f) {
    const L = f.look;
    const c = mCompose.uniforms;
    c.tCur.value = f.cur; c.tNext.value = f.next || f.cur;
    c.uMode.value = f.next ? 2 : 1; c.uT.value = f.t || 0; c.uType.value = f.type || 0;
    c.uCurLens.value.set(f.curLook.lensDistortion * (f.lensFactor ?? 1), f.curLook.lensDistortionBorders * (f.borderFactor ?? 1), f.curLook.saturation);
    const nl = f.nextLook || f.curLook;
    c.uNextLens.value.set(nl.lensDistortion * (f.lensFactor ?? 1), nl.lensDistortionBorders * (f.borderFactor ?? 1), nl.saturation);
    c.uUiLens.value.set(L.lensDistortion * (f.lensFactor ?? 1), Math.min(1, L.lensDistortionBorders * (f.borderFactor ?? 1)));
    c.uUi.value = f.ui ?? 1; c.uUiGain.value = L.uiGain;
    c.uVig.value.set(L.vignetteRadius, L.vignetteSmoothness, L.vignetteIntensity);
    c.uStatic.value = f.static || 0; c.uTime.value = f.time;
    blit(mCompose, rtComp);

    // свечение
    mDown0.uniforms.tIn.value = rtComp.texture;
    mDown0.uniforms.uTexel.value.set(1 / W, 1 / H);
    mDown0.uniforms.uThr.value = L.bloomThreshold;
    mDown0.uniforms.uSmooth.value = L.bloomSmoothing;
    blit(mDown0, down[0]);
    for (let i = 1; i < LEVELS; i++) {
      mDown.uniforms.tIn.value = down[i - 1].texture;
      mDown.uniforms.uTexel.value.set(1 / down[i - 1].width, 1 / down[i - 1].height);
      blit(mDown, down[i]);
    }
    let src = down[LEVELS - 1];
    for (let i = LEVELS - 2; i >= 0; i--) {
      mUp.uniforms.tIn.value = src.texture;
      mUp.uniforms.tSupport.value = down[i].texture;
      mUp.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
      mUp.uniforms.uRadius.value = L.bloomRadius;
      blit(mUp, up[i]);
      src = up[i];
    }
    // мерцание свечения, как у ламп
    const x = f.time;
    const flick = (Math.sin(5.3 * x * 0.5) + Math.sin(11.7 * x * 0.5 + 2.4 * Math.sin(2.1 * x * 0.5) * 0.5) + Math.sin(23.9 * x * 0.5 + 1.3 * Math.cos(7.1 * x * 0.5) * 0.5)) * 0.03 * L.bloomIntensity;
    // след движения не зависит от частоты кадров
    const dt = lastTime < 0 ? 1 / 60 : Math.max(1e-3, x - lastTime);
    lastTime = x;
    let q = f.reduced ? 0 : L.motionBlur;
    q = dt > 1 / 120 ? q * (1 / 120) / dt : Math.pow(q, dt / (1 / 120));
    const g = mGlow.uniforms;
    g.tBloom.value = src.texture;
    g.uBloom.value = 1.5 * L.bloomIntensity + flick;
    g.tPrev.value = rtMB[1 - mbi].texture;
    g.uMotion.value = f.still ? 0 : Math.min(0.85, 1.3 * q);
    blit(mGlow, rtMB[mbi]);

    const u = mFinal.uniforms;
    u.tIn.value = rtMB[mbi].texture;
    u.uPow.value = L.pow; u.uSepia.value = L.sepiaIntensity; u.uBright.value = L.brightness; u.uContrast.value = L.contrast;
    u.uCA.value = L.chromaticAbberationStrength;
    u.uUiLens.value.copy(c.uUiLens.value); u.uUi.value = c.uUi.value; u.uUiCrisp.value = L.uiCrisp;
    u.uTime.value = f.still ? 0.37 : x; u.uNoiseVel.value = L.noiseVelocity;
    u.uNoise.value = 0.037 * L.noiseIntensity * (f.noiseFactor ?? 1);
    u.uExposure.value = L.exposure;
    blit(mFinal, null);
    mbi = 1 - mbi;
  }

  return { setSize, renderScene, render, setUi, uiTex, rtScene };
}
