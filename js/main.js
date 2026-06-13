// translations.js must load before this file

let currentLang = localStorage.getItem('lang') || 'es';

// ── TRANSLATE ─────────────────────────────────────────────
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  const pageKey = document.body.dataset.page;
  if (pageKey && t[pageKey]) document.title = t[pageKey];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  document.querySelectorAll('[data-i18n-tags]').forEach(el => {
    const v = t[el.dataset.i18nTags];
    if (v !== undefined) {
      el.innerHTML = v.split(',')
        .map(tag => `<span class="tag">${tag.trim()}</span>`)
        .join('');
    }
  });

  document.querySelectorAll('[data-i18n-bullets]').forEach(el => {
    const v = t[el.dataset.i18nBullets];
    if (v !== undefined) {
      el.innerHTML = v.split('|')
        .map(b => `<li>${b.trim()}</li>`)
        .join('');
    }
  });

  // Update expand button text respecting open/closed state
  document.querySelectorAll('.expand-btn').forEach(btn => {
    const span = btn.querySelector('.btn-text');
    if (span) {
      span.textContent = btn.classList.contains('open')
        ? (t['btn.less'] || 'Show less')
        : (t['btn.more'] || 'Show more');
    }
  });

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// ── SHOW MORE / LESS — global so onclick="toggleExpand()" works ──
function toggleExpand(expandId, btn) {
  const panel = document.getElementById(expandId);
  if (!panel) return;
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  const span = btn.querySelector('.btn-text');
  if (span) {
    const t = translations[currentLang];
    span.textContent = isOpen
      ? (t['btn.less'] || 'Show less')
      : (t['btn.more'] || 'Show more');
  }
}

// ── SLIDERS — global so onclick="slideMove()" works ──────
function slideMove(sliderId, dir) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const track = slider.querySelector('.slider-track');
  const imgs  = track.querySelectorAll('img');
  const dots  = slider.querySelectorAll('.slider-dot');
  let current = parseInt(slider.dataset.current || '0');
  current = (current + dir + imgs.length) % imgs.length;
  slider.dataset.current = current;
  track.style.transform  = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  applyTranslations(currentLang);

  // Lang toggle button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', currentLang);
      applyTranslations(currentLang);
    });
  }

  // Nav: always white, no scroll class needed
  // (kept for future use if design changes)

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // Slider dots
  document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const slider = dot.closest('.slider');
      if (!slider) return;
      const target  = parseInt(dot.dataset.index);
      const current = parseInt(slider.dataset.current || '0');
      slideMove(slider.id, target - current);
    });
  });

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const t   = translations[currentLang];
      btn.textContent = '...';
      btn.disabled    = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          btn.textContent      = t['cont.f.sent'] || 'Enviado ✓';
          btn.style.background = '#0D9488';
          form.reset();
        } else {
          btn.textContent = 'Error — intenta de nuevo';
          btn.disabled    = false;
        }
      } catch {
        btn.textContent = 'Error — intenta de nuevo';
        btn.disabled    = false;
      }
    });
  }

});