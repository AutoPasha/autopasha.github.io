// Режиссёр страницы: один имплант на весь сайт, три сцены по прокрутке,
// остальное — плотные разделы поверх холста.
import { createImplant, OTTENKI } from './implant.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const PORTRAIT = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 9/10)');
const phone = () => PORTRAIT.matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduce) document.documentElement.classList.add('reduce');
gsap.ticker.lagSmoothing(0);
const vh = () => innerHeight;

// ---------- заголовки поднимаются из-под маски по словам ----------
function maskWords(el) {
  let i = 0;
  const walk = (node) => {
    for (const ch of [...node.childNodes]) {
      if (ch.nodeType === 3) {
        const parts = ch.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const w of parts) {
          if (!w) continue;
          if (/^\s+$/.test(w)) { frag.append(' '); continue; }
          const o = document.createElement('span'); o.className = 'mw';
          const n = document.createElement('span'); n.textContent = w; n.style.setProperty('--i', i++);
          o.append(n); frag.append(o);
        }
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1) walk(ch);
    }
  };
  walk(el);
}
$$('[data-mask]').forEach(maskWords);
const io = new IntersectionObserver((es) => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('on');
  if (e.target.matches('.tile')) countUp(e.target);
  io.unobserve(e.target);
}), { rootMargin: '0px 0px -2% 0px' });
$$('[data-mask], .tile').forEach(el => io.observe(el));

function countUp(tile) {
  const s = $('[data-count]', tile); if (!s || reduce) return;
  const to = +s.dataset.count, o = { v: 0 };
  gsap.to(o, { v: to, duration: 1.4, ease: 'power3.out', onUpdate: () => (s.textContent = Math.round(o.v)) });
}

// ---------- свет за курсором ----------
$$('[data-spot]').forEach(el => el.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'touch') return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--sx', (e.clientX - r.left) + 'px');
  el.style.setProperty('--sy', (e.clientY - r.top) + 'px');
}));

// ---------- манифест ----------
const man = $('[data-words]');
man.innerHTML = man.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
const words = $$('.w', man);
function manStep() {
  const r = man.getBoundingClientRect();
  if (r.bottom < -50 || r.top > vh() + 50) return;
  const line = vh() * 0.62;
  for (const w of words) { const b = w.getBoundingClientRect(); w.classList.toggle('on', b.top + b.height * 0.5 < line - (b.left / innerWidth) * vh() * 0.05); }
}

// ---------- кадр: окно раскрывается во весь экран ----------
const kadr = $('.kadr'), kf = $('.kadr-frame'), kt = $('.kadr-text');
function kadrStep() {
  const r = kadr.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const p = clamp(-r.top / Math.max(1, r.height - vh()));
  const g = smooth(0, 0.6, p), ph = phone();
  kf.style.setProperty('--iy', lerp(ph ? 24 : 16, 0, g) + '%');
  kf.style.setProperty('--ix', lerp(ph ? 7 : 22, 0, g) + '%');
  kf.style.setProperty('--ir', lerp(34, 0, g) + 'px');
  kf.style.setProperty('--is', lerp(1.14, 1, g));
  const o = smooth(0.55, 0.8, p);
  kf.style.setProperty('--io', o); kt.style.setProperty('--io', o);
}

// ---------- план как статус заказа ----------
const track = $('.track'), trackLis = $$('li', track);
function trackStep() {
  const r = track.getBoundingClientRect();
  if (r.bottom < -100 || r.top > vh() + 100) return;
  const p = clamp((vh() * 0.72 - r.top) / (r.height * (phone() ? 1 : 1.6)));
  track.style.setProperty('--tp', p.toFixed(3));
  trackLis.forEach((li, i) => li.classList.toggle('on', p >= (phone() ? i / trackLis.length : i / (trackLis.length - 1)) - 0.001));
}

// ---------- отзывы ----------
const qt = $('.q-track'), qd = $$('.q-dots button');
qd.forEach((b, i) => b.addEventListener('click', () => qt.scrollTo({ left: qt.clientWidth * i, behavior: reduce ? 'auto' : 'smooth' })));
qt.addEventListener('scroll', () => {
  const i = Math.round(qt.scrollLeft / Math.max(1, qt.clientWidth));
  qd.forEach((b, k) => b.setAttribute('aria-selected', k === i));
}, { passive: true });

