(function () {
  'use strict';

  /* ── Sticky nav: transparent → solid on scroll ──────────── */
  var masthead = document.getElementById('masthead');
  if (masthead) {
    function onScroll() {
      if (window.scrollY > 80) {
        masthead.classList.add('solid');
      } else {
        masthead.classList.remove('solid');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Budget chips: single-select ────────────────────────── */
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('on'); });
      chip.classList.add('on');
    });
  });

  /* ── Commission form: basic submit feedback ─────────────── */
  var form = document.getElementById('commission-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.send');
      if (btn) {
        var originalHTML = btn.innerHTML;
        btn.innerHTML = '<span>Förfrågan skickad ✓</span>';
        btn.style.background = 'var(--gold)';
        btn.style.color = 'var(--ink)';
        btn.disabled = true;
        setTimeout(function () {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
          form.reset();
          chips.forEach(function (c) { c.classList.remove('on'); });
        }, 3000);
      }
    });
  }

})();
