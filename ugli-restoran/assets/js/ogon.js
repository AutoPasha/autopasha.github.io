// Живой огонь очага: один фрагментный шейдер на весь экран.
// Приём из 21st «Shader Fire» (id 31148): fbm с двойным искажением, сужение к верху,
// горячее ядро у основания. Свои цвета углей, искры и «фокус» — куда сейчас смотрит огонь.

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_heat;    // жар: 0 — тлеет, 1 — ревёт
uniform float u_height;  // докуда поднимаются языки (доля экрана)
uniform float u_base;    // откуда растёт огонь (доля экрана снизу)
uniform float u_cx;      // центр огня по горизонтали (0..1)
uniform float u_spread;  // ширина огня (доля экрана)
uniform float u_smoke;   // дым вместо пламени
uniform vec2 u_mouse;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  float t = u_time;
  float y = (uv.y - u_base);                     // высота над основанием
  float dx = (uv.x - u_cx) * aspect;             // расстояние от центра в долях высоты
  float sp = max(u_spread * aspect, 0.05);
  float side = exp(-pow(dx / sp, 2.0) * 1.6);    // огонь собран к центру

  // языки: поднимаются и качаются
  vec2 q = vec2(uv.x * aspect * 1.9, y * 1.6 - t * 0.5);
  q.x += sin(y * 7.0 + t * 1.5) * 0.05 * (0.25 + max(y, 0.0));
  vec2 w1 = vec2(fbm(q * 1.7 + vec2(t * 0.28, t * 0.22)), fbm(q * 1.7 + vec2(-t * 0.24, t * 0.31) + 5.2));
  q += (w1 - 0.5) * 0.6;
  vec2 w2 = vec2(fbm(q * 3.4 - vec2(t * 0.5, 0.0)), fbm(q * 3.4 + vec2(0.0, t * 0.44) + 2.7));
  q += (w2 - 0.5) * 0.26;
  float shape = fbm(q * 2.35);
  float detail = fbm(q * 7.0 + vec2(0.0, t * 1.7));
  float flicker = 0.9 + 0.1 * sin(t * 13.0 + uv.x * 9.0 + shape * 6.0);
  float field = (shape * 0.66 + detail * 0.34) * flicker;

  float climb = max(u_height, 0.04);
  float yy = max(y, 0.0);
  float taper = pow(clamp(1.0 - yy / climb, 0.0, 1.0), 1.3);
  float core = pow(clamp(1.0 - yy / (climb * 0.4), 0.0, 1.0), 2.0);
  field = field * taper + core * shape * 0.4;
  field *= side;
  field *= smoothstep(-0.04, 0.02, y);           // ниже основания — только угли

  // отклик на курсор: огонь тянется к руке
  float md = length((uv - u_mouse) * vec2(aspect, 1.0));
  field += exp(-md * 7.0) * 0.22 * (0.5 + 0.5 * shape) * step(0.0, y) * taper;

  field = smoothstep(0.2, 0.76, field) * mix(0.35, 1.2, u_heat);

  // постель углей у основания: тлеющие трещины
  float bed = exp(-pow(y / 0.035, 2.0)) * side;
  float cracks = smoothstep(0.55, 0.85, fbm(vec2(uv.x * aspect * 14.0, uv.y * 6.0) + t * 0.05));
  float embers = bed * (0.25 + cracks * (0.6 + 0.4 * sin(t * 2.0 + uv.x * 40.0)));

  // искры: летят вверх и гаснут
  float sparks = 0.0;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    vec2 g = vec2(uv.x * aspect * (16.0 + fk * 9.0), y * (9.0 + fk * 5.0) - t * (1.4 + fk * 0.5));
    g.x += sin(g.y * 0.7 + fk * 3.0 + t) * 0.35;
    vec2 id = floor(g), f = fract(g) - 0.5;
    float h = hash(id + fk * 17.0);
    vec2 off = vec2(hash(id + 3.1) - 0.5, hash(id + 7.7) - 0.5) * 0.6;
    float d = length(f - off);
    float life = clamp(1.0 - yy / (climb * 1.5), 0.0, 1.0);
    sparks += smoothstep(0.08 - fk * 0.015, 0.0, d) * step(0.92, h) * life * side * step(0.0, y);
  }
  sparks *= mix(0.4, 1.0, u_heat) * (1.0 - u_smoke);

  // цвета углей
  vec3 ash = vec3(0.043, 0.047, 0.051);
  vec3 deep = vec3(0.36, 0.06, 0.02);
  vec3 ember = vec3(0.95, 0.30, 0.07);
  vec3 flame = vec3(1.0, 0.62, 0.22);
  vec3 white = vec3(1.0, 0.9, 0.7);
  vec3 col = ash;
  vec3 tint = mix(deep, ember, smoothstep(0.05, 0.45, field));
  tint = mix(tint, flame, smoothstep(0.45, 0.8, field));
  tint = mix(tint, white, pow(smoothstep(0.78, 1.05, field), 1.6));
  col = mix(col, tint, clamp(field * 1.1, 0.0, 1.0));

  // дым: серая пелена вместо языков
  float smoke = fbm(vec2(uv.x * aspect * 2.2, y * 1.4 - t * 0.12) + w1) * taper * side;
  col = mix(col, vec3(0.32, 0.31, 0.3), smoothstep(0.25, 0.8, smoke) * u_smoke * 0.55);
  col = mix(col, ember * 1.1, clamp(embers, 0.0, 1.0));
  col += flame * sparks * 1.4;
  // тёплый отсвет на воздухе над огнём
  col += vec3(0.09, 0.025, 0.0) * side * exp(-yy / max(climb * 0.9, 0.05)) * u_heat * step(0.0, y);

  col += (hash(gl_FragCoord.xy + fract(t)) - 0.5) * 0.012;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export function createOgon(canvas) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true, powerPreference: 'low-power' });
  if (!gl) throw new Error('нет webgl');
  const sh = (type, src) => {
    const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(pr));
  gl.useProgram(pr);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = {};
  for (const n of ['res', 'time', 'heat', 'height', 'base', 'cx', 'spread', 'smoke', 'mouse']) U[n] = gl.getUniformLocation(pr, 'u_' + n);

  // текущее и целевое состояние огня: сцены задают цель, огонь догоняет плавно
  const cur = { heat: 0.6, height: 0.5, base: 0, cx: 0.5, spread: 0.6, smoke: 0 };
  const goal = { ...cur };
  const mouse = { x: -2, y: -2, tx: -2, ty: -2 };
  let scale = 0.5, running = true, t0 = performance.now(), last = t0, raf = 0, still = false;

  function size() {
    // внутреннее разрешение вдвое ниже экрана: огонь мягкий, а кадр дешёвый
    const w = innerWidth, h = innerHeight;
    scale = w > 1100 ? 0.42 : 0.5;
    canvas.width = Math.max(2, Math.round(w * scale));
    canvas.height = Math.max(2, Math.round(h * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  size();
  addEventListener('resize', size);
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    mouse.tx = e.clientX / innerWidth; mouse.ty = 1 - e.clientY / innerHeight;
  }, { passive: true });

  function frame(now) {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    const k = 1 - Math.exp(-dt * 2.4);
    for (const n in cur) cur[n] += (goal[n] - cur[n]) * k;
    mouse.x += (mouse.tx - mouse.x) * (1 - Math.exp(-dt * 5)); mouse.y += (mouse.ty - mouse.y) * (1 - Math.exp(-dt * 5));
    gl.uniform2f(U.res, canvas.width, canvas.height);
    gl.uniform1f(U.time, still ? 12.0 : (now - t0) / 1000);
    gl.uniform1f(U.heat, cur.heat); gl.uniform1f(U.height, cur.height); gl.uniform1f(U.base, cur.base);
    gl.uniform1f(U.cx, cur.cx); gl.uniform1f(U.spread, cur.spread); gl.uniform1f(U.smoke, cur.smoke);
    gl.uniform2f(U.mouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = running ? requestAnimationFrame(frame) : 0;
  }
  raf = requestAnimationFrame(frame);

  return {
    set(o, now = false) { Object.assign(goal, o); if (now) Object.assign(cur, o); },
    run(on) {
      if (on === running) return;
      running = on;
      if (on) { last = performance.now(); raf = requestAnimationFrame(frame); } else if (raf) { cancelAnimationFrame(raf); raf = 0; }
    },
    still(on) { still = on; },
  };
}
