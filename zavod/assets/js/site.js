/* =========================================================
   Северсталькон: движение и поведение.
   Первый экран: каркас ангара виден сразу, прокрутка достраивает
   связи, прогоны, узлы и размер, потом проявляется фото готового
   объекта. Сцена собрана на GSAP ScrollTrigger.
   Ниже: заголовки по словам, магнитная кнопка, искры при нажатии,
   табло цен с перелистыванием цифр.
   ========================================================= */

document.documentElement.classList.add("js");

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined";
  var hasST = hasGsap && typeof window.ScrollTrigger !== "undefined";
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (hasST) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  function each(list, fn) {
    Array.prototype.forEach.call(list || [], fn);
  }

  /* ---------- Шапка ----------
     Первые 40 px шапка гаснет к низу поверх героя, дальше она сплошная:
     иначе текст секций, уходящий под логотип, читался бы сквозь неё.
     Состояние считаем один раз за кадр, слушатель пассивный. */
  var hd = document.getElementById("hd");
  var былоSolid = null;
  function headerState() {
    if (!hd) return;
    var solid = window.scrollY > 40;
    if (solid === былоSolid) return;
    былоSolid = solid;
    hd.classList.toggle("solid", solid);
  }
  headerState();
  var кадр = 0;
  window.addEventListener("scroll", function () {
    if (кадр) return;
    кадр = window.requestAnimationFrame(function () {
      кадр = 0;
      headerState();
    });
  }, { passive: true });
  window.addEventListener("resize", headerState, { passive: true });

  /* ---------- Мобильное меню ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.hidden;
      menu.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Меню");
      document.body.style.overflow = open ? "hidden" : "";
      document.body.classList.toggle("menu-open", open);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Появление блоков ---------- */
  var reveal = document.querySelectorAll(".rv");
  if (reveal.length) {
    if (reduced || !("IntersectionObserver" in window)) {
      each(reveal, function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.06 });
      each(reveal, function (el) { io.observe(el); });
    }
  }

  /* ---------- Заголовки появляются по словам ---------- */
  var headings = document.querySelectorAll(".h2");
  if (headings.length && hasGsap && !reduced && "IntersectionObserver" in window) {
    each(headings, function (el) {
      var text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!text || el.querySelector(".w")) return;

      var frag = document.createDocumentFragment();
      var words = text.split(" ");
      words.forEach(function (word, i) {
        var s = document.createElement("span");
        s.className = "w";
        s.textContent = word;
        frag.appendChild(s);
        if (i < words.length - 1) frag.appendChild(document.createTextNode(" "));
      });
      el.textContent = "";
      el.appendChild(frag);

      var spans = el.querySelectorAll(".w");
      var o = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          o.unobserve(entry.target);
          window.gsap.fromTo(spans,
            { yPercent: 70, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.055, ease: "power3.out", overwrite: true });
        });
      }, { threshold: 0.25 });
      o.observe(el);
    });
  }

  /* ---------- Сцена первого экрана ---------- */
  var hero = document.getElementById("hero");

  if (hero && hasST && !reduced) {
    /* Каркас прорисовывается линиями при загрузке: каждая балка
       выводится штрихом от основания вверх, дальше сцену ведёт прокрутка. */
    var base = [];
    each(document.querySelectorAll("#draw .dr"), function (el) {
      if (typeof el.getTotalLength !== "function") return;
      var len = el.getTotalLength();
      if (!len) return;
      el.style.strokeDasharray = len + " " + len;
      el.style.strokeDashoffset = len;
      base.push({ el: el, len: len });
    });
    if (base.length) {
      window.gsap.to(base.map(function (b) { return b.el; }), {
        strokeDashoffset: 0,
        duration: 0.55,
        delay: 0.18,
        ease: "power2.inOut",
        stagger: { each: 0.075, from: "start" },
        onComplete: function () {
          each(base, function (b) {
            b.el.style.strokeDasharray = "";
            b.el.style.strokeDashoffset = "";
          });
        }
      });
    }

    var items = [];
    each(document.querySelectorAll("#draw .dr-late"), function (el) {
      var a = parseFloat(el.getAttribute("data-a") || "0");
      var b = parseFloat(el.getAttribute("data-b") || "1");
      var targets = el.tagName.toLowerCase() === "g"
        ? Array.prototype.slice.call(el.querySelectorAll("line, polyline, circle, path"))
        : [el];
      targets.forEach(function (t) {
        if (typeof t.getTotalLength !== "function") return;
        var len = t.getTotalLength();
        if (!len) return;
        t.style.strokeDasharray = len + " " + len;
        t.style.strokeDashoffset = len;
        items.push({ el: t, len: len, a: a, b: b });
      });
    });

    var photo = document.getElementById("frame-photo");
    var bar = document.getElementById("hero-bar");
    var fcA = document.querySelector(".fc-a");
    var fcB = document.querySelector(".fc-b");
    var swapped = false;

    var tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.55,
        invalidateOnRefresh: true
      },
      onComplete: function () {
        window.gsap.set("#draw .dr-late.thin", { clearProps: "strokeDasharray,strokeDashoffset" });
      }
    });

    items.forEach(function (it) {
      tl.fromTo(it.el,
        { strokeDashoffset: it.len },
        { strokeDashoffset: 0, duration: Math.max(it.b - it.a, 0.02), ease: "none" },
        it.a);
    });

    if (photo) {
      tl.fromTo(photo,
        { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.3, ease: "power1.inOut" }, 0.62);
      tl.fromTo(photo, { yPercent: 2 }, { yPercent: 0, duration: 1, ease: "none" }, 0);
    }
    tl.to("#draw .dr, #draw .dr-late", { opacity: 0.12, duration: 0.18, ease: "none" }, 0.74);
    if (bar) tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "none" }, 0);

    tl.eventCallback("onUpdate", function () {
      var want = tl.progress() > 0.58;
      if (want === swapped) return;
      swapped = want;
      if (fcA) window.gsap.to(fcA, { autoAlpha: want ? 0 : 1, duration: 0.25, overwrite: true });
      if (fcB) window.gsap.to(fcB, { autoAlpha: want ? 1 : 0, duration: 0.25, overwrite: true });
    });
  } else if (hero) {
    /* Без движения: каркас и фото видны сразу */
    each(document.querySelectorAll("#draw .dr, #draw .dr-late"), function (el) {
      el.style.strokeDasharray = "";
      el.style.strokeDashoffset = "0";
    });
    var stillPhoto = document.getElementById("frame-photo");
    if (stillPhoto) { stillPhoto.style.opacity = "1"; stillPhoto.style.clipPath = "none"; }
  }

  /* ---------- Магнитная кнопка ---------- */
  if (hasGsap && !reduced && finePointer) {
    each(document.querySelectorAll("[data-magnet]"), function (el) {
      var strength = parseFloat(el.getAttribute("data-magnet")) || 2.4;
      var pad = 80;
      var pressed = false;
      var xTo = window.gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
      var yTo = window.gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

      window.addEventListener("pointermove", function (e) {
        if (pressed) return;
        var r = el.getBoundingClientRect();
        var cx = r.left + r.width / 2;
        var cy = r.top + r.height / 2;
        var near = Math.abs(e.clientX - cx) < r.width / 2 + pad &&
                   Math.abs(e.clientY - cy) < r.height / 2 + pad;
        if (near) {
          xTo((e.clientX - cx) / strength);
          yTo((e.clientY - cy) / strength);
        } else {
          xTo(0);
          yTo(0);
        }
      }, { passive: true });

      el.addEventListener("pointerdown", function () { pressed = true; xTo(0); yTo(0); });
      window.addEventListener("pointerup", function () { pressed = false; });
      el.addEventListener("blur", function () { xTo(0); yTo(0); });
    });
  }

  /* ---------- Искры при нажатии на главную кнопку ---------- */
  each(document.querySelectorAll(".btn-spark"), function (btn) {
    var canvas = btn.querySelector(".spark");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var sparks = [];
    var raf = 0;

    function size() {
      var r = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
    }
    size();
    window.addEventListener("resize", size, { passive: true });

    function frame(ts) {
      raf = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = sparks.length - 1; i >= 0; i--) {
        var s = sparks[i];
        var t = (ts - s.t) / 520;
        if (t >= 1) { sparks.splice(i, 1); continue; }
        var d = 1 - Math.pow(1 - t, 3);
        var len = 13 * (1 - t);
        ctx.strokeStyle = s.c;
        ctx.lineWidth = 2 * dpr;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo((s.x + d * s.r * Math.cos(s.a)) * dpr, (s.y + d * s.r * Math.sin(s.a)) * dpr);
        ctx.lineTo((s.x + (d * s.r + len) * Math.cos(s.a)) * dpr, (s.y + (d * s.r + len) * Math.sin(s.a)) * dpr);
        ctx.stroke();
      }
      if (sparks.length) raf = requestAnimationFrame(frame);
    }

    btn.addEventListener("pointerdown", function (e) {
      if (reduced) return;
      var r = canvas.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      var colors = ["#f3f0eb", "#dd6b2a", "#f3f0eb", "#f0a06a"];
      var now = (e.timeStamp || performance.now());
      for (var i = 0; i < 11; i++) {
        sparks.push({
          x: x, y: y,
          a: (Math.PI * 2 * i) / 11 + Math.random() * 0.5,
          r: 15 + Math.random() * 12,
          t: now,
          c: colors[i % colors.length]
        });
      }
      if (!raf) raf = requestAnimationFrame(frame);
    });
  });

  /* ---------- Табло цен: цифры перелистываются ---------- */
  var board = document.getElementById("flapboard");
  if (board) {
    var DIGITS = "0123456789";
    var cells = [];

    each(board.querySelectorAll("[data-flap]"), function (el) {
      var target = el.getAttribute("data-flap") || "";
      el.textContent = "";
      target.split("").forEach(function (ch) {
        var s = document.createElement("span");
        s.className = "flap";
        s.textContent = ch === " " ? "\u00a0" : ch;
        el.appendChild(s);
        if (ch >= "0" && ch <= "9") cells.push({ el: s, target: ch, left: 0, last: 0 });
      });
    });

    function settle() {
      cells.forEach(function (c) { c.left = 0; c.el.textContent = c.target; });
    }
    settle();

    if (!reduced && cells.length && "IntersectionObserver" in window) {
      var lastRun = 0;
      var raf = 0;

      function run(ts) {
        lastRun = ts;
        cells.forEach(function (c, i) {
          c.left = 6 + (i % 4);
          c.last = ts - i * 45;
        });
        if (!raf) raf = requestAnimationFrame(tick);
      }

      function tick(ts) {
        raf = 0;
        var pending = 0;
        cells.forEach(function (c) {
          if (c.left <= 0) return;
          pending++;
          if (ts - c.last >= 68) {
            c.last = ts;
            c.left--;
            c.el.textContent = c.left > 0 ? DIGITS.charAt(Math.floor(Math.random() * 10)) : c.target;
          }
        });
        if (!pending && ts - lastRun > 9000) {
          run(ts);
          return;
        }
        if (pending) raf = requestAnimationFrame(tick);
      }

      var bo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) run(performance.now());
          else bo.unobserve(entry.target);
        });
      }, { threshold: 0.3 });
      bo.observe(board);
    }
  }

  /* ---------- Файл в форме ---------- */
  var fileInput = document.getElementById("f-file");
  var fileName = document.getElementById("file-name");
  if (fileInput && fileName) {
    fileInput.addEventListener("change", function () {
      var f = fileInput.files && fileInput.files[0];
      fileName.textContent = f ? f.name : "файл не выбран";
    });
  }

  /* ---------- Форма расчёта: письмо на zakaz@ ---------- */
  var form = document.getElementById("calc-form");
  var status = document.getElementById("cf-status");

  function field(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var type = field("f-type");
      var vol = field("f-vol");
      var city = field("f-city");
      var phone = field("f-phone");
      var name = field("f-name");
      var file = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0].name : "нет";

      var missing = [];
      if (!vol) missing.push("объём");
      if (!phone) missing.push("телефон");
      if (missing.length) {
        if (status) status.textContent = "Допишите, пожалуйста: " + missing.join(" и ") + ".";
        var firstEmpty = !vol ? document.getElementById("f-vol") : document.getElementById("f-phone");
        if (firstEmpty) firstEmpty.focus();
        return;
      }

      var subject = "Расчёт: " + type + ", " + vol + (city ? ", " + city : "");
      var body = [
        "Здравствуйте, нужен расчёт по металлоконструкциям.",
        "",
        "Конструкция: " + type,
        "Объём: " + vol,
        "Город и адрес: " + (city || "не указан"),
        "Телефон: " + phone,
        "Имя: " + (name || "не указано"),
        "Файл чертежа: " + file,
        "",
        "Жду ответ в рабочее время.",
        "Отправлено с сайта severstalkon.ru"
      ].join("\n");

      if (status) status.textContent = "Открываем письмо на zakaz@severstalkon.ru, вложите файл чертежа и отправьте.";
      window.location.href =
        "mailto:zakaz@severstalkon.ru?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();