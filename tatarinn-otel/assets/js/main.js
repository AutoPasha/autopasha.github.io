/* ТатарИнн: движение главной. Начальные состояния анимаций задаются только
   здесь (gsap.set / fromTo), в CSS у анимируемых элементов transform нет:
   без скрипта страница остаётся целиком видимой. */
(function () {
  var html = document.documentElement;
  var тихо = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var шапка = document.querySelector('.shapka');

  // шапка: сплошной фон, как только ушли с верха первого экрана
  var фонШапки = function () { шапка.classList.toggle('shapka--fon', window.scrollY > 40); };
  window.addEventListener('scroll', фонШапки, { passive: true });
  фонШапки();

  // завтраки: вкладки
  var вкладки = Array.prototype.slice.call(document.querySelectorAll('.zavtrak-knopki [role="tab"]'));
  var выбрать = function (в) {
    вкладки.forEach(function (x) {
      var да = x === в;
      x.setAttribute('aria-selected', да ? 'true' : 'false');
      x.tabIndex = да ? 0 : -1;
      var п = document.getElementById(x.getAttribute('aria-controls'));
      if (п) п.hidden = !да;
      if (да && п && window.gsap && !тихо) {
        gsap.fromTo(п.children, { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .45, stagger: .05, ease: 'power2.out' });
      }
    });
  };
  вкладки.forEach(function (в, i) {
    в.addEventListener('click', function () { выбрать(в); });
    в.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var н = вкладки[(i + (e.key === 'ArrowRight' ? 1 : вкладки.length - 1)) % вкладки.length];
      н.focus();
      выбрать(н);
    });
  });

  // бронь: дата завтра по умолчанию и ориентир суммы по ценам отеля
  var форма = document.querySelector('#bron form');
  if (форма) {
    var дата = форма.querySelector('[name="date"]');
    var ночи = форма.querySelector('[name="nights"]');
    var гости = форма.querySelector('[name="adults"]');
    var номер = форма.querySelector('[name="room-type"]');
    var сумма = форма.querySelector('.zf-summa');
    var за = форма.querySelector('.zf-za');
    var мест = форма.querySelector('.zf-mest');
    var завтра = new Date(Date.now() + 864e5);
    var iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    if (дата && !дата.value) { дата.value = iso(завтра); дата.min = iso(new Date()); }
    var деньги = function (n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'; };
    var ночей = { 1: 'за ночь', 2: 'за две ночи', 3: 'за три ночи', 4: 'за четыре ночи', 5: 'за пять ночей', 7: 'за неделю' };
    var пересчитать = function () {
      var о = номер.options[номер.selectedIndex];
      var цена = +о.getAttribute('data-cena') || 0;
      var n = +ночи.value || 1;
      var было = сумма.textContent;
      if (цена) {
        сумма.textContent = 'от ' + деньги(цена * n);
        за.textContent = ночей[n] || '';
      } else {
        сумма.textContent = 'цену покажет бронь';
        за.textContent = '';
      }
      var м = +о.getAttribute('data-mest') || 3;
      мест.textContent = (+гости.value > м) ? 'В этом номере до ' + (м === 1 ? 'одного гостя' : м === 2 ? 'двух гостей' : 'трёх гостей') : '';
      if (было !== сумма.textContent && window.gsap && !тихо) {
        gsap.fromTo(сумма, { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .4, ease: 'power3.out' });
      }
    };
    [ночи, гости, номер].forEach(function (п) { п.addEventListener('change', пересчитать); });
    пересчитать();
  }

  // бренд в подвале во всю ширину: подгоняем размер под строку
  var слово = document.querySelector('.podval-slovo');
  var подогнать = function () {
    if (!слово) return;
    слово.style.fontSize = '';
    var строка = слово.firstElementChild;
    var ш = слово.clientWidth, н = строка ? строка.getBoundingClientRect().width : 0;
    if (н > 0) {
      var размер = parseFloat(getComputedStyle(слово).fontSize) * (ш * 0.96) / н;
      слово.style.fontSize = Math.min(размер, 340) + 'px';
    }
  };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(подогнать);
  window.addEventListener('resize', подогнать);
  подогнать();

  if (!window.gsap) { html.classList.remove('intro'); return; }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (тихо) { html.classList.remove('intro'); return; }

  // плавная прокрутка колесом, пальцем родная
  var lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ duration: 1.1, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      var цель = id.length > 1 ? document.querySelector(id) : document.body;
      if (!цель) return;
      e.preventDefault();
      var сдвиг = id === '#top' ? 0 : -(шапка.offsetHeight - 1);
      if (lenis) lenis.scrollTo(id === '#top' ? 0 : цель, { offset: сдвиг });
      else window.scrollTo({ top: id === '#top' ? 0 : цель.getBoundingClientRect().top + scrollY + сдвиг, behavior: 'smooth' });
    });
  });

  // первый экран: заставка один раз, потом заголовок из-под маски
  var герой = gsap.timeline();
  var строки = document.querySelectorAll('.hero-slovo, .hero-pod');
  gsap.set(строки, { yPercent: 105 });
  if (html.classList.contains('intro')) {
    try { sessionStorage.setItem('ti-intro', '1'); } catch (e) {}
    gsap.set('.zastavka-znak', { autoAlpha: 0, scale: .92 });
    герой
      .to('.zastavka-znak', { autoAlpha: 1, scale: 1, duration: .5, ease: 'power2.out' })
      .to('.zastavka-znak', { autoAlpha: 0, duration: .3, ease: 'power1.in' }, '+=.35')
      .to('.zastavka-pol--verh', { yPercent: -100, duration: .8, ease: 'power4.inOut' }, '-=.1')
      .to('.zastavka-pol--niz', { yPercent: 100, duration: .8, ease: 'power4.inOut' }, '<')
      .add(function () { html.classList.remove('intro'); });
  }
  герой
    .fromTo('.hero-ramka img', { scale: 1.12 }, { scale: 1, duration: 1.8, ease: 'power3.out' }, html.classList.contains('intro') ? '-=.75' : 0)
    .to(строки, { yPercent: 0, duration: 1, stagger: .12, ease: 'power4.out' }, '<.15');

  // фото первого экрана уезжает вниз медленнее страницы, в одну сторону
  gsap.to('.hero-ramka', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // слова абзаца проявляются по мере чтения
  var абзац = document.querySelector('[data-slova]');
  if (абзац) {
    абзац.innerHTML = абзац.textContent.trim().split(/\s+/).map(function (с) { return '<span class="slovo">' + с + '</span>'; }).join(' ');
    gsap.fromTo(абзац.querySelectorAll('.slovo'), { opacity: .16 }, {
      opacity: 1, stagger: .05, ease: 'none',
      scrollTrigger: { trigger: абзац, start: 'top 82%', end: 'bottom 45%', scrub: true }
    });
  }

  var mm = gsap.matchMedia();

  // компьютер: три закреплённые сцены
  mm.add('(min-width: 900px)', function () {
    // 1. дом на Марджани: фото растёт из карточки на весь экран, потом расстояния
    var дом = gsap.timeline({ scrollTrigger: { trigger: '.dom-scena', start: 'top top', end: '+=170%', pin: true, scrub: .6 } });
    дом
      .fromTo('.dom-ramka', { clipPath: 'inset(16% 30% 16% 30%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: 1 })
      .fromTo('.dom-ramka img', { scale: 1.18 }, { scale: 1, ease: 'power2.inOut', duration: 1 }, 0)
      .fromTo('.dom-panel', { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: .35 }, .75)
      .fromTo('.dom-spisok li', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, stagger: .22, duration: .3 }, 1)
      .fromTo('.dom-marshrut', { autoAlpha: 0 }, { autoAlpha: 1, duration: .2 }, '>');

    // 2. два сюита: шторка с мансарды на озеро, текст меняется вместе с ней
    html.classList.add('dvizh');
    var два = gsap.timeline({ scrollTrigger: { trigger: '.dva-scena', start: 'top top', end: '+=120%', pin: true, scrub: .6 } });
    два
      .fromTo('.dva-b', { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: 1 }, .15)
      .fromTo('.dva-a', { scale: 1 }, { scale: 1.08, ease: 'none', duration: 1.15 }, 0)
      // текст меняется сразу, без полупрозрачной середины: иначе на полпути он не читается
      .fromTo('.dva-v--a', { autoAlpha: 1 }, { autoAlpha: 0, duration: .01 }, .55)
      .fromTo('.dva-v--b', { autoAlpha: 0 }, { autoAlpha: 1, duration: .01 }, .56)
      .fromTo('.dva-v--b', { y: 24 }, { y: 0, duration: .3, ease: 'power2.out' }, .56);

    // 3. от заезда до выезда: линия рисуется, шаги загораются по очереди
    var путь = document.querySelector('.sutki-liniya path');
    var длина = путь.getTotalLength();
    var сутки = gsap.timeline({ scrollTrigger: { trigger: '.sutki-scena', start: 'top top', end: '+=140%', pin: true, scrub: .6 } });
    сутки.fromTo(путь, { strokeDasharray: длина, strokeDashoffset: длина }, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);
    document.querySelectorAll('.sutki-shagi li').forEach(function (li, i) {
      сутки.fromTo(li, { autoAlpha: .18, y: 18 }, { autoAlpha: 1, y: 0, duration: .18 }, i * .24);
    });
    return function () { html.classList.remove('dvizh'); };
  });

  // телефон: те же сцены без закрепления, короткими проявлениями
  mm.add('(max-width: 899px)', function () {
    gsap.fromTo('.dom-ramka img', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.dom-ramka', start: 'top bottom', end: 'bottom top', scrub: true } });
    document.querySelectorAll('.dom-spisok li, .sutki-shagi li, .dva-v').forEach(function (el) {
      gsap.fromTo(el, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });
  });

  // заголовки секций: строка выезжает из-под нижнего края
  document.querySelectorAll('.slova-h, .zavtrak-h, .sutki-h, .dva-h, .dom-h').forEach(function (h) {
    gsap.fromTo(h, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
  });
  gsap.fromTo('.zavtrak-foto img', { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut', scrollTrigger: { trigger: '.zavtrak-foto', start: 'top 80%', once: true } });

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
