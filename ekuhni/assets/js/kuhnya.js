// Кухня в браузере: корпус с цоколем, фасады с ручками, столешница, мойка со
// смесителем, варочная панель с духовым шкафом, навесные шкафы и пенал. Умеет
// разбираться на детали, менять стиль кухни и её длину. Камера сама вписывает
// гарнитур в заданную часть экрана.
import * as THREE from 'three';
import { RoomEnvironment } from '../lib/RoomEnvironment.js';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Стили кухни: названия — с их сайта, цвета фасадов и столешницы подбираются
// под каждый стиль, чтобы гарнитур читался с одного взгляда.
export const STILI = {
  modern:   { name: 'Модерн',     facade: 0xf1f0ec, top: 0xd6d3cc, body: 0xdad7d0, tile: 0xeae8e3, rough: 0.26 },
  minimal:  { name: 'Минимализм', facade: 0x53565a, top: 0x3d3e40, body: 0x5b5e62, tile: 0x55585c, rough: 0.42 },
  classic:  { name: 'Классика',   facade: 0xe7dec9, top: 0xcdc4b3, body: 0xe1d9c8, tile: 0xf0eadf, rough: 0.32 },
  provence: { name: 'Прованс',    facade: 0xa8bca9, top: 0xd8ceb9, body: 0xccd3c8, tile: 0xe5e7de, rough: 0.38 },
};

const PLINTH_H = 0.1;          // цоколь
const BODY_H = 0.72;           // корпус
const TOP_T = 0.04;            // столешница
const Y_TOP = PLINTH_H + BODY_H + TOP_T;   // уровень столешницы, 0.86 м
const UP_Y = 1.46;             // низ навесных шкафов
const UP_H = 0.6;
const UP_D = 0.34;             // глубина навесных шкафов
const FAC_T = 0.019;           // толщина фасада
const TALL_W = 0.55, TALL_H = 2.05;   // пенал слева
const MAXN = 6;                // сколько модулей в ряд

