/* Карточка товара: галерея с увеличением, покупка с количеством, описание по вкладкам, похожие. */
(function () {
  const { SH, P, byId, Cart, CONTACT, I, esc, card, priceText, mount } = window.App;
  mount('catalog');
  const $ = s => document.querySelector(s);
  const id = new URLSearchParams(location.search).get('id');
  const p = byId[id] || P.find(x => /Грибофит/.test(x.name));
  const svc = p.world === 'services';
  document.title = `${p.name} · СтопХимия`;
  const W = SH.worlds;
  const TILE = { plants: '#e4e2d3', animals: '#ece2cf', exotics: '#efe2d5', services: '#dde3dc' };

  $('#crumbs').innerHTML = `<a href="index.html">Главная</a><span class="sep">/</span><a href="catalog.html">Каталог</a><span class="sep">/</span><a href="catalog.html?world=${p.world}">${esc(W[p.world])}</a><span class="sep">/</span><a href="catalog.html?world=${p.world}&sub=${encodeURIComponent(p.sub)}">${esc(p.sub)}</a>`;

  // галерея: вырезка или первое фото в своём режиме, остальные фото как есть
  const shots = [];
  if (p.cut) shots.push({ src: p.cut, m: 'cut' });
  p.img.forEach((s, i) => shots.push({ src: s, m: i === 0 ? (p.mode === 'mul' ? 'mul' : 'ph') : 'ph' }));
  const lede = (p.desc.find(x => x.length > 60 && !/^фасовка/i.test(x)) || p.desc[0] || '').replace(/\s+/g, ' ');
  const short = lede.length > 260 ? lede.slice(0, lede.lastIndexOf(' ', 250)) + '…' : lede;
  const PRN = Object.fromEntries(SH.problems.map(x => [x.id, x.name]));
  const inCart = Cart.get()[p.id];

  $('#prod').innerHTML = `
    <div class="gal">
      <div class="thumbs" id="thumbs">${shots.length > 1 ? shots.map((s, i) => `<button class="${i === 0 ? 'on' : ''}" data-i="${i}" aria-label="Фото ${i + 1}"><img src="${s.src}" alt=""></button>`).join('') : ''}</div>
      <div class="stage" id="stage" style="--tile:${TILE[p.world]}">
        <div class="pcard-tags">${p.series ? `<span class="badge">Элис&amp;Тор № ${p.series}</span>` : ''}${/Грибофит/.test(p.name) ? '<span class="badge lime">Бестселлер</span>' : ''}</div>
        ${shots[0] ? `<img class="${shots[0].m}" id="stage-img" src="${shots[0].src}" alt="${esc(p.name)}">` : ''}
        <span class="stage-n" id="stage-n">${shots.length > 1 ? `01 / ${String(shots.length).padStart(2, '0')}` : ''}</span>
      </div>
    </div>
    <div class="pinfo">
      <div class="sub"><span>${esc(p.sub)}</span>${p.pack ? `<span>·</span><span>${esc(p.pack.slice(0, 60))}</span>` : ''}</div>
      <h1>${esc(p.name)}</h1>
      ${short ? `<p class="lede">${esc(short)}</p>` : ''}
      <div class="buy" id="buy">
        <div class="buy-row"><span class="price">${p.price ? esc(priceText(p)).replace(/^от /, '<small>от </small>').replace(/ \/ (.+)$/, '<small> / $1</small>') : '<small>Цена по запросу</small>'}</span>${p.stock && !svc ? '<span class="stock">В наличии</span>' : svc ? '<span class="stock">Выезд по Сочи и побережью</span>' : ''}</div>
        <div class="buy-btns">
          ${p.price && !svc ? `<div class="qty" id="qty"><button data-d="-1" aria-label="Меньше">−</button><output id="qv">1</output><button data-d="1" aria-label="Больше">+</button></div>
          <button class="btn ${inCart ? 'in-cart' : ''}" id="buy-btn">${inCart ? 'В корзине · оформить' : 'В корзину'} <span class="bi">${I.cart}</span></button>`
          : `<a class="btn" href="${CONTACT.tg}" target="_blank" rel="noopener">${svc ? 'Вызвать специалиста' : 'Узнать цену'} <span class="bi">${I.tg}</span></a>`}
          <a class="btn btn-ghost" href="${CONTACT.tg}" target="_blank" rel="noopener">${I.tg} Спросить агронома</a>
        </div>
      </div>
      <div class="perks">
        <div class="perk"><span>${I.leaf}</span><div><b>Бесплатная консультация агронома</b><p>Подскажет норму расхода и схему обработки под ваш участок. Telegram, MAX или звонок.</p></div></div>
        <div class="perk"><span>${I.cart}</span><div><b>Доставка и оплата</b><p>Способ и стоимость доставки менеджер согласует после заказа. Самовывоз: <a href="${CONTACT.map}" target="_blank" rel="noopener" style="text-decoration:underline">${esc(CONTACT.addr)}</a>.</p></div></div>
        <div class="perk"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z"/><path d="m9 12 2 2 4-4"/></svg></span><div><b>Документы</b><p>Сертификаты ISO и декларации соответствия, <a href="index.html#dokumenty" style="text-decoration:underline">посмотреть</a>.</p></div></div>
      </div>
      ${p.problems.length ? `<div class="probs-tags">${p.problems.map(k => `<a href="catalog.html?problem=${k}">${esc(PRN[k] || k)}</a>`).join('')}</div>` : ''}
    </div>`;

  // галерея
  const stage = $('#stage'), simg = $('#stage-img');
  $('#thumbs').addEventListener('click', e => {
    const b = e.target.closest('[data-i]'); if (!b) return;
    const s = shots[+b.dataset.i];
    document.querySelectorAll('#thumbs button').forEach(x => x.classList.toggle('on', x === b));
    simg.style.opacity = 0;
    setTimeout(() => { simg.src = s.src; simg.className = s.m; simg.style.opacity = 1; }, 180);
    $('#stage-n').textContent = `${String(+b.dataset.i + 1).padStart(2, '0')} / ${String(shots.length).padStart(2, '0')}`;
  });
  if (matchMedia('(hover:hover)').matches && simg) {
    stage.addEventListener('pointermove', e => { const r = stage.getBoundingClientRect(); simg.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`; });
    stage.addEventListener('pointerenter', () => stage.classList.add('zoom'));
    stage.addEventListener('pointerleave', () => stage.classList.remove('zoom'));
  }

  // покупка
  let q = 1;
  const qv = $('#qv'), bb = $('#buy-btn');
  if ($('#qty')) $('#qty').addEventListener('click', e => { const b = e.target.closest('[data-d]'); if (!b) return; q = Math.max(1, Math.min(99, q + +b.dataset.d)); qv.textContent = q; });
  function add() {
    if (Cart.get()[p.id] && bb.classList.contains('in-cart')) { location.href = 'cart.html'; return; }
    Cart.add(p.id, q); window.App.toast(p);
    bb.classList.add('in-cart'); bb.firstChild.textContent = 'В корзине · оформить ';
    const mb = $('#mbuy .btn'); if (mb) { mb.firstChild.textContent = 'В корзине '; }
  }
  if (bb) bb.onclick = add;

  // липкая покупка на телефоне
  if (p.price && !svc) {
    $('#mbuy').innerHTML = `<span class="price">${esc(priceText(p))}</span><button class="btn">${inCart ? 'В корзине ' : 'В корзину '}<span class="bi">${I.cart}</span></button>`;
    $('#mbuy .btn').onclick = add;
    document.body.classList.add('has-mbuy');
    new IntersectionObserver(([en]) => $('#mbuy').classList.toggle('on', !en.isIntersecting && en.boundingClientRect.top < 0)).observe($('#buy'));
  }

  // описание по вкладкам
  const USE = /состав|действующ|норм[аы] расход|расход|примен|способ|развест|разведен|обработ|опрыскив|полив|внесени|дозиров|на 100 литр|на 10 литр|мл на|г на/i;
  const about = [], use = [];
  p.desc.forEach(x => (USE.test(x) ? use : about).push(x));
  const fmt = arr => arr.map(x => `<p class="${x.length < 70 && /[:?]$|^[А-ЯЁ\s«»\-]+$/.test(x) ? 'h' : ''}">${esc(x)}</p>`).join('');
  const panes = [
    ['about', 'Описание', about.length ? fmt(about) : `<p>${esc(p.name)}.</p>`],
    ['use', 'Состав и применение', use.length ? fmt(use) : `<p class="note">Норму расхода и схему обработки агроном подберёт под вашу культуру и участок. Напишите в Telegram или MAX: ${esc(CONTACT.phone)}.</p>`],
    ['ship', 'Доставка и оплата', `<p>Оформите заказ на сайте или напишите в мессенджер. Менеджер свяжется в рабочее время, подтвердит наличие и согласует способ доставки и оплаты.</p><p>Самовывоз: ${esc(CONTACT.addr)}, ${esc(CONTACT.hours.toLowerCase())}.</p><p class="note">Опт и хозяйства: условия и объёмные цены обсуждаются отдельно.</p>`],
  ];
  $('#pdesc').innerHTML = `<nav>${panes.map(([k, t], i) => `<button class="${i === 0 ? 'on' : ''}" data-p="${k}">${t}</button>`).join('')}</nav>
    <div class="ptxt">${panes.map(([k, , h], i) => `<div class="pane ${i === 0 ? 'on' : ''}" data-pane="${k}">${h}</div>`).join('')}</div>`;
  $('#pdesc nav').addEventListener('click', e => {
    const b = e.target.closest('[data-p]'); if (!b) return;
    document.querySelectorAll('#pdesc nav button').forEach(x => x.classList.toggle('on', x === b));
    document.querySelectorAll('.pane').forEach(x => x.classList.toggle('on', x.dataset.pane === b.dataset.p));
  });

  // похожие
  const rel = P.filter(x => x.id !== p.id && x.sub === p.sub).concat(P.filter(x => x.id !== p.id && x.sub !== p.sub && x.world === p.world)).slice(0, 10);
  $('#rel').innerHTML = rel.map(x => card(x)).join('');
})();
