// Inject corner menu markup and styles into every page
(function () {
  const injectStylesheet = () => {
    const href = 'components/menu.css';
    if ([...document.styleSheets].some(ss => ss.href && ss.href.includes(href))) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  const isMobileLike = () => {
    const mq = (q) => window.matchMedia && window.matchMedia(q).matches;
    return mq('(hover: none)') || mq('(pointer: coarse)') || window.innerWidth <= 768;
  };

  const setupInteractions = (cornerUI) => {
    const logoLink = cornerUI.querySelector('.corner-logo');
    if (!logoLink) return;
    if (isMobileLike()) {
      logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        cornerUI.classList.toggle('menu-open');
      });
      document.addEventListener('click', (e) => {
        if (!cornerUI.classList.contains('menu-open')) return;
        if (cornerUI.contains(e.target)) return;
        cornerUI.classList.remove('menu-open');
      });
    }
  };

  const markCurrent = (root) => {
    try {
      const path = (location.pathname || '').toLowerCase();
      const isHome = path.endsWith('/') || path.endsWith('/index.html') || path === '';
      const isPortfolio = path.endsWith('/works.html') || path.includes('/work.html');
      const isAbout = path.endsWith('/about.html');
      const btnHome = root.querySelector('.menu-button.home');
      const btnPortfolio = root.querySelector('.menu-button.portfolio');
      const btnAbout = root.querySelector('.menu-button.about');
      if (btnHome && isHome) btnHome.classList.add('is-current');
      if (btnPortfolio && isPortfolio) btnPortfolio.classList.add('is-current');
      if (btnAbout && isAbout) btnAbout.classList.add('is-current');
    } catch (_) {}
  };

  const injectMenu = async () => {
    injectStylesheet();
    try {
      // Avoid duplicate injection
      if (document.querySelector('.corner-ui')) return;
      const res = await fetch('components/menu.html', { cache: 'no-cache' });
      const html = await res.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      const cornerUI = wrapper.firstElementChild;
      if (!cornerUI) return;
      document.body.appendChild(cornerUI);
      setupInteractions(cornerUI);
      // Programmatically assign offsets and stagger delays to reduce CSS repetition
      (function applyDynamicStyles(root) {
        const buttons = root.querySelectorAll('.corner-menu .menu-button');
        const baseOffset = 10; // px
        const offsetStep = 30; // px per item away from logo
        const delayStep = 40; // ms per item
        const n = buttons.length;
        buttons.forEach((btn, i) => {
          const rank = (n - i - 1); // last item closest to logo
          const offset = baseOffset + rank * offsetStep;
          const delay = rank * delayStep;
          btn.style.setProperty('--offset', offset + 'px');
          btn.style.setProperty('--delay', delay + 'ms');
        });
      })(cornerUI);
      markCurrent(cornerUI);
    } catch (err) {
      console.warn('Failed to load menu component', err);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectMenu);
  } else {
    injectMenu();
  }
})();