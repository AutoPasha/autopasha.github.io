/* =========================================================
   Фон блока цифр: расплавленный металл (MoltenMetal из reactbits)
   на ogl. Палитра завода: графит и сигнальный оранжевый.
   Рисует в половинном разрешении, вне экрана стоит на паузе,
   при prefers-reduced-motion не запускается вовсе.
   ========================================================= */

import { Renderer, Program, Mesh, Triangle } from "./lib/ogl.mjs";

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uColorMode;
uniform float uGrain;
uniform float uGrainIntensity;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float time = iTime * uSpeed;
  vec2 p = uScale * ((gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y) - 0.5;

  vec2 drift = vec2(0.0);
  if (uEnableMouse) {
    drift = (uMouse - 0.5) * uMouseStrength * 2.0;
  }
  p += drift;

  vec2 i = p;
  float c = 0.0;
  float r = length(p + vec2(sin(time), sin(time * 0.3 + 5.0)) * 0.5);
  float d = length(p);
  float rot = d + time + p.x * uSwirl;

  float cosRot = cos(rot);
  mat2 warp = mat2(cosRot - sin(time / 5.0), sin(rot), -sin(cosRot - time), cosRot) * uFold;
  float glowCore = uGlow * uCoreSize;

  for (float n = 0.0; n < 8.0; n++) {
    if (n >= uDetail) break;
    p *= warp;
    float t = r - time / (n + 3.0);
    i -= p + vec2(cos(t - i.x - r) + sin(t + i.y), sin(t - i.y) + cos(t + i.x) + r);
    c += glowCore / length(vec2(sin(i.x + t), cos(i.y + t)));
  }

  c /= 6.0;

  float intensity = max(c - uBlackPoint, 0.0) * uBrightness;
  float g = clamp(intensity, 0.0, 1.0);

  float mid = uColorMode > 0.5 ? 0.35 : 0.5;
  vec3 col = mix(uColor1, uColor2, smoothstep(0.0, mid, g));
  col = mix(col, uColor3, smoothstep(mid, 1.0, g));

  float a = g;
  if (uGrain > 0.5) {
    float gr = hash(gl_FragCoord.xy + iTime);
    a += (gr - 0.5) * uGrainIntensity;
  }
  a = clamp(a, 0.0, 1.0) * uOpacity;

  fragColor = vec4(col * a, a);
}
`;

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return [1, 1, 1];
  return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
};

/* Палитра бренда: графит цеха, сигнальный оранжевый, тёплая искра */
const C1 = hexToRgb("#0f141a");
const C2 = hexToRgb("#dd6b2a");
const C3 = hexToRgb("#f2b27a");

const host = document.getElementById("molten");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (host && !reduced) {
  const small = window.innerWidth < 760;
  const fine = window.matchMedia("(pointer: fine)").matches;

  let renderer;
  try {
    renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: 1
    });
  } catch (err) {
    host.remove();
  }

  if (renderer && renderer.gl) {
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    const canvas = gl.canvas;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    host.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uSpeed: { value: small ? 0.14 : 0.2 },
        uScale: { value: small ? 3.0 : 3.6 },
        uDetail: { value: small ? 2 : 3 },
        uGlow: { value: 1.15 },
        uCoreSize: { value: 0.12 },
        uSwirl: { value: 0.85 },
        uFold: { value: -0.2 },
        uBlackPoint: { value: 0.06 },
        uBrightness: { value: 1.15 },
        uColorMode: { value: 0 },
        uGrain: { value: 1 },
        uGrainIntensity: { value: 0.045 },
        uOpacity: { value: 0.52 },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseStrength: { value: fine ? 0.14 : 0 },
        uEnableMouse: { value: fine },
        uColor1: { value: new Float32Array(C1) },
        uColor2: { value: new Float32Array(C2) },
        uColor3: { value: new Float32Array(C3) }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });

    const quality = small ? 0.45 : 0.55;
    const setSize = () => {
      const rect = host.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * quality));
      const h = Math.max(1, Math.floor(rect.height * quality));
      renderer.setSize(w, h);
      const res = program.uniforms.iResolution.value;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
      renderer.render({ scene: mesh });
    };
    const ro = new ResizeObserver(setSize);
    ro.observe(host);
    setSize();

    const targetMouse = [0.5, 0.5];
    const currentMouse = [0.5, 0.5];
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse[0] = (e.clientX - rect.left) / rect.width;
      targetMouse[1] = 1.0 - (e.clientY - rect.top) / rect.height;
    };
    canvas.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let onScreen = true;
    let tabOpen = !document.hidden;
    const t0 = performance.now();

    const loop = (t) => {
      program.uniforms.iTime.value = (t - t0) * 0.001;
      currentMouse[0] += 0.04 * (targetMouse[0] - currentMouse[0]);
      currentMouse[1] += 0.04 * (targetMouse[1] - currentMouse[1]);
      program.uniforms.uMouse.value[0] = currentMouse[0];
      program.uniforms.uMouse.value[1] = currentMouse[1];
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    const start = () => { if (onScreen && tabOpen && !raf) raf = requestAnimationFrame(loop); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      onScreen ? start() : stop();
    }, { threshold: 0 });
    io.observe(host);

    document.addEventListener("visibilitychange", () => {
      tabOpen = !document.hidden;
      tabOpen ? start() : stop();
    });

    start();
  }
}