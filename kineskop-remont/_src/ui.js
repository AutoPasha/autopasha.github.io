// Всё, что на странице живёт без 3D: каналы, пульт, телетекст, форма, подвал.
import { drawTestCard } from './textures.js';

export const CHANNEL_TEXT = [
  { name: 'ТЕЛЕФОНЫ', title: 'Разбили экран, сел аккумулятор, не&nbsp;заряжается', text: 'Экран меняем при вас за 40 минут. Ставим оригинал или хорошую копию, разницу покажем на&nbsp;столе.', price: 'от 1 200 ₽', time: 'от 30 минут' },
  { name: 'НОУТБУКИ', title: 'Греется, шумит, не&nbsp;включается, залили чаем', text: 'Чистим от пыли с новой термопастой, меняем матрицы и клавиатуры, спасаем залитые платы и&nbsp;данные на&nbsp;них.', price: 'от 1 900 ₽', time: '1-2 дня' },
  { name: 'ТЕЛЕВИЗОРЫ', title: 'Нет картинки, полосы, щёлкает и&nbsp;гаснет', text: 'Подсветку и блоки питания меняем за день. Большие экраны забираем сами, мастер приедет в&nbsp;день звонка.', price: 'от 1 200 ₽', time: '1-3 дня' },
  { name: 'ПРИСТАВКИ', title: 'Ревёт вентилятор, уводит стик, нет картинки по&nbsp;HDMI', text: 'Чистим, меняем стики и разъёмы. После ремонта гоняем приставку час под нагрузкой, чтобы не&nbsp;вернулась.', price: 'от 1 300 ₽', time: '1 день' },
  { name: 'ЗВУК', title: 'Хрипит колонка, молчит усилитель, жуёт кассету', text: 'Колонки, усилители, проигрыватели и магнитофоны. Пассики и головки найдём даже для техники старше вас.', price: 'от 900 ₽', time: '2-5 дней' },
  { name: 'ВСЁ ОСТАЛЬНОЕ', title: 'Фотоаппарат, пульт, зарядка, часы', text: 'Если оно включается в розетку или работает от батареек, несите. Честно скажем, есть ли смысл чинить.', price: 'от 800 ₽', time: 'по месту' },
];

