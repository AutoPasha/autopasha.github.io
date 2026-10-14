/* Общее для всех макетов: данные лавки «Зерно» (выдуманная, как в демо),
   значки, переключатель режима, шторка подключения мессенджера. */

const FACE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23ffc1a5'%3E%3Cpath d='M78 52.69C75.04 80.39 75.04 80.39 48.28 77.53C21.52 74.67 21.52 74.67 24.48 46.98C27.44 19.28 27.44 19.28 54.2 22.14C80.96 25 80.96 25 78 52.69Z'/%3E%3C/g%3E%3Cg fill='%23170d08'%3E%3Cpath d='M47.26 48.8C46.65 54.66 46.65 54.66 44.06 54.39C41.47 54.12 41.47 54.12 42.08 48.26C42.69 42.4 42.69 42.4 45.28 42.67C47.87 42.94 47.87 42.94 47.26 48.8Z'/%3E%3Cpath d='M64.5 48.77C63.9 53.96 63.9 53.96 61.46 53.68C59.01 53.39 59.01 53.39 59.62 48.2C60.23 43.01 60.23 43.01 62.67 43.3C65.11 43.58 65.11 43.58 64.5 48.77Z'/%3E%3C/g%3E%3C/svg%3E";

const GLYPH = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  ym: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.6 1.3 4.9 3.4 6.5L4.6 21l3.6-1.7c1.2.4 2.5.6 3.8.6 5.5 0 10-3.9 10-8.7S17.5 3 12 3Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  chev: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
  back: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>',
  group: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3 2.9-4.6 5.5-4.6s4.9 1.6 5.5 4.6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.6c2.3.1 4 1.5 4.5 4.4"/></svg>',
  inbox: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13h4l1.5 2.5h5L16 13h4"/><path d="M5.5 5h13L21 13v5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18v-5Z"/></svg>',
};

function logo(kind, size = '', state = '') {
  const cls = { telegram: 'lg-tg', pachca: 'lg-pachca', mail: 'lg-mail', ym: 'lg-ym', mattermost: 'lg-mm', b24: 'lg-b24', myteam: 'lg-myteam', other: 'lg-other' }[kind];
  let inner = (window.ICONS || {})[kind] || GLYPH[kind] || '';
  if (kind === 'b24') inner = '24';
  if (kind === 'myteam') inner = 'MK';
  if (kind === 'other') inner = GLYPH.plus;
  const st = state ? `<i class="st ${state === 'ok' ? '' : state}"></i>` : '';
  return `<span class="m-logo ${cls} ${size}">${inner}${st}</span>`;
}

const CH = {
  pachca: { name: 'Пачка', acc: 'Паша Зернов', where: 'zerno.pachca.com', kind: 'своя учётка в вашем пространстве', state: 'ok', stateText: 'на связи' },
  telegram: { name: 'Telegram', acc: '@pasha_zerno', where: 'аккаунт, не бот', kind: 'обычный аккаунт: без плашки «бот», пишет первым', state: 'ok', stateText: 'на связи' },
  mail: { name: 'Почта', acc: 'zakaz@zerno.shop', where: 'Яндекс 360', kind: 'читает и отправляет письма', state: 'ok', stateText: 'на связи' },
};

const MODES = [
  ['self', 'сам'],
  ['draft', 'черновик'],
  ['silent', 'молча'],
  ['off', 'нет'],
];
const MODE_LONG = {
  self: 'отвечает сам',
  draft: 'только черновиком',
  silent: 'читает молча',
  off: 'не читает',
};

