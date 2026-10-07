/* ============================================================
   Сезон: живой огонь за первым заголовком.
   Шейдер LightRays из refs/priemy/reactbits/LightRays.jsx,
   GLSL перенесён как есть, обвязка на ogl. Рисует в половинном
   разрешении и встаёт на паузу, когда первый экран ушёл из экрана.
   При prefers-reduced-motion модуль не запускается вовсе.
   ============================================================ */
import { Renderer, Program, Mesh, Triangle } from './lib/ogl.mjs';

const box = document.querySelector('[data-fire]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const coarse = window.matchMedia('(pointer: coarse)').matches;

/* Цвета берём из brand.css, сезон меняет огонь сам */
function cssVar(name) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || '#d98436';
}
function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
}

if (box && !reduced.matches) {
  let renderer, mesh, uniforms, frame = 0, visible = false;

  const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

  /* Из React Bits LightRays без изменений в математике, добавлен
     только второй цвет огня: ближе к печи светлее, к краям глуше. */
  const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform vec3  raysColor2;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

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
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  /* Ближе к печи цвет огня, дальше его тёмная глубина */
  float far = clamp(length(coord - rayPos) / (iResolution.x * 0.85), 0.0, 1.0);
  fragColor.rgb = mix(fragColor.rgb * raysColor, fragColor.rgb * raysColor2, far);
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`;

  function build() {
    try {
      renderer = new Renderer({ dpr: 0.5, alpha: true });
    } catch (e) {
      box.remove();
      return false;
    }
    const gl = renderer.gl;
    if (!gl) { box.remove(); return false; }
    box.appendChild(gl.canvas);
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';

    uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      rayPos: { value: [0, 0] },
      rayDir: { value: [0, -1] },
      raysColor: { value: hexToRgb(cssVar('--fire')) },
      raysColor2: { value: hexToRgb(cssVar('--fire-2')) },
      raysSpeed: { value: 0.55 },
      lightSpread: { value: 1.15 },
      rayLength: { value: 1.55 },
      pulsating: { value: 1.0 },
      fadeDistance: { value: 0.9 },
      saturation: { value: 1.05 },
      noiseAmount: { value: 0.28 },
      distortion: { value: 0.6 }
    };

    mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, { vertex: vert, fragment: frag, uniforms })
    });

    /* Лучи идут снизу, из печи у левого края кадра */
    function place() {
      if (!renderer || !box) return;
      const w = box.clientWidth, h = box.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      const rw = w * renderer.dpr, rh = h * renderer.dpr;
      uniforms.iResolution.value = [rw, rh];
      uniforms.rayPos.value = [rw * 0.18, rh * 1.16];
      uniforms.rayDir.value = [0.06, -1];
    }
    place();
    window.addEventListener('resize', place);
    window.addEventListener('orientationchange', place);
    return true;
  }

  /* Сезон меняет палитру: подтягиваем цвет огня */
  const watch = new MutationObserver(() => {
    if (!uniforms) return;
    uniforms.raysColor.value = hexToRgb(cssVar('--fire'));
    uniforms.raysColor2.value = hexToRgb(cssVar('--fire-2'));
  });
  watch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });

  /* Пауза вне экрана и при скрытой вкладке */
  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting && !document.hidden;
  }, { threshold: 0.02 });
  io.observe(box);
  document.addEventListener('visibilitychange', () => {
    visible = visible && !document.hidden;
  });

  const loop = (t) => {
    frame = requestAnimationFrame(loop);
    if (!visible || !renderer || !uniforms) return;
    uniforms.iTime.value = t * 0.001;
    try {
      renderer.render({ scene: mesh });
    } catch (e) {
      cancelAnimationFrame(frame);
      visible = false;
    }
  };

  if (build()) {
    /* На телефоне огонь тише: меньше скорость и ниже разрешение */
    if (coarse) {
      uniforms.raysSpeed.value = 0.4;
      box.style.opacity = '0.8';
    }
    frame = requestAnimationFrame(loop);
  }
}
