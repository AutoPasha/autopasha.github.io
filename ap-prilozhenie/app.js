/* Макет «АвтоПаша: приложение», версия 6 (17.11.2026): картинки вместо значков, все функции
   нынешнего кабинета, 13 тем как в настройках кабинета. Каркас с версии 3: галерея экранов по
   главам, живой прототип, ноутбук и карта переезда. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ── темы: тот же список, что в настройках кабинета (themes.css собирает themes.py) ── */
  const THEMES = [
    ['sumerki', 'сумерки', 'dark', '#2b2724', '#d9824a'], ['grafit', 'графит', 'dark', '#22252b', '#e86a2c'],
    ['ugol', 'уголь', 'dark', '#2a2420', '#e86a2c'], ['tush', 'тушь', 'dark', '#141210', '#f26f2c'],
    ['dym', 'дым', 'dark', '#2d3135', '#e86a2c'], ['polnoch', 'полночь', 'dark', '#18223a', '#e86a2c'],
    ['omut', 'омут', 'dark', '#15292d', '#e86a2c'], ['hvoya', 'хвоя', 'dark', '#142a22', '#e86a2c'],
    ['sepia', 'сепия', 'dark', '#2e2318', '#e86a2c'], ['bumaga', 'бумага', 'light', '#f6f0e9', '#e86a2c'],
    ['tuman', 'туман', 'light', '#eef0f3', '#e86a2c'], ['pergament', 'пергамент', 'light', '#f1e7d5', '#e86a2c'],
    ['mel', 'мел', 'light', '#ffffff', '#e86a2c'],
  ];
  const TH = Object.fromEntries(THEMES.map((t) => [t[0], t]));
  const q = location.search.slice(1).split('&');
  let theme = q.find((k) => TH[k]) || (q.includes('light') ? 'bumaga' : q.includes('dark') ? 'sumerki' : null) ||
    (() => { try { return localStorage.getItem('ap-v6-theme'); } catch (e) { return null; } })() || 'sumerki';
  if (!TH[theme]) theme = 'sumerki';
  function setTheme(id) {
    theme = id;
    const b = document.body;
    [...b.classList].filter((c) => c.startsWith('th-')).forEach((c) => b.classList.remove(c));
    b.classList.add('th-' + id);
    const light = TH[id][2] === 'light';
    b.classList.toggle('t-light', light); b.classList.toggle('t-dark', !light);
    $$('[data-th]').forEach((x) => x.classList.toggle('on', x.dataset.th === id));
    $$('[data-themename]').forEach((n) => (n.textContent = TH[id][1]));
    const m = $('meta[name=theme-color]'); if (m) m.content = TH[id][3];
    try { localStorage.setItem('ap-v6-theme', id); } catch (e) { /* приватный режим */ }
  }

  const TABS = ['chat', 'sessions', 'deals', 'pasha'];
  const CHAPTERS = [
    ['chat', 'Чат', 'Один разговор с Пашей. Сверху «сейчас» кружками-картинками: что ждёт вас, что идёт, что готово сегодня.'],
    ['sessions', 'Сессии', 'Что Паша делает прямо сейчас, что возьмёт дальше, к чему вернётся сам и что уже было.'],
    ['deals', 'Дела', 'Каждое дело своей картинкой. Внутри шаги, результат деталями отчёта, неделя историями и посты для ленты.'],
    ['pasha', 'Паша', 'Всё про него у вас плитками с картинками: силы, где работает, команда, правила, память, доступы, деньги, темы.'],
    ['states', 'Состояния и роли', 'Первый день, стул, загрузка, нет сети, кончились силы, чужая роль, пустые вкладки.'],
    ['out', 'Вне приложения', 'Пуш с кнопками и живое уведомление сессии.'],
  ];
  const ALL = $$('template[id^="s-"]').map((t) => t.id.slice(2));
  const END = ['chat', 'chat-voice', 'chat-offline', 'watcher'];
  const settle = (root) => $$('.scr', root).forEach((s) => { if (END.includes(s.dataset.id)) { const b = $('.body', s); if (b) b.scrollTop = b.scrollHeight; } });

  /* ── Паша: персиковый кубик с антенной, как на иконке приложения; наряды как в кабинете ── */
  const D = '#2A211B';
  const OUTFITS = {
    none: '',
    headset: `<path d="M14 52 C14 18 86 18 86 52" fill="none" stroke="${D}" stroke-width="5" stroke-linecap="round"/><rect x="7" y="44" width="13" height="22" rx="6" fill="${D}"/><rect x="80" y="44" width="13" height="22" rx="6" fill="#FF6A2B"/><path d="M86 62 C86 76 74 78 62 76" fill="none" stroke="${D}" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="76" r="4" fill="${D}"/>`,
    glasses: `<rect x="28" y="42" width="20" height="17" rx="7" fill="rgba(255,255,255,.25)" stroke="${D}" stroke-width="3.2"/><rect x="52" y="42" width="20" height="17" rx="7" fill="rgba(255,255,255,.25)" stroke="${D}" stroke-width="3.2"/><path d="M48 49h4" stroke="${D}" stroke-width="3.2"/>`,
    shades: `<path d="M24 43h52v6c0 7-5 11-12 11s-10-4-11-9h-6c-1 5-4 9-11 9s-12-4-12-11z" fill="${D}"/><path d="M30 47h12M58 47h12" stroke="#fff" stroke-opacity=".35" stroke-width="2.4" stroke-linecap="round"/>`,
    bow: `<path d="M50 90 L36 82 L36 98 Z M50 90 L64 82 L64 98 Z" fill="#FF6A2B" stroke="${D}" stroke-width="2.4" stroke-linejoin="round"/><circle cx="50" cy="90" r="4.2" fill="${D}"/>`,
    crown: `<path d="M30 22 L34 6 L42 16 L50 3 L58 16 L66 6 L70 22 Z" fill="#FFCF4D" stroke="${D}" stroke-width="2.6" stroke-linejoin="round"/><circle cx="50" cy="14" r="2.6" fill="#FF6A2B"/>`,
    beret: `<path d="M22 26c4-12 50-16 58 0-12 4-46 6-58 0z" fill="#C2410C"/><circle cx="56" cy="13" r="3.4" fill="#C2410C"/>`,
    flower: `<g transform="translate(26 22)"><circle r="6" cx="0" cy="-7" fill="#FF8FB1"/><circle r="6" cx="7" cy="0" fill="#FF8FB1"/><circle r="6" cx="0" cy="7" fill="#FF8FB1"/><circle r="6" cx="-7" cy="0" fill="#FF8FB1"/><circle r="4.5" fill="#FFCF4D"/></g>`,
    helmet: `<path d="M17 30c0-18 66-18 66 0z" fill="#FFCF4D" stroke="${D}" stroke-width="2.4"/><path d="M12 30h76" stroke="${D}" stroke-width="5" stroke-linecap="round"/><path d="M50 13v15" stroke="${D}" stroke-width="2.4"/>`,
    scarf: `<path d="M18 80q32 12 64 0v8q-32 12-64 0z" fill="#3FBF8F" stroke="${D}" stroke-width="2.2"/><path d="M66 86l4 16 8-2-3-16" fill="#3FBF8F" stroke="${D}" stroke-width="2.2"/>`,
    party: `<path d="M38 22 L52 -2 L64 22 Z" fill="#7FD1FF" stroke="${D}" stroke-width="2.4" stroke-linejoin="round"/><circle cx="52" cy="-3" r="4" fill="#FF6A2B"/>`,
    cap: `<path d="M20 30c0-16 60-16 60 0z" fill="#FF6A2B" stroke="${D}" stroke-width="2.4"/><path d="M20 30h-8c0-4 4-6 8-6" fill="#FF6A2B" stroke="${D}" stroke-width="2.4"/>`,
  };
  const OUTFIT_NAMES = { none: 'без наряда', headset: 'гарнитура', glasses: 'очки', shades: 'тёмные очки', bow: 'бабочка', crown: 'корона', beret: 'берет', flower: 'цветок', helmet: 'каска', scarf: 'шарф', party: 'праздник', cap: 'кепка' };
  let uid = 0;
  function pasha(size = 64, outfit = 'none') {
    const id = 'pg' + uid++;
    const hat = ['crown', 'beret', 'helmet', 'party', 'cap'].includes(outfit);
    const ant = hat ? '' :
      `<g class="ant"><path d="M47 21 C46 15 47.5 10 49.5 6" stroke="#FFC5AC" stroke-width="3.2" stroke-linecap="round" fill="none"/><circle cx="50" cy="4.5" r="9" fill="#FF6B1A" opacity=".28"/><circle cx="50" cy="4.5" r="5.6" fill="#FF6B1A"/><circle cx="48.4" cy="3" r="1.7" fill="#fff" opacity=".75"/></g>`;
    return `<svg class="pasha" width="${size}" height="${size}" viewBox="0 -6 100 110" aria-label="Паша">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#FFD9C4"/><stop offset="1" stop-color="#F7A27C"/></linearGradient>
      <radialGradient id="${id}s" cx=".3" cy=".25" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="50" cy="100" rx="28" ry="3.5" fill="#000" opacity=".16"/>
      <g class="bob">${ant}
        <g transform="rotate(-6 50 53)"><rect x="15" y="20" width="70" height="68" rx="15" fill="url(#${id})"/><rect x="15" y="20" width="70" height="68" rx="15" fill="url(#${id}s)"/><path d="M22 80 Q50 88 78 80" stroke="#C25A2A" stroke-opacity=".18" stroke-width="5" fill="none" stroke-linecap="round"/></g>
        <g class="look"><g class="eyes"><rect x="37" y="45" width="6.5" height="12" rx="3.25" fill="#1E1712"/><rect x="56.5" y="45" width="6.5" height="12" rx="3.25" fill="#1E1712"/><circle cx="39.4" cy="47.8" r="1.4" fill="#fff"/><circle cx="58.9" cy="47.8" r="1.4" fill="#fff"/></g></g>
        <ellipse cx="29" cy="64" rx="6.5" ry="3.6" fill="#FF7E6E" opacity=".45"/><ellipse cx="71" cy="64" rx="6.5" ry="3.6" fill="#FF7E6E" opacity=".45"/>
        <path d="M45 66 Q50 70 55 66" fill="none" stroke="#1E1712" stroke-width="2.4" stroke-linecap="round"/>
        ${OUTFITS[outfit] || ''}
      </g></svg>`;
  }

  /* ── живые миниатюры того, что Паша сделал (вместо серых прямоугольников) ── */
  const MINI = {
    cat: `<div class="m-top">ВИКОМ<i></i></div><div class="m-hero"><b>Мебельная фурнитура оптом</b><span>каталог · 41 товар</span></div>
      <div class="m-grid">${[['#C9A27E', 'Петля накладная', '86 ₽'], ['#5E6B78', 'Ручка-скоба', '240 ₽'], ['#A8B4BF', 'Направляющие', '410 ₽'], ['#D9C3A5', 'Опора 100 мм', '65 ₽']]
        .map(([c, n, pr]) => `<div class="m-it"><i style="background:linear-gradient(135deg,${c},#fff)"></i><b>${n}</b><em>${pr}</em></div>`).join('')}</div>`,
    old: `<div class="m-old-top">VIKOM.RU · Главная | О нас | Прайс | Контакты</div><div class="m-old-b"><b>ДОБРО ПОЖАЛОВАТЬ!</b><p>Компания Виком предлагает широкий ассортимент мебельной фурнитуры. Прайс-лист можно скачать по ссылке ниже.</p><u>скачать прайс (xls)</u><div class="m-old-t">${'<i></i>'.repeat(12)}</div></div>`,
    deliv: `<div class="m-top">ВИКОМ<i></i></div><div class="m-sec"><b>Доставка</b><span>по Москве и области</span></div><div class="m-rows">${[['Москва', 'бесплатно от 30 000 ₽'], ['Область до 50 км', '900 ₽'], ['Самовывоз', 'склад на Каширке']].map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div><div class="m-map"></div>`,
    rep: '<div class="m-k">отчёт недели</div><div class="m-t">сдал 4 дела, сайт завтра</div><div class="m-n"><div><b>4</b><span>сдано</span></div><div><b>38</b><span>часов</span></div></div>',
    reel: '<span class="m-play"></span><div class="m-cap">день 8 из 30</div>',
    letter: '<div class="m-mail"><div class="m-mh"><b>Анатолий</b><span>тема: тестовый сайт готов</span></div><p>Анатолий, добрый день! Тестовый сайт готов: vikom.autopasha.ru. Вход в админку пришлю следующим сообщением.</p><p>Посмотрите главную и каталог: 28 страниц из 33 на месте.</p></div>',
    hotel: '<div class="m-mail"><div class="m-mh"><b>Гостиница «Изразец»</b><span>тема: сайт за неделю</span></div><p>Добрый день! Посмотрел ваш сайт: бронь открывается только с компьютера. Сделал, как это может выглядеть с телефона.</p></div>',
    post: '<div class="m-post"><div class="m-ph"><i></i><b>autopasha</b></div><div class="m-pi"><span>было → стало</span></div></div>',
  };
  const fillMini = (root) => $$('[data-mini]', root).forEach((m) => { if (!m.childElementCount) { m.innerHTML = MINI[m.dataset.mini] || ''; m.setAttribute('aria-hidden', 'true'); } });
  const dressAll = (root) => $$('i.pa', root).forEach((el) => {
    el.innerHTML = pasha(+el.dataset.s || 64, el.dataset.o || 'none');
    el.style.display = 'inline-block'; el.style.lineHeight = 0; el.style.flex = 'none';
  });

  /* ── повторяющиеся части ── */
  const SB = `<span>13:54</span><span class="r"><svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor"/><rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor"/><rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg><svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 11.5 1 4.2a10 10 0 0 1 14 0z" fill="currentColor"/></svg><i class="bat"></i></span>`;
  const art = (n, c = '') => `<img class="a ${c}" src="art/${n}.webp" alt="" loading="lazy" decoding="async">`;
  const DOCK = (on, quiet) => {
    const i = Math.max(0, TABS.indexOf(on));
    const t = (id, pic, name, extra = '') => `<a class="tab ${on === id ? 'on' : ''}" data-tab="${id}" href="#${id}">${pic}${name}${quiet ? '' : extra}</a>`;
    return `<nav><span class="lens" style="left:calc(5px + ${i} * (100% - 10px) / 4)"></span>
      ${t('chat', art('chat'), 'Чат', '<span class="badge">2</span>')}
      ${t('sessions', art('sessiya'), 'Сессии', '<span class="live-dot"></span>')}
      ${t('deals', art('dela'), 'Дела')}
      ${t('pasha', `<span class="face">${pasha(30)}</span>`, 'Паша')}
    </nav>`;
  };
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  function build(id) {
    const tpl = $('#s-' + id);
    const scr = document.createElement('div');
    scr.className = 'scr';
    if (tpl.hasAttribute('data-aura')) scr.classList.add('aura');
    scr.dataset.id = id;
    scr.append(tpl.content.cloneNode(true));
    $$('.sb', scr).forEach((n) => (n.innerHTML = SB));
    $$('[data-dock]', scr).forEach((n) => (n.innerHTML = DOCK(n.dataset.dock, n.hasAttribute('data-quiet'))));
    $$('i[data-a]', scr).forEach((n) => (n.outerHTML = art(n.dataset.a, n.className)));
    dressAll(scr); fillMini(scr);
    $$('[data-wave]', scr).forEach((w) => {
      w.innerHTML = Array.from({ length: 22 }, (_, i) => `<i style="height:${5 + Math.round(Math.abs(Math.sin(i * 1.7)) * 17)}px"></i>`).join('');
    });
    $$('[data-awave]', scr).forEach((w) => {
      w.innerHTML = Array.from({ length: 34 }, (_, i) => `<i class="${i < 13 ? 'p' : ''}" style="height:${6 + Math.round(Math.abs(Math.sin(i * 1.3) * Math.cos(i * .4)) * 26)}px"></i>`).join('');
    });
    $$('[data-recwave]', scr).forEach((w) => {
      w.innerHTML = Array.from({ length: 18 }, (_, i) => `<i style="height:${6 + Math.round(Math.abs(Math.sin(i * 2.1)) * 14)}px;animation-delay:${i * 55}ms"></i>`).join('');
    });
    $$('[data-outfits]', scr).forEach((box) => {
      box.innerHTML = Object.keys(OUTFITS).map((k) => `<button data-act="outfit" data-o="${k}" class="${k === 'none' ? 'on' : ''}" title="${OUTFIT_NAMES[k]}" aria-label="${OUTFIT_NAMES[k]}">${pasha(40, k)}</button>`).join('');
    });
    $$('[data-themes]', scr).forEach((box) => {
      box.innerHTML = THEMES.map(([tid, name]) => `<button class="thp ${tid === theme ? 'on' : ''}" data-act="settheme" data-th="${tid}"><span class="ph th-${tid}"><span class="r1"></span><span class="c"><i></i><s></s></span><span class="q"></span><span class="c"><i></i><s></s></span><span class="d"></span><span class="ck"><svg class="ico xs" style="stroke-width:3"><use href="#i-check"/></svg></span></span><span>${name}</span></button>`).join('');
    });
    $$('[data-since]', scr).forEach((n) => (n.textContent = fmt(+n.dataset.since)));
    $$('.tog', scr).forEach((g) => { const li = g.closest('.li'); if (li) { li.dataset.act = 'togrow'; li.setAttribute('role', 'switch'); } });
    $$('[data-themename]', scr).forEach((n) => (n.textContent = TH[theme][1]));
    return scr;
  }

  /* ── галерея по главам ── */
  const REF = {
    lifereset: ['Life Reset: задачи картинками', 'https://mobbin.com/screens/f9afa979-4998-4fa8-8d21-05dbfb75a695'],
    meplus: ['Me+: строки с объёмными картинками', 'https://mobbin.com/screens/4f0d3199-a686-467f-b80a-db4c317fe8ee'],
    octopus: ['Octopus Energy: настройки плитками с иллюстрациями', null],
    vocab: ['Vocabulary: «настроить приложение» картинками', null],
    bmw: ['My BMW: выбор темы с живым видом', null],
    snap: ['Snapchat: темы кружками и «применить»', null],
    stardust: ['Stardust: итог периода историями', null],
    alan: ['Alan: неделя цифрами и графиком', null],
    forest: ['Forest: день и неделя', null],
    strava: ['Strava: неделя графиком', null],
    discord: ['Discord: идущий звонок в ленте', null], whatsapp: ['WhatsApp', null],
    instagram: ['Instagram: истории кружками', null],
    manus: ['Manus: шаги и задача над полем', 'https://mobbin.com/screens/b3d70466-76e7-4b79-8826-062591d623d6'],
    perplexity: ['Perplexity: лента действий', 'https://mobbin.com/screens/d5ea3c61-af22-443e-be87-2c2534c76fbd'],
    cleo: ['Cleo', 'https://mobbin.com/screens/0a251f82-32fe-47cf-a6f8-ca6ed621ab4c'],
    revolut: ['Revolut Business', 'https://mobbin.com/screens/9a34e3c2-65fa-49e0-9a6f-5833c749d333'],
    instacart: ['Instacart: заказ в пути', 'https://mobbin.com/screens/d4e4f075-e8d2-4292-be15-b0bf2031b0db'],
    tinder: ['Tinder: смахнуть вправо или влево', null],
    trello: ['Trello: колонки', null],
    rocketmoney: ['Rocket Money', 'https://mobbin.com/screens/2f6c9f01-08d2-40c4-be25-ea1e89f7cfe5'],
    future: ['Future', 'https://mobbin.com/screens/2b5839c4-0519-4df7-9341-bd7fd3a0f60b'],
  };
  const frame = (id) => {
    const f = document.createElement('div');
    f.className = 'frame'; f.dataset.open = id;
    const sc = document.createElement('div'); sc.className = 'scaler'; sc.append(build(id));
    f.append(sc);
    return f;
  };
  setTheme(theme);
  const bar = $('#themebar');
  if (bar) bar.innerHTML = THEMES.map(([tid, name, , bg, hot]) => `<button data-act="settheme" data-th="${tid}" class="${tid === theme ? 'on' : ''}"><i style="background:linear-gradient(135deg,${bg} 55%,${hot} 55%)"></i>${name}</button>`).join('');
  if ($('#showcase')) ['deals', 'chat', 'pasha'].forEach((id) => $('#showcase').append(frame(id)));
  const chap = $('#chapters');
  CHAPTERS.forEach(([key, name, about]) => {
    const ids = ALL.filter((id) => $('#s-' + id).dataset.ch === key);
    const sec = document.createElement('section');
    sec.className = 'chapter';
    sec.innerHTML = `<h3>${name} <span class="dim" style="font-weight:600">· ${ids.length}</span></h3><p>${about}</p><div class="gallery"></div>`;
    ids.forEach((id) => {
      const tpl = $('#s-' + id);
      const shot = document.createElement('div');
      shot.className = 'shot';
      const src = (tpl.dataset.src || '').split(',').filter(Boolean).map((k) => REF[k]).filter(Boolean)
        .map(([n, u]) => (u ? `<a href="${u}" target="_blank" rel="noopener">${n}</a>` : n)).join(', ');
      shot.append(frame(id));
      shot.insertAdjacentHTML('beforeend', `<div class="cap"><b>${tpl.dataset.title}</b><p>${tpl.dataset.cap}</p>${src ? `<div class="src">образцы: ${src}</div>` : ''}</div>`);
      $('.gallery', sec).append(shot);
    });
    chap.append(sec);
  });

  /* ── ноутбук ── */
  const desk = $('#desk');
  if (desk) {
    desk.innerHTML = `<div class="rail"><div class="brand"><i class="pa" data-s="28" data-o="none"></i>АвтоПаша</div>
      <a class="on">${art('chat', 'xs')}Чат<span class="n">2</span></a>
      <a>${art('sessiya', 'xs')}Сессии<span class="n g">2</span></a>
      <a>${art('dela', 'xs')}Дела</a>
      <a><span style="width:30px;height:30px;display:grid;place-items:center"><i class="pa" data-s="26" data-o="none"></i></span>Паша</a>
      <span class="sp"></span><a>${art('nastroyki', 'xs')}Настройки</a></div>
      <div class="pane" data-pane="chat"></div><div class="pane" data-pane="deals"></div>`;
    dressAll(desk); fillMini(desk);
    $$('[data-pane]', desk).forEach((p) => p.append(build(p.dataset.pane)));
  }

  /* ── карта переезда и словарь ── */
  fetch('karta.json').then((r) => r.json()).then((k) => {
    const title = (id) => ($('#s-' + id) ? $('#s-' + id).dataset.title : id);
    $('#mapt').insertAdjacentHTML('beforeend', Object.entries(k.routes).map(([r, v]) =>
      `<div class="r"><code>/app${r === '/(now)' ? '' : r}</code><b>${title(v.screen)}</b><span>${v.kak}</span></div>`).join(''));
  }).catch(() => {});
  const WORDS = [
    ['сессии', 'сессии (оставил: ваше слово)'], ['дописка в работающую сессию', 'дописать в эту сессию'], ['очередь работ', 'очередь'], ['вернётся к этому сам, напоминания', 'будильники'],
    ['черновиком вам', 'спросит вас'], ['молча', 'только читает'], ['сам', 'отвечает сам'], ['рабочее место, каналы, чаты', 'где работает'],
    ['свой claude, лимиты', 'силы'], ['границы, полномочия, правила', 'что можно без вас'], ['что помнит', 'что Паша знает'], ['ждут вас, одобрения', 'нужно решение'],
    ['отчёт', 'результат'], ['журнал, лента', 'было'], ['выкат, деплой', 'выложил'], ['PR, смержен, заход, сорвался', 'не показываем'],
    ['второй фактор', 'вход по коду'], ['наблюдатель', 'только смотрит'], ['пульт, доска, планы', 'дела'], ['для ленты', 'показать людям'],
  ];
  const W = $('#words');
  if (W) W.innerHTML = WORDS.map(([a, b]) => `<div class="word"><s>${a}</s><svg class="ico s" style="color:var(--hot)"><use href="#i-chev"/></svg><b>${b}</b></div>`).join('');
  $$('i[data-a]', $('.page')).forEach((n) => (n.outerHTML = art(n.dataset.a, n.className)));
  dressAll($('.page')); fillMini($('.page'));
  requestAnimationFrame(() => settle(document));

  /* ── живой прототип ── */
  const stage = $('#stage'), pnav = $('#pnav');
  pnav.innerHTML = CHAPTERS.map(([key, name]) => `<i>${name}</i>` + ALL.filter((id) => $('#s-' + id).dataset.ch === key)
    .map((id) => `<button data-nav="${id}">${$('#s-' + id).dataset.title}</button>`).join('')).join('');
  let hist = [];
  let ticker = null;
  function tick(scr) {
    clearInterval(ticker);
    ticker = setInterval(() => $$('[data-since]', scr).forEach((n) => { n.dataset.since = +n.dataset.since + 1; n.textContent = fmt(+n.dataset.since); }), 1000);
  }
  function show(id, anim = 'in') {
    const scr = build(id);
    if ($('.sheet', scr) && anim === 'in') anim = 'in-up';
    scr.classList.add(anim);
    stage.replaceChildren(scr);
    settle(stage);
    tick(scr);
    if (id === 'chat-voice') listen(scr);
    $$('button', pnav).forEach((b) => b.classList.toggle('on', b.dataset.nav === id));
    if (location.hash !== '#' + id) history.replaceState(null, '', location.pathname + location.search + '#' + id);
  }
  function open(id) { hist = [id]; document.body.classList.add('solo'); show(id, 'fade'); }
  function go(id, fade) { if (fade) { hist[hist.length - 1] = id; return show(id, 'fade'); } hist.push(id); show(id, 'in'); }
  function back() { if (hist.length > 1) hist.pop(); show(hist[hist.length - 1] || 'chat', 'in-back'); }
  function tab(id, from) {
    const lens = from && $('.lens', from.closest('nav'));
    if (lens) lens.style.left = `calc(5px + ${TABS.indexOf(id)} * (100% - 10px) / 4)`;
    setTimeout(() => { hist = [id]; show(id, 'fade'); }, lens ? 160 : 0);
  }
  function close() { document.body.classList.remove('solo'); clearInterval(ticker); history.replaceState(null, '', location.pathname + location.search); }

  function toast(scr, text) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<svg class="ico s" style="stroke-width:3"><use href="#i-check"/></svg>${text}`;
    scr.append(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('on')));
    setTimeout(() => t.classList.remove('on'), 1700);
    setTimeout(() => t.remove(), 2300);
  }
  function confetti(scr) {
    const c = document.createElement('div');
    c.className = 'confetti';
    const colors = ['#FF6A2B', '#FFCF4D', '#3FBF8F', '#FBF4EC', '#E24E06', '#FFC08F'];
    c.innerHTML = Array.from({ length: 70 }, () => `<i style="left:${Math.random() * 100}%;background:${colors[(Math.random() * 6) | 0]};--dx:${(Math.random() - .5) * 160}px;--r:${(Math.random() - .5) * 900}deg;animation-delay:${Math.random() * 250}ms;animation-duration:${1200 + Math.random() * 900}ms"></i>`).join('');
    scr.append(c);
    setTimeout(() => c.remove(), 2600);
  }
  function typeInto(box, text, done) {
    let i = 0;
    const step = () => {
      if (!box || !box.isConnected) return;
      box.innerHTML = text.slice(0, i) + '<span class="caret"></span>';
      if (i++ < text.length) setTimeout(step, 24 + Math.random() * 34); else done && done();
    };
    step();
  }
  function listen(scr) { typeInto($('[data-typed]', scr), 'И гостиницам в Казани тоже напиши, там у нас знакомые'); }
  function poke(scr, text) {
    const feed = $('.feed', scr), now = $('[data-now]', scr);
    if (!feed) return;
    const b = document.createElement('div');
    b.className = 'bub me';
    b.style.cssText = 'margin:8px 0 4px auto;display:block;width:fit-content';
    b.innerHTML = `${text}<span class="st"><svg class="ico xs"><use href="#i-clock"/></svg>отправляю</span>`;
    feed.insertBefore(b, now);
    $('[data-feed]', scr).scrollTo({ top: 1e5, behavior: 'smooth' });
    setTimeout(() => { $('.st', b).innerHTML = '<svg class="ico xs"><use href="#i-check"/></svg>доставлено'; }, 600);
    setTimeout(() => { $('.st', b).innerHTML = '<svg class="ico xs"><use href="#i-check"/></svg><svg class="ico xs" style="margin-left:-10px"><use href="#i-check"/></svg>прочитал 13:55'; }, 1700);
    setTimeout(() => {
      const t = document.createElement('div');
      t.className = 'thought';
      t.innerHTML = '<small>Паша ответил</small>' + (/дела/i.test(text) ? 'Всё идёт: 29 из 33 страниц, через полчаса возьмусь за статьи.' :
        /готов/i.test(text) ? 'Готово 28 страниц: vikom.autopasha.ru. Доставку покажу минут через десять.' :
        /остановись/i.test(text) ? 'Хорошо, допишу эту страницу и остановлюсь. Скажу, где встал.' : 'Сделаю: Москва отдельной строкой, область ниже.');
      feed.insertBefore(t, now);
      $('[data-feed]', scr).scrollTo({ top: 1e5, behavior: 'smooth' });
    }, 2900);
  }
  /* стопка решений: смахнуть вправо «как советую», влево «на завтра» (и кнопками) */
  function fly(scr, dir, msg) {
    const card = $('[data-deck] .dq', scr);
    if (!card) return;
    card.style.transition = 'transform .45s cubic-bezier(.3,.7,.2,1), opacity .45s';
    card.style.transform = `translateX(${dir * 140}%) rotate(${dir * 14}deg)`;
    card.style.opacity = '0';
    toast(scr, msg);
    if (dir > 0) confetti(scr);
    setTimeout(() => go('chat-q-2', true), 520);
  }
  /* итог недели историями */
  function story(scr, d) {
    const pages = $$('[data-wkp]', scr);
    let i = pages.findIndex((p) => !p.hidden);
    i = Math.max(0, Math.min(pages.length - 1, i + d));
    pages.forEach((p, k) => (p.hidden = k !== i));
    $$('.bars-top i', scr).forEach((b, k) => b.classList.toggle('d', k <= i));
  }

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-back],[data-act],[data-open],[data-nav],[data-tab],.seg button,.mode,.way,.chips button,.fchips .fc,.mode2 button,.plat button,.steps3 button');
    if (!t) return;
    const scr = t.closest('.scr');
    const inStage = !!(scr && scr.closest('#stage'));
    if (t.dataset.act === 'settheme' && !scr) return setTheme(t.dataset.th);
    if (t.dataset.open && !inStage) { e.preventDefault(); return open(t.dataset.open); }
    if (t.dataset.nav) return open(t.dataset.nav);
    if (scr && !inStage) { const fr = t.closest('.frame'); if (fr) return open(fr.dataset.open); return; }

    if (t.dataset.act === 'togrow') { $('.tog', t).classList.toggle('on'); return; }
    if (t.dataset.tab) { e.preventDefault(); return tab(t.dataset.tab, t); }
    if (t.dataset.go) { e.preventDefault(); e.stopPropagation(); return go(t.dataset.go, t.hasAttribute('data-fade')); }
    if (t.hasAttribute('data-back')) return back();
    const one = (sel) => { $$(sel, t.parentElement).forEach((b) => b.classList.toggle('on', b === t)); };
    if (t.matches('.seg button')) return one('button');
    if (t.matches('.mode')) return one('.mode');
    if (t.matches('.way')) return one('.way');
    if (t.matches('.chips button') && !t.dataset.act) return one('button');
    if (t.matches('.fchips .fc')) return one('.fc');
    if (t.matches('.mode2 button')) return one('button');
    if (t.matches('.steps3 button')) return one('button');
    if (t.matches('.plat button')) { t.classList.toggle('on'); return; }

    const act = t.dataset.act;
    if (act === 'close') return close();
    if (!scr) return;
    if (act === 'settheme') { setTheme(t.dataset.th); toast(scr, 'Тема «' + TH[t.dataset.th][1] + '»'); return show(scr.dataset.id, 'fade'); }
    if (act === 'yes') return fly(scr, 1, t.dataset.toast || 'Сделано, как советовал');
    if (act === 'later') return fly(scr, -1, 'Вернётся завтра в 10:00');
    if (act === 'answer') {
      const card = t.closest('.qcard,.dq');
      card.classList.add('answered');
      toast(scr, t.dataset.toast || 'Готово');
      const st = $('.st.ask .n', scr); if (st) st.textContent = '1';
      return;
    }
    if (act === 'answer-back') { toast(scr, t.dataset.toast); setTimeout(back, 1000); return; }
    if (act === 'toast') { toast(scr, t.dataset.toast); return; }
    if (act === 'accept') { confetti(scr); toast(scr, t.dataset.toast || 'Принято, Паша рад'); return; }
    if (act === 'tog') { t.classList.toggle('on'); return; }
    if (act === 'tagdeal') { toast(scr, 'Сообщение пойдёт в дело'); setTimeout(back, 800); return; }
    if (act === 'expand') { t.classList.toggle('open'); return; }
    if (act === 'poke') { poke(scr, t.dataset.text); return; }
    if (act === 'voice-send') { toast(scr, 'Ушло Паше, он понял: Казань тоже'); setTimeout(back, 1100); return; }
    if (act === 'wk-next') return story(scr, 1);
    if (act === 'wk-prev') return story(scr, -1);
    if (act === 'qfirst') {
      const row = t.closest('[data-qrow]'), box = row.parentElement;
      box.prepend(row);
      $$('[data-qrow] .num', box).forEach((n, i) => (n.textContent = i + 1));
      toast(scr, 'Начнёт следующей');
      return;
    }
    if (act === 'outfit') {
      $$('[data-act="outfit"]', scr).forEach((b) => b.classList.toggle('on', b === t));
      const me = $('[data-me]', scr); if (me) { me.dataset.o = t.dataset.o; dressAll(me.parentElement); }
      toast(scr, 'Наряд: ' + OUTFIT_NAMES[t.dataset.o]);
    }
  });

  /* шторка «было / стало»: тянуть пальцем или мышью */
  document.addEventListener('pointerdown', (e) => {
    const c = e.target.closest('.cmp');
    if (!c || !c.closest('#stage')) return;
    const move = (ev) => { const r = c.getBoundingClientRect(); const x = Math.max(4, Math.min(96, ((ev.clientX - r.left) / r.width) * 100)); c.style.setProperty('--x', x + '%'); };
    move(e);
    const up = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', up); };
    addEventListener('pointermove', move); addEventListener('pointerup', up);
  });

  /* Esc закрывает прототип; стрелки в стопке решений — как смахнуть */
  document.addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('solo')) return;
    const scr = $('#stage .scr');
    if (scr && $('[data-deck]', scr) && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) return fly(scr, e.key === 'ArrowRight' ? 1 : -1, e.key === 'ArrowRight' ? 'Сделано, как советовал' : 'Вернётся завтра в 10:00');
    if (scr && $('.wk', scr) && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) return story(scr, e.key === 'ArrowRight' ? 1 : -1);
    if (e.key !== 'Escape') return;
    if ($('#stage .sheet') && hist.length > 1) return back();
    close();
  });

  const start = location.hash.slice(1);
  if (ALL.includes(start)) open(start);
})();