const CHATS = [
  { id: 1, ch: 'pachca', t: 'Сайт и доставка', type: 'group', n: 6, th: 4, last: '12 мин', mode: 'self' },
  { id: 2, ch: 'pachca', t: '1С и склад', type: 'group', n: 4, th: 7, last: '40 мин', mode: 'self' },
  { id: 3, ch: 'pachca', t: 'Маркетинг', type: 'group', n: 5, th: 0, last: 'вчера', mode: 'draft' },
  { id: 4, ch: 'pachca', t: 'Зерно · общий', type: 'group', n: 23, th: 0, last: '3 мин', mode: 'silent' },
  { id: 5, ch: 'pachca', t: 'Бухгалтерия', type: 'group', n: 3, th: 0, last: 'пн', mode: 'off' },
  { id: 6, ch: 'pachca', t: 'Марина Гусева', type: 'dm', who: 'МГ', c: '#ffc1a5', last: '5 мин', mode: 'self' },
  { id: 7, ch: 'pachca', t: 'Олег Тарасов', type: 'dm', who: 'ОТ', c: '#c9e7d3', last: '1 ч', mode: 'self' },
  { id: 8, ch: 'pachca', t: 'Катя Морозова', type: 'dm', who: 'КМ', c: '#f4d7f0', last: 'вчера', mode: 'self' },
  { id: 9, ch: 'pachca', t: 'Игорь Лаптев', type: 'dm', who: 'ИЛ', c: '#d6e2fb', last: 'пт', mode: 'draft' },
  { id: 10, ch: 'telegram', t: 'Зерно × Обжарка Север', type: 'group', n: 5, th: 0, last: '2 ч', mode: 'draft' },
  { id: 11, ch: 'telegram', t: 'Марина Гусева', type: 'dm', who: 'МГ', c: '#ffc1a5', last: 'вчера', mode: 'self' },
  { id: 12, ch: 'telegram', t: 'Оптовики Зерно', type: 'group', n: 41, th: 0, last: '20 мин', mode: 'silent' },
  { id: 13, ch: 'mail', t: 'Входящие zakaz@zerno.shop', type: 'inbox', n: 0, th: 0, last: '7 мин', mode: 'draft', sub: 'письма покупателей и поставщиков' },
];
const NEW_CHATS = [
  { id: 21, ch: 'pachca', t: 'Ревизия октябрь', who: 'позвал Олег Тарасов', n: 4 },
  { id: 22, ch: 'pachca', t: 'Курьеры СПб', who: 'позвала Марина Гусева', n: 9 },
  { id: 23, ch: 'telegram', t: 'Бариста-клуб', who: 'позвала Катя Морозова', n: 120 },
];
const REMOVED = [{ ch: 'pachca', t: 'Новогодняя акция 2025' }];

const PEOPLE = [
  { n: 'Марина Гусева', r: 'владелец', c: '#ffc1a5', a: 'МГ', where: ['pachca', 'telegram'], tags: ['ставит задачи', 'принимает работу', 'знает, что он AI'] },
  { n: 'Олег Тарасов', r: 'склад и остатки', c: '#c9e7d3', a: 'ОТ', where: ['pachca'], tags: ['ставит задачи'] },
  { n: 'Катя Морозова', r: 'маркетинг', c: '#f4d7f0', a: 'КМ', where: ['pachca', 'telegram'], tags: ['ставит задачи', 'принимает работу'] },
  { n: 'Игорь Лаптев', r: 'бухгалтер', c: '#d6e2fb', a: 'ИЛ', where: ['pachca'], tags: ['не дёргать'], note: 'деньги и счета только через Марину' },
  { n: 'Света Ким', r: 'закупки', c: '#fde7b0', a: 'СК', where: ['pachca'], tags: [] },
  { n: 'Ахмед Расулов', r: 'Обжарка Север, поставщик', c: '#e2dccf', a: 'АР', where: ['telegram', 'mail'], tags: ['снаружи'] },
];

