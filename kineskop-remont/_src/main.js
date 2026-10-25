// «Кинескоп»: режиссёр страницы. Одна канва на весь экран, сцены сменяют
// друг друга по прокрутке, у каждой своя плёнка (как у shader.se).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import Lenis from 'lenis';
import { makeTestCard } from './textures.js';
import { makeOsd } from './screen.js';
import { createTvScene } from './tv.js';
import { createChannelScene, CHANNELS } from './channels.js';
import { createWorkshop, createWatch, createRadio } from './scenes.js';
import { createPost, LOOKS, mixLook } from './post.js';
import { initUi } from './ui.js';

const $ = s => document.querySelector(s);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
const MOBILE = coarse || innerWidth < 760;
const BASE = document.documentElement.dataset.base || 'assets/';
// ?still — неподвижный кадр для проверочных снимков: без загрузки, помех и автопереключения
const Q = new URLSearchParams(location.search);
const STILL = Q.has('still');
// ?boot=hold — застыть на настроечной таблице (снимок экрана загрузки)
const HOLD = Q.get('boot') === 'hold';

const ui = initUi();

function webglOk() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2')); } catch { return false; }
}

if (!webglOk()) {
  document.documentElement.classList.add('no-gl');
  document.documentElement.classList.remove('booting');
} else {
  start().catch(e => {
    console.error(e);
    document.documentElement.classList.add('no-gl');
    document.documentElement.classList.remove('booting');
  });
}

function isSoftware(renderer) {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    return /swiftshader|llvmpipe|software|basic render/i.test(String(name));
  } catch { return false; }
}

