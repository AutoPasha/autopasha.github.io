// Прядь волос в браузере: тысячи тонких волосков с бликом по модели
// Каджия–Кея. Цвет корней и концов, мягкий переход (балаяж) и смена
// оттенка волной от корней к концам.
import * as THREE from 'three';

export const OTTENKI = {
  pesok:   { name: 'Песочный блонд', root: '#b08a5c', tip: '#e6cfa2' },
  karamel: { name: 'Карамель',       root: '#5a3a22', tip: '#c08a52' },
  kashtan: { name: 'Каштан',         root: '#2e1a10', tip: '#6b3f25' },
  med:     { name: 'Медь',           root: '#5a2210', tip: '#c8622e' },
  pepel:   { name: 'Пепельный',      root: '#4a4644', tip: '#c9c4bd' },
};

export function createPryad(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const bg = new THREE.Color('#f3efe9');
  scene.background = bg;
  const camera = new THREE.PerspectiveCamera(28, 1, 0.05, 20);

  // ---------- волоски ----------
  const N = soft ? 2600 : (phone ? 4200 : 7000), SEG = 36;
  const pos = new Float32Array(N * SEG * 2 * 3);
  const tArr = new Float32Array(N * SEG * 2);
  const tan = new Float32Array(N * SEG * 2 * 3);
  const rnd = new Float32Array(N * SEG * 2);
  const rand = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  // Форма пряди: волоски собраны в пучки, пучки идут общей S-волной и
  // расходятся к концам, у кончиков пучок сужается — так прядь не похожа на конус
  const CL = 70;
  const clumps = Array.from({ length: CL }, () => ({ a: rand() * Math.PI * 2, r: Math.sqrt(rand()), ph: rand() * 6.28, w: 0.6 + rand() * 0.8 }));
  const pt = (u, c, ox, oz, out) => {
    const spread = 0.05 + 0.2 * Math.pow(u, 1.1);
    const s = Math.sin(u * 2.9 + 0.5) * 0.2 * Math.pow(u, 0.85) - 0.06 * u;
    const wave = Math.sin(u * 6.5 + c.ph) * 0.03 * u * c.w;
    const tight = 1 - 0.55 * u;
    out.set(s + Math.cos(c.a) * c.r * spread + wave + ox * tight,
            0.72 - u * 1.42,
            Math.sin(c.a) * c.r * spread * 0.6 + Math.cos(u * 4 + c.ph) * 0.025 * u + oz * tight);
    return out;
  };
  const p0 = new THREE.Vector3(), p1 = new THREE.Vector3(), d = new THREE.Vector3();
  let k = 0;
  for (let i = 0; i < N; i++) {
    const c = clumps[i % CL], oa = rand() * 6.28, orr = Math.sqrt(rand()) * 0.022;
    const ox = Math.cos(oa) * orr, oz = Math.sin(oa) * orr, len = 0.84 + rand() * 0.16, sr = rand();
    for (let j = 0; j < SEG; j++) {
      const u0 = j / SEG * len, u1 = (j + 1) / SEG * len;
      pt(u0, c, ox, oz, p0); pt(u1, c, ox, oz, p1);
      d.subVectors(p1, p0).normalize();
      for (const [p, u] of [[p0, u0], [p1, u1]]) {
        pos.set([p.x, p.y, p.z], k * 3); tan.set([d.x, d.y, d.z], k * 3);
        tArr[k] = u; rnd[k] = sr; k++;
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.BufferAttribute(tArr, 1));
  g.setAttribute('aTan', new THREE.BufferAttribute(tan, 3));
  g.setAttribute('aR', new THREE.BufferAttribute(rnd, 1));
  const U = {
    uRootA: { value: new THREE.Color() }, uTipA: { value: new THREE.Color() },
    uRootB: { value: new THREE.Color() }, uTipB: { value: new THREE.Color() },
    uSweep: { value: -1 }, uBlend: { value: 0.55 }, uSoft: { value: 0.35 },
    uLight: { value: new THREE.Vector3(-0.4, 0.8, 0.6).normalize() },
    uSway: { value: 0 }, uAlpha: { value: 0.55 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false,
    vertexShader: `
      attribute float aT; attribute vec3 aTan; attribute float aR;
      uniform float uSway;
      varying float vT; varying vec3 vTan; varying float vR; varying vec3 vView;
      void main() {
        vec3 p = position;
        p.x += uSway * aT * aT * (0.6 + 0.4 * aR) * 0.18;
        p.z += uSway * aT * aT * 0.05 * (aR - 0.5);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vT = aT; vR = aR; vTan = normalize(mat3(modelMatrix) * aTan);
        vView = normalize(cameraPosition - (modelMatrix * vec4(p, 1.0)).xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform vec3 uRootA, uTipA, uRootB, uTipB, uLight;
      uniform float uSweep, uBlend, uSoft, uAlpha;
      varying float vT; varying vec3 vTan; varying float vR; varying vec3 vView;
      vec3 shade(vec3 root, vec3 tip) {
        float m = smoothstep(uBlend - uSoft, uBlend + uSoft, vT + (vR - 0.5) * 0.12);
        return mix(root, tip, m) * (0.82 + 0.36 * vR);
      }
      void main() {
        vec3 cA = shade(uRootA, uTipA), cB = shade(uRootB, uTipB);
        float k = 1.0 - smoothstep(uSweep - 0.05, uSweep + 0.05, vT);
        vec3 base = mix(cA, cB, k);
        vec3 T = normalize(vTan), L = normalize(uLight), V = normalize(vView);
        float TL = dot(T, L), TV = dot(T, V);
        float diff = sqrt(max(0.0, 1.0 - TL * TL));
        vec3 H = normalize(L + V);
        float TH = dot(T, H);
        float spec1 = pow(sqrt(max(0.0, 1.0 - TH * TH)), 90.0);
        float spec2 = pow(sqrt(max(0.0, 1.0 - (TH + 0.08) * (TH + 0.08))), 24.0);
        vec3 col = base * (0.35 + 0.75 * diff) + vec3(1.0, 0.96, 0.9) * spec1 * 0.55 + base * spec2 * 0.5;
        float edge = exp(-pow((vT - uSweep) / 0.025, 2.0)) * step(-0.5, uSweep);
        col += edge * 0.25;
        float a = uAlpha * (1.0 - smoothstep(0.8, 1.0, vT)) * smoothstep(0.0, 0.06, vT);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }`,
  });
  const lock = new THREE.LineSegments(g, mat);
  scene.add(lock);

  let cur = 'karamel';
  const setA = (id) => { U.uRootA.value.set(OTTENKI[id].root); U.uTipA.value.set(OTTENKI[id].tip); };
  setA(cur);
  const st = { rot: 0, rect: [0.1, 0.1, 0.9, 0.95], bg: '#f3efe9', sway: 0, blend: 0.55, soft: 0.35 };

  let W = 1, H = 1;
  function resize() { const r = canvas.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); renderer.setSize(W, H, false); }
  addEventListener('resize', resize); resize();
  // вписать прядь (0.36 × 1.3) в прямоугольник экрана
  function fit() {
    const [x0, y0, x1, y1] = st.rect;
    camera.aspect = W / H; camera.clearViewOffset();
    const hh = 0.8, hw = 0.38;
    const tv = Math.tan(camera.fov * Math.PI / 360);
    const dV = hh / ((y1 - y0) * tv), dH = hw / ((x1 - x0) * tv * camera.aspect);
    const dist = Math.max(dV, dH);
    camera.position.set(0, -0.02, dist); camera.lookAt(0, -0.02, 0);
    camera.updateProjectionMatrix();
    camera.setViewOffset(W, H, -((x0 + x1) / 2 - 0.5) * W, -((y0 + y1) / 2 - 0.5) * H, W, H);
    camera.updateProjectionMatrix();
  }
  function render() {
    bg.set(st.bg); lock.rotation.y = st.rot; U.uSway.value = st.sway;
    U.uBlend.value = st.blend; U.uSoft.value = st.soft;
    fit(); renderer.render(scene, camera);
  }
  let tw = null;
  function setTon(id, { instant = false } = {}) {
    if (id === cur && !instant) return Promise.resolve();
    if (tw) tw.kill();
    U.uRootB.value.set(OTTENKI[id].root); U.uTipB.value.set(OTTENKI[id].tip);
    if (instant || !window.gsap) { setA(id); cur = id; U.uSweep.value = -1; return Promise.resolve(); }
    const o = { s: -0.05 };
    return new Promise(res => {
      tw = gsap.to(o, { s: 1.05, duration: 1.3, ease: 'power2.inOut', onUpdate: () => { U.uSweep.value = o.s; },
        onComplete: () => { setA(id); cur = id; U.uSweep.value = -1; res(); } });
    });
  }
  return { st, render, resize, setTon, get ton() { return cur; } };
}
