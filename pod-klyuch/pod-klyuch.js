// design.autopasha.ru/pod-klyuch: рельеф первого экрана, билет в наклоне, лента условий,
// манифест по словам, строки прайса со счётчиком цены, линия оплаты.
(() => {
  const doc = document.documentElement;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  doc.classList.add('js');

  // ── рельеф: тот же шейдер, что на главной autopasha.ru (web/components/site/relief.tsx)
  const cv = document.querySelector('[data-relief]');
  if (cv && !calm) relief(cv);
  function relief(cv) {
    const g = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
    if (!g) return;
    const der = g.getExtension('OES_standard_derivatives');
    const fs = (der ? '#extension GL_OES_standard_derivatives : enable\n' : '') +
`precision highp float;
uniform vec2 r;uniform float t;uniform vec2 m;uniform float e;uniform vec2 st;uniform float dn;
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
  float n=h*dn;
  ${der ? 'float w=fwidth(n);' : 'float w=.03;'}
  float line=1.-clamp(abs(fract(n)-.5)/(w*1.1),0.,1.);
  float major=step(3.5,mod(floor(n),4.));
  float near=exp(-d*d*2.2)*e;
  float stage=exp(-pow(length(p-st),2.)*1.4);
  vec3 bg=vec3(.058,.047,.04)+vec3(.22,.08,.02)*stage*.55;
  vec3 hot=vec3(1.,.47,.17);
  float a=line*(.10+.2*major+.5*near+.18*stage);
  gl_FragColor=vec4(bg+hot*a+hot*near*.05,1.);
}`;
    const sh = (type, src) => { const s = g.createShader(type); g.shaderSource(s, src); g.compileShader(s); return g.getShaderParameter(s, g.COMPILE_STATUS) ? s : null; };
    const v = sh(g.VERTEX_SHADER, 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}');
    const f = sh(g.FRAGMENT_SHADER, fs);
    if (!v || !f) return;
    const pr = g.createProgram();
    g.attachShader(pr, v); g.attachShader(pr, f); g.linkProgram(pr);
    if (!g.getProgramParameter(pr, g.LINK_STATUS)) return;
    g.useProgram(pr);
    g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer());
    g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), g.STATIC_DRAW);
    const loc = g.getAttribLocation(pr, 'p');
    g.enableVertexAttribArray(loc);
    g.vertexAttribPointer(loc, 2, g.FLOAT, false, 0, 0);
    const U = {}; ['r', 't', 'm', 'e', 'st', 'dn'].forEach(k => U[k] = g.getUniformLocation(pr, k));
    const dpr = Math.min(devicePixelRatio || 1, fine ? 1.25 : 1);
    const scale = fine ? 1 : 0.6;
    const size = () => {
      cv.width = Math.max(1, Math.round(cv.clientWidth * dpr * scale));
      cv.height = Math.max(1, Math.round(cv.clientHeight * dpr * scale));
      g.viewport(0, 0, cv.width, cv.height);
    };
    size();
    new ResizeObserver(size).observe(cv);
    // пятно стоит у билета: справа на компьютере, внизу на телефоне, под текст не заходит
    const glow = () => innerWidth >= 900 ? [0.5, 0.0] : [0.15, -0.28];
    const mouse = { x: .75, y: .5, tx: .75, ty: .5 };
    if (fine) cv.parentElement.addEventListener('pointermove', ev => {
      const r = cv.getBoundingClientRect();
      mouse.tx = Math.max(.5, (ev.clientX - r.left) / r.width);
      mouse.ty = (ev.clientY - r.top) / r.height;
    }, { passive: true });
    let visible = true;
    new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(cv);
    const t0 = performance.now();
    const loop = now => {
      requestAnimationFrame(loop);
      if (!visible) return;
      const tt = (now - t0) / 1000;
      if (!fine) {
        // на касании пятно ходит само, но только по нижней части экрана, где билет
        mouse.tx = 0.55 + Math.sin(tt * 0.35) * 0.3;
        mouse.ty = 0.8 + Math.cos(tt * 0.27) * 0.12;
      }
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      const st = glow();
      g.uniform2f(U.r, cv.width, cv.height);
      g.uniform1f(U.t, tt);
      g.uniform2f(U.m, mouse.x * cv.width, (1 - mouse.y) * cv.height);
      g.uniform1f(U.e, fine ? 1 : 0.7);
      g.uniform2f(U.st, st[0], st[1]);
      g.uniform1f(U.dn, 13);
      g.drawArrays(g.TRIANGLES, 0, 3);
    };
    requestAnimationFrame(loop);
  }

  // ── билет: десять рабочих дней загораются по одному, потом вторая половина оплаты
  const ticket = document.querySelector('[data-ticket]');
  if (ticket) {
    const days = ticket.querySelectorAll('.ticket__days span');
    const count = ticket.querySelector('[data-day]');
    if (calm) { days.forEach(d => d.classList.add('is-on')); count.textContent = '10'; ticket.classList.add('is-done'); }
    else {
      let i = 0;
      const tick = () => {
        if (i >= days.length) { ticket.classList.add('is-done'); return; }
        days[i].classList.add('is-on');
        count.textContent = String(++i);
        setTimeout(tick, i === 5 ? 420 : 230);
      };
      setTimeout(tick, 450);
    }
    // наклон за мышью
    if (!calm && fine) {
      const stage = document.querySelector('[data-stage]');
      stage.addEventListener('pointermove', ev => {
        const r = stage.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width - .5, y = (ev.clientY - r.top) / r.height - .5;
        ticket.classList.add('is-live');
        ticket.style.setProperty('--ry', (-10 + x * 14).toFixed(2) + 'deg');
        ticket.style.setProperty('--rx', (5 - y * 10).toFixed(2) + 'deg');
      });
      stage.addEventListener('pointerleave', () => {
        ticket.classList.remove('is-live');
        ticket.style.removeProperty('--ry'); ticket.style.removeProperty('--rx');
      });
    }
  }

  // ── лента: копия содержимого, чтобы шла без шва
  const band = document.querySelector('[data-band]');
  if (band) band.innerHTML += band.innerHTML;

  // ── манифест: делим на слова, слова загораются по прокрутке
  const say = document.querySelector('[data-say]');
  const words = [];
  if (say) {
    const wrap = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
            else { const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s); words.push(s); }
          });
          n.replaceWith(frag);
        } else wrap(n);
      });
    };
    wrap(say.querySelector('[data-words]'));
    if (calm) words.forEach(w => w.classList.add('is-on'));
  }
  function lightWords() {
    if (!say || calm) return;
    const r = say.getBoundingClientRect();
    const pr = innerWidth >= 900
      ? -r.top / Math.max(1, r.height - innerHeight) * 1.15
      : (innerHeight * 0.85 - r.top) / (r.height * 0.9);
    const n = Math.round(Math.min(1, Math.max(0, pr)) * words.length);
    words.forEach((w, k) => w.classList.toggle('is-on', k < n));
  }

  // ── строки прайса проявляются, цена досчитывает до своей
  const rows = document.querySelectorAll('[data-row]');
  const fmt = v => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
  const countUp = el => {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    if (!target || calm) return;
    const t0 = performance.now(), dur = 900;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(k < 1 ? Math.round(target * e / 1000) * 1000 : target);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (calm || !('IntersectionObserver' in window)) rows.forEach(r => r.classList.add('is-in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      countUp(e.target.querySelector('.row__price'));
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -12% 0px' });
    rows.forEach(r => io.observe(r));
  }

  // ── линия оплаты заполняется по прокрутке, круги загораются по мере прохода
  const steps = document.querySelector('[data-steps]');
  const items = steps ? [...steps.querySelectorAll('.step')] : [];
  function fillSteps() {
    if (!steps) return;
    if (calm) { steps.style.setProperty('--fill', 1); items.forEach(s => s.classList.add('is-on')); return; }
    const r = steps.getBoundingClientRect();
    const start = innerHeight * 0.85, end = innerHeight * 0.35;
    const p = Math.min(1, Math.max(0, (start - r.top) / (r.height + start - end)));
    steps.style.setProperty('--fill', p.toFixed(3));
    const vertical = innerWidth < 900;
    items.forEach((s, k) => {
      const at = vertical ? (s.offsetTop + 28) / r.height : (k + 0.15) / items.length;
      s.classList.toggle('is-on', p >= at - 0.001);
    });
  }

  // ── шапка темнеет после первого экрана
  const top = document.querySelector('[data-top]');
  const onScroll = () => {
    top.classList.toggle('is-stuck', scrollY > 24);
    lightWords();
    fillSteps();
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();
