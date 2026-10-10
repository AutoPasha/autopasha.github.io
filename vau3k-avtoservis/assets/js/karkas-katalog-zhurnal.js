/* Каркас «каталог журналом»: фото за курсором над строками, проявление
   строк и раскрытие разворотов. Без GSAP страница остаётся читаемой:
   начальные состояния задаёт только этот файл. */
(function () {
  if (!window.gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('[data-karkas="katalog-zhurnal"]').forEach(function (корень) {
    gsap.context(function () {
      var mm = gsap.matchMedia();
      mm.add({
        мышь: '(hover: hover) and (min-width: 900px)',
        движение: '(prefers-reduced-motion: no-preference)'
      }, function (c) {
        var м = c.conditions;
        if (м.движение && window.ScrollTrigger) {
          ScrollTrigger.batch(корень.querySelectorAll('.kz-stroka'), {
            start: 'top 92%',
            once: true,
            onEnter: function (строки) {
              gsap.fromTo(строки, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7, stagger: .06, ease: 'power3.out' });
            }
          });
          корень.querySelectorAll('.kz-razvorot').forEach(function (р) {
            gsap.fromTo(р.querySelector('.kz-ramka'), { clipPath: 'inset(18% 0 18% 0)' },
              { clipPath: 'inset(0% 0 0% 0)', ease: 'none', scrollTrigger: { trigger: р, start: 'top 90%', end: 'top 40%', scrub: true } });
            gsap.fromTo(р.querySelector('img'), { yPercent: -8 },
              { yPercent: 0, ease: 'none', scrollTrigger: { trigger: р, start: 'top bottom', end: 'bottom top', scrub: true } });
          });
        }
        if (!м.мышь) return;
        var след = корень.querySelector('.kz-sled');
        if (!след) return;
        var x = gsap.quickTo(след, 'x', { duration: .5, ease: 'power3' });
        var y = gsap.quickTo(след, 'y', { duration: .5, ease: 'power3' });
        var двигать = function (e) { x(e.clientX + 24); y(e.clientY - след.offsetHeight / 2); };
        var спрятать = function () { gsap.to(след, { autoAlpha: 0, scale: .92, duration: .25 }); };
        // фото живёт, пока мышь над строкой: прокрутка и уход из секции его убирают,
        // иначе оно остаётся висеть над чужим текстом
        корень.addEventListener('mousemove', двигать);
        корень.addEventListener('mouseleave', спрятать);
        window.addEventListener('scroll', спрятать, { passive: true });
        корень.querySelectorAll('.kz-stroka[data-foto]').forEach(function (с) {
          с.addEventListener('mouseenter', function () {
            след.src = с.getAttribute('data-foto');
            gsap.to(след, { autoAlpha: 1, scale: 1, duration: .35 });
          });
          с.addEventListener('mouseleave', спрятать);
        });
        return function () {
          корень.removeEventListener('mousemove', двигать);
          корень.removeEventListener('mouseleave', спрятать);
          window.removeEventListener('scroll', спрятать);
        };
      });
    }, корень);
  });
})();
