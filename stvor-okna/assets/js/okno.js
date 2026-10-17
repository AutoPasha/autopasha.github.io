// Окно в браузере: белая рама с импостом, глухая половина и створка, которая
// открывается настежь и откидывается на проветривание. Стеклопакет из трёх
// стёкол с рамками между ними, контур уплотнителя, ручка. Умеет разбираться
// по слоям и подсвечивать деталь. Камера сама вписывает окно в часть экрана.
import * as THREE from 'three';

const DEG = Math.PI / 180;

export function createOkno(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.75 : 2));
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const bg = new THREE.Color(0x0d1114);
  const pmrem = new THREE.PMREMGenerator(renderer);
  // Студия: тёмная комната и софтбоксы, на стекле ложатся длинные чистые блики
  scene.environment = (() => {
    const sc = new THREE.Scene(); sc.background = new THREE.Color(0x050607);
    const box = (w, h, x, y, z, k, tint = [1, 1, 1]) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(k * tint[0], k * tint[1], k * tint[2]), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); sc.add(m);
    };
    box(9, 2, 0, 6, 2, 3.2);                       // длинный сверху
    box(1.2, 8, -6, 0.5, 4, 3.4);                  // полоса слева спереди: косой блик по стеклу
    box(1.2, 8, 6.5, 0.5, -2, 1.6, [1, .93, .84]); // тёплая справа сзади
    box(10, 6, 2, 1.5, 7.5, 1.9);                  // большой спереди: им светится белый профиль
    box(6, 1.2, 0, -5, 3, 0.3);                    // отражение пола
    return pmrem.fromScene(sc, 0.02).texture;
  })();
  const camera = new THREE.PerspectiveCamera(22, 1, 0.02, 30);
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(-1.6, 2.4, 2.6); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffe2c4, 1.6); rim.position.set(2.4, 1.2, -2); scene.add(rim);

  const M = {
    frame: new THREE.MeshPhysicalMaterial({ color: 0xeeeeea, roughness: 0.34, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.22 }),
    sash: new THREE.MeshPhysicalMaterial({ color: 0xf1f1ed, roughness: 0.32, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.22 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xe6f2ee, roughness: 0.03, metalness: 0, transparent: true, opacity: 0.14, envMapIntensity: 1.8, side: THREE.DoubleSide, depthWrite: false }),
    edge: new THREE.MeshPhysicalMaterial({ color: 0x3f8273, roughness: 0.15, metalness: 0, transparent: true, opacity: 0.9 }),
    spacer: new THREE.MeshPhysicalMaterial({ color: 0x9aa1a6, metalness: 0.85, roughness: 0.35 }),
    seal: new THREE.MeshStandardMaterial({ color: 0x26282a, roughness: 0.9 }),
    handle: new THREE.MeshPhysicalMaterial({ color: 0xf4f4f1, roughness: 0.22, clearcoat: 0.8, clearcoatRoughness: 0.1 }),
    chrome: new THREE.MeshPhysicalMaterial({ color: 0xc9ccd0, metalness: 1, roughness: 0.18 }),
  };
  // зеркальное отражение в полу выворачивает грани: профиль рисуем с обеих сторон
  for (const m of [M.frame, M.sash, M.seal, M.handle, M.chrome, M.spacer]) m.side = THREE.DoubleSide;
  const all = Object.values(M);

  // ---------- геометрия ----------
  const rectShape = (x0, y0, x1, y1) => { const s = new THREE.Shape(); s.moveTo(x0, y0); s.lineTo(x1, y0); s.lineTo(x1, y1); s.lineTo(x0, y1); s.closePath(); return s; };
  const rectHole = (x0, y0, x1, y1) => { const p = new THREE.Path(); p.moveTo(x0, y0); p.lineTo(x0, y1); p.lineTo(x1, y1); p.lineTo(x1, y0); p.closePath(); return p; };
  // рамка: прямоугольник с одним или несколькими проёмами, толщина по z центрирована
  const ramka = (outer, holes, depth, bevel = 0.003) => {
    const s = rectShape(...outer);
    for (const h of holes) s.holes.push(rectHole(...h));
    const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 4 });
    g.translate(0, 0, -depth / 2);
    return g;
  };
  const inset = (r, d) => [r[0] + d, r[1] + d, r[2] - d, r[3] - d];

  const okno = new THREE.Group(); scene.add(okno);
  const W = 0.65, H = 0.7, T = 0.06, IMP = 0.04;
  const openL = [-W + T, -H + T, -IMP, H - T], openR = [IMP, -H + T, W - T, H - T];

  // рама с импостом и свет за ней: дневное небо в проёме, чтобы стекло читалось стеклом
  const frameG = new THREE.Group(); okno.add(frameG);
  frameG.add(new THREE.Mesh(ramka([-W, -H, W, H], [openL, openR], 0.07), M.frame));
  // за стеклом зимний день: небо, два ряда крыш под снегом, редкие тёплые окна
  const skyTex = (() => {
    const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
    const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, S);
    gr.addColorStop(0, '#93aabb'); gr.addColorStop(0.6, '#d3d9db'); gr.addColorStop(1, '#e7e0d2');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
    let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const row = (base, hmin, hmax, wmin, wmax, color, lit) => {
      for (let x = -20; x < S;) {
        const w = wmin + rnd() * (wmax - wmin), h = hmin + rnd() * (hmax - hmin), top = base - h;
        g.fillStyle = color; g.fillRect(x, top, w - 6, S - top);
        g.fillStyle = '#eef1f2'; g.fillRect(x, top, w - 6, 5);
        if (lit) for (let yy = top + 18; yy < base - 10; yy += 22) for (let xx = x + 10; xx < x + w - 20; xx += 18)
          if (rnd() < 0.09) { g.fillStyle = 'rgba(246,214,160,.85)'; g.fillRect(xx, yy, 7, 9); }
        x += w;
      }
    };
    row(S * 0.8, 70, 190, 60, 150, '#adb9c0', false);
    row(S * 0.9, 50, 150, 90, 200, '#8a99a3', true);
    g.fillStyle = '#e9edef'; g.fillRect(0, S * 0.9, S, S * 0.1);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const skyMat = new THREE.MeshBasicMaterial({ map: skyTex, transparent: true, toneMapped: false, depthWrite: false });
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(2 * (W - T) + 0.01, 2 * (H - T) + 0.01), skyMat);
  sky.position.z = -0.04; sky.renderOrder = -1; frameG.add(sky);

  // стеклопакет: три стекла по 4 мм, между ними две дистанционные рамки
  const PANE = 0.004, GAP = 0.016;
  function paket(r) {
    const g = new THREE.Group(), w = r[2] - r[0], h = r[3] - r[1];
    const panes = [], spacers = [];
    const bg = new THREE.BoxGeometry(w, h, PANE);
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(bg, [M.edge, M.edge, M.edge, M.edge, M.glass, M.glass]);
      m.position.set((r[0] + r[2]) / 2, (r[1] + r[3]) / 2, (i - 1) * (PANE + GAP)); m.userData.x0 = m.position.x; m.renderOrder = 2; g.add(m); panes.push(m);
    }
    const sg = ramka(r, [inset(r, 0.012)], GAP - 0.002, 0);
    for (let i = 0; i < 2; i++) {
      const m = new THREE.Mesh(sg, M.spacer); m.position.z = (i - 0.5) * (PANE + GAP); g.add(m); spacers.push(m);
    }
    return { g, panes, spacers };
  }
  const left = paket(inset(openL, -0.008)); frameG.add(left.g);
  const beadL = new THREE.Mesh(ramka(openL, [inset(openL, 0.016)], 0.018, 0.002), M.frame); beadL.position.z = 0.03; frameG.add(beadL);

  // створка: петли справа (поворот) и снизу (проветривание)
  const sashR = [IMP - 0.008, -H + T - 0.008, W - T + 0.008, H - T + 0.008];
  const ST = 0.072;
  const glassR = inset(sashR, ST);
  const hinge = new THREE.Group(); hinge.position.set(sashR[2], sashR[1], 0.012); okno.add(hinge);
  const tiltG = new THREE.Group(); hinge.add(tiltG);
  const turnG = new THREE.Group(); tiltG.add(turnG);
  const sashG = new THREE.Group(); sashG.position.set(-sashR[2], -sashR[1], 0); turnG.add(sashG);
  const sashFrame = new THREE.Group(); sashG.add(sashFrame);
  sashFrame.add(new THREE.Mesh(ramka(sashR, [glassR], 0.076), M.sash));
  const sealG = new THREE.Group(); sashG.add(sealG);
  sealG.add(new THREE.Mesh(ramka(inset(sashR, 0.004), [inset(sashR, 0.016)], 0.006, 0.001), M.seal));
  sealG.position.z = -0.041;
  const pak = paket(inset(glassR, -0.01)); sashG.add(pak.g);
  const beadG = new THREE.Group(); sashG.add(beadG);
  beadG.add(new THREE.Mesh(ramka(glassR, [inset(glassR, 0.015)], 0.018, 0.002), M.sash)); beadG.position.z = 0.044;

  // ручка: накладка и рычаг; 0 — вниз (закрыто), 1 — вбок (поворот), 2 — вверх (проветривание)
  const handleG = new THREE.Group(); sashG.add(handleG);
  const handleX = sashR[0] + ST / 2;
  handleG.position.set(handleX, 0.02, 0.046);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.078, 0.012), M.handle); handleG.add(plate);
  const lever = new THREE.Group(); lever.position.z = 0.012; handleG.add(lever);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.011, 0.016, 24).rotateX(Math.PI / 2), M.chrome); lever.add(neck);
  const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.0085, 0.1, 6, 16), M.handle); arm.position.set(0, -0.062, 0.008); lever.add(arm);

  // ---------- состояние ----------
  const st = { az: 22, el: 5, rect: [0.1, 0.2, 0.9, 0.9], open: 0, tilt: 0, handle: 0, explode: 0, sky: 1, bg: '#0d1114', zoom: 1, focus: '' };
  const ease = (e, a, b) => { const t = Math.min(1, Math.max(0, (e - a) / (b - a))); return t * t * (3 - 2 * t); };
  function pose() {
    const e = st.explode;
    turnG.rotation.y = st.open * DEG;
    tiltG.rotation.x = st.tilt * DEG;
    lever.rotation.z = st.handle * Math.PI / 2;
    // слои створки уходят вперёд и лесенкой вправо, чтобы каждый был виден лицом
    const fx = (k, a, b) => k * ease(e, a, b);
    frameG.position.z = -0.1 * ease(e, 0, 0.6);
    sealG.position.set(fx(0.12, 0.05, 0.7), 0, -0.041 + 0.1 * ease(e, 0.05, 0.7));
    sashFrame.position.set(fx(0.3, 0.1, 0.8), 0, 0.24 * ease(e, 0.1, 0.8));
    pak.panes.forEach((p, i) => {
      const k = ease(e, 0.15 + i * 0.05, 0.85 + i * 0.05);
      p.position.x = p.userData.x0 + (0.48 + i * 0.15) * k;
      p.position.z = (i - 1) * (PANE + GAP) + (0.38 + i * 0.09) * k;
    });
    pak.spacers.forEach((p, i) => {
      const k = ease(e, 0.2 + i * 0.05, 0.9 + i * 0.03);
      p.position.x = (0.555 + i * 0.15) * k;
      p.position.z = (i - 0.5) * (PANE + GAP) + (0.425 + i * 0.09) * k;
    });
    beadG.position.set(fx(0.95, 0.25, 0.95), 0, 0.044 + 0.62 * ease(e, 0.25, 0.95));
    handleG.position.x = handleX + fx(1.12, 0.3, 1);
    handleG.position.z = 0.046 + 0.74 * ease(e, 0.3, 1);
    skyMat.opacity = st.sky;
  }
  const anchor = (parent, x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); parent.add(o); return o; };
  const A = {
    frame: anchor(frameG, -W + T / 2, 0.36, 0.036),
    seal: anchor(sealG, sashR[2] - 0.01, -0.34, 0.004),
    glass: anchor(pak.panes[2], -0.1, 0.22, 0.003),
    handle: anchor(lever, 0, -0.08, 0.016),
  };
  const wp = new THREE.Vector3();

  // ---------- камера ----------
  let Wd = 1, Hd = 1;
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3(), box = new THREE.Box3();
  function fit() {
    // габариты по настоящим деталям: открытая створка и разложенные слои вписываются как есть
    okno.updateMatrixWorld(true);
    box.setFromObject(okno);
    let i = 0;
    for (const sx of [box.min.x, box.max.x]) for (const sy of [box.min.y, box.max.y]) for (const sz of [box.min.z, box.max.z]) corners[i++].set(sx, sy, sz);
    box.getCenter(center);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, y0, x1, y1] = st.rect;
    camera.aspect = Wd / Hd; camera.clearViewOffset(); camera.updateProjectionMatrix();
    let lo = 0.1, hi = 30;
    for (let k = 0; k < 24; k++) {
      const d = (lo + hi) / 2;
      camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center); camera.updateMatrixWorld();
      let mx = 0, my = 0;
      for (const c of corners) { tmp.copy(c).project(camera); mx = Math.max(mx, Math.abs(tmp.x)); my = Math.max(my, Math.abs(tmp.y)); }
      if (mx <= (x1 - x0) && my <= (y1 - y0)) hi = d; else lo = d;
    }
    camera.position.copy(center).addScaledVector(dir, hi / st.zoom); camera.lookAt(center);
    camera.setViewOffset(Wd, Hd, -((x0 + x1) / 2 - 0.5) * Wd, -((y0 + y1) / 2 - 0.5) * Hd, Wd, Hd);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  }
  function resize() { const r = canvas.getBoundingClientRect(); Wd = Math.max(1, r.width); Hd = Math.max(1, r.height); renderer.setSize(Wd, Hd, false); }
  addEventListener('resize', resize); resize();

  const base = new Map(all.map(m => [m, m.color.clone()]));
  const GROUPS = { frame: [M.frame, M.sash], seal: [M.seal], glass: [M.glass, M.edge, M.spacer], handle: [M.handle, M.chrome] };
  function focus() {
    for (const m of all) m.color.copy(base.get(m)).multiplyScalar(!st.focus || (GROUPS[st.focus] || []).includes(m) ? 1 : 0.32);
  }
  function project(name) {
    A[name].getWorldPosition(wp); wp.project(camera);
    return { x: (wp.x + 1) / 2 * Wd, y: (1 - wp.y) / 2 * Hd };
  }

  // Отражение в тёмном глянцевом полу: окно вверх ногами под полом и полупрозрачный пол поверх
  const FLOOR = -H - 0.006;
  const floorScene = new THREE.Scene();
  // пол большой и ровный: маленький на дальнем ракурсе не перекрывал луч к отражению,
  // и под окном рисовалось второе окно в полную силу
  const floorMat = new THREE.MeshBasicMaterial({ color: 0x0d1114, transparent: true, opacity: 0.86, depthWrite: false, toneMapped: false });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR; floorScene.add(floor);
  renderer.autoClear = false;
  function render() {
    bg.set(st.bg); pose(); focus(); fit();
    okno.updateMatrixWorld(true);
    renderer.setClearColor(bg, 1); renderer.clear();
    if (st.mirror !== false) {
      okno.scale.y = -1; okno.position.y = 2 * FLOOR;
      renderer.render(scene, camera);
      okno.scale.y = 1; okno.position.y = 0;
      floorMat.color.copy(bg);
      renderer.clearDepth();
      renderer.render(floorScene, camera);
    }
    renderer.render(scene, camera);
    okno.updateMatrixWorld(true);
  }
  return { st, render, resize, project };
}
