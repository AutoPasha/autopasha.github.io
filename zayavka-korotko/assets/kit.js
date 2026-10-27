/* Общий набор трёх макетов: кубик-Паша, роли с примерами (тексты из
   web/app/apply/steps.ts), угадывание роли по задаче, распознавание
   контакта, печать в поле, согласия, рельеф и искры. Без сборки. */
(function () {
  const PASHA = `<svg viewBox="0 0 100 100" aria-hidden="true"><g class="p-body">
<g class="p-ant"><path d="M45 24.5C44.2 19 45.6 14.6 47.4 10.4" stroke="#2a1a14" stroke-width="2.2" stroke-linecap="round" fill="none"/><circle class="p-halo" cx="47.8" cy="8.6" r="6.2" fill="oklch(0.705 0.195 45 / .35)"/><circle cx="47.8" cy="8.6" r="3.5" fill="oklch(0.705 0.195 45)"/><circle cx="46.7" cy="7.4" r="1.05" fill="#fff" opacity=".85"/></g>
<path fill="#ffc5ac" d="M74.5 41.52C83.25 65.79 82.36 67.69 58.08 76.45C33.79 85.2 31.89 84.31 23.14 60.04C14.39 35.77 15.29 33.87 39.57 25.11C63.85 16.36 65.75 17.25 74.5 41.52Z"/>
<g class="p-blush"><ellipse cx="35.31" cy="61.31" rx="4.6" ry="2.5" fill="#ff7f86"/><ellipse cx="63.26" cy="61.6" rx="4.6" ry="2.5" fill="#ff7f86"/></g>
<ellipse cx="36.5" cy="32.5" rx="7.5" ry="2.4" transform="rotate(-20 36.5 32.5)" fill="#fff" opacity=".9"/><circle cx="49.5" cy="28.4" r="1.3" fill="#fff"/>
<g class="p-eyes" fill="#170d08"><g class="p-eye"><path d="M44.54 52.86C43 60.6 43 60.6 40.27 60.06C37.54 59.52 37.54 59.52 39.08 51.77C40.62 44.03 40.62 44.03 43.35 44.57C46.08 45.11 46.08 45.11 44.54 52.86Z"/><circle cx="40.91" cy="48.71" r="1.45" fill="#fff"/></g><g class="p-eye"><path d="M59.88 53.06C58.4 62.99 58.4 62.99 55.28 62.52C52.16 62.06 52.16 62.06 53.64 52.13C55.12 42.2 55.12 42.2 58.24 42.67C61.36 43.13 61.36 43.13 59.88 53.06Z"/><circle cx="55.86" cy="49" r="1.45" fill="#fff"/></g></g>
</g></svg>`;

  function pasha(el) {
    el.classList.add('pasha');
    el.innerHTML = PASHA;
    const eyes = el.querySelector('.p-eyes');
    const api = {
      el,
      look(dx, dy) { eyes.style.transform = `translate(${dx}px,${dy}px)`; },
      mood(m) { el.classList.remove('is-happy', 'is-think'); if (m) el.classList.add('is-' + m); },
      hop() { el.classList.remove('hop'); void el.offsetWidth; el.classList.add('hop'); },
    };
    // глаза следят за курсором — как на главной
    addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(x, y) || 1, k = Math.min(1, d / 400) * 3.4;
      api.look((x / d) * k, (y / d) * k);
    }, { passive: true });
    return api;
  }

  const ROLES = {
    dev: { gen: 'разработчика', chip: 'не проходит оплата', name: 'разработчик', does: 'сайт, магазин, интеграции, поломки',
      ex: ['клиенты пишут, что не проходит оплата. разберись', 'пусть заявки с сайта сами падают в CRM с телефоном и суммой'],
      plan: ['зайду в код и разберусь, как устроен сайт', 'повторю поломку на копии сайта, не трогая живой', 'покажу правку и выкачу после вашей кнопки'],
      report: { title: 'оплата снова проходит', text: 'падала проверка адреса доставки. правка проверена на копии сайта, на живой уйдёт после вашей кнопки' } },
    mkt: { gen: 'маркетолога', chip: 'рассылка к пятнице', name: 'маркетолог', does: 'рассылки, статьи, карточки, площадки',
      ex: ['собери рассылку по базе к пятнице', 'обнови карточки на маркетплейсе под новые фото'],
      plan: ['соберу, что уже есть: тексты, базу, площадки', 'предложу план на неделю, выберете сами', 'первые тексты пришлю черновиком'],
      report: { title: 'рассылка собрана', text: 'три письма и сегменты по базе. черновик ждёт вашей кнопки, без неё никому не уйдёт' } },
    des: { gen: 'дизайнера', chip: 'страница акции', name: 'дизайнер', does: 'макеты, баннеры, ролики',
      ex: ['нужна страница акции к пятнице', 'сделай баннер акции в трёх размерах'],
      plan: ['посмотрю ваш сайт и фирменный стиль', 'сделаю два варианта на выбор', 'покажу на телефоне и на компьютере'],
      report: { title: 'два варианта страницы акции', text: 'оба на телефоне и на компьютере, ссылки на просмотр в кабинете' } },
    an: { gen: 'аналитика', chip: 'где теряются заявки', name: 'аналитик', does: 'отчёты, таблицы, выгрузки',
      ex: ['каждый понедельник присылай продажи по магазинам', 'найди, на каком шаге теряются заявки'],
      plan: ['попрошу выгрузку или доступ к таблице', 'сведу цифры в одну таблицу', 'раз в неделю пришлю отчёт с выводами'],
      report: { title: 'отчёт за неделю', text: 'продажи по четырём магазинам, один просел, причина и цифры в таблице' } },
    sup: { gen: 'поддержки', chip: 'разобрать почту', name: 'поддержка', does: 'почта, чаты, частые вопросы',
      ex: ['разбери почту поддержки и подготовь ответы', 'отвечай клиентам в чате магазина'],
      plan: ['прочитаю последние письма и чаты', 'соберу частые вопросы и ответы на них', 'ответы держу черновиками, уходят после вашей кнопки'],
      report: { title: 'почта разобрана', text: 'ответы на все письма готовы черновиками. уходят после вашей кнопки' } },
    sal: { gen: 'продажника', chip: 'найти 30 клиентов', name: 'продажи', does: 'поиск клиентов, письма, CRM',
      ex: ['найди тридцать компаний под наш продукт и подготовь письма', 'веди сделки в CRM и напоминай о созвонах'],
      plan: ['уточню, кто ваш клиент', 'найду компании и контакты', 'первые письма пришлю на одобрение'],
      report: { title: 'тридцать компаний в таблице', text: 'у каждой контакт и первое письмо. отправка после вашей кнопки' } },
  };

  // Те же правила, что guessRoles в steps.ts (укорочено для макета).
  const GUESS = [
    [/сайт|интернет-магаз|(^|[^а-яё])код|(^|[^а-яё])бот|разраб|программ|интеграц|1с|битрикс|оплат|crm|срм|баг/i, 'dev'],
    [/маркет|рассыл|стать|статей|smm|смм|продвиж|реклам|контент|карточк|соцсет/i, 'mkt'],
    [/дизайн|макет|баннер|логотип|ролик|видео|презентац|страниц/i, 'des'],
    [/аналит|отч[её]т|таблиц|выгруз|продаж[аи] по|цифр|теряютс/i, 'an'],
    [/поддерж|почт|отвеча|клиентам|вопрос|чат/i, 'sup'],
    [/прода[жв]|клиент[аов]* ищ|найди .*компан|лид|сделк|холодн|коммерческ/i, 'sal'],
  ];
  function guess(text) {
    const t = (text || '').toLowerCase();
    const hit = GUESS.filter(([re]) => re.test(t)).map(([, id]) => id);
    if (hit.includes('sal') && /найди|компан|сделк|crm/.test(t)) return 'sal';
    return hit[0] || null;
  }

  // Контакт одним полем: ник Telegram, телефон или почта — узнаём сами.
  function contact(raw) {
    const v = (raw || '').trim();
    if (!v) return null;
    if (/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(v)) return { kind: 'email', label: 'на почту', value: v };
    const tg = v.replace(/^https?:\/\/(t\.me|telegram\.me)\//i, '').replace(/^@/, '');
    if (/^[a-z][a-z0-9_]{4,31}$/i.test(tg) && (v.startsWith('@') || /t\.me/i.test(v) || /[a-z]/i.test(tg))) return { kind: 'tg', label: 'в Telegram', value: '@' + tg };
    const d = v.replace(/[^\d]/g, '');
    if (/^[+\d][\d\s()\-]+$/.test(v) && (d.length === 11 || d.length === 10)) {
      const n = d.length === 10 ? '7' + d : '7' + d.slice(1);
      return { kind: 'phone', label: 'по телефону', value: `+7 ${n.slice(1, 4)} ${n.slice(4, 7)}-${n.slice(7, 9)}-${n.slice(9)}` };
    }
    return { kind: 'bad' };
  }

  const ICON = {
    tg: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M21.4 4.3 2.9 11.4c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.5c.3-1.3-.5-1.8-1.4-1.5Zm-3.5 3.4-8.6 7.8-.3 3.6-1.6-5 10.2-6.7c.5-.3.8 0 .3.3Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
    ya: '<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="12" fill="#fc3f1d"/><path fill="#fff" d="M13.3 18.5h2V5.5h-2.9c-2.9 0-4.5 1.5-4.5 3.7 0 1.8.9 2.8 2.4 3.9l-2.7 5.4h2.2l2.9-5.8-1-.7c-1.2-.8-1.9-1.5-1.9-2.9 0-1.3.9-2.1 2.6-2.1h.9v11.5Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  };

  // Печатает текст в поле по буквам, как будто человек набирает сам.
  function typeInto(el, text, done) {
    clearInterval(el._typing);
    el.value = '';
    let i = 0;
    el._typing = setInterval(() => {
      el.value = text.slice(0, ++i);
      el.dispatchEvent(new Event('input', { bubbles: true }));
      if (i >= text.length) { clearInterval(el._typing); done && done(); }
    }, 16);
  }

  // Подсказка в пустом поле сама печатает примеры по кругу.
  function livePlaceholder(el, lines, prefix = '') {
    let li = 0, ci = 0, dir = 1, wait = 0;
    setInterval(() => {
      if (document.activeElement === el || el.value) return;
      if (wait-- > 0) return;
      const s = lines[li];
      ci += dir;
      el.setAttribute('placeholder', prefix + s.slice(0, ci));
      if (ci >= s.length) { dir = -1; wait = 45; }
      if (ci <= 0) { dir = 1; li = (li + 1) % lines.length; wait = 6; }
    }, 38);
  }

  const CONSENTS = `<div class="consents">
  <label class="consent"><input type="checkbox" name="consent"><span>Согласен с <a href="https://autopasha.ru/legal/offer" target="_blank">офертой</a> и <a href="https://autopasha.ru/legal/privacy" target="_blank">политикой обработки персональных данных</a>.</span></label>
  <label class="consent"><input type="checkbox" name="consentTpd"><span>Согласен на <a href="https://autopasha.ru/legal/consent" target="_blank">трансграничную передачу данных</a> в Anthropic (США) и на серверы в Финляндии — без этого AI-сотрудник технически не работает.</span></label>
  <details class="legal"><summary>полный текст согласия на передачу</summary><p>Тот же текст, что в живой анкете: получатели, страны, назначение. В макете не повторяю.</p></details>
</div>`;

  // Рельеф: горизонтали «местности», как на живом сайте.
  function relief(host, seed = 3) {
    const W = 1200, H = 800, paths = [];
    for (let k = 1; k <= 18; k++) {
      const R = 30 + k * 34, pts = [];
      for (let a = 0; a <= 64; a++) {
        const t = (a / 64) * Math.PI * 2;
        const r = R + 18 * Math.sin(3 * t + seed + k * 0.35) + 12 * Math.sin(5 * t - k * 0.5) + 7 * Math.cos(2 * t + seed);
        pts.push([(W * 0.68 + r * Math.cos(t) * 1.25).toFixed(1), (H * 0.3 + r * Math.sin(t)).toFixed(1)]);
      }
      paths.push('<path style="opacity:' + (0.85 - k * 0.035).toFixed(2) + '" d="M' + pts.map((p) => p.join(' ')).join('L') + 'Z"/>');
    }
    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${paths.join('')}</svg>`;
  }

  // Искры из точки — на отправке.
  function sparks(x, y, n = 18) {
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i');
      s.className = 'spark';
      s.style.left = x + 'px'; s.style.top = y + 'px';
      if (i % 3 === 0) s.style.background = '#ffc5ac';
      document.body.appendChild(s);
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 110;
      s.animate([
        { transform: 'translate(0,0) rotate(0)', opacity: 1 },
        { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d - 40}px) rotate(${Math.random() * 540}deg)`, opacity: 0 },
      ], { duration: 700 + Math.random() * 500, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => s.remove();
    }
  }

  // Чип «летит» в поле: копия чипа едет к полю и тает.
  function fly(from, to) {
    const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
    const g = from.cloneNode(true);
    Object.assign(g.style, { position: 'fixed', left: a.left + 'px', top: a.top + 'px', width: a.width + 'px', margin: 0, zIndex: 40, pointerEvents: 'none' });
    document.body.appendChild(g);
    g.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${b.left + 18 - a.left}px,${b.top + 14 - a.top}px) scale(.6)`, opacity: 0 },
    ], { duration: 520, easing: 'cubic-bezier(.5,0,.2,1)' }).onfinish = () => g.remove();
  }

  window.AP = { pasha, ROLES, guess, contact, ICON, typeInto, livePlaceholder, CONSENTS, relief, sparks, fly };
})();
