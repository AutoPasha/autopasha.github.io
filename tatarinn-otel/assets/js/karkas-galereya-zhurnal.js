/* Каркас «галерея журналом»: кадры раскрываются маской и едут с разной
   скоростью (data-skorost у кадра, -12…12; на телефоне вдвое слабее). */
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('[data-karkas="galereya-zhurnal"]').forEach(function (корень) {
    gsap.context(function () {
      var mm = gsap.matchMedia();
      mm.add({ широко: '(min-width: 900px)', движение: '(prefers-reduced-motion: no-preference)' }, function (c) {
        if (!c.conditions.движение) return;
        var сила = c.conditions.широко ? 1 : .5;
        корень.querySelectorAll('.gz-kadr').forEach(function (к) {
          var рамка = к.querySelector('.gz-ramka');
          gsap.fromTo(рамка, { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: к, start: 'top 88%', once: true } });
          gsap.fromTo(рамка.querySelector('img'), { yPercent: -10 },
            { yPercent: 0, ease: 'none', scrollTrigger: { trigger: к, start: 'top bottom', end: 'bottom top', scrub: true } });
          var скорость = parseFloat(к.getAttribute('data-skorost') || '0') * сила;
          if (скорость) {
            gsap.fromTo(к, { yPercent: скорость }, { yPercent: -скорость, ease: 'none',
              scrollTrigger: { trigger: к, start: 'top bottom', end: 'bottom top', scrub: true } });
          }
        });
      });
    }, корень);
  });
})();
