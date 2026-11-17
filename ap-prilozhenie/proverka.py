"""Обход макета приложения в браузере: каждый экран на 390×844 в светлой и тёмной теме.

16.11.2026 Павел про макет v2: «очень сырая версия, непродуманная». На снимках v2
плавающая панель вкладок и круглая кнопка закрывали последние строки лент, кнопка
«Дальше» наезжала на шаг подключения, поле ввода сидело поверх реплик. Глазами
это пропустили, потому что смотрели кадры по одному.

Что ловит (код выхода 1 и список, иначе 0):
  - ошибки страницы и консоли;
  - вылет за правый край (кроме лент, которые листаются вбок нарочно: .hs, .chips, с v6 .st-row, .fchips, .board);
  - перекрытие: видимый текст или кнопка, поверх которых лежит чужой элемент
    (проверка elementFromPoint по центру и углам), в том числе после прокрутки
    ленты до самого низа — так ловится «последняя строка под панелью»;
  - обрезанное: кнопка или текст, которые не влезли в неподвижный блок с
    overflow:hidden (так в v3 спряталась кнопка под полоской хода: имя класса
    плашки совпало с именем полоски);
  - нажимаемое мельче 36 точек по любой стороне;
  - текст мельче 11 точек.
Экраны с листом снизу проверяются внутри листа: тусклая подложка под ним задумана.

Запуск: python3 proverka.py <каталог макета> [<каталог для кадров>]
Нужен playwright с chromium. Сервер поднимается сам, внутри процесса.
"""
import functools
import http.server
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else Path(__file__).parent).resolve()
SHOTS = Path(sys.argv[2]) if len(sys.argv) > 2 else None
if SHOTS:
    SHOTS.mkdir(parents=True, exist_ok=True)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


Handler = functools.partial(Quiet, directory=str(ROOT))
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), Handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{srv.server_address[1]}/index.html'

PROBE = r"""
() => {
  const scr = document.querySelector('#stage .scr');
  const sheet = scr.querySelector('.sheet');
  const scope = sheet || scr;
  const W = scr.getBoundingClientRect();
  const bad = [];
  const name = (e) => (e.className && e.className.baseVal !== undefined ? e.className.baseVal : e.className) || e.tagName.toLowerCase();
  const label = (e) => (e.innerText || e.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 40);
  const visible = (e) => {
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) return false;
    const cs = getComputedStyle(e);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) return false;
    return true;
  };
  const inScroller = (e) => !!e.closest('.hs,.chips,.st-row,.fchips,.board,.mode2,.outfits');
  // клип: часть элемента, видимая внутри прокручиваемых предков
  const clipRect = (e) => {
    let r = e.getBoundingClientRect();
    let top = r.top, bottom = r.bottom, left = r.left, right = r.right;
    for (let p = e.parentElement; p && p !== scr.parentElement; p = p.parentElement) {
      const cs = getComputedStyle(p);
      if (/(auto|scroll|hidden)/.test(cs.overflowY + cs.overflowX)) {
        const q = p.getBoundingClientRect();
        top = Math.max(top, q.top); bottom = Math.min(bottom, q.bottom);
        left = Math.max(left, q.left); right = Math.min(right, q.right);
      }
    }
    return { top, bottom, left, right };
  };
  const leaves = [...scope.querySelectorAll('*')].filter((e) => {
    if (!visible(e) || e.closest('svg') || e.closest('.toast,.confetti,.dimmer,.mini')) return false;
    if (sheet && !e.closest('.sheet')) return false;
    const own = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    const tap = e.matches('button,a,[data-go],[data-act],[data-tab]');
    return own || tap;
  });
  for (const e of leaves) {
    const r = e.getBoundingClientRect();
    if (r.right > W.right + 1 && !inScroller(e)) bad.push(['вылет за край', name(e), label(e)]);
    const fs = parseFloat(getComputedStyle(e).fontSize);
    if (fs < 11 && [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) bad.push(['мелкий текст ' + fs, name(e), label(e)]);
    if (e.matches('button,a,[data-go],[data-act],[data-tab]') && !e.closest('.thread .bub') && (r.height < 36 || r.width < 36) && !e.matches('.shead a,.from a'))
      bad.push([`мелкая цель ${Math.round(r.width)}×${Math.round(r.height)}`, name(e), label(e)]);
    // обрезано: предок с overflow:hidden, который не прокручивается, отрезал больше десятой части
    for (let p = e.parentElement; p && !p.matches('.scr'); p = p.parentElement) {
      if (p.matches('.body,.sh-b,.hs,.chips,.st-row,.fchips,.board,.outfits')) break;
      const cs = getComputedStyle(p);
      if (!/(hidden|clip)/.test(cs.overflowX + cs.overflowY)) continue;
      const q = p.getBoundingClientRect();
      const w = Math.max(0, Math.min(r.right, q.right) - Math.max(r.left, q.left));
      const h = Math.max(0, Math.min(r.bottom, q.bottom) - Math.max(r.top, q.top));
      if (w * h < 0.9 * r.width * r.height) { bad.push(['обрезано', name(e) + ' в ' + name(p), label(e)]); break; }
    }
    const c = clipRect(e);
    if (c.bottom - c.top < 6 || c.right - c.left < 6) continue;   // целиком за краем прокрутки — это не перекрытие
    const pts = [[(c.left + c.right) / 2, (c.top + c.bottom) / 2], [c.left + 3, c.top + 3], [c.right - 3, c.bottom - 3]];
    for (const [x, y] of pts) {
      if (x < W.left || x > W.right || y < W.top || y > W.bottom) continue;
      const hit = document.elementFromPoint(x, y);
      if (!hit || hit === e || e.contains(hit) || hit.contains(e)) continue;
      if (hit.closest('.toast,.confetti')) continue;
      bad.push(['перекрыто', name(e) + ' ← ' + name(hit), label(e)]);
      break;
    }
  }
  return bad;
}
"""

errs, found = [], []
with sync_playwright() as p:
    b = p.chromium.launch(chromium_sandbox=False)
    pg = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=1)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    pg.goto(URL)
    ids = pg.evaluate("() => [...document.querySelectorAll('template[id^=\"s-\"]')].map(t => t.id.slice(2))")
    for theme in ('light&', 'dark&'):
        for sid in ids:
            pg.goto(f'{URL}?{theme}{sid}#{sid}')
            pg.wait_for_timeout(650)
            for where in ('верх', 'низ'):
                if where == 'низ':
                    pg.evaluate("() => document.querySelectorAll('#stage .body, #stage .sh-b').forEach(b => b.scrollTo(0, 1e5))")
                    pg.wait_for_timeout(150)
                for kind, el, text in pg.evaluate(PROBE):
                    found.append(f'{sid} [{theme}{where}] {kind}: {el} «{text}»')
                if SHOTS:
                    pg.screenshot(path=str(SHOTS / f'{sid}-{theme[:-1]}-{where}.png'))
    b.close()
srv.shutdown()

found = sorted(set(found))
print(f'экранов: {len(ids)}, тем: 2, ошибок страницы: {len(errs)}, замечаний: {len(found)}')
for e in errs[:20]:
    print('  ошибка:', e)
for f in found[:120]:
    print(' ', f)
sys.exit(1 if errs or found else 0)
