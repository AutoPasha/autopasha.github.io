// Режиссёр страницы: разделы появляются по прокрутке, тёмная сцена «Диагностика»
// раскрывает направления по одному: строка слева, фото справа, линия-выноска.

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
  io.unobserve(e.target);
}), { rootMargin: '0px 0px -2% 0px' });
$$('[data-mask], .tile').forEach(el => io.observe(el));

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
  const целиком = r.top > -2 && r.bottom < vh() + 2;   // абзац в окне целиком — светим целиком
  for (const w of words) { const b = w.getBoundingClientRect(); w.classList.toggle('on', целиком || b.top + b.height * 0.5 < line - (b.left / innerWidth) * vh() * 0.05); }
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

// ---------- отзывы: блока цитат нет, листать нечего ----------

// ---------- запись: дни, время, билет ----------
const TZ = 'Europe/Moscow';   // Рязань
const TZ_FMT = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
const nowMsk = () => {
  const p = Object.fromEntries(TZ_FMT.formatToParts(new Date()).map(x => [x.type, x.value]));
  return { y: +p.year, m: +p.month, d: +p.day, hh: +p.hour % 24, mm: +p.minute };
};
const DOW = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const DOWF = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const MON = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
// ПН — ПТ 08:00 — 20:00 без перерыва на обед, СБ 09:00 — 14:00, ВС выходной
const hours = (d) => { const w = d.getUTCDay(); return w === 0 ? null : w === 6 ? [9, 14] : [8, 20]; };
const PRICE = { 'Приём терапевта': '1 800 ₽', 'Приём невролога': '3 000 ₽', 'Приём гинеколога': '2 500 ₽', 'Дерматоскопия': '500 ₽' };
const conf = { usl: 'Приём терапевта', day: 0, time: null };
const days = Array.from({ length: 7 }, (_, i) => { const n = nowMsk(); return new Date(Date.UTC(n.y, n.m - 1, n.d + i)); });
const busy = (d, h) => { const x = Math.sin(d.getUTCDate() * 12.9898 + h * 78.233) * 43758.5453; return (x - Math.floor(x)) < 0.42; };
function slotsFor(i) {
  const d = days[i], hh = hours(d), out = [];
  if (!hh) return out;                      // в воскресенье центр закрыт
  const [o, c] = hh, n = nowMsk(), nowMin = n.hh * 60 + n.mm;
  for (let h = o; h <= c - 1; h++) for (const m of [0, 30]) {
    if (h === c - 1 && m === 30) continue;
    if (m === 30 && h % 2) continue;
    const past = i === 0 && (h * 60 + m) <= nowMin + 60;
    out.push({ t: `${h}:${m ? '30' : '00'}`, off: past || busy(d, h + m / 60) });
  }
  return out;
}
const daysEl = $('.days'), slotsEl = $('.slots');
daysEl.innerHTML = days.map((d, i) => `<button role="radio" aria-checked="false" data-i="${i}"${i === 0 ? ' class="today" aria-label="сегодня"' : ''}><small>${DOW[d.getUTCDay()]}</small><b>${d.getUTCDate()}</b></button>`).join('');
function pickDay(i) {
  conf.day = i;
  $$('button', daysEl).forEach(b => b.setAttribute('aria-checked', +b.dataset.i === i));
  const sl = slotsFor(i), closed = !hours(days[i]);
  slotsEl.innerHTML = closed ? '<p class="slots-off">В этот день мы не работаем</p>'
    : sl.map(s => `<button role="radio" aria-checked="false" ${s.off ? 'disabled' : ''} data-t="${s.t}">${s.t}</button>`).join('');
  const first = sl.find(s => !s.off);
  conf.time = first ? first.t : null;
  markTime(); ticket();
}
function markTime() { $$('button', slotsEl).forEach(b => b.setAttribute('aria-checked', b.dataset.t === conf.time)); }
daysEl.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) pickDay(+b.dataset.i); });
slotsEl.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b || b.disabled) return; conf.time = b.dataset.t; markTime(); ticket(); });
$$('.chips button').forEach(b => b.addEventListener('click', () => {
  $$('.chips button').forEach(x => x.setAttribute('aria-pressed', x === b));
  conf.usl = b.dataset.v; ticket();
}));
function ticket() {
  const d = days[conf.day];
  $('.tk-day').textContent = `${DOWF[d.getUTCDay()]}, ${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;
  $('.tk-time').textContent = conf.time || (hours(d) ? 'нет мест' : 'выходной');
  $('.tk-usl').textContent = conf.usl;
  $('.tk-min').textContent = 'уточним при записи';
  $('.tk-price').textContent = PRICE[conf.usl] || 'уточним в регистратуре';
}
pickDay(Math.max(0, days.findIndex((d, i) => slotsFor(i).some(s => !s.off))));
$('.tk-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target, tel = f.tel.value.replace(/\D/g, '');
  f.name.setCustomValidity(f.name.value.trim() ? '' : 'Как к вам обращаться?');
  f.tel.setCustomValidity(tel.length >= 10 ? '' : 'Телефон, чтобы подтвердить время');
  if (!f.reportValidity()) return;
  f.hidden = true; $('.tk-done').hidden = false;
});
(function openNow() {
  const n = nowMsk(), mins = n.hh * 60 + n.mm;
  const t = $('.open-text'), dot = $('.z-open .dot');
  const today = new Date(Date.UTC(n.y, n.m - 1, n.d)), open = hours(today);
  if (open && mins >= open[0] * 60 && mins < open[1] * 60) { t.textContent = `Открыто, сегодня до ${open[1]}:00`; return; }
  dot.classList.add('off');
  for (let i = 1; i <= 7; i++) {
    const d = new Date(Date.UTC(n.y, n.m - 1, n.d + i)), hh = hours(d);
    if (!hh) continue;
    t.textContent = `Сейчас закрыто, откроемся ${i === 1 ? 'завтра' : DOWF[d.getUTCDay()].toLowerCase()} в ${hh[0]}:00`;
    return;
  }
  t.textContent = 'Сейчас закрыто';
})();

// ---------- тёмная сцена «Диагностика»: строка слева, фото справа ----------
const razborEl = $('.razbor'), layers = $$('.razbor .layers li'), razborEnd = $('.razbor-end');
const shotEl = $('.razbor-photo'), shots = $$('img', shotEl);
const leader = $('.leader'), lLine = $('line', leader), lDots = $$('circle', leader);
let shotIdx = -1;
function setShot(k) {                       // у каждого направления свой кадр центра
  if (k === shotIdx) return;
  shotIdx = k;
  shots.forEach((im, i) => im.classList.toggle('on', i === k));
}
function placeLeader(li) {                  // выноска от края кадра к строке списка
  const off = $('.razbor .stage').getBoundingClientRect().top;
  const a = shotEl.getBoundingClientRect(), r = li.getBoundingClientRect();
  const x1 = a.left - 6, y1 = a.top + a.height * 0.5 - off;
  lLine.setAttribute('x1', x1); lLine.setAttribute('y1', y1);
  lLine.setAttribute('x2', r.right + 18); lLine.setAttribute('y2', r.top + 26 - off);
  lDots.forEach(c => { c.setAttribute('cx', x1); c.setAttribute('cy', y1); });
}
const headEl = $('.razbor-head');
function razborStep() {
  const r = razborEl.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh()) return;
  const raw = -r.top / Math.max(1, r.height - vh());   // до нуля, пока секция въезжает в окно
  const p = clamp(raw);
  const ph = phone();
  shotEl.style.setProperty('--ro', (smooth(-0.18, -0.06, raw) * (1 - smooth(0.88, 0.97, p))).toFixed(3));
  // рамка кадра: на компьютере справа от списка, на телефоне — между заголовком и карточкой
  let x0, y0, x1, y1;
  if (ph) {
    const stg = $('.razbor .stage').getBoundingClientRect().top;
    const head = ($('.razbor-head').getBoundingClientRect().bottom - stg) / vh() + 0.02;
    y0 = lerp(head, 0.09, smooth(0.08, 0.13, p));
    // кадр въезжает на место заголовка: заголовок гаснет раньше, чем его накроет
    const hk = 1 - smooth(0.06, 0.1, p);
    headEl.style.opacity = hk.toFixed(3);
    headEl.style.visibility = hk < 0.02 ? 'hidden' : '';
    y1 = p > 0.84 ? lerp(0.66, 0.56, smooth(0.84, 0.9, p)) : p > 0.13 ? 0.64 : 0.97;
    x0 = 0.16; x1 = 0.84;
  } else { x0 = 0.5; y0 = 0.06; x1 = 0.92; y1 = 0.97; headEl.style.opacity = ''; headEl.style.visibility = ''; }
  shotEl.style.setProperty('--rx', (x0 * 100).toFixed(2) + '%');
  shotEl.style.setProperty('--ry', (y0 * 100).toFixed(2) + '%');
  shotEl.style.setProperty('--rw', ((x1 - x0) * 100).toFixed(2) + '%');
  shotEl.style.setProperty('--rh', ((y1 - y0) * 100).toFixed(2) + '%');
  const k = clamp(Math.floor((p - 0.13) / 0.1775), 0, layers.length - 1);
  const on = p >= 0.13 && p < 0.84;
  layers.forEach(li => li.classList.toggle('on', on && li === layers[k]));
  razborEl.classList.toggle('show-layers', p > 0.02 && p < 0.84);
  razborEl.classList.toggle('show-leader', !ph && on);
  razborEnd.classList.toggle('on', p > 0.83);
  setShot(k);
  if (!ph && on) placeLeader(layers[k]);
}

requestAnimationFrame(() => document.body.classList.add('go'));

// ---------- кадр за кадром ----------
let last = performance.now();
function frame(now) {
  last = now;
  manStep(); kadrStep(); trackStep(); razborStep();
  { const r = razborEl.getBoundingClientRect(); document.body.classList.toggle('on-dark', r.top < 52 && r.bottom > 52); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);