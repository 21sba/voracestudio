// Shared grid builder for dataset indexes (works, goodies)
// Usage: GridBuilder.renderGrid({ dataUrl, detailsPage, gridSelector, filterBarSelector })
(function () {
  function dash(val, fallback) {
    if (val === undefined || val === null) return fallback !== undefined ? fallback : '';
    if (Array.isArray(val)) return val.length ? val.join(', ') : (fallback !== undefined ? fallback : '');
    const s = String(val).trim();
    return s ? s : (fallback !== undefined ? fallback : '');
  }

  async function preloadImages(urls, onProgress) {
    const list = Array.isArray(urls) ? urls.filter(Boolean) : [];
    const total = list.length;
    let loaded = 0;
    const report = () => {
      if (typeof onProgress === 'function' && total > 0) {
        onProgress(loaded / total);
      }
    };
    report();
    const tasks = list.map((url) => new Promise((resolve) => {
      if (!url) { loaded++; report(); return resolve(); }
      const img = new Image();
      const done = () => { loaded++; report(); resolve(); };
      img.onload = done; img.onerror = done; img.src = url;
    }));
    await Promise.allSettled(tasks);
    if (typeof onProgress === 'function') onProgress(1);
  }

  function isPublic(item) {
    return String((item && item.visibility) ? item.visibility : 'public').toLowerCase() === 'public';
  }

  async function renderGrid(opts) {
    const {
      dataUrl,
      detailsPage,
      gridSelector = '#works-grid',
      filterBarSelector = '#filter-bar'
    } = opts || {};

    const grid = document.querySelector(gridSelector);
    const filterBar = document.querySelector(filterBarSelector);
    if (!grid) return;

    // Keep filter bar hidden for reveal-in animation
    if (filterBar) filterBar.classList.add('initial-hide');

    // Mobile center-focus updater reference (set later)
    let updateFocus = null;

    // Fetch dataset
    let items = [];
    try {
      const res = await fetch(String(dataUrl));
      items = await res.json();
    } catch (err) {
      console.error('Failed to load dataset', dataUrl, err);
      return;
    }

    const visibleItems = items.filter(isPublic);
    // If only one visible item, use single column grid
    try { if (grid) grid.classList.toggle('single-col', visibleItems.length === 1); } catch (_) {}

    // Build categories
    const categorySet = new Set();
    visibleItems.forEach(w => {
      const cats = Array.isArray(w && w.categories) ? w.categories : [];
      cats.forEach(c => categorySet.add(String(c)));
    });
    const allCategories = Array.from(categorySet).sort();

    // Render filter bar
    const filterItems = new Map();
    const applyFilterRef = { fn: null };
    if (filterBar) {
      const makeItem = (label, value) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'filter-item';
        btn.textContent = label; // CSS uppercases
        btn.dataset.filter = value || '';
        btn.addEventListener('click', () => applyFilterRef.fn && applyFilterRef.fn(value || ''));
        filterBar.appendChild(btn);
        filterItems.set(label, btn);
      };
      makeItem('All', '');
      allCategories.forEach(cat => makeItem(cat, cat));
    }

    // Render cards
    const cards = [];
    const lazyMap = new Map();
    visibleItems.forEach((work, idx) => {
      const card = document.createElement('article');
      card.className = 'work-card initial-hide';

      const title = document.createElement('h2');
      title.className = 'title';
      title.textContent = dash(work && work.title, '--');

      const coverWrap = document.createElement('div');
      coverWrap.className = 'cover-wrap';
      const img = document.createElement('img');
      img.className = 'cover-img';
      img.loading = 'lazy';
      img.alt = (work && work.title) ? `${work.title} cover` : 'Cover';
      const coverUrl = (work && work.cover) ? work.cover : '';
      if (coverUrl && idx < 2) {
        img.src = coverUrl;
      } else if (coverUrl) {
        coverWrap.classList.add('skeleton');
        img.style.opacity = '0';
        img.dataset.src = coverUrl;
      }
      coverWrap.appendChild(img);

      let coverLink = null;
      if (work && work.id) {
        coverLink = document.createElement('a');
        coverLink.className = 'cover-link';
        coverLink.href = `${detailsPage}?id=${encodeURIComponent(work.id)}`;
        coverLink.setAttribute('aria-label', (work && work.title) ? `Open ${work.title}` : 'Open item');
        coverLink.appendChild(coverWrap);
      }

      const meta = document.createElement('div');
      meta.className = 'meta';

      const tags = document.createElement('div');
      tags.className = 'tags';
      const cats = Array.isArray(work && work.categories) ? work.categories : [];
      cats.forEach((c) => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = String(c);
        tag.dataset.category = String(c);
        tag.addEventListener('click', () => applyFilterRef.fn && applyFilterRef.fn(String(c)));
        tags.appendChild(tag);
      });

      const originDate = document.createElement('div');
      originDate.className = 'origin-date';
      const originLine = document.createElement('span');
      originLine.className = 'origin';
      originLine.textContent = dash(work && work.origin);
      const dateLine = document.createElement('span');
      dateLine.className = 'date';
      dateLine.textContent = dash(work && work.date);
      originDate.appendChild(originLine);
      originDate.appendChild(dateLine);

      meta.appendChild(tags);
      meta.appendChild(originDate);

      card.appendChild(title);
      card.appendChild(coverLink || coverWrap);
      card.appendChild(meta);

      grid.appendChild(card);
      cards.push({ el: card, cats });
      if (coverWrap.classList.contains('skeleton')) {
        lazyMap.set(card, { img, coverWrap });
      }
    });

    // Filtering
    let currentFilter = '';
    const setActiveFilterItem = (value) => {
      const activeLabel = value ? value : 'All';
      filterItems.forEach((btn, label) => {
        const isActive = label === activeLabel;
        btn.classList.toggle('active', isActive);
        btn.classList.toggle('tag', isActive);
        btn.style.pointerEvents = isActive ? 'none' : '';
      });
    };
    const applyFilter = (value) => {
      currentFilter = value || '';
      if (filterBar) setActiveFilterItem(currentFilter);
      let matchCount = 0;
      cards.forEach(({ el, cats }) => {
        const match = !currentFilter || cats.includes(currentFilter);
        if (match) matchCount++;
        if (match) {
          if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            el.classList.add('animating-in');
            void el.offsetWidth;
            el.classList.remove('animating-in');
          }
        } else {
          if (!el.classList.contains('hidden')) {
            const onEnd = (ev) => {
              if (ev.propertyName !== 'opacity') return;
              el.removeEventListener('transitionend', onEnd);
              el.classList.remove('animating-out');
              el.classList.add('hidden');
            };
            el.addEventListener('transitionend', onEnd);
            el.classList.add('animating-out');
            setTimeout(() => {
              if (!el.classList.contains('hidden')) {
                el.classList.remove('animating-out');
                el.classList.add('hidden');
              }
            }, 260);
          }
        }
      });
      // Toggle single column when filter leaves only one visible card
      try { if (grid) grid.classList.toggle('single-col', matchCount === 1); } catch (_) {}
      if (typeof updateFocus === 'function') {
        try { updateFocus(); } catch (_) {}
      }
    };
    applyFilterRef.fn = applyFilter;

    // Default to all
    applyFilter('');

    // Loader progress
    const updateLoaderProgress = (p) => {
      try {
        if (window.Loader && typeof window.Loader.setProgress === 'function') {
          window.Loader.setProgress(p || 0);
        }
      } catch (_) {}
    };
    const coverUrls = visibleItems.slice(0, 2).map(w => (w && w.cover ? w.cover : null)).filter(Boolean);
    await preloadImages(coverUrls, (p) => updateLoaderProgress(p));
    try {
      if (window.Loader) {
        await window.Loader.waitUntilComplete(1000);
        await window.Loader.hide();
      }
    } catch (_) {}

    // Reveal filter bar and cards
    try {
      if (filterBar) filterBar.classList.remove('initial-hide');
      const baseDelay = 80;
      cards.forEach(({ el }, idx) => {
        setTimeout(() => { el.classList.remove('initial-hide'); }, baseDelay * idx);
      });
    } catch (_) {}

    // Lazy load remaining covers
    try {
      if (lazyMap.size > 0) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            const info = lazyMap.get(target);
            if (!info) return;
            const { img, coverWrap } = info;
            const src = img && img.dataset ? img.dataset.src : '';
            if (!src) {
              observer.unobserve(target);
              lazyMap.delete(target);
              return;
            }
            const finalize = () => {
              try { coverWrap.classList.remove('skeleton'); } catch (_) {}
              try { img.style.opacity = '1'; } catch (_) {}
              try { delete img.dataset.src; } catch (_) {}
              observer.unobserve(target);
              lazyMap.delete(target);
            };
            img.onload = finalize;
            img.onerror = finalize;
            img.src = src;
          });
        }, { root: null, rootMargin: '200px', threshold: 0.1 });
        lazyMap.forEach((_, cardEl) => observer.observe(cardEl));
      }
    } catch (_) {}

    // Mobile focus
    (function initMobileCardFocus() {
      const isMobileLike = () => {
        if (!window.matchMedia) return false;
        const noHover = window.matchMedia('(hover: none)').matches;
        const narrow = window.matchMedia('(max-width: 860px)').matches;
        return noHover || narrow;
      };
      if (!isMobileLike()) return;
      let ticking = false;
      let lastFocused = null;
      const getVisibleCards = () => cards.map(({ el }) => el).filter((el) => {
        if (!el || el.classList.contains('hidden')) return false;
        const r = el.getBoundingClientRect();
        return r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
      });
      const focusCard = (el) => {
        if (lastFocused === el) return;
        cards.forEach(({ el: c }) => { c.classList.remove('focus-mobile'); });
        if (el) el.classList.add('focus-mobile');
        lastFocused = el || null;
      };
      updateFocus = () => {
        const vh = window.innerHeight || 0;
        const bandHalf = Math.max(80, Math.round(vh * 0.18));
        const mid = Math.round(vh / 2);
        const visible = getVisibleCards();
        let best = null;
        let bestDist = Infinity;
        for (const el of visible) {
          const r = el.getBoundingClientRect();
          const center = Math.round(r.top + r.height / 2);
          const dist = Math.abs(center - mid);
          if (dist < bestDist) { bestDist = dist; best = el; }
        }
        if (best && bestDist <= bandHalf) { focusCard(best); } else { focusCard(null); }
      };
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { ticking = false; updateFocus(); });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      setTimeout(onScroll, 200);
    })();
  }

  // Auto-boot on listing pages to eliminate per-page initializers
  function autoBoot() {
    try {
      if (window.GridBuilderConfig && window.GridBuilderConfig.disableAutoBoot) return;
      const page = String(document.body && document.body.dataset ? document.body.dataset.page : '').toLowerCase();
      let dataUrl = '';
      let detailsPage = '';
      let gridSelector = '';
      let filterBarSelector = '#filter-bar';
      if (page === 'works') {
        dataUrl = 'works.json';
        detailsPage = 'work.html';
        gridSelector = '#works-grid';
      } else if (page === 'goodies') {
        dataUrl = 'goodies.json';
        detailsPage = 'goodie.html';
        gridSelector = '#goodies-grid';
      } else {
        return;
      }
      const gridEl = document.querySelector(gridSelector);
      if (!gridEl) return;
      // Register service worker (safe to call multiple times)
      try { if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js'); } catch (_) {}
      renderGrid({ dataUrl, detailsPage, gridSelector, filterBarSelector });
    } catch (err) {
      try { console.error('GridBuilder auto-boot failed', err); } catch (_) {}
    }
  }
  if (!window.GridBuilderConfig || !window.GridBuilderConfig.disableAutoBoot) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoBoot);
    } else {
      autoBoot();
    }
  }
  window.GridBuilder = { renderGrid };
})();