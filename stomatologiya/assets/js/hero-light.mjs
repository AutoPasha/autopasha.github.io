/* ============================================================
   Кедр: мягкий утренний свет на первом экране.
   SoftAurora (React Bits) перенесён на чистый ogl: та же математика
   perlin-шума и косинусных градиентов, палитра берётся из brand.css.
   Рисует в половинном разрешении и останавливается, когда первый
   экран ушёл из поля зрения или вкладка скрыта.
   ============================================================ */
import { Renderer, Program, Mesh, Triangle } from "./lib/ogl.mjs";

const canvas = document.getElementById("hero-light");
const stage = document.querySelector(".hero-scene") || document.querySelector(".hero-stage");

/* без движения не запускаемся вообще */
const stop = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (canvas && stage && !stop) {
  const css = getComputedStyle(stage);
  const num = (name, fallback) => {
    const v = parseFloat(css.getPropertyValue(name));
    return isFinite(v) ? v : fallback;
  };
  const hex = (name, fallback) => {
    const v = css.getPropertyValue(name).trim();
    return /^#[0-9a-f]{6}$/i.test(v) ? v : fallback;
  };

  const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

  const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uBrightness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uNoiseFreq;
uniform float uNoiseAmp;
uniform float uBandHeight;
uniform float uBandSpread;
uniform float uOctaveDecay;
uniform float uLayerOffset;
uniform float uColorSpeed;
uniform float uLightMode;

#define TAU 6.28318

vec3 gradientHash(vec3 p) {
  p = vec3(
    dot(p, vec3(127.1, 311.7, 234.6)),
    dot(p, vec3(269.5, 183.3, 198.3)),
    dot(p, vec3(169.5, 283.3, 156.9))
  );
  vec3 h = fract(sin(p) * 43758.5453123);
  float phi = acos(2.0 * h.x - 1.0);
  float theta = TAU * h.y;
  return vec3(cos(theta) * sin(phi), sin(theta) * cos(phi), cos(phi));
}

float quinticSmooth(float t) {
  float t2 = t * t;
  float t3 = t2 * t;
  return 6.0 * t3 * t2 - 15.0 * t2 * t2 + 10.0 * t3;
}

vec3 cosineGradient(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(TAU * (c * t + d));
}

float perlin3D(float amplitude, float frequency, float px, float py, float pz) {
  float x = px * frequency;
  float y = py * frequency;

  float fx = floor(x); float fy = floor(y); float fz = floor(pz);
  float cx = ceil(x);  float cy = ceil(y);  float cz = ceil(pz);

  vec3 g000 = gradientHash(vec3(fx, fy, fz));
  vec3 g100 = gradientHash(vec3(cx, fy, fz));
  vec3 g010 = gradientHash(vec3(fx, cy, fz));
  vec3 g110 = gradientHash(vec3(cx, cy, fz));
  vec3 g001 = gradientHash(vec3(fx, fy, cz));
  vec3 g101 = gradientHash(vec3(cx, fy, cz));
  vec3 g011 = gradientHash(vec3(fx, cy, cz));
  vec3 g111 = gradientHash(vec3(cx, cy, cz));

  float d000 = dot(g000, vec3(x - fx, y - fy, pz - fz));
  float d100 = dot(g100, vec3(x - cx, y - fy, pz - fz));
  float d010 = dot(g010, vec3(x - fx, y - cy, pz - fz));
  float d110 = dot(g110, vec3(x - cx, y - cy, pz - fz));
  float d001 = dot(g001, vec3(x - fx, y - fy, pz - cz));
  float d101 = dot(g101, vec3(x - cx, y - fy, pz - cz));
  float d011 = dot(g011, vec3(x - fx, y - cy, pz - cz));
  float d111 = dot(g111, vec3(x - cx, y - cy, pz - cz));

  float sx = quinticSmooth(x - fx);
  float sy = quinticSmooth(y - fy);
  float sz = quinticSmooth(pz - fz);

  float lx00 = mix(d000, d100, sx);
  float lx10 = mix(d010, d110, sx);
  float lx01 = mix(d001, d101, sx);
  float lx11 = mix(d011, d111, sx);

  float ly0 = mix(lx00, lx10, sy);
  float ly1 = mix(lx01, lx11, sy);

  return amplitude * mix(ly0, ly1, sz);
}

float auroraGlow(float t, vec2 shift) {
  vec2 uv = gl_FragCoord.xy / uResolution.y;
  uv += shift;

  float noiseVal = 0.0;
  float freq = uNoiseFreq;
  float amp = uNoiseAmp;
  vec2 samplePos = uv * uScale;

  for (float i = 0.0; i < 3.0; i += 1.0) {
    noiseVal += perlin3D(amp, freq, samplePos.x, samplePos.y, t);
    amp *= uOctaveDecay;
    freq *= 2.0;
  }

  float yBand = uv.y * 10.0 - uBandHeight * 10.0;
  return 0.3 * max(exp(uBandSpread * (1.0 - 1.1 * abs(noiseVal + yBand))), 0.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float t = uSpeed * 0.4 * uTime;
  vec2 shift = vec2(0.0);

  float glow1 = auroraGlow(t, shift);
  float glow2 = auroraGlow(t + uLayerOffset, shift);
  vec3 gradient1 = cosineGradient(uv.x + uTime * uSpeed * 0.2 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.3, 0.20, 0.20));
  vec3 gradient2 = cosineGradient(uv.x + uTime * uSpeed * 0.1 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25));

  vec3 col = 0.99 * glow1 * gradient1 * uColor1;
  col += 0.99 * glow2 * gradient2 * uColor2;

  col *= uBrightness;
  float alpha = clamp(length(col), 0.0, 1.0);
  if (uLightMode > 0.5) {
    float phase1 = dot(gradient1, vec3(0.299, 0.587, 0.114));
    float phase2 = dot(gradient2, vec3(0.299, 0.587, 0.114));
    float weight1 = pow(max(glow1 * (0.62 + 0.38 * phase1), 0.0), 1.35);
    float weight2 = pow(max(glow2 * (0.62 + 0.38 * phase2), 0.0), 1.35);
    float weightSum = max(weight1 + weight2, 0.0001);

    vec3 chroma = (weight1 * uColor1 + weight2 * uColor2) / weightSum;
    float neutral = min(chroma.r, min(chroma.g, chroma.b));
    chroma = max(chroma - vec3(neutral * 0.78), vec3(0.0));
    float peak = max(chroma.r, max(chroma.g, chroma.b));
    chroma = pow(clamp(chroma / max(peak, 0.0001), 0.0, 1.0), vec3(1.08));

    float ink = clamp((weight1 + weight2) * uBrightness * 1.5, 0.0, 0.8);
    gl_FragColor = vec4(mix(vec3(1.0), chroma, ink), 1.0);
  } else {
    gl_FragColor = vec4(col, alpha);
  }
}
`;

  const toVec3 = (color) => {
    const h = color.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16) / 255,
      parseInt(h.slice(2, 4), 16) / 255,
      parseInt(h.slice(4, 6), 16) / 255
    ];
  };

  try {
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: false,
      dpr: 1,
      width: stage.clientWidth,
      height: stage.clientHeight
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height] },
        uSpeed: { value: num("--aurora-speed", 0.12) },
        uScale: { value: 1.45 },
        uBrightness: { value: 1.0 },
        uColor1: { value: toVec3(hex("--aurora-1", "#efe7d6")) },
        uColor2: { value: toVec3(hex("--aurora-2", "#c3cdb4")) },
        uNoiseFreq: { value: 1.5 },
        uNoiseAmp: { value: 1.0 },
        uBandHeight: { value: 0.44 },
        uBandSpread: { value: 0.85 },
        uOctaveDecay: { value: 0.14 },
        uLayerOffset: { value: 0.34 },
        uColorSpeed: { value: 0.3 },
        uLightMode: { value: 1 }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });

    /* половина разрешения: этого хватает для мягкого света и хватает для кадров в секунду */
    const resize = () => {
      const w = Math.max(2, Math.round(stage.clientWidth / 2));
      const h = Math.max(2, Math.round(stage.clientHeight / 2));
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    canvas.replaceWith(gl.canvas);
    gl.canvas.id = "hero-light";
    /* класс .hero-light важен: он несёт прозрачность, мягкий режим наложения и маску */
    gl.canvas.className = "hero-light hero-light-canvas";
    gl.canvas.setAttribute("aria-hidden", "true");

    let frame = 0;
    let live = false;
    let last = 0;

    const render = (time) => {
      frame = requestAnimationFrame(render);
      if (!live) { last = time; return; }
      /* ровный ход: медленный свет не должен дёргаться между кадрами */
      const dt = Math.min(0.05, (time - last) / 1000);
      last = time;
      program.uniforms.uTime.value += dt;
      renderer.render({ scene: mesh });
    };

    const play = () => {
      if (!live) { live = true; last = performance.now(); }
    };
    const hold = () => { live = false; };

    frame = requestAnimationFrame(render);

    /* вне экрана не рисуем вовсе */
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) play();
          else hold();
        }
      }, { threshold: 0 }).observe(stage);
    }
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hold();
    });
  } catch (err) {
    /* нет WebGL: первый экран остаётся просто светлым, без ошибок в консоли */
    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
  }
}