/* переключатель режима с ездящей подложкой */
function seg(mode, id) {
  return `<span class="m-seg" data-mode="${mode}" data-id="${id}" role="group" aria-label="как он здесь отвечает"><i class="pill"></i>${MODES.map(([k, l]) => `<button type="button" data-k="${k}" aria-pressed="${k === mode}">${l}</button>`).join('')}</span>`;
}
function placePills(root = document) {
  root.querySelectorAll('.m-seg').forEach((s) => {
    const on = s.querySelector('button[aria-pressed=true]');
    const pill = s.querySelector('.pill');
    if (!on || !pill) return;
    pill.style.width = on.offsetWidth + 'px';
    pill.style.transform = `translateX(${on.offsetLeft - 3}px)`;
    pill.style.left = '3px';
  });
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('.m-seg button');
  if (!b) return;
  const s = b.parentElement;
  s.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  s.dataset.mode = b.dataset.k;
  placePills(s.parentElement);
  document.dispatchEvent(new CustomEvent('modechange'));
});
window.addEventListener('resize', () => placePills());

/* решение по новому чату прямо в карточке */
document.addEventListener('click', (e) => {
  const b = e.target.closest('.m-ask-acts button');
  if (!b) return;
  const row = b.closest('.m-ask-row');
  row.classList.add('done');
  row.querySelector('.verdict').textContent = b.dataset.v;
});

/* шторка */
function openSheet(id) {
  document.querySelectorAll('.m-sheet').forEach((s) => s.classList.toggle('on', s.id === id));
  document.body.classList.add('sheet-open');
}
function closeSheet() { document.body.classList.remove('sheet-open'); }
document.addEventListener('click', (e) => {
  const o = e.target.closest('[data-sheet]');
  if (o) { e.preventDefault(); openSheet(o.dataset.sheet); return; }
  if (e.target.closest('.m-scrim, .m-sheet-x button')) closeSheet();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });

/* шапка, нижнее меню и шторки подключения: одинаковые на всех страницах */
function shell(variant) {
  const top = `<header class="m-top"><img src="${FACE}" width="34" height="34" alt=""><span><b>Лавка «Зерно»</b><small><i class="dot"></i>паша отвечает Олегу в «1С и склад»</small></span><span class="sp"></span><span class="m-variant">${variant}</span></header>`;
  document.body.insertAdjacentHTML('afterbegin', top);
  document.querySelectorAll('.v9-back').forEach((a) => { a.innerHTML = GLYPH.back; });
  const tab = (h, l, icon, cur) => `<a href="${h}" ${cur ? 'aria-current="page"' : ''}>${icon}<span>${l}</span></a>`;
  const i1 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/></svg>';
  const i2 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17A2.5 2.5 0 0 1 4 14.5Z"/></svg>';
  const i3 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 7h14M5 12h14M5 17h9"/></svg>';
  document.body.insertAdjacentHTML('beforeend', `<nav class="m-tabbar">${tab('#', 'сейчас', i1)}${tab('#', 'чат', i2)}${tab('#', 'дела', i3)}${tab('#', 'паша', `<img src="${FACE}" width="20" height="20" alt="">`, true)}</nav><div class="m-scrim"></div>` + sheets());
}

