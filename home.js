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

  let works = await fetchWorks();
  // Filter out hidden projects
  works = works.filter(w => {
    const vis = String((w && w.visibility) ? w.visibility : 'visible').toLowerCase();
    return vis === 'visible';
  });

  // Preload only the first two covers before laying out
  const coverUrls = works.slice(0, 2).map(w => w && w.cover ? w.cover : null).filter(Boolean);
  await preloadImages(coverUrls, updateLoaderProgress);

  // Also load stickers
  // Note: loadStickers returns a list of URLs, it doesn't load them.
  // The original code called `await loadStickers()` which set a global variable.
  // Here we just get the list.
  const stickers = loadStickers();
  // Original code didn't preload stickers explicitly in the main flow, but `layout` uses them.
  // Actually, original code had `await loadStickers()` then `preloadImages(stickers)`?
  // Let's check original lines 1200: `await loadStickers();`
  // And line 131: `preloadImages` was defined but where was it called for stickers?
  // Ah, line 1200 was `await loadStickers()`.
  // And `loadStickers` (line 121) was async and set `stickers` global.
  // But did it preload? No.
  // However, `manageStickers` sets background image.

  let splineCtl = null;

  function runLayout() {
    clearStickerTimers(stickerTimers);
    if (splineCtl && typeof splineCtl.stop === 'function') splineCtl.stop();

    splineCtl = layout(scatter, works, brandEl, stickerTimers);

    if (splineCtl && typeof splineCtl.start === 'function') {
      // splineCtl.start() is called via event listener in spline.js
      // But we need to trigger it.
      // Original code: `setTimeout(() => { window.dispatchEvent(new Event('spline:start')); }, 800);`
    }

    updateMobileFocus();
  }

  // Initial layout
  runLayout();
  // Initialize mobile focus once DOM is ready
  setTimeout(updateMobileFocus, 50);

  // Hide loader after the animation visually reaches the end (with fallback)
  if (window.Loader) {
    try {
      await window.Loader.waitUntilComplete(1200);
    } catch (_) { }
    await window.Loader.hide();
    // Reveal title/bio immediately after loader hides
    revealTitleAndBio(brandEl);
  }
  // Fallback when no loader: reveal right away
  if (!window.Loader) {
    revealTitleAndBio(brandEl);
  }

  setTimeout(() => {
    window.dispatchEvent(new Event('spline:start'));
  }, 800);

  // Handle resize
  let resizeTimer;
  let lastResizeW = window.innerWidth;
  let lastResizeH = window.innerHeight;

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
        runLayout();
      } else {
        // Height-only changes on mobile: avoid full layout restart
        setTimeout(updateMobileFocus, 50);
      }
    }, 120);
  });

  // Mobile scroll focus check
  window.addEventListener('scroll', () => {
    updateMobileFocus();
  }, { passive: true });

  // Listen for spline:start to reveal title/bio if not already revealed?
  // Original code had: `window.addEventListener('spline:start', revealTitleAndBio, { once: true });`
  // We should add that too to be safe.
  window.addEventListener('spline:start', () => revealTitleAndBio(brandEl), { once: true });

});
