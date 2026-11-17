"""Темы макета из живого кабинета: web/lib/theme.ts (список) + web/app/globals.css (цвета).

python3 docs/design/kabinet-app/themes.py  →  docs/design/kabinet-app/themes.css

Павел 17.11 про v5: «у нас куча разных тем, у тебя тут только две». Макет берёт
те же 13 тем, что выбирает человек в настройках кабинета, а не рисует свои:
имена и цвета расходятся с кабинетом только если кто-то правит руками.
Цвета переводятся в переменные макета: void → --bg, coal → --card, coal-2 →
--card-2, white → --ink (у светлых тем «white» — тёмный текст), dim → --dim.
"""
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
WEB = HERE.parents[2] / 'web'
ts = (WEB / 'lib' / 'theme.ts').read_text()
css = (WEB / 'app' / 'globals.css').read_text()

themes = re.findall(r"id: '(\w+)',\s*label: '([^']+)',\s*note: '([^']+)',\s*scheme: '(dark|light)'", ts)
assert len(themes) == 13, f'тем в theme.ts {len(themes)}, ждали 13'

# база: :root без темы (это «уголь»-подобная тёмная по умолчанию)
root = re.search(r"@theme\s*{(.*?)\n}", css, re.S)
base = dict(re.findall(r"--color-([\w-]+):\s*([^;]+);", root.group(1))) if root else {}


def block(tid):
    m = re.search(r":root\[data-theme='%s'\]\s*{(.*?)\n}" % tid, css, re.S)
    v = dict(base)
    if m:
        v.update(re.findall(r"--color-([\w-]+):\s*([^;]+);", m.group(1)))
    for _ in range(4):  # var(--color-x) внутри значения — подставить из той же темы
        v = {k: re.sub(r"var\(--color-([\w-]+)\)", lambda r: v.get(r.group(1), r.group(0)), x) for k, x in v.items()}
    return v


out = ['/* Собрано themes.py из web/lib/theme.ts и web/app/globals.css. Руками не править. */']
for tid, label, note, scheme in themes:
    v = block(tid)
    g = lambda k, d=None: v.get(k, d)
    light = scheme == 'light'
    hot = g('hot', 'oklch(0.705 0.195 45)')
    out.append(f""".th-{tid}{{color-scheme:{scheme};
  --bg:{g('void')}; --card:{g('coal')}; --card-2:{g('coal-2')}; --ink:{g('white')}; --dim:{g('dim')}; --dim-2:{g('dim-dark')};
  --line:color-mix(in oklab,{g('line')} 70%,transparent); --hair:color-mix(in oklab,{g('line')} 55%,transparent);
  --hot:{hot}; --hot-ink:{g('hot-ink', g('hot-soft', hot))}; --hot-tint:color-mix(in oklab,{hot} {'16' if light else '22'}%,{g('coal')});
  --cream:{g('cream')}; --on-cream:{g('on-cream', 'oklch(0.235 0.012 60)')};
  --ok:{g('ok', 'oklch(0.72 0.15 150)')}; --warn:{g('warn', 'oklch(0.8 0.12 85)')}; --bad:{g('bad', 'oklch(0.65 0.18 25)')};
  --glass:color-mix(in oklab,{g('coal')} 86%,transparent); --glass-line:color-mix(in oklab,{g('line')} 60%,transparent);
  --tile-a:color-mix(in oklab,{hot} {'12' if light else '18'}%,{g('coal')}); --tile-b:{g('coal-2')};
  --sh:{'0 1px 1px rgba(60,30,0,.05),0 18px 36px -20px rgba(110,55,15,.28)' if light else '0 18px 38px -20px rgba(0,0,0,.9)'};
  --sh-up:{'0 18px 40px -14px rgba(110,55,15,.32)' if light else '0 20px 44px -14px rgba(0,0,0,.85)'};
}}""")
out.append('/* список для переключателя: id|название|схема|заметка */')
for tid, label, note, scheme in themes:
    out.append(f'/* @theme {tid}|{label}|{scheme}|{note} */')
(HERE / 'themes.css').write_text('\n'.join(out) + '\n')
print('тем:', len(themes))
