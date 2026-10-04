/* studio.js — движение студии макетов. Без библиотек и сборки.
   Словарь тот же, что у главной (DESIGN.md, «Motion vocabulary»):
   кинетический заголовок, блоки поднимаются при входе в кадр, живой фон
   из линий рельефа, магнитные пилюли, наклон объекта за курсором.
   Свой ход страницы — живой экран (сайт собирает сам себя) и ручка
   «было и стало». При «меньше движения» всё стоит в готовом виде. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  // #og — кадр для превью ссылки: экран собран целиком, без курсора и сцены
  const og = location.hash === '#og';
  if (og) document.documentElement.classList.add('is-og');

  /* ── шапка темнеет, когда страница уехала ── */
  const top = $('[data-top]');
  if (top) {
    const onScroll = () => top.classList.toggle('is-stuck', scrollY > 12);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── кинетический заголовок: слова выезжают с расфокусом, шаг 55 мс ── */
  let k = 0;
  $$('[data-split]').forEach((el) => {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.append(w); return; }
            const sw = document.createElement('span');
            sw.className = 'sw';
            const inner = document.createElement('span');
            inner.textContent = w;
            inner.style.setProperty('--k', k++);
            sw.append(inner);
            frag.append(sw);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(el);
    el.classList.add('is-split');
  });
  const go = () => $$('[data-split]').forEach((el) => el.classList.add('is-go'));
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(go));
  setTimeout(go, 1200); // шрифт задержался — заголовок всё равно выезжает

  /* ── блоки поднимаются при входе в кадр: 460 мс, шаг 45 мс, потолок 220 ── */
  const rise = $$('[data-rise]');
  if (still || og || !('IntersectionObserver' in window)) rise.forEach((el) => el.classList.add('is-in'));
  else {
    const io = new IntersectionObserver((ents) => {
      let n = 0;
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.style.setProperty('--d', Math.min(220, n++ * 45) + 'ms');
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    rise.forEach((el) => io.observe(el));
  }

  /* ── живой фон: линии рельефа из шума, светятся и прогибаются у курсора.
       Шейдер тот же, что у главной (landing/l2/l2.js), только без gsap. ── */
  const cv = $('[data-gl]');
  const hero = $('[data-hero]');
  const glOk = cv && !still && (() => {
    const g = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
    if (!g) return false;
    const der = g.getExtension('OES_standard_derivatives');
    const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const fs = (der ? '#extension GL_OES_standard_derivatives : enable\n' : '') + `
precision highp float;
uniform vec2 r;uniform float t;uniform vec2 m;uniform float e;
float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float nz(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
  return mix(mix(h1(i),h1(i+vec2(1,0)),u.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*nz(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 p=(gl_FragCoord.xy-.5*r)/r.y;
  vec2 mp=(m-.5*r)/r.y;
  float d=length(p-mp);
  float bump=exp(-d*d*7.)*.42*e;
  vec2 q=p*1.35+vec2(t*.018,-t*.012);
  q+=.35*vec2(sin(q.y*1.7+t*.05),cos(q.x*1.3-t*.04));
  float h=fbm(q)+bump;
  float n=h*13.;
  ${der ? 'float w=fwidth(n);' : 'float w=.03;'}
  float line=1.-clamp(abs(fract(n)-.5)/(w*1.1),0.,1.);
  float major=step(3.5,mod(floor(n),4.));
  float near=exp(-d*d*2.2)*e;
  float stage=exp(-pow(length(p-vec2(.45,0.)),2.)*1.4);
  vec3 bg=vec3(.058,.047,.04)+vec3(.22,.08,.02)*stage*.55;
  vec3 hot=vec3(1.,.47,.17);
  float a=line*(.12+.22*major+.55*near+.18*stage);
  vec3 c=bg+hot*a+hot*near*.06;
  gl_FragColor=vec4(c,1.);
}`;
    const sh = (type, src) => { const s = g.createShader(type); g.shaderSource(s, src); g.compileShader(s); return g.getShaderParameter(s, g.COMPILE_STATUS) ? s : null; };
    const v = sh(g.VERTEX_SHADER, vs), f = sh(g.FRAGMENT_SHADER, fs);
    if (!v || !f) return false;
    const pr = g.createProgram();
    g.attachShader(pr, v); g.attachShader(pr, f); g.linkProgram(pr);
    if (!g.getProgramParameter(pr, g.LINK_STATUS)) return false;
    g.useProgram(pr);
    g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer());
    g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), g.STATIC_DRAW);
    const loc = g.getAttribLocation(pr, 'p');
    g.enableVertexAttribArray(loc);
    g.vertexAttribPointer(loc, 2, g.FLOAT, false, 0, 0);
    const U = { r: g.getUniformLocation(pr, 'r'), t: g.getUniformLocation(pr, 't'), m: g.getUniformLocation(pr, 'm'), e: g.getUniformLocation(pr, 'e') };
    const dpr = Math.min(devicePixelRatio || 1, fine ? 1.25 : 1);
    const scale = fine ? 1 : 0.6;
    const size = () => {
      cv.width = Math.round(cv.clientWidth * dpr * scale);
      cv.height = Math.round(cv.clientHeight * dpr * scale);
      g.viewport(0, 0, cv.width, cv.height);
    };
    size();
    addEventListener('resize', size);
    const mouse = { x: 0.72, y: 0.5, tx: 0.72, ty: 0.5, e: fine ? 1 : 0.7 };
    hero.addEventListener('pointermove', (ev) => {
      const r = cv.getBoundingClientRect();
      mouse.tx = (ev.clientX - r.left) / r.width; mouse.ty = (ev.clientY - r.top) / r.height;
    }, { passive: true });
    let on = true;
    const t0 = performance.now();
    new IntersectionObserver(([en]) => { on = en.isIntersecting; }).observe(cv);
    const frame = (now) => {
      requestAnimationFrame(frame);
      if (!on || document.hidden) return;
      if (!fine) { const tt = now / 1000; mouse.tx = 0.6 + Math.sin(tt * 0.35) * 0.3; mouse.ty = 0.55 + Math.cos(tt * 0.27) * 0.25; }
      mouse.x += (mouse.tx - mouse.x) * 0.06; mouse.y += (mouse.ty - mouse.y) * 0.06;
      g.uniform2f(U.r, cv.width, cv.height);
      g.uniform1f(U.t, (now - t0) / 1000);
      g.uniform2f(U.m, mouse.x * cv.width, (1 - mouse.y) * cv.height);
      g.uniform1f(U.e, mouse.e);
      g.drawArrays(g.TRIANGLES, 0, 3);
    };
    requestAnimationFrame(frame);
    return true;
  })();
  if (cv && !glOk) cv.style.background = 'radial-gradient(60% 60% at 70% 50%,oklch(0.705 0.195 45/.22),transparent 70%)';

  /* ── магнитные пилюли: до 9 px за курсором ── */
  if (fine && !still) {
    $$('[data-magnet]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        el.style.transform = `translate(${dx * 9}px,${dy * 6}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
      el.style.transition += ',transform 220ms cubic-bezier(0.23,1,0.32,1)';
    });
  }

  /* ── живой экран: сайт собирает сам себя ─────────────────────────── */
  const bro = $('[data-bro]');
  const THEMES = [
    { id: 'kolos', who: 'пекарня «колос»', slug: 'kolos/', logo: 'колос', nav: 'корзина', kick: 'пекарня на закваске', h: 'хлеб, который пекут при вас', cta: 'заказать',
      p: 'печём на живой закваске из муки двух мельниц. заказ на сайте, забрать в пекарне.',
      c: [['пшеничный на закваске', '290 ₽'], ['бородинский', '240 ₽'], ['чиабатта', '180 ₽']] },
    { id: 'zerno', who: 'обжарка «зерно»', slug: 'zerno/', logo: 'зерно', nav: 'корзина', kick: 'своя обжарка', h: 'кофе, обжаренный на этой неделе', cta: 'выбрать зерно',
      p: 'обжариваем небольшими партиями и отправляем в день заказа. молотый или в зерне.',
      c: [['эфиопия иргачеф', '1 150 ₽'], ['колумбия уила', '990 ₽'], ['бразилия сантос', '840 ₽']] },
    { id: 'glina', who: 'мастерская «глина»', slug: 'glina/', logo: 'глина', nav: 'корзина', kick: 'керамическая мастерская', h: 'посуда, которую делают руками', cta: 'в каталог',
      p: 'каждая вещь в одном экземпляре. лепим, обжигаем и глазуруем у себя в мастерской.',
      c: [['ваза «бочка»', '4 800 ₽'], ['пиала', '1 600 ₽'], ['блюдо', '3 200 ₽']] },
  ];
  if (bro) {
    const ms = $('[data-ms]', bro), cur = $('[data-cur]', bro), view = $('.bro__view', bro);
    const slug = $('[data-slug]', bro), who = $('[data-who]');
    const hEl = $('[data-f="h"]', ms), cta = $('[data-cta]', ms), hover = $('[data-hover]', ms), img = $('[data-img]', ms);
    const fill = (th) => {
      ms.dataset.theme = th.id;
      $('[data-f="logo"]', ms).textContent = th.logo;
      $('[data-f="nav"]', ms).textContent = th.nav;
      $('[data-f="kick"]', ms).textContent = th.kick;
      $('[data-f="p"]', ms).textContent = th.p;
      $('[data-f="cta"]', ms).textContent = th.cta;
      th.c.forEach(([n, p], i) => { $(`[data-f="c${i}"]`, ms).textContent = n; $(`[data-f="p${i}"]`, ms).textContent = p; });
      if (who) who.textContent = th.who;
    };
    // картинки следующих тем тянем заранее, чтобы шторка не открывала пустоту
    THEMES.slice(1).forEach((th) => { const im = new Image(); im.src = `/img/${th.id}.webp`; });

    /* наклон окна за курсором, до 7°, возврат за 220 мс */
    if (fine && !still) {
      const stage = bro.parentElement;
      stage.addEventListener('pointermove', (e) => {
        const r = bro.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        bro.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg');
        bro.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
      });
      stage.addEventListener('pointerleave', () => { bro.style.setProperty('--ry', '0deg'); bro.style.setProperty('--rx', '0deg'); });
    }

    if (!still && !og) {
      let visible = true;
      new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0.15 }).observe(bro);
      // пауза, которая ждёт, пока окно снова в кадре и вкладка открыта
      const sleep = (ms0) => new Promise((res) => {
        let left = ms0, last = performance.now();
        const tick = (now) => {
          if (visible && !document.hidden) left -= now - last;
          last = now;
          if (left <= 0) res(); else requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      const type = async (el, text, step) => {
        el.textContent = '';
        const caret = document.createElement('span');
        caret.className = 'caret';
        for (let i = 1; i <= text.length; i++) {
          el.textContent = text.slice(0, i);
          el.append(caret);
          await sleep(step);
        }
        caret.remove();
      };
      // курсор едет к середине элемента; координаты в долях окна
      const pos = { x: 0.92, y: 1.05 };
      const moveTo = async (el, dur = 700, dx = 0.5, dy = 0.55) => {
        const v = view.getBoundingClientRect(), r = el.getBoundingClientRect();
        const to = { x: (r.left - v.left + r.width * dx) / v.width, y: (r.top - v.top + r.height * dy) / v.height };
        const from = { ...pos };
        cur.animate([
          { transform: `translate(${from.x * v.width}px,${from.y * v.height}px)` },
          { transform: `translate(${to.x * v.width}px,${to.y * v.height}px)` },
        ], { duration: dur, easing: 'cubic-bezier(0.65,0,0.35,1)', fill: 'forwards' });
        pos.x = to.x; pos.y = to.y;
        await sleep(dur);
      };
      const click = async () => {
        cur.classList.remove('is-click'); void cur.offsetWidth; cur.classList.add('is-click');
        await sleep(160);
      };
      const set = (...c) => { bro.classList.remove('is-wire', 'is-fill', 'is-text', 'is-done', 'is-out'); bro.classList.add(...c); };

      const run = async () => {
        let i = 0;
        await sleep(900); // пусть сначала выедет заголовок
        for (;;) {
          const th = THEMES[i % THEMES.length];
          set('is-out');
          await sleep(450);
          set();
          fill(th);
          hEl.textContent = '';
          cur.classList.remove('is-on');
          pos.x = 0.92; pos.y = 1.05;
          cur.animate([{ transform: `translate(${pos.x * view.clientWidth}px,${pos.y * view.clientHeight}px)` }], { duration: 0, fill: 'forwards' });
          await type(slug, th.slug, 70);
          bro.classList.add('is-wire');           // разметка: пунктирные блоки
          await sleep(650);
          cur.classList.add('is-on');
          await moveTo(img, 650, 0.35, 0.4);
          await click();
          bro.classList.add('is-fill');           // заливка, шторкой открывается фото
          await sleep(700);
          bro.classList.add('is-text');           // текст
          await moveTo(hEl, 600, 0.1, 0.5);
          await type(hEl, th.h, 38);
          await moveTo(cta, 650);
          await click();
          cta.classList.remove('is-press'); void cta.offsetWidth; cta.classList.add('is-press');
          await sleep(350);
          await moveTo(hover, 600, 0.6, 0.5);
          hover.classList.add('is-hover');
          await sleep(700);
          hover.classList.remove('is-hover');
          bro.classList.add('is-done');           // готово
          await moveTo(view, 700, 0.9, 1.08);
          await sleep(1700);
          i++;
        }
      };
      run();
    }
  }

  /* ── плитки: маленькие живые картинки, крутятся, пока видны ───────── */
  const tileLoop = (el, step) => {
    if (still) return;
    let on = false, busy = false;
    new IntersectionObserver(([en]) => {
      on = en.isIntersecting;
      if (on && !busy) { busy = true; (async () => { while (on) await step(); busy = false; })(); }
    }, { threshold: 0.4 }).observe(el);
  };
  const wait = (ms0) => new Promise((r) => setTimeout(r, ms0));

  const vc = $('[data-v="cart"]');
  if (vc) {
    const btn = $('[data-v-btn]', vc), n = $('[data-v-n]', vc);
    let c = 0;
    tileLoop(vc, async () => {
      await wait(900);
      btn.classList.remove('is-press'); void btn.offsetWidth; btn.classList.add('is-press');
      await wait(260);
      c = c >= 9 ? 1 : c + 1;
      n.textContent = c;
      n.classList.remove('is-bump'); void n.offsetWidth; n.classList.add('is-bump');
    });
  }

  const vm = $('[data-v="move"]');
  if (vm) {
    const rows = $$('tr', vm), items = $$('li', vm);
    tileLoop(vm, async () => {
      items.forEach((li) => li.classList.remove('is-in'));
      await wait(500);
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.add('is-hit');
        await wait(380);
        items[i].classList.add('is-in');
        rows[i].classList.remove('is-hit');
        await wait(220);
      }
      await wait(2200);
    });
  }

  const vf = $('[data-v="find"]');
  if (vf) {
    const q = $('[data-v-q]', vf), res = $('[data-v-res]', vf), text = q.textContent;
    tileLoop(vf, async () => {
      res.classList.remove('is-on');
      q.textContent = '';
      await wait(500);
      for (let i = 1; i <= text.length; i++) { q.textContent = text.slice(0, i); await wait(55); }
      await wait(450);
      res.classList.add('is-on');
      await wait(2600);
    });
  }

  /* ── было и стало: ручку тянут мышью, пальцем или стрелками ───────── */
  const ba = $('[data-ba]');
  if (ba) {
    const range = $('[data-ba-range]', ba);
    const setPos = (v) => { ba.style.setProperty('--pos', v + '%'); range.value = Math.round(v); };
    range.addEventListener('input', () => setPos(+range.value));
    const fromX = (x) => {
      const r = $('.ba__view', ba).getBoundingClientRect();
      return Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100));
    };
    let drag = false;
    ba.addEventListener('pointerdown', (e) => { drag = true; ba.classList.add('is-drag'); setPos(fromX(e.clientX)); });
    addEventListener('pointermove', (e) => { if (drag) setPos(fromX(e.clientX)); });
    addEventListener('pointerup', () => { drag = false; ba.classList.remove('is-drag'); });
    // подсказка: ручка один раз сама ходит туда-обратно, пока её не тронули
    if (!still) {
      let touched = false;
      ba.addEventListener('pointerdown', () => { touched = true; }, { once: true });
      range.addEventListener('keydown', () => { touched = true; }, { once: true });
      new IntersectionObserver(([en], io) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const path = [[50, 0], [24, 700], [76, 1500], [50, 2300]];
        const t0 = performance.now() + 400;
        const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
        const step = (now) => {
          if (touched) return;
          const t = now - t0;
          if (t < 0) { requestAnimationFrame(step); return; }
          for (let j = 1; j < path.length; j++) {
            if (t <= path[j][1]) {
              const [a, ta] = path[j - 1], [b, tb] = path[j];
              setPos(a + (b - a) * ease((t - ta) / (tb - ta)));
              requestAnimationFrame(step);
              return;
            }
          }
          setPos(50);
        };
        requestAnimationFrame(step);
      }, { threshold: 0.5 }).observe(ba);
    }
  }

  /* ── огромное имя в подвале: буквы худеют под курсором ───────────── */
  const giant = $('[data-giant]');
  if (giant) {
    const letters = [...giant.textContent];
    giant.textContent = '';
    const spans = letters.map((ch) => { const s = document.createElement('span'); s.textContent = ch; giant.append(s); return s; });
    if (fine && !still) {
      let raf = 0, mx = -1e4;
      const paint = () => {
        raf = 0;
        spans.forEach((s) => {
          const r = s.getBoundingClientRect();
          const d = Math.abs(mx - (r.left + r.width / 2)) / innerWidth;
          s.style.setProperty('--w', Math.round(800 - 560 * Math.exp(-d * d * 60)));
        });
      };
      giant.parentElement.addEventListener('pointermove', (e) => { mx = e.clientX; if (!raf) raf = requestAnimationFrame(paint); });
      giant.parentElement.addEventListener('pointerleave', () => { mx = -1e4; if (!raf) raf = requestAnimationFrame(paint); });
    }
  }

  /* ── липкая пилюля на телефоне: когда кнопки первого экрана не видно ── */
  const dock = $('[data-dock]'), heroCta = $('[data-hero-cta]');
  if (dock && heroCta && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => dock.classList.toggle('is-hidden', en.isIntersecting || en.boundingClientRect.top > 0))
      .observe(heroCta);
  }
})();
