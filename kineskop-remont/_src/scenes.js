// Сцены ниже по странице: мастерская (плата под лампой), гарантия (золотые часы),
// связь (рация с волнами). Модели грузятся, когда до сцены остаётся экран.
import * as THREE from 'three';
import { mulberry } from './tv.js';
import { makeGrungeTexture } from './textures.js';

function fit(obj, size) {
  const box = new THREE.Box3().setFromObject(obj);
  const s = size / Math.max(...box.getSize(new THREE.Vector3()).toArray());
  obj.scale.multiplyScalar(s);
  const b2 = new THREE.Box3().setFromObject(obj);
  const c = b2.getCenter(new THREE.Vector3());
  obj.position.sub(new THREE.Vector3(c.x, b2.min.y, c.z));
  const g = new THREE.Group();
  g.add(obj);
  return g;
}

// луч света: конус с мягкими краями, складывается со сценой
function beam(color, h, r, opacity) {
  const geo = new THREE.ConeGeometry(r, h, 48, 1, true);
  geo.translate(0, -h / 2, 0);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity }, uH: { value: h } },
    vertexShader: 'varying vec3 vP; varying vec3 vN; varying vec3 vV; void main(){ vP = position; vec4 mv = modelViewMatrix*vec4(position,1.0); vV = normalize(-mv.xyz); vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*mv; }',
    fragmentShader: 'uniform vec3 uColor; uniform float uOpacity; uniform float uH; varying vec3 vP; varying vec3 vN; varying vec3 vV; void main(){ float along = clamp(-vP.y/uH, 0.0, 1.0); float edge = pow(abs(dot(normalize(vN), normalize(vV))), 1.5); gl_FragColor = vec4(uColor * uOpacity * edge * (1.0 - along) * smoothstep(0.0, 0.08, along), 1.0); }',
  });
  return new THREE.Mesh(geo, mat);
}

export function createWorkshop({ loadModel }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0806);
  scene.fog = new THREE.FogExp2(0x0a0806, 0.09);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.02, 50);

  const grunge = makeGrungeTexture(512, 21);
  grunge.repeat.set(7, 7);
  const table = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 14),
    new THREE.MeshStandardMaterial({ color: 0x100b07, roughness: 0.7, metalness: 0.0, roughnessMap: grunge, bumpMap: grunge, bumpScale: 0.25, envMapIntensity: 0.25 })
  );
  table.rotation.x = -Math.PI / 2;
  scene.add(table);

  const lamp = new THREE.SpotLight(0xffd7a3, 16, 12, 0.42, 0.7, 1.3);
  lamp.position.set(-1.6, 4.2, 1.2);
  scene.add(lamp);
  scene.add(lamp.target);
  const cool = new THREE.DirectionalLight(0x7f98ff, 0.25);
  cool.position.set(4, 2, -3);
  scene.add(cool);
  scene.add(new THREE.AmbientLight(0x3b2f26, 0.18));
  const b = beam(0xffd2a0, 4.6, 1.7, 0.018);
  b.position.copy(lamp.position);
  b.lookAt(0, 0, 0);
  b.rotateX(Math.PI / 2);
  scene.add(b);

  const holder = new THREE.Group();
  scene.add(holder);
  // пылинки в луче лампы
  const rnd = mulberry(5);
  const N = 300, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = (rnd() - 0.5) * 3 - 0.6; pos[i * 3 + 1] = rnd() * 3.5; pos[i * 3 + 2] = (rnd() - 0.5) * 3; }
  const dg = new THREE.BufferGeometry();
  dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(dg, new THREE.PointsMaterial({ size: 0.012, color: 0xffe0b0, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending })));

  let ready = null;
  function load() {
    if (ready) return ready;
    ready = Promise.all([loadModel('board'), loadModel('multimeter')]).then(([board, meter]) => {
      const bo = fit(board.scene, 2.6);
      bo.rotation.y = 0.35;
      holder.add(bo);
      const me = fit(meter.scene, 1.05);
      me.position.set(1.75, 0, -0.55);
      me.rotation.y = -0.6;
      holder.add(me);
      lamp.target = bo;
    });
    return ready;
  }

  const cp = new THREE.Vector3();
  function update(t, dt, { p = 0, pointer, wide = true }) {
    // камера медленно проезжает над платой
    const k = THREE.MathUtils.smoothstep(p, 0, 1);
    if (wide) cp.set(-2.2 + k * 2.2, 1.7 - k * 0.35, 3.6 - k * 0.9);
    else cp.set(-0.9 + k * 0.9, 2.6 - k * 0.4, 4.8 - k * 1.0);
    if (pointer) { cp.x += pointer.x * 0.15; cp.y += pointer.y * 0.08; }
    camera.position.lerp(cp, 1 - Math.pow(0.02, dt));
    camera.lookAt(0.3, 0.15, 0);
    const arr = dg.attributes.position.array;
    for (let i = 0; i < N; i++) { arr[i * 3 + 1] += dt * 0.02; if (arr[i * 3 + 1] > 3.5) arr[i * 3 + 1] = 0; }
    dg.attributes.position.needsUpdate = true;
    lamp.intensity = 16 * (1 + Math.sin(t * 31) * 0.01);
  }
  function setAspect(a) { camera.aspect = a; camera.fov = a > 1.05 ? 34 : 46; camera.updateProjectionMatrix(); }
  return { scene, camera, update, setAspect, load };
}

