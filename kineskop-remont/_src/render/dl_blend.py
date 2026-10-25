import json, os, sys, urllib.request
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) Chrome/130"}
res = sys.argv[1]
out = sys.argv[2]
for aid in sys.argv[3:]:
    d = json.load(urllib.request.urlopen(urllib.request.Request(f"https://api.polyhaven.com/files/{aid}", headers=UA)))
    b = d["blend"].get(res) or d["blend"]["2k"]
    b = b["blend"]
    dst = os.path.join(out, aid)
    os.makedirs(dst, exist_ok=True)
    items = [(os.path.basename(b["url"]), b["url"])] + [(k, v["url"]) for k, v in b.get("include", {}).items()]
    for rel, url in items:
        p = os.path.join(dst, rel)
        os.makedirs(os.path.dirname(p), exist_ok=True)
        if os.path.exists(p):
            continue
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA)) as r, open(p, "wb") as f:
            f.write(r.read())
    print(aid, len(items), "files")
