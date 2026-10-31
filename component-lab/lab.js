'use strict';

const tabs = [...document.querySelectorAll('[role="tab"]')];
const indicator = document.querySelector('.tab-indicator');
function positionIndicator() {
  const active = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
  indicator.style.width = `${active.offsetWidth}px`;
  indicator.style.transform = `translateX(${active.offsetLeft}px)`;
}
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
  positionIndicator();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    const targets = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    selectTab(tabs[targets[event.key]], true);
  });
});
new ResizeObserver(positionIndicator).observe(document.querySelector('.tabs'));
document.fonts.ready.then(positionIndicator);

const expand = document.querySelector('.expand');
const details = document.getElementById('result-details');
function setExpanded(open) {
  expand.setAttribute('aria-expanded', String(open));
  expand.querySelector('span').textContent = open ? 'свернуть подробности' : 'посмотреть, что внутри';
  details.inert = !open;
  details.setAttribute('aria-hidden', String(!open));
  details.classList.toggle('open', open);
}
expand.addEventListener('click', () => setExpanded(expand.getAttribute('aria-expanded') !== 'true'));
document.querySelector('.result-card').addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setExpanded(false);
    expand.focus();
  }
});

const input = document.getElementById('files-input');
const zone = document.querySelector('.dropzone');
const list = document.querySelector('.file-list');
const error = document.getElementById('file-error');
let files = [];
const maxSize = 10 * 1024 * 1024;
const sameFile = (a, b) => a.name === b.name && a.size === b.size && a.lastModified === b.lastModified;
function showFiles(focusIndex = null) {
  list.replaceChildren();
  files.forEach((file, index) => {
    const row = document.createElement('div');
    row.className = 'file-row';
    const name = document.createElement('span');
    name.className = 'file-name';
    name.textContent = file.name;
    const size = document.createElement('span');
    size.className = 'file-size';
    size.textContent = file.size >= 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(1)} МБ` : `${Math.max(1, Math.ceil(file.size / 1024))} КБ`;
    const remove = document.createElement('button');
    remove.className = 'remove-file';
    remove.setAttribute('aria-label', `Убрать ${file.name}`);
    remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
    remove.addEventListener('click', () => {
      files.splice(index, 1);
      error.textContent = '';
      showFiles(Math.min(index, files.length - 1));
    });
    row.append(name, size, remove);
    list.append(row);
  });
  if (focusIndex !== null) {
    const next = list.querySelectorAll('button')[focusIndex];
    (next || document.querySelector('.pick')).focus();
  }
}
function addFiles(incoming) {
  const problems = [];
  for (const file of incoming) {
    if (file.size === 0 && file.type === '') { problems.push(`«${file.name}»: пустой файл или папка. Выберите непустой файл.`); continue; }
    if (file.size > maxSize) { problems.push(`«${file.name}» больше 10 МБ. Выберите файл поменьше.`); continue; }
    if (files.some(existing => sameFile(existing, file))) continue;
    if (files.length >= 5) { problems.push('Можно добавить только пять файлов. Уберите один, чтобы выбрать другой.'); break; }
    files.push(file);
  }
  error.textContent = problems.join(' ');
  showFiles();
}
document.querySelector('.pick').addEventListener('click', () => input.click());
input.addEventListener('change', () => { addFiles([...input.files]); input.value = ''; });
let dragDepth = 0;
zone.addEventListener('dragenter', event => { event.preventDefault(); dragDepth += 1; zone.classList.add('dragging'); });
zone.addEventListener('dragover', event => { event.preventDefault(); event.dataTransfer.dropEffect = 'copy'; });
zone.addEventListener('dragleave', event => { event.preventDefault(); if (--dragDepth <= 0) { dragDepth = 0; zone.classList.remove('dragging'); } });
zone.addEventListener('drop', event => {
  event.preventDefault();
  dragDepth = 0;
  zone.classList.remove('dragging');
  addFiles([...event.dataTransfer.files]);
});
// Перетаскивание мимо поля не должно увести человека со стенда.
window.addEventListener('dragover', event => event.preventDefault());
window.addEventListener('drop', event => event.preventDefault());
