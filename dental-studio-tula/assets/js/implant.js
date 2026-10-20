// Имплант «под ключ» в браузере: титановый имплант с резьбой, винт, абатмент
// и коронка из диоксида циркония. Умеет разбираться по оси, подсвечивать одну
// деталь, менять оттенок коронки волной сверху вниз (шкала VITA) и отражаться
// в полу. Камера сама вписывает предмет в заданную часть экрана.
import * as THREE from 'three';

const DEG = Math.PI / 180;

// Оттенки шкалы VITA classical: шесть примеров, как выглядит цвет коронки
export const OTTENKI = {
  A1: { c: 0xf8f4ec, name: 'A1', text: 'Самый светлый из натуральных оттенков эмали.' },
  A2: { c: 0xf4ead8, name: 'A2', text: 'Светлый тёплый оттенок.' },
  A3: { c: 0xeedfc4, name: 'A3', text: 'Тёплый оттенок с желтизной.' },
  B1: { c: 0xfbf9f4, name: 'B1', text: 'Светлый холодный оттенок.' },
  C2: { c: 0xe6e1d6, name: 'C2', text: 'Сероватый, приглушённый оттенок.' },
  D2: { c: 0xede2d6, name: 'D2', text: 'Розовато-серый оттенок.' },
};

export function createImplant(canvas, { onReady } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.75 : 2));
  // Программный рендер (безголовый браузер, слабый ноутбук): без ретины, иначе прокрутка встаёт
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  const bg = new THREE.Color(0xeef1ed);
  const pmrem = new THREE.PMREMGenerator(renderer);
  // Студия: тёмная комната и софтбоксы — на титане ложатся чистые полосы бликов
  scene.environment = (() => {
    const sc = new THREE.Scene(); sc.background = new THREE.Color(0x050605);
    const box = (w, h, x, y, z, k, tint = [1, 1, 1]) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(k * tint[0], k * tint[1], k * tint[2]), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); sc.add(m);
    };
    box(9, 2.4, 0, 7, 1.5, 3.6);              // длинный сверху
    box(1.2, 9, -6, 0.5, 3.5, 3.2);           // узкая полоса слева спереди: вертикальный блик на резьбе
    box(1.2, 9, 6.2, 0.5, -1.5, 2.4, [0.92, 1, 0.96]); // полоса справа сзади, чуть зеленее
    box(10, 6, 2, 1.5, 7.5, 1.5);             // мягкий большой спереди
    box(6, 1.4, 0, -6, 2, 0.5);               // пол
    return pmrem.fromScene(sc, 0.02).texture;
  })();
  scene.environmentIntensity = 1.0;

  const camera = new THREE.PerspectiveCamera(24, 1, 0.05, 60);
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(-2, 4, 3); scene.add(key);
  const rim = new THREE.DirectionalLight(0xe9fff3, 2.2); rim.position.set(2.5, 2, -3); scene.add(rim);
  const fill = new THREE.HemisphereLight(0xffffff, 0x9fb0a6, 0.5); scene.add(fill);

  // ---------- материалы ----------
  const titan = new THREE.MeshPhysicalMaterial({ color: 0xb9bfc3, metalness: 1, roughness: 0.4 });
  const titanPol = new THREE.MeshPhysicalMaterial({ color: 0xd8dcdf, metalness: 1, roughness: 0.14 });
  const zoloto = new THREE.MeshPhysicalMaterial({ color: 0xe2b867, metalness: 1, roughness: 0.22 });   // нитрид титана
  // Коронка: цирконий, полупрозрачный край, глазурь. Оттенок меняется волной сверху вниз
  const keram = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.3, metalness: 0, clearcoat: 0.9, clearcoatRoughness: 0.12,
    sheen: 0.4, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xfff6e8),
  });
  keram.userData.u = {
    uA: { value: new THREE.Color(OTTENKI.A2.c) }, uB: { value: new THREE.Color(OTTENKI.A2.c) },
    uEdge: { value: 99 }, uY0: { value: 0 },
  };
  keram.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, keram.userData.u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vLPos;')
      .replace('#include <fog_vertex>', '#include <fog_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvLPos = transformed;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vLPos;\nuniform vec3 uA;\nuniform vec3 uB;\nuniform float uEdge;')
      .replace('#include <color_fragment>', `
        #include <color_fragment>
        // режущий край светлее и прозрачнее, шейка теплее — как у живого зуба
        float h = clamp((vLPos.y + 0.38) / 0.76, 0.0, 1.0);
        float k = smoothstep(uEdge - 0.06, uEdge + 0.06, vLPos.y);
        vec3 base = mix(uA, uB, k);
        vec3 neck = base * vec3(0.96, 0.91, 0.83);
        vec3 col = mix(neck, base, smoothstep(0.0, 0.55, h));
        col = mix(col, base * vec3(1.02, 1.03, 1.05), smoothstep(0.75, 1.0, h) * 0.6);
        col += exp(-pow((vLPos.y - uEdge) / 0.025, 2.0)) * 0.25 * vec3(0.85, 1.0, 0.92);
        diffuseColor.rgb *= col;`);
  };
  const MATS = { krona: keram, abat: titanPol, vint: zoloto, implant: titan };
  for (const m of Object.values(MATS)) m.userData.base = m.color.clone();

  // ---------- геометрия ----------
  // Резьба: треугольный профиль ведём по спирали вокруг конического тела
  function threadGeo({ y0, y1, r0, r1, pitch, depth, w, seg = 28 }) {
    const turns = (y0 - y1) / pitch;
    const steps = Math.ceil(turns * seg);
    const prof = [[-0.004, -w], [depth, -w * 0.15], [depth, w * 0.15], [-0.004, w]];
    const pos = [], idx = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps, th = t * turns * Math.PI * 2;
      const y = y0 - t * (y0 - y1);
      const r = r0 + (r1 - r0) * t;
      const fade = Math.min(1, t * turns / 0.8, (1 - t) * turns / 0.6);
      for (const [dr, dy] of prof) {
        const rr = r + dr * fade;
        pos.push(Math.cos(th) * rr, y + dy, Math.sin(th) * rr);
      }
    }
    const n = prof.length;
    for (let i = 0; i < steps; i++) for (let j = 0; j < n - 1; j++) {
      const a = i * n + j, b = a + 1, c = a + n, d = c + 1;
      idx.push(a, b, c, b, d, c);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    // грани резьбы плоские: гребень читается чистой линией блика
    const f = g.toNonIndexed(); f.computeVertexNormals();
    return f;
  }
  const lathe = (pts, seg = 72) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

  // Имплант: шейка гладкая, тело конусом с резьбой, кончик скруглён
  const implant = new THREE.Group();
  {
    const body = lathe([[0, -1.62], [0.07, -1.6], [0.12, -1.52], [0.135, -1.4], [0.165, -0.3], [0.175, -0.14], [0.215, -0.1], [0.215, -0.01], [0.15, 0], [0.11, 0], [0.11, -0.2], [0, -0.2]]);
    implant.add(new THREE.Mesh(body, titan));
    const thr = threadGeo({ y0: -0.16, y1: -1.5, r0: 0.168, r1: 0.135, pitch: 0.12, depth: 0.072, w: 0.046 });
    implant.add(new THREE.Mesh(thr, titan));
  }
  // Абатмент: посадка внутрь импланта, шейка под десну, конус под коронку
  const abat = new THREE.Group();
  {
    const g = lathe([[0, -0.2], [0.1, -0.2], [0.1, 0], [0.2, 0.0], [0.245, 0.1], [0.245, 0.16], [0.205, 0.2], [0.17, 0.62], [0.15, 0.7], [0.06, 0.72], [0.06, 0.6], [0, 0.6]], 6 * 12);
    abat.add(new THREE.Mesh(g, titanPol));
    // плоская грань: коронка не провернётся
    const flat = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.4, 0.22), titanPol);
    flat.position.set(0.18, 0.44, 0); abat.add(flat);
  }
  // Винт: шляпка и стержень с мелкой резьбой
  const vint = new THREE.Group();
  {
    vint.add(new THREE.Mesh(lathe([[0, 0.66], [0.05, 0.66], [0.085, 0.64], [0.085, 0.54], [0.05, 0.52], [0.048, -0.05], [0.048, -0.5], [0.03, -0.54], [0, -0.55]], 48), zoloto));
    vint.add(new THREE.Mesh(threadGeo({ y0: -0.12, y1: -0.5, r0: 0.046, r1: 0.044, pitch: 0.045, depth: 0.018, w: 0.016, seg: 20 }), zoloto));
  }
  // Коронка моляра: шар, превращённый в коронку — шейка уже, экватор шире, жевательная
  // поверхность с четырьмя буграми и бороздой крестом
  const krona = new THREE.Group();
  {
    const g = new THREE.SphereGeometry(1, phone || soft ? 96 : 140, phone || soft ? 72 : 110);
    const p = g.attributes.position, v = new THREE.Vector3();
    const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const h = v.y, phi = Math.atan2(v.z, v.x), rad = Math.hypot(v.x, v.z);
      // сечение — скруглённый квадрат
      const n = 2.6, c = Math.abs(Math.cos(phi)), s = Math.abs(Math.sin(phi));
      const se = Math.pow(Math.pow(c, n) + Math.pow(s, n), -1 / n);
      const prof = 0.62 + 0.38 * sstep(-1, -0.2, h) - 0.04 * sstep(0.3, 1, h);
      let x = Math.cos(phi) * rad * se * prof, z = Math.sin(phi) * rad * se * prof * 0.9;
      let y = h < -0.55 ? -0.264 + (h + 0.55) * 0.25 : h < 0.45 ? h * 0.48 : 0.216 + (h - 0.45) * 0.15;
      const top = sstep(0.25, 0.75, h);
      // бугры и борозды на жевательной поверхности
      let b = 0;
      for (const [cx, cz] of [[0.36, 0.33], [-0.36, 0.33], [0.36, -0.33], [-0.36, -0.33]]) b += Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / 0.06);
      b -= 0.55 * Math.exp(-(x * x) / 0.006) * sstep(0.1, 0.5, 1 - Math.abs(z) / 0.6);
      b -= 0.45 * Math.exp(-(z * z) / 0.005) * sstep(0.1, 0.5, 1 - Math.abs(x) / 0.6);
      y += top * b * 0.075;
      p.setXYZ(i, x * 0.52, y, z * 0.48);
    }
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, keram);
    krona.add(m);
  }
  const KRONA_Y = 0.56;
  const parts = { krona, vint, abat, implant };
  const group = new THREE.Group();
  for (const g of Object.values(parts)) group.add(g);
  scene.add(group);

  // ---------- пол с отражением ----------
  const FLOOR = -1.66;
  const floorScene = new THREE.Scene();
  const fadeTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, '#c4c4c4'); gr.addColorStop(0.45, '#ebebeb'); gr.addColorStop(1, '#ffffff');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  })();
  const floorMat = new THREE.MeshBasicMaterial({ color: 0xeef1ed, alphaMap: fadeTex, transparent: true, depthWrite: false, toneMapped: false });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.5), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR; floorScene.add(floor);
  renderer.autoClear = false;

  // ---------- состояние ----------
  const st = {
    az: 20, el: 8, spin: 0,
    rect: [0.5, 0.15, 0.95, 0.95],
    explode: 0, focus: null, zoom: 1, only: null,
    bg: '#eef1ed', mirror: 1,
  };
  const OFF = { krona: 1.95, vint: 1.35, abat: 0.72, implant: 0 };
  const lit = { krona: 1, vint: 1, abat: 1, implant: 1 };
  // приглушённая деталь: керамика не должна сереть до грязи, металл уходит в тень
  const DIM = { krona: 0.5, vint: 0.3, abat: 0.25, implant: 0.25 };
  function pose() {
    const e = st.explode;
    const ease = (a, b) => { const t = Math.min(1, Math.max(0, (e - a) / (b - a))); return t * t * (3 - 2 * t); };
    krona.position.y = KRONA_Y + OFF.krona * ease(0, 0.7);
    vint.position.y = OFF.vint * ease(0.15, 0.85);
    abat.position.y = OFF.abat * ease(0.25, 1);
    implant.position.y = 0;
    // винт крутится, когда едет: его закручивают
    vint.rotation.y = -ease(0.15, 0.85) * Math.PI * 3;
    group.rotation.y = st.spin * DEG;
    for (const k of Object.keys(parts)) {
      parts[k].visible = !st.only || st.only === k;
      const want = !st.focus || st.focus === k ? 1 : DIM[k];
      lit[k] += (want - lit[k]) * 0.18;
      MATS[k].color.copy(MATS[k].userData.base).multiplyScalar(lit[k]);
      MATS[k].envMapIntensity = 0.25 + 0.75 * lit[k];
    }
  }
  const busy = () => framing() || Object.keys(parts).some(k => Math.abs((!st.focus || st.focus === k ? 1 : DIM[k]) - lit[k]) > 0.01);

  // Точки для подписей: середина детали в мире
  const anchors = {
    krona: () => new THREE.Vector3(-0.5, krona.position.y + 0.05, 0),
    vint: () => new THREE.Vector3(-0.09, vint.position.y + 0.6, 0),
    abat: () => new THREE.Vector3(-0.23, abat.position.y + 0.3, 0),
    implant: () => new THREE.Vector3(-0.2, -0.8, 0),
  };

  // ---------- камера: вписать предмет в прямоугольник экрана ----------
  let W = 1, H = 1;
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3();
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  // Кадр по высоте: весь предмет или деталь, о которой речь (st.zoomPart 0..1), камера подъезжает плавно
  const RANGE = {
    krona: () => [krona.position.y - 0.42, krona.position.y + 0.44],
    vint: () => [vint.position.y - 0.58, vint.position.y + 0.7],
    abat: () => [abat.position.y - 0.24, abat.position.y + 0.76],
    implant: () => [-1.66, 0.05],
  };
  const fr = { y0: null, y1: 0, r: 0.54 }, tgt = { y0: 0, y1: 0, r: 0.54 };
  function target() {
    if (st.only === 'krona') return Object.assign(tgt, { y0: krona.position.y - 0.4, y1: krona.position.y + 0.42, r: 0.54 });
    const e = st.explode;
    let y0 = FLOOR - (st.mirror > 0 ? 0.45 : 0) * st.mirror, y1 = KRONA_Y + 0.42 + OFF.krona * Math.min(1, e / 0.7), r = 0.54;
    const k = st.focus ? st.zoomPart || 0 : 0;
    if (k > 0) {
      const [a, b] = RANGE[st.focus]();
      const m = (b - a) * 0.35;
      y0 += (a - m - y0) * k; y1 += (b + m - y1) * k; r += (0.5 - r) * k;
    }
    return Object.assign(tgt, { y0, y1, r });
  }
  function bounds() {
    target();
    if (fr.y0 === null || st.snap) { fr.y0 = tgt.y0; fr.y1 = tgt.y1; fr.r = tgt.r; }
    else { fr.y0 += (tgt.y0 - fr.y0) * 0.14; fr.y1 += (tgt.y1 - fr.y1) * 0.14; fr.r += (tgt.r - fr.r) * 0.14; }
    return fr;
  }
  const framing = () => { target(); return Math.abs(tgt.y0 - fr.y0) + Math.abs(tgt.y1 - fr.y1) > 0.004; };

  function fit() {
    const { y0, y1, r } = bounds();
    let i = 0;
    for (const sx of [-r, r]) for (const sy of [y0, y1]) for (const sz of [-r, r]) corners[i++].set(sx, sy, sz);
    center.set(0, (y0 + y1) / 2, 0);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, yy0, x1, yy1] = st.rect;
    const hw = x1 - x0, hh = yy1 - yy0;
    camera.aspect = W / H; camera.clearViewOffset(); camera.updateProjectionMatrix();
    let lo = 0.5, hi = 60;
    for (let k = 0; k < 22; k++) {
      const d = (lo + hi) / 2;
      camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center); camera.updateMatrixWorld();
      let mx = 0, my = 0;
      for (const c of corners) { tmp.copy(c).project(camera); mx = Math.max(mx, Math.abs(tmp.x)); my = Math.max(my, Math.abs(tmp.y)); }
      if (mx <= hw && my <= hh) hi = d; else lo = d;
    }
    const d = hi / st.zoom;
    camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center);
    const cx = (x0 + x1) / 2, cy = (yy0 + yy1) / 2;
    camera.setViewOffset(W, H, -(cx - 0.5) * W, -(cy - 0.5) * H, W, H);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    renderer.setSize(W, H, false);
  }
  addEventListener('resize', resize);
  resize();

  function project(name) {
    const v = anchors[name]().applyMatrix4(group.matrixWorld).project(camera);
    return { x: (v.x + 1) / 2 * W, y: (1 - v.y) / 2 * H };
  }

  function render() {
    bg.set(st.bg); pose(); group.updateMatrixWorld(); fit();
    renderer.setClearColor(bg, 1); renderer.clear();
    if (st.mirror > 0 && !st.only) {
      group.scale.y = -1; group.position.y = 2 * FLOOR;
      renderer.render(scene, camera);
      group.scale.y = 1; group.position.y = 0;
      floorMat.color.copy(bg); floorMat.opacity = 1 - 0.0 * st.mirror;
      renderer.clearDepth();
      renderer.render(floorScene, camera);
    }
    renderer.render(scene, camera);
  }

  // ---------- оттенок волной ----------
  let cur = 'A2', tw = null;
  function setShade(id) {
    if (id === cur) return Promise.resolve();
    const u = keram.userData.u;
    if (tw) { tw.kill(); u.uA.value.copy(u.uB.value); }
    u.uB.value.set(OTTENKI[id].c);
    // uB сверху, волна идёт вниз: выше границы — новый оттенок
    const o = { e: 0.5 };
    cur = id;
    return new Promise(res => {
      tw = window.gsap.to(o, { e: -0.5, duration: 1.0, ease: 'power2.inOut',
        onUpdate: () => { u.uEdge.value = o.e; },
        onComplete: () => { u.uA.value.set(OTTENKI[id].c); u.uEdge.value = 99; res(); } });
      u.uEdge.value = o.e;
    });
  }
  keram.userData.u.uEdge.value = 99;

  requestAnimationFrame(() => onReady && onReady());
  return { st, render, resize, project, setShade, busy, get shade() { return cur; } };
}
