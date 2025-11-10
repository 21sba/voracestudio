// Loader component: injects overlay, runs Lottie animation, and exposes a simple API
(function () {
  const pageName = (document.body && document.body.dataset && document.body.dataset.page) || '';
  // Auto-show on core pages (include About as requested)
  const shouldAutoShow = (
    pageName === 'home' ||
    pageName === 'works' ||
    pageName === 'work' ||
    pageName === 'about' ||
    pageName === 'goodies' ||
    pageName === 'goodie'
  );

  const state = {
    loader: null,
    loaderLottie: null,
    loaderAnim: null,
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
    // Create overlay synchronously to avoid fetch latency causing a visual flash
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    // Minimal inline styles to ensure instant full-screen cover before CSS loads
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '2001';
    overlay.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color2') || '#000';
    overlay.style.opacity = '1';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.gap = '12px';

    const lottie = document.createElement('div');
    lottie.id = 'loader-lottie';
    lottie.className = 'loader-lottie';
    overlay.appendChild(lottie);

    const text = document.createElement('div');
    text.className = 'loading-text';
    text.textContent = 'loading...';
    overlay.appendChild(text);

    document.body.appendChild(overlay);
    state.loader = overlay;
    state.loaderLottie = lottie;
    if (state.loaderLottie) {
      state.loaderLottie.style.setProperty('--rot', `${Math.round(rand(0, 0))}deg`);
    }
    return overlay;
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
    // Progress-driven playback disabled; animation now loops via Lottie.
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
      const res = await fetch('assets/lotties/vorace-logo-loading-animation-v2.json');
      const json = await res.json();
      patchBlackFills(json, colorRGBA);
      state.loaderAnim = lottieLib.loadAnimation({
        container: state.loaderLottie,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: json,
        name: 'vorace-loader-v2'
      });
    } catch (err) {
      console.warn('Failed to fetch or patch Lottie JSON v2; loading file directly.', err);
      state.loaderAnim = lottieLib.loadAnimation({
        container: state.loaderLottie,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/lotties/vorace-logo-loading-animation-v2.json',
        name: 'vorace-loader-v2'
      });
    }
  };

  const showOverlay = async () => {
    injectStylesheet();
    await ensureOverlay();
    if (!state.loader) return;
    blockScroll();
    await initLottie();
  };

  const api = {
    setProgress(p) {
      // No-op: animation is no longer tied to progress.
    },
    waitUntilComplete(fallbackMs = 1200) {
      // Progress-independent wait; caller controls fallback duration.
      return new Promise((r) => setTimeout(r, fallbackMs));
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