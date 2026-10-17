// Кухонный остров в браузере: столешница, царга и четыре опоры из настоящих текстур
// шпона (Poly Haven, CC0). Умеет разбираться на детали, менять декор волной
// и менять длину. Камера сама вписывает стол в заданную часть экрана.
import * as THREE from 'three';
import { RoomEnvironment } from '../lib/RoomEnvironment.js';

const DEG = Math.PI / 180;

export const PORODY = {
  dub:    { tint: 0xffffff, rough: 0.62, name: 'Дуб натуральный' },
  oreh:   { tint: 0xcf9a76, rough: 0.5, name: 'Орех' },
  yasen:  { tint: 0xfff6ec, rough: 0.66, name: 'Ясень' },
  moreny: { tint: 0x8e7f74, rough: 0.5,  name: 'Графит' },
};

export function createStol(canvas, { base = 'assets/tex/', onReady } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const phone = matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.75 : 2));
  // Программный рендер (безголовый браузер, старый ноутбук без видеокарты): кадр
  // в разы дороже, поэтому без ретины и с тенью попроще — иначе прокрутка встаёт
  const soft = (() => {
    const gl = renderer.getContext(), d = gl.getExtension('WEBGL_debug_renderer_info');
    return !!d && /swiftshader|llvmpipe|software/i.test(gl.getParameter(d.UNMASKED_RENDERER_WEBGL) || '');
  })();
  if (soft) renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  const bg = new THREE.Color(0xf4f3f0);
  scene.background = bg;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.75;

  const camera = new THREE.PerspectiveCamera(26, 1, 0.05, 60);

  const key = new THREE.DirectionalLight(0xfff4e6, 2.1);
  key.position.set(-1.4, 6.5, 2.4);
  key.castShadow = true;
  key.shadow.mapSize.set(soft ? 1024 : 2048, soft ? 1024 : 2048);
  key.shadow.radius = soft ? 11 : 22;
  key.shadow.blurSamples = soft ? 8 : 20;
  key.shadow.bias = -0.0004;
  Object.assign(key.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: 0.5, far: 14 });
  scene.add(key);
  // Контровой свет сзади сверху: светлая кромка по краю столешницы, как на предметной съёмке
  const rim = new THREE.DirectionalLight(0xfff1e0, 1.25);
  rim.position.set(1.5, 3.2, -4.5);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xe8eefc, 0.55);
  fill.position.set(3.5, 2.2, -2.5);
  scene.add(fill);

  // Пол: ловит только тень, сам цвета фона
  const floorMat = new THREE.ShadowMaterial({ opacity: 0.13 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  // Мягкое пятно под столом: контактная тень, которую не даёт карта теней
  const blobTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, 'rgba(0,0,0,0.42)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.16)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  })();
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, opacity: 0.5 }));
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.001;
  scene.add(blob);

  // Пятно света под столом для тёмной сцены: стол стоит «на сцене»
  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(256, 256, 0, 256, 256, 256);
    gr.addColorStop(0, 'rgba(255,236,214,0.20)'); gr.addColorStop(0.45, 'rgba(255,236,214,0.07)'); gr.addColorStop(1, 'rgba(255,236,214,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(c);
  })();
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(7, 5),
    new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, opacity: 0 }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.0005;
  scene.add(glow);

  // ---------- текстуры ----------
  const loader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const cache = {};
  function loadWood(id) {
    if (cache[id]) return cache[id];
    const one = (suf, srgb) => new Promise((res, rej) => loader.load(base + id + suf + '.jpg', t => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.anisotropy = Math.min(8, maxAniso);
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      res(t);
    }, undefined, rej));
    cache[id] = Promise.all([one('', true), one('-n', false), one('-r', false)])
      .then(([map, nor, rough]) => ({ id, map, nor, rough }));
    return cache[id];
  }
  // Для каждой детали своё направление волокна и масштаб
  const PARTS = {
    top:   { rot: Math.PI / 2, rep: [1 / 1.25, 1 / 1.25] },   // UV в метрах, волокно вдоль длины
    leg:   { rot: 0, rep: [0.35, 0.9] },                     // волокно вдоль ножки
    apron: { rot: Math.PI / 2, rep: [0.12, 1.4] },
  };
  function partTex(t, part) {
    const c = t.clone();
    c.center.set(0.5, 0.5); c.rotation = PARTS[part].rot; c.repeat.set(...PARTS[part].rep);
    c.needsUpdate = true;
    return c;
  }

  // ---------- материал с волной смены породы ----------
  function woodMaterial(part) {
    const m = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, roughness: 0.6, metalness: 0,
      clearcoat: 0.3, clearcoatRoughness: 0.42,
      normalScale: new THREE.Vector2(0.55, 0.55),
    });
    m.userData.part = part;
    m.userData.u = {
      uMapB: { value: null }, uEdge: { value: -99 }, uTintA: { value: new THREE.Color(1, 1, 1) },
      uTintB: { value: new THREE.Color(1, 1, 1) }, uOn: { value: 0 },
    };
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, m.userData.u);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
        .replace('#include <fog_vertex>', '#include <fog_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform sampler2D uMapB;\nuniform float uEdge;\nuniform float uOn;\nuniform vec3 uTintA;\nuniform vec3 uTintB;')
        .replace('#include <map_fragment>', `
          #ifdef USE_MAP
            vec4 tA = texture2D(map, vMapUv);
            vec3 cA = tA.rgb * uTintA;
            vec3 col = cA;
            if (uOn > 0.5) {
              vec3 cB = texture2D(uMapB, vMapUv).rgb * uTintB;
              float k = 1.0 - smoothstep(uEdge - 0.09, uEdge + 0.09, vWPos.x);
              col = mix(cA, cB, k);
              float glow = exp(-pow((vWPos.x - uEdge) / 0.035, 2.0));
              col += glow * 0.22 * vec3(1.0, 0.93, 0.82);
            }
            diffuseColor.rgb *= col;
          #endif`);
    };
    return m;
  }
  const mats = { top: woodMaterial('top'), leg: woodMaterial('leg'), apron: woodMaterial('apron') };
  let wood = null;
  function applyWood(w, instant) {
    const p = PORODY[w.id];
    for (const [part, m] of Object.entries(mats)) {
      m.map = partTex(w.map, part); m.normalMap = partTex(w.nor, part); m.roughnessMap = partTex(w.rough, part);
      m.roughness = p.rough;
      m.userData.u.uTintA.value.set(p.tint);
      m.userData.u.uOn.value = 0;
      m.needsUpdate = true;
    }
    wood = w;
  }

  // ---------- геометрия ----------
  const S = { L: 2.2, W: 0.95, H: 0.75, T: 0.04 };
  const group = new THREE.Group();
  scene.add(group);
  const top = new THREE.Mesh(undefined, mats.top);
  const aprons = [0, 1, 2, 3].map(() => new THREE.Mesh(undefined, mats.apron));
  const legGeo = (() => {
    const h = S.H - S.T - 0.004;
    const g = new THREE.CylinderGeometry(0.031, 0.019, h, 48, 1);
    g.translate(0, -h / 2, 0);   // начало ножки у столешницы
    return g;
  })();
  const legs = [0, 1, 2, 3].map(() => new THREE.Mesh(legGeo, mats.leg));
  for (const m of [top, ...aprons, ...legs]) { m.castShadow = true; m.receiveShadow = true; group.add(m); }

  function topGeo(L, W) {
    const r = 0.035, b = 0.006, x = L / 2, y = W / 2;
    const s = new THREE.Shape();
    s.moveTo(-x + r, -y); s.lineTo(x - r, -y); s.quadraticCurveTo(x, -y, x, -y + r);
    s.lineTo(x, y - r); s.quadraticCurveTo(x, y, x - r, y); s.lineTo(-x + r, y);
    s.quadraticCurveTo(-x, y, -x, y - r); s.lineTo(-x, -y + r); s.quadraticCurveTo(-x, -y, -x + r, -y);
    const g = new THREE.ExtrudeGeometry(s, { depth: S.T - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 4, curveSegments: 10 });
    g.rotateX(-Math.PI / 2);
    g.translate(0, b, 0);
    return g;
  }
  const apronH = 0.075, apronT = 0.022;
  let base0 = [];
  function build(L, W) {
    S.L = L; S.W = W;
    if (top.geometry) top.geometry.dispose();
    top.geometry = topGeo(L, W);
    const lx = L / 2 - 0.17, lz = W / 2 - 0.12;
    const yA = S.H - S.T - apronH / 2;
    const dims = [[2 * lx, lz, 0], [2 * lx, -lz, 0], [2 * lz, lx, 1], [2 * lz, -lx, 1]];
    dims.forEach(([len, off, side], i) => {
      if (aprons[i].geometry) aprons[i].geometry.dispose();
      aprons[i].geometry = new THREE.BoxGeometry(len, apronH, apronT);
      aprons[i].userData.base = side ? { p: [off, yA, 0], r: [0, Math.PI / 2, 0], out: [Math.sign(off), 0, 0] }
                                     : { p: [0, yA, off], r: [0, 0, 0], out: [0, 0, Math.sign(off)] };
    });
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz], i) => {
      legs[i].userData.base = { p: [sx * lx, S.H - S.T, sz * lz], r: [-sz * 4 * DEG, 0, sx * 4 * DEG], out: [sx, 0, sz] };
    });
    top.userData.base = { p: [0, S.H - S.T, 0], r: [0, 0, 0] };
    blob.scale.set(L * 1.25, W * 1.7, 1);
    pose();
  }

  // ---------- состояние ----------
  const st = {
    az: 34, el: 16,                 // градусы
    rect: [0.1, 0.4, 0.9, 0.96],    // куда вписать стол: x0 y0 x1 y1 от левого верхнего угла
    explode: 0, fitL: 0, zoom: 1,
    bg: '#f4f3f0', shadow: 0.13, blob: 1, glow: 0,
  };
  function pose() {
    const e = st.explode;
    const ease = (a, b) => { const t = Math.min(1, Math.max(0, (e - a) / (b - a))); return t * t * (3 - 2 * t); };
    const eTop = ease(0, 0.75), eAp = ease(0.12, 0.9), eLeg = ease(0.25, 1);
    const tb = top.userData.base;
    top.position.set(tb.p[0], tb.p[1] + 0.5 * eTop, tb.p[2]);
    top.rotation.set(0, 0, 0);
    for (const a of aprons) {
      const b = a.userData.base; if (!b) continue;
      a.position.set(b.p[0], b.p[1] + 0.21 * eAp, b.p[2]);
      a.rotation.set(...b.r);
    }
    for (const l of legs) {
      const b = l.userData.base; if (!b) continue;
      l.position.set(b.p[0] + b.out[0] * 0.07 * eLeg, b.p[1], b.p[2] + b.out[2] * 0.06 * eLeg);
      l.rotation.set(b.r[0], 0, b.r[2]);
    }
    blob.material.opacity = 0.5 * (1 - 0.5 * e) * st.blob;
    glow.material.opacity = st.glow;
  }

  // Точки для подписей: середина детали в мире
  const anchors = {
    top:   () => new THREE.Vector3(-S.L * 0.3, top.position.y + S.T, 0),
    apron: () => aprons[0].position.clone().add(new THREE.Vector3(-S.L * 0.18, 0, 0.012)),
    leg:   () => legs[2].position.clone().add(new THREE.Vector3(-0.012, -0.36, 0.012)),
    oil:   () => new THREE.Vector3(S.L / 2 - 0.08, top.position.y + S.T, S.W / 2 - 0.08),
    end:   () => new THREE.Vector3(S.L / 2, 0.02, S.W / 2 + 0.08),
    start: () => new THREE.Vector3(-S.L / 2, 0.02, S.W / 2 + 0.08),
  };

  // ---------- камера: вписать стол в прямоугольник экрана ----------
  let W = 1, H = 1;
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3();
  function fit() {
    const L = st.fitL || S.L, e = st.explode;
    const x = L / 2 + 0.07 * e, z = S.W / 2 + 0.06 * e, y0 = 0, y1 = S.H + 0.5 * e;
    let i = 0;
    for (const sx of [-x, x]) for (const sy of [y0, y1]) for (const sz of [-z, z]) corners[i++].set(sx, sy, sz);
    center.set(0, (y0 + y1) / 2, 0);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, y0r, x1, y1r] = st.rect;
    const hw = (x1 - x0), hh = (y1r - y0r);
    camera.aspect = W / H;
    camera.clearViewOffset();
    camera.updateProjectionMatrix();
    let lo = 0.3, hi = 40;
    for (let k = 0; k < 22; k++) {
      const d = (lo + hi) / 2;
      camera.position.copy(center).addScaledVector(dir, d);
      camera.lookAt(center);
      camera.updateMatrixWorld();
      let mx = 0, my = 0;
      for (const c of corners) { tmp.copy(c).project(camera); mx = Math.max(mx, Math.abs(tmp.x)); my = Math.max(my, Math.abs(tmp.y)); }
      if (mx <= hw && my <= hh) hi = d; else lo = d;
    }
    const d = hi / st.zoom;
    camera.position.copy(center).addScaledVector(dir, d);
    camera.lookAt(center);
    const cx = (x0 + x1) / 2, cy = (y0r + y1r) / 2;
    camera.setViewOffset(W, H, -(cx - 0.5) * W, -(cy - 0.5) * H, W, H);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    renderer.setSize(W, H, false);
  }
  addEventListener('resize', resize);
  resize();

  function project(name) {
    const v = anchors[name]().project(camera);
    return { x: (v.x + 1) / 2 * W, y: (1 - v.y) / 2 * H, z: v.z };
  }

  function render() {
    bg.set(st.bg);
    floorMat.opacity = st.shadow;
    pose();
    fit();
    renderer.render(scene, camera);
  }

  // ---------- смена породы волной ----------
  let sweeping = null;
  async function setWood(id, { instant = false } = {}) {
    const w = await loadWood(id);
    if (!wood || instant) { applyWood(w); return; }
    if (wood.id === id) return;
    if (sweeping) sweeping.kill?.();
    const p = PORODY[id];
    for (const m of Object.values(mats)) {
      m.userData.u.uMapB.value = partTex(w.map, m.userData.part);
      m.userData.u.uTintB.value.set(p.tint);
      m.userData.u.uOn.value = 1;
      m.userData.u.uEdge.value = -S.L / 2 - 0.3;
    }
    const o = { e: -S.L / 2 - 0.3 };
    await new Promise(res => {
      sweeping = window.gsap.to(o, { e: S.L / 2 + 0.3, duration: 1.15, ease: 'power2.inOut',
        onUpdate: () => { for (const m of Object.values(mats)) m.userData.u.uEdge.value = o.e; },
        onComplete: res });
    });
    applyWood(w);
  }

  build(S.L, S.W);
  const first = loadWood('dub').then(w => { applyWood(w); onReady && onReady(); });

  return {
    st, render, resize, setWood, preload: (id) => loadWood(id), ready: first,
    setSize: (L, Wd) => build(L, Wd ?? S.W), size: S, project,
    get wood() { return wood && wood.id; },
    snapshot: () => { render(); return canvas.toDataURL('image/jpeg', 0.86); },
  };
}
