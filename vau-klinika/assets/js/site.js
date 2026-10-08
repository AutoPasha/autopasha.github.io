/* Направления, цены и врачи взяты из ISTOCHNIK.html. */
const directions = [
 {name:'Знакомство', title:'Сначала план<br>и цена.<br><em>Потом кресло.</em>', image:'hero', price:'Осмотр и план', intro:'Стоматология, где сумму называют до начала лечения. А снимок делают здесь же, на своём КТ.'},
 {name:'Лечение', title:'Сохраним<br><em>свой зуб.</em>', image:'hands', price:'от 4 800 ₽', intro:'Сначала план. Анестезия, материалы и контрольный осмотр входят в цену.', prices:[['Лечение кариеса','от 4 800 ₽'],['Лечение каналов','от 9 700 ₽'],['Удаление зуба','от 3 200 ₽']], doctor:1, person:'Ольга Сергеевна Мельникова', role:'Терапевт · стаж 14 лет'},
 {name:'Имплантация', title:'Снова улыбаться.<br><em>Без оглядки.</em>', image:'ct', price:'от 54 000 ₽', intro:'Планируем по снимку на своём КТ. Имплант, установка, абатмент и коронка включены в цену.', prices:[['Имплант под ключ','от 54 000 ₽'],['Коронка из циркония','28 500 ₽']], doctor:2, person:'Артём Дмитриевич Ковалёв', role:'Хирург-имплантолог · стаж 11 лет'},
 {name:'Гигиена', title:'Лёгкость после<br><em>одного визита.</em>', image:'talk', price:'5 900 ₽', intro:'Ультразвук, Air Flow, полировка и фторирование. Около часа, после приёма можно сразу есть.', prices:[['Профессиональная гигиена','5 900 ₽']], doctor:3, person:'Ирина Павловна Шевцова', role:'Гигиенист · стаж 17 лет'},
 {name:'Элайнеры', title:'Ваша улыбка.<br><em>По плану.</em>', image:'waiting', price:'от 160 000 ₽', intro:'Полный курс с планом, 3D-сетами и контрольными визитами раз в 8-10 недель.', prices:[['Курс на элайнерах','от 160 000 ₽']], doctor:4, person:'Кирилл Андреевич Батурин', role:'Ортодонт · стаж 9 лет'}
];
const stage=document.querySelector('.stage'), rail=document.querySelector('#rail'), story=document.querySelector('#story'), scene=document.querySelector('.scene'), photo=document.querySelector('#scene-photo'), bar=document.querySelector('#progress-bar');
const initialStory=story.innerHTML;
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let current=0,busy=false,elapsed=0,last=performance.now(),manualPause=false,hoverPause=false,touchPause=false,visible=true;
function renderCards(){
 rail.innerHTML=directions.map((d,i)=>i===current?'':`<button type="button" class="card" data-index="${i}" aria-label="${d.name}, ${d.price}"><div class="card-image"><img src="assets/img/${d.image}.jpg" alt="" decoding="async"></div><span class="card-body"><span class="card-name">${d.name}</span><span class="card-price">${d.price}</span></span></button>`).join('');
 rail.scrollLeft=0;
 rail.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>select(Number(card.dataset.index),card)));
}
function renderStory(){
 const d=directions[current];
 story.classList.toggle('detail',current!==0);
 story.innerHTML=current===0?initialStory:`<h1>${d.title}</h1><p class="intro">${d.intro}</p><div class="prices" aria-label="Цены направления">${d.prices.map(p=>`<div class="price-row"><span>${p[0]}</span><strong>${p[1]}</strong></div>`).join('')}</div><div class="doctor-mini"><img src="assets/img/doc-${d.doctor}.jpg" alt="" decoding="async"><span>${d.person}<small>${d.role}</small></span></div><a class="button story-cta" href="https://t.me/kedr_stom">Записаться <span>↗</span></a>`;
 document.querySelector('#current').textContent=d.name;
}
function select(index,card){
 if(busy||index===current)return;
 elapsed=0;bar.style.transform='scaleX(0)';
 if(motion.matches){current=index;photo.src=`assets/img/${directions[index].image}.jpg`;renderStory();renderCards();return;}
 busy=true;
 card=card||rail.querySelector(`[data-index="${index}"]`);
 const base=stage.getBoundingClientRect(),rect=card.querySelector('.card-image').getBoundingClientRect();
 const layer=document.createElement('div');layer.className='expand-layer';layer.innerHTML=`<img src="assets/img/${directions[index].image}.jpg" alt="" decoding="async">`;stage.insertBefore(layer,document.querySelector('.shade'));
 gsap.set(layer,{x:rect.left-base.left,y:rect.top-base.top,scaleX:rect.width/base.width,scaleY:rect.height/base.height});
 gsap.to(scene,{scale:1.08,opacity:.4,duration:.9,ease:'expo.inOut'});
 gsap.to(story,{opacity:0,y:-14,duration:.22});
 gsap.to(layer,{x:0,y:0,scaleX:1,scaleY:1,duration:.9,ease:'expo.inOut',onComplete:()=>{
 current=index;photo.src=`assets/img/${directions[index].image}.jpg`;gsap.set(scene,{scale:1,opacity:1,x:0,y:0});layer.remove();renderStory();renderCards();
 gsap.set(story,{opacity:1,y:0});
 const heading=story.querySelector('h1');heading.innerHTML=heading.innerHTML.replace(/([^<>\s]+)(?=[^<>]*(?:<|$))/g,'<span class="word">$1</span>');
 gsap.from(heading.querySelectorAll('.word'),{y:25,opacity:0,duration:.55,stagger:.06,ease:'power3.out'});
 gsap.from(story.querySelectorAll('.intro,.prices,.doctor-mini,.story-cta,.home-facts'),{y:14,opacity:0,duration:.5,stagger:.06});
 gsap.from(rail.querySelectorAll('.card'),{y:20,opacity:0,duration:.5,stagger:.05});busy=false;elapsed=0;
 }});
}
renderCards();
document.querySelector('#prev').addEventListener('click',()=>select((current+directions.length-1)%directions.length));
document.querySelector('#next').addEventListener('click',()=>select((current+1)%directions.length));
const pause=document.querySelector('#pause');
pause.addEventListener('click',()=>{if(touchPause){touchPause=false;manualPause=false;}else{manualPause=!manualPause;}hoverPause=false;pause.textContent=manualPause?'▷':'Ⅱ';pause.setAttribute('aria-pressed',String(manualPause));pause.setAttribute('aria-label',manualPause?'Продолжить смену направлений':'Приостановить смену направлений');});
stage.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||motion.matches||busy||innerWidth<=700)return;gsap.to(scene,{x:(e.clientX/innerWidth-.5)*36,y:(e.clientY/innerHeight-.5)*36,duration:1.2,ease:'power2.out'});gsap.to(story,{x:-(e.clientX/innerWidth-.5)*12,y:-(e.clientY/innerHeight-.5)*12,duration:1.2});});
rail.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')hoverPause=true;});rail.addEventListener('pointerleave',()=>hoverPause=false);
stage.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')touchPause=true;});
stage.addEventListener('focusin',e=>{if(e.target.id!=='pause')hoverPause=true;});stage.addEventListener('focusout',()=>hoverPause=false);
document.addEventListener('visibilitychange',()=>{last=performance.now();});
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;},{threshold:.5}).observe(stage);
function tick(now){const delta=Math.min(now-last,100);last=now;if(!motion.matches&&!busy&&!manualPause&&!hoverPause&&!touchPause&&visible&&!document.hidden){elapsed+=delta;bar.style.transform=`scaleX(${Math.min(elapsed/7000,1)})`;if(innerWidth<=700)scene.style.transform=`scale(${1+.05*elapsed/7000})`;if(elapsed>=7000)select((current+1)%directions.length);}requestAnimationFrame(tick);}
requestAnimationFrame(tick);
