// Каркас цеха в браузере: колонны из двутавра, фермы из профильной трубы,
// прогоны, ригели и связи. Собирается по параметру build (0 — пустая площадка,
// 1 — каркас целиком): детали опускаются краном по порядку, узлы ферм при
// установке загораются сварочным светом и остывают, летят искры. Пол — чертёжная
// сетка по осям колонн, по линиям которой бежит свет. Камера сама вписывает
// каркас в заданный прямоугольник экрана (тот же приём, что у стола «Кромки»).
import * as THREE from 'three';

const DEG = Math.PI / 180;
const BAY = 6;   // шаг рам, м

export function createKarkas(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.75 : 2));
  // Программный рендер (безголовый браузер, ноутбук без видеокарты): без ретины и тень проще
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = soft ? THREE.PCFShadowMap : THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  const bg = new THREE.Color(0xe6e9e8);
  scene.background = bg;
  const pmrem = new THREE.PMREMGenerator(renderer);
  // Студия для стали: тёмная комната и софтбоксы, на гранях профиля ложатся чистые блики
  scene.environment = (() => {
    const sc = new THREE.Scene(); sc.background = new THREE.Color(0x0b0c0d);
    const box = (w, h, x, y, z, k) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(k, k, k), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); sc.add(m);
    };
    box(9, 2.4, 0, 6.5, 1, 3.4);     // длинный сверху
    box(1.6, 7, -6.5, 0.8, 3, 2.4);  // полоса слева спереди
    box(1.6, 7, 6.5, 0.8, -2, 2.0);  // полоса справа сзади
    box(10, 5, 2.5, 2.0, 7, 1.6);    // большой спереди
    box(7, 1.4, 0, -5, 3, 0.5);      // отражение пола
    return pmrem.fromScene(sc, 0.02).texture;
  })();
  scene.environmentIntensity = 1.25;

  const camera = new THREE.PerspectiveCamera(24, 1, 0.5, 3000);

  const key = new THREE.DirectionalLight(0xfffaf2, 2.2);
  key.castShadow = true;
  key.shadow.mapSize.set(soft ? 1024 : 2048, soft ? 1024 : 2048);
  key.shadow.radius = soft ? 2 : 6;
  key.shadow.blurSamples = soft ? 4 : 12;
  key.shadow.bias = -0.0006;
  scene.add(key); scene.add(key.target);
  const rim = new THREE.DirectionalLight(0xdfe8ff, 1.1);
  scene.add(rim);

  // ---------- пол: тень и чертёжная сетка с бегущим светом ----------
  const floorMat = new THREE.ShadowMaterial({ opacity: 0.16 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
  scene.add(floor);

  const gridU = {
    uTime: { value: 0 }, uOff: { value: new THREE.Vector2() }, uCell: { value: BAY },
    uLine: { value: new THREE.Color(0x101418) }, uLineA: { value: 0.16 },
    uBeam: { value: new THREE.Color(0xffb04a) }, uBeamA: { value: 0 },
    uR: { value: 90 }, uC: { value: new THREE.Vector2() },
  };
  const grid = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), new THREE.ShaderMaterial({
    uniforms: gridU, transparent: true, depthWrite: false,
    vertexShader: `varying vec2 vP; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vP = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      varying vec2 vP;
      uniform float uTime, uCell, uLineA, uBeamA, uR;
      uniform vec2 uOff, uC;
      uniform vec3 uLine, uBeam;
      float h1(float n){ return fract(sin(n * 91.7) * 43758.5); }
      float line(float c, float w){ float d = abs(fract(c - 0.5) - 0.5) / fwidth(c); return 1.0 - min(d / w, 1.0); }
      void main(){
        vec2 c = (vP - uOff) / uCell;
        float major = max(line(c.x, 1.1), line(c.y, 1.1));
        float minor = max(line(c.x * 4.0, 0.7), line(c.y * 4.0, 0.7)) * 0.35;
        float fade = 1.0 - smoothstep(uR * 0.35, uR, length(vP - uC));
        float a = max(major, minor) * uLineA * fade;
        // свет по линиям: у каждой линии свой шаг и своя фаза, как у сетки Grid Beam
        float iz = floor(c.y + 0.5), ix = floor(c.x + 0.5);
        float sz = 0.06 + 0.05 * h1(iz), sx = 0.05 + 0.05 * h1(ix + 17.0);
        float bx = (fract(uTime * sz + h1(iz + 3.0)) * 2.0 - 1.0) * uR;
        float bz = (fract(uTime * sx + h1(ix + 9.0)) * 2.0 - 1.0) * uR;
        float onZ = line(c.y, 1.6) * step(0.55, h1(iz + 41.0));
        float onX = line(c.x, 1.6) * step(0.6, h1(ix + 77.0));
        float b = onZ * exp(-pow((vP.x - uC.x - bx) / 5.0, 2.0)) + onX * exp(-pow((vP.y - uC.y - bz) / 5.0, 2.0));
        b *= fade * uBeamA;
        vec3 col = mix(uLine, uBeam, clamp(b * 1.4, 0.0, 1.0));
        gl_FragColor = vec4(col, clamp(a + b, 0.0, 1.0));
        #include <colorspace_fragment>
      }`,
  }));
  grid.rotation.x = -Math.PI / 2; grid.position.y = 0.01; grid.renderOrder = 1;
  scene.add(grid);

  // ---------- материалы ----------
  const steel = (c) => new THREE.MeshStandardMaterial({ color: c, metalness: 0.32, roughness: 0.36 });
  const M = {
    column: steel(0x56626b), chord: steel(0x6f7c86), web: steel(0x7d8a93),
    purlin: steel(0x8d99a2), girt: steel(0x8d99a2), brace: steel(0x4a545b),
    plate: steel(0x3f474d),
    plinth: new THREE.MeshStandardMaterial({ color: 0xa9adaa, roughness: 0.9, metalness: 0 }),
  };
  const BASE = Object.fromEntries(Object.entries(M).map(([k, m]) => [k, m.color.clone()]));
  const SIGNAL = new THREE.Color(0xf2b300);

  // ---------- единичные заготовки ----------
  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  // двутавр: стенка вдоль Z (в плоскости рамы), полки вдоль X; высота 1, низ на нуле
  const iGeo = (() => {
    const h = 0.4, b = 0.3, tf = 0.022, tw = 0.013;
    const s = new THREE.Shape();
    s.moveTo(-b / 2, -h / 2); s.lineTo(b / 2, -h / 2); s.lineTo(b / 2, -h / 2 + tf); s.lineTo(tw / 2, -h / 2 + tf);
    s.lineTo(tw / 2, h / 2 - tf); s.lineTo(b / 2, h / 2 - tf); s.lineTo(b / 2, h / 2); s.lineTo(-b / 2, h / 2);
    s.lineTo(-b / 2, h / 2 - tf); s.lineTo(-tw / 2, h / 2 - tf); s.lineTo(-tw / 2, -h / 2 + tf); s.lineTo(-b / 2, -h / 2 + tf);
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);   // выдавливание вверх по Y; профиль: X — полки, Z — стенка
    return g;
  })();

  const MAXN = { plinth: 40, plate: 40, column: 40, chord: 900, web: 1100, purlin: 420, girt: 120, brace: 160 };
  const meshes = {};
  for (const [k, n] of Object.entries(MAXN)) {
    const m = new THREE.InstancedMesh(k === 'column' ? iGeo : unitBox, M[k], n);
    m.castShadow = k !== 'plinth'; m.receiveShadow = true;
    m.count = 0; m.frustumCulled = false;
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(m); meshes[k] = m;
  }

  // ---------- сварка: узлы и искры ----------
  const WMAX = 700;
  const wPos = new Float32Array(WMAX * 3), wHeat = new Float32Array(WMAX);
  const wGeo = new THREE.BufferGeometry();
  wGeo.setAttribute('position', new THREE.BufferAttribute(wPos, 3));
  wGeo.setAttribute('heat', new THREE.BufferAttribute(wHeat, 1));
  const glowU = { uScale: { value: 800 }, uSize: { value: 1.1 }, uDark: { value: 0 } };
  const weldMat = new THREE.ShaderMaterial({
    uniforms: glowU, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float heat; varying float vH; uniform float uScale, uSize;
      void main(){ vH = heat; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = heat > 0.002 ? max(2.0, uSize * (0.35 + heat) * uScale / -mv.z) : 0.0; }`,
    fragmentShader: `varying float vH; uniform float uDark;
      void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d) * 2.0; if (r > 1.0) discard;
        float core = exp(-r * r * 18.0), halo = exp(-r * r * 4.0) * 0.55;
        vec3 hot = mix(vec3(0.95, 0.22, 0.04), vec3(1.0, 0.86, 0.55), smoothstep(0.35, 0.95, vH));
        vec3 c = hot * (core * 1.6 + halo) * vH + vec3(1.0) * core * smoothstep(0.7, 1.0, vH);
        float a = clamp((core + halo) * vH, 0.0, 1.0);
        // на светлом фоне сложение света не видно: там рисуем тёплое пятно обычным смешением
        gl_FragColor = uDark > 0.5 ? vec4(c, 1.0) : vec4(mix(vec3(0.85, 0.3, 0.05), vec3(1.0, 0.62, 0.2), core), a * 0.9);
        #include <colorspace_fragment>
      }`,
  });
  const welds = new THREE.Points(wGeo, weldMat);
  welds.frustumCulled = false; welds.renderOrder = 5;
  scene.add(welds);

  const SMAX = soft ? 160 : 420;
  const sPos = new Float32Array(SMAX * 3), sHeat = new Float32Array(SMAX), sVel = new Float32Array(SMAX * 3), sLife = new Float32Array(SMAX);
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute('heat', new THREE.BufferAttribute(sHeat, 1));
  const sparkMat = weldMat.clone();
  sparkMat.uniforms = { uScale: glowU.uScale, uSize: { value: 0.16 }, uDark: glowU.uDark };
  const sparks = new THREE.Points(sGeo, sparkMat);
  sparks.frustumCulled = false; sparks.renderOrder = 6;
  scene.add(sparks);
  let sNext = 0, sAlive = 0;
  function burst(x, y, z, n) {
    for (let k = 0; k < n; k++) {
      const i = sNext; sNext = (sNext + 1) % SMAX;
      sPos[i * 3] = x; sPos[i * 3 + 1] = y; sPos[i * 3 + 2] = z;
      const a = Math.random() * Math.PI * 2, up = Math.random();
      const v = 2.5 + Math.random() * 5.5;
      sVel[i * 3] = Math.cos(a) * v * 0.6; sVel[i * 3 + 1] = (0.2 + up) * v; sVel[i * 3 + 2] = Math.sin(a) * v * 0.6;
      sLife[i] = 0.5 + Math.random() * 0.8; sHeat[i] = 1;
    }
    sAlive = 1.4;
  }
  function stepSparks(dt) {
    if (sAlive <= 0) return false;
    sAlive -= dt;
    for (let i = 0; i < SMAX; i++) {
      if (sLife[i] <= 0) { sHeat[i] = 0; continue; }
      sLife[i] -= dt;
      sVel[i * 3 + 1] -= 9.8 * dt;
      sPos[i * 3] += sVel[i * 3] * dt; sPos[i * 3 + 1] += sVel[i * 3 + 1] * dt; sPos[i * 3 + 2] += sVel[i * 3 + 2] * dt;
      if (sPos[i * 3 + 1] < 0.02) { sPos[i * 3 + 1] = 0.02; sVel[i * 3 + 1] *= -0.3; sVel[i * 3] *= 0.6; sVel[i * 3 + 2] *= 0.6; }
      sHeat[i] = Math.max(0, Math.min(1, sLife[i] * 1.4));
    }
    sGeo.attributes.position.needsUpdate = true; sGeo.attributes.heat.needsUpdate = true;
    return true;
  }

  // ---------- модель ----------
  const S = { span: 24, height: 8.4, length: 30 };
  let parts = [], nodes = [], info = {};
  const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), xa = new THREE.Vector3(), ya = new THREE.Vector3(), za = new THREE.Vector3();
  const mtx = new THREE.Matrix4(), sc = new THREE.Vector3(), q = new THREE.Quaternion(), pos = new THREE.Vector3();

  function geom() {
    const span = S.span, H = S.height, L = S.length;
    const n = Math.max(1, Math.round(L / BAY));
    let np = Math.max(4, Math.round(span / 3)); if (np % 2) np++;
    const d0 = 1.5 + span * 0.02, slope = 0.1;
    const xs = Array.from({ length: n + 1 }, (_, i) => -L / 2 + i * BAY);
    const zs = Array.from({ length: np + 1 }, (_, j) => -span / 2 + j * span / np);
    const yt = (z) => H + d0 + (span / 2 - Math.abs(z)) * slope;
    return { span, H, L, n, np, d0, slope, xs, zs, yt, ridge: H + d0 + span / 2 * slope };
  }

  function build() {
    const g = geom();
    const { span, H, n, np, xs, zs, yt } = g;
    parts = []; nodes = [];
    const T = { plinth: [0, 0.05], column: [0.03, 0.26], truss: [0.24, 0.64], purlin: [0.6, 0.86], girt: [0.66, 0.9], brace: [0.82, 0.97] };
    const add = (type, a, b, h, w, t0, dur, drop = 7) => parts.push({ type, a: a.slice(), b: b ? b.slice() : null, h, w, t0, dur, drop });
    const win = (ph, i, cnt, len = 1.6) => { const [s, e] = T[ph]; const step = (e - s) / (cnt + len - 1); return [s + i * step, step * len]; };
    // фундаменты, опорные плиты и колонны — рама за рамой
    xs.forEach((x, i) => {
      for (const z of [-span / 2, span / 2]) {
        const [tp, dp] = win('plinth', i, n + 1);
        add('plinth', [x, -0.25, z], null, 0.6, 1.0, tp, dp, 0);
        add('plate', [x, 0.33, z], null, 0.04, 0.62, tp + dp * 0.5, dp, 1.5);
        const [tc, dc] = win('column', i, n + 1, 2.2);
        add('column', [x, 0.35, z], [x, H, z], 0, 0, tc + (z > 0 ? dc * 0.15 : 0), dc * 0.8, 9);
      }
    });
    // фермы: нижний пояс, стойки, раскосы, верхний пояс; узлы — сварка
    const per = np * 2 + (np + 1) + np;
    xs.forEach((x, i) => {
      const [tt, dt] = win('truss', i, n + 1, 1.8);
      let k = 0;
      const at = () => tt + (k++ / per) * dt * 0.85;
      const md = dt * 0.18;
      for (let j = 0; j < np; j++) add('chord', [x, H, zs[j]], [x, H, zs[j + 1]], 0.16, 0.16, at(), md, 5);
      for (let j = 0; j <= np; j++) add('web', [x, H, zs[j]], [x, yt(zs[j]), zs[j]], 0.1, 0.1, at(), md, 5);
      for (let j = 0; j < np; j++) {
        const left = zs[j] + zs[j + 1] < 0;
        const a = left ? [x, yt(zs[j]), zs[j]] : [x, H, zs[j]];
        const b = left ? [x, H, zs[j + 1]] : [x, yt(zs[j + 1]), zs[j + 1]];
        add('web', a, b, 0.09, 0.09, at(), md, 5);
      }
      for (let j = 0; j < np; j++) add('chord', [x, yt(zs[j]), zs[j]], [x, yt(zs[j + 1]), zs[j + 1]], 0.16, 0.16, at(), md, 5);
      // узлы: верхний и нижний пояс в каждой панели; загораются, когда легли все детали узла
      for (let j = 0; j <= np; j++) {
        const tw = tt + dt * 0.85 * (0.25 + 0.75 * j / np);
        nodes.push({ p: [x, H, zs[j]], t: tw }, { p: [x, yt(zs[j]), zs[j]], t: tw + dt * 0.08 });
      }
    });
    // прогоны по верхним поясам, пролёт за пролётом
    for (let i = 0; i < n; i++) {
      const [tp, dp] = win('purlin', i, n, 2);
      zs.forEach((z, j) => add('purlin', [xs[i], yt(z) + 0.2, z], [xs[i + 1], yt(z) + 0.2, z], 0.2, 0.08, tp + dp * 0.6 * j / np, dp * 0.4, 3));
    }
    // ригели стен на двух уровнях
    for (let i = 0; i < n; i++) {
      const [tg, dg] = win('girt', i, n, 2);
      for (const z of [-span / 2, span / 2]) for (const f of [0.36, 0.7]) {
        const y = H * f, zz = z + Math.sign(z) * 0.28;
        add('girt', [xs[i], y, zz], [xs[i + 1], y, zz], 0.16, 0.07, tg + (f > 0.5 ? dg * 0.3 : 0), dg * 0.6, 3);
      }
    }
    // связи крестом в крайних пролётах: по стенам и по кровле
    const ends = n >= 3 ? [0, n - 1] : [0];
    ends.forEach((i, e) => {
      const [tb, db] = win('brace', e, ends.length, 1.4);
      for (const z of [-span / 2, span / 2]) {
        const zz = z + Math.sign(z) * 0.22;
        add('brace', [xs[i], 0.4, zz], [xs[i + 1], H - 0.2, zz], 0.05, 0.05, tb, db * 0.5, 2);
        add('brace', [xs[i + 1], 0.4, zz], [xs[i], H - 0.2, zz], 0.05, 0.05, tb + db * 0.1, db * 0.5, 2);
      }
      for (let j = 0; j < np; j += 2) {
        const za0 = zs[j], zb = zs[Math.min(np, j + 2)];
        add('brace', [xs[i], yt(za0) + 0.05, za0], [xs[i + 1], yt(zb) + 0.05, zb], 0.05, 0.05, tb + db * 0.3, db * 0.5, 2);
        add('brace', [xs[i + 1], yt(za0) + 0.05, za0], [xs[i], yt(zb) + 0.05, zb], 0.05, 0.05, tb + db * 0.35, db * 0.5, 2);
      }
    });
    // сводка: штуки, швы и масса по длинам деталей
    const kgm = { column: 40 + span * 1.4 + H * 2.5, chord: 18 + span * 0.6, web: 8 + span * 0.18, purlin: 16, girt: 14, brace: 6 };
    let kg = 0, cnt = {};
    for (const p of parts) {
      cnt[p.type] = (cnt[p.type] || 0) + 1;
      if (!p.b || !kgm[p.type]) continue;
      kg += Math.hypot(p.b[0] - p.a[0], p.b[1] - p.a[1], p.b[2] - p.a[2]) * kgm[p.type];
    }
    const trussMembers = (cnt.chord + cnt.web);
    info = {
      columns: cnt.column, trusses: n + 1, members: parts.filter(p => p.type !== 'plinth').length,
      seams: trussMembers * 2, nodes: nodes.length, tons: kg * 1.12 / 1000,
      area: span * S.length, n, np,
    };
    for (const k of Object.keys(meshes)) meshes[k].count = parts.filter(p => p.type === k).length;
    nodes.forEach((nd, i) => { wPos[i * 3] = nd.p[0]; wPos[i * 3 + 1] = nd.p[1]; wPos[i * 3 + 2] = nd.p[2]; nd.lit = false; });
    for (let i = nodes.length; i < WMAX; i++) wHeat[i] = 0;
    wGeo.setDrawRange(0, nodes.length);
    wGeo.attributes.position.needsUpdate = true;
    // тень по размеру каркаса
    const R = Math.max(span, S.length) * 0.75 + 8;
    Object.assign(key.shadow.camera, { left: -R, right: R, top: R, bottom: -R, near: 1, far: R * 6 });
    key.shadow.camera.updateProjectionMatrix();
    gridU.uOff.value.set(xs[0], -span / 2);
    lastB = -1;
    pose();
  }

  // ---------- состояние ----------
  const st = {
    az: 38, el: 18, rect: [0.4, 0.15, 0.98, 0.92], zoom: 1,
    build: 1, dark: 0, bg: '#e6e9e8', shadow: 0.16, gridA: 0.16, beam: 0,
    fit: null,         // [длина, пролёт, высота] коробки вписывания; null — по самому каркасу
    pad: [0.5, 0.5, 0.6, 0.6],   // запас коробки, м: −X, +X, −Z, +Z (под подписи осей и размеры)
    tint: null, tintK: 0,
  };
  let lastB = -1;
  const ease = (t) => t <= 0 ? 0 : t >= 1 ? 1 : 1 - Math.pow(1 - t, 3);
  function pose() {
    const b = st.build;
    const cursor = {};
    for (const p of parts) {
      const m = meshes[p.type];
      const i = cursor[p.type] = (cursor[p.type] ?? -1) + 1;
      const k = ease((b - p.t0) / p.dur);
      if (k <= 0) { mtx.makeScale(0, 0, 0); m.setMatrixAt(i, mtx); continue; }
      const dy = (1 - k) * (1 - k) * p.drop;
      if (p.type === 'column') {
        const h = p.b[1] - p.a[1];
        pos.set(p.a[0], p.a[1] + dy, p.a[2]); q.identity(); sc.set(1, h, 1);
        mtx.compose(pos, q, sc);
      } else if (!p.b) {
        pos.set(p.a[0], p.a[1] + dy, p.a[2]); q.identity();
        sc.set(p.w, p.h, p.w); mtx.compose(pos, q, sc);
      } else {
        v1.fromArray(p.a); v2.fromArray(p.b);
        const len = v1.distanceTo(v2);
        xa.subVectors(v2, v1).normalize();
        const ref = Math.abs(xa.y) < 0.9 ? ya.set(0, 1, 0) : ya.set(1, 0, 0);
        za.crossVectors(xa, ref).normalize();
        ya.crossVectors(za, xa).normalize();
        mtx.makeBasis(xa, ya, za);
        mtx.scale(sc.set(len, p.h, p.w));
        pos.addVectors(v1, v2).multiplyScalar(0.5); pos.y += dy;
        mtx.setPosition(pos);
      }
      m.setMatrixAt(i, mtx);
    }
    for (const m of Object.values(meshes)) m.instanceMatrix.needsUpdate = true;
    // жар узла: вспыхнул, когда узел собран, и остывает по мере сборки дальше
    const forward = b > lastB;
    nodes.forEach((nd, i) => {
      const d = b - nd.t;
      const h = d < 0 ? 0 : Math.max(0, 1 - d / 0.11);
      wHeat[i] = h;
      if (forward && d >= 0 && lastB < nd.t && lastB >= 0 && burstBudget > 0) { burst(nd.p[0], nd.p[1], nd.p[2], soft ? 4 : 9); burstBudget--; }
    });
    wGeo.attributes.heat.needsUpdate = true;
    lastB = b;
  }
  let burstBudget = 0;

  // ---------- точки для подписей ----------
  const anchor = (name) => {
    const g = geom();
    const { span, H, L, xs } = g;
    const off = 2.6;
    if (name.startsWith('ax')) {      // ax1..axN — оси вдоль здания, axA/axB — поперёк
      const id = name.slice(2);
      if (/^\d+$/.test(id)) { const x = xs[+id - 1]; return x === undefined ? null : new THREE.Vector3(x, 0, span / 2 + off); }
      return new THREE.Vector3(-L / 2 - off, 0, id === 'A' ? span / 2 : -span / 2);
    }
    return ({
      spanA: new THREE.Vector3(-L / 2, 0, span / 2), spanB: new THREE.Vector3(-L / 2, 0, -span / 2),
      lenA: new THREE.Vector3(-L / 2, 0, span / 2), lenB: new THREE.Vector3(L / 2, 0, span / 2),
      hA: new THREE.Vector3(-L / 2, 0, span / 2), hB: new THREE.Vector3(-L / 2, H, span / 2),
      ridge: new THREE.Vector3(-L / 2, g.ridge, 0),
      node: new THREE.Vector3(xs[0], H, g.zs[Math.floor(g.np / 2) - 1]),
    })[name] || null;
  };

  // ---------- камера: вписать каркас в прямоугольник ----------
  let W = 1, Hh = 1;
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3();
  function fit() {
    const g = geom();
    const [fl, fs, fh] = st.fit || [g.L, g.span, g.ridge];
    const [px0, px1, pz0, pz1] = st.pad;
    const y1 = st.fit ? fh : g.ridge + 0.3;
    let i = 0;
    for (const sx of [-fl / 2 - px0, fl / 2 + px1]) for (const sy of [0, y1]) for (const sz of [-fs / 2 - pz0, fs / 2 + pz1]) corners[i++].set(sx, sy, sz);
    center.set(0, y1 * 0.42, 0);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, y0, x1, y1r] = st.rect;
    const hw = x1 - x0, hh = y1r - y0;
    camera.aspect = W / Hh; camera.clearViewOffset(); camera.updateProjectionMatrix();
    let lo = 1, hi = 2000;
    for (let k = 0; k < 26; k++) {
      const d = (lo + hi) / 2;
      camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center); camera.updateMatrixWorld();
      let mx = 0, my = 0;
      for (const c of corners) { tmp.copy(c).project(camera); mx = Math.max(mx, Math.abs(tmp.x)); my = Math.max(my, Math.abs(tmp.y)); }
      if (mx <= hw && my <= hh) hi = d; else lo = d;
    }
    const d = hi / st.zoom;
    camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center);
    const cx = (x0 + x1) / 2, cy = (y0 + y1r) / 2;
    camera.setViewOffset(W, Hh, -(cx - 0.5) * W, -(cy - 0.5) * Hh, W, Hh);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    // свет идёт за камерой: ключевой слева сверху, контровой сзади
    const R = Math.max(g.span, g.L);
    key.position.set(-R * 0.9 + dir.x * R * 0.3, R * 1.6, R * 0.9 + dir.z * R * 0.3); key.target.position.set(0, 0, 0);
    rim.position.set(-dir.x * R, R * 0.8, -dir.z * R);
    glowU.uScale.value = Hh * renderer.getPixelRatio() / (2 * Math.tan(camera.fov * DEG / 2));
    gridU.uR.value = R * 1.9 + 30;
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); Hh = Math.max(1, r.height);
    renderer.setSize(W, Hh, false);
  }
  addEventListener('resize', resize);
  resize();

  function project(name) {
    const a = anchor(name); if (!a) return null;
    const v = a.project(camera);
    return { x: (v.x + 1) / 2 * W, y: (1 - v.y) / 2 * Hh, z: v.z };
  }

  let clock = performance.now();
  function render() {
    const now = performance.now(), dt = Math.min(0.05, (now - clock) / 1000); clock = now;
    bg.set(st.bg);
    floorMat.opacity = st.shadow;
    gridU.uLineA.value = st.gridA; gridU.uBeamA.value = st.beam;
    gridU.uLine.value.set(st.dark > 0.5 ? 0xc9d2d8 : 0x101418);
    gridU.uTime.value = now / 1000;
    glowU.uDark.value = st.dark;
    weldMat.blending = sparkMat.blending = st.dark > 0.5 ? THREE.AdditiveBlending : THREE.NormalBlending;
    for (const [k, m] of Object.entries(M)) {
      m.color.copy(BASE[k]);
      if (st.tint && st.tint.includes(k)) m.color.lerp(SIGNAL, st.tintK);
    }
    if (st.build !== lastB) pose();
    const live = stepSparks(dt);
    fit();
    renderer.render(scene, camera);
    return live || st.beam > 0;
  }

  build();

  // точка мира в пиксели окна: подписи осей и размеры рисует страница
  const pv = new THREE.Vector3();
  function px(x, y, z) {
    pv.set(x, y, z).project(camera);
    return { x: (pv.x + 1) / 2 * W, y: (1 - pv.y) / 2 * Hh, z: pv.z };
  }

  return {
    st, render, resize, project, px, geo: geom, size: S, get info() { return info; },
    placed(b) { let n = 0; for (const p of parts) if (p.type !== 'plinth' && b >= p.t0 + p.dur * 0.5) n++; return n; },
    setSize(o) { Object.assign(S, o); build(); },
    sparks(n = 6) { burstBudget = n; },
    soft,
  };
}
