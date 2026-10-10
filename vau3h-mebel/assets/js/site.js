(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('img.ph-img').forEach((im) => {
    const on = () => im.classList.add('is-in');
    if (im.complete && im.naturalWidth > 0) on();
    else im.addEventListener('load', on, { once: true });
  });

  const act = document.querySelector('.act-wood');
  const swatches = [...document.querySelectorAll('.swatch')];
  const pick = (sp) => {
    act.dataset.species = sp;
    swatches.forEach((s) => s.setAttribute('aria-pressed', String(s.dataset.sp === sp)));
  };
  swatches.forEach((s) => {
    s.addEventListener('click', () => pick(s.dataset.sp));
    s.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') pick(s.dataset.sp); });
  });

  const intro = document.querySelector('.intro');
  const fibers = document.querySelector('.fibers');
  const media = document.querySelector('.hero-media');
  const video = document.querySelector('.hero-video');
  const canvas = document.querySelector('.hero-canvas');

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    if (intro) intro.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (!reduce && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const NS = 'http://www.w3.org/2000/svg';
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const fiberGroup = document.createElementNS(NS, 'g');
  const FIBERS = 38;
  for (let i = 0; i < FIBERS; i += 1) {
    const y = (i + 0.5) * (1000 / FIBERS) + (rnd() - 0.5) * 10;
    const a = (rnd() - 0.5) * 90;
    const b = (rnd() - 0.5) * 90;
    const c = (rnd() - 0.5) * 60;
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('class', 'fiber');
    p.setAttribute('pathLength', '1');
    p.setAttribute('d', `M-20 ${y} C 260 ${y + a} 620 ${y + b} 1020 ${y + c}`);
    fiberGroup.appendChild(p);
  }
  fibers.appendChild(fiberGroup);

  const heroEnter = () => {
    gsap.from('.hero-title .ln-in', { yPercent: 100, duration: 1.2, ease: 'expo.out' });
    gsap.from('.plate-title .ln-in', { yPercent: 100, duration: 1, ease: 'expo.out', stagger: 0.08, delay: 0.15 });
    gsap.from('.plate-note, .cta', { opacity: 0, y: 16, duration: 0.8, ease: 'power2.out', stagger: 0.1, delay: 0.5 });
    gsap.from(media, { clipPath: 'inset(40% 0% 40% 0%)', duration: 1.3, ease: 'expo.inOut' });
    gsap.fromTo('.fiber', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', stagger: 0.02, delay: 0.2 });
    gsap.to(fiberGroup, { x: 7, y: -4, duration: 4.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  };

  const runIntro = (done) => {
    const count = intro.querySelector('.intro-count');
    const line = intro.querySelector('.intro-line');
    const state = { v: 0 };
    gsap.set(line, { scaleX: 0, transformOrigin: '0% 50%' });
    gsap.timeline({ onComplete: () => { intro.remove(); done(); } })
      .to(line, { scaleX: 1, duration: 0.8, ease: 'expo.inOut' }, 0)
      .to(state, { v: 100, duration: 0.8, ease: 'power2.inOut', onUpdate: () => { count.textContent = String(Math.round(state.v)); } }, 0)
      .to(intro, { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, 1);
  };

  const introSeen = sessionStorage.getItem('yasen-intro');
  if (reduce || introSeen) {
    if (intro) intro.remove();
    if (!reduce) heroEnter();
  } else {
    sessionStorage.setItem('yasen-intro', '1');
    runIntro(heroEnter);
  }

  const pct = (v) => () => `+=${v}%`;

  if (reduce) {
    video.pause();
    return;
  }

  const ctx2d = canvas.getContext('2d');
  const posterImg = new Image();
  posterImg.src = video.poster;
  const SPEEDS = [1.15, 0.8, 0.45];
  let W = 0;
  let H = 0;
  let heroP = 0;
  let heroVisible = true;

  const sizeCanvas = () => {
    const r = media.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = Math.round(r.width);
    H = Math.round(r.height);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  sizeCanvas();
  window.addEventListener('resize', sizeCanvas);
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(media);

  const frameSource = () => {
    if (video.readyState >= 2) return video;
    return posterImg.complete && posterImg.naturalWidth > 0 ? posterImg : null;
  };

  const drawSlices = () => {
    const p = heroP;
    fibers.style.opacity = String(Math.max(0, 1 - p * 1.6));
    if (p <= 0.001) {
      canvas.style.opacity = '0';
      video.style.opacity = '1';
      return;
    }
    const s = frameSource();
    if (!s) return;
    const sw = s.videoWidth || s.naturalWidth;
    const sh = s.videoHeight || s.naturalHeight;
    const k = Math.max(W / sw, H / sh);
    const dw = sw * k;
    const dh = sh * k;
    const ox = (W - dw) / 2;
    const oy = (H - dh) / 2;
    ctx2d.clearRect(0, 0, W, H);
    for (let i = 0; i < 3; i += 1) {
      const y0 = (H * i) / 3;
      const shift = -p * H * SPEEDS[i];
      ctx2d.save();
      ctx2d.beginPath();
      ctx2d.rect(0, y0 + shift, W, H / 3);
      ctx2d.clip();
      ctx2d.drawImage(s, ox, oy + shift, dw, dh);
      ctx2d.restore();
    }
    canvas.style.opacity = '1';
    video.style.opacity = '0';
  };

  const loop = () => {
    if (heroVisible) drawSlices();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  document.fonts.ready.then(() => ScrollTrigger.refresh());

  const mm = gsap.matchMedia();
  mm.add({ desk: '(min-width: 900px)', phone: '(max-width: 899px)' }, (ctx) => {
    const desk = ctx.conditions.desk;

    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: pct(desk ? 100 : 70),
      pin: true,
      scrub: true,
      onUpdate: (self) => { heroP = self.progress; },
    });

    // экран не пустой с первого кадра: чертёж наполовину начерчен, низ фото и шаги уже видны
    gsap.timeline({
      scrollTrigger: { trigger: '.act-blue', start: 'top top', end: pct(desk ? 200 : 140), pin: true, scrub: true },
    })
      .fromTo('.drawing .ln', { strokeDashoffset: 0.55 }, { strokeDashoffset: 0, duration: 0.4, stagger: 0.03, ease: 'none' }, 0)
      .fromTo('.wardrobe', { clipPath: 'inset(55% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'none' }, 0.4)
      .to('.dim-w', { y: -18, opacity: 0, duration: 0.4, ease: 'none' }, 0.55)
      .to('.dim-h', { x: -14, opacity: 0, duration: 0.4, ease: 'none' }, 0.55)
      .to('.dim-d', { y: 18, opacity: 0, duration: 0.4, ease: 'none' }, 0.55)
      .fromTo('.steps li', { opacity: 0.4, x: 18 }, { opacity: 1, x: 0, stagger: 0.07, duration: 0.3, ease: 'none' }, 0.6)
      .fromTo('.steps-note', { opacity: 0.4 }, { opacity: 1, duration: 0.2, ease: 'none' }, 0.9)
      .to('.drawing', { opacity: 0, duration: 0.25, ease: 'none' }, 0.85);

    ScrollTrigger.create({ trigger: '.words-scene', start: 'top top', end: pct(desk ? 100 : 80), pin: true });
    // слова начинают проявляться ещё на подходе, пока сцена въезжает
    gsap.fromTo('.words .w', { opacity: 0.3 }, {
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: 'none',
      scrollTrigger: { trigger: '.words-scene', start: 'top 70%', end: pct(desk ? 130 : 100), scrub: true },
    });
  });

  if (matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnet').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.25);
        yTo((e.clientY - r.top - r.height / 2) * 0.25);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  }
})();