// ---------- запись: дни, время, билет ----------
const NSK = 7;   // Новосибирск, UTC+7
const nowNsk = () => new Date(Date.now() + NSK * 3600e3);
const DOW = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const DOWF = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const MON = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const hours = (d) => d.getUTCDay() === 0 ? [10, 17] : [8, 21];
const PRICE = { 'Консультация и КТ': '0 ₽ при лечении', 'Имплантация': 'от 54 000 ₽', 'Гигиена': '5 900 ₽', 'Лечение': 'от 4 800 ₽' };
const conf = { usl: 'Консультация и КТ', min: 45, day: 0, time: null };
const days = Array.from({ length: 7 }, (_, i) => { const d = nowNsk(); d.setUTCHours(0, 0, 0, 0); d.setUTCDate(d.getUTCDate() + i); return d; });
const busy = (d, h) => { const x = Math.sin(d.getUTCDate() * 12.9898 + h * 78.233) * 43758.5453; return (x - Math.floor(x)) < 0.42; };
function slotsFor(i) {
  const d = days[i], [o, c] = hours(d), n = nowNsk(), out = [];
  for (let h = o; h <= c - 1; h++) for (const m of [0, 30]) {
    if (h === c - 1 && m === 30) continue;
    if (m === 30 && h % 2) continue;
    const past = i === 0 && (h * 60 + m) <= n.getUTCHours() * 60 + n.getUTCMinutes() + 60;
    out.push({ t: `${h}:${m ? '30' : '00'}`, off: past || busy(d, h + m / 60) });
  }
  return out;
}
const daysEl = $('.days'), slotsEl = $('.slots');
daysEl.innerHTML = days.map((d, i) => `<button role="radio" aria-checked="false" data-i="${i}"${i === 0 ? ' class="today" aria-label="сегодня"' : ''}><small>${DOW[d.getUTCDay()]}</small><b>${d.getUTCDate()}</b></button>`).join('');
function pickDay(i) {
  conf.day = i;
  $$('button', daysEl).forEach(b => b.setAttribute('aria-checked', +b.dataset.i === i));
  const sl = slotsFor(i);
  slotsEl.innerHTML = sl.map(s => `<button role="radio" aria-checked="false" ${s.off ? 'disabled' : ''} data-t="${s.t}">${s.t}</button>`).join('');
  const first = sl.find(s => !s.off);
  conf.time = first ? first.t : null;
  markTime(); ticket();
}
function markTime() { $$('button', slotsEl).forEach(b => b.setAttribute('aria-checked', b.dataset.t === conf.time)); }
daysEl.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) pickDay(+b.dataset.i); });
slotsEl.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b || b.disabled) return; conf.time = b.dataset.t; markTime(); ticket(); });
$$('.chips button').forEach(b => b.addEventListener('click', () => {
  $$('.chips button').forEach(x => x.setAttribute('aria-pressed', x === b));
  conf.usl = b.dataset.v; conf.min = +b.dataset.min; ticket();
}));
function ticket() {
  const d = days[conf.day];
  $('.tk-day').textContent = `${DOWF[d.getUTCDay()]}, ${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;
  $('.tk-time').textContent = conf.time || 'нет мест';
  $('.tk-usl').textContent = conf.usl;
  $('.tk-min').textContent = conf.min + ' минут';
  $('.tk-price').textContent = PRICE[conf.usl];
}
pickDay(slotsFor(0).some(s => !s.off) ? 0 : 1);
$('.tk-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target, tel = f.tel.value.replace(/\D/g, '');
  f.name.setCustomValidity(f.name.value.trim() ? '' : 'Как к вам обращаться?');
  f.tel.setCustomValidity(tel.length >= 10 ? '' : 'Телефон, чтобы подтвердить время');
  if (!f.reportValidity()) return;
  f.hidden = true; $('.tk-done').hidden = false;
});
(function openNow() {
  const n = nowNsk(), [o, c] = hours(n), m = n.getUTCHours() * 60 + n.getUTCMinutes();
  const t = $('.open-text'), dot = $('.z-open .dot');
  if (m >= o * 60 && m < c * 60) { t.textContent = `Открыто, сегодня до ${c}:00`; }
  else { const tm = new Date(n); tm.setUTCDate(tm.getUTCDate() + (m >= c * 60 ? 1 : 0)); t.textContent = `Сейчас закрыто, откроемся ${m >= c * 60 ? 'завтра' : 'сегодня'} в ${hours(tm)[0]}:00`; dot.classList.add('off'); }
})();

// ---------- имплант ----------
let im = null;
try { im = createImplant($('#implant')); } catch (e) { document.body.classList.add('no3d'); }
requestAnimationFrame(() => document.body.classList.add('go'));

const scenes = $$('.s3d').map(el => ({ el, name: el.dataset.scene }));
function progress(el, pinned) {
  const r = el.getBoundingClientRect();
  if (!pinned) return clamp(-r.top / vh());
  return clamp(-r.top / Math.max(1, r.height - vh()));
}
const heroText = $('.hero-text');
const heroBottom = () => clamp((heroText.getBoundingClientRect().bottom + scrollY) / vh(), 0.3, 0.8);

// вход: детали опускаются и имплант вкручивается, пока читают заголовок
const intro = { e: reduce ? 0 : 1, spin: reduce ? 0 : -260 };
// наведение: курсор у импланта чуть разводит детали (приём Hairline Exploded, 21st)
const hov = { want: 0, v: 0 };
addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || phone()) { hov.want = 0; return; }
  const hero = $('.hero').getBoundingClientRect();
  if (e.clientY > hero.bottom) { hov.want = 0; return; }
  const cx = innerWidth * 0.74;
  hov.want = clamp(1 - Math.abs(e.clientX - cx) / (innerWidth * 0.2));
}, { passive: true });

const PARTS = ['krona', 'vint', 'abat', 'implant'];
const layers = $$('.layers li'), razborEl = $('.razbor');
const leader = $('.leader'), lLine = $('line', leader), lDots = $$('circle', leader);
let spinT = 0;
const otEdge = $$('.ot-text .h2, .ot-lead, .sws, .ot-name'), otRange = document.createRange();

const SC = {
  hero(p, st) {
    const ph = phone();
    Object.assign(st, { bg: '#eef1ed', mirror: ph ? 0 : 1, focus: null, only: null, zoom: 1, zoomPart: 0 });
    st.explode = Math.max(intro.e, hov.v * 0.32);
    st.spin = spinT * 14 + intro.spin;
    st.az = 16 + 18 * p; st.el = 5 + 12 * p;
    if (ph) { const y0 = heroBottom() + 0.02; st.rect = [0.16, y0, 0.84, Math.max(y0 + 0.2, 0.97)]; }
    else st.rect = [0.56, 0.1, 0.94, 0.97];
  },
  razbor(p, st) {
    const ph = phone();
    Object.assign(st, { bg: '#0c1311', mirror: ph ? 0 : 1, only: null, zoom: 1, zoomPart: 0.6 });
    st.explode = smooth(0.02, 0.13, p) * (1 - smooth(0.83, 0.92, p));
    st.spin = 0;
    st.az = lerp(28, -12, p); st.el = lerp(4, 14, p);
    const k = Math.floor((p - 0.13) / 0.1775);
    st.focus = p >= 0.13 && p < 0.84 ? PARTS[clamp(k, 0, 3)] : null;
    if (ph) {
      // на телефоне предмет не заходит ни на заголовок, ни на карточку детали, ни на финальную фразу
      const stg = $('.razbor .stage').getBoundingClientRect().top;
      const head = ($('.razbor-head').getBoundingClientRect().bottom - stg) / vh() + 0.02;
      const y0 = lerp(head, 0.09, smooth(0.08, 0.13, p));
      const y1 = p > 0.84 ? lerp(0.66, 0.56, smooth(0.84, 0.9, p)) : p > 0.13 ? 0.64 : 0.97;
      st.rect = [0.16, y0, 0.84, Math.max(y0 + 0.15, y1)];
    } else st.rect = [0.5, 0.06, 0.92, 0.97];
    layers.forEach(li => li.classList.toggle('on', li.dataset.part === st.focus));
    razborEl.classList.toggle('show-layers', p > 0.13 && p < 0.84);
    razborEl.classList.toggle('show-leader', !ph && !!st.focus);
    $('.razbor-end').classList.toggle('on', p > 0.83);
    $('.razbor-head').style.opacity = 1 - smooth(0.09, 0.13, p);
  },
  ottenok(p, st) {
    const ph = phone();
    Object.assign(st, { bg: '#f3f5f1', mirror: 0, only: 'krona', focus: null, explode: 0, zoom: lerp(0.9, 1.08, p) });
    st.spin = spinT * 10 + p * 140;
    st.az = 20; st.el = lerp(36, 20, p);
    if (ph) {
      const stg = $('.ottenok .stage').getBoundingClientRect().top;
      const a = ($('.ot-lead').getBoundingClientRect().bottom - stg) / vh() + 0.03;
      const b = ($('.sws').getBoundingClientRect().top - stg) / vh() - 0.03;
      st.rect = [0.14, a, 0.86, Math.max(a + 0.12, b)];
    } else {
      // на планшете колонка текста шире половины экрана: коронка встаёт правее самой длинной строки
      const edge = Math.max(...otEdge.map(el => { otRange.selectNodeContents(el); return otRange.getBoundingClientRect().right; })) + 24;
      st.rect = [Math.max(0.5, edge / innerWidth), 0.16, 0.94, 0.86];
    }
    const ids = ['B1', 'A1', 'A2', 'A3', 'D2', 'C2'];
    const id = ids[Math.min(5, Math.floor(p * 6))];
    if (!userChose && id !== shownShade) showShade(id);
  },
};

// ---------- оттенки ----------
const sws = $$('.sw');
let userChose = false, shownShade = 'A2';
function showShade(id) {
  shownShade = id;
  sws.forEach(b => b.setAttribute('aria-checked', b.dataset.sh === id));
  $('.sh-name').textContent = OTTENKI[id].name;
  $('.sh-text').textContent = OTTENKI[id].text;
  if (im) im.setShade(id);
}
sws.forEach(b => b.addEventListener('click', () => { userChose = true; showShade(b.dataset.sh); }));

function placeLeader() {
  const li = $('.layers li.on');
  if (!li || phone()) return;
  const off = $('.razbor .stage').getBoundingClientRect().top;
  const a = im.project(im.st.focus);
  const r = li.getBoundingClientRect();
  const x2 = r.right + 18, y2 = r.top + 26 - off;
  lLine.setAttribute('x1', a.x); lLine.setAttribute('y1', a.y - off);
  lLine.setAttribute('x2', x2); lLine.setAttribute('y2', y2);
  lDots.forEach(c => { c.setAttribute('cx', a.x); c.setAttribute('cy', a.y - off); });
}

// ---------- кадр за кадром ----------
let lastKey = '', active = null, last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (!reduce) spinT += dt;
  hov.v += (hov.want - hov.v) * Math.min(1, dt * 5);
  manStep(); kadrStep(); trackStep();
  { const r = razborEl.getBoundingClientRect(); document.body.classList.toggle('on-dark', r.top < 52 && r.bottom > 52); }
  if (im) {
    let best = null, bestV = 0;
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const v = Math.min(r.bottom, vh()) - Math.max(r.top, 0);
      if (v > bestV) { bestV = v; best = s; }
    }
    if (best) {
      const p = progress(best.el, best.name !== 'hero');
      SC[best.name](p, im.st);
      // предмет едет вместе со своей сценой, пока она въезжает и уезжает
      const stage = best.el.querySelector('.stage');
      const shift = stage ? stage.getBoundingClientRect().top / vh() : -scrollY / vh();
      const r0 = im.st.rect;
      im.st.rect = [r0[0], r0[1] + shift, r0[2], r0[3] + shift];
      im.st.snap = best !== active;
      if (best !== active) { active = best; if (best.name !== 'ottenok' && shownShade !== 'A2' && !userChose) showShade('A2'); }
      const st = im.st;
      const key = [st.az, st.el, st.explode, st.spin, st.rect.join(), st.bg, st.focus, st.only, innerWidth, innerHeight].map(x => typeof x === 'number' ? x.toFixed(4) : x).join('|');
      if (key !== lastKey || im.busy() || shadeUntil > now) {
        im.render(); lastKey = key;
        if (best.name === 'razbor') placeLeader();
      }
    } else document.body.classList.remove('on-dark');
  }
  requestAnimationFrame(frame);
}
let shadeUntil = 0;
if (im) {
  const orig = im.setShade;
  im.setShade = (id) => { shadeUntil = performance.now() + 1200; return orig(id); };
  document.body.classList.add('ready');
  if (!reduce) {
    gsap.to(intro, { e: 0, duration: 2.4, ease: 'power3.inOut', delay: 0.2 });
    gsap.to(intro, { spin: 0, duration: 2.8, ease: 'power3.out', delay: 0.1 });
  }
}
requestAnimationFrame(frame);
