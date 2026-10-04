/* Главная: росток на прокрутке, миры, список проблем, таблица Элис&Тор, ленты, отзывы. */
(function () {
  const { P, card, rub, esc, I, mount, reveal, priceText, pic, thumb } = window.App;
  mount('');
  const find = rx => P.find(p => rx.test(p.name));
  const $ = s => document.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ARR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 10 || h >= 20) ? b : c; };

  // ---------- Росток на прокрутке ----------
  (function intro() {
    const sec = $('#intro'), cv = $('#seq'), ctx = cv.getContext('2d');
    const N = 73, frames = new Array(N);
    let cur = -1, W = 0, H = 0, dpr = 1, lastP = 0;
    const src = i => `assets/seq/sprout/f${String(i + 1).padStart(3, '0')}.webp`;
    function size() {
      dpr = Math.min(2, devicePixelRatio || 1);
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr;
      cur = -1; draw(lastP);
    }
    function paint(img) {
      if (!img || !img.complete || !img.naturalWidth) return false;
      const ir = img.naturalWidth / img.naturalHeight, cr = W / H;
      let dw, dh;
      if (cr > ir) { dw = W; dh = W / ir; } else { dh = H; dw = H * ir; }
      // на узком экране сдвигаем кадр: росток стоит в правой трети
      const shift = cr < 1 ? -dw * .2 : 0;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.drawImage(img, (W - dw) / 2 + shift, (H - dh) / 2, dw, dh);
      return true;
    }
    const idx = p => Math.min(N - 1, Math.max(0, Math.round(Math.min(1, p / .86) * (N - 1))));
    function draw(p) {
      lastP = p;
      const i = idx(p);
      if (i === cur) return;
      if (paint(frames[i])) { cur = i; return; }
      for (let d = 1; d < N; d++) { if (paint(frames[i - d]) || paint(frames[i + d])) { cur = -1; return; } }
    }
    // сначала каждый 6-й кадр, потом остальные
    const order = [...Array(N).keys()].sort((a, b) => (a % 6 === 0 ? 0 : 1) - (b % 6 === 0 ? 0 : 1) || a - b);
    order.forEach((i, k) => {
      const im = new Image(); im.decoding = 'async';
      im.onload = () => { if (Math.abs(i - idx(lastP)) < 6) { cur = -1; draw(lastP); } };
      frames[i] = im;
      setTimeout(() => { im.src = src(i); }, k < 13 ? 0 : 250);
    });
    addEventListener('resize', size);
    size();

    const steps = [...document.querySelectorAll('.step')], h = $('#intro-h'), lead = $('#intro-lead'), bar = $('#intro-bar'), hint = $('#intro-hint');
    function onScroll() {
      const r = sec.getBoundingClientRect(), total = sec.offsetHeight - innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      draw(p);
      bar.style.transform = `scaleX(${p})`;
      const k = Math.min(1, p / .25);
      h.style.transform = `translateY(${-k * 60}px) scale(${1 - k * .12})`;
      h.style.opacity = 1 - Math.max(0, (p - .12) / .2) * .85;
      if (lead.dataset.shown) lead.style.opacity = Math.max(0, 1 - p / .14);
      hint.style.opacity = p > .04 ? 0 : 1;
      document.body.classList.toggle('in-intro', r.bottom > innerHeight * .5);
      const st = p < .2 ? -1 : p < .45 ? 0 : p < .7 ? 1 : 2;
      steps.forEach((s, j) => { s.classList.toggle('on', j === st); s.classList.toggle('past', j < st); });
    }
    setTimeout(() => { lead.dataset.shown = 1; lead.style.animation = 'none'; onScroll(); }, 1900);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  // ---------- Миры ----------
  const count = k => P.filter(p => p.world === k).length;
  const WORLDS = [
    { k: 'plants', t: 'Растения', ti: 'Здоровье<br><i>растений</i>', feat: find(/Грибофит/), tag: 'Хит продаж',
      sub: 'Биопрепараты, стимуляторы роста и средства защиты: линейка Элис&Тор, экстракты морских водорослей, триходерма и боверия.' },
    { k: 'animals', t: 'Животные и пчёлы', ti: 'Сильные<br><i>пчёлы</i>', feat: find(/АПИ/), tag: 'Для пасеки',
      sub: 'Кормовые биодобавки и премиксы для здоровья животных, птицы, рыбы и пчёл: адаптогены, пребиотики, гуминовые комплексы.' },
    { k: 'exotics', t: 'Целебные экзоты', ti: 'Экзоты<br><i>из Сочи</i>', feat: find(/Древо Жизни/), tag: 'Tropical Life',
      sub: 'Чаи, купажи, гидролаты и космецевтика из собственного сырья: моринга, гинура, гиностемма, каффир-лайм.' },
    { k: 'services', t: 'Деревья и водоёмы', ti: 'Живые<br><i>парки</i>', feat: find(/старовозрастных/), tag: 'Выезд на объект',
      sub: 'Лечим старовозрастные деревья, уничтожаем внутристволовых вредителей пальм, восстанавливаем водоёмы и пляжи.' },
  ];
  const unit = k => k === 'services' ? 'услуг' : plural(count(k), 'позиция', 'позиции', 'позиций');
  const tabs = $('#w-tabs');
  tabs.innerHTML = WORLDS.map((w, i) => `<button class="wtab ${i === 0 ? 'on' : ''}" role="tab" data-w="${i}"><span class="n">0${i + 1}</span><b>${w.t}</b><small>${count(w.k)} ${unit(w.k)}</small><i></i></button>`).join('');
  let wi = 0, held = false, wtimer;
  function feat(w) {
    const p = w.feat; if (!p) return '';
    return `<span class="fi">${pic(p)}</span><span class="ft"><small>${esc(w.tag)}</small><b>${esc(p.name)}</b><span class="row"><span>${esc(priceText(p))}</span><em>${ARR}</em></span></span>`;
  }
  function setWorld(i, user) {
    wi = i; const w = WORLDS[i];
    document.querySelectorAll('#w-bgs img').forEach(im => im.classList.toggle('on', im.dataset.w === w.k));
    tabs.querySelectorAll('.wtab').forEach((b, j) => { b.classList.toggle('on', j === i); const bar = b.querySelector('i'); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; });
    $('#w-no').textContent = '0' + (i + 1);
    $('#w-title').innerHTML = `<span>${w.ti}</span>`;
    const sub = $('#w-sub'), f = $('#w-feat');
    sub.classList.add('swap'); f.classList.add('swap');
    setTimeout(() => { sub.textContent = w.sub; f.innerHTML = feat(w); f.href = w.feat ? `product.html?id=${encodeURIComponent(w.feat.id)}` : 'catalog.html'; sub.classList.remove('swap'); f.classList.remove('swap'); }, 350);
    const go = $('#w-go');
    go.href = `catalog.html?world=${w.k}`;
    $('#w-n').textContent = count(w.k);
    go.childNodes[2].textContent = ' ' + (w.k === 'services' ? 'услуг' : plural(count(w.k), 'позицию', 'позиции', 'позиций')) + ' ';
    if (user) { held = true; tabs.classList.add('held'); clearInterval(wtimer); }
  }
  tabs.addEventListener('click', e => { const b = e.target.closest('.wtab'); if (b) setWorld(+b.dataset.w, true); });
  setWorld(0);
  if (!reduce) {
    new IntersectionObserver(([en]) => {
      clearInterval(wtimer);
      if (en.isIntersecting && !held) { setWorld(wi); wtimer = setInterval(() => { if (!held && !document.hidden) setWorld((wi + 1) % 4); }, 7000); }
    }, { threshold: .5 }).observe($('#worlds'));
  } else tabs.classList.add('held');

  // ---------- Бегущая строка ----------
  const SUBST = ['<em>Trichoderma viride</em>', 'хитозан', '<em>Beauveria bassiana</em>', 'альгинаты морских водорослей', 'фульвовые кислоты', 'коллоидное наносеребро',
    '<em>Streptomyces avermitilis</em>', 'арабиногалактан', 'гуминовые кислоты', 'органический кремний', '<em>Moringa oleifera</em>', '<em>Gynura procumbens</em>', 'аминокислоты'];
  const tk = SUBST.map(s => `<span>${s}</span>`).join('');
  $('#tick').innerHTML = tk + tk;

  // ---------- Список проблем ----------
  const PROBS = [
    ['pests', 'Вредители', 'тля, клещ, клоп, златка', /Биоместин/], ['disease', 'Болезни', 'грибок, гниль, трутовик', /Грибофит/],
    ['roots', 'Слабые корни', 'рассада, черенки, саженцы', /4\.2/], ['harvest', 'Мало завязей', 'цветение, вкус и размер плодов', /АгроБор/],
    ['soil', 'Бедная почва', 'слизни, сорняки, мульча', /Зоогумус/], ['trees', 'Болеют деревья', 'пальмы, стволы, инъекции', /1\.4/],
    ['bees', 'Пчёлы', 'сила семьи и иммунитет', /АПИ/], ['animals', 'Животные и птица', 'кормовые добавки и премиксы', /Экостимул/],
  ];
  const nProb = k => P.filter(p => p.problems.includes(k)).length;
  $('#plist').innerHTML = PROBS.map(([k, t, h, rx], i) => { const p = find(rx); return `<a class="prow rv" style="--d:${i * .04}s" href="catalog.html?problem=${k}" data-img="${p ? thumb(p) : ''}" data-cut="${p && p.cut ? 1 : ''}">
    <span class="n">0${i + 1}</span><b>${t}</b><span class="h">${h}</span><span class="c">${nProb(k)} ${plural(nProb(k), 'средство', 'средства', 'средств')}</span><span class="a">${ARR}</span></a>`; }).join('');
  if (matchMedia('(hover:hover)').matches && !reduce) {
    const fl = $('#pfloat'), fi = fl.querySelector('img');
    let tx = 0, ty = 0, x = 0, y = 0, on = false, raf;
    const loop = () => { x += (tx - x) * .14; y += (ty - y) * .14; fl.style.left = x + 'px'; fl.style.top = y + 'px'; raf = requestAnimationFrame(loop); };
    $('#plist').addEventListener('pointermove', e => { tx = e.clientX + 160; ty = e.clientY; if (!on) { x = tx; y = ty; } });
    $('#plist').addEventListener('pointerover', e => {
      const r = e.target.closest('.prow'); if (!r || !r.dataset.img) return;
      fi.src = r.dataset.img; fi.className = r.dataset.cut ? '' : 'ph'; fl.classList.add('on'); if (!on) { on = true; loop(); }
    });
    $('#plist').addEventListener('pointerleave', () => { fl.classList.remove('on'); on = false; cancelAnimationFrame(raf); });
  }

  // ---------- Таблица Элис&Тор ----------
  const SYM = { '1.1': ['Ин', 'Инсектицид PRO'], '1.2': ['Фн', 'Фунгицид PRO'], '1.3': ['Ус', 'Активатор устойчивости'], '1.4': ['Тр', 'Против трутовика'],
    '2.5': ['Зл', 'ЗлаткаБой'], '3.2': ['Гм', 'Гуминовый элиситор'], '3.3': ['Ад', 'Адаптоген'], '3.4': ['Si', 'Кремниевый стимулятор'],
    '3.5': ['Хт', 'Хитозан'], '3.6': ['Вк', 'Вкус и размер плодов'], '3.7': ['Ам', 'Аминокислоты'], '3.8': ['Гл', 'Гель-укоренитель'],
    '4.1': ['Бс', 'Биостимулятор'], '4.2': ['Кр', 'Корнеобразование'], '4.3': ['Нм', 'Нематоцид'], '4.4': ['Эл', 'Элиситор'], '4.5': ['Аг', 'АлгаГидроГель'] };
  const ser = {}; P.filter(p => p.series).forEach(p => { if (!ser[p.series]) ser[p.series] = p; });
  const el = s => { const p = ser[s]; if (!p) return ''; const [sy, nm] = SYM[s] || ['?', p.name];
    return `<button class="el s${s[0]}" data-s="${s}"><span class="no">${s}</span><span class="pr">${p.price ? rub(p.price) : ''}</span><span class="sym">${sy}</span><span class="nm">${nm}</span></button>`; };
  $('#ptable').innerHTML =
    ['1.1', '1.2', '1.3', '1.4'].map(el).join('') + `<div class="el-detail" id="el-detail"></div>` +
    el('2.5') + `<div class="el-legend">
      <div><i style="background:#d3e49a">1</i><span><b>PRO</b>стволовые инъекции и капельный полив</span></div>
      <div><i style="background:#e3b866">2</i><span><b>Концентраты</b>универсальные, для больших площадей</span></div>
      <div><i style="background:#a6d3a0">3</i><span><b>Для ЛПХ</b>частные сады и огороды</span></div>
      <div><i style="background:#8fd3c9">4</i><span><b>Водоросли</b>на экстрактах морских водорослей</span></div></div>` +
    ['3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8'].map(el).join('') +
    ['4.1', '4.2', '4.3', '4.4', '4.5'].map(el).join('') +
    `<a class="el cta" href="catalog.html?q=${encodeURIComponent('Элис&Тор')}" style="grid-column:span 2"><span class="no">все 17</span><b>Вся линейка Элис&amp;Тор в каталоге →</b></a>`;
  const det = $('#el-detail');
  function showEl(s) {
    const p = ser[s]; if (!p) return;
    document.querySelectorAll('.el[data-s]').forEach(b => b.classList.toggle('on', b.dataset.s === s));
    det.classList.add('swap');
    setTimeout(() => {
      const d = (p.desc.find(x => x.length > 60) || p.desc[0] || '');
      const inCart = window.App.Cart.get()[p.id];
      det.innerHTML = `<a class="img" href="product.html?id=${encodeURIComponent(p.id)}">${pic(p)}</a>
        <div class="tx"><small>Элис&amp;Тор № ${s}${p.pack ? ' · ' + esc(p.pack.slice(0, 34)) : ''}</small><b>${esc(p.name)}</b><p>${esc(d)}</p>
        <div class="row"><span class="price">${esc(priceText(p))}</span>${p.price ? `<button class="add ${inCart ? 'in' : ''}" data-add="${p.id}">${I.plus}<span class="lbl-add">В корзину</span>${I.check.replace('<svg', '<svg class="lbl-in"')}<span class="lbl-in">В корзине</span></button>` : ''}</div></div>`;
      det.classList.remove('swap');
    }, 200);
  }
  $('#ptable').addEventListener('pointerover', e => { const b = e.target.closest('.el[data-s]'); if (b && matchMedia('(hover:hover)').matches) showEl(b.dataset.s); });
  $('#ptable').addEventListener('click', e => { const b = e.target.closest('.el[data-s]'); if (b) { if (b.classList.contains('on') && !matchMedia('(hover:hover)').matches) location.href = `product.html?id=${encodeURIComponent(ser[b.dataset.s].id)}`; showEl(b.dataset.s); } });
  showEl('4.5');

  // ---------- Хиты, экзоты ----------
  const HITS = [[/Грибофит/, 'Бестселлер'], [/Биоместин/], [/АлгаГидроГель/], [/Атоник/], [/Элис&Тор 3\.5/], [/Терра&Ферм АПИ/], [/Фульвовые/], [/Зоогумус/], [/Аргитос Агро/], [/ЗлаткаБой/]];
  $('#rail').innerHTML = HITS.map(([rx, h]) => { const p = find(rx); return p ? card(p, { hit: h }) : ''; }).join('');
  document.querySelectorAll('[data-rail]').forEach(b => b.onclick = () => { const r = $('#rail'); r.scrollBy({ left: +b.dataset.rail * r.clientWidth * .7, behavior: 'smooth' }); });
  $('#rail-trop').innerHTML = P.filter(p => p.world === 'exotics' && p.sub.startsWith('Чаи')).sort((a, b) => (b.cut ? 1 : 0) - (a.cut ? 1 : 0)).slice(0, 10).map(p => card(p)).join('');

  // ---------- Партнёры (бегущая лента), документы ----------
  const PN = ['Академия развития субтропического сельского хозяйства', 'Институт сельского хозяйства АН Абхазии', 'ГеоСПА', 'ЛесСад', 'Smart Green Line', 'Защита АгроСоюз', 'Italpollina',
    'НПК Берес', 'Аметис', 'КНТП', 'Argitos', 'Творница', 'СибБио', 'ГК АгроПлюс'];
  const pl = PN.map((n, i) => `<div class="partner" title="${esc(n)}"><img src="assets/img/partners/${String(i).padStart(2, '0')}.webp" alt="${esc(n)}" loading="lazy"></div>`).join('');
  $('#partners').innerHTML = pl + pl;
  const DOCS = ['Свидетельство о государственной регистрации', '', 'Декларация соответствия ЕАЭС', 'Товарный знак Tropical Life', 'Товарный знак СтопХимия', 'Сертификат ISO', 'Сертификат ISO', 'Сертификат ISO'];
  $('#docs').innerHTML = [5, 4, 2, 3, 6, 0].map((i, j) => `<button class="doc rv" style="--d:${j * .05}s" data-src="assets/img/docs/${String(i).padStart(2, '0')}.webp" aria-label="${DOCS[i]}"><img src="assets/img/docs/${String(i).padStart(2, '0')}.webp" alt="${DOCS[i]}" loading="lazy"></button>`).join('');
  const lb = $('#lb');
  document.addEventListener('click', e => { const d = e.target.closest('[data-src]'); if (d) { lb.querySelector('img').src = d.dataset.src; lb.classList.add('open'); } else if (e.target.closest('#lb')) lb.classList.remove('open'); });
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

  // ---------- Услуги ----------
  const ORD = [/старовозраст/, /Диагностика/, /пальмов/, /Агроном/, /Комплексный/, /Наши услуги/, /Восстановление/, /МОРЕ/];
  const svc = P.filter(p => p.world === 'services').sort((a, b) => ORD.findIndex(r => r.test(a.name)) - ORD.findIndex(r => r.test(b.name)));
  $('#svc-list').innerHTML = svc.map((p, i) => `<a class="svc-row rv" style="--d:${i * .04}s" href="product.html?id=${encodeURIComponent(p.id)}"><span class="mono">0${i + 1}</span><b>${esc(p.name.replace(/\s*—.*$/, '').replace(/^ЧИСТОЕ ЧЕРНОЕ МОРЕ/, 'Чистое Чёрное море: «Зелёный пляж» без химии').replace('Здравоохранение растений. Наши услуги', 'Здравоохранение растений: все услуги'))}</b><span class="p">${p.price ? esc(priceText(p)) : 'по объекту'}</span>${ARR}</a>`).join('');

  // ---------- Отзывы ----------
  const REVS = [
    ['Елена Бокачева', 'Прекрасная компания. Продукция на основе новых научных технологий, цены не завышены, качество высокое. В Телеграм-канале подробно разбирают каждый препарат.', 1],
    ['Евгений', 'Интересная компания. Широкий спектр услуг, грамотный подход. Цена равна качеству. Понравилось, что всё без обмана и делают с гарантией. Сколько раз выручали. Спасибо!'],
    ['Алексей', 'Очень удобно, что вы можете выехать на место, определить степень повреждения растений и дать грамотный совет. Вы помогаете природе восстанавливаться и следите за парками.'],
    ['Самойлова Инна Сергеевна', 'Благодарю СтопХимию за то, что не теряют связь с наукой. Те, кто находит силы её поддерживать, делают большое дело. Хотелось бы чаще видеть вас с докладами на конференциях!', 1],
    ['Алия', 'Очень полезные материалы. Используем на двух страницах по природному земледелию.'],
    ['Семиколенова Каринэ Гайковна', 'Благодаря вашему проекту есть возможность сохранить экологию города, чистоту водоёмов и величие наших Кавказских гор. Окажу любую посильную поддержку!'],
  ];
  $('#revs').innerHTML = REVS.map(([n, t, big], i) => `<figure class="rev rv ${big ? 'big' : ''}" style="--d:${(i % 3) * .06}s"><p>${big ? '«' + esc(t) + '»' : esc(t)}</p><footer><span class="ava">${n[0]}</span><span><b>${esc(n)}</b><small>Отзыв на сайте</small></span></footer></figure>`).join('');

  // ---------- Статьи ----------
  const ARTS = [
    ['https://stophimiy.ru/articles/moringa-chuda-prirody-ot-ayurvedy-do-bioinzhenerii/', 'assets/img/gen2/wide-moringa.webp', 'Tropical Life', 'Моринга, «чудо природы»: от Аюрведы до биоинженерии', 'Почему мир сошёл с ума по моринге и что в её листьях на самом деле.'],
    ['https://stophimiy.ru/articles/tak-kto-zhe-dolzhen-spasat-zelenoe-zoloto-kurorta-sochi/', 'assets/img/gen/sochi.webp', 'Деревья', 'Кто должен спасать «зелёное золото» курорта Сочи?'],
    ['https://stophimiy.ru/articles/a-chem-sochi-huzhe-izrailya-ili-u-nas-dolgonosiki-ne-krasneyut/', 'assets/img/gen/tree.webp', 'Вредители', 'А чем Сочи хуже Израиля? Пальмовый долгоносик'],
    ['https://stophimiy.ru/articles/vtoraya/', 'assets/img/gen/field.webp', 'Наука', 'Растительное сырьё субтропиков для функционального питания'],
    ['https://stophimiy.ru/news/chetvyortaya-novost/', 'assets/img/gen/seaweed-macro.webp', 'Новости', 'Защита растений на наноматериалах уже в Сочи'],
  ];
  $('#arts').innerHTML = ARTS.map(([u, im, tg, t, d], i) => `<a class="art rv ${i === 0 ? 'main' : ''}" style="--d:${i * .05}s" href="${u}" target="_blank" rel="noopener"><span class="im"><img src="${im}" alt="" loading="lazy"></span><span class="tx"><small>${tg}</small><b>${esc(t)}</b>${d ? `<p>${esc(d)}</p>` : ''}</span></a>`).join('');

  document.querySelectorAll('[data-i]').forEach(s => { s.innerHTML = I[s.dataset.i]; });

  // ---------- Счётчики ----------
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; io.unobserve(en.target);
    const b = en.target, to = +b.dataset.count, pre = b.dataset.pre || '', suf = b.dataset.suf || '', from = to > 1000 ? to - 40 : 0, t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 1600), v = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 4))); b.textContent = pre + v + suf; if (k < 1) requestAnimationFrame(step); };
    if (!reduce) requestAnimationFrame(step);
  }), { threshold: .6 });
  document.querySelectorAll('[data-count]').forEach(b => io.observe(b));

  // ---------- Заявка ----------
  const form = $('#ask-form');
  form.querySelector('.ask-ok-ic').innerHTML = I.check;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    ['name', 'phone'].forEach(n => { const f = form.elements[n]; const bad = f.value.trim().length < 2; f.closest('.fld').classList.toggle('err', bad); if (bad) ok = false; });
    if (ok) form.classList.add('done');
  });

  // ---------- Параллакс картинок ----------
  if (!reduce) {
    const par = [...document.querySelectorAll('.about-img img, .trop-hero img, .svc-img img')];
    const tick = () => { par.forEach(im => { const r = im.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; const k = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; im.style.transform = `translateY(${k * -40}px) scale(1.12)`; }); };
    addEventListener('scroll', tick, { passive: true }); tick();
  }
  // ---------- Открыто ли сейчас (время Москвы) ----------
  (function () {
    const el = document.getElementById('gde-now'); if (!el) return;
    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 180) * 60000);
    const m = now.getHours() * 60 + now.getMinutes(), open = m >= 540 && m < 1080;
    el.classList.toggle('open', open);
    el.textContent = open ? `Сейчас открыто, до 18:00` : (m < 540 ? 'Сейчас закрыто, откроемся в 9:00' : 'Сейчас закрыто, откроемся завтра в 9:00');
  })();
  reveal();
})();
