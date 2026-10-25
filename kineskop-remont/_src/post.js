// Плёнка поверх 3D: свечение, сепия, сведение цветов, зерно, бочка кинескопа,
// скруглённая рамка, загиб страницы. Всё в одном финальном проходе.
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const quadVert = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

const finalFrag = /* glsl */`
  precision highp float;
  uniform sampler2D tScene;
  uniform sampler2D tPrev;
  uniform vec2 uRes;
  uniform float uTime;
  uniform float uSepia;
  uniform float uPow;
  uniform float uContrast;
  uniform float uBright;
  uniform float uCA;
  uniform float uNoise;
  uniform float uVig;
  uniform float uBarrel;
  uniform float uBorder;
  uniform float uScan;
  uniform float uStatic;
  uniform float uExposure;
  uniform float uFade;
  uniform vec2 uClip;      // видимая полоса по высоте, 0..1 снизу вверх
  uniform float uCurl;     // 0..1 загиб страницы
  uniform vec3 uPaper;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x) { const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14; return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0); }
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  float rbox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }

  vec2 barrel(vec2 uv, float k) {
    vec2 c = uv - 0.5;
    float r2 = dot(c, c);
    return 0.5 + c * (1.0 + k * r2) / (1.0 + k * 0.25);
  }

  // кадр после всех плёночных поправок в точке uv
  vec3 shade(vec2 uv) {
    vec2 c = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
    float rr = length(c);
    float ca = 0.0016 * uCA * (0.4 + rr * 2.2);
    // срыв строк при помехах
    float line = floor(uv.y * 120.0);
    uv.x += uStatic * (hash(vec2(line, floor(uTime * 24.0))) - 0.5) * 0.06;
    vec3 col;
    col.r = texture2D(tScene, uv + vec2(0.0, ca)).r;
    col.g = texture2D(tScene, uv).g;
    col.b = texture2D(tScene, uv - vec2(0.0, ca)).b;
    col = col * uExposure;
    col = aces(col);
    col = pow(col, vec3(uPow));
    vec3 sep = vec3(dot(col, vec3(0.393, 0.769, 0.189)), dot(col, vec3(0.349, 0.686, 0.168)), dot(col, vec3(0.272, 0.534, 0.131)));
    col = mix(col, sep, uSepia);
    col = clamp((col - 0.5) * uContrast + 0.5, 0.0, 1.0) * uBright;
    // виньетка
    col *= mix(1.0, smoothstep(1.05, 0.25, rr), uVig);
    // строки развёртки
    col *= 1.0 - uScan * (0.5 + 0.5 * sin(uv.y * uRes.y * 1.5708));
    // помехи
    float sn = hash(floor(uv * uRes / 2.0) + floor(uTime * 50.0));
    col = mix(col, vec3(sn), uStatic * 0.85);
    col *= uFade;
    return col;
  }

  void main() {
    vec2 uv = vUv;
    float alpha = 1.0;
    vec3 col;

    if (uCurl > 0.0) {
      // страница скатывается рулоном из правого нижнего угла в левый верхний
      float asp = uRes.x / uRes.y;
      vec2 p = vec2(uv.x * asp, uv.y);
      vec2 d = normalize(vec2(-asp, 1.0));
      vec2 e = vec2(-d.y, d.x);
      vec2 start = vec2(asp, 0.0);
      float len = dot(vec2(0.0, 1.0) - start, d) + 0.6;
      float r = 0.12;
      vec2 o = start + d * (uCurl * (len + r * 3.2) - r * 1.6);
      float x = dot(p - o, d);
      float y = dot(p - o, e);
      if (x >= 0.0) {
        col = shade(uv);
        // тень от рулона на ровном листе
        col *= mix(0.55, 1.0, smoothstep(0.0, r * 0.9, x));
      } else if (x > -r) {
        float th1 = asin(clamp(-x / r, 0.0, 1.0));
        float th2 = 3.14159265 - th1;
        vec2 q2 = o + d * (-th2 * r) + e * y;
        vec2 u2 = vec2(q2.x / asp, q2.y);
        if (u2.x >= 0.0 && u2.x <= 1.0 && u2.y >= 0.0 && u2.y <= 1.0) {
          float lit = 0.62 + 0.38 * sin(th2);
          col = uPaper * lit;
          // сквозь бумагу чуть видно картинку
          col = mix(col, shade(u2) * 0.35 + uPaper * 0.5, 0.06);
        } else {
          vec2 q1 = o + d * (-th1 * r) + e * y;
          vec2 u1 = vec2(q1.x / asp, q1.y);
          if (u1.x >= 0.0 && u1.x <= 1.0 && u1.y >= 0.0 && u1.y <= 1.0) {
            col = shade(u1) * (0.55 + 0.45 * cos(th1));
          } else {
            alpha = 0.0; col = vec3(0.0);
          }
        }
      } else {
        // открытая бумага под листом: мягкая тень у рулона
        float sh = smoothstep(-r - 0.09, -r, x) * 0.28;
        gl_FragColor = vec4(vec3(0.0), sh);
        return;
      }
    } else {
      vec2 suv = mix(uv, barrel(uv, 0.22), uBarrel);
      col = shade(suv);
      if (uBorder > 0.0) {
        float asp = uRes.x / uRes.y;
        vec2 q = (uv - 0.5) * vec2(asp, 1.0);
        float m = 0.014 * uBorder;
        float dd = rbox(q, vec2(asp * 0.5 - m, 0.5 - m), 0.06 * uBorder);
        float inside = 1.0 - smoothstep(-0.003, 0.003, dd);
        col *= inside;
        col *= mix(1.0, smoothstep(0.0, -0.06, dd) * 0.35 + 0.65, uBorder);
      }
    }

    float yy = uv.y;
    alpha *= step(uClip.x, yy) * step(yy, uClip.y);
    col = toSRGB(clamp(col, 0.0, 1.0));
    // зерно поверх, уже в экранной гамме
    float g = hash(gl_FragCoord.xy + fract(uTime * 13.7) * 100.0) - 0.5;
    col += g * uNoise * 0.045;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

export const LOOKS = {
  // как у Shader: у каждой сцены своя плёнка
  boot:     { sepia: 0.12, pow: 1.0, contrast: 1.0, bright: 1.05, ca: 1.2, noise: 0.9, vig: 0.35, bloom: 0.9, thr: 0.62, rad: 0.7, exposure: 1.0, scan: 0.06 },
  hero:     { sepia: 0.22, pow: 1.12, contrast: 1.02, bright: 1.05, ca: 1.05, noise: 0.8, vig: 0.55, bloom: 0.95, thr: 0.78, rad: 0.78, exposure: 1.0, scan: 0.0 },
  channel:  { sepia: 0.16, pow: 1.05, contrast: 1.02, bright: 1.04, ca: 1.0, noise: 0.85, vig: 0.4, bloom: 0.6, thr: 0.82, rad: 0.75, exposure: 0.95, scan: 0.05 },
  workshop: { sepia: 0.5, pow: 1.1, contrast: 1.05, bright: 1.0, ca: 1.6, noise: 1.2, vig: 0.65, bloom: 0.8, thr: 0.72, rad: 0.75, exposure: 1.0, scan: 0.0 },
  watch:    { sepia: 0.22, pow: 1.12, contrast: 1.04, bright: 1.0, ca: 1.0, noise: 0.9, vig: 0.6, bloom: 0.75, thr: 0.86, rad: 0.7, exposure: 0.95, scan: 0.0 },
  radio:    { sepia: 0.38, pow: 1.1, contrast: 1.0, bright: 1.0, ca: 1.15, noise: 0.8, vig: 0.55, bloom: 0.8, thr: 0.7, rad: 0.72, exposure: 1.0, scan: 0.0 },
};

export function mixLook(a, b, t) {
  const o = {};
  for (const k in a) o[k] = a[k] + (b[k] - a[k]) * t;
  return o;
}

export function createPost(renderer, { mobile }) {
  const size = new THREE.Vector2();
  const opts = { type: THREE.HalfFloatType, colorSpace: THREE.LinearSRGBColorSpace, depthBuffer: true };
  const rtScene = new THREE.WebGLRenderTarget(1, 1, { ...opts, samples: mobile ? 0 : 4 });
  const rtPrev = new THREE.WebGLRenderTarget(1, 1, { ...opts, depthBuffer: false });
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 1.0, 0.75, 0.55);
  bloom.renderToScreen = false;

  const finalMat = new THREE.ShaderMaterial({
    vertexShader: quadVert,
    fragmentShader: finalFrag,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    uniforms: {
      tScene: { value: null }, tPrev: { value: rtPrev.texture }, uRes: { value: new THREE.Vector2() },
      uTime: { value: 0 }, uSepia: { value: 0 }, uPow: { value: 1 }, uContrast: { value: 1 }, uBright: { value: 1 },
      uCA: { value: 1 }, uNoise: { value: 1 }, uVig: { value: 0.5 }, uBarrel: { value: 0 }, uBorder: { value: 0 },
      uScan: { value: 0 }, uStatic: { value: 0 }, uExposure: { value: 1 }, uFade: { value: 1 },
      uClip: { value: new THREE.Vector2(0, 1) }, uCurl: { value: 0 }, uPaper: { value: new THREE.Color(0xece2cc).convertSRGBToLinear() },
    },
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), finalMat);
  quad.frustumCulled = false;
  const quadScene = new THREE.Scene();
  quadScene.add(quad);
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  function setSize(w, h, dpr) {
    const W = Math.floor(w * dpr), H = Math.floor(h * dpr);
    size.set(W, H);
    rtScene.setSize(W, H);
    rtPrev.setSize(W, H);
    const bs = mobile ? 0.5 : 0.75;
    bloom.setSize(Math.floor(W * bs), Math.floor(H * bs));
    finalMat.uniforms.uRes.value.set(W, H);
  }

  // passes: [{scene, camera, rect:{y0,y1} в долях экрана снизу}]
  function render(passes, look, fx) {
    const u = finalMat.uniforms;
    renderer.setRenderTarget(rtScene);
    renderer.setClearColor(0x000000, 1);
    renderer.clear(true, true, true);
    const W = size.x, H = size.y;
    // отсечение по полосе сцены задаём самой цели рендера: setScissor/setViewport
    // у рендерера работают в CSS-пикселях холста и умножаются на плотность пикселей
    for (const p of passes) {
      if (p.rect && passes.length > 1) {
        const y0 = Math.floor(p.rect[0] * H), y1 = Math.ceil(p.rect[1] * H);
        rtScene.scissor.set(0, y0, W, Math.max(0, y1 - y0));
        rtScene.scissorTest = true;
      } else {
        rtScene.scissorTest = false;
      }
      renderer.setRenderTarget(rtScene);
      renderer.render(p.scene, p.camera);
    }
    rtScene.scissorTest = false;
    bloom.strength = look.bloom * (fx.bloomBoost ?? 1);
    bloom.threshold = look.thr;
    bloom.radius = look.rad;
    bloom.render(renderer, null, rtScene, 0, false);

    u.tScene.value = rtScene.texture;
    u.uTime.value = fx.time;
    u.uSepia.value = look.sepia; u.uPow.value = look.pow; u.uContrast.value = look.contrast; u.uBright.value = look.bright;
    u.uCA.value = look.ca; u.uNoise.value = look.noise; u.uVig.value = look.vig; u.uExposure.value = look.exposure;
    u.uScan.value = look.scan * (fx.scan ?? 1);
    u.uBarrel.value = fx.barrel ?? 0; u.uBorder.value = fx.border ?? 0; u.uStatic.value = fx.static ?? 0;
    u.uFade.value = fx.fade ?? 1; u.uCurl.value = fx.curl ?? 0;
    u.uClip.value.set(fx.clip ? fx.clip[0] : 0, fx.clip ? fx.clip[1] : 1);
    renderer.setRenderTarget(null);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, true, true);
    renderer.render(quadScene, quadCam);
  }

  return { setSize, render, rtScene };
}