export function initUi() {
  const root = document.documentElement;
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  let scrollToY = y => scrollTo({ top: y, behavior: 'smooth' });
  const chHandlers = [];

  function sectionTop(id) {
    const el = document.getElementById(id);
    return el ? el.getBoundingClientRect().top + scrollY : 0;
  }
  function go(id) {
    if (id === 'efir') return scrollToY(0);
    scrollToY(sectionTop(id));
  }
  $$('[data-go]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); go(a.dataset.go); }));

  // на телефоне колёсика нет
  if (matchMedia('(pointer: coarse)').matches) {
    const h = $('.hint span');
    if (h) h.textContent = 'Листайте вниз, переключим канал';
  }

  // каналы
  const kan = $('#kanaly');
  const osd = Object.fromEntries($$('[data-osd]').map(el => [el.dataset.osd, el]));
  let curCh = -1;
  function chanY(i) {
    const top = sectionTop('kanaly');
    const len = kan.offsetHeight - innerHeight;
    return top + len * (i + 0.5) / CHANNEL_TEXT.length;
  }
  $$('.remote [data-ch]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.ch;
    const cur = Math.max(0, curCh);
    let i = v === 'prev' ? Math.max(0, cur - 1) : v === 'next' ? Math.min(CHANNEL_TEXT.length - 1, cur + 1) : +v;
    if (v === 'next' && cur === CHANNEL_TEXT.length - 1) return go('ceny');
    // без 3D прокрутка каналы не переключает — пульт меняет текст сам
    if (root.classList.contains('no-gl')) return setChannel(Math.max(0, i));
    scrollToY(chanY(i), { duration: 0.9 });
  }));
  function setChannel(i) {
    if (i === curCh) return;
    curCh = i;
    $$('.remote__keys button').forEach((b, k) => b.classList.toggle('is-on', k === i));
    if (i < 0) return;
    const c = CHANNEL_TEXT[i];
    osd.num.textContent = String(i + 1).padStart(2, '0');
    osd.name.textContent = c.name;
    osd.title.innerHTML = c.title;
    osd.text.innerHTML = c.text;
    osd.price.textContent = c.price;
    osd.time.textContent = c.time;
    const st = $('#kanaly .stage');
    st.classList.remove('flip');
    void st.offsetWidth;
    st.classList.add('flip');
    chHandlers.forEach(f => f(i));
  }

  // телетекст
  const pages = $$('.tt__page');
  const tabs = $$('.tt__fast button');
  const pg = $('[data-tt="pg"]');
  function showPage(id) {
    pages.forEach(p => p.classList.toggle('is-on', p.dataset.page === id));
    tabs.forEach(t => { const on = t.dataset.goPage === id; t.classList.toggle('is-on', on); t.setAttribute('aria-selected', on); });
    pg.textContent = id;
    const scr = $('.tt__screen');
    scr.classList.remove('roll'); void scr.offsetWidth; scr.classList.add('roll');
  }
  tabs.forEach(t => t.addEventListener('click', () => showPage(t.dataset.goPage)));
  const clock = $('[data-tt="clock"]');
  const tick = () => {
    const d = new Date();
    const p2 = n => String(n).padStart(2, '0');
    clock.textContent = `${p2(d.getDate())}.${p2(d.getMonth() + 1)} ${p2(d.getHours())}:${p2(d.getMinutes())}:${p2(d.getSeconds())}`;
  };
  tick(); setInterval(tick, 1000);

  // телетекст включается чуть раньше, чем край экрана войдёт в кадр: вспышка доигрывает, пока он въезжает
  const scr = $('.tt__screen');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    new IntersectionObserver((es, ob) => {
      es.forEach(e => { if (e.isIntersecting) { scr.classList.add('tt-on'); ob.disconnect(); } });
    }, { threshold: 0, rootMargin: '0px 0px 15% 0px' }).observe(scr);
  }

  // форма
  const form = $('.form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ph = form.phone.value.replace(/\D/g, '');
    if (ph.length < 10) { form.phone.focus(); form.classList.add('bad'); return; }
    form.classList.remove('bad');
    form.classList.add('sent');
  });

  // подвал: маленькая таблица
  const end = $('[data-endcard]');
  if (end) {
    const draw = () => drawTestCard(end.getContext('2d'), end.width, end.height, null);
    document.fonts.ready.then(draw);
    setInterval(draw, 1000);
  }

  let paperOn = false;
  let chIn = null;
  const setVar = (k, v) => root.style.setProperty(k, v.toFixed(3));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ramp = (a, b, v) => clamp((v - a) / (b - a));

  return {
    bindScroll(f) { scrollToY = f; },
    onChannel(f) { chHandlers.push(f); },
    setChannel,
    channelLabel: i => `КАНАЛ ${String(i + 1).padStart(2, '0')}  ${CHANNEL_TEXT[i].name}`,
    heroState(p, out) {
      setVar('--hero-in', ramp(0.45, 1, out));
      setVar('--hero-out', 1 - ramp(0.06, 0.2, p));
    },
    workshopState(p) {
      setVar('--ws-in', ramp(0.06, 0.2, p) * (1 - ramp(0.44, 0.56, p)));
    },
    channelsIn(on) {
      if (on !== chIn) { chIn = on; root.style.setProperty('--ch-in', on ? '1' : '0'); root.style.setProperty('--ch-pe', on ? 'auto' : 'none'); }
    },
    paperUnderHeader(on) {
      if (on !== paperOn) { paperOn = on; root.classList.toggle('ui-paper', on); }
    },
    watchState(p) {
      setVar('--wt-in', 0.35 + 0.65 * ramp(0.0, 0.14, p));
    },
  };
}
