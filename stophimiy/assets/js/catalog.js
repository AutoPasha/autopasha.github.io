/* Каталог: миры, разделы, проблемы, цена, поиск, сортировка; состояние живёт в адресе. */
(function () {
  const { SH, P, card, esc, norm, searchP, mount, rub } = window.App;
  mount('catalog');
  const $ = s => document.querySelector(s);
  const W = SH.worlds, PR = SH.problems;
  const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 10 || h >= 20) ? b : c; };
  const X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  const CK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  const HOT = [/Грибофит/, /Биоместин/, /АлгаГидроГель/, /Атоник/, /Элис&Тор 3\.5/, /АПИ/, /Фульвовые/, /Зоогумус/, /Аргитос Агро/, /ЗлаткаБой/, /Древо Жизни/, /Гидролат джинуры/];
  const rank = p => { const i = HOT.findIndex(r => r.test(p.name)); return i < 0 ? 100 + (p.mode === 'cut' ? 0 : p.mode === 'mul' ? 10 : 20) : i; };

  const u = new URLSearchParams(location.search);
  const S = {
    world: W[u.get('world')] ? u.get('world') : 'all',
    subs: new Set(u.getAll('sub')),
    probs: new Set(u.getAll('problem')),
    q: u.get('q') || '',
    pmin: u.get('pmin') || '', pmax: u.get('pmax') || '',
    onlyp: u.get('onlyp') === '1',
    sort: u.get('sort') || 'pop',
    page: 1,
  };
  const PAGE = 18;

  function sync() {
    const n = new URLSearchParams();
    if (S.world !== 'all') n.set('world', S.world);
    S.subs.forEach(s => n.append('sub', s));
    S.probs.forEach(s => n.append('problem', s));
    if (S.q) n.set('q', S.q);
    if (S.pmin) n.set('pmin', S.pmin);
    if (S.pmax) n.set('pmax', S.pmax);
    if (S.onlyp) n.set('onlyp', '1');
    if (S.sort !== 'pop') n.set('sort', S.sort);
    history.replaceState(null, '', location.pathname + (n.toString() ? '?' + n : ''));
  }

  const inWorld = p => S.world === 'all' || p.world === S.world;
  function filtered(skip) {
    let L = S.q ? searchP(S.q, 999) : P.slice();
    L = L.filter(inWorld);
    if (skip !== 'subs' && S.subs.size) L = L.filter(p => S.subs.has(p.sub));
    if (skip !== 'probs' && S.probs.size) L = L.filter(p => p.problems.some(x => S.probs.has(x)));
    const mn = +S.pmin || 0, mx = +S.pmax || Infinity;
    if (S.pmin || S.pmax) L = L.filter(p => p.price != null && p.price >= mn && p.price <= mx);
    if (S.onlyp) L = L.filter(p => p.price != null);
    if (!S.q || S.sort !== 'pop') {
      const by = { pop: (a, b) => rank(a) - rank(b), asc: (a, b) => (a.price ?? 1e9) - (b.price ?? 1e9), desc: (a, b) => (b.price ?? -1) - (a.price ?? -1), az: (a, b) => a.name.localeCompare(b.name, 'ru') };
      L.sort(by[S.sort] || by.pop);
    }
    return L;
  }

  function renderTabs() {
    const base = S.q ? searchP(S.q, 999) : P;
    const cnt = k => base.filter(p => k === 'all' || p.world === k).length;
    $('#wtabs').innerHTML = [['all', 'Всё'], ...Object.entries(W)].map(([k, t]) => `<button role="tab" class="${S.world === k ? 'on' : ''}" data-w="${k}">${esc(t)}<sup>${cnt(k)}</sup></button>`).join('');
  }
  function renderSide() {
    const L = filtered('subs');
    const subs = {};
    P.filter(inWorld).forEach(p => { subs[p.sub] = subs[p.sub] || 0; });
    L.forEach(p => { subs[p.sub]++; });
    $('#subs').innerHTML = Object.entries(subs).sort((a, b) => b[1] - a[1]).map(([s, n]) => `<label class="ck"><input type="checkbox" value="${esc(s)}" ${S.subs.has(s) ? 'checked' : ''}><i>${CK}</i><span>${esc(s)}</span><small>${n}</small></label>`).join('');
    $('#sub-reset').hidden = !S.subs.size;
    const LP = filtered('probs');
    $('#probs').innerHTML = PR.map(x => { const n = LP.filter(p => p.problems.includes(x.id)).length; return n || S.probs.has(x.id) ? `<button class="${S.probs.has(x.id) ? 'on' : ''}" data-pr="${x.id}">${esc(x.name)}</button>` : ''; }).join('');
    $('#pmin').value = S.pmin; $('#pmax').value = S.pmax; $('#onlyp').checked = S.onlyp;
    document.querySelectorAll('#ppre button').forEach(b => b.classList.toggle('on', b.dataset.p === `${S.pmin || 0}-${S.pmax}`));
    $('#sort').value = S.sort;
  }
  function renderAct() {
    const a = [];
    if (S.q) a.push(['q', '', `«${S.q}»`]);
    S.subs.forEach(s => a.push(['sub', s, s]));
    S.probs.forEach(s => a.push(['problem', s, (PR.find(x => x.id === s) || {}).name || s]));
    if (S.pmin || S.pmax) a.push(['price', '', `${S.pmin ? 'от ' + rub(+S.pmin) : ''} ${S.pmax ? 'до ' + rub(+S.pmax) : ''}`.trim()]);
    if (S.onlyp) a.push(['onlyp', '', 'с ценой']);
    $('#act').innerHTML = a.map(([k, v, t]) => `<button data-k="${k}" data-v="${esc(v)}">${esc(t)}${X}</button>`).join('') + (a.length > 1 ? `<button data-k="all">Сбросить всё${X}</button>` : '');
  }
  function renderGrid() {
    const L = filtered();
    const n = L.length;
    $('#cnt').innerHTML = `<b>${n}</b> ${plural(n, 'позиция', 'позиции', 'позиций')}`;
    $('#cat-n').textContent = n;
    $('#cat-h').firstChild.textContent = S.world === 'all' ? 'Каталог ' : W[S.world] + ' ';
    $('#sheet-ok').textContent = `Показать ${n} ${plural(n, 'позицию', 'позиции', 'позиций')}`;
    const show = L.slice(0, S.page * PAGE);
    const items = show.map((p, i) => card(p).replace('<article class="pcard"', `<article class="pcard" style="--d:${Math.min(i % PAGE, 8) * .04}s"`));
    if (n >= 7) items.splice(5, 0, `<a class="promo" href="https://t.me/+79181133510" target="_blank" rel="noopener"><img src="assets/img/gen2/still-flask-dark.webp" alt="" loading="lazy"><small>Бесплатно</small><b>Не уверены,<br>что <i>выбрать?</i></b><p>Пришлите фото листа или коры в Telegram, агроном подберёт препарат.</p><span class="btn btn-accent btn-s" style="align-self:flex-start">Написать агроному</span></a>`);
    const html = items.join('');
    $('#grid').innerHTML = n ? html : `<div class="empty"><b>Ничего не нашли</b><p>Попробуйте убрать фильтры или опишите проблему агроному: он подберёт средство, даже если его нет на сайте.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn btn-ghost" data-k="all">Сбросить фильтры</button><a class="btn" href="https://t.me/+79181133510" target="_blank" rel="noopener">Спросить агронома <span class="bi">${window.App.I.tg}</span></a></div></div>`;
    $('#more').hidden = show.length >= n;
  }
  function render(keepPage) {
    if (!keepPage) S.page = 1;
    sync(); renderTabs(); renderSide(); renderAct(); renderGrid();
  }

  // события
  $('#wtabs').addEventListener('click', e => { const b = e.target.closest('[data-w]'); if (!b) return; S.world = b.dataset.w; S.subs.clear(); render(); });
  $('#subs').addEventListener('change', e => { const v = e.target.value; e.target.checked ? S.subs.add(v) : S.subs.delete(v); render(); });
  $('#sub-reset').onclick = () => { S.subs.clear(); render(); };
  $('#probs').addEventListener('click', e => { const b = e.target.closest('[data-pr]'); if (!b) return; const v = b.dataset.pr; S.probs.has(v) ? S.probs.delete(v) : S.probs.add(v); render(); });
  $('#ppre').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (!b) return; const [a, c] = b.dataset.p.split('-'); const same = S.pmin === (a === '0' ? '' : a) && S.pmax === c; S.pmin = same ? '' : (a === '0' ? '' : a); S.pmax = same ? '' : c; render(); });
  let pt;
  ['pmin', 'pmax'].forEach(k => $('#' + k).addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, ''); clearTimeout(pt); pt = setTimeout(() => { S[k] = e.target.value; render(); }, 350); }));
  $('#onlyp').onchange = e => { S.onlyp = e.target.checked; render(); };
  $('#sort').onchange = e => { S.sort = e.target.value; render(); };
  const cq = $('#cq'), cs = $('#csearch');
  cq.value = S.q; cs.classList.toggle('has', !!S.q);
  let qt;
  cq.addEventListener('input', () => { cs.classList.toggle('has', !!cq.value); clearTimeout(qt); qt = setTimeout(() => { S.q = cq.value.trim(); render(); }, 220); });
  $('#cq-x').onclick = () => { cq.value = ''; S.q = ''; cs.classList.remove('has'); render(); cq.focus(); };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-k]'); if (!b) return;
    const k = b.dataset.k, v = b.dataset.v;
    if (k === 'q') { S.q = ''; cq.value = ''; cs.classList.remove('has'); }
    if (k === 'sub') S.subs.delete(v);
    if (k === 'problem') S.probs.delete(v);
    if (k === 'price') { S.pmin = ''; S.pmax = ''; }
    if (k === 'onlyp') S.onlyp = false;
    if (k === 'all') { S.q = ''; cq.value = ''; cs.classList.remove('has'); S.subs.clear(); S.probs.clear(); S.pmin = ''; S.pmax = ''; S.onlyp = false; }
    render();
  });
  $('#more-b').onclick = () => { S.page++; render(true); };
  // шторка фильтров
  const open = () => document.body.classList.add('sheet-open'), close = () => document.body.classList.remove('sheet-open');
  $('#fbtn').onclick = open; $('#sheet-x').onclick = close; $('#sheet-bg').onclick = close; $('#sheet-ok').onclick = () => { close(); scrollTo({ top: $('.cat').offsetTop - 70, behavior: 'smooth' }); };

  render();
})();
