// «Кинескоп»: режиссёр страницы. Одна канва на весь экран; сцены во весь кадр
// сменяют друг друга по прокрутке (растворение, лист поверх, шредер снизу),
// интерфейс рисуется эфирным слоем и идёт через ту же плёнку, что и 3D.
// Устройство повторяет shader.se: каждая сцена — в свою цель, сведение,
// свечение, след, сепия, расслоение, зерно.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import Lenis from 'lenis';
import { makeTestCard, makeGrungeTexture } from './textures.js';
import { makeOsd } from './screen.js';
import { createPhotoHero, createPhotoChannels, createPhotoScene } from './photo.js';
import { createFilm, LOOKS, mixLook } from './film.js';
import { createPaper } from './paper.js';
import { createUiLayer } from './uilayer.js';
import { initUi } from './ui.js';

const $ = s => document.querySelector(s);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
const MOBILE = coarse || innerWidth < 760;
const BASE = document.documentElement.dataset.base || 'assets/';
// ?still — неподвижный кадр для проверочных снимков: виртуальное время, без следа и помех
const Q = new URLSearchParams(location.search);
const STILL = Q.has('still');
// ?boot=hold — застыть на настроечной таблице (снимок экрана загрузки)
const HOLD = Q.get('boot') === 'hold';
const html = document.documentElement;

const ui = initUi();

function webglOk() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2')); } catch { return false; }
}

function noGl(e) {
  if (e) console.error(e);
  html.classList.add('no-gl');
  html.classList.remove('booting', 'gl-ui');
}

if (!webglOk()) noGl();
else start().catch(noGl);

function isSoftware(renderer) {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    return /swiftshader|llvmpipe|software|basic render/i.test(String(name));
  } catch { return false; }
}

// фон телетекста: тёмное стекло, строки развёртки, бегущая полоса
function createTeletextBg() {
  const mat = new THREE.ShaderMaterial({
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: /* glsl */`
      precision highp float;
      uniform float uTime; uniform vec2 uDim; varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        float r = length((uv - 0.5) * vec2(uDim.x / uDim.y, 1.0) * 0.9);
        vec3 col = vec3(0.004, 0.005, 0.012) + vec3(0.016, 0.02, 0.05) * smoothstep(0.9, 0.0, r);
        col *= 0.78 + 0.22 * (0.5 + 0.5 * sin(uv.y * uDim.y * 2.094));
        float b = fract(uv.y * 0.6 - uTime * 0.06);
        col += vec3(0.01, 0.012, 0.024) * smoothstep(0.0, 0.1, b) * smoothstep(0.24, 0.1, b);
        gl_FragColor = vec4(col, 1.0);
      }`,
    uniforms: { uTime: { value: 0 }, uDim: { value: new THREE.Vector2(1, 1) } },
    depthTest: false, depthWrite: false,
  });
  const q = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  q.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(q);
  return { scene, camera: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), mat };
}