function sheets() {
  const close = '<div class="m-sheet-x"><button aria-label="закрыть">×</button></div>';
  const telegram = `<aside class="m-sheet" id="sh-telegram">${close}<div class="m-sheet-in">
    <div class="m-row">${logo('telegram')}<div><h3>telegram</h3><p class="m-s">сотрудник рядом с Пачкой: оба мессенджера сразу</p></div></div>
    <div class="m-steps">
      <div class="m-step done"><span class="n">1</span><div><p class="m-t">Как он выглядит</p>
        <div class="m-pick" style="margin-top:8px">
          <label><input type="radio" name="tgk" checked><span><b>Обычный аккаунт</b><span class="rec">лучше</span><span class="m-s" style="display:block">Без плашки «бот», с «печатает…», может написать первым.</span></span></label>
          <label><input type="radio" name="tgk"><span><b>Бот</b><span class="m-s" style="display:block">Быстро, но с плашкой, и первым не напишет: человек должен нажать «Старт».</span></span></label>
        </div></div></div>
      <div class="m-step now"><span class="n">2</span><div><p class="m-t">Чей номер</p>
        <div class="m-pick" style="margin-top:8px">
          <label><input type="radio" name="tgn" checked><span><b>Наш</b><span class="m-s" style="display:block">Ничего делать не надо: заведём аккаунт с именем и фото по легенде, обычно за день.</span></span></label>
          <label><input type="radio" name="tgn"><span><b>Ваш</b><span class="m-s" style="display:block">Войдёте номером и кодом из SMS. Переписка остаётся только на машине сотрудника.</span></span></label>
        </div>
        <button class="m-btn hot" style="margin-top:12px;width:100%">завести аккаунт</button></div></div>
      <div class="m-step"><span class="n">3</span><div><p class="m-t">Добавьте его в чаты</p><p class="m-s">Найдите @pasha_zerno и позовите туда, где он нужен. Каждый чат придёт в рабочее место вопросом «работа это или нет».</p></div></div>
    </div>
    <p class="m-note" style="margin-top:18px">Пачка остаётся как была: один человек в двух мессенджерах — одна карточка в «кто есть кто».</p>
  </div></aside>`;

  const pachca = `<aside class="m-sheet" id="sh-pachca">${close}<div class="m-sheet-in">
    <div class="m-row">${logo('pachca', '', 'ok')}<div class="m-grow"><h3>пачка</h3><p class="m-s">zerno.pachca.com · Паша Зернов</p></div><span class="m-state">на связи</span></div>
    <div class="m-card" style="margin-top:14px"><div class="m-sum" style="border-top:0"><div><b>8</b><span>чатов слушает</span></div><div><b>3</b><span>новых ждут</span></div><div><b>2 мин</b><span>последний ответ</span></div><div><b>0</b><span>ошибок за сутки</span></div></div></div>
    <p class="m-h2" style="margin-top:22px">права токена</p>
    <p class="m-h2-sub">Проверяем сами при каждом подключении: видно, чего не хватает, ещё до того, как он замолчит.</p>
    <div class="m-card m-pad"><div class="m-check">
      <div><span class="ok">✓</span> читать и писать в чатах</div>
      <div><span class="ok">✓</span> видеть, куда его добавили</div>
      <div><span class="ok">✓</span> имена коллег</div>
      <div><span class="ok">✓</span> файлы и скриншоты</div>
      <div><span class="ok">✓</span> реакции «взял в работу»</div>
      <div><span class="no">✕</span> добавлять людей в беседу <span class="m-dim m-small">— отметьте <span class="m-code">chat_members:write</span> в окне токена, перевыпускать не надо</span></div>
    </div></div>
    <div style="display:grid;gap:8px;margin-top:16px">
      <a class="m-btn dark" href="variant-b.html#ch-pachca">настроить чаты в рабочем месте</a>
      <button class="m-btn">сменить токен</button>
      <button class="m-btn out" style="color:var(--color-bad-ink)">отключить Пачку</button>
    </div>
  </div></aside>`;

  const ym = `<aside class="m-sheet" id="sh-ym">${close}<div class="m-sheet-in">
    <div class="m-row">${logo('ym')}<div><h3>яндекс мессенджер</h3><p class="m-s">в вашей организации Яндекс 360</p></div></div>
    <div class="m-steps">
      <div class="m-step now"><span class="n">1</span><div><p class="m-t">Создайте бота в Яндекс 360</p><p class="m-s">Админка → Боты → Новый. Имя и фото по легенде. Пользовательского входа у Яндекса нет, поэтому только бот.</p></div></div>
      <div class="m-step"><span class="n">2</span><div><p class="m-t">Вставьте токен бота</p><input class="m-input mono" placeholder="y0_AgAAAA…" style="margin-top:8px"><p class="m-s" style="margin-top:6px">Шифруется здесь, в браузере. Открыть его может только машина сотрудника.</p></div></div>
      <div class="m-step"><span class="n">3</span><div><p class="m-t">Проверим связь</p><p class="m-s">Сразу скажем, видит ли он чаты и может ли писать.</p></div></div>
    </div>
    <button class="m-btn hot" style="margin-top:16px;width:100%">подключить</button>
  </div></aside>`;

  const other = `<aside class="m-sheet" id="sh-other">${close}<div class="m-sheet-in">
    <h3>другой мессенджер</h3><p class="m-s" style="margin-top:6px">Назовите, где сидит команда. Подключаем бесплатно, обычно за пару дней: пишем коннектор и приходим в эту же шторку.</p>
    <input class="m-input" placeholder="например, VK Teams или Compass" style="margin-top:14px">
    <button class="m-btn hot" style="margin-top:12px;width:100%">попросить подключить</button>
  </div></aside>`;
  const tokenSheet = (id, k, title, sub, s1, s1t, ph) => `<aside class="m-sheet" id="${id}">${close}<div class="m-sheet-in">
    <div class="m-row">${logo(k)}<div><h3>${title}</h3><p class="m-s">${sub}</p></div></div>
    <div class="m-steps">
      <div class="m-step now"><span class="n">1</span><div><p class="m-t">${s1}</p><p class="m-s">${s1t}</p></div></div>
      <div class="m-step"><span class="n">2</span><div><p class="m-t">Вставьте сюда</p><input class="m-input mono" placeholder="${ph}" style="margin-top:8px"><p class="m-s" style="margin-top:6px">Шифруется здесь, в браузере. Открыть может только машина сотрудника.</p></div></div>
      <div class="m-step"><span class="n">3</span><div><p class="m-t">Проверим связь и права</p><p class="m-s">Сразу скажем, видит ли он чаты и может ли писать.</p></div></div>
    </div>
    <button class="m-btn hot" style="margin-top:16px;width:100%">подключить</button>
  </div></aside>`;
  const mm = tokenSheet('sh-mm', 'mattermost', 'mattermost', 'ваш сервер, обычная учётка', 'Заведите ему учётку и личный токен', 'Профиль → Безопасность → Personal Access Tokens. Он будет обычным участником, не ботом.', 'https://chat.zerno.shop  и токен');
  const b24 = tokenSheet('sh-b24', 'b24', 'битрикс24', 'ваш портал, от имени сотрудника', 'Создайте входящий вебхук под его учёткой', 'Разработчикам → Другое → Входящий вебхук. Права: чат, задачи, пользователи.', 'https://zerno.bitrix24.ru/rest/17/…');
  return telegram + pachca + ym + mm + b24 + other;
}