async function start() {
  const canvas = $('#gl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  // без видеокарты (программная отрисовка) — облегчённый режим, иначе кадр идёт секундами
  const LITE = isSoftware(renderer) && !Q.has('full'); // ?full — полный режим и без видеокарты, для проверки
  let DPR = LITE ? 0.6 : Math.min(devicePixelRatio || 1, MOBILE ? 1.5 : 1.75);
  renderer.setPixelRatio(DPR);

  const env = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

  // загрузка моделей
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const cache = new Map();
  const loadModel = name => {
    if (!cache.has(name)) cache.set(name, loader.loadAsync(`${BASE}models/${name}.glb`));
    return cache.get(name);
  };

  // экран загрузки: настроечная таблица
  await Promise.race([
    Promise.all([document.fonts.load('40px "Bedstead"'), document.fonts.load('600 40px "Literata"')]),
    new Promise(r => setTimeout(r, 2500)),
  ]);
  const test = makeTestCard(1024, 820);
  const osd = makeOsd(1024, 820);
  const chanRT = new THREE.WebGLRenderTarget(1024, 820, { type: THREE.HalfFloatType, samples: MOBILE ? 0 : 4 });
  if (LITE) chanRT.setSize(512, 410);

  let progress = 0;
  const tvP = loadModel('tv');
  // полоса загрузки идёт по настоящему прогрессу телевизора и шрифтов
  const tvGltf = await tvP;
  progress = 0.55;

  const tv = createTvScene({ tvGltf, testTex: test.tex, chanTex: chanRT.texture, osdTex: osd.tex, mobile: MOBILE || LITE });
  tv.scene.environment = env;
  const ch = createChannelScene({ loadModel });
  ch.scene.environment = env;
  const work = createWorkshop({ loadModel });
  work.scene.environment = env;
  const watch = createWatch({ loadModel });
  watch.scene.environment = env;
  const radio = createRadio({ loadModel });
  radio.scene.environment = env;

  const post = createPost(renderer, { mobile: MOBILE || LITE });

  // размеры
  let W = innerWidth, H = innerHeight;
  function resize() {
    W = innerWidth; H = innerHeight;
    renderer.setPixelRatio(DPR);
    renderer.setSize(W, H, false);
    post.setSize(W, H, DPR);
    tv.setLayout(W, H);
    ch.setAspect(W / H);
    work.setAspect(W / H);
    watch.setAspect(W / H);
    radio.setAspect(W / H);
  }
  resize();
  addEventListener('resize', resize);

  // первый канал заранее, остальные — когда браузер свободен
  await ch.ensure(0);
  ch.show(0);
  progress = 0.8;
  const idle = window.requestIdleCallback || (f => setTimeout(f, 300));
  idle(() => { for (let i = 1; i < CHANNELS.length; i++) ch.ensure(i); });
  // нижние сцены грузим, пока смотрят первый экран: прыжок по меню не застанет пустоту
  setTimeout(() => idle(() => { work.load(); watch.load(); radio.load(); }), STILL ? 0 : 4000);

  // прокрутка
  const lenis = (!reduced && !coarse) ? new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 }) : null;
  ui.bindScroll((y, opts) => lenis ? lenis.scrollTo(y, { duration: 1.4, ...opts }) : scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' }));

  const pointer = new THREE.Vector2();
  addEventListener('pointermove', e => { pointer.set(e.clientX / W * 2 - 1, -(e.clientY / H * 2 - 1)); }, { passive: true });

  // перетаскивание устройства на канале
  const stage = $('#kanaly .stage');
  stage.addEventListener('pointerdown', e => { if (e.target.closest('button,a')) return; ch.dragStart(e.clientX); });
  addEventListener('pointermove', e => ch.dragMove(e.clientX), { passive: true });
  addEventListener('pointerup', () => ch.dragEnd());

  const sec = {
    efir: $('#efir'), kanaly: $('#kanaly'), teletext: $('#ceny'), master: $('#masterskaya'),
    garant: $('#garantiya'), svyaz: $('#svyaz'), vestnik: $('#vestnik'),
  };
  function measure(el) {
    const r = el.getBoundingClientRect();
    const p = clamp(-r.top / Math.max(1, r.height - H));
    const vis = r.bottom > 0 && r.top < H;
    const rect = [clamp(1 - r.bottom / H), clamp(1 - r.top / H)];
    return { p, vis, rect, top: r.top, h: r.height };
  }

  // загрузка: таблица во весь экран, потом камера выезжает
  const t0 = performance.now();
  const minBoot = (reduced || STILL) ? 0 : 1600;
  let bootDone = false, bootT = 0;
  let screenMode = 'test';      // test | channel
  let screenChan = 0, screenSwitchAt = 0, hold = 0;
  let staticPulse = 0, lastChan = -1;

  ui.onChannel(i => { staticPulse = 1; });

  const clock = new THREE.Clock();
  let vt = 0;
  let lastTest = 0;
  let pending = true;
  let glLive = false;
  let wasFull = false;
  const perf = { acc: 0, n: 0 };

  function frame() {
    const realDt = Math.min(clock.getDelta(), 0.25);
    const dt = STILL ? 0.5 : Math.min(realDt, 0.05);
    vt += STILL ? 0.5 : realDt;
    const t = vt;
    if (lenis) lenis.raf(performance.now());
    // не успеваем 40 кадров в секунду — снижаем плотность пикселей
    if (!STILL && glLive) {
      perf.acc += realDt; perf.n++;
      if (perf.n >= 90) {
        const avg = perf.acc / perf.n;
        if (avg > 1 / 40 && DPR > (LITE ? 0.5 : 0.9)) { DPR = Math.max(LITE ? 0.45 : 0.85, DPR - 0.25); resize(); }
        perf.acc = 0; perf.n = 0;
      }
    }

    // прогресс загрузки
    if (!bootDone) {
      const time = (performance.now() - t0) / Math.max(1, minBoot);
      progress = Math.max(progress, Math.min(0.99, 0.5 + time * 0.5));
      if (HOLD) progress = 0.62;
      if (time >= 1 && pending && !HOLD) { pending = false; progress = 1; bootDone = true; bootT = STILL ? t - 10 : t; document.documentElement.classList.remove('booting'); document.documentElement.classList.add('booted'); }
    }
    if (t - lastTest > (bootDone ? 1 : 0.05)) { test.draw(bootDone ? null : progress, t); lastTest = t; }

    const m = {
      efir: measure(sec.efir), kanaly: measure(sec.kanaly), teletext: measure(sec.teletext),
      master: measure(sec.master), garant: measure(sec.garant), svyaz: measure(sec.svyaz),
    };
    const wide = W / H > 1.05;
    // под шапкой бумага — шапка переходит на тёмные чернила
    const vr = sec.vestnik.getBoundingClientRect();
    ui.paperUnderHeader((vr.top < 64 && vr.bottom > 64) || (m.master.vis && m.master.top < 64 && m.master.p > 0.8));

    // выезд из экрана после загрузки
    const out = bootDone ? smooth(0, 2.2, t - bootT) : 0;
    const bootDive = reduced ? 0 : 1 - out;
    const scrollDive = smooth(0.18, 0.92, m.efir.p);
    const dive = Math.max(bootDive, scrollDive);
    const cover = scrollDive >= bootDive ? 1 : 0;
    ui.heroState(m.efir.p, out);

    // что показывает экран телевизора в первой сцене
    if (bootDone && t - bootT > 2.6) {
      if (screenMode === 'test') { screenMode = 'channel'; screenSwitchAt = t; staticPulse = Math.max(staticPulse, 0.9); }
      if (!STILL && m.efir.p < 0.05 && t - screenSwitchAt > 4.2) {
        screenChan = (screenChan + 1) % CHANNELS.length;
        screenSwitchAt = t; staticPulse = 1;
      }
      if (m.efir.p >= 0.05) screenChan = 0;
    }
    const su = tv.screen.material.uniforms;
    const mixTarget = screenMode === 'channel' ? 1 : 0;
    su.uMix.value += (mixTarget - su.uMix.value) * (STILL ? 1 : 1 - Math.pow(0.0005, realDt));
    su.uOsdA.value = screenMode === 'channel' ? clamp((t - screenSwitchAt) * 2) * (1 - smooth(0.4, 0.8, dive)) : 0;
    staticPulse = STILL ? 0 : Math.max(0, staticPulse - realDt * 3.2);
    su.uStatic.value = staticPulse * 0.9 + (bootDone ? 0 : 0.0);
    su.uPower.value = 1;
    su.uBright.value = 1.05 + 0.55 * su.uMix.value;

    ui.channelsIn(m.kanaly.top <= 2);
    // какой канал в полноэкранной части
    const chP = m.kanaly.p;
    const chIndex = m.kanaly.vis && m.kanaly.top <= 1 ? Math.min(CHANNELS.length - 1, Math.floor(chP * CHANNELS.length * 0.999)) : (m.efir.vis ? screenChan : 0);
    if (m.kanaly.vis && m.kanaly.top <= 1) {
      if (chIndex !== lastChan) { if (lastChan !== -1) staticPulse = 1; lastChan = chIndex; ui.setChannel(chIndex); }
    } else {
      lastChan = -1;
      ui.setChannel(-1);
    }
    if (ch.current !== chIndex) ch.show(chIndex);
    if (osd.lastI !== chIndex) { osd.draw(chIndex + 1, ui.channelLabel(chIndex)); osd.lastI = chIndex; }

    // предзагрузка сцен ниже по странице
    if (m.teletext.top < H * 2.5) work.load();
    if (m.master.top < H * 2) watch.load();
    if (m.garant.top < H * 2) radio.load();

    // проходы рендера
    const passes = [];
    let look = LOOKS.hero, fx = { time: t, static: 0, barrel: 0, border: 0, curl: 0, scan: 1 };
    const fullChan = dive > 0.965 && bootDone;
    if (fullChan !== wasFull) { if (!STILL) staticPulse = Math.max(staticPulse, 0.8); wasFull = fullChan; }

    if (m.efir.vis && !(m.kanaly.vis && m.kanaly.top <= 0)) {
      if (!fullChan) {
        tv.update(t, dt, { dive, cover, pointer });
        // канал в экран телевизора
        ch.setAspect(tv.glassAspect);
        ch.update(t, dt, { pointer: null, wide: false, inScreen: true });
        renderer.setRenderTarget(chanRT);
        renderer.setClearColor(0x000000, 1);
        renderer.clear();
        renderer.render(ch.scene, ch.camera);
        ch.setAspect(W / H);
        passes.push({ scene: tv.scene, camera: tv.camera, rect: m.efir.rect });
        const bootLook = mixLook(LOOKS.hero, LOOKS.boot, bootDive);
        look = mixLook(bootLook, LOOKS.channel, smooth(0.75, 0.96, dive));
        fx.border = Math.max(bootDive, smooth(0.86, 0.96, dive)) * 0.0;
        fx.static = 0;
      } else {
        ch.update(t, dt, { pointer, wide });
        passes.push({ scene: ch.scene, camera: ch.camera, rect: m.efir.rect });
        look = LOOKS.channel;
        fx.barrel = 1; fx.border = 1; fx.static = staticPulse * 0.6;
      }
    }
    if (m.kanaly.vis && (m.kanaly.top <= 0 || !m.efir.vis || fullChan)) {
      if (!passes.some(p => p.scene === ch.scene)) {
        ch.update(t, dt, { pointer, wide });
        passes.push({ scene: ch.scene, camera: ch.camera, rect: m.kanaly.rect });
      } else {
        passes[passes.length - 1].rect = [Math.min(m.efir.rect[0], m.kanaly.rect[0]), Math.max(m.efir.rect[1], m.kanaly.rect[1])];
      }
      look = LOOKS.channel;
      fx.barrel = 1; fx.border = 1; fx.static = staticPulse * 0.6;
      // выход из канала в телетекст: экран гаснет к центру
      fx.fade = 1 - smooth(0.92, 1.0, chP) * 0.0;
    }
    if (m.master.vis) {
      work.update(t, dt, { p: m.master.p, pointer, wide });
      passes.push({ scene: work.scene, camera: work.camera, rect: m.master.rect });
      look = LOOKS.workshop;
      fx = { time: t, curl: smooth(0.6, 0.97, m.master.p), clip: m.master.rect };
      ui.workshopState(m.master.p);
    }
    if (m.garant.vis) {
      watch.update(t, dt, { p: m.garant.p, pointer, wide });
      passes.push({ scene: watch.scene, camera: watch.camera, rect: m.garant.rect });
      look = LOOKS.watch;
      fx = { time: t, clip: m.garant.rect };
      ui.watchState(m.garant.p);
    }
    if (m.svyaz.vis) {
      radio.update(t, dt, { p: m.svyaz.p, pointer, wide });
      passes.push({ scene: radio.scene, camera: radio.camera, rect: m.svyaz.rect });
      if (!m.garant.vis || m.svyaz.top < H * 0.5) look = LOOKS.radio;
      const prevClip = fx.clip;
      fx = { time: t, clip: [Math.min(m.svyaz.rect[0], prevClip ? prevClip[0] : 1), Math.max(m.svyaz.rect[1], prevClip ? prevClip[1] : 0)] };
    }

    if (passes.length) {
      if (!fx.clip) fx.clip = [Math.min(...passes.map(p => p.rect[0])), Math.max(...passes.map(p => p.rect[1]))];
      post.render(passes, look, fx);
      canvas.style.visibility = 'visible';
      if (!glLive) { glLive = true; document.documentElement.classList.add('gl-live'); }
    } else {
      canvas.style.visibility = 'hidden';
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  window.__kineskop = { renderer, tv, ch, lenis };
}
