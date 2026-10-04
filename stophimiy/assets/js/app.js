/* СтопХимия — общее для всех страниц: шапка, корзина, поиск, карточки, док мессенджеров. */
(function () {
  const SH = window.SH || { products: [], problems: [], worlds: {} };
  const P = SH.products;
  const byId = Object.fromEntries(P.map(p => [p.id, p]));

  const CONTACT = {
    phone: '+7 918 113-35-10', tel: 'tel:+79181133510', mail: 'stophimiy@mail.ru',
    tg: 'https://t.me/+79181133510',
    max: 'https://max.ru/u/f9LHodD0cOIJTxz1AVzOpT_K5zlZF8yaLCO-IN7PnRORLFl53exfyi09pwo',
    vk: 'https://vk.com/elis_i_tor',
    addr: 'Сочи, ул. Воровского, 18, офис 28', hours: 'Ежедневно 9:00–18:00',
    map: 'https://yandex.ru/maps/?ll=39.720733%2C43.587038&z=17&pt=39.720733%2C43.587038%2Cpm2dgl',
    route: 'https://yandex.ru/maps/?rtext=~43.587038%2C39.720733&rtt=auto',
    gis: 'https://2gis.ru/sochi/geo/39.720733%2C43.587038',
  };

  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8Z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    arr: '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16M4 16h16"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    tg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.4 4.2 2.9 11.3c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.4-1.5ZM9.6 14.4l-.4 4-1.4-4.4 9.9-6.3c.5-.3.9-.1.5.2Z"/></svg>',
    max: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c-5.4 0-9.5 3.9-9.5 9.1 0 2.5.9 4.6 2.5 6.3l-.6 3.4 3.4-1.4c1.3.6 2.7.9 4.2.9 5.4 0 9.5-3.9 9.5-9.1S17.4 2.5 12 2.5Zm0 14.6a5.6 5.6 0 1 1 0-11.1 5.6 5.6 0 0 1 0 11.1Z"/></svg>',
    vk: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.9 17.5c-5.7 0-9-3.9-9.1-10.4h2.9c.1 4.8 2.2 6.8 3.8 7.2V7.1h2.7v4.1c1.6-.2 3.3-2 3.9-4.1h2.7c-.5 2.5-2.4 4.4-3.7 5.2 1.3.6 3.5 2.3 4.3 5.2h-3c-.6-2-2.2-3.5-4.2-3.7v3.7Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z"/><path d="M5 19 13 11"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  };

  const LOGO = '<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3.2 34.6 11.6v16.8L20 36.8 5.4 28.4V11.6Z" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"/><path d="M12.5 28.5c-.6-9.6 5.4-15.9 17-17.4-.4 11-6.6 17.2-17 17.4Z" fill="#d3e49a"/><path d="M12.5 28.5 23.5 17.5" stroke="#0c1f16" stroke-width="1.8" stroke-linecap="round"/></svg>';

  const rub = n => n == null ? '' : n.toLocaleString('ru-RU').replace(/\u00a0/g, '\u202f') + '\u202f₽';
  const priceText = p => p.price == null ? 'Цена по запросу'
    : ((p.world === 'services' || (p.price < 100 && !p.unit)) ? 'от ' : '') + rub(p.price) + (p.unit ? ' / ' + p.unit : '');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => String(s || '').toLowerCase().replace(/ё/g, 'е').replace(/[«»"()]/g, ' ');

  // ---------- Корзина ----------
  const Cart = {
    key: 'sh-cart-v1',
    get() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { return {}; } },
    set(c) { localStorage.setItem(this.key, JSON.stringify(c)); document.dispatchEvent(new CustomEvent('cart:change', { detail: c })); },
    add(id, q = 1) { const c = this.get(); c[id] = (c[id] || 0) + q; this.set(c); },
    qty(id, q) { const c = this.get(); if (q <= 0) delete c[id]; else c[id] = q; this.set(c); },
    remove(id) { const c = this.get(); delete c[id]; this.set(c); },
    clear() { this.set({}); },
    count() { return Object.values(this.get()).reduce((a, b) => a + b, 0); },
    lines() { const c = this.get(); return Object.keys(c).filter(id => byId[id]).map(id => ({ p: byId[id], q: c[id] })); },
    total() { return this.lines().reduce((s, l) => s + (l.p.price || 0) * l.q, 0); },
  };

  // ---------- Шапка, подвал, док ----------
  const NAV = [
    ['catalog.html', 'Каталог', 'catalog'],
    ['index.html#elistor', 'Элис&Тор', 'elistor'],
    ['index.html#uslugi', 'Услуги', 'uslugi'],
    ['index.html#tropical', 'Tropical Life', 'tropical'],
    ['index.html#o-nas', 'О нас', 'o-nas'],
    ['index.html#stati', 'Статьи', 'stati'],
    ['index.html#gde', 'Контакты', 'gde'],
  ];

  function header(active) {
    return `<header class="hdr" id="hdr"><div class="wrap hdr-in">
      <a class="logo" href="index.html" aria-label="СтопХимия, на главную">${LOGO}<span class="logo-word"><b>Стоп<i>Химия</i></b><small>НПО ЭкоБиоТехнологии</small></span></a>
      <nav class="nav">${NAV.map(([h, t, k]) => `<a href="${h}" class="${k === active ? 'on' : ''}">${esc(t)}</a>`).join('')}</nav>
      <div class="hdr-act">
        <a class="hdr-phone" href="${CONTACT.tel}"><b>${CONTACT.phone}</b><small>${CONTACT.hours}</small></a>
        <button class="icon-btn" data-open-search aria-label="Поиск">${I.search}</button>
        <a class="icon-btn" href="cart.html" aria-label="Корзина">${I.cart}<span class="cart-n" id="cart-n">0</span></a>
        <button class="icon-btn burger" id="burger" aria-label="Меню">${I.menu}</button>
      </div></div></header>
    <div class="mnav" id="mnav"><button class="icon-btn x" id="mnav-x" aria-label="Закрыть">${I.x}</button>
      ${NAV.map(([h, t]) => `<a class="big" href="${h}">${esc(t)}</a>`).join('')}
      <a class="big" href="cart.html">Корзина</a>
      <div class="mnav-foot"><a class="btn btn-accent" href="${CONTACT.tg}">Написать агроному <span class="bi">${I.tg}</span></a><a class="btn btn-ghost" href="${CONTACT.tel}">${CONTACT.phone}</a></div>
    </div>
    <div class="srch" id="srch" role="dialog" aria-label="Поиск по каталогу"><div class="srch-bg" data-close-search></div><div class="srch-box">
      <div class="srch-in">${I.search}<input id="srch-q" placeholder="Препарат, вредитель, болезнь…" autocomplete="off"><kbd>Esc</kbd></div>
      <div class="srch-res" id="srch-res"></div></div></div>`;
  }

  function footer() {
    const W = SH.worlds;
    return `<footer class="ftr grain" id="kontakty"><div class="wrap" style="position:relative;z-index:2">
      <div class="ftr-cta"><h3>Не знаете,<br>что <i>выбрать?</i></h3><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn btn-accent" href="${CONTACT.tg}" target="_blank" rel="noopener">Спросить агронома <span class="bi">${I.tg}</span></a><a class="btn btn-ghost" href="${CONTACT.tel}">${CONTACT.phone}</a></div></div>
      <div class="ftr-grid">
        <div class="ftr-about"><a class="logo" href="index.html">${LOGO}<span class="logo-word"><b>Стоп<i>Химия</i></b><small>НПО ЭкоБиоТехнологии</small></span></a>
          <p>Научно-производственное объединение из Сочи. С 2010 года подбираем биопрепараты и технологии, которые защищают растения, животных и дом без химии.</p>
          <div class="ftr-msg"><a href="${CONTACT.tg}" aria-label="Telegram">${I.tg}</a><a href="${CONTACT.max}" aria-label="MAX">${I.max}</a><a href="${CONTACT.vk}" aria-label="ВКонтакте">${I.vk}</a><a href="${CONTACT.tel}" aria-label="Позвонить">${I.phone}</a></div></div>
        <div><h4>Каталог</h4><ul>${Object.entries(W).map(([k, v]) => `<li><a href="catalog.html?world=${k}">${esc(v)}</a></li>`).join('')}<li><a href="index.html#elistor">Система Элис&amp;Тор</a></li></ul></div>
        <div><h4>Компания</h4><ul><li><a href="index.html#o-nas">О нас</a></li><li><a href="index.html#partnery">Партнёры</a></li><li><a href="index.html#dokumenty">Сертификаты</a></li><li><a href="index.html#stati">Статьи</a></li><li><a href="index.html#otzyvy">Отзывы</a></li></ul></div>
        <div><h4>Контакты</h4><ul><li><a href="${CONTACT.tel}"><b style="font-size:19px;letter-spacing:-.02em">${CONTACT.phone}</b></a></li><li><a href="mailto:${CONTACT.mail}">${CONTACT.mail}</a></li><li><a href="${CONTACT.map}" target="_blank" rel="noopener">${CONTACT.addr} ↗</a></li><li style="opacity:.82">${CONTACT.hours}</li></ul></div>
      </div>
      <div class="ftr-big" aria-hidden="true">Стоп<i>Химия</i></div>
      <div class="ftr-bot"><span>© 2010–2026 НПО «ЭкоБиоТехнологии СтопХимия»</span><span><a href="#">Политика конфиденциальности</a> · <a href="#">Пользовательское соглашение</a></span></div>
    </div></footer>`;
  }

  function dock() {
    return `<div class="dock" id="dock"><div class="dock-list">
      <a href="${CONTACT.tg}" target="_blank" rel="noopener">Telegram <span class="ic c-tg">${I.tg}</span></a>
      <a href="${CONTACT.max}" target="_blank" rel="noopener">MAX <span class="ic c-max">${I.max}</span></a>
      <a href="${CONTACT.vk}" target="_blank" rel="noopener">ВКонтакте <span class="ic c-vk">${I.vk}</span></a>
      <a href="${CONTACT.tel}">${CONTACT.phone} <span class="ic c-ph">${I.phone}</span></a></div>
      <button class="dock-btn" id="dock-btn" aria-expanded="false"><span class="dock-ava">${I.leaf}</span><span class="lbl"><span class="t-open">Спросить агронома<small>Ответим в мессенджере</small></span><span class="t-close">Свернуть<small>Telegram · MAX · VK</small></span></span></button></div>
    <div class="toasts" id="toasts"></div>`;
  }

  // ---------- Карточка товара ----------
  const TILE = { plants: '#e4e2d3', animals: '#ece2cf', exotics: '#efe2d5', services: '#dde3dc' };
  const thumb = p => p.cut || p.img[0] || '';
  const pic = (p, cls = '') => p.cut ? `<img class="cut ${cls}" src="${p.cut}" alt="${esc(p.name)}" loading="lazy">` : (p.img[0] ? `<img class="${p.mode === 'mul' ? 'mul' : 'ph'} ${cls}" src="${p.img[0]}" alt="${esc(p.name)}" loading="lazy">` : '');
  function card(p, opt = {}) {
    const inCart = Cart.get()[p.id];
    const tags = [];
    if (p.series) tags.push(`<span class="badge">№ ${p.series}</span>`);
    if (opt.hit) tags.push(`<span class="badge lime">${esc(opt.hit)}</span>`);
    const img = pic(p);
    const alt = '';
    const price = p.price ? `<span class="price">${esc(priceText(p)).replace(/^от /, '<small>от </small>').replace(/ \/ (.+)$/, '<small> / $1</small>')}</span>` : `<span class="price ask">Цена по запросу</span>`;
    const btn = p.price && p.world !== 'services'
      ? `<button class="add ${inCart ? 'in' : ''}" data-add="${p.id}" aria-label="В корзину">${I.plus}<span class="lbl-add">${opt.compact ? '' : 'В корзину'}</span>${I.check.replace('<svg', '<svg class="lbl-in"')}<span class="lbl-in">${opt.compact ? '' : 'В корзине'}</span></button>`
      : `<a class="add" href="${CONTACT.tg}" target="_blank" rel="noopener" style="position:relative;z-index:2">Обсудить</a>`;
    return `<article class="pcard" style="--tile:${TILE[p.world]}">
      <a class="stretch" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="${esc(p.name)}"></a>
      <div class="pcard-img m-${p.mode || 'ph'}">${img}${alt}<div class="pcard-tags">${tags.join('')}</div></div>
      <div class="pcard-body"><span class="pcard-sub">${esc(p.sub)}</span><h3 class="pcard-name">${esc(p.name)}</h3>
      <div class="pcard-foot">${price}${btn}</div></div></article>`;
  }

  // ---------- Тосты ----------
  function toast(p) {
    const box = document.getElementById('toasts');
    if (!box) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `${thumb(p) ? `<img src="${thumb(p)}" alt="">` : ''}<div><b>Добавили в корзину</b><small>${esc(p.name.slice(0, 42))}${p.name.length > 42 ? '…' : ''}</small></div><a href="cart.html">Оформить →</a>`;
    box.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 450); }, 3200);
  }

  // ---------- Поиск ----------
  function searchP(q, lim = 8) {
    const words = norm(q).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const scored = [];
    for (const p of P) {
      const name = norm(p.name), hay = name + ' ' + norm(p.sub) + ' ' + norm(p.desc.slice(0, 3).join(' ')) + ' ' + (p.series ? 'элис тор ' + p.series : '');
      if (!words.every(w => hay.includes(w))) continue;
      let s = 0;
      for (const w of words) { if (name.startsWith(w)) s += 6; else if (name.includes(' ' + w)) s += 4; else if (name.includes(w)) s += 3; else s += 1; }
      scored.push([s, p]);
    }
    return scored.sort((a, b) => b[0] - a[0]).slice(0, lim).map(x => x[1]);
  }
  function hl(text, q) {
    let out = esc(text);
    for (const w of norm(q).split(/\s+/).filter(x => x.length > 1)) {
      const re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/е/g, '[её]') + ')', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    }
    return out;
  }
  function initSearch() {
    const box = document.getElementById('srch'), inp = document.getElementById('srch-q'), res = document.getElementById('srch-res');
    let sel = 0, items = [];
    const quick = ['тля', 'фунгицид', 'укоренение', 'водоросли', 'пчёлы', 'моринга', 'наносеребро', 'Элис&Тор 4'];
    function render() {
      const q = inp.value.trim();
      if (!q) {
        res.innerHTML = `<div class="srch-hint">Часто ищут</div><div class="srch-tags">${quick.map(t => `<button data-q="${esc(t)}">${esc(t)}</button>`).join('')}</div>
          <div class="srch-hint">По проблеме</div><div class="srch-tags">${SH.problems.map(t => `<a class="btn btn-s btn-ghost" style="height:34px" href="catalog.html?problem=${t.id}">${esc(t.name)}</a>`).join('')}</div>`;
        items = []; return;
      }
      items = searchP(q);
      sel = 0;
      res.innerHTML = items.length ? `<div class="srch-hint">Нашлось ${items.length === 8 ? 'много, первые 8' : items.length}</div>` + items.map((p, i) =>
        `<a class="srch-item ${i === 0 ? 'sel' : ''}" href="product.html?id=${encodeURIComponent(p.id)}">${thumb(p) ? `<img src="${thumb(p)}" alt="">` : '<img alt="">'}<span><b>${hl(p.name, q)}</b><small>${esc(p.sub)}</small></span><span class="pr">${p.price ? rub(p.price) : ''}</span></a>`).join('')
        + `<a class="srch-item" href="catalog.html?q=${encodeURIComponent(q)}" style="justify-content:center;font-weight:700">Все результаты в каталоге ${I.arr}</a>`
        : `<div class="srch-empty">По запросу «${esc(q)}» ничего нет.<br>Опишите проблему агроному: <a href="${CONTACT.tg}" style="color:var(--ink);font-weight:700;text-decoration:underline">написать в Telegram</a></div>`;
    }
    const open = () => { box.classList.add('open'); inp.value = ''; render(); setTimeout(() => inp.focus(), 30); document.body.style.overflow = 'hidden'; };
    const close = () => { box.classList.remove('open'); document.body.style.overflow = ''; };
    document.addEventListener('click', e => {
      if (e.target.closest('[data-open-search]')) { e.preventDefault(); open(); }
      if (e.target.closest('[data-close-search]')) close();
      const qb = e.target.closest('[data-q]');
      if (qb) { inp.value = qb.dataset.q; render(); inp.focus(); }
    });
    inp.addEventListener('input', render);
    document.addEventListener('keydown', e => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName))) { e.preventDefault(); open(); }
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      const links = [...res.querySelectorAll('.srch-item')];
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); sel = Math.max(0, Math.min(links.length - 1, sel + (e.key === 'ArrowDown' ? 1 : -1)));
        links.forEach((l, i) => l.classList.toggle('sel', i === sel)); links[sel] && links[sel].scrollIntoView({ block: 'nearest' });
      }
      if (e.key === 'Enter' && links[sel]) { e.preventDefault(); location.href = links[sel].href; }
    });
  }

  // ---------- Сборка страницы ----------
  function mount(active) {
    const h = document.querySelector('[data-slot=header]'); if (h) h.outerHTML = header(active);
    const f = document.querySelector('[data-slot=footer]'); if (f) f.outerHTML = footer();
    document.body.insertAdjacentHTML('beforeend', dock());
    const hdr = document.getElementById('hdr');
    let last = 0;
    const onScroll = () => {
      const y = scrollY;
      hdr.classList.toggle('solid', y > 40 || document.body.classList.contains('page-light'));
      hdr.classList.toggle('hide', y > 600 && y > last && !document.getElementById('mnav').classList.contains('open'));
      last = y;
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    const mnav = document.getElementById('mnav');
    document.getElementById('burger').onclick = () => mnav.classList.add('open');
    document.getElementById('mnav-x').onclick = () => mnav.classList.remove('open');
    mnav.addEventListener('click', e => { if (e.target.closest('a')) mnav.classList.remove('open'); });
    const d = document.getElementById('dock'), db = document.getElementById('dock-btn');
    db.onclick = () => { d.classList.toggle('open'); db.setAttribute('aria-expanded', d.classList.contains('open')); };
    document.addEventListener('click', e => { if (!e.target.closest('#dock')) d.classList.remove('open'); });
    initSearch();
    // счётчик корзины
    const n = document.getElementById('cart-n');
    const upd = (pop) => { const c = Cart.count(); n.textContent = c; n.classList.toggle('has', c > 0); if (pop) { n.classList.remove('pop'); void n.offsetWidth; n.classList.add('pop'); } };
    upd(false);
    document.addEventListener('cart:change', () => upd(true));
    addEventListener('storage', () => upd(false));
    // кнопки «в корзину»
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-add]');
      if (!b) return;
      e.preventDefault();
      const id = b.dataset.add, p = byId[id];
      if (b.classList.contains('in')) { location.href = 'cart.html'; return; }
      Cart.add(id, +(b.dataset.qty || 1));
      document.querySelectorAll(`[data-add="${CSS.escape(id)}"]`).forEach(x => x.classList.add('in'));
      toast(p);
    });
    reveal();
  }

  function reveal(root = document) {
    const els = root.querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach(e => io.observe(e));
  }

  window.App = { SH, P, byId, Cart, CONTACT, I, LOGO, rub, priceText, thumb, pic, esc, norm, card, toast, searchP, mount, reveal };
})();
