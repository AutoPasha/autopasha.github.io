/* Макет «АвтоПаша: приложение», версия 2: галерея экранов и живой прототип в одном файле. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  if (/(^|[?&])dark/.test(location.search.slice(1))) document.body.classList.replace('t-light', 't-dark');
  const ORDER = ['home', 'question', 'ask', 'deals', 'deal', 'result', 'chat', 'pasha', 'power', 'where', 'connect', 'pay', 'hello'];
  const TABS = ['home', 'deals', 'pasha'];

  /* ── Паша: тот же персиковый кубик с антенной, что на иконке приложения ── */
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
  const DOCK = (on) => {
    const i = Math.max(0, TABS.indexOf(on));
    return `<nav class="tabcap"><span class="lens" style="left:calc(5px + ${i} * (100% - 10px) / 3)"></span>
      <a class="tab ${on === 'home' ? 'on' : ''}" data-tab="home"><svg class="ico"><use href="#i-home"/></svg>Главная<span class="badge">2</span></a>
      <a class="tab ${on === 'deals' ? 'on' : ''}" data-tab="deals"><svg class="ico"><use href="#i-list"/></svg>Дела</a>
      <a class="tab ${on === 'pasha' ? 'on' : ''}" data-tab="pasha"><span class="face">${pasha(26, 'none')}</span>Паша</a>
    </nav><button class="fab" data-go="ask" aria-label="Поручить"><svg class="ico"><use href="#i-plus"/></svg></button>`;
  };
  function build(id) {
    const tpl = $('#s-' + id);
    const scr = document.createElement('div');
    scr.className = 'scr';
    if (tpl.hasAttribute('data-aura')) scr.classList.add('aura');
    if (tpl.hasAttribute('data-sheet')) scr.classList.add('sheeted');
    scr.dataset.id = id;
    scr.append(tpl.content.cloneNode(true));
    $$('.sb', scr).forEach((n) => (n.innerHTML = SB));
    $$('[data-dock]', scr).forEach((n) => (n.innerHTML = DOCK(n.dataset.dock)));
    dressAll(scr);
    $$('svg.lines', scr).forEach((svg) => { // голосовой шар: кольца сферы, приём Voice Orb из 21st
      let s = '';
      for (let i = -6; i <= 6; i++) {
        const y = 98 + i * 13.5, rx = Math.sqrt(Math.max(0, 92 * 92 - (i * 13.5) ** 2));
        s += `<ellipse cx="98" cy="${y}" rx="${rx.toFixed(1)}" ry="${(5 + (6 - Math.abs(i)) * .55).toFixed(1)}" style="animation-delay:${Math.abs(i) * 60}ms;opacity:${(.22 + (6 - Math.abs(i)) * .08).toFixed(2)}"/>`;
      }
      svg.innerHTML = s;
    });
    $$('[data-wave]', scr).forEach((w) => {
      w.innerHTML = Array.from({ length: 20 }, (_, i) => `<i style="display:block;width:3px;border-radius:3px;background:currentColor;height:${6 + Math.round(Math.abs(Math.sin(i * 1.7)) * 16)}px"></i>`).join('');
    });
    $$('[data-outfits]', scr).forEach((box) => {
      box.innerHTML = Object.keys(OUTFITS).map((k) => `<button data-act="outfit" data-o="${k}" class="${k === 'headset' ? 'on' : ''}" title="${OUTFIT_NAMES[k]}">${pasha(34, k)}</button>`).join('');
    });
    $$('[data-seg3]', scr).forEach((seg) => {
      const i = $$('button', seg).findIndex((b) => b.classList.contains('on'));
      $('.lens', seg).style.left = `calc(4px + ${i} * (100% - 8px) / 3)`;
    });
    const light = document.body.classList.contains('t-light');
    $$('[data-themename]', scr).forEach((n) => (n.textContent = light ? 'светлая' : 'тёмная'));
    return scr;
  }

  /* ── галерея ── */
  const REF = {
    bevel: ['Bevel', 'https://mobbin.com/screens/c6539f39-26cf-41ef-8703-6fd809cabdd7'],
    future: ['Future', 'https://mobbin.com/screens/2b5839c4-0519-4df7-9341-bd7fd3a0f60b'],
    asana: ['Asana', 'https://mobbin.com/screens/53b9bc89-e6fe-4844-8476-93e1ad99d0c5'],
    cleo: ['Cleo', 'https://mobbin.com/screens/0a251f82-32fe-47cf-a6f8-ca6ed621ab4c'],
    gemini: ['Gemini', 'https://mobbin.com/screens/b1af71d2-f3f3-46ac-98f6-b5635fd1f15b'],
    perplexity: ['Perplexity', 'https://mobbin.com/screens/d5ea3c61-af22-443e-be87-2c2534c76fbd'],
    chatgpt: ['ChatGPT', 'https://mobbin.com/screens/67d036b4-256c-441b-aa53-2a7ebb7b9187'],
    instacart: ['Instacart', 'https://mobbin.com/screens/d4e4f075-e8d2-4292-be15-b0bf2031b0db'],
    remote: ['Remote', 'https://mobbin.com/screens/0cbdcc18-5e9d-4678-8d0f-b8c2af3c49ab'],
    revolut: ['Revolut Business', 'https://mobbin.com/screens/9a34e3c2-65fa-49e0-9a6f-5833c749d333'],
    sweetgreen: ['sweetgreen', null], boltfood: ['Bolt Food', null], walmart: ['Walmart', null], grab: ['Grab', null], ikea: ['IKEA', null],
    fabric: ['Fabric', 'https://mobbin.com/screens/9a1657cc-a94e-40db-b5bb-a8c0eccf19c4'],
    manus: ['Manus', 'https://mobbin.com/screens/b3d70466-76e7-4b79-8826-062591d623d6'],
    shop: ['Shop', null], x: ['X', null], brainly: ['Brainly', 'https://mobbin.com/screens/471e47af-c2db-4f01-a0e7-cf3f3155e7b2'],
    vivid: ['Vivid', 'https://mobbin.com/screens/2bbf134d-c479-4fde-bea8-c9c2f03712e5'],
    ahead: ['Ahead', 'https://mobbin.com/screens/dbee17fb-d099-432f-b798-8b920cc8a92c'],
    rocketmoney: ['Rocket Money', 'https://mobbin.com/screens/2f6c9f01-08d2-40c4-be25-ea1e89f7cfe5'],
    orb: ['Voice Orb из 21st', 'https://21st.dev/aadixc0de/voice-orb/default'],
  };
  const frame = (id) => {
    const f = document.createElement('div');
    f.className = 'frame'; f.dataset.open = id;
    const sc = document.createElement('div'); sc.className = 'scaler'; sc.append(build(id));
    f.append(sc);
    return f;
  };
  ['deals', 'home', 'pasha'].forEach((id) => $('#showcase').append(frame(id)));
  const g = $('#gallery');
  ORDER.forEach((id) => {
    const tpl = $('#s-' + id);
    const shot = document.createElement('div');
    shot.className = 'shot';
    const src = (tpl.dataset.src || '').split(',').filter(Boolean).map((k) => REF[k]).filter(Boolean)
      .map(([n, u]) => (u ? `<a href="${u}" target="_blank" rel="noopener">${n}</a>` : n)).join(', ');
    shot.append(frame(id));
    shot.insertAdjacentHTML('beforeend', `<div class="cap"><b>${tpl.dataset.title}</b><p>${tpl.dataset.cap}</p>${src ? `<div class="src">приёмы: ${src}</div>` : ''}</div>`);
    g.append(shot);
  });
  Object.values(REF).forEach(([n, u]) => { if (u) $('#refs').insertAdjacentHTML('beforeend', `<a href="${u}" target="_blank" rel="noopener">${n}</a>`); });

  const WORDS = [
    ['черновиком вам', 'спросит вас'], ['молча', 'только читает'], ['сам', 'отвечает сам'], ['нет (режим чата)', 'убрать чат из списка'],
    ['рабочее место', 'где работает'], ['свой claude', 'силы Паши'], ['границы, полномочия', 'что можно без вас'], ['что помнит', 'что Паша знает о вас'],
    ['ждут вас, очередь, одобрения', 'нужно решение'], ['отчёт', 'результат'], ['журнал, лента', 'готово'], ['выкат, деплой', 'выложил'],
    ['PR, смержен', 'не показываем'], ['сессии, заходы, сорвались', 'не показываем'], ['наш аккаунт, ваш аккаунт, наш бот, ваш бот', 'отдельным ботом или от вашего имени'],
    ['второй фактор', 'вход по коду'], ['ваши согласия', 'документы'], ['кто имеет доступ', 'команда'], ['реплика, задача, просто разговор', 'одно поле, Паша сам поймёт'], ['«на завтра», «не горит»', 'если промолчите, сделаю в 12:00'],
  ];
  $('#words').innerHTML = WORDS.map(([a, b]) => `<div class="word"><s>${a}</s><svg class="ico s" style="color:var(--hot)"><use href="#i-chev"/></svg><b>${b}</b></div>`).join('');
  dressAll($('.page'));

  /* ── живой прототип ── */
  const stage = $('#stage'), pnav = $('#pnav');
  pnav.innerHTML = ORDER.map((id) => `<button data-nav="${id}">${$('#s-' + id).dataset.title}</button>`).join('');
  let hist = [];
  function show(id, anim = 'in') {
    const scr = build(id);
    if ($('#s-' + id).hasAttribute('data-sheet') && anim === 'in') anim = 'in-up';
    scr.classList.add(anim);
    stage.replaceChildren(scr);
    $$('button', pnav).forEach((b) => b.classList.toggle('on', b.dataset.nav === id));
    if (location.hash !== '#' + id) history.replaceState(null, '', location.pathname + location.search + '#' + id);
  }
  function open(id) { hist = [id]; document.body.classList.add('solo'); show(id, 'fade'); }
  function go(id) { hist.push(id); show(id, 'in'); }
  function back() { if (hist.length > 1) hist.pop(); show(hist[hist.length - 1] || 'home', 'in-back'); }
  function tab(id, from) {
    const lens = from && $('.lens', from.closest('.tabcap'));
    if (lens) lens.style.left = `calc(5px + ${TABS.indexOf(id)} * (100% - 10px) / 3)`;
    setTimeout(() => { hist = [id]; show(id, 'fade'); }, lens ? 160 : 0);
  }
  function close() { document.body.classList.remove('solo'); history.replaceState(null, '', location.pathname + location.search); }

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
    const tick = () => {
      box.innerHTML = text.slice(0, i) + '<span class="caret"></span>';
      if (i++ < text.length) setTimeout(tick, 26 + Math.random() * 36); else done && done();
    };
    tick();
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
    const t = e.target.closest('[data-go],[data-back],[data-act],[data-open],[data-nav],[data-tab],.seg3 button,.way');
    if (!t) return;
    const scr = t.closest('.scr');
    const inStage = !!(scr && scr.closest('#stage'));
    if (t.dataset.open && !inStage) { e.preventDefault(); return open(t.dataset.open); }
    if (t.dataset.nav) return open(t.dataset.nav);
    if (scr && !inStage) { const fr = t.closest('.frame'); if (fr) return open(fr.dataset.open); }

    if (t.dataset.tab) { e.preventDefault(); return tab(t.dataset.tab, t); }
    if (t.dataset.go) { e.preventDefault(); return go(t.dataset.go); }
    if (t.hasAttribute('data-back')) return back();
    if (t.matches('.seg3 button')) {
      const seg = t.parentElement, bs = $$('button', seg), i = bs.indexOf(t);
      bs.forEach((b) => b.classList.toggle('on', b === t));
      $('.lens', seg).style.left = `calc(4px + ${i} * (100% - 8px) / 3)`;
      return;
    }
    if (t.matches('.way')) { $$('.way', t.parentElement).forEach((b) => b.classList.toggle('on', b === t)); return; }

    const act = t.dataset.act;
    if (act === 'theme') return setTheme(!document.body.classList.contains('t-light'));
    if (act === 'close') return close();
    if (!scr) return;
    if (act === 'answer') {
      const card = t.closest('.dc'), deck = t.closest('.decide');
      card.classList.add('gone');
      toast(scr, t.dataset.toast || 'Готово');
      setTimeout(() => {
        card.remove();
        const left = $$('.dc', deck);
        const cnt = $('[data-cnt]', scr);
        if (!left.length) { deck.classList.add('done'); if (cnt) cnt.textContent = 'всё'; confetti(scr); }
        else { left[0].classList.add('up'); if (cnt) cnt.textContent = '2 из 2'; }
      }, 430);
      return;
    }
    if (act === 'answer-back') { toast(scr, t.dataset.toast); confetti(scr); setTimeout(back, 1100); return; }
    if (act === 'toast') { toast(scr, t.dataset.toast); return; }
    if (act === 'accept') { confetti(scr); toast(scr, 'Принято, Паша рад'); return; }
    if (act === 'outfit') {
      $$('[data-act="outfit"]', scr).forEach((b) => b.classList.toggle('on', b === t));
      const me = $('[data-me]', scr); me.dataset.o = t.dataset.o; dressAll(me.parentElement);
      return;
    }
    if (act === 'listen' || act === 'fill') {
      const orb = $('.orb', scr), box = $('[data-typed]', scr), est = $('[data-est]', scr);
      est.classList.remove('on');
      $('[data-sug]', scr).style.display = 'none';
      $('[data-att]', scr).style.display = 'none';
      const text = act === 'fill' ? t.dataset.text : 'Сделай лендинг для кофейни на Садовой: меню, фото зала и карта';
      orb.classList.add('on');
      typeInto(box, text, () => {
        orb.classList.remove('on');
        setTimeout(() => { est.classList.add('on'); est.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, 250);
      });
      return;
    }
    if (act === 'assign') { confetti(scr); toast(scr, 'Поручено, дело в списке'); setTimeout(() => { hist = ['deals']; show('deals', 'fade'); }, 1200); return; }
  });

  const start = location.hash.slice(1);
  if (ORDER.includes(start)) open(start);
  else if (matchMedia('(max-width:700px)').matches) open('home');
})();
