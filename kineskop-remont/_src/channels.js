// Каналы: что чиним. Устройство на подиуме под лучом, крутится само и пальцем.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mulberry } from './tv.js';

export const CHANNELS = [
  { key: 'phone', model: null, fit: 1.6, tilt: -0.12, light: 1 },
  { key: 'laptop', model: 'laptop', fit: 1.9, tilt: 0.0, light: 0.4 },
  { key: 'tv', model: 'tv-old', fit: 1.6, tilt: 0.0, light: 0.8 },
  { key: 'console', model: 'console', fit: 1.6, tilt: 0.0, light: 0.7 },
  { key: 'audio', model: 'boombox', fit: 1.95, tilt: 0.0, light: 1 },
  { key: 'camera', model: 'camera', fit: 1.7, tilt: 0.0, light: 1.1 },
];

function crackedScreenTexture() {
  const w = 512, h = 1024;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#0b0d14'); grd.addColorStop(1, '#05060a');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  // время на заблокированном экране
  g.fillStyle = 'rgba(230,236,255,.85)';
  g.font = '300 120px "Literata", serif';
  g.textAlign = 'center';
  g.fillText('21:04', w / 2, 260);
  g.font = '28px "IBM Plex Mono", monospace';
  g.fillStyle = 'rgba(200,210,240,.6)';
  g.fillText('ЗАРЯД 3%', w / 2, 310);
  // трещины от точки удара
  const rnd = mulberry(7);
  const ox = w * 0.66, oy = h * 0.68;
  g.strokeStyle = 'rgba(235,240,255,.75)';
  g.lineCap = 'round';
  for (let i = 0; i < 17; i++) {
    let x = ox, y = oy, a = i / 17 * Math.PI * 2 + rnd() * 0.3;
    g.lineWidth = 1.2 + rnd() * 1.6;
    g.beginPath(); g.moveTo(x, y);
    const len = 200 + rnd() * 700;
    for (let s = 0; s < len; s += 24) {
      a += (rnd() - 0.5) * 0.5;
      x += Math.cos(a) * 24; y += Math.sin(a) * 24;
      g.lineTo(x, y);
      if (rnd() < 0.08) { g.moveTo(x, y); }
    }
    g.stroke();
  }
  // кольца вокруг удара
  for (let r = 18; r < 90; r += 22) {
    g.beginPath();
    for (let k = 0; k <= 14; k++) {
      const a = k / 14 * Math.PI * 2;
      const rr = r * (0.8 + rnd() * 0.4);
      const px = ox + Math.cos(a) * rr, py = oy + Math.sin(a) * rr;
      k ? g.lineTo(px, py) : g.moveTo(px, py);
    }
    g.lineWidth = 1; g.stroke();
  }
  g.fillStyle = 'rgba(255,255,255,.5)';
  g.beginPath(); g.arc(ox, oy, 7, 0, Math.PI * 2); g.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function roundedRect(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

// плоская деталь со скруглёнными углами и фаской, по центру по толщине
function slab(w, h, d, r, bevel) {
  const g = new THREE.ExtrudeGeometry(roundedRect(w - bevel * 2, h - bevel * 2, Math.max(0.001, r - bevel)), {
    depth: d - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 12,
  });
  g.translate(0, 0, -(d - bevel * 2) / 2);
  g.computeVertexNormals();
  return g;
}

function makePhone() {
  const grp = new THREE.Group();
  const W = 0.78, H = 1.62, D = 0.085;
  const body = new THREE.Mesh(slab(W, H, D, 0.12, 0.02), new THREE.MeshStandardMaterial({ color: 0x3a3d45, metalness: 0.9, roughness: 0.28 }));
  grp.add(body);
  const scr = new THREE.ShapeGeometry(roundedRect(W - 0.05, H - 0.05, 0.1), 12);
  // развёртка UV по габариту экрана
  const pos = scr.attributes.position, uv = scr.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / (W - 0.05) + 0.5, pos.getY(i) / (H - 0.05) + 0.5);
  const glass = new THREE.Mesh(scr, new THREE.MeshPhysicalMaterial({
    map: crackedScreenTexture(), roughness: 0.06, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04,
    emissive: 0xffffff, emissiveMap: null, emissiveIntensity: 0.0,
  }));
  glass.position.z = D / 2 + 0.002;
  grp.add(glass);
  const back = new THREE.Mesh(new THREE.ShapeGeometry(roundedRect(W - 0.05, H - 0.05, 0.1), 12), new THREE.MeshPhysicalMaterial({ color: 0x9a9da8, roughness: 0.22, metalness: 0.35, clearcoat: 1 }));
  back.position.z = -D / 2 - 0.002;
  back.rotation.y = Math.PI;
  grp.add(back);
  const bump = new THREE.Mesh(slab(0.32, 0.32, 0.03, 0.08, 0.008), new THREE.MeshStandardMaterial({ color: 0x1b1c20, metalness: 0.6, roughness: 0.35 }));
  bump.position.set(0.17, 0.58, -D / 2 - 0.015);
  grp.add(bump);
  [[0.1, 0.65], [0.24, 0.65], [0.1, 0.51]].forEach(([x, y]) => {
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.02, 24), new THREE.MeshStandardMaterial({ color: 0x050507, metalness: 0.9, roughness: 0.1 }));
    lens.rotation.x = Math.PI / 2;
    lens.position.set(x, y, -D / 2 - 0.035);
    grp.add(lens);
  });
  grp.rotation.x = -0.08;
  return grp;
}

