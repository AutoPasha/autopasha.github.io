// Кинескоп: выпуклое стекло поверх экрана модели. Показывает настроечную
// таблицу, живой канал (сцена в текстуре), помехи и экранные надписи.
import * as THREE from 'three';

const vert = /* glsl */`
  uniform float uBulge;
  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vUv = uv;
    vec3 p = position;
    vec2 q = uv * 2.0 - 1.0;
    p.z += uBulge * (1.0 - 0.35 * (q.x * q.x + q.y * q.y));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = normalize(-mv.xyz);
    vN = normalize(normalMatrix * vec3(-q.x * uBulge * 1.4, -q.y * uBulge * 1.4, 1.0));
    gl_Position = projectionMatrix * mv;
  }
`;

const frag = /* glsl */`
  uniform sampler2D uTest;
  uniform sampler2D uChan;
  uniform sampler2D uOsd;
  uniform float uMix;      // 0 — таблица, 1 — канал
  uniform float uStatic;   // помехи 0..1
  uniform float uPower;    // 0 — выключен, 1 — горит
  uniform float uTime;
  uniform float uBright;
  uniform float uOsdA;
  uniform vec2 uAspect;    // ширина/высота экрана
  uniform float uRadius;
  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vView;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float rbox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }

  void main() {
    vec2 uv = vUv;
    // лёгкая бочка, как у трубки
    vec2 c = uv - 0.5;
    float r2 = dot(c, c);
    uv = 0.5 + c * (1.0 + 0.08 * r2);
    // срыв строк при переключении
    float roll = uStatic * (hash(vec2(floor(uv.y * 60.0), floor(uTime * 30.0))) - 0.5) * 0.08;
    uv.x += roll;
    vec3 test = texture2D(uTest, uv).rgb;
    vec3 chan = texture2D(uChan, uv).rgb;
    vec3 col = mix(test, chan, uMix);
    // помехи
    float n = hash(floor(uv * vec2(320.0, 240.0)) + floor(uTime * 40.0));
    col = mix(col, vec3(n * 0.9 + 0.05), clamp(uStatic, 0.0, 1.0));
    // экранные надписи
    vec4 osd = texture2D(uOsd, uv);
    col = mix(col, osd.rgb, osd.a * uOsdA);
    // строки развёртки и маска
    float scan = 0.82 + 0.18 * sin(uv.y * 240.0 * 3.14159);
    col *= scan;
    float mask = 0.9 + 0.1 * sin(gl_FragCoord.x * 2.1);
    col *= mask;
    // включение: светлая полоса раскрывается от середины
    float p = smoothstep(0.0, 1.0, uPower);
    float band = smoothstep(0.5 * p + 0.002, 0.5 * p - 0.01, abs(vUv.y - 0.5)) * smoothstep(0.5 * min(1.0, p * 3.0) + 0.002, 0.5 * min(1.0, p * 3.0) - 0.01, abs(vUv.x - 0.5));
    col *= band;
    col += vec3(1.0) * (1.0 - smoothstep(0.0, 0.25, p)) * smoothstep(0.02, 0.0, abs(vUv.y - 0.5)) * step(0.001, uPower);
    // края трубки темнее
    float vig = smoothstep(0.75, 0.2, length(c * vec2(1.0, 0.9)));
    col *= mix(0.55, 1.0, vig);
    col *= uBright;
    // блик стекла
    float fres = pow(1.0 - max(dot(normalize(vN), normalize(vView)), 0.0), 3.0);
    col += vec3(0.9, 0.95, 1.0) * fres * 0.25;
    float glare = smoothstep(0.35, 0.0, length((vUv - vec2(0.28, 0.78)) * vec2(1.0, 1.6)));
    col += vec3(1.0) * glare * 0.05;
    // скруглённые углы
    vec2 q = (vUv - 0.5) * uAspect;
    float d = rbox(q, uAspect * 0.5, uRadius);
    float a = 1.0 - smoothstep(-0.004, 0.002, d);
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }
`;

export function makeScreen({ width, height, bulge = 0.02, test, chan, osd }) {
  const geo = new THREE.PlaneGeometry(width, height, 32, 24);
  const mat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    transparent: true,
    uniforms: {
      uTest: { value: test },
      uChan: { value: chan },
      uOsd: { value: osd },
      uMix: { value: 0 },
      uStatic: { value: 0 },
      uPower: { value: 1 },
      uTime: { value: 0 },
      uBright: { value: 1.6 },
      uOsdA: { value: 0 },
      uAspect: { value: new THREE.Vector2(width / height, 1) },
      uRadius: { value: 0.09 },
      uBulge: { value: bulge },
    },
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 2;
  return mesh;
}

// Экранные надписи: номер канала зелёным, как у видеомагнитофона.
export function makeOsd(w = 1024, h = 768) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  function draw(num, label) {
    ctx.clearRect(0, 0, w, h);
    ctx.font = `${Math.round(h * 0.09)}px "Bedstead", monospace`;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'right';
    ctx.shadowColor = 'rgba(80,255,120,.9)';
    ctx.shadowBlur = h * 0.02;
    ctx.fillStyle = '#7dff8a';
    ctx.fillText(String(num).padStart(2, '0'), w * 0.9, h * 0.09);
    ctx.textAlign = 'left';
    ctx.font = `${Math.round(h * 0.055)}px "Bedstead", monospace`;
    ctx.fillText(label, w * 0.1, h * 0.84);
    tex.needsUpdate = true;
  }
  return { canvas: c, tex, draw };
}