async function start() {
  const canvas = $('#gl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.autoClear = false;
  // без видеокарты (программная отрисовка) — облегчённый режим, иначе кадр идёт секундами
  const LITE = isSoftware(renderer) && !Q.has('full');
  let DPR = LITE ? 0.6 : Math.min(devicePixelRatio || 1, MOBILE ? 1.5 : 1.75);
  const UIS = LITE ? 1 : Math.min(devicePixelRatio || 1, 2);
  renderer.setPixelRatio(DPR);

  // окружение для отражений бумаги и ножей шредера
  const env = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

  // каналы по порядку разделов страницы: телефоны, ноутбуки, телевизоры, приставки, звук, прочее
  const CHANNELS = ['ch-phone', 'ch-laptop', 'ch-tv', 'ch-console', 'ch-audio', 'ch-camera'];
  const PHOTO = BASE;

  await Promise.race([
    Promise.all([
      document.fonts.load('40px "Bedstead"'), document.fonts.load('500 40px "STIX Two Text"'),
      document.fonts.load('italic 600 40px "STIX Two Text"'), document.fonts.load('500 14px "IBM Plex Mono"'),
    ]),
    new Promise(r => setTimeout(r, 2500)),
  ]);
  const test = makeTestCard(1024, 820);
  const osd = makeOsd(1024, 820);
  const chanRT = new THREE.WebGLRenderTarget(1024, 820, { type: THREE.HalfFloatType, samples: (MOBILE || LITE) ? 0 : 4 });
  if (LITE) chanRT.setSize(512, 410);

  let progress = 0;
  const tv = createPhotoHero({ base: PHOTO, testTex: test.tex, chanTex: chanRT.texture, osdTex: osd.tex, mobile: MOBILE || LITE });
  await tv.ready();
  progress = 0.55;
  const ch = createPhotoChannels({ base: PHOTO, names: CHANNELS, mobile: MOBILE || LITE });
  const work = createPhotoScene({ base: PHOTO, name: 'board', mobile: MOBILE || LITE, smoke: 0.06, push: 0.14 });
  const watch = createPhotoScene({ base: PHOTO, name: 'watch', mobile: MOBILE || LITE, smoke: 0.05, dust: 1.2, smokeColor: [1.0, 0.78, 0.45], push: 0.12 });
  const radio = createPhotoScene({ base: PHOTO, name: 'radio', mobile: MOBILE || LITE, smoke: 0.07, push: 0.1 });
  const tt = createTeletextBg();

  // эфирный слой и плёнка
  const layer = createUiLayer({ scale: UIS });
  const film = createFilm(renderer, { mobile: MOBILE, lite: LITE });
  const paperTex = new THREE.Texture(layer.paperCanvas);
  paperTex.premultiplyAlpha = true; paperTex.generateMipmaps = false; paperTex.minFilter = THREE.LinearFilter; paperTex.colorSpace = THREE.NoColorSpace;
  const grunge = makeGrungeTexture(LITE ? 256 : 512, 11);
  const paper = createPaper({ contentTexture: paperTex, grungeTexture: grunge, mobile: MOBILE || LITE });

  // разметка страницы: где начинается каждый раздел (в пикселях документа)
  const SEC = ['efir', 'kanaly', 'ceny', 'masterskaya', 'vestnik', 'shred', 'garantiya', 'svyaz'];
  const el = Object.fromEntries(SEC.map(id => [id, document.getElementById(id)]));
  const top = {}, hgt = {};
  function docTop(n) { let y = 0; for (let e = n; e; e = e.offsetParent) y += e.offsetTop; return y; }
  function layout() { for (const id of SEC) { top[id] = docTop(el[id]); hgt[id] = el[id].offsetHeight; } }

  // на телефоне адресная строка то прячется, то появляется, и innerHeight скачет
  // на каждом развороте прокрутки. Холст берём высотой «большого» экрана (100lvh):
  // верх совпадает с верхом окна, низ при открытой строке уходит под неё,
  // а пересобирать цепочку и слой надписей на каждый скачок не нужно
  const probe = document.createElement('div');
  probe.dataset.gl = 'off';
  probe.setAttribute('aria-hidden', 'true');
  probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;height:100lvh;visibility:hidden;pointer-events:none';
  document.body.appendChild(probe);
  const viewH = () => MOBILE ? Math.max(innerHeight, probe.offsetHeight || 0) : innerHeight;

  let W = 0, H = 0;
  let lensFactor = 1;
  let uiStale = true;
  function resize(force = false) {
    const w = innerWidth, h = viewH();
    if (force !== true && w === W && h === H) { layout(); return; }
    W = w; H = h;
    canvas.style.height = H + 'px';
    renderer.setPixelRatio(DPR);
    renderer.setSize(W, H, false);
    film.setSize(W, H, DPR);
    layer.setSize(W, H, UIS);
    // холст бумаги того же размера, что слой: память текстуры выделить заново
    paperTex.dispose(); paperTex.needsUpdate = true;
    uiStale = true;
    paper.setSize(W, H, ($('.top') ? $('.top').offsetHeight : 64) + 6);
    tt.mat.uniforms.uDim.value.set(W * DPR, H * DPR);
    tv.setLayout(W, H);
    ch.setAspect(W / H);
    work.setAspect(W / H);
    watch.setAspect(W / H);
    radio.setAspect(W / H);
    // у вытянутых вверх экранов линза мягче (как у Shader: от 9:16 к 4:3)
    lensFactor = clamp(0.2 + (W / H - 9 / 16) / (4 / 3 - 9 / 16), 0.25, 1) * (MOBILE ? 0.5 : 1);
    layout();
  }
  resize();
  addEventListener('resize', resize);
  new ResizeObserver(() => layout()).observe(document.body);

  await ch.ensure(0);
  ch.show(0);
  progress = 0.8;
  const idle = window.requestIdleCallback || (f => setTimeout(f, 300));
  idle(() => { for (let i = 1; i < CHANNELS.length; i++) ch.ensure(i); });
  setTimeout(() => idle(() => { work.load(); watch.load(); radio.load(); }), STILL ? 0 : 4000);

  const lenis = (!reduced && !coarse) ? new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 }) : null;
  ui.bindScroll((y, opts) => lenis ? lenis.scrollTo(y, { duration: 1.4, ...opts }) : scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' }));

  const pointer = new THREE.Vector2();
  addEventListener('pointermove', e => { pointer.set(e.clientX / W * 2 - 1, -(e.clientY / H * 2 - 1)); }, { passive: true });

  const t0 = performance.now();
  const minBoot = (reduced || STILL) ? 0 : 1600;
  let bootDone = false, bootT = 0;
  let screenMode = 'test';
  let screenChan = 0, screenSwitchAt = 0;
  let staticPulse = 0, lastChan = -1;
  ui.onChannel(() => { staticPulse = 1; });

  const clock = new THREE.Clock();
  let vt = 0, lastTest = 0, pending = true, glLive = false, wasFull = false;
  const perf = { acc: 0, n: 0 };
  let lastY = -1, uiQuietSince = 0, lastUiDraw = -1;

  // сцены: как обновить и нарисовать каждую
  const SCENES = {
    hero: { look: () => null, draw: (s, t, dt) => {
      ch.setAspect(tv.glassAspect);
      ch.update(t, dt, { pointer: null, wide: false, inScreen: true });
      renderer.setRenderTarget(chanRT);
      renderer.setClearColor(0x000000, 1);
      renderer.clear();
      renderer.render(ch.scene, ch.camera);
      ch.setAspect(W / H);
      tv.prepare(renderer);
      return { scene: tv.scene, camera: tv.camera };
    } },
    chan: { draw: (s, t, dt) => { ch.update(t, dt, { pointer, wide: W / H > 1.05 }); return { scene: ch.scene, camera: ch.camera }; } },
    tt: { draw: (s, t) => { tt.mat.uniforms.uTime.value = t; return { scene: tt.scene, camera: tt.camera }; } },
    work: { draw: (s, t, dt) => { work.update(t, dt, { p: s.p ?? 0, pointer, wide: W / H > 1.05 }); return { scene: work.scene, camera: work.camera }; } },
    paper: { custom: true, clear: [0, 0, 0, 0] },
    watch: { draw: (s, t, dt) => { watch.update(t, dt, { p: s.p ?? 0, pointer, wide: W / H > 1.05 }); return { scene: watch.scene, camera: watch.camera }; } },
    radio: { draw: (s, t, dt) => { radio.update(t, dt, { p: s.p ?? 0, pointer, wide: W / H > 1.05 }); return { scene: radio.scene, camera: radio.camera }; } },
  };

  function drawScene(slot, s, t, dt) {
    if (s.id === 'paper') {
      return film.renderScene(slot, () => paper.render(renderer, { mode: s.mode, prog: s.prog, cut: s.cut, time: t, env }), [0, 0, 0, 0]);
    }
    const sc = SCENES[s.id];
    const r = sc.draw(s, t, dt);
    return film.renderScene(slot, () => renderer.render(r.scene, r.camera), [0, 0, 0, 1]);
  }

  function frame() {
    const realDt = Math.min(clock.getDelta(), 0.25);
    const dt = STILL ? 0.5 : Math.min(realDt, 0.05);
    vt += STILL ? 0.5 : realDt;
    const t = vt;
    if (lenis) lenis.raf(performance.now());
    if (!STILL && glLive) {
      perf.acc += realDt; perf.n++;
      if (perf.n >= 90) {
        const avg = perf.acc / perf.n;
        if (avg > 1 / 40 && DPR > (LITE ? 0.5 : 0.9)) { DPR = Math.max(LITE ? 0.45 : 0.85, DPR - 0.25); resize(true); }
        perf.acc = 0; perf.n = 0;
      }
    }

    if (!bootDone) {
      const time = (performance.now() - t0) / Math.max(1, minBoot);
      progress = Math.max(progress, Math.min(0.99, 0.5 + time * 0.5));
      if (HOLD) progress = 0.62;
      if (time >= 1 && pending && !HOLD) { pending = false; progress = 1; bootDone = true; bootT = STILL ? t - 10 : t; html.classList.remove('booting'); html.classList.add('booted'); }
    }
    if (t - lastTest > (bootDone ? 1 : 0.05)) { test.draw(bootDone ? null : progress, t); lastTest = t; }

    const y = scrollY;
    const P = id => clamp((y - top[id]) / Math.max(1, hgt[id] - H));   // ход внутри липкого раздела
    const IN = id => (y + H - top[id]) / H;                             // 0 — раздел у нижнего края, 1 — у верхнего

    // 1. эфир: выезд из экрана после загрузки и нырок по прокрутке
    const efirP = P('efir');
    const out = bootDone ? smooth(0, 2.2, t - bootT) : 0;
    const bootDive = reduced ? 0 : 1 - out;
    const scrollDive = smooth(0.18, 0.92, efirP);
    const dive = Math.max(bootDive, scrollDive);
    const cover = scrollDive >= bootDive ? 1 : 0;
    ui.heroState(efirP, out);

    if (bootDone && t - bootT > 2.6) {
      if (screenMode === 'test') { screenMode = 'channel'; screenSwitchAt = t; staticPulse = Math.max(staticPulse, 0.9); }
      if (!STILL && efirP < 0.05 && t - screenSwitchAt > 4.2) { screenChan = (screenChan + 1) % CHANNELS.length; screenSwitchAt = t; staticPulse = 1; }
      if (efirP >= 0.05) screenChan = 0;
    }
    const su = tv.screen.material.uniforms;
    su.uMix.value += ((screenMode === 'channel' ? 1 : 0) - su.uMix.value) * (STILL ? 1 : 1 - Math.pow(0.0005, realDt));
    su.uOsdA.value = screenMode === 'channel' ? clamp((t - screenSwitchAt) * 2) * (1 - smooth(0.4, 0.8, dive)) : 0;
    staticPulse = STILL ? 0 : Math.max(0, staticPulse - realDt * 3.2);
    su.uStatic.value = staticPulse * 0.9;
    su.uPower.value = 1;
    su.uBright.value = 1.05 + 0.55 * su.uMix.value;

    // 2. каналы
    const kanTop = top.kanaly - y;
    ui.channelsIn(kanTop <= 2);
    const chP = P('kanaly');
    const inKan = kanTop <= 1 && y < top.ceny;
    const chIndex = inKan ? Math.min(CHANNELS.length - 1, Math.floor(chP * CHANNELS.length * 0.999)) : (y < top.kanaly ? screenChan : CHANNELS.length - 1);
    if (inKan) {
      if (chIndex !== lastChan) { if (lastChan !== -1) staticPulse = 1; lastChan = chIndex; ui.setChannel(chIndex); }
    } else if (y < top.kanaly) { lastChan = -1; ui.setChannel(-1); }
    if (ch.current !== chIndex) ch.show(chIndex);
    if (osd.lastI !== chIndex) { osd.draw(chIndex + 1, ui.channelLabel(chIndex)); osd.lastI = chIndex; }

    // предзагрузка
    if (top.ceny - y < H * 2.5) work.load();
    if (top.vestnik - y < H * 2) watch.load();
    if (top.garantiya - y < H * 2) radio.load();

    // 3. какая сцена в кадре и что идёт следом
    const fullChan = dive > 0.965 && bootDone;
    if (fullChan !== wasFull) { if (!STILL) staticPulse = Math.max(staticPulse, 0.8); wasFull = fullChan; }
    const masterP = P('masterskaya');
    const curl = smooth(0.42, 0.84, masterP);
    const shredP = P('shred');
    let cur, next = null, tr = 0, type = 0;
    if (y < top.kanaly + 1 && !fullChan) {
      cur = { id: 'hero' };
    } else if (IN('ceny') < 0) {
      cur = { id: 'chan' };
    } else if (IN('masterskaya') < 0) {
      cur = { id: 'chan' }; next = { id: 'tt' }; tr = clamp(IN('ceny') * 1.08); type = 4;
      if (tr >= 1) { cur = next; next = null; }
    } else if (masterP <= 0 || curl <= 0) {
      cur = { id: 'tt' }; next = { id: 'work', p: masterP }; tr = clamp(IN('masterskaya') * 1.08); type = 4;
      if (tr >= 1) { cur = next; next = null; }
    } else if (curl < 1) {
      cur = { id: 'work', p: masterP }; next = { id: 'paper', mode: 'curl', prog: curl }; tr = curl; type = 2;
    } else if (shredP <= 0) {
      cur = { id: 'paper', mode: 'flat' };
    } else if (shredP < 1) {
      cur = { id: 'paper', mode: 'shred', cut: shredP }; next = { id: 'watch', p: P('garantiya') }; tr = shredP; type = 3;
    } else if (IN('svyaz') < 0) {
      cur = { id: 'watch', p: P('garantiya') };
    } else {
      cur = { id: 'watch', p: P('garantiya') }; next = { id: 'radio', p: P('svyaz') }; tr = clamp(IN('svyaz') * 1.08); type = 4;
      if (tr >= 1) { cur = next; next = null; }
    }

    // плёнка: своя у каждой сцены, на переходе — смесь
    const lookOf = s => {
      if (s.id === 'hero') {
        const l = mixLook(LOOKS.hero, LOOKS.boot, bootDive);
        return mixLook(l, LOOKS.chan, smooth(0.72, 0.96, dive));
      }
      return LOOKS[s.id];
    };
    const curLook = lookOf(cur), nextLook = next ? lookOf(next) : null;
    const look = next ? mixLook(curLook, nextLook, type >= 2 ? smooth(0.15, 0.85, tr) : tr) : curLook;

    // шапка над бумагой — тёмными чернилами
    const onPaper = (cur.id === 'paper' && cur.mode !== 'shred') || (next && next.id === 'paper' && tr > 0.9) || (cur.id === 'paper' && cur.cut < 0.85);
    ui.paperUnderHeader(onPaper);
    ui.workshopState(masterP);
    ui.watchState(P('garantiya'));

    if (cur.id === 'hero') tv.update(t, dt, { dive, pointer });

    // эфирный слой: перерисовка, пока что-то движется
    const now = performance.now();
    if (y !== lastY) { lastY = y; uiQuietSince = now; }
    if (uiStale || now - uiQuietSince < 900 || now - lastUiDraw > 200 || STILL) {
      uiStale = false;
      layer.draw();
      film.setUi(layer.canvas);
      // холст бумаги грузим в видеокарту, только когда лист в кадре
      if (cur.id === 'paper' || (next && next.id === 'paper')) paperTex.needsUpdate = true;
      lastUiDraw = now;
    }

    const curTex = drawScene(0, cur, t, dt);
    const nextTex = next ? drawScene(1, next, t, dt) : null;
    film.render({
      cur: curTex, next: nextTex, t: tr, type,
      curLook, nextLook, look,
      time: t, still: STILL, reduced,
      lensFactor, borderFactor: MOBILE ? 0.5 : 1,
      ui: Q.has('noui') ? 0 : 1,   // ?noui — кадр сцены без надписей (заставки для браузеров без WebGL)
      static: (cur.id === 'chan' ? staticPulse * 0.6 : 0),
      noiseFactor: (devicePixelRatio || 1) >= 2 ? 1 : 0.7,
    });
    if (!glLive) { glLive = true; html.classList.add('gl-live', 'gl-ui'); }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  window.__kineskop = { renderer, tv, ch, lenis, layer, film };
}
