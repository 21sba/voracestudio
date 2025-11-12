document.addEventListener('DOMContentLoaded', async () => {
  const wrap = document.getElementById('photo-wrap');
  const img = document.getElementById('portrait-img');
  const blocks = Array.from(document.querySelectorAll('.about-block'));
  const portraitUrl = 'assets/images/photo-dream.png';

  // Start with blocks hidden for a consistent reveal animation
  blocks.forEach(b => b.classList.add('initial-hide'));

  const updateLoaderProgress = (p) => {
    try {
      if (window.Loader && typeof window.Loader.setProgress === 'function') {
        window.Loader.setProgress(p || 0);
      }
    } catch (_) {}
  };

  // Preload portrait, then reveal
  async function preloadPortrait(url) {
    return new Promise((resolve) => {
      if (!url) return resolve();
      const pre = new Image();
      const done = () => resolve();
      pre.onload = done; pre.onerror = done; pre.src = url;
    });
  }

  try {
    updateLoaderProgress(0);
    await preloadPortrait(portraitUrl);
    updateLoaderProgress(1);
    // Show the portrait and remove skeleton
    if (img) {
      // Ensure fade-in even if cached
      const finalize = () => {
        try { wrap && wrap.classList.remove('skeleton'); } catch (_) {}
        try { img.style.opacity = '1'; } catch (_) {}
      };
      img.onload = finalize; img.onerror = finalize;
      img.src = portraitUrl;
    }
    // Hide loader and reveal text blocks (wait for Loader if it loads late)
    try {
      if (!window.Loader) {
        await new Promise((resolve) => {
          const start = Date.now();
          const t = setInterval(() => {
            if (window.Loader || Date.now() - start > 800) { clearInterval(t); resolve(); }
          }, 20);
        });
      }
      if (window.Loader) {
        await window.Loader.waitUntilComplete(600);
        await window.Loader.hide();
      } else {
        const ov = document.querySelector('.loading-overlay');
        if (ov) ov.remove();
        try { document.documentElement.classList.remove('no-scroll'); document.body.classList.remove('no-scroll'); } catch (_) {}
      }
    } catch (_) {}
    const baseDelay = 80;
    blocks.forEach((b, i) => {
      setTimeout(() => { b.classList.remove('initial-hide'); }, baseDelay * i);
    });
  } catch (err) {
    console.warn('Failed to preload portrait', err);
    try { if (img && !img.src) img.src = portraitUrl; } catch (_) {}
    blocks.forEach(b => b.classList.remove('initial-hide'));
    try { wrap && wrap.classList.remove('skeleton'); } catch (_) {}
    try { img && (img.style.opacity = '1'); } catch (_) {}
  }
});