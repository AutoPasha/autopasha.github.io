(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const narrow = matchMedia('(max-width: 899px)');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = t => t * t * (3 - 2 * t);

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (!reduce && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const intro = document.querySelector('.intro');
  const introCount = intro.querySelector('.intro-count');
  if (reduce || sessionStorage.getItem('shelk-intro')) {
    intro.remove();
  } else {
    sessionStorage.setItem('shelk-intro', '1');
    const o = { v: 0 };
    gsap.to(o, {
      v: 100,
      duration: 0.9,
      ease: 'power2.inOut',
      onUpdate: () => { introCount.textContent = Math.round(o.v); },
      onComplete: () => {
        intro.classList.add('is-done');
        setTimeout(() => intro.remove(), 700);
      }
    });
  }

  const hero = document.querySelector('.hero');
  const video = hero.querySelector('video');
  const win = hero.querySelector('.hero-window');
  const word = document.getElementById('win-word');
  const fill = document.getElementById('win-fill');
  const measure = hero.querySelector('.hero-measure');
  const plate = hero.querySelector('.hero-plate');
  const foot = document.querySelector('.foot-word');
  const footWrap = document.querySelector('.site-foot');
  let W = 0, H = 0, F0 = 200;

  const textWidth = el => {
    const r = document.createRange();
    r.selectNodeContents(el);
    return r.getBoundingClientRect().width;
  };

  function layoutHero() {
    W = hero.clientWidth;
    H = hero.clientHeight;
    const emWidth = textWidth(measure) / 100;
    F0 = (W * 0.92) / emWidth;
    word.setAttribute('font-size', F0.toFixed(2));
    word.setAttribute('y', (F0 * 0.32).toFixed(2));
  }

  function renderHero(p) {
    const f1 = ease(clamp(p / 0.6));
    word.setAttribute('transform', `translate(${W / 2} ${H / 2}) scale(${(1 + f1 * 2.4).toFixed(4)})`);
    const f2 = ease(clamp((p - 0.5) / 0.42));
    const w = W * f2, h = H * f2;
    fill.setAttribute('x', ((W - w) / 2).toFixed(1));
    fill.setAttribute('y', ((H - h) / 2).toFixed(1));
    fill.setAttribute('width', w.toFixed(1));
    fill.setAttribute('height', h.toFixed(1));
    const pl = ease(clamp((p - 0.86) / 0.14));
    plate.style.opacity = pl.toFixed(3);
    plate.style.transform = `translateY(${((1 - pl) * 24).toFixed(1)}px)`;
  }

  function fitFoot() {
    foot.style.fontSize = '100px';
    const emWidth = textWidth(foot) / 100;
    foot.style.fontSize = `${((footWrap.clientWidth * 0.97) / emWidth).toFixed(1)}px`;
  }

  video.muted = true;
  if (reduce) {
    video.pause();
    video.removeAttribute('autoplay');
    plate.style.opacity = 1;
    plate.style.transform = 'none';
  } else {
    video.play().catch(() => {});
  }

  const swatches = [...document.querySelectorAll('.swatch')];
  const fanStage = document.querySelector('.fan-stage');
  const info = document.querySelector('.fan-info');
  const hint = document.querySelector('.fan-hint');
  let openIdx = -1;

  function renderFan(p) {
    const k = clamp(p / 0.7);
    const f = ease(k);
    fanStage.classList.toggle('labels-on', k >= 0.95);
    const mobile = narrow.matches;
    swatches.forEach((el, i) => {
      const r = mobile ? -i * 1.3 * f : -i * 10.4 * f;

      const ty = mobile
        ? -i * (el.offsetHeight + 10) * f - i * 6 * (1 - f)
        : -i * 12 * (1 - f);
      el.style.setProperty('--r', `${r.toFixed(2)}deg`);
      el.style.setProperty('--ty', `${ty.toFixed(2)}px`);
    });
  }

  function closeSwatch() {
    if (openIdx < 0) return;
    const el = swatches[openIdx];
    el.classList.remove('is-open');
    el.classList.add('is-closing');
    setTimeout(() => el.classList.remove('is-closing'), 820);
    info.classList.remove('is-on');
    hint.style.opacity = 1;
    openIdx = -1;
  }

  function openSwatch(i) {
    closeSwatch();
    const el = swatches[i];
    const W2 = fanStage.clientWidth, H2 = fanStage.clientHeight;
    const cx = el.offsetLeft + el.offsetWidth / 2;
    const cy = el.offsetTop + el.offsetHeight / 2;
    el.style.setProperty('--ox', `${(W2 / 2 - cx).toFixed(1)}px`);
    el.style.setProperty('--oy', `${(H2 * 0.3 - cy).toFixed(1)}px`);
    el.classList.add('is-open');
    info.querySelector('.info-name').textContent = el.dataset.name;
    info.querySelector('.info-desc').textContent = el.dataset.desc;
    info.querySelector('.info-price').textContent = el.dataset.price;
    info.classList.add('is-on');
    hint.style.opacity = 0;
    openIdx = i;
  }

  swatches.forEach((el, i) => {
    el.addEventListener('click', () => (openIdx === i ? closeSwatch() : openSwatch(i)));
  });

  const track = document.querySelector('.film-track');
  const frames = [...document.querySelectorAll('.frame')];

  function renderSepia() {
    frames.forEach(fr => {
      const r = fr.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const t = clamp(1 - Math.abs(c - innerWidth / 2) / (innerWidth * 0.45));
      fr.style.setProperty('--t', t.toFixed(3));
    });
  }

  const filmDist = () => Math.max(0, track.scrollWidth - track.clientWidth);

  function renderFilm(p) {
    track.style.transform = `translate3d(${(-filmDist() * p).toFixed(1)}px, 0, 0)`;
    renderSepia();
  }

  ScrollTrigger.addEventListener('refreshInit', () => {
    layoutHero();
    fitFoot();
  });

  ScrollTrigger.matchMedia({
    '(min-width: 900px)': () => {
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: () => `+=${2.6 * innerHeight}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: s => renderHero(s.progress)
      });
      ScrollTrigger.create({
        trigger: fanStage.parentElement,
        start: 'top top',
        end: () => `+=${2.2 * innerHeight}`,
        pin: fanStage,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: s => renderFan(s.progress)
      });
      ScrollTrigger.create({
        trigger: document.getElementById('mastera'),
        start: 'top top',
        end: () => `+=${Math.max(0.6 * innerHeight, filmDist())}`,
        pin: '.film-stage',
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: s => renderFilm(s.progress)
      });
    },
    '(max-width: 899px)': () => {
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: () => `+=${1.2 * innerHeight}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: s => renderHero(s.progress)
      });
      ScrollTrigger.create({
        trigger: fanStage.parentElement,
        start: 'top top',
        end: () => `+=${1.0 * innerHeight}`,
        pin: fanStage,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: s => renderFan(s.progress)
      });
      track.addEventListener('scroll', renderSepia, { passive: true });
    }
  });

  layoutHero();
  fitFoot();
  if (!reduce) win.style.clipPath = 'url(#win-clip)';
  renderHero(0);
  renderFan(0);
  renderSepia();
  if (reduce) renderHero(1);
})();
