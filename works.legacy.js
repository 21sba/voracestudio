document.addEventListener('DOMContentLoaded', async () => {
  // Ensure shared components can be injected across pages
  if ('serviceWorker' in navigator) {
    try { navigator.serviceWorker.register('sw.js'); } catch (_) {}
  }

  const grid = document.getElementById('works-grid');
  const filterBar = document.getElementById('filter-bar');
  if (!grid) return;
  // Mobile center-focus updater reference
  let updateFocus = null;
  // Start filter bar hidden for reveal-in animation
  if (filterBar) filterBar.classList.add('initial-hide');

  const dash = (val) => {
    if (val === undefined || val === null) return '--';
    if (Array.isArray(val)) return val.length ? val.join(', ') : '--';
    const s = String(val).trim();
    return s ? s : '--';
  };

  let works = [];
  try {
    const res = await fetch('works.json');
    works = await res.json();
  } catch (err) {
    console.error('Failed to load works.json', err);
    return;
  }

  // Visibility filter: only show 'public' works in the grid
  const isPublic = (w) => String((w && w.visibility) ? w.visibility : 'public').toLowerCase() === 'public';
  const visibleWorks = works.filter(isPublic);

  // Build category set for filter bar
  const categorySet = new Set();
  visibleWorks.forEach(w => {
    const cats = Array.isArray(w && w.categories) ? w.categories : [];
    cats.forEach(c => categorySet.add(String(c)));
  });
  const allCategories = Array.from(categorySet).sort();

  // Render filter bar items (All + categories)
  const filterItems = new Map();
  if (filterBar) {
    const makeItem = (label, value) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-item';
      btn.textContent = label; // CSS uppercases
      btn.dataset.filter = value || '';
      btn.addEventListener('click', () => applyFilter(value || ''));
      filterBar.appendChild(btn);
      filterItems.set(label, btn);
    };
    makeItem('All', '');
    allCategories.forEach(cat => makeItem(cat, cat));
  }

  // Render grid cards and keep references for filtering
  const cards = [];
  // Track lazy targets (cards whose covers load on-demand)
  const lazyMap = new Map();
  visibleWorks.forEach((work, idx) => {
    const card = document.createElement('article');
    card.className = 'work-card initial-hide';

    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = dash(work && work.title);

    const coverWrap = document.createElement('div');
    coverWrap.className = 'cover-wrap';
    const img = document.createElement('img');
    img.className = 'cover-img';
    img.loading = 'lazy';
    img.alt = (work && work.title) ? `${work.title} cover` : 'Cover';
    const coverUrl = (work && work.cover) ? work.cover : '';
    if (coverUrl && idx < 2) {
      // Eagerly load the first two covers
      img.src = coverUrl;
    } else if (coverUrl) {
      // Lazy-load subsequent covers using IntersectionObserver
      coverWrap.classList.add('skeleton');
      img.style.opacity = '0';
      img.dataset.src = coverUrl;
      // Observe the card for on-demand loading
      // We’ll attach later after DOM insertion
    }
    coverWrap.appendChild(img);

    // Make cover clickable to work page like homepage
    let coverLink = null;
    if (work && work.id) {
      coverLink = document.createElement('a');
      coverLink.className = 'cover-link';
      coverLink.href = `work.html?id=${encodeURIComponent(work.id)}`;
      coverLink.setAttribute('aria-label', (work && work.title) ? `Open ${work.title}` : 'Open work');
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
      tag.addEventListener('click', () => applyFilter(String(c)));
      tags.appendChild(tag);
    });

    const originDate = document.createElement('div');
    originDate.className = 'origin-date';
    const origin = (work && work.origin) ? String(work.origin) : '';
    const date = (work && work.date) ? String(work.date) : '';
    const originLine = document.createElement('span');
    originLine.className = 'origin';
    originLine.textContent = origin || '';
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = date || '';
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);

    meta.appendChild(tags);
    meta.appendChild(originDate);

    card.appendChild(title);
    card.appendChild(coverLink || coverWrap);
    card.appendChild(meta);

    grid.appendChild(card);
    cards.push({ el: card, cats });
    // Register lazy target if needed
    if (coverWrap.classList.contains('skeleton')) {
      lazyMap.set(card, { img, coverWrap });
    }
  });

  // Filtering helpers
  let currentFilter = '';
  const setActiveFilterItem = (value) => {
    const activeLabel = value ? value : 'All';
    filterItems.forEach((btn, label) => {
      const isActive = label === activeLabel;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('tag', isActive); // make active look like project tags
      btn.style.pointerEvents = isActive ? 'none' : '';
    });
  };

  const applyFilter = (value) => {
    currentFilter = value || '';
    // Update bar active state
    if (filterBar) setActiveFilterItem(currentFilter);
    // Show/hide cards
    cards.forEach(({ el, cats }) => {
      const match = !currentFilter || cats.includes(currentFilter);
      if (match) {
        // Animate show
        if (el.classList.contains('hidden')) {
          el.classList.remove('hidden');
          el.classList.add('animating-in');
          // force reflow, then remove to animate to visible
          void el.offsetWidth;
          el.classList.remove('animating-in');
        }
      } else {
        // Animate hide
        if (!el.classList.contains('hidden')) {
          const onEnd = (ev) => {
            if (ev.propertyName !== 'opacity') return;
            el.removeEventListener('transitionend', onEnd);
            el.classList.remove('animating-out');
            el.classList.add('hidden');
          };
          el.addEventListener('transitionend', onEnd);
          el.classList.add('animating-out');
          // Fallback in case transitionend doesn’t fire
          setTimeout(() => {
            if (!el.classList.contains('hidden')) {
              el.classList.remove('animating-out');
              el.classList.add('hidden');
            }
          }, 260);
        }
      }
    });
    // Recompute mobile focus after filtering
    if (typeof updateFocus === 'function') {
      try { updateFocus(); } catch (_) {}
    }
  };

  // Default to 'All' active
  applyFilter('');

  // Preload cover images and update loader progress
  const updateLoaderProgress = (p) => {
    try {
      if (window.Loader && typeof window.Loader.setProgress === 'function') {
        window.Loader.setProgress(p || 0);
      }
    } catch (_) {}
  };

  async function preloadImages(urls, onProgress) {
    const total = urls.length;
    let loaded = 0;
    const report = () => {
      if (typeof onProgress === 'function' && total > 0) {
        onProgress(loaded / total);
      }
    };
    report();
    const tasks = urls.map((url) => new Promise((resolve) => {
      if (!url) { loaded++; report(); return resolve(); }
      const img = new Image();
      const done = () => { loaded++; report(); resolve(); };
      img.onload = done; img.onerror = done; img.src = url;
    }));
    await Promise.allSettled(tasks);
    if (typeof onProgress === 'function') onProgress(1);
  }

  // Preload only the first two covers for faster initial paint
  const urls = visibleWorks.slice(0, 2).map(w => (w && w.cover ? w.cover : null)).filter(Boolean);
  await preloadImages(urls, (p) => updateLoaderProgress(p));
  try {
    if (window.Loader) {
      await window.Loader.waitUntilComplete(1000);
      await window.Loader.hide();
    }
  } catch (_) {}

  // Staggered initial reveal of cards once loader is hidden
  try {
    // Reveal filter bar first
    if (filterBar) {
      filterBar.classList.remove('initial-hide');
    }
    const baseDelay = 80; // ms between items
    cards.forEach(({ el }, idx) => {
      setTimeout(() => {
        el.classList.remove('initial-hide');
      }, baseDelay * idx);
    });
  } catch (_) {}

  // Initialize IntersectionObserver for lazy-loading remaining covers
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
      // Observe each lazy card element
      lazyMap.forEach((_, cardEl) => {
        observer.observe(cardEl);
      });
    }
  } catch (_) {}

  // Mobile-only: focus the card closest to the viewport center
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
      // Remove focus from previous
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
      // Only focus if within the middle band
      if (best && bestDist <= bandHalf) {
        focusCard(best);
      } else {
        focusCard(null);
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; updateFocus(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Initial focus computation after cards reveal
    setTimeout(onScroll, 200);
  })();
});