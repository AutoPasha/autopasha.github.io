/* Макет «АвтоПаша: приложение», версия 3: галерея экранов по главам, живой прототип, ноутбук и карта переезда. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  if (/(^|[?&])dark/.test(location.search.slice(1))) document.body.classList.replace('t-light', 't-dark');
  const TABS = ['chat', 'sessions', 'deals', 'pasha'];
  const CHAPTERS = [
    ['chat', 'Чат', 'Один разговор с Пашей. Сверху что он делает, внизу что ждёт вас.'],
    ['sessions', 'Сессии', 'Что Паша делает сейчас, что возьмёт дальше, к чему вернётся сам и что уже было. Дописки — внутри живой сессии.'],
    ['deals', 'Дела', 'Что получится и когда. Дело собирает свои шаги, сессии, будильники и часть разговора.'],
    ['pasha', 'Паша', 'Всё, что раньше жило в тринадцати пунктах меню: силы, где работает, команда, правила, память, доступы, деньги.'],
    ['states', 'Состояния и роли', 'Первый день, загрузка, нет сети, кончились силы, чужая роль, пустые вкладки.'],
    ['out', 'Вне приложения', 'Пуш с кнопками и живое уведомление сессии.'],
  ];
  const ALL = $$('template[id^="s-"]').map((t) => t.id.slice(2));
  /* переписка открывается на последнем сообщении, как в любом мессенджере */
  const END = ['chat', 'chat-voice', 'chat-offline', 'watcher'];
  const settle = (root) => $$('.scr', root).forEach((s) => { if (END.includes(s.dataset.id)) { const b = $('.body', s); b.scrollTop = b.scrollHeight; } });

  /* ── Паша: персиковый кубик с антенной, как на иконке приложения ── */
  const OUTFITS = {
    none: '',
    headset: '<path d="M14 52 C14 18 86 18 86 52" fill="none" stroke="#2A211B" stroke-width="5" stroke-linecap="round"/><rect x="7" y="44" width="13" height="22" rx="6" fill="#2A211B"/><rect x="80" y="44" width="13" height="22" rx="6" fill="#FF6A2B"/><path d="M86 62 C86 76 74 78 62 76" fill="none" stroke="#2A211B" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="76" r="4" fill="#2A211B"/>',
    glasses: '<rect x="28" y="42" width="20" height="17" rx="7" fill="rgba(255,255,255,.25)" stroke="#2A211B" stroke-width="3.2"/><rect x="52" y="42" width="20" height="17" rx="7" fill="rgba(255,255,255,.25)" stroke="#2A211B" stroke-width="3.2"/><path d="M48 49h4" stroke="#2A211B" stroke-width="3.2"/>',
    bow: '<path d="M50 90 L36 82 L36 98 Z M50 90 L64 82 L64 98 Z" fill="#FF6A2B" stroke="#2A211B" stroke-width="2.4" stroke-linejoin="round"/><circle cx="50" cy="90" r="4.2" fill="#2A211B"/>',
    crown: '<path d="M30 22 L34 6 L42 16 L50 3 L58 16 L66 6 L70 22 Z" fill="#FFCF4D" stroke="#2A211B" stroke-width="2.6" stroke-linejoin="round"/><circle cx="50" cy="14" r="2.6" fill="#FF6A2B"/>',
  };
  const OUTFIT_NAMES = { none: 'без наряда', headset: 'гарнитура', glasses: 'очки', bow: 'бабочка', crown: 'корона' };
  let uid = 0;
  function pasha(size = 64, outfit = 'none') {
    const id = 'pg' + uid++;
    const ant = outfit === 'crown' ? '' :
      `<g class="ant"><path d="M50 18 L50 6" stroke="#2A211B" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="5" r="5" fill="#FF6A2B"/><circle cx="48.5" cy="3.6" r="1.6" fill="#fff" opacity=".7"/></g>`;
    return `<svg class="pasha" width="${size}" height="${size}" viewBox="0 -4 100 108" aria-label="Паша">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#FDE4D0"/><stop offset="1" stop-color="#F3B28A"/></linearGradient>
      <radialGradient id="${id}s" cx=".3" cy=".25" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="50" cy="100" rx="28" ry="3.5" fill="#000" opacity=".16"/>
      <g class="bob">${ant}
        <g transform="rotate(-4 50 53)"><rect x="14" y="17" width="72" height="72" rx="25" fill="url(#${id})"/><rect x="14" y="17" width="72" height="72" rx="25" fill="url(#${id}s)"/><rect x="14.5" y="17.5" width="71" height="71" rx="24.5" fill="none" stroke="#C7754A" stroke-opacity=".25"/></g>
        <g class="look"><g class="eyes"><rect x="36" y="42" width="7" height="15" rx="3.5" fill="#1E1712"/><rect x="57" y="42" width="7" height="15" rx="3.5" fill="#1E1712"/><circle cx="38.6" cy="45.5" r="1.5" fill="#fff"/><circle cx="59.6" cy="45.5" r="1.5" fill="#fff"/></g></g>
        <ellipse cx="29" cy="64" rx="6.5" ry="3.6" fill="#FF7E6E" opacity=".45"/><ellipse cx="71" cy="64" rx="6.5" ry="3.6" fill="#FF7E6E" opacity=".45"/>
        <path d="M45 66 Q50 70 55 66" fill="none" stroke="#1E1712" stroke-width="2.4" stroke-linecap="round"/>
        ${OUTFITS[outfit] || ''}
      </g></svg>`;
  }
  const dressAll = (root) => $$('i.pa', root).forEach((el) => {
    el.innerHTML = pasha(+el.dataset.s || 64, el.dataset.o || 'none');
    el.style.display = 'inline-block'; el.style.lineHeight = 0; el.style.flex = 'none';
  });

  /* ── повторяющиеся части ── */
  const SB = `<span>13:54</span><span class="r"><svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor"/><rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor"/><rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg><svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 11.5 1 4.2a10 10 0 0 1 14 0z" fill="currentColor"/></svg><i class="bat"></i></span>`;
  /* quiet — пустые и спокойные экраны: ни счётчика вопросов, ни зелёной точки работы */
  const DOCK = (on, quiet) => {
    const i = Math.max(0, TABS.indexOf(on));
    if (quiet) return DOCK(on).replace(/<span class="badge">\d+<\/span>|<span class="live-dot"><\/span>/g, '');
    const t = (id, ico, name, extra = '') => `<a class="tab ${on === id ? 'on' : ''}" data-tab="${id}" href="#${id}">${ico}${name}${extra}</a>`;
    return `<nav><span class="lens" style="left:calc(5px + ${i} * (100% - 10px) / 4)"></span>
      ${t('chat', '<svg class="ico"><use href="#i-chat"/></svg>', 'Чат', '<span class="badge">2</span>')}
      ${t('sessions', '<svg class="ico"><use href="#i-pulse"/></svg>', 'Сессии', '<span class="live-dot"></span>')}
      ${t('deals', '<svg class="ico"><use href="#i-list"/></svg>', 'Дела')}
      ${t('pasha', `<span class="face">${pasha(26, 'headset')}</span>`, 'Паша')}
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
    dressAll(scr);
    $$('[data-wave]', scr).forEach((w) => {
      w.innerHTML = Array.from({ length: 22 }, (_, i) => `<i style="height:${5 + Math.round(Math.abs(Math.sin(i * 1.7)) * 17)}px"></i>`).join('');
    });
    $$('[data-recwave]', scr).forEach((w) => {
      w.innerHTML = Array.from({ length: 18 }, (_, i) => `<i style="height:${6 + Math.round(Math.abs(Math.sin(i * 2.1)) * 14)}px;animation-delay:${i * 55}ms"></i>`).join('');
    });
    $$('[data-outfits]', scr).forEach((box) => {
      box.innerHTML = Object.keys(OUTFITS).map((k) => `<button data-act="outfit" data-o="${k}" class="${k === 'headset' ? 'on' : ''}" title="${OUTFIT_NAMES[k]}" aria-label="${OUTFIT_NAMES[k]}">${pasha(34, k)}</button>`).join('');
    });
    $$('[data-since]', scr).forEach((n) => (n.textContent = fmt(+n.dataset.since)));
    $$('.tog', scr).forEach((g) => { const li = g.closest('.li'); if (li) { li.dataset.act = 'togrow'; li.setAttribute('role', 'switch'); } });
    const light = document.body.classList.contains('t-light');
    $$('[data-themename]', scr).forEach((n) => (n.textContent = light ? 'светлая' : 'тёмная'));
    return scr;
  }

  /* ── галерея по главам ── */
  const REF = {
    discord: ['Discord: идущий звонок в ленте', 'https://mobbin.com/screens/'],
    whatsapp: ['WhatsApp', null], slack: ['Slack: закреп над перепиской', null],
    manus: ['Manus: шаги и задача над полем', 'https://mobbin.com/screens/b3d70466-76e7-4b79-8826-062591d623d6'],
    perplexity: ['Perplexity: лента действий', 'https://mobbin.com/screens/d5ea3c61-af22-443e-be87-2c2534c76fbd'],
    githubcopilot: ['GitHub Copilot: сессия и «в очереди»', null],
    tiimo: ['Tiimo', null],
    cleo: ['Cleo', 'https://mobbin.com/screens/0a251f82-32fe-47cf-a6f8-ca6ed621ab4c'],
    revolut: ['Revolut Business', 'https://mobbin.com/screens/9a34e3c2-65fa-49e0-9a6f-5833c749d333'],
    asana: ['Asana', 'https://mobbin.com/screens/53b9bc89-e6fe-4844-8476-93e1ad99d0c5'],
    instacart: ['Instacart: заказ в пути', 'https://mobbin.com/screens/d4e4f075-e8d2-4292-be15-b0bf2031b0db'],
    boltfood: ['Bolt Food', null], fabric: ['Fabric', 'https://mobbin.com/screens/9a1657cc-a94e-40db-b5bb-a8c0eccf19c4'],
    bevel: ['Bevel', 'https://mobbin.com/screens/c6539f39-26cf-41ef-8703-6fd809cabdd7'],
    future: ['Future', 'https://mobbin.com/screens/2b5839c4-0519-4df7-9341-bd7fd3a0f60b'],
    rocketmoney: ['Rocket Money', 'https://mobbin.com/screens/2f6c9f01-08d2-40c4-be25-ea1e89f7cfe5'],
    remote: ['Remote', 'https://mobbin.com/screens/0cbdcc18-5e9d-4678-8d0f-b8c2af3c49ab'],
  };
  REF.discord[1] = null;
  const frame = (id) => {
    const f = document.createElement('div');
    f.className = 'frame'; f.dataset.open = id;
    const sc = document.createElement('div'); sc.className = 'scaler'; sc.append(build(id));
    f.append(sc);
    return f;
  };
  if ($('#showcase')) ['sessions', 'chat', 'session'].forEach((id) => $('#showcase').append(frame(id)));
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
      shot.insertAdjacentHTML('beforeend', `<div class="cap"><b>${tpl.dataset.title}</b><p>${tpl.dataset.cap}</p>${src ? `<div class="src">приёмы: ${src}</div>` : ''}</div>`);
      $('.gallery', sec).append(shot);
    });
    chap.append(sec);
  });

  /* ── ноутбук ── */
  const desk = $('#desk');
  if (desk) {
    desk.innerHTML = `<div class="rail"><div class="brand"><i class="pa" data-s="28" data-o="headset"></i>АвтоПаша</div>
      <a class="on"><svg class="ico"><use href="#i-chat"/></svg>Чат<span class="n">2</span></a>
      <a><svg class="ico"><use href="#i-pulse"/></svg>Сессии<span class="n g">2</span></a>
      <a><svg class="ico"><use href="#i-list"/></svg>Дела</a>
      <a><span style="width:22px;height:22px;display:grid;place-items:center"><i class="pa" data-s="22" data-o="headset"></i></span>Паша</a>
      <span class="sp"></span><a><svg class="ico"><use href="#i-gear"/></svg>Настройки</a></div>
      <div class="pane" data-pane="chat"></div><div class="pane" data-pane="session"></div>`;
    dressAll(desk);
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
    ['свой claude, лимиты', 'силы'], ['границы, полномочия, правила', 'что можно без вас'], ['что помнит', 'что Паша знает'], ['ждут вас, одобрения, для ленты', 'нужно решение'],
    ['отчёт', 'результат'], ['журнал, лента', 'было'], ['выкат, деплой', 'выложил'], ['PR, смержен, заход, сорвался', 'не показываем'],
    ['второй фактор', 'вход по коду'], ['кто имеет доступ', 'команда'], ['наблюдатель', 'только смотрит'], ['пульт, доска, планы', 'дела'],
  ];
  $('#words').innerHTML = WORDS.map(([a, b]) => `<div class="word"><s>${a}</s><svg class="ico s" style="color:var(--hot)"><use href="#i-chev"/></svg><b>${b}</b></div>`).join('');
  dressAll($('.page'));
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
    const colors = ['#FF6A2B', '#FFCF4D', '#22B864', '#3B8BFF', '#FF6F9C', '#8E6BFF'];
    c.innerHTML = Array.from({ length: 70 }, () => `<i style="left:${Math.random() * 100}%;background:${colors[(Math.random() * 6) | 0]};--dx:${(Math.random() - .5) * 160}px;--r:${(Math.random() - .5) * 900}deg;animation-delay:${Math.random() * 250}ms;animation-duration:${1200 + Math.random() * 900}ms"></i>`).join('');
    scr.append(c);
    setTimeout(() => c.remove(), 2600);
  }
  function typeInto(box, text, done) {
    let i = 0;
    const step = () => {
      if (!box.isConnected) return;
      box.innerHTML = text.slice(0, i) + '<span class="caret"></span>';
      if (i++ < text.length) setTimeout(step, 24 + Math.random() * 34); else done && done();
    };
    step();
  }
  function listen(scr) {
    typeInto($('[data-typed]', scr), 'И гостиницам в Казани тоже напиши, там у нас знакомые');
  }
  /* дописка в живую сессию: встаёт в ленту, доставлена, прочитана, ответ — туда же */
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
  function setTheme(light) {
    document.body.classList.toggle('t-light', light);
    document.body.classList.toggle('t-dark', !light);
    $$('[data-themebtn]').forEach((s) => (s.textContent = light ? 'тёмная' : 'светлая'));
    $$('[data-themename]').forEach((n) => (n.textContent = light ? 'светлая' : 'тёмная'));
    $('meta[name=theme-color]').content = light ? '#F6F4F1' : '#0B0B0C';
  }
  setTheme(document.body.classList.contains('t-light'));

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-back],[data-act],[data-open],[data-nav],[data-tab],.seg button,.mode,.way,.chips button');
    if (!t) return;
    const scr = t.closest('.scr');
    const inStage = !!(scr && scr.closest('#stage'));
    if (t.dataset.open && !inStage) { e.preventDefault(); return open(t.dataset.open); }
    if (t.dataset.nav) return open(t.dataset.nav);
    if (scr && !inStage) { const fr = t.closest('.frame'); if (fr) return open(fr.dataset.open); return; }

    if (t.dataset.act === 'togrow') { $('.tog', t).classList.toggle('on'); return; }
    if (t.dataset.tab) { e.preventDefault(); return tab(t.dataset.tab, t); }
    if (t.dataset.go) { e.preventDefault(); e.stopPropagation(); return go(t.dataset.go, t.hasAttribute('data-fade')); }
    if (t.hasAttribute('data-back')) return back();
    if (t.matches('.seg button')) { $$('button', t.parentElement).forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (t.matches('.mode')) { $$('.mode', t.parentElement).forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (t.matches('.way')) { $$('.way', t.parentElement).forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (t.matches('.chips button') && !t.dataset.act) { $$('button', t.parentElement).forEach((b) => b.classList.toggle('on', b === t)); return; }

    const act = t.dataset.act;
    if (act === 'theme') return setTheme(!document.body.classList.contains('t-light'));
    if (act === 'close') return close();
    if (!scr) return;
    if (act === 'answer') {
      const card = t.closest('.qcard');
      card.classList.add('answered');
      toast(scr, t.dataset.toast || 'Готово');
      const dock = $('.qdock .n', scr); if (dock) { dock.textContent = '1'; $('.qdock b', scr).textContent = 'Ждёт вас: тема ролика'; }
      return;
    }
    if (act === 'answer-back') { toast(scr, t.dataset.toast); setTimeout(back, 1000); return; }
    if (act === 'toast') { toast(scr, t.dataset.toast); return; }
    if (act === 'accept') { confetti(scr); toast(scr, 'Принято, Паша рад'); return; }
    if (act === 'tog') { t.classList.toggle('on'); return; }
    if (act === 'tagdeal') { toast(scr, 'Сообщение пойдёт в дело'); setTimeout(back, 800); return; }
    if (act === 'expand') { t.classList.toggle('open'); return; }
    if (act === 'poke') { poke(scr, t.dataset.text); return; }
    if (act === 'voice-send') { toast(scr, 'Ушло Паше, он понял: Казань тоже'); setTimeout(back, 1100); return; }
    if (act === 'qfirst') {
      const row = t.closest('[data-qrow]'), box = row.parentElement;
      box.prepend(row);
      $$('[data-qrow] .num', box).forEach((n, i) => (n.textContent = i + 1));
      toast(scr, 'Начнёт следующей');
      return;
    }
    if (act === 'outfit') {
      $$('[data-act="outfit"]', scr).forEach((b) => b.classList.toggle('on', b === t));
      const me = $('[data-me]', scr); me.dataset.o = t.dataset.o; dressAll(me.parentElement);
    }
  });

  const start = location.hash.slice(1);
  if (ALL.includes(start)) open(start);
  else if (matchMedia('(max-width:700px)').matches) open('chat');
})();
