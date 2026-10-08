'use strict';
const projects = [
 {image:'obj-angar',title:'Ангар для техники',place:'Онега',facts:'128 т · 1 800 м² · 38 дней',description:'Утеплённый контур, ворота 6 × 6 м. Производство и монтаж за 38 дней.'},
 {image:'obj-most',title:'Пешеходный мост',place:'Вологда',facts:'96 т · пролёт 54 м · 61 день',description:'Сквозные фермы, настил из профнастила, оранжевые поручни. От замера до сдачи 61 день.'},
 {image:'obj-sklad',title:'Склад 2 400 м²',place:'Вологда',facts:'214 т · пролёт 24 м · 46 дней',description:'Стальные колонны и фермы под кровлю. Объект сдан в марте 2025 года.'},
 {image:'fermy',title:'Фермы и балки',place:'Череповец · производство',facts:'от 126 400 ₽/т · от 14 дней',description:'Сварные фермы из парных уголков и двутавра, прогоны и связи жёсткости.'},
 {image:'rezerveyar',title:'Два резервуара по 400 м³',place:'Ухта',facts:'74 т · 52 дня',description:'Два корпуса с площадками. Окраска, монтаж и акт на гидроиспытание.'},
 {image:'lestnitsa',title:'Лестницы и площадки',place:'Череповец · производство',facts:'от 143 000 ₽/т · от 10 дней',description:'Марши и площадки обслуживания. Решётчатые или гофрированные ступени, вариант в горячее цинкование.'},
 {image:'tsekh',title:'Здесь металл становится каркасом',place:'Череповец · цех 3',facts:'6 800 м² · до 900 т в месяц',description:'Промышленная ул., 14. Полный цикл: резка, сборка, сварка, дробеструй и покраска.'},
 {image:'svar',title:'Сварка узлов',place:'Череповец · цех 3',facts:'24 сварщика с аттестацией НАКС',description:'Сварка аттестованными сварщиками. Швы под ультразвуковой или визуально-измерительный контроль.'},
 {image:'plazma',title:'Резка по вашим чертежам',place:'Череповец · цех 3',facts:'лист до 12 м · толщина до 40 мм',description:'Плазменная резка Messer. Нестандартные конструкции от 134 700 ₽ за тонну, от 18 дней.'},
 {image:'pokras',title:'Производственный корпус',place:'Кировск',facts:'340 т · 3 600 м² · 74 дня',description:'Двухэтажный каркас с кран-балкой 3,2 т. Лестницы и площадки обслуживания внутри цеха.'},
 {image:'inzhener',title:'Сначала разбираем чертёж',place:'Череповец · отдел продаж',facts:'Расчёт за 2 рабочих дня',description:'Присылайте PDF, DWG или планы здания. Инженер подготовит вес, стоимость металла и работ, график производства.'},
 {image:'hero-angar',title:'Каркас ангара',place:'Онега',facts:'128 т · пролёт 24 м',description:'Шаг колонн 6 м, высота до конька 8,4 м. Каркасы зданий и ангаров от 118 000 ₽ за тонну.'}
];
const rail = document.querySelector('#rail');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const label = document.querySelector('#label');
const intro = document.querySelector('.introduction');
const dialog = document.querySelector('#detail');
const space = document.querySelector('.scroll-space');
let mobile = innerWidth <= 600;
let unit = innerHeight * 11 / 12;
let target = 0, position = 0, pointerX = innerWidth * .71, pointerY = innerHeight * .69;
let labelX = pointerX, labelY = pointerY, hovered = null, active = -1, lastFocused, selectedProject = null;
const totalSteps = 12;
const cards = projects.map((project, index) => {
 const card = document.createElement('button');
 card.className = 'card photo'; card.type = 'button'; card.dataset.index = index;
 card.setAttribute('aria-label', `${project.title}, ${project.place}. Рассмотреть объект`);
 const img = document.createElement('img'); img.src = `assets/img/${project.image}.jpg`; img.alt = project.title; img.decoding = 'async'; img.loading = index < 4 ? 'eager' : 'lazy';
 const caption = document.createElement('span'); caption.className = 'edge-name'; caption.textContent = project.title;
 card.append(img, caption); rail.append(card);
 card.addEventListener('pointerenter', () => {hovered = index; updateLabel(index);});
 card.addEventListener('pointerleave', () => {hovered = null;});
 card.addEventListener('focus', () => updateLabel(index));
 card.addEventListener('click', () => openProject(index, card));
 return card;
});
const calc = document.createElement('article'); calc.className = 'card calc-card'; calc.id = 'calc'; calc.setAttribute('data-lenis-prevent', '');
calc.innerHTML = '<h2>Ваш проект.<br>Наш металл.</h2><p>Расчёт по чертежам за 2 рабочих дня.<br>Начнём с телефона для связи.</p><form id="calc-form"><label for="phone">Ваш телефон</label><div class="form-row"><input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+7 (___) ___-__-__" required aria-describedby="form-status"><button class="solid" type="submit">Подготовить письмо ↗</button></div><p class="form-note">Откроется почтовый клиент. Приложите чертёж к письму и отправьте его нам.</p><div id="form-status" class="form-status" role="status"></div></form>';
const calculation = document.createElement('div');
calculation.className = 'calculation';
calculation.append(...calc.childNodes);
calc.append(calculation);
document.querySelector('.scene').append(calc);
const footer = document.createElement('footer'); footer.className = 'footer-card';
footer.innerHTML = '<h2>Увидимся в цехе.</h2><address>Череповец, Промышленная ул., 14<br>Цех 3, проходная с торца</address><p>Пн-пт 8:00-17:00</p><div class="footer-links"><a href="tel:+78202491760">+7 (8202) 49-17-60</a><a href="https://t.me/severstalkon_sales" target="_blank" rel="noopener">Telegram ↗</a><a href="mailto:zakaz@severstalkon.ru">Написать на почту ↗</a></div><small>ООО «Северный завод стальных конструкций»<br>Металлоконструкции с 2009 года</small>';
calc.append(footer);
const lenis = !reduced && window.Lenis ? new Lenis({lerp:.08,smoothWheel:true}) : null;
function updateLabel(index) {
 if (active === index) return;
 active = index;
 const data = projects[index];
 label.querySelector('.label-place').textContent = data.place;
 label.querySelector('.label-title').textContent = data.title;
 label.querySelector('.label-facts').textContent = data.facts;
}
function resize() {
 mobile = innerWidth <= 600; unit = innerHeight * 11 / totalSteps;
 space.style.height = `${12 * innerHeight}px`;
 target = scrollY / unit;
}
function transformCard(card, distance, isSpecial = false) {
 const x = distance * (mobile ? 40 : 320), y = distance * (mobile ? -220 : -150), z = distance * (mobile ? -480 : -520);
 const angle = mobile ? -9 : -28;
 card.style.transform = `translate3d(${x}px,${y - (isSpecial && mobile ? 70 : 0)}px,${z}px) rotateY(${angle}deg)`;
 const opacity = isSpecial ? (distance < -.35 || distance > 5 ? 0 : 1) : distance < -1.1 || distance > 6 ? 0 : distance < -.25 ? Math.max(0, 1 + (distance + .25) / .85) : Math.max(0, 1 - distance / 6);
 card.style.opacity = opacity;
 card.style.visibility = opacity < .015 ? 'hidden' : 'visible';
 card.style.pointerEvents = distance > 2.5 || opacity < .15 ? 'none' : 'auto';
 card.inert = distance > 2.5 || opacity < .15;
 // Затемнение задаётся слоем, без пересчёта фильтра на каждом кадре.
}
function render(time) {
 lenis?.raf(time);
 if (!dialog.open) {
 target = scrollY / unit;
 position += (target - position) * .08;
 if (Math.abs(target - position) < .001) position = target;
 cards.forEach((card, index) => {
  let sequence = index;
  // Ушедший кадр возвращается в дымку; прокрутка завершается формой.
  if (position > index + 1.1) sequence = index + 12;
  transformCard(card, sequence - position);
 });
 const finalVisible = position > 11.55;
 rail.style.display = position > 11.8 ? 'none' : '';
 calc.style.opacity = finalVisible ? String(Math.min(1, (position - 11.55) / .2)) : '0'; document.querySelector('.hud-center').style.visibility = finalVisible ? 'hidden' : '';
 calc.style.visibility = finalVisible ? 'visible' : 'hidden';
 calc.inert = !finalVisible;
 calc.style.transform = `translateY(${Math.max(0, 11.75 - position) * 70}px)`;
 const nearest = Math.max(0, Math.round(position));
 if (hovered === null) updateLabel(Math.min(11, nearest));
 label.style.opacity = finalVisible ? '0' : '1';
 document.querySelector('#counter').textContent = finalVisible ? 'РАСЧЁТ И КОНТАКТЫ' : `${String(Math.min(12, nearest + 1)).padStart(2,'0')} / 12`;
 const introOpacity = Math.max(0,1-position*1.4); intro.style.opacity = introOpacity; intro.style.visibility = introOpacity < .01 ? 'hidden' : 'visible';
 if (!mobile) {
  labelX += (pointerX - labelX) * .12; labelY += (pointerY - labelY) * .12;
  label.style.left = '0'; label.style.top = '0'; label.style.transform = `translate3d(${Math.min(innerWidth-305, Math.max(20,labelX+18))}px,${Math.min(innerHeight-250, Math.max(110,labelY+18))}px,0)`;
 } else {label.style.left='';label.style.top='';label.style.transform='';}
 // Подпись остаётся только у ближнего кадра и вне защищённых зон интерфейса.
 const protectedRects = [document.querySelector('.header'), document.querySelector('.hud'), ...(introOpacity > .01 ? [intro] : []), ...(!finalVisible ? [label] : [])].map(node => node.getBoundingClientRect());
 cards.forEach((card, index) => {
  const caption = card.querySelector('.edge-name');
  caption.style.visibility = 'hidden';
  if (index !== nearest || finalVisible) return;
  const rect = caption.getBoundingClientRect();
  const overlaps = protectedRects.some(zone => rect.left < zone.right + 8 && rect.right > zone.left - 8 && rect.top < zone.bottom + 8 && rect.bottom > zone.top - 8);
  if (!overlaps && rect.top >= 0 && rect.bottom < innerHeight - 60) caption.style.visibility = 'visible';
 });
 }
 requestAnimationFrame(render);
}
function openProject(index, trigger) {
 const data = projects[index]; lastFocused = trigger; selectedProject = index;
 const source = trigger.getBoundingClientRect();
 dialog.querySelector('img').src = `assets/img/${data.image}.jpg`; dialog.querySelector('img').alt = data.title;
 document.querySelector('#detail-title').textContent = data.title;
 document.querySelector('#detail-place').textContent = data.place;
 document.querySelector('#detail-facts').textContent = `${data.facts}. ${data.description}`;
 lenis?.stop(); document.body.style.overflow = 'hidden'; dialog.showModal();
 if (!reduced) {
  const image = dialog.querySelector('.detail-image'); const destination = image.getBoundingClientRect();
  image.animate([{transformOrigin:'0 0',transform:`translate(${source.left}px,${source.top}px) scale(${source.width/destination.width},${source.height/destination.height})`,opacity:.7},{transformOrigin:'0 0',transform:'translate(0,0) scale(1,1)',opacity:1}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});
 }
 dialog.querySelector('.close').focus();
}
function closeProject() {dialog.close();}
dialog.querySelector('.close').addEventListener('click',closeProject);
dialog.addEventListener('close', () => {document.body.style.overflow='';lenis?.start();lastFocused?.focus({preventScroll:true});});
function goCalc(event) {
 event.preventDefault(); calc.scrollTop = 0; if (dialog.open) {closeProject();document.body.style.overflow='';lenis?.start();}
 if (reduced) {calc.scrollIntoView();} else if (lenis) {lenis.scrollTo(unit*12,{duration:1.4});} else {scrollTo({top:unit*12,behavior:'smooth'});}
 // Фокус ждёт фактического появления карточки после сглаживания камеры.
 const focusDeadline = performance.now() + 20000;
 const focusForm = () => {
  if (performance.now() > focusDeadline) return;
  if (reduced || position > 11.8) calc.querySelector('input').focus({preventScroll:true});
  else if (target > 11.5 || scrollY > unit * 11.5) requestAnimationFrame(focusForm);
  else setTimeout(focusForm, 100);
 };
 setTimeout(focusForm, reduced ? 0 : 1500);
}
document.querySelectorAll('[data-calc],.skip').forEach(link=>link.addEventListener('click',goCalc));
document.querySelector('.brand').addEventListener('click',event=>{event.preventDefault();if(lenis)lenis.scrollTo(0);else scrollTo({top:0,behavior:reduced?'instant':'smooth'});});
document.querySelector('#calc-form').addEventListener('submit', event => {
 event.preventDefault();const input=document.querySelector('#phone');const status=document.querySelector('#form-status');
 const digits=input.value.replace(/\D/g,'');
 if(digits.length<10 || digits.length>15){input.setAttribute('aria-invalid','true');status.textContent='Укажите телефон: от 10 до 15 цифр.';input.focus();return;}
 input.removeAttribute('aria-invalid');
 const body=`Здравствуйте! Прошу рассчитать металлоконструкции.\nТелефон для связи: ${input.value}\nОбъект: ${selectedProject === null ? 'Мой проект' : projects[selectedProject].title}\nЧертёж или ТЗ приложу к письму.`;
 const href=`mailto:zakaz@severstalkon.ru?subject=${encodeURIComponent('Расчёт металлоконструкций')}&body=${encodeURIComponent(body)}`;
 const link=document.createElement('a');link.href=href;link.textContent='Открыть письмо ещё раз';
 status.replaceChildren(document.createTextNode('Письмо подготовлено. Отправьте его из почтового клиента. '),link);
 location.href=href;
});
addEventListener('pointermove',event=>{if(event.clientX===0 && event.clientY===0)return;pointerX=event.clientX;pointerY=event.clientY;});
addEventListener('resize',resize);resize();updateLabel(0);
if(!reduced)requestAnimationFrame(render);
else {cards.forEach(card=>{card.inert=false;});space.style.height='0';}
