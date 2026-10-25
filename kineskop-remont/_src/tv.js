// Первая сцена: телевизор в дыму, светит своим экраном.
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { makeScreen } from './screen.js';
import { makeSmokeTexture, makeGrungeTexture } from './textures.js';

// Стекло экрана в координатах модели television_02 (Poly Haven), подобрано по снимку спереди.
export const GLASS = { cx: -0.003, cy: 0.249, w: 0.312, h: 0.25, z: 0.107 };
const S = 5; // масштаб модели: телевизор около двух метров в ширину сцены

export function createTvScene({ tvGltf, testTex, chanTex, osdTex, mobile = false }) {
  RectAreaLightUniformsLib.init();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07060a);
  scene.fog = new THREE.FogExp2(0x0a080e, 0.085);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 80);

  const rig = new THREE.Group();
  scene.add(rig);
  const tv = tvGltf.scene;
  tv.scale.setScalar(S);
  tv.traverse(o => {
    if (o.isMesh) {
      o.castShadow = false;
      o.material.envMapIntensity = 0.25;
      o.material.roughness = Math.min(1, (o.material.roughness ?? 1) * 1.0);
    }
  });
  rig.add(tv);

  // стекло модели выпуклое: в центре на 0,016 впереди краёв, наш кинескоп выпуклее с запасом
  const screen = makeScreen({ width: GLASS.w * S, height: GLASS.h * S, bulge: 0.016 * S + 0.014, test: testTex, chan: chanTex, osd: osdTex });
  screen.position.set(GLASS.cx * S, GLASS.cy * S, GLASS.z * S + 0.006);
  rig.add(screen);

  // свет от экрана: прямоугольник перед стеклом
  const screenLight = new THREE.RectAreaLight(0x9fb6ff, 6, GLASS.w * S * 1.05, GLASS.h * S * 1.05);
  screenLight.position.copy(screen.position).add(new THREE.Vector3(0, 0, 0.05));
  screenLight.lookAt(screenLight.position.clone().add(new THREE.Vector3(0, -0.15, 1)));
  rig.add(screenLight);

  // тёплый контровой свет сзади слева и холодная подсветка справа
  const rim = new THREE.SpotLight(0xffb27a, 14, 14, 0.5, 0.6, 1.4);
  rim.position.set(-3.2, 3.6, -3.4);
  rim.target = tv;
  scene.add(rim);
  const fill = new THREE.SpotLight(0x8a9cff, 4, 12, 0.55, 0.8, 1.5);
  fill.position.set(3.8, 2.4, 2.6);
  fill.target = tv;
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0x2a2433, 0.25));

  // пол: тёмный, пятнистый, блестит там, где падает свет экрана
  const grunge = makeGrungeTexture();
  grunge.repeat.set(5, 5);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({ color: 0x0d0b10, roughness: 0.5, metalness: 0.0, roughnessMap: grunge, bumpMap: grunge, bumpScale: 0.6 })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
  // задник-циклорама
  const back = new THREE.Mesh(
    new THREE.CylinderGeometry(11, 11, 14, 48, 1, true, Math.PI * 0.6, Math.PI * 0.8),
    new THREE.MeshStandardMaterial({ color: 0x120f16, roughness: 0.95, side: THREE.BackSide, roughnessMap: grunge })
  );
  back.position.set(0, 6.5, 2);
  scene.add(back);

  // дым: полупрозрачные листы, медленно крутятся
  const smokeTex = [makeSmokeTexture(3), makeSmokeTexture(11), makeSmokeTexture(29)];
  const smoke = new THREE.Group();
  const smokeGeo = new THREE.PlaneGeometry(5.5, 5.5);
  const rnd = mulberry(42);
  for (let i = 0; i < (mobile ? 24 : 44); i++) {
    const m = new THREE.MeshBasicMaterial({ map: smokeTex[i % 3], transparent: true, opacity: 0.1, depthWrite: false, color: 0x8c7bb0 });
    const p = new THREE.Mesh(smokeGeo, m);
    p.position.set((rnd() - 0.5) * 11, rnd() * 3.4 - 0.4, -rnd() * 4.5 - 0.8);
    p.rotation.z = rnd() * Math.PI * 2;
    p.userData.spin = (rnd() - 0.5) * 0.06;
    p.userData.drift = (rnd() - 0.5) * 0.05;
    smoke.add(p);
  }
  scene.add(smoke);

  // пылинки в луче экрана
  const dustN = 380;
  const dustPos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) {
    dustPos[i * 3] = (rnd() - 0.5) * 5;
    dustPos[i * 3 + 1] = rnd() * 3;
    dustPos[i * 3 + 2] = rnd() * 4 - 1;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.009, color: 0xcfd8ff, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(dust);

  // позы камеры
  const glassWorld = new THREE.Vector3();
  const glassNormal = new THREE.Vector3();
  const tmpQ = new THREE.Quaternion();
  const layout = { wide: true };

  function setLayout(w, h) {
    const aspect = w / h;
    camera.aspect = aspect;
    layout.wide = aspect > 1.05;
    if (layout.wide) {
      rig.position.set(0.95, 0, 0);
      rig.rotation.set(0, -0.46, 0);
      rig.scale.setScalar(1);
      camera.fov = 30;
    } else {
      rig.position.set(0, 0, 0);
      rig.rotation.set(0, -0.3, 0);
      rig.scale.setScalar(1.0);
      camera.fov = 38;
    }
    camera.updateProjectionMatrix();
    rig.updateMatrixWorld(true);
    screen.getWorldPosition(glassWorld);
    screen.getWorldQuaternion(tmpQ);
    glassNormal.set(0, 0, 1).applyQuaternion(tmpQ).normalize();
  }

  const heroPos = new THREE.Vector3();
  const heroLook = new THREE.Vector3();
  function heroPose() {
    if (layout.wide) {
      heroPos.set(-0.5, 1.38, 5.7);
      heroLook.set(-0.42, 1.08, 0);
    } else {
      heroPos.set(-0.2, 1.8, 8.4);
      heroLook.set(-0.3, -0.05, 0);
    }
  }

  // поза «экран во весь кадр»
  const frontPos = new THREE.Vector3();
  // cover 1 — экран закрывает весь кадр, 0 — виден целиком вместе с краем корпуса
  function frontPose(cover) {
    const sw = GLASS.w * S * rig.scale.x, sh = GLASS.h * S * rig.scale.x;
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    const dCover = Math.min(sh / (2 * t), sw / (2 * t * camera.aspect)) * 0.97;
    const dContain = Math.max(sh / (2 * t), sw / (2 * t * camera.aspect)) * 1.12;
    frontPos.copy(glassWorld).addScaledVector(glassNormal, dContain + (dCover - dContain) * cover + 0.09);
  }

  const look = new THREE.Vector3();
  const mouse = new THREE.Vector2();
  const mouseS = new THREE.Vector2();

  function update(t, dt, { dive = 0, cover = 1, pointer, flicker = 1 }) {
    // dive: 0 — общий план, 1 — экран во весь кадр
    heroPose();
    frontPose(cover);
    const u = 1 - Math.pow(1 - THREE.MathUtils.clamp(dive, 0, 1), 1.6);
    if (pointer) mouse.set(pointer.x, pointer.y);
    mouseS.lerp(mouse, 1 - Math.pow(0.002, dt));
    camera.position.lerpVectors(heroPos, frontPos, u);
    const par = (1 - u) * 0.35;
    camera.position.x += mouseS.x * par;
    camera.position.y += mouseS.y * par * 0.5;
    look.lerpVectors(heroLook, glassWorld, u);
    camera.lookAt(look);

    // экран мерцает и светит
    const fl = 1 + (Math.sin(t * 10) * 0.6 + Math.sin(t * 23) * 0.25 + Math.sin(t * 47) * 0.15) * 0.04;
    screenLight.intensity = 3.2 * fl * flicker * screen.material.uniforms.uPower.value;
    screen.material.uniforms.uTime.value = t;

    smoke.children.forEach(p => {
      p.rotation.z += p.userData.spin * dt;
      p.position.x += p.userData.drift * dt;
      if (p.position.x > 4.6) p.position.x = -4.6;
      if (p.position.x < -4.6) p.position.x = 4.6;
    });
    const arr = dustGeo.attributes.position.array;
    for (let i = 0; i < dustN; i++) {
      arr[i * 3 + 1] += dt * 0.03 * (0.4 + (i % 7) / 7);
      arr[i * 3] += Math.sin(t * 0.3 + i) * dt * 0.01;
      if (arr[i * 3 + 1] > 3) arr[i * 3 + 1] = 0;
    }
    dustGeo.attributes.position.needsUpdate = true;
  }

  return { scene, camera, screen, setLayout, update, layout, glassAspect: GLASS.w / GLASS.h };
}

export function mulberry(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
