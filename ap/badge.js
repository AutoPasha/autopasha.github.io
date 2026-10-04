/* badge.js — плашка «макет от автопаши» на каждом макете design.autopasha.ru.
   Вписывает её команда выкладки (memory/recipes/design_publish.py) строкой
   <script src="/ap/badge.js" defer data-ap="папка"></script>.

   Язычок на левом краю по центру высоты: внизу у макетов свои корзины,
   кнопки мессенджеров и всплывашки, наверху шапка. Всё в теневом DOM, со
   своими именами шрифтов: стили макета плашку не трогают, и она их тоже.
   Нажали — раскрывается карточка «кто это нарисовал» с кнопкой «нанять». */
(() => {
  if (window.__apBadge) return;
  window.__apBadge = true;
  const me = document.currentScript;
  const base = me && me.src ? new URL('/', me.src) : new URL('/', location.href);
  const folder = (me && me.dataset.ap) || location.pathname.split('/').filter(Boolean)[0] || 'root';
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hire = 'https://autopasha.ru/apply?utm_source=design&utm_medium=badge&utm_campaign=' + encodeURIComponent(folder);

  // шрифты бренда под своими именами, чтобы не спорить с шрифтами макета
  const faces = [
    ['apUnb', 'Unbounded.woff2', '200 900', 'U+0000-00FF,U+2000-206F,U+20AC,U+20BD'],
    ['apUnb', 'Unbounded-cyr.woff2', '200 900', 'U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116'],
    ['apOne', 'Onest.woff2', '100 900', 'U+0000-00FF,U+2000-206F,U+20AC,U+20BD'],
    ['apOne', 'Onest-cyr.woff2', '100 900', 'U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116'],
  ];
  if (window.FontFace && document.fonts) {
    faces.forEach(([fam, file, weight, range]) => {
      try { document.fonts.add(new FontFace(fam, `url(${new URL('fonts/' + file, base)}) format("woff2")`, { weight, unicodeRange: range, display: 'swap' })); } catch (e) { /* без шрифта плашка возьмёт системный */ }
    });
  }

  const cube = (s) => `<svg viewBox="0 0 100 112" width="${s}" height="${s * 1.12}" aria-hidden="true">
    <path d="M50 26 C50 18 52 14 54 9" fill="none" stroke="#2a1a14" stroke-width="4" stroke-linecap="round"/><circle cx="54.5" cy="7.5" r="6" fill="#ff7a29"/>
    <rect x="8" y="24" width="84" height="84" rx="26" fill="#f6c8a4"/><ellipse cx="29" cy="40" rx="11" ry="5.5" fill="#fff" opacity=".42" transform="rotate(-24 29 40)"/>
    <ellipse cx="25" cy="80" rx="8" ry="4.5" fill="#f28f7d" opacity=".5"/><ellipse cx="75" cy="80" rx="8" ry="4.5" fill="#f28f7d" opacity=".5"/>
    <rect x="33" y="56" width="8" height="17" rx="4" fill="#2a1a14"/><rect x="59" y="56" width="8" height="17" rx="4" fill="#2a1a14"/></svg>`;

  const css = `
:host{all:initial}
*{box-sizing:border-box}
.ap{--void:oklch(0.155 0.010 60);--coal:oklch(0.225 0.012 60);--hot:oklch(0.705 0.195 45);--white:oklch(0.975 0.004 60);--dim:oklch(0.72 0.012 60);
  --ease:cubic-bezier(0.23,1,0.32,1);font:400 15px/1.5 apOne,system-ui,-apple-system,sans-serif;color:var(--white);-webkit-font-smoothing:antialiased}
.tab{position:fixed;left:0;top:50%;z-index:2147483000;display:flex;flex-direction:column;align-items:center;gap:10px;padding:12px 8px 14px 7px;
  background:var(--void);border:0;border-radius:0 14px 14px 0;color:var(--white);cursor:pointer;font:inherit;
  box-shadow:0 0 0 1px oklch(1 0 0/.1),0 10px 30px -8px oklch(0 0 0/.55),0 0 34px oklch(0.705 0.195 45/.22);
  transform:translate(-110%,-50%);transition:transform .5s var(--ease)}
.tab.is-on{transform:translate(0,-50%)}
.tab:hover{transform:translate(3px,-50%)}
.tab:focus-visible,.btn:focus-visible,.x:focus-visible{outline:2.5px solid var(--hot);outline-offset:3px}
.tab span{writing-mode:vertical-rl;transform:rotate(180deg);font:800 12px/1 apUnb,system-ui,sans-serif;letter-spacing:-.02em;white-space:nowrap}
.tab small{font:600 10px/1 apOne,system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:6px}
.tab em,.card em{font-style:normal;background:var(--hot);color:var(--void);padding:2px 3px 3px;border-radius:3px}
.card{position:fixed;left:14px;top:50%;z-index:2147483001;width:min(340px,calc(100vw - 28px));padding:22px 22px 20px;border-radius:24px;
  background:var(--void);box-shadow:0 0 0 1px oklch(1 0 0/.1),0 30px 80px -20px oklch(0 0 0/.7),0 0 70px oklch(0.705 0.195 45/.25);
  transform:translate(-30px,-50%) scale(.96);opacity:0;pointer-events:none;transition:opacity .3s var(--ease),transform .45s var(--ease)}
.card.is-open{opacity:1;transform:translate(0,-50%);pointer-events:auto}
.head{display:flex;align-items:center;gap:14px;margin-bottom:12px}
.head b{display:block;font:800 19px/1.08 apUnb,system-ui,sans-serif;letter-spacing:-.035em}
.card p{margin:0 0 16px;color:var(--dim)}
.card p b{color:var(--white);font-weight:600}
.row{display:flex;gap:10px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:11px 18px;font:700 14px/1 apOne,system-ui,sans-serif;
  text-decoration:none;border:0;cursor:pointer;transition:transform .14s var(--ease)}
.btn:hover{transform:translateY(-1px)}
.btn--hot{background:var(--hot);color:var(--void);box-shadow:0 10px 26px -10px oklch(0.705 0.195 45/.8)}
.btn--ghost{background:oklch(1 0 0/.08);color:var(--white);box-shadow:inset 0 0 0 1px oklch(1 0 0/.14)}
.x{position:absolute;right:12px;top:12px;width:30px;height:30px;border-radius:50%;border:0;background:oklch(1 0 0/.08);color:var(--dim);
  font:400 18px/1 apOne,system-ui,sans-serif;cursor:pointer}
.x:hover{color:var(--white)}
.home{display:block;margin-top:14px;font-size:12.5px;color:var(--dim);text-decoration:none}
.home:hover{color:var(--white)}
@media (max-width:640px){.tab{padding:10px 6px 12px 5px;gap:8px}.tab span{font-size:11px}.tab small{display:none}}
@media (prefers-reduced-motion:reduce){.tab,.card{transition:none}}`;

  const host = document.createElement('div');
  host.setAttribute('data-autopasha-badge', '');
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `<style>${css}</style>
<div class="ap">
  <button class="tab" type="button" aria-expanded="false" aria-controls="ap-card" aria-label="Макет нарисовал АвтоПаша: подробнее">
    ${cube(26)}<span>макет от авто<em>паша</em></span>
  </button>
  <div class="card" id="ap-card" role="dialog" aria-label="Кто нарисовал этот макет">
    <button class="x" type="button" aria-label="Свернуть">×</button>
    <div class="head">${cube(44)}<b>этот макет нарисовал паша</b></div>
    <p>паша это <b>ии-сотрудник автопаши</b>. он собрал этот сайт сам, на ваших товарах и текстах. нравится? наймите его на неделю, и он сделает сайт настоящим.</p>
    <div class="row"><a class="btn btn--hot" href="${hire}" target="_blank" rel="noopener">нанять пашу</a><button class="btn btn--ghost" type="button" data-close>свернуть</button></div>
    <a class="home" href="https://autopasha.ru/?utm_source=design&amp;utm_medium=badge&amp;utm_campaign=${encodeURIComponent(folder)}" target="_blank" rel="noopener">что ещё умеет паша →</a>
  </div>
</div>`;
  const tab = root.querySelector('.tab'), card = root.querySelector('.card');
  const open = (on) => {
    card.classList.toggle('is-open', on);
    tab.setAttribute('aria-expanded', String(on));
    tab.style.visibility = on ? 'hidden' : '';
    if (on) root.querySelector('.btn--hot').focus({ preventScroll: true });
  };
  tab.addEventListener('click', () => open(true));
  root.querySelector('.x').addEventListener('click', () => { open(false); tab.focus({ preventScroll: true }); });
  root.querySelector('[data-close]').addEventListener('click', () => { open(false); tab.focus({ preventScroll: true }); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && card.classList.contains('is-open')) open(false); });
  document.addEventListener('pointerdown', (e) => { if (card.classList.contains('is-open') && !e.composedPath().includes(host)) open(false); });

  const mount = () => {
    document.body.append(host);
    // сначала человек видит сам сайт, плашка выезжает чуть позже
    setTimeout(() => tab.classList.add('is-on'), still ? 0 : 2400);
  };
  if (document.body) mount(); else addEventListener('DOMContentLoaded', mount);
})();
