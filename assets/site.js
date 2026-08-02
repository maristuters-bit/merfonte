/* Merfonte — reveal on scroll + sticky header.
   Degrades to fully visible without JS or IntersectionObserver. */
(function () {

  /* ---------- sticky header ---------- */
  var bar = document.getElementById('topbar');
  var hero = document.querySelector('.hero');

  var ripple = document.querySelector('.ripple');
  var mark   = document.querySelector('.hero-mark');
  var calm   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  /* Must mirror the body gradient in style.css. The bar samples the same
     ramp at its own position, so it never becomes a plate on the page. */
  var STOPS = [
    [0.00, 0x10, 0x1b, 0x2d],
    [0.18, 0x15, 0x22, 0x38],
    [0.55, 0x1a, 0x2c, 0x44],
    [1.00, 0x22, 0x38, 0x56]
  ];

  function shadeAt(t) {
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    for (var i = 1; i < STOPS.length; i++) {
      if (t <= STOPS[i][0]) {
        var a = STOPS[i - 1], b = STOPS[i];
        var k = (t - a[0]) / (b[0] - a[0]);
        return [
          Math.round(a[1] + (b[1] - a[1]) * k),
          Math.round(a[2] + (b[2] - a[2]) * k),
          Math.round(a[3] + (b[3] - a[3]) * k)
        ];
      }
    }
    var last = STOPS[STOPS.length - 1];
    return [last[1], last[2], last[3]];
  }

  function frame() {
    var y = window.scrollY;
    var h = hero ? hero.offsetHeight : 0;

    if (bar && hero) {
      var past = y > h * 0.7;
      bar.classList.toggle('visible', past);
      bar.setAttribute('aria-hidden', past ? 'false' : 'true');

      /* tint the bar with the shade of page sitting directly behind it */
      var docH = document.documentElement.scrollHeight;
      if (docH > 0) {
        var c = shadeAt((y + bar.offsetHeight * 0.5) / docH);
        bar.style.backgroundColor =
          'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',.86)';
      }
    }

    if (!calm && h && y < h * 1.3) {
      /* progress out of the hero, 0 → 1 */
      var p = Math.min(1, y / (h * 0.82));
      var ease = p * p;               /* holds still, then leaves quickly */

      /* the lockup sinks and dissolves rather than sliding off */
      if (mark) {
        mark.style.opacity = (1 - ease).toFixed(3);
        mark.style.transform = 'translateY(' + (ease * 46).toFixed(1) + 'px)';
      }

      /* rings drift down slower — that difference is what reads as depth */
      if (ripple) {
        ripple.style.opacity = (1 - ease * 0.85).toFixed(3);
        ripple.style.transform =
          'translate(-50%, calc(-50% + ' + (y * 0.18).toFixed(1) + 'px))';
      }
    }

    ticking = false;
  }

  if (bar && hero) {
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    }, { passive: true });
    frame();
  }

  /* ---------- reveal ---------- */
  var items = document.querySelectorAll('.r');
  if (!items.length) return;

  function showAll() {
    for (var i = 0; i < items.length; i++) items[i].classList.add('in');
  }

  if (!('IntersectionObserver' in window)) { showAll(); return; }

  /* Two frames of delay so the hidden state is painted before anything
     already in view gets its .in class — otherwise the browser skips
     the transition and elements simply appear. */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = parseInt(el.dataset.delay || '0', 10);
          setTimeout(function () { el.classList.add('in'); }, delay);
          io.unobserve(el);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

      for (var i = 0; i < items.length; i++) io.observe(items[i]);
    });
  });

})();
