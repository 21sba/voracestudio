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

      // Dynamically inline SVGs so they inherit CSS variables
      async function replaceDynamicSVGs(container) {
        const imgs = container.querySelectorAll('img[data-replace-svg]');
        for (let img of imgs) {
          try {
            const r = await fetch(img.src, { cache: 'no-cache' });
            let text = await r.text();
            text = text.replace(/#(ee204c|ed1e4c|ee2222)/gi, 'var(--color3, #ee2222)');
            text = text.replace(/#(f7b1bd|f6b0bc|f75555)/gi, 'var(--color4, #f75555)');
            const w = document.createElement('div');
            w.innerHTML = text;
            const svg = w.querySelector('svg');
            if (svg) {
              if (img.className) svg.setAttribute('class', (svg.getAttribute('class') || '') + ' ' + img.className);
              img.replaceWith(svg);
            }
          } catch (e) { }
        }
      }
      replaceDynamicSVGs(footer);

      // Set current year
      const yearEl = footer.querySelector('[data-year]');
      if (yearEl) yearEl.textContent = String(new Date().getFullYear());
      // Ensure mailto links are correct
      const email = 'tommasotabacchi7@gmail.com';
      const cta = footer.querySelector('.footer-cta');
      const idCardLink = footer.querySelector('.id-card-link');
      if (cta) cta.href = `mailto:${email}`;
      if (idCardLink) idCardLink.href = `mailto:${email}`;

      // Mobile scroll-based ID card rotation
      const idCard3d = footer.querySelector('.id-card-3d');
      if (idCard3d) {
        let ticking = false;
        const updateRotation = () => {
          if (window.innerWidth > 860) {
            idCard3d.style.transform = '';
            idCard3d.style.transition = '';
            return;
          }
          const rect = footer.getBoundingClientRect();
          const vh = window.innerHeight;
          const footerH = rect.height || 1;
          
          // Progress from 0 (top enters viewport) to 1 (bottom enters viewport)
          let progress = (vh - rect.top) / footerH;
          progress = Math.max(0, Math.min(1, progress));
          
          const angle = progress * 180;
          idCard3d.style.transition = 'none';
          idCard3d.style.transform = `rotateY(${angle}deg)`;
        };

        window.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              updateRotation();
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });
        window.addEventListener('resize', updateRotation);
        // Small delay to ensure layout is ready
        setTimeout(updateRotation, 100);
      }
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