/**
 * Brothers Taquizas — Language Switcher (EN ↔ ES)
 *
 * How it works:
 *  1. On page load, checks localStorage for the user's saved language.
 *     If none saved, auto-detects Spanish browser and defaults to ES.
 *  2. Walks the DOM once, finds every text node whose content matches
 *     a key in window.__I18N_DICT__, and stores the ORIGINAL English
 *     as data-en on the parent element for later restoration.
 *  3. If active language is Spanish, replaces the text with the translation.
 *  4. The toggle button swaps between EN and ES, persists the choice,
 *     and updates <html lang="..."> for SEO/accessibility.
 */
(function () {
  const DICT = window.__I18N_DICT__ || {};
  const STORAGE_KEY = 'bt-lang';

  function decodeEntities(s) {
    const el = document.createElement('textarea');
    el.innerHTML = s;
    return el.value;
  }

  // Build a lookup where the KEY is the decoded English (what actually appears
  // in text nodes) and the VALUE is the decoded Spanish translation.
  const LOOKUP = {};
  Object.keys(DICT).forEach(function (rawEn) {
    const en = decodeEntities(rawEn).trim();
    const es = decodeEntities(DICT[rawEn]).trim();
    if (en && es && en !== es) LOOKUP[en] = es;
  });

  // Walk every text node in the body and mark elements whose direct text
  // matches a translation key. Store English on the element for round-trip.
  function markTranslatables() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          const p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          const tag = p.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
          if (p.closest('[data-no-i18n]')) return NodeFilter.FILTER_REJECT;
          const txt = node.nodeValue && node.nodeValue.trim();
          return txt && LOOKUP[txt] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );
    const marks = [];
    let n;
    while ((n = walker.nextNode())) marks.push(n);
    marks.forEach(function (textNode) {
      const trimmed = textNode.nodeValue.trim();
      // Store both en & es directly on the text node's parent using a data attr
      // scoped to a unique index we track on the node itself.
      if (!textNode.__bt_original) textNode.__bt_original = textNode.nodeValue;
    });
    return marks;
  }

  // Handle placeholders (form inputs)
  const PLACEHOLDER_ELEMENTS = [];
  function markPlaceholders() {
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      const en = el.getAttribute('placeholder').trim();
      if (LOOKUP[en]) {
        el.__bt_placeholder_en = en;
        PLACEHOLDER_ELEMENTS.push(el);
      }
    });
  }

  // Handle select options
  const OPTION_ELEMENTS = [];
  function markOptions() {
    document.querySelectorAll('option').forEach(function (el) {
      const en = el.textContent.trim();
      if (LOOKUP[en]) {
        el.__bt_option_en = en;
        OPTION_ELEMENTS.push(el);
      }
    });
  }

  // Handle title, meta description, alt
  const META_TARGETS = [];
  function markMeta() {
    // Update <title>
    if (document.title && LOOKUP[document.title.trim()]) {
      document.__bt_title_en = document.title;
      META_TARGETS.push({ type: 'title' });
    }
    // Update <meta name="description">
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const c = metaDesc.getAttribute('content').trim();
      if (LOOKUP[c]) {
        metaDesc.__bt_desc_en = c;
        META_TARGETS.push({ type: 'meta', el: metaDesc });
      }
    }
  }

  const TEXT_NODES = markTranslatables();
  markPlaceholders();
  markOptions();
  markMeta();

  function applyLang(lang) {
    document.documentElement.lang = (lang === 'es') ? 'es' : 'en';

    // Text nodes
    TEXT_NODES.forEach(function (node) {
      const originalTrimmed = (node.__bt_original || node.nodeValue).trim();
      const original = node.__bt_original || node.nodeValue;
      if (lang === 'es' && LOOKUP[originalTrimmed]) {
        node.nodeValue = original.replace(originalTrimmed, LOOKUP[originalTrimmed]);
      } else {
        node.nodeValue = original;
      }
    });

    // Placeholders
    PLACEHOLDER_ELEMENTS.forEach(function (el) {
      const en = el.__bt_placeholder_en;
      el.setAttribute('placeholder', (lang === 'es' && LOOKUP[en]) ? LOOKUP[en] : en);
    });

    // Options
    OPTION_ELEMENTS.forEach(function (el) {
      const en = el.__bt_option_en;
      el.textContent = (lang === 'es' && LOOKUP[en]) ? LOOKUP[en] : en;
    });

    // Toggle button visual state
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.setAttribute('data-active', lang);
      const enBtn = btn.querySelector('[data-lang="en"]');
      const esBtn = btn.querySelector('[data-lang="es"]');
      if (enBtn) enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      if (esBtn) esBtn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
    });
  }

  // Wire up all toggle buttons
  function bindToggle() {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const target = e.target.closest('[data-lang]');
        if (!target) return;
        const lang = target.getAttribute('data-lang');
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
      });
    });
  }

  // Determine initial language
  function initialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
    // Auto-detect Spanish browser
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  bindToggle();
  applyLang(initialLang());
})();
