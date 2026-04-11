import { scheduleStickerTimeout, clearStickerTimers } from './js/utils.js';
import { fetchWorks, loadStickers, preloadImages, updateLoaderProgress } from './js/assets.js';
import { wrapTitleLetters, revealTitleAndBio, initBrandScrollEffect, updateMobileFocus } from './js/interactions.js';
import { layout } from './js/layout.js';

document.addEventListener('DOMContentLoaded', async () => {

  // Register service worker at root to inject shared components across pages
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('sw.js');
    } catch (_) { }
  }
  const scatter = document.getElementById('scatter');
  const brandEl = document.querySelector('.brand-block');

  // Track sticker timers to avoid duplicate cycles after mobile resize/layout
  const stickerTimers = new Set();

  // Prepare title for letter-by-letter animation
  wrapTitleLetters(brandEl);

  // Shrink and fade the brand block as the user scrolls
  initBrandScrollEffect(brandEl);

  let splineCtl = null;

  function runLayout(worksData) {
    clearStickerTimers(stickerTimers);
    if (splineCtl && typeof splineCtl.stop === 'function') splineCtl.stop();

    splineCtl = layout(scatter, worksData, brandEl, stickerTimers);
    updateMobileFocus();
  }

  // Handle resize
  let resizeTimer;
  let lastResizeW = window.innerWidth;
  let lastResizeH = window.innerHeight;
  let currentWorks = [];

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    const nextW = window.innerWidth;
    const nextH = window.innerHeight;
    resizeTimer = setTimeout(() => {
      const widthChanged = Math.abs(nextW - lastResizeW) > 2; // tolerate minor oscillations
      const orientationChanged = (nextW > nextH) !== (lastResizeW > lastResizeH);
      if (widthChanged || orientationChanged) {
        lastResizeW = nextW;
        lastResizeH = nextH;
        // Stop any pending sticker timers before rebuilding layout
        clearStickerTimers(stickerTimers);
        runLayout(currentWorks);
      } else {
        // Height-only changes on mobile: avoid full layout restart
        setTimeout(updateMobileFocus, 50);
      }
    }, 120);
  });

  try {
    let works = await fetchWorks();
    // Filter out hidden projects
    works = works.filter(w => {
      const vis = String((w && w.visibility) ? w.visibility : 'visible').toLowerCase();
      return vis === 'visible';
    });
    currentWorks = works;

    // Preload only the first two covers before laying out
    const coverUrls = works.slice(0, 2).map(w => w && w.cover ? w.cover : null).filter(Boolean);
    await preloadImages(coverUrls, updateLoaderProgress);

    // Also load stickers
    const stickers = loadStickers();

    // Initial layout
    runLayout(currentWorks);
    // Initialize mobile focus once DOM is ready
    setTimeout(updateMobileFocus, 50);

    if (window.Loader) {
      try { await window.Loader.waitUntilComplete(1200); } catch (_) { }
    }
  } catch (err) {
    console.error('Initialization error:', err);
  } finally {
    if (window.Loader) {
      try { await window.Loader.hide(); } catch (_) { }
    }
    revealTitleAndBio(brandEl);
    setTimeout(() => {
      window.dispatchEvent(new Event('spline:start'));
    }, 800);
  }



  // Mobile scroll focus check
  window.addEventListener('scroll', () => {
    updateMobileFocus();
  }, { passive: true });

  // Listen for spline:start to reveal title/bio if not already revealed?
  // Original code had: `window.addEventListener('spline:start', revealTitleAndBio, { once: true });`
  // We should add that too to be safe.
  window.addEventListener('spline:start', () => revealTitleAndBio(brandEl), { once: true });

});
