import sys
sys.path.insert(0, "/home/agent/.local/share/hh-pw")
from playwright.sync_api import sync_playwright
src, out, w, h = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
with sync_playwright() as pw:
    b = pw.chromium.launch(headless=True, args=["--no-sandbox"])
    p = b.new_page(viewport={"width": w, "height": h})
    p.goto("file://" + src); p.wait_for_timeout(500)
    p.screenshot(path=out)
    b.close()