export function createKuhnya(canvas, { base = 'assets/tex/', onReady } = {}) {
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
  Object.assign(key.shadow.camera, { left: -3.4, right: 3.4, top: 3.4, bottom: -3.4, near: 0.5, far: 14 });
  scene.add(key);
  // Контровой свет сзади сверху: светлая полоска по краю столешницы, как на предметной съёмке
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
  // Стена за гарнитуром: цвет фона и мягкая тень сверху вниз, чтобы кухня стояла
  // в комнате, а не висела в листе
  const wallTex = (() => {
    const c = document.createElement('canvas'); c.width = 4; c.height = 256;
    const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.62, '#f6f4f1'); gr.addColorStop(1, '#e4e0da');
    g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xf4f3f0, map: wallTex, roughness: 0.96, metalness: 0 });
  const wall = new THREE.Mesh(new THREE.BoxGeometry(12, 3, 0.06), wallMat);
  wall.position.set(0, 1.5, 0);
  wall.receiveShadow = true;
  scene.add(wall);
  // Мягкое пятно под гарнитуром: контактная тень, которую не даёт карта теней
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

  // Пятно света под гарнитуром для тёмной сцены: кухня стоит «на сцене»
  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(256, 256, 0, 256, 256, 256);
    gr.addColorStop(0, 'rgba(255,236,214,0.20)'); gr.addColorStop(0.45, 'rgba(255,236,214,0.07)'); gr.addColorStop(1, 'rgba(255,236,214,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(c);
  })();
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(8, 5.5),
    new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, opacity: 0 }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.0005;
  scene.add(glow);

  // ---------- материалы ----------
  const loader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  let topTex = null;
  const loadTop = () => new Promise((res, rej) => {
    if (topTex) return res(topTex);
    loader.load(base + 'stoleshnica.jpg', t => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.anisotropy = Math.min(8, maxAniso);
      t.center.set(0.5, 0.5); t.rotation = Math.PI / 2; t.repeat.set(1 / 1.25, 1 / 1.25);
      t.colorSpace = THREE.SRGBColorSpace;
      topTex = t; res(t);
    }, undefined, rej);
  });
  // Белая текстура-подложка: фасады красятся цветом стиля, но им нужна карта,
  // чтобы смена стиля шла той же волной по гарнитуру, что и раньше.
  const whiteTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 4;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, 4, 4);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();

  // Материал со сменой цвета волной слева направо
  function sweepMat(opts) {
    const m = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, roughness: 0.35, metalness: 0,
      clearcoat: 0.4, clearcoatRoughness: 0.3, ...opts,
    });
    m.userData.u = {
      uMapB: { value: null }, uEdge: { value: -99 },
      uTintA: { value: new THREE.Color(1, 1, 1) }, uTintB: { value: new THREE.Color(1, 1, 1) }, uOn: { value: 0 },
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
  const matFacade = sweepMat({ map: whiteTex, clearcoat: 0.55, clearcoatRoughness: 0.16 });
  const matTop = sweepMat({ clearcoat: 0.25, roughness: 0.3 });
  const matBody = new THREE.MeshPhysicalMaterial({ color: 0xdad7d0, roughness: 0.62, metalness: 0 });
  const matTile = new THREE.MeshPhysicalMaterial({ color: 0xeae8e3, roughness: 0.3, clearcoat: 0.35 });
  const matPlinth = new THREE.MeshStandardMaterial({ color: 0x2e2e2c, roughness: 0.7 });
  const matMetal = new THREE.MeshStandardMaterial({ color: 0xd9dce0, metalness: 0.92, roughness: 0.24 });
  const matSteel = new THREE.MeshStandardMaterial({ color: 0x585c60, metalness: 0.85, roughness: 0.32 });
  const matGlass = new THREE.MeshPhysicalMaterial({ color: 0x111316, roughness: 0.08, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 });
  const matBurner = new THREE.MeshStandardMaterial({ color: 0x3a3d40, metalness: 0.6, roughness: 0.35 });

  // ---------- геометрия: единичные болванки, всё остальное масштабом ----------
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 24, 1);
  const S = { L: 2.2, W: 0.62 };
  const group = new THREE.Group();
  scene.add(group);
  const gBody = new THREE.Group(), gDoors = new THREE.Group(), gTop = new THREE.Group(),
        gUp = new THREE.Group(), gTall = new THREE.Group();
  group.add(gBody, gDoors, gTop, gUp, gTall);

  const part = (geo, mat, parent, x, y, z, sx, sy, sz, rot) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z); m.scale.set(sx, sy, sz);
    if (rot) m.rotation.set(rot[0] || 0, rot[1] || 0, rot[2] || 0);
    m.castShadow = true; m.receiveShadow = true;
    parent.add(m);
    return m;
  };
  const box = (mat, parent, x, y, z, sx, sy, sz, rot) => part(boxGeo, mat, parent, x, y, z, sx, sy, sz, rot);
  const cyl = (mat, parent, x, y, z, r, h, rot) => part(cylGeo, mat, parent, x, y, z, r, h, r, rot);

  // Постоянные детали гарнитура
  const carc = box(matBody, gBody, 0, 0, 0, 1, 1, 1);
  const plinth = box(matPlinth, gBody, 0, 0, 0, 1, 1, 1);
  const splash = box(matTile, gBody, 0, 0, 0, 1, 1, 1);
  const counter = box(matTop, gTop, 0, 0, 0, 1, 1, 1);
  const basin = box(matSteel, gTop, 0, 0, 0, 1, 1, 1);
  const rimA = box(matMetal, gTop, 0, 0, 0, 1, 1, 1);
  const rimB = box(matMetal, gTop, 0, 0, 0, 1, 1, 1);
  const tapUp = cyl(matMetal, gTop, 0, 0, 0, 0.012, 0.28);
  const tapOut = cyl(matMetal, gTop, 0, 0, 0, 0.012, 0.17, [Math.PI / 2, 0, 0]);
  const hob = box(matGlass, gTop, 0, 0, 0, 1, 1, 1);
  const burners = [[0.075, 0.06], [0.06, 0.075], [0.075, 0.06], [0.06, 0.075]].map(() => cyl(matBurner, gTop, 0, 0, 0, 0.075, 0.005));
  const hood = box(matMetal, gUp, 0, 0, 0, 1, 1, 1);
  const upBody = box(matBody, gUp, 0, 0, 0, 1, 1, 1);
  const tallBody = box(matBody, gTall, 0, 0, 0, 1, 1, 1);
  const tallDoors = [0, 1].map(() => box(matFacade, gTall, 0, 0, 0, 1, 1, 1));
  const tallHandle = box(matMetal, gTall, 0, 0, 0, 1, 1, 1);
  const ovenGlass = box(matGlass, gDoors, 0, 0, 0, 1, 1, 1);
  const ovenDrawer = box(matFacade, gDoors, 0, 0, 0, 1, 1, 1);
  const ovenHandle = box(matMetal, gDoors, 0, 0, 0, 1, 1, 1);
  // Модульные фасады: их число зависит от длины кухни, поэтому держим запас
  const modDoors = [], modHandles = [], upDoors = [], upHandles = [];
  for (let i = 0; i < MAXN; i++) {
    modDoors.push(box(matFacade, gDoors, 0, 0, 0, 1, 1, 1));
    modHandles.push(box(matMetal, gDoors, 0, 0, 0, 1, 1, 1));
    upDoors.push(box(matFacade, gUp, 0, 0, 0, 1, 1, 1));
    upHandles.push(box(matMetal, gUp, 0, 0, 0, 1, 1, 1));
  }

  // ---------- размеры ----------
  let n = 4, ovenI = 1, sinkI = 0, hobI = 1;
  let xs = [];
  function build(L, W) {
    S.L = L; S.W = W;
    n = clamp(Math.round(L / 0.55), 3, MAXN);
    const mw = L / n;
    xs = Array.from({ length: n }, (_, i) => -L / 2 + mw * (i + 0.5));
    sinkI = 0; hobI = Math.min(1, n - 1); ovenI = hobI;

    carc.position.set(0, PLINTH_H + BODY_H / 2, 0); carc.scale.set(L, BODY_H, W);
    plinth.position.set(0, PLINTH_H / 2, -0.03); plinth.scale.set(L - 0.02, PLINTH_H, W - 0.07);
    splash.position.set(0, Y_TOP + 0.29, -W / 2 + 0.008); splash.scale.set(L, 0.58, 0.016);

    counter.position.set(0, Y_TOP - TOP_T / 2, 0); counter.scale.set(L + 0.02, TOP_T, W + 0.02);

    const sx = xs[sinkI];
    basin.position.set(sx, Y_TOP - 0.05, 0.03); basin.scale.set(0.42, 0.11, 0.44);
    rimA.position.set(sx, Y_TOP + 0.004, 0.03); rimA.scale.set(0.46, 0.012, 0.03);
    rimB.position.set(sx, Y_TOP + 0.004, 0.03); rimB.scale.set(0.03, 0.012, 0.48);
    tapUp.position.set(sx, Y_TOP + 0.14, -W / 2 + 0.1);
    tapOut.position.set(sx, Y_TOP + 0.275, -W / 2 + 0.18);

    const hx = xs[hobI];
    hob.position.set(hx, Y_TOP + 0.006, 0.01); hob.scale.set(0.58, 0.012, 0.5);
    [[-0.14, -0.12], [0.14, -0.12], [-0.14, 0.13], [0.14, 0.13]].forEach(([dx, dz], k) => {
      const b = burners[k];
      b.position.set(hx + dx, Y_TOP + 0.013, 0.01 + dz);
      b.visible = true;
    });

    upBody.position.set(0, UP_Y + UP_H / 2, -W / 2 + UP_D / 2); upBody.scale.set(L, UP_H, UP_D);
    hood.position.set(hx, UP_Y - 0.012, -W / 2 + UP_D / 2); hood.scale.set(0.62, 0.02, UP_D);

    for (let i = 0; i < MAXN; i++) {
      const on = i < n && i !== ovenI;
      modDoors[i].visible = modHandles[i].visible = on;
      upDoors[i].visible = upHandles[i].visible = i < n;
      if (!on) continue;
      const x = xs[i];
      modDoors[i].position.set(x, PLINTH_H + BODY_H / 2, W / 2 + FAC_T / 2);
      modDoors[i].scale.set(mw - 0.012, BODY_H - 0.03, FAC_T);
      modHandles[i].position.set(x, PLINTH_H + BODY_H - 0.1, W / 2 + FAC_T + 0.02);
      modHandles[i].scale.set(0.14, 0.014, 0.016);
      upDoors[i].position.set(x, UP_Y + UP_H / 2, -W / 2 + UP_D + FAC_T / 2);
      upDoors[i].scale.set(mw - 0.012, UP_H - 0.02, FAC_T);
      upHandles[i].position.set(x, UP_Y + 0.09, -W / 2 + UP_D + FAC_T + 0.02);
      upHandles[i].scale.set(0.14, 0.014, 0.016);
    }
    // духовой шкаф встроен в модуль: стекло, ящик сверху и ручка
    const ox = xs[ovenI];
    ovenGlass.position.set(ox, PLINTH_H + 0.26, W / 2 + FAC_T / 2); ovenGlass.scale.set(mw - 0.05, 0.44, FAC_T);
    ovenDrawer.position.set(ox, PLINTH_H + 0.63, W / 2 + FAC_T / 2); ovenDrawer.scale.set(mw - 0.012, 0.19, FAC_T);
    ovenHandle.position.set(ox, PLINTH_H + 0.5, W / 2 + FAC_T + 0.022); ovenHandle.scale.set(0.32, 0.016, 0.016);

    const tx = -L / 2 - TALL_W / 2 - 0.01;
    tallBody.position.set(tx, TALL_H / 2, 0); tallBody.scale.set(TALL_W, TALL_H, W);
    tallDoors[0].position.set(tx, TALL_H - 0.66, W / 2 + FAC_T / 2); tallDoors[0].scale.set(TALL_W - 0.02, 1.3, FAC_T);
    tallDoors[1].position.set(tx, 0.46, W / 2 + FAC_T / 2); tallDoors[1].scale.set(TALL_W - 0.02, 0.72, FAC_T);
    tallHandle.position.set(tx + TALL_W / 2 - 0.06, 1.1, W / 2 + FAC_T + 0.02); tallHandle.scale.set(0.014, 0.3, 0.016);

    wall.position.set(-0.2, 1.6, -W / 2 - 0.04);
    blob.scale.set(L + TALL_W + 0.4, W * 1.9, 1);
    pose();
  }

  // ---------- состояние ----------
  const st = {
    az: 34, el: 16,                 // градусы
    rect: [0.1, 0.4, 0.9, 0.96],    // куда вписать гарнитур: x0 y0 x1 y1 от левого верхнего угла
    explode: 0, fitL: 0, zoom: 1,
    bg: '#f4f3f0', shadow: 0.13, blob: 1, glow: 0,
  };
  function pose() {
    const e = st.explode;
    const ease = (a, b) => { const t = clamp((e - a) / (b - a)); return t * t * (3 - 2 * t); };
    const eTop = ease(0, 0.72), eDoor = ease(0.1, 0.9), eUp = ease(0.22, 1);
    gTop.position.set(0, 0.46 * eTop, 0);
    gDoors.position.set(0, 0, 0.34 * eDoor);
    gUp.position.set(0, 0.3 * eUp, -0.05 * eUp);
    gTall.position.set(-0.24 * eUp, 0, 0);
    blob.material.opacity = 0.5 * (1 - 0.4 * e) * st.blob;
    glow.material.opacity = st.glow;
  }

  // Точки для подписей: середина детали в мире (с учётом разбора)
  const anchors = {
    counter: () => new THREE.Vector3(-S.L * 0.3, Y_TOP + gTop.position.y, S.W * 0.28),
    body:   () => new THREE.Vector3(S.L * 0.16, PLINTH_H + BODY_H + 0.01, S.W * 0.12),
    facade: () => new THREE.Vector3(xs[Math.min(2, n - 1)] + 0.02, PLINTH_H + BODY_H * 0.62, S.W / 2 + FAC_T + gDoors.position.z),
    tech:   () => new THREE.Vector3(xs[hobI], Y_TOP + 0.03 + gTop.position.y, S.W * 0.2),
    start:  () => new THREE.Vector3(-S.L / 2, 0.02, S.W / 2 + 0.06),
    end:    () => new THREE.Vector3(S.L / 2, 0.02, S.W / 2 + 0.06),
  };

  // ---------- камера: вписать гарнитур в прямоугольник экрана ----------
  let W = 1, H = 1;
  const corners = Array.from({ length: 8 }, () => new THREE.Vector3());
  const tmp = new THREE.Vector3(), center = new THREE.Vector3(), dir = new THREE.Vector3();
  function fit() {
    const e = st.explode;
    const x = (st.fitL || (S.L + TALL_W + 0.06)) / 2 + 0.24 * e;
    const z0 = -S.W / 2 - 0.08, z1 = S.W / 2 + 0.04 + 0.34 * e;
    const y1 = Math.max(TALL_H, UP_Y + UP_H) + 0.5 * e;
    let i = 0;
    for (const sx of [-x, x]) for (const sy of [0, y1]) for (const sz of [z0, z1]) corners[i++].set(sx, sy, sz);
    center.set(0, y1 / 2, 0);
    const az = st.az * DEG, el = st.el * DEG;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const [x0, y0r, x1, y1r] = st.rect;
    const hw = (x1 - x0), hh = (y1r - y0r);
    camera.aspect = W / H;
    camera.clearViewOffset();
    camera.updateProjectionMatrix();
    let lo = 0.3, hi = 60;
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
    wallMat.color.set(st.bg);
    floorMat.opacity = st.shadow;
    pose();
    fit();
    renderer.render(scene, camera);
  }

  // ---------- смена стиля волной ----------
  let sweeping = null;
  function applyStyle(id) {
    const p = STILI[id];
    matFacade.userData.u.uTintA.value.set(p.facade);
    matTop.userData.u.uTintA.value.set(p.top);
    matFacade.userData.u.uOn.value = matTop.userData.u.uOn.value = 0;
    matFacade.roughness = p.rough;
    matTop.roughness = p.rough + 0.04;
    matBody.color.set(p.body);
    matTile.color.set(p.tile);
    matPlinth.color.set(p.facade).multiplyScalar(0.16);
  }
  async function setStyle(id, { instant = false } = {}) {
    const p = STILI[id];
    if (!style || instant) {
      const t = await loadTop();
      matTop.map = t; matTop.needsUpdate = true;
      applyStyle(id);
      style = id;
      return;
    }
    if (style === id) return;
    if (sweeping) sweeping.kill?.();
    for (const m of [matFacade, matTop]) {
      m.userData.u.uMapB.value = m.map;
      m.userData.u.uTintB.value.set(m === matTop ? p.top : p.facade);
      m.userData.u.uOn.value = 1;
      m.userData.u.uEdge.value = -xEdge() - 0.3;
    }
    const o = { e: -xEdge() - 0.3 };
    await new Promise(res => {
      sweeping = window.gsap.to(o, { e: xEdge() + 0.3, duration: 1.15, ease: 'power2.inOut',
        onUpdate: () => { for (const m of [matFacade, matTop]) m.userData.u.uEdge.value = o.e; },
        onComplete: res });
    });
    applyStyle(id);
    style = id;
  }
  const xEdge = () => (st.fitL || (S.L + TALL_W + 0.06)) / 2 + 0.3;
  let style = null;

  build(S.L, S.W);
  const first = loadTop().then(t => {
    matTop.map = t; matTop.needsUpdate = true;
    applyStyle('modern');
    style = 'modern';
    onReady && onReady();
  }).catch(e => { applyStyle('modern'); style = 'modern'; throw e; });

  return {
    st, render, resize, setStyle, ready: first,
    setSize: (L, Wd) => build(L, Wd ?? S.W), size: S, project,
    get style() { return style; },
    snapshot: () => { render(); return canvas.toDataURL('image/jpeg', 0.86); },
  };
}