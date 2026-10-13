// Колесо в браузере: шина с протектором, литой диск с десятью спицами и
// тормоз за ними (вентилируемый диск с перфорацией, суппорт, колодки).
// Умеет крутиться, разбираться по оси и подсвечивать деталь. Камера сама
// вписывает колесо в заданную часть экрана.
import * as THREE from 'three';

const DEG = Math.PI / 180;

export function createKoleso(canvas) {
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
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  const bg = new THREE.Color(0x0a0a0b);
  scene.background = null;   // фон — цвет очистки: колесо рисуется дважды, с отражением в полу
  const pmrem = new THREE.PMREMGenerator(renderer);
  // Студия: чёрная комната и софтбоксы — на металле ложатся чистые градиентные блики
  scene.environment = (() => {
    const sc = new THREE.Scene(); sc.background = new THREE.Color(0x030303);
    const box = (w, h, x, y, z, k) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(k, k, k), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); sc.add(m);
    };
    box(8, 2.2, 0, 6, 2, 4.0);     // длинный сверху
    box(1.4, 7, -6.5, 0.5, 3, 3.0); // полоса слева спереди
    box(1.4, 7, 6.5, 0.5, -1, 2.2); // полоса справа сзади
    box(10, 6, 2.5, 2.5, 7, 3.2);  // большой спереди: им светится лицо диска
    box(4, 4, -4, -1.5, 6, 1.4);   // слабый спереди слева снизу
    box(6, 1.2, 0, -5, 3, 0.35);   // отражение пола
    return pmrem.fromScene(sc, 0.015).texture;
  })();
  scene.environmentIntensity = 1.0;
  const camera = new THREE.PerspectiveCamera(22, 1, 0.02, 30);
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(-1.5, 2.2, 2.4); scene.add(key);
  const rimL = new THREE.DirectionalLight(0xffe6cf, 2.4); rimL.position.set(2.2, 1.4, -2.2); scene.add(rimL);

  // ---------- текстуры ----------
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const canvasTex = (w, h, draw, srgb) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c); t.anisotropy = aniso;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  // Протектор: три продольные канавки и косые ламели блоками по кругу.
  // v профиля шины: 0 — борт спереди, 1 — борт сзади, протектор в середине.
  const TREAD = [0.36, 0.64];
  const tread = canvasTex(2048, 512, (g, w, h) => {
    g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, w, h);
    const y0 = TREAD[0] * h, y1 = TREAD[1] * h;
    g.fillStyle = '#d8d8d8'; g.fillRect(0, y0, w, y1 - y0);
    g.fillStyle = '#202020';
    for (const f of [0.43, 0.5, 0.57]) g.fillRect(0, f * h - 5, w, 10);
    const blocks = 96;
    for (let i = 0; i < blocks; i++) {
      const x = i * w / blocks;
      g.save(); g.translate(x, 0);
      g.fillRect(2, y0, 3, (0.43 - TREAD[0]) * h - 5);
      g.fillRect(9, 0.5 * h + 5, 3, 0.07 * h - 10);
      g.fillRect(4, 0.57 * h + 5, 3, (TREAD[1] - 0.57) * h - 5);
      g.restore();
    }
    // мелкие надписи на боковине не рисуем: чужие марки и выдуманный текст — мимо
  });
  // Проточка лицевой стороны тормозного диска: концентрические следы резца
  const machined = canvasTex(1024, 1024, (g) => {
    g.fillStyle = '#707070'; g.fillRect(0, 0, 1024, 1024);
    for (let r = 4; r < 520; r += 1.4) {
      const v = 70 + Math.random() * 90;
      g.strokeStyle = `rgba(${v},${v},${v},${0.4 + Math.random() * 0.4})`;
      g.lineWidth = 0.7 + Math.random(); g.beginPath(); g.arc(512, 512, r, 0, Math.PI * 2); g.stroke();
    }
  });
  machined.wrapS = machined.wrapT = THREE.ClampToEdgeWrapping;
  machined.repeat.set(1 / 0.34, 1 / 0.34); machined.offset.set(0.5, 0.5);

  const M = {
    rubber: new THREE.MeshPhysicalMaterial({ color: 0x151515, roughness: 0.82, metalness: 0, bumpMap: tread, bumpScale: 2.2, roughnessMap: tread }),
    rim: new THREE.MeshPhysicalMaterial({ color: 0xc4c7cc, metalness: 1, roughness: 0.2, clearcoat: 0.6, clearcoatRoughness: 0.1 }),
    rimDark: new THREE.MeshPhysicalMaterial({ color: 0x3a3c40, metalness: 0.9, roughness: 0.38 }),
    rotor: new THREE.MeshPhysicalMaterial({ color: 0xc4c6c9, metalness: 1, roughness: 0.4, roughnessMap: machined }),
    rotorEdge: new THREE.MeshPhysicalMaterial({ color: 0x5a5d61, metalness: 0.9, roughness: 0.55 }),
    hat: new THREE.MeshPhysicalMaterial({ color: 0x2a2b2e, metalness: 0.6, roughness: 0.45 }),
    caliper: new THREE.MeshPhysicalMaterial({ color: 0xb4602f, metalness: 0.2, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.05 }),
    pad: new THREE.MeshStandardMaterial({ color: 0x1d1d1e, roughness: 0.92 }),
    steel: new THREE.MeshPhysicalMaterial({ color: 0xa3a6ab, metalness: 1, roughness: 0.28 }),
  };
  M.rubber.side = THREE.DoubleSide; M.rimDark.side = THREE.DoubleSide; M.hat.side = THREE.DoubleSide;
  const all = Object.values(M);

  // ---------- геометрия ----------
  const circle = (p, r, x = 0, y = 0, cw = false) => { p.absarc(x, y, r, 0, Math.PI * 2, cw); return p; };
  // мелкое отверстие многоугольником: дуги в ExtrudeGeometry делятся на curveSegments,
  // и 54 сверловки по 128 точек давали полмиллиона треугольников
  const hole = (r, x, y, n = 14) => { const p = new THREE.Path(); for (let i = 0; i <= n; i++) { const a = -i / n * Math.PI * 2; p[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r, y + Math.sin(a) * r); } return p; };
  const ext = (shape, depth, bevel, segs = 3, curve = 96) => new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: segs, curveSegments: curve });
  const lathe = (pts, n = 160) => { const g = new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), n); g.rotateX(Math.PI / 2); return g; };

  const wheel = new THREE.Group(); scene.add(wheel);
  const spinners = [];   // то, что крутится вместе с колесом

  // шина: профиль от переднего борта к заднему
  const half = [[0.247, 0.104], [0.258, 0.116], [0.276, 0.123], [0.298, 0.124], [0.314, 0.119], [0.324, 0.109], [0.329, 0.096], [0.331, 0.06], [0.332, 0.02]];
  const prof = [...half, ...half.slice().reverse().map(([r, y]) => [r, -y])];
  const tire = new THREE.Mesh(lathe(prof.slice().reverse(), 128), M.rubber);
  const tireG = new THREE.Group(); tireG.add(tire); wheel.add(tireG); spinners.push(tire);

  // литой диск: обод, полка, лицо со спицами
  const rimG = new THREE.Group(); wheel.add(rimG);
  const barrel = new THREE.Mesh(lathe([[0.246, 0.106], [0.236, 0.1], [0.228, 0.086], [0.214, 0.078], [0.208, 0.04], [0.208, -0.09], [0.222, -0.1], [0.246, -0.106]].reverse(), 160), M.rimDark);
  barrel.material = M.rimDark; rimG.add(barrel); spinners.push(barrel);
  const lipShape = circle(new THREE.Shape(), 0.249); lipShape.holes.push(circle(new THREE.Path(), 0.226, 0, 0, true));
  const lip = new THREE.Mesh(ext(lipShape, 0.008, 0.0035, 3, 128), M.rim); lip.position.z = 0.096; rimG.add(lip); spinners.push(lip);
  const face = circle(new THREE.Shape(), 0.228);
  const N = 10;
  for (let i = 0; i < N; i++) {
    const c = i * Math.PI * 2 / N + Math.PI / 2 + Math.PI / N;
    const wi = 9.5 * DEG, wo = 12.5 * DEG, ri = 0.094, ro = 0.208;
    const p = new THREE.Path();
    p.absarc(0, 0, ro, c + wo, c - wo, true);
    p.lineTo(Math.cos(c - wi) * ri, Math.sin(c - wi) * ri);
    p.absarc(0, 0, ri, c - wi, c + wi, false);
    p.lineTo(Math.cos(c + wo) * ro, Math.sin(c + wo) * ro);
    face.holes.push(p);
  }
  face.holes.push(circle(new THREE.Path(), 0.028, 0, 0, true));
  for (let i = 0; i < 5; i++) { const a = i * Math.PI * 2 / 5 + Math.PI / 2; face.holes.push(hole(0.0105, Math.cos(a) * 0.056, Math.sin(a) * 0.056, 20)); }
  const spokes = new THREE.Mesh(ext(face, 0.022, 0.0065, 3, 72), [M.rim, M.rimDark]); spokes.position.z = 0.058; rimG.add(spokes); spinners.push(spokes);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.012, 64).rotateX(Math.PI / 2), M.rimDark); cap.position.z = 0.086; rimG.add(cap); spinners.push(cap);
  const nutG = new THREE.CylinderGeometry(0.0095, 0.0095, 0.02, 6).rotateX(Math.PI / 2);
  for (let i = 0; i < 5; i++) { const a = i * Math.PI * 2 / 5 + Math.PI / 2; const n = new THREE.Mesh(nutG, M.steel); n.position.set(Math.cos(a) * 0.056, Math.sin(a) * 0.056, 0.078); rimG.add(n); spinners.push(n); }

  // тормоз: диск крутится, суппорт стоит
  const brake = new THREE.Group(); brake.position.z = -0.045; wheel.add(brake);
  const disc = new THREE.Group(); brake.add(disc); spinners.push(disc);
  const RO = 0.17, RI = 0.108, PT = 0.0075, GAP = 0.012;
  const plate = (() => {
    const s = circle(new THREE.Shape(), RO); s.holes.push(circle(new THREE.Path(), RI, 0, 0, true));
    for (const [k, r] of [0.122, 0.137, 0.152].entries())
      for (let i = 0; i < 18; i++) { const a = i * Math.PI * 2 / 18 + k * 0.07; s.holes.push(hole(0.0043, Math.cos(a) * r, Math.sin(a) * r, 12)); }
    return ext(s, PT, 0.0007, 1, 96);
  })();
  const f1 = new THREE.Mesh(plate, [M.rotor, M.rotorEdge]); f1.position.z = GAP / 2; disc.add(f1);
  const f2 = new THREE.Mesh(plate, [M.rotor, M.rotorEdge]); f2.position.z = -GAP / 2 - PT; disc.add(f2);
  const vg = new THREE.BoxGeometry(0.054, 0.0035, GAP + 0.001);
  for (let i = 0; i < 44; i++) { const a = i * Math.PI * 2 / 44; const v = new THREE.Mesh(vg, M.hat); v.position.set(Math.cos(a) * 0.139, Math.sin(a) * 0.139, 0); v.rotation.z = a + 0.25; disc.add(v); }
  const hatS = circle(new THREE.Shape(), 0.092); hatS.holes.push(circle(new THREE.Path(), 0.03, 0, 0, true));
  const hat = new THREE.Mesh(ext(hatS, 0.006, 0.0012, 2, 96), M.hat); hat.position.z = 0.03; disc.add(hat);
  const hatW = new THREE.Mesh(new THREE.CylinderGeometry(0.092, 0.094, 0.03, 128, 1, true).rotateX(Math.PI / 2), M.hat); hatW.position.z = 0.016; disc.add(hatW);
  // суппорт: моноблок, обхватывает диск сверху справа
  const calG = new THREE.Group(); brake.add(calG);
  const ca = 62 * DEG, span = 30 * DEG;
  const sec = (r0, r1, a0, a1) => { const s = new THREE.Shape(); s.absarc(0, 0, r1, a0, a1, false); s.absarc(0, 0, r0, a1, a0, true); return s; };
  const half1 = new THREE.Mesh(ext(sec(0.126, 0.19, ca - span, ca + span), 0.016, 0.012, 8, 64), M.caliper); half1.position.z = 0.03; calG.add(half1);
  const half2 = new THREE.Mesh(ext(sec(0.126, 0.19, ca - span, ca + span), 0.016, 0.012, 8, 64), M.caliper); half2.position.z = -0.046; calG.add(half2);
  const bridge = new THREE.Mesh(ext(sec(0.178, 0.193, ca - span + 5 * DEG, ca + span - 5 * DEG), 0.06, 0.009, 8, 64), M.caliper); bridge.position.z = -0.03; calG.add(bridge);
  const padG = new THREE.Group(); brake.add(padG);
  for (const z of [0.0145, -0.0145 - 0.009]) {
    const p = new THREE.Mesh(ext(sec(0.124, 0.165, ca - span * 0.75, ca + span * 0.75), 0.009, 0.0012, 2, 48), M.pad); p.position.z = z; padG.add(p);
  }

  // ---------- состояние ----------
  const st = { az: 30, el: 6, rect: [0.1, 0.2, 0.9, 0.9], explode: 0, spin: 0, bg: '#0a0a0b', zoom: 1, focus: '' };
  function pose() {
    const e = st.explode;
    const ease = (a, b) => { const t = Math.min(1, Math.max(0, (e - a) / (b - a))); return t * t * (3 - 2 * t); };
    tireG.position.z = 0.56 * ease(0, 0.7);
    rimG.position.z = 0.3 * ease(0.1, 0.8);
    calG.position.set(0.03 * ease(0.25, 1), 0.04 * ease(0.25, 1), 0.08 * ease(0.25, 1));
    padG.position.z = 0.045 * ease(0.35, 1);
    for (const s of spinners) s.rotation.z = st.spin;
  }
  const anchors = {
    tire: () => new THREE.Vector3(Math.cos(200 * DEG) * 0.33, Math.sin(200 * DEG) * 0.33, tireG.position.z + 0.08),
    rim: () => new THREE.Vector3(Math.cos(-50 * DEG) * 0.17, Math.sin(-50 * DEG) * 0.17, rimG.position.z + 0.08),
    disc: () => new THREE.Vector3(Math.cos(-120 * DEG) * 0.15, Math.sin(-120 * DEG) * 0.15, brake.position.z + 0.014),
    caliper: () => new THREE.Vector3(Math.cos(ca) * 0.17 + calG.position.x, Math.sin(ca) * 0.17 + calG.position.y, brake.position.z + calG.position.z + 0.05),
  };

  // ---------- камера ----------
  let W = 1, H = 1;
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3();
  function fit() {
    const e = st.explode, R = 0.335;
    const z0 = -0.13, z1 = 0.13 + 0.56 * e;
    let i = 0;
    for (const sx of [-R, R]) for (const sy of [-R, R]) for (const sz of [z0, z1]) corners[i++].set(sx, sy, sz);
    center.set(0, 0, (z0 + z1) / 2);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, y0, x1, y1] = st.rect;
    camera.aspect = W / H; camera.clearViewOffset(); camera.updateProjectionMatrix();
    let lo = 0.1, hi = 20;
    for (let k = 0; k < 22; k++) {
      const d = (lo + hi) / 2;
      camera.position.copy(center).addScaledVector(dir, d); camera.lookAt(center); camera.updateMatrixWorld();
      let mx = 0, my = 0;
      for (const c of corners) { tmp.copy(c).project(camera); mx = Math.max(mx, Math.abs(tmp.x)); my = Math.max(my, Math.abs(tmp.y)); }
      if (mx <= (x1 - x0) && my <= (y1 - y0)) hi = d; else lo = d;
    }
    camera.position.copy(center).addScaledVector(dir, hi / st.zoom); camera.lookAt(center);
    camera.setViewOffset(W, H, -((x0 + x1) / 2 - 0.5) * W, -((y0 + y1) / 2 - 0.5) * H, W, H);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  }
  function resize() { const r = canvas.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); renderer.setSize(W, H, false); }
  addEventListener('resize', resize); resize();

  const base = new Map(all.map(m => [m, m.color.clone()]));
  const GROUPS = { tire: [M.rubber], rim: [M.rim, M.rimDark, M.steel], disc: [M.rotor, M.rotorEdge, M.hat], caliper: [M.caliper, M.pad] };
  function focus() {
    for (const m of all) m.color.copy(base.get(m)).multiplyScalar(!st.focus || (GROUPS[st.focus] || []).includes(m) ? 1 : 0.3);
  }
  function project(name) { const v = anchors[name]().project(camera); return { x: (v.x + 1) / 2 * W, y: (1 - v.y) / 2 * H }; }
  // Отражение в глянцевом тёмном полу: то же колесо вверх ногами под полом и
  // полупрозрачный пол поверх, который гасит отражение к краям — как в студии
  const FLOOR = -0.336;
  const floorScene = new THREE.Scene();
  const fadeTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, 'rgba(0,0,0,0.86)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.94)'); gr.addColorStop(1, 'rgba(0,0,0,1)');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  })();
  const floorMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0b, alphaMap: fadeTex, transparent: true, depthWrite: false, toneMapped: false });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR; floorScene.add(floor);
  renderer.autoClear = false;
  function render() {
    bg.set(st.bg); pose(); focus(); fit();
    renderer.setClearColor(bg, 1); renderer.clear();
    if (st.mirror !== false) {
      wheel.scale.y = -1; wheel.position.y = 2 * FLOOR;
      renderer.render(scene, camera);
      wheel.scale.y = 1; wheel.position.y = 0;
      floorMat.color.copy(bg);
      renderer.clearDepth();
      renderer.render(floorScene, camera);
    }
    renderer.render(scene, camera);
  }
  return { st, render, resize, project };
}