export function createChannelScene({ loadModel }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 60);

  // фон: синий градиент снизу, как свет студии
  const bg = new THREE.Mesh(
    new THREE.SphereGeometry(30, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { uTop: { value: new THREE.Color(0x050509) }, uBot: { value: new THREE.Color(0x1d2a8f) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uTop; uniform vec3 uBot; varying vec3 vP; void main(){ float k = smoothstep(0.35, -0.25, vP.y); gl_FragColor = vec4(mix(uTop, uBot, k), 1.0); }',
    })
  );
  scene.add(bg);

  // подиум
  const deck = new THREE.Group();
  scene.add(deck);
  const plinth = new THREE.Mesh(
    new THREE.CylinderGeometry(1.45, 1.5, 0.16, 96),
    new THREE.MeshStandardMaterial({ color: 0x050608, metalness: 0.3, roughness: 0.5, envMapIntensity: 0.12 })
  );
  plinth.position.y = -0.08;
  deck.add(plinth);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.475, 0.006, 8, 160),
    new THREE.MeshBasicMaterial({ color: 0x9fb4ff })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.001;
  deck.add(ring);
  const holder = new THREE.Group();
  deck.add(holder);

  // точки-звёзды
  const rnd = mulberry(9);
  const N = 260, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const a = rnd() * Math.PI * 2, r = 4 + rnd() * 10;
    pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = rnd() * 7 - 1; pos[i * 3 + 2] = Math.sin(a) * r - 4;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.03, color: 0xbfcaff, transparent: true, opacity: 0.7, depthWrite: false })));

  // свет
  const key = new THREE.SpotLight(0xfff1de, 20, 14, 0.42, 0.55, 1.2);
  key.position.set(1.2, 5.5, 3.2);
  key.target = deck;
  scene.add(key);
  const rim = new THREE.SpotLight(0x7c8cff, 18, 14, 0.6, 0.6, 1.2);
  rim.position.set(-3, 2.5, -3.5);
  rim.target = deck;
  scene.add(rim);
  const front = new THREE.DirectionalLight(0xffffff, 0.3);
  front.position.set(0, 1.5, 5);
  scene.add(front);
  scene.add(new THREE.AmbientLight(0x30344a, 0.35));

  const items = new Array(CHANNELS.length).fill(null);
  const loading = new Array(CHANNELS.length).fill(null);

  function normalize(obj, fit) {
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const s = fit / Math.max(size.x, size.y, size.z);
    obj.scale.multiplyScalar(s);
    const box2 = new THREE.Box3().setFromObject(obj);
    const c = box2.getCenter(new THREE.Vector3());
    obj.position.x -= c.x; obj.position.z -= c.z; obj.position.y -= box2.min.y;
    const wrap = new THREE.Group();
    wrap.add(obj);
    return wrap;
  }

  function ensure(i) {
    if (items[i] || loading[i]) return loading[i];
    const ch = CHANNELS[i];
    if (!ch.model) {
      const ph = makePhone();
      const w = new THREE.Group();
      ph.scale.setScalar(0.9);
      ph.position.y = 0.86;
      w.add(ph);
      items[i] = w;
      return Promise.resolve(w);
    }
    loading[i] = loadModel(ch.model).then(g => {
      const obj = g.scene;
      obj.traverse(o => {
        if (!o.isMesh || !o.material) return;
        o.material.envMapIntensity = 0.45;
        // у приставки в материале свечение с силой в разы больше единицы — гасим
        if (o.material.emissiveIntensity > 0.6) o.material.emissiveIntensity = 0.6;
      });
      items[i] = normalize(obj, ch.fit);
      return items[i];
    });
    return loading[i];
  }

  let current = -1;
  let spin = 0, spinV = 0.25, drag = null;
  function show(i) {
    if (i === current) return;
    current = i;
    // светлым корпусам меньше верхнего света, иначе они горят белым
    const lk = CHANNELS[i].light ?? 1;
    key.intensity = 20 * lk;
    front.intensity = 0.3 * lk;
    holder.clear();
    const it = items[i];
    if (it) holder.add(it);
    else ensure(i).then(o => { if (current === i) { holder.clear(); holder.add(o); } });
    spin = -0.5;
  }

  function setAspect(aspect) {
    camera.aspect = aspect;
    camera.fov = aspect > 1.05 ? 30 : 42;
    camera.updateProjectionMatrix();
  }

  const camPos = new THREE.Vector3();
  function update(t, dt, { pointer, wide = true, inScreen = false }) {
    if (!drag) spin += dt * spinV;
    holder.rotation.y = spin;
    const px = pointer ? pointer.x : 0, py = pointer ? pointer.y : 0;
    if (wide) camPos.set(-1.15 + px * 0.25, 1.85 + py * 0.15, 6.4);
    else camPos.set(px * 0.15, 2.5 + py * 0.1, 8.6);
    camera.position.lerp(camPos, 1 - Math.pow(0.01, dt));
    camera.lookAt(wide ? -1.2 : 0, wide ? 0.85 : (inScreen ? 0.9 : 0.3), 0);
    ring.material.color.setHSL(0.63, 0.8, 0.72 + Math.sin(t * 2) * 0.06);
  }

  function dragStart(x) { drag = { x, s: spin }; }
  function dragMove(x) { if (drag) spin = drag.s + (x - drag.x) * 0.008; }
  function dragEnd() { drag = null; }

  return { scene, camera, update, show, ensure, setAspect, dragStart, dragMove, dragEnd, get current() { return current; } };
}
