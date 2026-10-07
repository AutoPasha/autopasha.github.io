/* ============================================================
   Кедр: поведение страницы.
   Библиотеки (lenis, gsap, ScrollTrigger) лежат локально в assets/js/lib.
   Если их нет или движение выключено, страница остаётся рабочей:
   каждый приём имеет запасной путь без библиотек.
   ============================================================ */
(function () {
  "use strict";

  /* пока скрипт жив, вёрстка может позволить себе движение */
  document.documentElement.classList.add("js");

  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduce = motion.matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var wide = window.matchMedia("(min-width: 901px)").matches;
  var roomy = window.matchMedia("(min-width: 1024px)").matches;

  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  if (gsap && ST) { gsap.registerPlugin(ST); }

  /* ---------- плавная прокрутка ---------- */
  var lenis = null;
  if (window.Lenis && !reduce) {
    try {
      lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
      if (gsap && ST) {
        lenis.on("scroll", ST.update);
        gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
      } else {
        var loop = function (time) { lenis.raf(time); window.requestAnimationFrame(loop); };
        window.requestAnimationFrame(loop);
      }
    } catch (err) { lenis = null; }
  }

  /* ---------- якоря: прокрутка с поправкой на шапку ---------- */
  document.addEventListener("click", function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link) return;
    var hash = link.getAttribute("href");
    if (!hash || hash.length < 2) return;
    var target;
    try { target = document.querySelector(hash); } catch (err) { return; }
    if (!target) return;
    e.preventDefault();
    var head = document.querySelector(".top");
    var offset = head ? -(head.offsetHeight + 10) : 0;
    if (lenis) lenis.scrollTo(target, { offset: offset });
    else if (target.scrollIntoView) target.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
    if (history.replaceState) history.replaceState(null, "", hash);
  });

  /* ---------- первый экран: кабинет приближается на закреплённой сцене ----------
     ScrollTrigger держит сцену (pin) на протяжении 120vh прокрутки и
     медленно ведёт --p от 0 к 1. Всё остальное движение первого экрана
     считается в CSS от этой переменной, поэтому сцена выглядит одинаково
     и на закреплении ScrollTrigger, и без него. */
  var heroSec = document.querySelector(".hero");
  var track = document.getElementById("hero-track");
  var stage = document.querySelector(".hero-stage");
  if (heroSec && track && stage) {
    var headH = function () {
      var head = document.querySelector(".top");
      return head ? head.offsetHeight : 78;
    };
    var setP = function (p) {
      var v = p < 0 ? 0 : p > 1 ? 1 : p;
      stage.style.setProperty("--p", v.toFixed(4));
    };
    var sceneOn = function () { return !reduce && window.matchMedia("(min-width: 901px)").matches; };

    var useGsap = false;
    if (sceneOn() && gsap && ST) {
      try {
        heroSec.classList.add("pinned");
        var proxy = { p: 0 };
        ST.create({
          trigger: stage,
          start: function () { return "top top+=" + headH(); },
          end: function () { return "+=" + Math.round(window.innerHeight * 1.2); },
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.35,
          invalidateOnRefresh: true,
          animation: gsap.to(proxy, {
            p: 1,
            ease: "none",
            onUpdate: function () { setP(proxy.p); }
          })
        });
        useGsap = true;
      } catch (err) {
        heroSec.classList.remove("pinned");
        useGsap = false;
      }
    }

    if (!useGsap) {
      /* запасной путь: то же движение вручную, закрепление делает css */
      var ticking = false;
      var drawHero = function () {
        ticking = false;
        var box = stage.getBoundingClientRect();
        var span = track.offsetHeight - stage.offsetHeight;
        var p;
        if (span > 4) p = -box.top / span;
        else p = box.top < -2 ? 1 : 0;
        setP(p);
      };
      var onScroll = function () {
        if (!ticking) { ticking = true; window.requestAnimationFrame(drawHero); }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      drawHero();
    }

    /* сцена выключена (телефон, движение выключено): светлый кабинет без сцены */
    if (!sceneOn()) setP(0);
  }

  /* ---------- страховка: текст первого экрана резкий, что бы ни случилось с анимацией ---------- */
  var sharp = function () { document.documentElement.classList.add("sharp"); };
  if (document.readyState === "complete") window.setTimeout(sharp, 900);
  else window.addEventListener("load", function () { window.setTimeout(sharp, 900); });

  /* ---------- первый визит: шаги сменяют друг друга на прокрутке ---------- */
  var steps = document.getElementById("steps");
  if (steps && gsap && ST && !reduce && roomy.matches) {
    var stepsTrack = document.getElementById("steps-track");
    var cards = [].slice.call(steps.querySelectorAll(".step"));
    var count = cards.length;
    if (stepsTrack && count > 1) {
      steps.classList.add("js-stack");
      gsap.set(cards, { opacity: 0, y: 46, scale: 0.986 });
      gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 });

      var tl = gsap.timeline({
        scrollTrigger: { trigger: stepsTrack, start: "top top", end: "bottom bottom", scrub: 0.4 }
      });
      for (var i = 1; i < count; i++) {
        tl.to(cards[i], { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out" }, i - 0.62);
        if (i < count - 1) tl.to(cards[i], { opacity: 0, y: -42, scale: 0.99, duration: 0.4, ease: "power2.in" }, i + 0.3);
      }

      var now = steps.querySelector(".steps-now");
      var bar = steps.querySelector(".steps-progress i");
      var prog = { p: 0 };
      var shown = -1;
      gsap.to(prog, {
        p: 1,
        ease: "none",
        scrollTrigger: { trigger: stepsTrack, start: "top top", end: "bottom bottom", scrub: 0.4 },
        onUpdate: function () {
          if (bar) stepsTrack.style.setProperty("--sp", prog.p.toFixed(4));
          var idx = Math.min(count - 1, Math.floor(prog.p * count));
          if (idx === shown) return;
          shown = idx;
          if (now) now.textContent = String(idx + 1);
          for (var c = 0; c < count; c++) cards[c].classList.toggle("is-on", c === idx);
        }
      });
    }
  }

  /* ---------- врачи: карточки въезжают по очереди, фото внутри едет с прокруткой ---------- */
  var doctors = document.querySelector(".doctors");
  var docCards = [].slice.call(document.querySelectorAll(".doc"));
  if (doctors && docCards.length) {
    var showCard = function (card) {
      var i = docCards.indexOf(card);
      card.style.setProperty("--d", (i > 0 ? i * 110 : 0) + "ms");
      card.classList.add("is-in");
      var img = card.querySelector(".doc-photo img");
      if (img && gsap && ST && !reduce) {
        gsap.fromTo(img,
          { yPercent: -7, scale: 1.12 },
          {
            yPercent: 7, scale: 1, ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true }
          });
      }
    };

    if (reduce || !("IntersectionObserver" in window)) {
      for (var v = 0; v < docCards.length; v++) showCard(docCards[v]);
    } else {
      var docIO = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            var card = entries[i].target;
            docIO.unobserve(card);
            showCard(card);
          }
        }
      }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
      for (var d3 = 0; d3 < docCards.length; d3++) docIO.observe(docCards[d3]);
      /* страховка: если что-то пошло не так, карточки всё равно покажутся */
      window.setTimeout(function () {
        for (var f = 0; f < docCards.length; f++) {
          var r = docCards[f].getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) showCard(docCards[f]);
        }
      }, 3500);
    }
  }

  /* ---------- прайс: цифры досчитываются до своей цены ---------- */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && !reduce) {
    var nf = new Intl.NumberFormat("ru-RU");
    var countTo = function (el) {
      if (el.getAttribute("data-counted")) return;
      el.setAttribute("data-counted", "1");
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var text = el.textContent;
      var dm = text.match(/\d[\d  ]*/);
      var digits = dm ? dm[0].replace(/[ ]+$/, "") : "";
      var at = dm && digits ? text.indexOf(digits) : -1;
      var pre = at > 0 ? text.slice(0, at) : "";
      var post = at >= 0 ? text.slice(at + digits.length) : "";
      if (!target) { el.textContent = text; return; }
      var started = null;
      var tick = function (time) {
        if (started === null) started = time;
        var k = Math.min(1, (time - started) / 1150);
        var e = 1 - Math.pow(1 - k, 3);
        el.textContent = pre + nf.format(Math.round(target * e)) + post;
        if (k < 1) window.requestAnimationFrame(tick);
        else el.textContent = pre + nf.format(target) + post;
      };
      window.requestAnimationFrame(tick);
    };
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) { countTo(entries[i].target); cio.unobserve(entries[i].target); }
        }
      }, { threshold: 0.4 });
      for (var c = 0; c < counters.length; c++) cio.observe(counters[c]);
    }
  }

  /* ---------- врачи: лёгкий наклон и бегущий блик ---------- */
  var tiltCards = document.querySelectorAll("[data-tilt]");
  if (tiltCards.length && fine && wide && !reduce) {
    for (var d = 0; d < tiltCards.length; d++) {
      (function (card) {
        card.addEventListener("pointermove", function (e) {
          var r = card.getBoundingClientRect();
          if (!r.width) return;
          var px = (e.clientX - r.left) / r.width;
          var py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--ry", ((px - 0.5) * 3.2).toFixed(2) + "deg");
          card.style.setProperty("--rx", ((0.5 - py) * 2.2).toFixed(2) + "deg");
          card.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
          card.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
        });
        card.addEventListener("pointerleave", function () {
          card.style.transitionDuration = ".6s";
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
          window.setTimeout(function () { card.style.transitionDuration = ""; }, 700);
        });
      }(tiltCards[d]));
    }
  }

  /* ---------- магнит на главных кнопках ---------- */
  var magnets = document.querySelectorAll("[data-magnet]");
  if (magnets.length && fine && !reduce) {
    for (var m = 0; m < magnets.length; m++) {
      (function (btn) {
        var rest = function () {
          btn.style.setProperty("--mx", "0px");
          btn.style.setProperty("--my", "0px");
        };
        btn.addEventListener("pointermove", function (e) {
          var r = btn.getBoundingClientRect();
          var dx = e.clientX - (r.left + r.width / 2);
          var dy = e.clientY - (r.top + r.height / 2);
          if (Math.abs(dx) < r.width / 2 + 70 && Math.abs(dy) < r.height / 2 + 40) {
            btn.style.setProperty("--mx", (dx * 0.2).toFixed(1) + "px");
            btn.style.setProperty("--my", (dy * 0.28).toFixed(1) + "px");
          } else { rest(); }
        });
        btn.addEventListener("pointerleave", rest);
      }(magnets[m]));
    }
  }

  /* ---------- тёмная полоса прокрутки, когда видны тёмные секции ---------- */
  var dark = document.querySelectorAll(".on-dark");
  if (dark.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          document.documentElement.classList.add("on-dark");
          return;
        }
      }
      document.documentElement.classList.remove("on-dark");
    }, { rootMargin: "-40% 0px -40% 0px" });
    for (var d2 = 0; d2 < dark.length; d2++) io.observe(dark[d2]);
  }

  /* ---------- меню на телефоне ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    var setNav = function (open) {
      nav.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };
    burger.addEventListener("click", function () { setNav(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setNav(false); burger.focus(); }
    });
  }

  /* ---------- открыто сейчас, время Новосибирска ---------- */
  var statusBlocks = document.querySelectorAll("[data-status-text]");
  if (statusBlocks.length) {
    var fmt = new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Asia/Novosibirsk", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    });
    var updateStatus = function () {
      var parts = fmt.formatToParts(new Date());
      var get = function (t) { for (var i = 0; i < parts.length; i++) if (parts[i].type === t) return parts[i].value; return ""; };
      var wd = get("weekday");
      var hh = parseInt(get("hour"), 10);
      var mm = parseInt(get("minute"), 10);
      var mins = hh * 60 + mm;
      var sunday = wd.indexOf("вс") === 0;
      var openFrom = sunday ? 600 : 480;      /* 10:00 или 8:00 */
      var openTo = sunday ? 1020 : 1260;      /* 17:00 или 21:00 */
      var open = mins >= openFrom && mins < openTo;
      var text = open
        ? (mins > openTo - 60 ? "Закрываемся в " + (sunday ? "17:00" : "21:00") : "Открыто до " + (sunday ? "17:00" : "21:00"))
        : (mins < openFrom ? "Откроемся в " + (sunday ? "10:00" : "8:00") : "Закрыто, откроемся в " + (sunday ? "10:00" : "8:00"));
      for (var i = 0; i < statusBlocks.length; i++) {
        var el = statusBlocks[i];
        el.textContent = text;
        var block = el.closest(".status");
        if (block) block.setAttribute("data-open", open ? "yes" : "no");
      }
    };
    updateStatus();
    window.setInterval(updateStatus, 30000);
  }

  /* ---------- запись: WhatsApp ---------- */
  var form = document.getElementById("zapis-form");
  if (form) {
    var digits = function (v) { return v.replace(/\D/g, ""); };
    var showError = function (id, on) {
      var msg = form.querySelector('[data-err-for="' + id + '"]');
      var wrap = document.getElementById(id).closest(".field");
      if (msg) msg.hidden = !on;
      if (wrap) wrap.classList.toggle("bad", on);
    };
    var ok = document.getElementById("form-ok");

    form.addEventListener("input", function (e) {
      if (e.target.id) showError(e.target.id, false);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var tel = document.getElementById("f-tel").value.trim();
      var time = document.getElementById("f-time").value;
      var about = document.getElementById("f-about").value.trim();

      showError("f-name", name.length < 2);
      showError("f-tel", digits(tel).length < 11);
      if (name.length < 2 || digits(tel).length < 11) {
        var bad = form.querySelector(".field.bad :is(input, select)");
        if (bad) bad.focus();
        return;
      }

      var text = "Здравствуйте! Запись в клинику «Кедр»." +
        "\nИмя: " + name +
        "\nТелефон: " + tel +
        "\nУдобное время: " + time +
        "\nЧто беспокоит: " + (about || "нужен осмотр и снимок");
      window.open("https://wa.me/73833125804?text=" + encodeURIComponent(text), "_blank", "noopener");
      if (ok) {
        ok.hidden = false;
        ok.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
      }
    });
  }

  /* ---------- пересчёт закреплённых сцен после загрузки шрифтов ---------- */
  if (ST) window.addEventListener("load", function () { ST.refresh(); });
})();