export function createWatch({ loadModel }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050403);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 40);
  const key = new THREE.SpotLight(0xffe2a8, 9, 10, 0.35, 0.5, 1.2);
  key.position.set(0, 4.5, 0.6);
  scene.add(key);
  scene.add(key.target);
  const rim1 = new THREE.PointLight(0xff9b4a, 2.2, 6, 1.6);
  rim1.position.set(-1.6, 0.6, -1.2);
  scene.add(rim1);
  const rim2 = new THREE.PointLight(0xfff0d0, 1.6, 6, 1.6);
  rim2.position.set(1.8, 1.2, 1.4);
  scene.add(rim2);
  scene.add(new THREE.AmbientLight(0x2a2016, 0.6));
  const b = beam(0xffd690, 5.2, 0.9, 0.0);
  b.position.set(0, 4.6, -0.6);
  scene.add(b);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(4, 64), new THREE.MeshStandardMaterial({ color: 0x0d0a07, roughness: 0.35, metalness: 0.2 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.9;

  // искры
  const rnd = mulberry(77);
  const N = 220, pos = new Float32Array(N * 3), sp = new Float32Array(N);
  for (let i = 0; i < N; i++) { const a = rnd() * Math.PI * 2, r = 0.6 + rnd() * 2.4; pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = rnd() * 3 - 0.9; pos[i * 3 + 2] = Math.sin(a) * r; sp[i] = 0.1 + rnd() * 0.3; }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const sparks = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.022, color: 0xffd58a, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(sparks);

  const holder = new THREE.Group();
  holder.position.y = 0.25;
  scene.add(holder);
  key.target = holder;
  let ready = null;
  function load() {
    if (ready) return ready;
    ready = loadModel('watch').then(g => {
      const o = g.scene;
      o.traverse(m => {
        if (!m.isMesh) return;
        const mat = m.material;
        if (mat.name && mat.name.includes('glass')) { mat.envMapIntensity = 1.2; return; }
        mat.color = new THREE.Color(0xffc870);
        mat.metalness = 1;
        mat.roughness = Math.min(mat.roughness ?? 0.3, 0.28);
        mat.envMapIntensity = 1.6;
      });
      const w = fit(o, 2.0);
      w.rotation.x = Math.PI / 2 - 0.25;
      const piv = new THREE.Group();
      w.position.y = -0.3;
      piv.add(w);
      holder.add(piv);
    });
    return ready;
  }
  const cp = new THREE.Vector3();
  function update(t, dt, { p = 0, pointer, wide = true }) {
    // покачивается, но циферблат почти всегда к зрителю
    holder.rotation.y = Math.sin(t * 0.55) * 0.55 + (p - 0.5) * 0.8;
    holder.rotation.z = Math.sin(t * 0.4) * 0.08;
    holder.position.y = 0.25 + Math.sin(t * 1.1) * 0.06 + (1 - THREE.MathUtils.smoothstep(p, 0, 0.3)) * -0.45;
    const reveal = 0.55 + 0.45 * THREE.MathUtils.smoothstep(p, 0.0, 0.3);
    key.intensity = 9 * reveal;
    b.material.uniforms.uOpacity.value = 0.012 * reveal;
    if (wide) cp.set(-1.25 + (pointer ? pointer.x * 0.15 : 0), 0.45 + (pointer ? pointer.y * 0.08 : 0), 4.4);
    else cp.set(0, 0.6, 6.0);
    camera.position.lerp(cp, 1 - Math.pow(0.02, dt));
    camera.lookAt(wide ? -1.05 : 0, wide ? 0.2 : -0.35, 0);
    const arr = sg.attributes.position.array;
    for (let i = 0; i < N; i++) { arr[i * 3 + 1] += dt * sp[i]; if (arr[i * 3 + 1] > 2.2) arr[i * 3 + 1] = -0.9; }
    sg.attributes.position.needsUpdate = true;
  }
  function setAspect(a) { camera.aspect = a; camera.fov = a > 1.05 ? 30 : 40; camera.updateProjectionMatrix(); }
  return { scene, camera, update, setAspect, load };
}

export function createRadio({ loadModel }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x060807);
  scene.fog = new THREE.FogExp2(0x060807, 0.07);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.02, 50);
  const grunge = makeGrungeTexture(512, 33);
  grunge.repeat.set(4, 4);
  const desk = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), new THREE.MeshStandardMaterial({ color: 0x1c1f1a, roughness: 0.7, roughnessMap: grunge, bumpMap: grunge, bumpScale: 0.5 }));
  desk.rotation.x = -Math.PI / 2;
  scene.add(desk);
  const key = new THREE.SpotLight(0xfff0d8, 16, 12, 0.5, 0.6, 1.2);
  key.position.set(2.6, 4.2, 2.6);
  scene.add(key);
  scene.add(key.target);
  const green = new THREE.PointLight(0x7dff9a, 2.5, 5, 1.5);
  green.position.set(-0.8, 1.2, 1.4);
  scene.add(green);
  const back = new THREE.SpotLight(0x8fa6ff, 10, 12, 0.6, 0.7, 1.3);
  back.position.set(-3, 2.5, -3);
  scene.add(back);
  scene.add(back.target);
  scene.add(new THREE.AmbientLight(0x252a26, 0.25));

  const holder = new THREE.Group();
  scene.add(holder);
  key.target = holder;
  back.target = holder;

  // радиоволны от антенны
  const waves = [];
  const waveMat = () => new THREE.MeshBasicMaterial({ color: 0x9dffb0, transparent: true, opacity: 0.0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  const antenna = new THREE.Group();
  scene.add(antenna);
  for (let i = 0; i < 5; i++) {
    const w = new THREE.Mesh(new THREE.TorusGeometry(1, 0.006, 6, 120), waveMat());
    antenna.add(w);
    waves.push(w);
  }

  let ready = null;
  function load() {
    if (ready) return ready;
    ready = loadModel('radio').then(g => {
      const r = fit(g.scene, 2.9);
      r.rotation.y = -0.5;
      holder.add(r);
      const box = new THREE.Box3().setFromObject(r);
      antenna.position.set(box.min.x + 0.32, box.max.y - 0.05, box.min.z + 0.5);
    });
    return ready;
  }
  const cp = new THREE.Vector3();
  function update(t, dt, { p = 0, pointer, wide = true }) {
    waves.forEach((w, i) => {
      const k = ((t * 0.35 + i / waves.length) % 1);
      w.scale.setScalar(0.05 + k * 0.42);
      w.material.opacity = Math.sin(k * Math.PI) * 0.45;
    });
    green.intensity = 2.5 + Math.sin(t * 7) * 0.5;
    antenna.visible = wide;
    if (wide) cp.set(-1.9 + (pointer ? pointer.x * 0.2 : 0), 2.0 + (pointer ? pointer.y * 0.1 : 0), 6.3 - p * 0.6);
    else cp.set(0, 2.6, 7.6 - p * 0.6);
    camera.position.lerp(cp, 1 - Math.pow(0.02, dt));
    camera.lookAt(wide ? -1.6 : 0, wide ? 1.0 : 1.4, 0);
  }
  function setAspect(a) { camera.aspect = a; camera.fov = a > 1.05 ? 32 : 42; camera.updateProjectionMatrix(); }
  return { scene, camera, update, setAspect, load };
}
