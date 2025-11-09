// Inject footer component markup and styles into every page
(function () {
  const injectStylesheet = () => {
    const href = 'components/footer.css';
    if ([...document.styleSheets].some(ss => ss.href && ss.href.includes(href))) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  const injectFooter = async () => {
    injectStylesheet();
    try {
      // Avoid duplicate injection
      if (document.querySelector('.site-footer')) return;
      const res = await fetch('components/footer.html', { cache: 'no-cache' });
      const html = await res.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      const footer = wrapper.firstElementChild;
      if (!footer) return;
      document.body.appendChild(footer);
      // Set current year
      const yearEl = footer.querySelector('[data-year]');
      if (yearEl) yearEl.textContent = String(new Date().getFullYear());
      // Ensure mailto links are correct
      const email = 'tommasotabacchi7@gmail.com';
      const cta = footer.querySelector('.footer-cta');
      const idCardLink = footer.querySelector('.id-card-link');
      if (cta) cta.href = `mailto:${email}`;
      if (idCardLink) idCardLink.href = `mailto:${email}`;
    } catch (err) {
      console.warn('Failed to load footer component', err);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();