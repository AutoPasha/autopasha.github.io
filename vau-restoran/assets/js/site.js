(() => {
'use strict';
const frames = [
 ['hero-autumn','Урал.','На вкус.','Меню осени · Средний чек 1 700 ₽','осень','Осенний вечер в бистро'],
 ['soup','Из леса.','К вашему столу.','Суп из белых грибов · 540 ₽','осень','Суп из белых грибов'],
 ['forel','Из Режа.','С облепихой.','Форель из Режа · 980 ₽','осень','Форель с облепиховым соусом'],
 ['medovik','Ещё немного.','Сладкого.','Медовик с брусникой · 390 ₽','осень','Медовик с брусникой'],
 ['chef','У кухни есть','свой почерк.','Денис Курбатов · Шеф и совладелец','кухня','Шеф на кухне бистро'],
 ['fire','Живой огонь.','Тёплый обед.','Бизнес-ланч 490 ₽ · В будни с 12:00 до 16:00','кухня','Живой огонь в печи'],
 ['table','Собраться.','За столом.','До 40 гостей · Банкетное меню от 3 900 ₽','вечер','Накрытый стол со свечами'],
 ['veranda','Вечер длиннее.','Летом.','Веранда на 24 места · С 1 июня по 31 августа','лето','Вечер на веранде'],
 ['farmer','Ближе к земле.','Ближе к сезону.','Зелень и овощи из своего огорода','огород','Фермер и сезонные продукты'],
 ['hero-winter','За окном снег.','Внутри тепло.','Зимнее меню · С 1 декабря','зима','Зимний вечер у печи'],
 ['hero-spring','Первая зелень.','Новый вкус.','Весеннее меню · С 1 марта','весна','Весенняя зелень на столе'],
 ['hero-summer','Дольше свет.','Больше лета.','Летнее меню · С 1 июня','лето','Летний вечер в бистро']
];
const photos = document.querySelector('#photos');
const copy = document.querySelector('#frame-copy');
const title = document.querySelector('#title');
const fact = document.querySelector('#fact');
const booking = document.querySelector('#booking');
const number = document.querySelector('#frame-number');
const progress = document.querySelector('#progress');
let current = -1;
let wasLeaving = false;
frames.slice(1).forEach((f) => {
 const img = document.createElement('img');
 img.className = 'photo'; img.src = `assets/img/${f[0]}.jpg`; img.alt = f[5]; img.decoding = 'async'; img.loading = 'lazy'; photos.append(img);
});
const images = [...photos.children];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const ns = 'http://www.w3.org/2000/svg';
const makeSVG = (tag, attrs) => {const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([key,value])=>el.setAttribute(key,value));return el;};
const scale = document.querySelector('#scale');
for(let i=0;i<120;i++){
 const a=i*3*Math.PI/180, major=i%10===0;
 const r=major?332:340;
 scale.append(makeSVG('line',{x1:400+Math.sin(a)*r,y1:400-Math.cos(a)*r,x2:400+Math.sin(a)*347,y2:400-Math.cos(a)*347}));
}
['1.8','2.8','4','5.6','8','11','16','22'].forEach((n,i)=>{
 const a=(i*45+22)*Math.PI/180;
 const text=makeSVG('text',{x:400+Math.sin(a)*319,y:404-Math.cos(a)*319,'text-anchor':'middle',class:'fnum'});text.textContent=`f/${n}`;scale.append(text);
});
const blades=[];
for(let i=0;i<7;i++){
 const g=makeSVG('g',{transform:`rotate(${i*360/7})`});
 const blade=makeSVG('path',{d:'M 0 0 Q 240 -100 620 -95 L 5200 -450 L 5200 5700 L 570 770 Q 240 300 0 0',class:'blade'});
 g.append(blade);document.querySelector('#blades').append(g);blades.push(blade);
}
const bladeSetters=blades.map(el=>gsap.quickSetter(el,'rotation','deg'));
// При раскрытии ближайшая к центру кромка находится за половиной диагонали окна.
// Запас также покрывает смещение диафрагмы вслед за курсором.
gsap.set(blades,{svgOrigin:'5000 0',rotation:38});
const sizeIris=()=>document.documentElement.style.setProperty('--iris-size',`${Math.hypot(innerWidth,innerHeight)*1.08}px`);
sizeIris();addEventListener('resize',sizeIris);
function fitTitle(){
 title.style.fontSize='';
 const budget=Math.min(innerWidth-40,900);
 const width=title.getBoundingClientRect().width;
 if(width>budget)title.style.fontSize=`${parseFloat(getComputedStyle(title).fontSize)*budget/width}px`;
}
addEventListener('resize',fitTitle);
document.fonts.ready.then(fitTitle);
function setTitle(f){
 title.replaceChildren();title.setAttribute('aria-label',`${f[1]} ${f[2]}`);
 [f[1],f[2]].forEach((line,i)=>{
 const row=document.createElement(i?'em':'span');row.className='title-line';row.setAttribute('aria-hidden','true');
 [...line].forEach(char=>{const span=document.createElement('span');span.className='letter';span.textContent=char;row.append(span);});title.append(row);
 });
 fitTitle();
}
function show(index,animate=true){
 if(index===current)return;
 current=index;
 wasLeaving=false;
 images.forEach((img,i)=>img.classList.toggle('active',i===index));
 copy.hidden=index===frames.length;copy.style.display=index===frames.length?'none':'flex';
 booking.hidden=index!==frames.length;document.body.classList.toggle('na-brone',index===frames.length);
 number.textContent=index===frames.length?'ваш стол':`${frames[index][4]} · ${index+1}/${frames.length}`;
 [...progress.children].forEach((b,i)=>{b.classList.toggle('active',i===index);});
 progress.setAttribute('aria-label',`Кадр ${index+1} из ${frames.length+1}`);
 if(index<frames.length){
  setTitle(frames[index]);fact.textContent=frames[index][3];
  if(animate){gsap.fromTo(title.querySelectorAll('.letter'),{yPercent:105,opacity:0},{yPercent:0,opacity:1,duration:.55,stagger:.04,ease:'power3.out',overwrite:true});}
  if(images[index+1])images[index+1].loading='eager';
 }
}
let trigger;
function go(index){
 if(reduced.matches){document.querySelector(index===frames.length?'#booking':`#static-${index}`).scrollIntoView();return;}
 if(trigger)window.scrollTo({top:trigger.start+Math.min(index,frames.length)*innerHeight,behavior:'smooth'});
}
frames.concat([null]).forEach((f,i)=>{const b=document.createElement('span');b.className='tick';b.setAttribute('aria-hidden','true');progress.append(b);});
document.querySelectorAll('a[href="#booking"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go(frames.length);}));
document.querySelector('.brand').addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});});
document.querySelector('#next').addEventListener('click',()=>go(current<frames.length?current+1:0));
function setup(){
 if(trigger){trigger.kill();trigger=null;}
 document.querySelectorAll('.static-frame').forEach(el=>el.remove());
 document.documentElement.classList.toggle('reduced',reduced.matches);
 if(reduced.matches){
  frames.forEach((f,i)=>{const section=document.createElement('section');section.className='static-frame';section.id=`static-${i}`;const img=document.createElement('img');img.src=`assets/img/${f[0]}.jpg`;img.alt=f[5];img.loading=i?'lazy':'eager';img.decoding='async';const h=document.createElement('h2');h.append(document.createTextNode(f[1]),document.createElement('br'));const em=document.createElement('em');em.textContent=f[2];h.append(em);const p=document.createElement('p');p.className='fact';p.textContent=f[3];section.append(img,h,p);booking.before(section);});booking.hidden=false;return;
 }
 gsap.registerPlugin(ScrollTrigger);
 show(0,false);
 trigger=ScrollTrigger.create({trigger:'#story',start:'top top',end:()=>`+=${frames.length*innerHeight}`,scrub:.6,animation:gsap.to({p:0},{p:frames.length,duration:1,ease:'none',onUpdate:function(){
  const p=this.targets()[0].p;
  const step=Math.min(Math.floor(p),frames.length-1),local=p-step;
  const t=local<.35?0:local<.5?(local-.35)/.15:local<.65?1-(local-.5)/.15:0;
  const index=Math.min(step+(local>=.5?1:0),frames.length);
  show(index);
  bladeSetters.forEach(set=>set(38*(1-t)));
  copy.style.opacity=Math.min(1,(1-t)*2);
  booking.style.opacity=Math.min(1,(1-t)*2);
  gsap.set(scale,{rotation:p*12,svgOrigin:'400 400'});
  if(index<frames.length){const hold=local<.5?Math.min(local/.35,1):Math.max((local-.65)/.35,0);gsap.set(images[index],{scale:1.03+hold*.06});
   const leave=local>.35&&local<.5?(local-.35)/.15:0;
   if(leave){gsap.killTweensOf(title.querySelectorAll('.letter'));gsap.set(title.querySelectorAll('.letter'),{yPercent:leave*105,opacity:1-leave});wasLeaving=true;}
   else if(wasLeaving){gsap.set(title.querySelectorAll('.letter'),{yPercent:0,opacity:1});wasLeaving=false;}
  }
 }})});
}
setup();reduced.addEventListener('change',()=>location.reload());
if(matchMedia('(pointer:fine)').matches&&!reduced.matches){
 const movePhotoX=gsap.quickTo(photos,'x',{duration:.65}),movePhotoY=gsap.quickTo(photos,'y',{duration:.65});
 const moveIrisX=gsap.quickTo('.iris','x',{duration:.8}),moveIrisY=gsap.quickTo('.iris','y',{duration:.8});
 addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*24,y=(e.clientY/innerHeight-.5)*24;movePhotoX(x);movePhotoY(y);moveIrisX(x*.3);moveIrisY(y*.3);});
}
})();
