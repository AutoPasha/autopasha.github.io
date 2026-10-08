/* Каркас «заявка фразой»: магнитная кнопка под мышью и ответ после
   отправки. Куда уходит заявка — решает сайт: у витрины ответ на месте,
   у сайта адресата — его обработчик (атрибут action формы). */
(function () {
  document.querySelectorAll('[data-karkas="zayavka-fraza"]').forEach(function (корень) {
    var форма = корень.querySelector('form');
    var ответ = корень.querySelector('.zf-otvet');
    if (форма && !форма.getAttribute('action')) {
      форма.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!форма.reportValidity()) return;
        if (ответ) ответ.textContent = форма.getAttribute('data-otvet') || 'Спасибо, перезвоним в течение 15 минут.';
      });
    }
    if (!window.gsap) return;
    gsap.context(function () {
      var mm = gsap.matchMedia();
      mm.add('(hover: hover) and (min-width: 900px) and (prefers-reduced-motion: no-preference)', function () {
        var кнопка = корень.querySelector('.zf-knopka');
        if (!кнопка) return;
        var x = gsap.quickTo(кнопка, 'x', { duration: .4, ease: 'power3' });
        var y = gsap.quickTo(кнопка, 'y', { duration: .4, ease: 'power3' });
        var тянуть = function (e) {
          var r = кнопка.getBoundingClientRect();
          x((e.clientX - r.left - r.width / 2) * .35);
          y((e.clientY - r.top - r.height / 2) * .35);
        };
        var отпустить = function () { x(0); y(0); };
        кнопка.addEventListener('mousemove', тянуть);
        кнопка.addEventListener('mouseleave', отпустить);
        return function () { кнопка.removeEventListener('mousemove', тянуть); кнопка.removeEventListener('mouseleave', отпустить); };
      });
    }, корень);
  });
})();
