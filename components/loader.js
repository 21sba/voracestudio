// Loader component: injects overlay, runs Lottie animation, and exposes a simple API
(function () {
  const pageName = (document.body && document.body.dataset && document.body.dataset.page) || '';
  // Auto-show on core pages (include About as requested)
  const shouldAutoShow = (pageName === 'home' || pageName === 'works' || pageName === 'work' || pageName === 'about');

  const state = {
    loader: null,
    loaderLottie: null,
    loaderAnim: null,
    latestProgress: 0,
    displayProgress: 0,
    tickerActive: false,
    resolveLoaderComplete: null,
    loaderCompletePromise: null,
    scrollBlocked: false,
  };

  const rand = (min, max) => Math.random() * (max - min) + min;

  const injectStylesheet = () => {
    const href = 'components/loader.css';
    if ([...document.styleSheets].some(ss => ss.href && ss.href.includes(href))) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  const ensureOverlay = async () => {
    if (state.loader && document.contains(state.loader)) return state.loader;
    try {
      const res = await fetch('components/loader.html', { cache: 'no-cache' });
      const html = await res.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      const overlay = wrapper.firstElementChild;
      if (!overlay) return null;
      document.body.appendChild(overlay);
      state.loader = overlay;
      state.loaderLottie = overlay.querySelector('#loader-lottie');
      // Random rotation for lottie container
      if (state.loaderLottie) {
        state.loaderLottie.style.setProperty('--rot', `${Math.round(rand(-20, 20))}deg`);
      }
      return overlay;
    } catch (err) {
      console.warn('Failed to load loader component', err);
      return null;
    }
  };

  const preventScroll = (e) => { e.preventDefault(); };
  const blockScroll = () => {
    if (state.scrollBlocked) return;
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    state.scrollBlocked = true;
  };
  const unblockScroll = () => {
    if (!state.scrollBlocked) return;
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    state.scrollBlocked = false;
  };

  const getCssVarRGBA = (varName) => {
    const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    if (!val) return [0, 0, 0, 1];
    if (val.startsWith('#')) {
      let hex = val.slice(1);
      if (hex.length === 3) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        return [r / 255, g / 255, b / 255, 1];
      } else if (hex.length >= 6) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return [r / 255, g / 255, b / 255, 1];
      }
    }
    if (val.startsWith('rgb')) {
      const nums = val.match(/[\d.]+/g) || [];
      const r = parseFloat(nums[0] || '0');
      const g = parseFloat(nums[1] || '0');
      const b = parseFloat(nums[2] || '0');
      const a = nums.length > 3 ? parseFloat(nums[3]) : 1;
      return [r / 255, g / 255, b / 255, Math.max(0, Math.min(1, a))];
    }
    return [0, 0, 0, 1];
  };

  const patchBlackFills = (data, rgba) => {
    const walk = (node) => {
      if (!node) return;
      if (Array.isArray(node)) { node.forEach(walk); return; }
      if (typeof node === 'object') {
        if (node.ty === 'fl' && node.c && node.c.a === 0 && Array.isArray(node.c.k)) {
          const k = node.c.k;
          const isBlack = (k[0] === 0 && k[1] === 0 && k[2] === 0);
          if (isBlack) {
            node.c.k = [rgba[0], rgba[1], rgba[2], (rgba.length > 3 ? rgba[3] : 1)];
          }
        }
        if (node.it) walk(node.it);
        if (node.shapes) walk(node.shapes);
      }
    };
    if (data && Array.isArray(data.layers)) walk(data.layers);
  };

  const startLoaderTicker = () => {
    if (state.tickerActive || !state.loaderAnim) return;
    state.tickerActive = true;
    const SMOOTH = 0.18;
    const tick = () => {
      state.displayProgress += (state.latestProgress - state.displayProgress) * SMOOTH;
      if (Math.abs(state.latestProgress - state.displayProgress) < 0.001) {
        state.displayProgress = state.latestProgress;
      }
      try {
        const frames = (typeof state.loaderAnim.getDuration === 'function') ? state.loaderAnim.getDuration(true) : (state.loaderAnim.totalFrames || 0);
        if (frames && frames > 1) {
          const targetFrame = Math.floor(state.displayProgress * (frames - 1));
          state.loaderAnim.goToAndStop(targetFrame, true);
        }
      } catch (_) {}

      if (state.displayProgress >= 0.999 && state.latestProgress >= 1 && state.resolveLoaderComplete) {
        const done = state.resolveLoaderComplete;
        state.resolveLoaderComplete = null;
        done();
      }

      if (state.displayProgress < 1) {
        requestAnimationFrame(tick);
      } else {
        state.tickerActive = false;
      }
    };
    requestAnimationFrame(tick);
  };

  const initLottie = async () => {
    if (!state.loaderLottie) return;

    // Destroy any previous animation to avoid stale state across navigations
    try { if (state.loaderAnim && typeof state.loaderAnim.destroy === 'function') { state.loaderAnim.destroy(); } } catch (_) {}
    state.loaderAnim = null;

    // Ensure lottie-web is available; if already loaded, use it directly
    const ensureLottie = () => new Promise((resolve) => {
      if (window.lottie) return resolve(window.lottie);
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js';
      script.async = true;
      script.onload = () => resolve(window.lottie);
      script.onerror = () => {
        console.warn('Failed to load lottie-web library; continuing without animated logo.');
        resolve(null);
      };
      document.head.appendChild(script);
    });

    const lottieLib = await ensureLottie();
    if (!lottieLib) return;

    const colorRGBA = getCssVarRGBA('--color2');
    try {
      const res = await fetch('assets/lotties/vorace-logo-loading-animation.json');
      const json = await res.json();
      patchBlackFills(json, colorRGBA);
      state.loaderAnim = lottieLib.loadAnimation({
        container: state.loaderLottie,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: json,
        name: 'vorace-loader'
      });
    } catch (err) {
      console.warn('Failed to fetch or patch Lottie JSON, using original file.', err);
      state.loaderAnim = lottieLib.loadAnimation({
        container: state.loaderLottie,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/lotties/vorace-logo-loading-animation.json',
        name: 'vorace-loader'
      });
    }

    // Start ticker once animation DOM is ready; also add a small fallback
    const start = () => { startLoaderTicker(); };
    try { state.loaderAnim.addEventListener('DOMLoaded', start); } catch (_) {}
    setTimeout(start, 300);
  };

  const showOverlay = async () => {
    injectStylesheet();
    await ensureOverlay();
    if (!state.loader) return;
    blockScroll();
    // Reset progress state
    state.latestProgress = 0;
    state.displayProgress = 0;
    state.tickerActive = false;
    state.resolveLoaderComplete = null;
    state.loaderCompletePromise = new Promise((res) => { state.resolveLoaderComplete = res; });
    await initLottie();
  };

  const api = {
    setProgress(p) {
      const v = Math.max(0, Math.min(1, p || 0));
      state.latestProgress = v;
    },
    waitUntilComplete(fallbackMs = 1200) {
      if (!state.loaderCompletePromise) return new Promise((r) => setTimeout(r, fallbackMs));
      return Promise.race([
        state.loaderCompletePromise,
        new Promise((r) => setTimeout(r, fallbackMs)),
      ]);
    },
    async hide() {
      try {
        if (!state.loader) return;
        state.loader.classList.add('hidden');
        await new Promise((r) => setTimeout(r, 320));
        state.loader.remove();
        // Clean up animation and references to ensure fresh init next time
        try { if (state.loaderAnim && typeof state.loaderAnim.destroy === 'function') { state.loaderAnim.destroy(); } } catch (_) {}
        state.loaderAnim = null;
        state.loaderLottie = null;
        state.loader = null;
      } finally {
        unblockScroll();
      }
    }
  };

  // Expose API early so callers can enqueue progress updates even before overlay is fully ready
  window.Loader = api;

  const boot = () => {
    if (!shouldAutoShow) return;
    showOverlay();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();