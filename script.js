// =========================
// Brothers Taquizas — script.js
// =========================

// Auto-update footer year
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Mobile menu toggle
(function () {
  const btn = document.querySelector('.site-header__menu-btn');
  const nav = document.querySelector('.site-header__nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on nav-link click (mobile)
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// AJAX form submit (Formspree-compatible) — keeps the user on the page
(function () {
  const form = document.getElementById('cateringForm');
  if (!form) return;

  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    // If the form action still has FORM_ID, let the browser submit normally
    // so the user sees Formspree's own confirmation instead of a silent fail.
    if (form.action.includes('FORM_ID')) return;

    e.preventDefault();
    if (successEl) successEl.hidden = true;
    if (errorEl) errorEl.hidden = true;

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        if (successEl) successEl.hidden = false;
        // Optional: scroll the success message into view
        successEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        if (errorEl) errorEl.hidden = false;
      }
    } catch (err) {
      if (errorEl) errorEl.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
})();