function addTiles(withTelegram = true) {
  return `<div class="m-add">
    ${withTelegram ? `<button data-sheet="sh-telegram">${logo('telegram', 'sm')}Telegram</button>` : ''}
    <button data-sheet="sh-ym">${logo('ym', 'sm')}Яндекс Мессенджер</button>
    <button data-sheet="sh-mm">${logo('mattermost', 'sm')}Mattermost</button>
    <button data-sheet="sh-b24">${logo('b24', 'sm')}Битрикс24</button>
    <button data-sheet="sh-other">${logo('other', 'sm')}другой</button>
  </div>`;
}

function chatIcon(c) {
  if (c.type === 'dm') return `<span class="ic dm" style="background:${c.c}">${c.who}</span>`;
  if (c.type === 'inbox') return `<span class="ic">${GLYPH.inbox}</span>`;
  return `<span class="ic">${GLYPH.group}</span>`;
}
function chatSub(c) {
  if (c.type === 'dm') return `личка · ${c.last}`;
  if (c.type === 'inbox') return `${c.sub} · ${c.last}`;
  return `${c.n} человек${c.th ? ` · ${c.th} ${c.th < 5 ? 'треда' : 'тредов'}` : ''} · ${c.last}`;
}

window.addEventListener('load', () => placePills());
