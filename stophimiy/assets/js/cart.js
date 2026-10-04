/* Корзина: строки с количеством, итог, оформление заказа, пустое состояние и рекомендации. */
(function () {
  const { P, byId, Cart, CONTACT, I, esc, card, rub, priceText, pic, mount } = window.App;
  mount('');
  const $ = s => document.querySelector(s);
  const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 10 || h >= 20) ? b : c; };
  const TILE = { plants: '#e4e2d3', animals: '#ece2cf', exotics: '#efe2d5', services: '#dde3dc' };
  const TRASH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>';
  let coOpen = false;

  function recs() {
    const inC = new Set(Object.keys(Cart.get()));
    const worlds = new Set(Cart.lines().map(l => l.p.world));
    const HOT = [/Грибофит/, /Биоместин/, /АлгаГидроГель/, /Фульвовые/, /Элис&Тор 3\.5/, /Зоогумус/, /АПИ/, /Атоник/, /Аргитос Агро/, /Древо Жизни/];
    let L = HOT.map(r => P.find(p => r.test(p.name))).filter(p => p && !inC.has(p.id));
    if (worlds.size) L = L.filter(p => worlds.has(p.world)).concat(L.filter(p => !worlds.has(p.world)));
    $('#rec').innerHTML = L.slice(0, 10).map(p => card(p)).join('');
    $('#recs-h').innerHTML = inC.size ? 'Часто берут <i>вместе</i>' : 'Начните <i>с хитов</i>';
  }

  function render() {
    const lines = Cart.lines(), n = Cart.count(), total = Cart.total();
    $('#cart-cnt').textContent = n ? `${n} ${plural(n, 'товар', 'товара', 'товаров')}` : '';
    if (!lines.length) {
      $('#cart-body').innerHTML = `<div class="cempty"><div class="ill"><img src="assets/img/gen2/wide-sprout.webp" alt="" style="object-position:72% 50%"></div><b>Пока <i>пусто</i></b><p>Начните с подбора по проблеме или загляните в хиты: их берут чаще всего.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn" href="catalog.html">В каталог <span class="bi">${I.arr}</span></a><a class="btn btn-ghost" href="index.html#problemy">Подбор по проблеме</a></div></div>`;
      recs(); return;
    }
    $('#cart-body').innerHTML = `<div class="cartw">
      <div>
        <div class="lines">${lines.map(({ p, q }) => `<div class="line" data-id="${p.id}">
          <a class="pi" href="product.html?id=${encodeURIComponent(p.id)}" style="--tile:${TILE[p.world]}">${pic(p)}</a>
          <div class="nm"><small>${esc(p.sub)}</small><a href="product.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a><span>${esc(priceText(p))}${p.pack ? ' · ' + esc(p.pack.slice(0, 40)) : ''}</span></div>
          <div class="qty"><button data-d="-1" aria-label="Меньше">−</button><output>${q}</output><button data-d="1" aria-label="Больше">+</button></div>
          <span class="sum">${rub((p.price || 0) * q)}</span>
          <button class="rm" aria-label="Убрать">${TRASH}</button></div>`).join('')}</div>
        <form class="co ${coOpen ? 'open' : ''}" id="co" novalidate>
          <h2>Куда <i>ответить?</i></h2>
          <div class="co-grid">
            <label class="fld"><span>Имя</span><input name="name" required autocomplete="name" placeholder="Как к вам обращаться"></label>
            <label class="fld"><span>Телефон или ник в Telegram</span><input name="phone" required autocomplete="tel" placeholder="+7 900 000-00-00"></label>
            <label class="fld"><span>Город</span><input name="city" autocomplete="address-level2" placeholder="Сочи"></label>
            <div class="fld"><span>Как связаться</span><div class="seg"><label><input type="radio" name="via" value="tg" checked><i>Telegram</i></label><label><input type="radio" name="via" value="max"><i>MAX</i></label><label><input type="radio" name="via" value="call"><i>Звонок</i></label></div></div>
            <label class="fld full"><span>Комментарий</span><textarea name="msg" rows="2" placeholder="Для какой культуры, площадь участка, удобное время"></textarea></label>
          </div>
          <p class="co-legal">Нажимая «Отправить заказ», вы соглашаетесь с политикой обработки персональных данных.</p>
        </form>
      </div>
      <aside class="summ">
        <h3>Ваш заказ</h3>
        <div class="r"><span>Товары, ${n} шт.</span><b>${rub(total)}</b></div>
        <div class="r"><span>Доставка</span><b>согласуем</b></div>
        <div class="r"><span>Консультация агронома</span><b>бесплатно</b></div>
        <div class="tot"><span>Итого</span><b>${rub(total)}</b></div>
        <button class="btn btn-accent" id="go">${coOpen ? 'Отправить заказ' : 'Оформить заказ'} <span class="bi">${I.arr}</span></button>
        <p class="hint">Без предоплаты на сайте: менеджер подтвердит наличие и пришлёт способы оплаты.</p>
      </aside></div>`;
    recs();
  }

  document.addEventListener('click', e => {
    const line = e.target.closest('.line');
    const d = e.target.closest('[data-d]');
    if (line && d) { const id = line.dataset.id, q = (Cart.get()[id] || 0) + +d.dataset.d; Cart.qty(id, Math.max(1, Math.min(99, q))); render(); return; }
    if (line && e.target.closest('.rm')) {
      const id = line.dataset.id, q = Cart.get()[id];
      line.classList.add('out');
      setTimeout(() => {
        Cart.remove(id); render();
        const box = $('#toasts'), t = document.createElement('div');
        t.className = 'toast'; t.innerHTML = `<div><b>Убрали из корзины</b><small>${esc(byId[id].name.slice(0, 40))}</small></div><a href="#" data-undo="${id}" data-q="${q}">Вернуть</a>`;
        box.appendChild(t); setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 450); }, 4000);
      }, 350);
      return;
    }
    const u = e.target.closest('[data-undo]');
    if (u) { e.preventDefault(); Cart.qty(u.dataset.undo, +u.dataset.q); u.closest('.toast').remove(); render(); return; }
    if (e.target.closest('#go')) {
      if (!coOpen) { coOpen = true; render(); setTimeout(() => { $('#co').scrollIntoView({ behavior: 'smooth', block: 'start' }); $('#co input').focus({ preventScroll: true }); }, 60); return; }
      const f = $('#co'); let ok = true;
      ['name', 'phone'].forEach(k => { const bad = f.elements[k].value.trim().length < 2; f.elements[k].closest('.fld').classList.toggle('err', bad); if (bad) ok = false; });
      if (!ok) { f.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
      const via = { tg: 'Telegram', max: 'MAX', call: 'звонком' }[f.elements.via.value];
      const no = 'SH-' + String(Date.now()).slice(-6);
      const name = f.elements.name.value.trim().split(' ')[0];
      Cart.clear();
      $('#cart-head').style.display = 'none';
      $('#cart-body').innerHTML = `<div class="done"><div class="done-ic">${I.check}</div><h1>Спасибо, <i>${esc(name)}!</i></h1><p>Заказ у менеджера. Свяжемся ${via === 'звонком' ? 'звонком' : 'в ' + via} в рабочее время (${esc(CONTACT.hours.toLowerCase())}), подтвердим наличие и согласуем доставку.</p><span class="no">Заказ № ${no}</span><div class="btns"><a class="btn" href="index.html">На главную <span class="bi">${I.arr}</span></a><a class="btn btn-ghost" href="${CONTACT.tg}" target="_blank" rel="noopener">${I.tg} Написать сейчас</a></div></div>`;
      $('#recs').style.display = 'none';
      scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  document.addEventListener('cart:change', () => { if (!document.querySelector('.done')) render(); });
  render();
})();
