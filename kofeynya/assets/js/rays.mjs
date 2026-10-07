/* Лампа над стойкой: объёмные лучи из точки света (LightRays, ogl).
   Рисуем в половинном разрешении, встаём на паузу вне экрана. */
import { Renderer, Program, Mesh, Triangle } from './lib/ogl.mjs';

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '#E3A145');
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform float noiseAmount;
uniform float distortion;
uniform float glow;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 1.4 + length(sourceToCoord) * 0.008) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.82 + 0.18 * sin(iTime * speed * 2.4)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, rayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, rayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.012 + iTime * 0.08);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.16 + brightness * 0.72;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
  fragColor.rgb *= glow;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`;

export function createRays(container, options) {
  const o = options || {};
  const origin = o.origin || 'top-right';
  const outside = o.outside || 0.22;

  let renderer;
  try {
    renderer = new Renderer({ dpr: 1, alpha: true, antialias: false });
  } catch (e) {
    return null;
  }

  const gl = renderer.gl;
  const canvas = gl.canvas;
  canvas.style.cssText = 'width:100%;height:100%;display:block;';
  container.appendChild(canvas);

  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: [1, 1] },
    rayPos: { value: [0, 0] },
    rayDir: { value: [0, 1] },
    raysColor: { value: hexToRgb(o.color || '#E3A145') },
    raysSpeed: { value: o.speed || 1 },
    lightSpread: { value: o.spread || 1 },
    rayLength: { value: o.length || 2 },
    pulsating: { value: 1 },
    fadeDistance: { value: o.fadeDistance || 1 },
    saturation: { value: o.saturation || 1 },
    noiseAmount: { value: o.noise != null ? o.noise : 0.12 },
    distortion: { value: o.distortion != null ? o.distortion : 0.25 },
    glow: { value: 0 }
  };

  const mesh = new Mesh(gl, { geometry: new Triangle(gl), program: new Program(gl, { vertex: vert, fragment: frag, uniforms }) });

  const dprFor = () => {
    const base = Math.min(window.devicePixelRatio || 1, 2);
    return base * (window.innerWidth < 760 ? 0.4 : 0.6);
  };

  const place = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.dpr = dprFor();
    renderer.setSize(w, h);
    const W = w * renderer.dpr;
    const H = h * renderer.dpr;
    uniforms.iResolution.value = [W, H];
    if (origin === 'top-left') {
      uniforms.rayPos.value = [0, -outside * H];
      uniforms.rayDir.value = [0, 1];
    } else if (origin === 'top-right') {
      uniforms.rayPos.value = [W, -outside * H];
      uniforms.rayDir.value = [0, 1];
    } else { // top-center
      uniforms.rayPos.value = [W * 0.5, -outside * H];
      uniforms.rayDir.value = [0, 1];
    }
    uniforms.raysColor.value = hexToRgb(container.dataset.rayColor || o.color || '#E3A145');
    draw();
  };

  let raf = 0;
  let onScreen = true;
  let pageOn = !document.hidden;

  const draw = () => {
    try { renderer.render({ scene: mesh }); } catch (e) { stop(); }
  };

  const loop = (t) => {
    uniforms.iTime.value = t * 0.001;
    draw();
    raf = window.requestAnimationFrame(loop);
  };

  const start = () => { if (!raf && onScreen && pageOn) raf = window.requestAnimationFrame(loop); };
  const stop = () => { if (raf) { window.cancelAnimationFrame(raf); raf = 0; } };

  const io = new IntersectionObserver((entries) => {
    onScreen = entries[0].isIntersecting;
    onScreen ? start() : stop();
  }, { threshold: 0 });
  io.observe(container);

  const onVis = () => { pageOn = !document.hidden; pageOn ? start() : stop(); };
  document.addEventListener('visibilitychange', onVis);

  const ro = new ResizeObserver(place);
  ro.observe(container);

  place();

  return {
    setGlow: (v) => { uniforms.glow.value = v; if (v <= 0.001) draw(); },
    destroy: () => {
      stop(); io.disconnect(); ro.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      try { container.removeChild(canvas); } catch (e) { /* noop */ }
    }
  };
}