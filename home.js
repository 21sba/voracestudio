function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function intersects(a, b) {
  return !(a.x + a.w < b.x || a.x > b.x + b.w || a.y + a.h < b.y || a.y > b.y + b.h);
}

document.addEventListener('DOMContentLoaded', async () => {
  
  // Register service worker at root to inject shared components across pages
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('sw.js');
    } catch (_) {}
  }
  const scatter = document.getElementById('scatter');
  const brandEl = document.querySelector('.brand-block');
  let stickers = [];

  // Track sticker timers to avoid duplicate cycles after mobile resize/layout
  const stickerTimers = new Set();
  function scheduleStickerTimeout(fn, ms) {
    const id = setTimeout(fn, ms);
    stickerTimers.add(id);
    return id;
  }
  function clearStickerTimers() {
    stickerTimers.forEach((id) => clearTimeout(id));
    stickerTimers.clear();
  }

  // Prepare title for letter-by-letter animation
  (function wrapTitleLetters() {
    if (!brandEl) return;
    const titleEl = brandEl.querySelector('.title');
    if (!titleEl || titleEl.querySelector('.letter')) return; // already wrapped
    const walker = document.createTreeWalker(titleEl, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    for (const node of textNodes) {
      const text = node.nodeValue || '';
      if (!text.trim()) continue;
      const frag = document.createDocumentFragment();
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') { frag.appendChild(document.createTextNode(' ')); continue; }
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = ch;
        frag.appendChild(span);
      }
      node.parentNode && node.parentNode.replaceChild(frag, node);
    }
  })();

  function revealTitleAndBio() {
    const titleEl = brandEl && brandEl.querySelector('.title');
    const bioEl = brandEl && brandEl.querySelector('.bio');
    // Prevent double-run if already revealed
    if (titleEl && titleEl.classList.contains('reveal')) return;
    let letterCount = 0;
    if (titleEl) {
      const letters = Array.from(titleEl.querySelectorAll('.letter'));
      letterCount = letters.length;
      letters.forEach((span, idx) => {
        span.style.transitionDelay = `${idx * 10}ms`;
      });
      titleEl.classList.add('reveal');
    }
    if (bioEl) {
      const delayMs = Math.max(0, letterCount * 10 + 200);
      bioEl.style.transitionDelay = `${delayMs}ms`;
      bioEl.classList.add('reveal');
    }
  }
  

  function updateLoaderProgress(p) {
    try {
      if (window.Loader && typeof window.Loader.setProgress === 'function') {
        window.Loader.setProgress(p || 0);
      }
    } catch (_) {}
  }

  // Shrink and fade the brand block as the user scrolls
  // Completes by the time the user scrolls one viewport height (1 * vh)
  (function initBrandScrollEffect() {
    if (!brandEl) return;
    let ticking = false;
    const apply = () => {
      const vh = window.innerHeight || 1;
      const y = window.scrollY || window.pageYOffset || 0;
      const progress = Math.min(1, Math.max(0, y / (vh / 2)));
      const scale = 1 - 0.2 * progress;    // down to 0.9
      const opacity = 1 - 1 * progress;  // down to 0.5
      brandEl.style.setProperty('--scale', scale.toFixed(3));
      brandEl.style.setProperty('--opacity', opacity.toFixed(3));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { ticking = false; apply(); });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    apply();
  })();

  let works = [];
  try {
    const res = await fetch('works.json');
    works = await res.json();
  } catch (err) {
    console.error('Failed to load works.json', err);
    return;
  }

  async function loadStickers() {
    try {
      const res = await fetch('assets/images/stickers/');
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const links = Array.from(doc.querySelectorAll('a'));
      const allowExt = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
      stickers = links
        .map(a => a.getAttribute('href'))
        .map(h => (h || '').replace(/^\.\//, ''))
        .filter(h => {
          const lower = h.toLowerCase();
          const name = lower.split('/').pop() || lower;
          return allowExt.some(ext => lower.endsWith(ext)) && !name.startsWith('._');
        })
        .map(h => 'assets/images/stickers/' + h);
    } catch (e) {
      console.warn('Sticker directory listing unavailable; skipping stickers.', e);
      stickers = [];
    }
  }

  // Preload cover images and update loader progress as assets load
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
      if (!url) {
        loaded++;
        report();
        return resolve();
      }
      const img = new Image();
      const done = () => {
        loaded++;
        report();
        resolve();
      };
      img.onload = done;
      img.onerror = done;
      img.src = url;
    }));
    await Promise.allSettled(tasks);
    if (typeof onProgress === 'function') onProgress(1);
  }

  // Mobile center-band focus: activate tiles when they are near viewport center
  function isMobileLike() {
    const mq = (q) => window.matchMedia && window.matchMedia(q).matches;
    return mq('(hover: none)') || mq('(pointer: coarse)') || window.innerWidth <= 768;
  }
  function updateMobileFocus() {
    if (!isMobileLike()) return;
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const vh = window.innerHeight;
    const bandTop = Math.round(vh * 0.35);
    const bandBottom = Math.round(vh * 0.65);
    for (const t of tiles) {
      if (t.classList.contains('cta')) {
        t.classList.remove('focus-mobile');
        continue;
      }
      const r = t.getBoundingClientRect();
      const centerY = (r.top + r.bottom) / 2;
      const inBand = centerY >= bandTop && centerY <= bandBottom;
      t.classList.toggle('focus-mobile', inBand);
    }
  }

  function getBrandRect() {
    const r = brandEl.getBoundingClientRect();
    const sc = scatter.getBoundingClientRect();
    return { x: r.left - sc.left, y: r.top - sc.top, w: r.width, h: r.height };
  }

  function layout() {
  scatter.innerHTML = '';
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const center = getBrandRect();
    const exclusion = {
      x: Math.max(0, center.x - 60),
      y: Math.max(0, center.y - 40),
      w: center.w + 120,
      h: center.h + 80,
    };

    const placed = [];
    const margin = 24;
    const SIZE = 200; // uniform size for every project
    const CAPTION_H = 26; // approximate caption height to avoid overlaps
    const STICKER_SIZE = 70; // base minimum for stickers (used as fallback)
    const CTA_GAP_BELOW_BRAND = 100; // target distance from brand block to top CTA
    const CTA_TO_FIRST_PROJECT_GAP = 100; // target distance from CTA to first project
    const brandBottomY = center.y + center.h;
    // Measure CTA height to compute accurate spacing on mobile
    const measureTopCTAHeight = (() => {
      const temp = document.createElement('a');
      temp.className = 'tile cta works-top';
      temp.textContent = 'WORKS';
      temp.style.visibility = 'hidden';
      temp.style.left = '0px';
      temp.style.top = '0px';
      scatter.appendChild(temp);
      const height = temp.offsetHeight;
      scatter.removeChild(temp);
      return height || 30;
    })();
    // Dynamic downward shift for project tiles on mobile to enforce spacing
    const PROJECTS_Y_OFFSET_MOBILE = Math.max(
      100,
      brandBottomY + CTA_GAP_BELOW_BRAND + measureTopCTAHeight + CTA_TO_FIRST_PROJECT_GAP - margin
    );
    const PROJECTS_START_GAP_DESKTOP = 60; // minimum gap below brand block on desktop
    const PROJECTS_Y_OFFSET_DESKTOP = 120; // global downward shift for all desktop project tiles
    const ROW_GAP = 120; // vertical gap per row on desktop

    // Show only first 9 works on homepage
    const orderedWorks = works.slice(0, 9);
    // Make the scatter canvas taller than the viewport to enable scrolling
  const unitHeight = Math.round(SIZE * 1.3) + CAPTION_H + margin * 3;
  const totalItems = orderedWorks.length + 2; // +1 for CTA
  // Reserve extra vertical space so shifted projects and bottom CTA never get cut off
  const rootStylesTop = getComputedStyle(document.documentElement);
  const desktopTailFactorStr = rootStylesTop.getPropertyValue('--desktop-tail-vh').trim();
  const desktopTailFactor = parseFloat(desktopTailFactorStr) || 0.45;
  const canvasHExtra = isMobileLike() ? PROJECTS_Y_OFFSET_MOBILE : (PROJECTS_Y_OFFSET_DESKTOP + Math.round(vh * desktopTailFactor) + ROW_GAP);
  let canvasH = Math.max(vh * 2, totalItems * unitHeight + canvasHExtra);
  scatter.style.height = `${canvasH}px`;
  const segmentHeight = canvasH / Math.max(1, totalItems);

  // Global vertical shift for project tiles
  const IS_MOBILE_GLOBAL = isMobileLike();
  const DESKTOP_GLOBAL_SHIFT = Math.max(
    PROJECTS_Y_OFFSET_DESKTOP,
    Math.max(margin, brandBottomY + PROJECTS_START_GAP_DESKTOP) - margin
  );
  const GLOBAL_PROJECT_SHIFT = IS_MOBILE_GLOBAL ? PROJECTS_Y_OFFSET_MOBILE : DESKTOP_GLOBAL_SHIFT;

  // Prepare SVG spline layer
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.classList.add('spline-layer');
  svg.setAttribute('viewBox', `0 0 ${vw} ${canvasH}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  const pathEl = document.createElementNS(svgNS, 'path');
  pathEl.setAttribute('class', 'spline-path');
  pathEl.setAttribute('d', '');
  svg.appendChild(pathEl);
    scatter.appendChild(svg);

  const pathPoints = [];
  const tileRefs = [];
  let splineCtl = null;

  // Desktop-only drag handler for tiles; updates positions and schedules path rebuild
  let rebuildScheduled = false;
  function scheduleRebuild() {
    if (rebuildScheduled) return;
    rebuildScheduled = true;
    requestAnimationFrame(() => {
      rebuildScheduled = false;
      if (splineCtl && typeof splineCtl.softRebuild === 'function') {
        splineCtl.softRebuild();
      }
    });
  }

  function enableDrag(tile) {
    function isDesktop() { return window.innerWidth >= 1024; }
    let startX = 0, startY = 0;
    let startLeft = 0, startTop = 0;
    let moved = false;
    let scLeft = 0, scWidth = 0, scHeight = 0;
    let tileW = 0, tileH = 0;
    const onPointerDown = (e) => {
      // Block tile dragging on mobile-like devices
      if (!isDesktop() || (typeof isMobileLike === 'function' && isMobileLike())) return;
      if (e.button !== undefined && e.button !== 0) return; // left button only
      tile.setPointerCapture && tile.setPointerCapture(e.pointerId);
      const scRect = scatter.getBoundingClientRect();
      const tileRect = tile.getBoundingClientRect();
      scLeft = scRect.left;
      scWidth = scRect.width;
      scHeight = scRect.height;
      tileW = tileRect.width;
      tileH = tileRect.height;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseFloat(tile.style.left || (tileRect.left - scLeft)) || 0;
      startTop = parseFloat(tile.style.top || (tileRect.top - scLeft + 0 /* not used */)) || (tileRect.top - scRect.top);
      moved = false;
      tile.classList.add('dragging');
      tile.dataset.dragging = '0';
      e.preventDefault();
    };
    const onPointerMove = (e) => {
      if (!tile.classList.contains('dragging')) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const nextLeft = Math.max(0, Math.min(scWidth - tileW, Math.round(startLeft + dx)));
      const nextTop = Math.max(0, Math.min(scHeight - tileH, Math.round(startTop + dy)));
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        moved = true;
        tile.dataset.dragging = '1';
      }
      tile.style.left = `${nextLeft}px`;
      tile.style.top = `${nextTop}px`;
      // Update corresponding center point using current tileRefs index
      const cx = nextLeft + tileW / 2;
      const cy = nextTop + tileH / 2;
      const i = tileRefs.indexOf(tile);
      if (i >= 0) {
        pathPoints[i] = { x: cx, y: cy };
      }
      scheduleRebuild();
      e.preventDefault();
    };
    const onPointerUp = (e) => {
      if (!tile.classList.contains('dragging')) return;
      tile.classList.remove('dragging');
      tile.releasePointerCapture && tile.releasePointerCapture(e.pointerId);
      // Heavy rebuild once at the end of drag to recompute milestones
      if (splineCtl && typeof splineCtl.rebuild === 'function') {
        splineCtl.rebuild();
      }
      e.preventDefault();
    };
    const onPointerCancel = (e) => {
      if (!tile.classList.contains('dragging')) return;
      tile.classList.remove('dragging');
      tile.releasePointerCapture && tile.releasePointerCapture(e.pointerId);
      if (splineCtl && typeof splineCtl.rebuild === 'function') {
        splineCtl.rebuild();
      }
    };
    // Prevent accidental navigation if the pointer moved
    const onClickCapture = (e) => {
      if (tile.dataset.dragging === '1') {
        e.preventDefault();
        e.stopPropagation();
        tile.dataset.dragging = '0';
      }
    };
    tile.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);
    tile.addEventListener('click', onClickCapture, true);
  }
  orderedWorks.forEach((work, idx) => {
      const size = SIZE;
      const tile = document.createElement('a');
      tile.className = 'tile';
      tile.href = `work.html?id=${encodeURIComponent(work.id)}`;
      tile.style.setProperty('--size', `${size}px`);

      const rot = rand(-20, 20);
      const visual = document.createElement('div');
      visual.className = 'visual';

      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.style.backgroundImage = `url(${work.cover})`;

      const original = new Image();
      original.className = 'original';
      original.src = work.cover;

      // Date label under the cover image (overlay inside visual)
      const dateLabel = document.createElement('div');
      dateLabel.className = 'date-label';
      dateLabel.textContent = work.date ? String(work.date) : '';

      const caption = document.createElement('div');
      caption.className = 'caption';
      caption.textContent = work.title || '';

      tile.style.setProperty('--rot', `${rot}deg`);
      tile.appendChild(caption);
      visual.appendChild(thumb);
      visual.appendChild(original);
      visual.appendChild(dateLabel);
      tile.appendChild(visual);

      const box = { w: size, h: Math.round(size * 1.3) + CAPTION_H };

      let attempts = 0;
      let placedPos = null;
      const segTop = Math.floor(idx * segmentHeight);
      const segBottom = Math.floor((idx + 1) * segmentHeight);
      let yMinBase = segTop + margin;
      let yMaxBase = segBottom - box.h - margin;

      // Apply a uniform global shift to all project bands
      yMinBase += GLOBAL_PROJECT_SHIFT;
      yMaxBase += GLOBAL_PROJECT_SHIFT;
      // Desktop: per-row growing minimum that includes tile height so rows separate clearly
      if (!IS_MOBILE_GLOBAL) {
        const rowStart = vh + 20 + idx * (box.h + ROW_GAP);
        yMinBase = Math.max(yMinBase, rowStart);
        yMaxBase = Math.max(yMaxBase, yMinBase + 1);
      }

      // Constrain horizontal spawn to centered 80% of #app, max 1200px
      const app = document.getElementById('app');
      const appRect = app.getBoundingClientRect();
      const scRect = scatter.getBoundingClientRect();
      const appW = Math.round(appRect.width);
      const spawnW = Math.min(Math.round(appW * 0.8), 1200);
      const spawnLeft = Math.round((appW - spawnW) / 2);
      const spawnLeftInScatter = Math.round((appRect.left - scRect.left) + spawnLeft);
      const xMin = spawnLeftInScatter + margin;
      const xMax = Math.max(xMin, spawnLeftInScatter + spawnW - box.w - margin);
      const isDesktop = window.innerWidth >= 1024;
      const useSidePlacement = false;
      const centerZoneW = useSidePlacement ? Math.min(Math.round(spawnW * 0.4), 520) : 0; // avoid ~40% center
      const centerLeft = spawnLeftInScatter + Math.round((spawnW - centerZoneW) / 2);
      const centerRight = centerLeft + centerZoneW;
      const leftXMin = xMin;
      const leftXMax = Math.max(xMin, centerLeft - box.w - margin);
      const rightXMin = Math.max(xMin, centerRight + margin);
      const rightXMax = xMax;
      const preferLeft = Math.random() < 0.5;

      function pickX() {
        if (useSidePlacement) {
          if (preferLeft && leftXMax > leftXMin) return Math.round(rand(leftXMin, leftXMax));
          if (!preferLeft && rightXMax > rightXMin) return Math.round(rand(rightXMin, rightXMax));
          if (leftXMax > leftXMin) return Math.round(rand(leftXMin, leftXMax));
          if (rightXMax > rightXMin) return Math.round(rand(rightXMin, rightXMax));
          return Math.round(rand(xMin, xMax));
        }
        return Math.round(rand(xMin, xMax));
      }
      while (attempts < 80 && !placedPos) {
        const x = pickX();
        const yMin = Math.max(margin, yMinBase);
        const yMax = Math.max(yMin + 1, yMaxBase);
        const y = Math.round(rand(yMin, yMax));
        const candidate = { x, y, w: box.w, h: box.h };
        if (!intersects(candidate, exclusion) && placed.every(p => !intersects(candidate, p))) {
          placedPos = candidate;
        }
        attempts++;
      }

      if (!placedPos) {
        const yMin = Math.max(margin, yMinBase);
        const yMax = Math.max(yMin + 1, yMaxBase);
        placedPos = { x: pickX(), y: Math.round(rand(yMin, yMax)), w: box.w, h: box.h };
      }

    tile.style.left = `${placedPos.x}px`;
    tile.style.top = `${placedPos.y}px`;
    placed.push(placedPos);
    scatter.appendChild(tile);
    tileRefs.push(tile);

    // Record center point for spline
    const cx = placedPos.x + box.w / 2;
    const cy = placedPos.y + box.h / 2;
    pathPoints[idx] = { x: cx, y: cy };

      // Remove custom click overlay; allow default navigation
      tile.dataset.idx = String(idx);
      enableDrag(tile);
  });

  // Add top CTA before the first project to jump down by 1 viewport
  (function addTopCTA() {
    if (!placed.length) return;
    const firstBox = placed[0];
    if (!firstBox) return;

    // Create CTA first to measure its natural size
    const cta = document.createElement('a');
    cta.className = 'tile cta works-top';
    cta.href = '#';
    cta.textContent = 'WORKS';
    cta.style.visibility = 'hidden';
    cta.style.left = '0px';
    cta.style.top = '0px';
    scatter.appendChild(cta);

    const box = { w: cta.offsetWidth, h: cta.offsetHeight };

    // Constrain horizontal spawn to centered 80% of #app, max 1200px (same as tiles)
    const app = document.getElementById('app');
    const appRect = app.getBoundingClientRect();
    const scRect = scatter.getBoundingClientRect();
    const appW = Math.round(appRect.width);
    const spawnW = Math.min(Math.round(appW * 0.8), 1200);
    const spawnLeft = Math.round((appW - spawnW) / 2);
    const spawnLeftInScatter = Math.round((appRect.left - scRect.left) + spawnLeft);
    const xMin = spawnLeftInScatter + margin;
    const xMax = Math.max(xMin, spawnLeftInScatter + spawnW - box.w - margin);

    // Position CTA above the first project tile, avoiding brand exclusion
    const targetLeftCenter = Math.round(firstBox.x + firstBox.w / 2 - box.w / 2);
    const NEAR_SPAN = 80; // px range around first project's center
    let nearXMin = Math.max(xMin, targetLeftCenter - NEAR_SPAN);
    let nearXMax = Math.min(xMax, targetLeftCenter + NEAR_SPAN);
    if (nearXMax < nearXMin + 2) { nearXMin = xMin; nearXMax = xMax; }

    const desiredY = brandBottomY + CTA_GAP_BELOW_BRAND; // fixed gap below brand
    const minY = desiredY;
    const maxY = Math.max(minY + 1, firstBox.y - box.h - CTA_TO_FIRST_PROJECT_GAP); // enforce 500px gap above CTA

    let attempts = 0;
    let placedPos = null;
    while (attempts < 80 && !placedPos) {
      const x = Math.round(rand(nearXMin, nearXMax));
      const y = minY; // lock CTA Y to exact 200px below brand
      const candidate = { x, y, w: box.w, h: box.h };
      if (!intersects(candidate, exclusion) && placed.every(p => !intersects(candidate, p))) {
        placedPos = candidate;
      }
      attempts++;
    }
    if (!placedPos) {
      // Fallback: place at desired Y position and within available X range
      const x = Math.round(rand(xMin, xMax));
      const y = minY;
      placedPos = { x, y, w: box.w, h: box.h };
    }

    cta.style.left = `${placedPos.x}px`;
    cta.style.top = `${placedPos.y}px`;
    cta.style.visibility = '';

    // Connect to the line as the FIRST point
    const cx = placedPos.x + box.w / 2;
    const cy = placedPos.y + box.h / 2;
    pathPoints.unshift({ x: cx, y: cy });
    tileRefs.unshift(cta);

    // Click scrolls down by one viewport height
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      const vh = window.innerHeight;
      window.scrollTo({ top: window.scrollY + vh, behavior: 'smooth' });
    });
  })();

  // Add CTA button at the end, connected to the line
  (function addCTA() {
    const idx = pathPoints.length; // append as the last point after any top CTA

    // Create CTA first to measure its natural size
    const cta = document.createElement('a');
    cta.className = 'tile cta';
    cta.href = 'works.html';
    cta.textContent = 'See All My Works';
    cta.style.visibility = 'hidden';
    cta.style.left = '0px';
    cta.style.top = '0px';
    scatter.appendChild(cta);

    const box = { w: cta.offsetWidth, h: cta.offsetHeight };

    // Constrain horizontal spawn to centered 80% of #app, max 1200px (same as tiles)
    const app = document.getElementById('app');
    const appRect = app.getBoundingClientRect();
    const scRect = scatter.getBoundingClientRect();
    const appW = Math.round(appRect.width);
    const spawnW = Math.min(Math.round(appW * 0.8), 1200);
    const spawnLeft = Math.round((appW - spawnW) / 2);
    const spawnLeftInScatter = Math.round((appRect.left - scRect.left) + spawnLeft);
    const xMin = spawnLeftInScatter + margin;
    const xMax = Math.max(xMin, spawnLeftInScatter + spawnW - box.w - margin);

    // Position CTA relatively close to the last project tile
    const lastIdx = Math.max(0, orderedWorks.length - 1);
    const lastBox = placed[lastIdx];
    const targetLeftCenter = Math.round(lastBox.x + lastBox.w / 2 - box.w / 2);
    const NEAR_SPAN = 80; // keep CTA horizontally near the last project
    let nearXMin = Math.max(xMin, targetLeftCenter - NEAR_SPAN);
    let nearXMax = Math.min(xMax, targetLeftCenter + NEAR_SPAN);
    if (nearXMax < nearXMin + 2) { nearXMin = xMin; nearXMax = xMax; }
    // Vertical: place under the last project with a modest, consistent gap
    const VERTICAL_GAP_BASE = 80; // base gap below last project
    const VERTICAL_GAP_JITTER = 18; // small variation to avoid overlap while not drifting too far
    const baseY = lastBox.y + lastBox.h + VERTICAL_GAP_BASE;
    let nearYMin = Math.max(margin, baseY);
    let nearYMax = Math.min(canvasH - box.h - margin, baseY + VERTICAL_GAP_JITTER);
    let hasNearYRange = nearYMax > nearYMin + 1;
    // Desktop: if there isn't enough room to place CTA just below the last project,
    // expand the canvas tail and recompute the range so CTA stays under the last project.
    if (!hasNearYRange && !(typeof isMobileLike === 'function' && isMobileLike())) {
      const rootStyles = getComputedStyle(document.documentElement);
      const tailFactorStr = rootStyles.getPropertyValue('--desktop-tail-vh').trim();
      const tailFactor = parseFloat(tailFactorStr) || 0.45;
      const desiredBottomY = baseY + VERTICAL_GAP_JITTER; // CTA top target
      const minCanvasHForCTA = Math.max(
        desiredBottomY + box.h + margin,
        Math.round(vh * (1 + tailFactor))
      );
      if (minCanvasHForCTA > canvasH) {
        canvasH = minCanvasHForCTA;
        scatter.style.height = `${canvasH}px`;
        svg.setAttribute('viewBox', `0 0 ${vw} ${canvasH}`);
        nearYMax = Math.min(canvasH - box.h - margin, baseY + VERTICAL_GAP_JITTER);
        hasNearYRange = nearYMax > nearYMin + 1;
      }
    }

    let attempts = 0;
    let placedPos = null;
    while (attempts < 80 && !placedPos) {
      const x = Math.round(rand(nearXMin, nearXMax));
      const y = hasNearYRange
        ? Math.round(rand(nearYMin, nearYMax))
        : Math.min(canvasH - box.h - margin, baseY);
      const candidate = { x, y, w: box.w, h: box.h };
      if (!intersects(candidate, exclusion) && placed.every(p => !intersects(candidate, p))) {
        placedPos = candidate;
      }
      attempts++;
    }
    if (!placedPos) {
      // Fallback: anywhere within band near the end of canvas
      const x = Math.round(rand(xMin, xMax));
      const y = Math.min(canvasH - box.h - margin, baseY);
      placedPos = { x, y, w: box.w, h: box.h };
    }

    cta.style.left = `${placedPos.x}px`;
    cta.style.top = `${placedPos.y}px`;
    cta.style.visibility = '';
    placed.push(placedPos);

    // Add CTA center to path as last point
    const cx = placedPos.x + box.w / 2;
    const cy = placedPos.y + box.h / 2;
  pathPoints[idx] = { x: cx, y: cy };
  tileRefs.push(cta);
    // After placing the bottom CTA, compact the canvas tail on mobile so footer sits closer
    if (typeof isMobileLike === 'function' && isMobileLike()) {
      const usedBottom = placed.reduce((m, p) => Math.max(m, p.y + p.h), 0);
      const rootStyles = getComputedStyle(document.documentElement);
      const varGap = rootStyles.getPropertyValue('--mobile-cta-footer-gap').trim();
      const varVhMin = rootStyles.getPropertyValue('--mobile-tail-min-vh').trim();
      const tailGapPx = parseInt(varGap, 10) || margin * 3;
      const vhMinFactor = parseFloat(varVhMin) || 1.3;
      const compacted = Math.max(Math.round(vh * vhMinFactor), usedBottom + tailGapPx);
      if (compacted < canvasH) {
        canvasH = compacted;
        scatter.style.height = `${canvasH}px`;
        svg.setAttribute('viewBox', `0 0 ${vw} ${canvasH}`);
      }
    }
  })();

  // Build smooth path through project centers (Catmull-Rom to Bezier)
  function buildSmoothPath(points) {
    if (!points || points.length < 2) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
    }
    return d;
  }
  const d = buildSmoothPath(pathPoints);
  pathEl.setAttribute('d', d);

  // Animate path linearly and pop tiles when line reaches them
  function animatePathAndTiles(pathEl, points, tiles) {
    if (!points.length || !tiles.length) return;
    // Ensure tiles start hidden
    tiles.forEach(t => t.classList.remove('popped'));

    let total = pathEl.getTotalLength();
    // Configure trim-path via stroke dash (JS-driven animation)
    pathEl.style.strokeDasharray = `${total}`;
    pathEl.style.strokeDashoffset = `${total}`;
    const speed = 3500; // px per second (constant)
    // Compute milestone lengths when path passes each center, scanning forward
    let sampleStep = Math.max(2, total / 1500);
    let searchL = 0;
    let milestones = [];
    function recomputeMilestones() {
      searchL = 0;
      milestones = [];
      for (let i = 0; i < points.length; i++) {
        const target = points[i];
        let bestL = searchL;
        let bestD2 = Infinity;
        for (let l = searchL; l <= total; l += sampleStep) {
          const p = pathEl.getPointAtLength(l);
          const dx = p.x - target.x;
          const dy = p.y - target.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < bestD2) { bestD2 = d2; bestL = l; }
          if (d2 < 1) { break; }
        }
        milestones.push(bestL);
        searchL = bestL;
      }
    }
    recomputeMilestones();

    // JS-driven draw head position
    let currentLen = 0;
    let poppedIdx = 0; // will pop first on start
    let animating = false; // start paused until assets loaded
    let lastTs = 0;
    const tolerance = 1.5;

    function getStopIndex() {
      // Stop after revealing all visible tiles + 1
      let maxVisible = -1;
      const vh = window.innerHeight;
      for (let i = 0; i < tiles.length; i++) {
        const r = tiles[i].getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) {
          maxVisible = Math.max(maxVisible, i);
        }
      }
      const stop = Math.min(points.length - 1, Math.max(0, maxVisible + 1));
      return stop;
    }

    function headInViewport() {
      const scatterRect = scatter.getBoundingClientRect();
      const head = pathEl.getPointAtLength(currentLen);
      const headViewportY = head.y + scatterRect.top;
      return headViewportY >= 0 && headViewportY <= window.innerHeight;
    }

    let stopLen = milestones[getStopIndex()];
    let resumeTimer = null;
    const RESUME_DELAY_MS = 9;

    function step(ts) {
      if (!animating) return;
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      currentLen = Math.min(total, currentLen + speed * dt);
      pathEl.style.strokeDashoffset = `${total - currentLen}`;

      while (poppedIdx < milestones.length && currentLen >= (milestones[poppedIdx] - tolerance)) {
        tiles[poppedIdx].classList.add('popped');
        poppedIdx++;
      }

      // Pause once we've revealed all visible tiles + 1
      if (currentLen >= stopLen - tolerance) {
        animating = false;
        return;
      }

      requestAnimationFrame(step);
    }

    function startAnimation() {
      if (animating) return;
      animating = true;
      lastTs = 0;
      // Slight delay before first project pops
      setTimeout(() => {
        if (tiles[0]) {
          tiles[0].classList.add('popped');
          poppedIdx = Math.max(poppedIdx, 1);
        }
      }, 200);
      stopLen = milestones[getStopIndex()];
      requestAnimationFrame(step);
    }

    // Wait for external start signal (after loader hides)
    window.addEventListener('spline:start', startAnimation, { once: true });
    window.addEventListener('spline:start', revealTitleAndBio, { once: true });

    function onScroll() {
      // Always recalc target stop based on current viewport
      const newStopLen = milestones[getStopIndex()];
      if (!animating) {
        // If paused and user scrolled beyond current head, resume after a slight delay
        if (currentLen < newStopLen - tolerance) {
          clearTimeout(resumeTimer);
          resumeTimer = setTimeout(() => {
            stopLen = milestones[getStopIndex()];
            animating = true;
            lastTs = 0;
            requestAnimationFrame(step);
          }, RESUME_DELAY_MS);
        } else {
          // Keep target updated even while paused
          stopLen = newStopLen;
        }
      } else {
        // Update stop target while animating so it adapts to fast scrolls
        stopLen = newStopLen;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    function rebuild() {
      const d = buildSmoothPath(points);
      pathEl.setAttribute('d', d);
      total = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = `${total}`;
      sampleStep = Math.max(2, total / 1500);
      // Preserve already-popped tiles and anchor currentLen accordingly
      poppedIdx = tiles.reduce((acc, t) => acc + (t.classList.contains('popped') ? 1 : 0), 0);
      recomputeMilestones();
      currentLen = Math.min(total, poppedIdx > 0 ? milestones[poppedIdx - 1] : 0);
      pathEl.style.strokeDashoffset = `${total - currentLen}`;
      stopLen = milestones[getStopIndex()];
    }
    function softRebuild() {
      const d = buildSmoothPath(points);
      pathEl.setAttribute('d', d);
      // Keep total and dash lengths; just update the visual stroke offset
      pathEl.style.strokeDashoffset = `${total - currentLen}`;
    }
    return { rebuild, softRebuild };
  }
  splineCtl = animatePathAndTiles(pathEl, pathPoints, tileRefs);

  // Cyclic sticker batches: spawn 6 at a time, up to 12, then cycle
  (function manageStickers() {
    // Configurable batch sizes and rounds for mobile vs desktop
    const IS_MOBILE = isMobileLike();
    const STICKER_BATCH_SIZE_MOBILE = 4;   // mobile: stickers per round
    const STICKER_ROUNDS_MOBILE = 1;       // mobile: round then reset
    const STICKER_BATCH_SIZE_DESKTOP = 3;  // desktop: stickers per round
    const STICKER_ROUNDS_DESKTOP = 3;      // desktop: rounds then reset

    const BATCH_SIZE = IS_MOBILE ? STICKER_BATCH_SIZE_MOBILE : STICKER_BATCH_SIZE_DESKTOP;
    const ROUNDS = IS_MOBILE ? STICKER_ROUNDS_MOBILE : STICKER_ROUNDS_DESKTOP;
    const MAX_STICKERS = BATCH_SIZE * ROUNDS;
    const ENTER_DELAY_MS_PER_ITEM = 50; // slight cascaded delay (per sticker)
    const EXIT_ANIM_MS = 240; // must match CSS transition duration
    const VISIBLE_MS = 2500; // how long stickers stay after reaching MAX_STICKERS
    const BATCH_GAP_MS = 2000; // gap between batches when ROUNDS > 1

    const stickerRects = []; // active sticker rects for collision control
    const activeStickerEls = []; // current DOM nodes

    function randomSample(list, count) {
      const pool = list.slice();
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      if (count <= pool.length) return pool.slice(0, count);
      // If not enough unique items, allow repeats
      const result = pool.slice(0);
      while (result.length < count && pool.length > 0) {
        result.push(pool[Math.floor(Math.random() * pool.length)]);
      }
      return result.slice(0, count);
    }

    function placeSticker(url, preferredBand) {
      const vwNow = window.innerWidth || 1024;
      const size = Math.round(Math.max(70, Math.min(80, vwNow * 0.06))); // ~6% of viewport, clamped to 80px
      const el = document.createElement('div');
      el.className = 'sticker';
      // Use CSS clamp so stickers respond to viewport changes; JS `size` is for collisions
      el.style.setProperty('--sticker-size', `clamp(70px, 6vw, 80px)`);
      const baseRot = Math.round(rand(0, 360));
      const rotEnd = baseRot;
      el.style.setProperty('--rot', `${rotEnd}deg`);
      el.style.backgroundImage = `url(${url})`;

      const box = { w: size, h: size };
      let attempts = 0;
      let placedPos = null;
      // Helper: pick Y within mobile bands or desktop first-viewport section
      function pickMobileY(pref) {
        const scRect = scatter.getBoundingClientRect();
        const scTopDoc = scRect.top + window.scrollY;
        const brandRectDoc = brandEl ? brandEl.getBoundingClientRect() : null;
        const brandBottomDoc = brandRectDoc ? (brandRectDoc.bottom + window.scrollY) : (window.scrollY + 200);
        const firstTile = tileRefs && tileRefs.length ? tileRefs[0] : null;
        const firstTileRect = firstTile ? firstTile.getBoundingClientRect() : null;
        const firstTileTopDoc = firstTileRect ? (firstTileRect.top + window.scrollY) : (scTopDoc + Math.min(vh, canvasH) / 2);

        const bandTop = (() => {
          // Fix: anchor to the first 200px of the PAGE, not the current viewport
          const minDoc = 0; // page top
          const maxDoc = Math.max(0, 200 - box.h); // ensure sticker fits within 200px band
          if (maxDoc > minDoc + 1) return [minDoc - scTopDoc, maxDoc - scTopDoc];
          return null;
        })();
        const bandGap = (() => {
          const minDoc = brandBottomDoc;
          const maxDoc = firstTileTopDoc - box.h;
          if (maxDoc > minDoc + 1) return [minDoc - scTopDoc, maxDoc - scTopDoc];
          return null;
        })();

        // Try preferred band first, then fall back
        const tryBand = (bandRange) => {
          if (!bandRange) return null;
          const [minY, maxY] = bandRange;
          if (maxY <= minY + 1) return null;
          return Math.round(rand(minY, maxY));
        };
        let y = null;
        if (pref === 'top') y = tryBand(bandTop);
        else if (pref === 'gap') y = tryBand(bandGap);
        if (y === null) y = tryBand(bandGap);
        if (y === null) y = tryBand(bandTop);
        if (y !== null) return y;
        // Final fallback: first viewport
          const yUpperFallback = Math.max(
            margin + 1,
            Math.min(vh - box.h - margin, canvasH - box.h - margin)
          );
          return Math.round(rand(margin, yUpperFallback));
      }
      // Desktop: limit to the first viewport height (first section of page)
      const yUpper = Math.max(
        margin + 1,
        Math.min(vh - box.h - margin, canvasH - box.h - margin)
      );
      while (attempts < 80 && !placedPos) {
        const x = Math.round(rand(margin, Math.max(margin, vw - box.w - margin)));
        const y = IS_MOBILE ? pickMobileY(preferredBand) : Math.round(rand(margin, yUpper));
        const candidate = { x, y, w: box.w, h: box.h };
        if (
          !intersects(candidate, exclusion) &&
          placed.every(p => !intersects(candidate, p)) &&
          stickerRects.every(p => !intersects(candidate, p))
        ) {
          placedPos = candidate;
        }
        attempts++;
      }
      if (!placedPos) {
        placedPos = {
          x: Math.round(rand(margin, vw - box.w - margin)),
          y: IS_MOBILE ? pickMobileY(preferredBand) : Math.round(rand(margin, yUpper)),
          w: box.w,
          h: box.h
        };
      }

      el.style.left = `${placedPos.x}px`;
      el.style.top = `${placedPos.y}px`;
      scatter.appendChild(el);
      // Enter animation: start slightly zoomed then settle to 1 via CSS vars
      el.style.setProperty('--scale', '1.5');
      // Force reflow so the transition reliably plays
      void el.offsetWidth;
      // next frame -> animate to final then clear inline var so hover/drag can override
      requestAnimationFrame(() => {
        el.style.setProperty('--scale', '1');
        setTimeout(() => { el.style.removeProperty('--scale'); }, 260);
      });

      stickerRects.push(placedPos);
      activeStickerEls.push(el);

      // Enable dragging for stickers (desktop and mobile)
      (function enableStickerDrag() {
        // Disable sticker dragging on mobile-like devices
        if (isMobileLike()) return;
        let startX = 0, startY = 0;
        let startLeft = 0, startTop = 0;
        let scLeft = 0, scTop = 0, scWidth = 0, scHeight = 0;
        let elW = 0, elH = 0;
        let moved = false;

        const onPointerDown = (e) => {
          // Only primary button when mouse; allow touch
          if (e.button !== undefined && e.button !== 0) return;
          el.setPointerCapture && el.setPointerCapture(e.pointerId);
          const scRect = scatter.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          scLeft = scRect.left;
          scTop = scRect.top;
          scWidth = scRect.width;
          scHeight = scRect.height;
          elW = elRect.width;
          elH = elRect.height;
          startX = e.clientX;
          startY = e.clientY;
          startLeft = parseFloat(el.style.left || (elRect.left - scLeft)) || 0;
          startTop = parseFloat(el.style.top || (elRect.top - scTop)) || 0;
          moved = false;
          el.classList.add('dragging');
          e.preventDefault();
        };

        const onPointerMove = (e) => {
          if (!el.classList.contains('dragging')) return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          const nextLeft = Math.max(0, Math.min(scWidth - elW, Math.round(startLeft + dx)));
          const nextTop = Math.max(0, Math.min(scHeight - elH, Math.round(startTop + dy)));
          el.style.left = `${nextLeft}px`;
          el.style.top = `${nextTop}px`;
          if (!moved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) moved = true;
          // Update collision rect for this sticker
          const i = activeStickerEls.indexOf(el);
          if (i >= 0) {
            stickerRects[i] = { x: nextLeft, y: nextTop, w: elW, h: elH };
          }
          e.preventDefault();
        };

        const onPointerUp = (e) => {
          if (!el.classList.contains('dragging')) return;
          el.classList.remove('dragging');
          el.releasePointerCapture && el.releasePointerCapture(e.pointerId);
          // If moved, mark as sticky so it survives exit cycles
          if (moved) el.dataset.sticky = '1';
          e.preventDefault();
        };

        el.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
      })();
    }

    function spawnBatch() {
      const urls = randomSample(stickers, BATCH_SIZE);
      let bandPlan = null;
      if (IS_MOBILE) {
        const topCount = Math.floor(BATCH_SIZE / 2);
        const gapCount = BATCH_SIZE - topCount;
        bandPlan = [];
        for (let i = 0; i < topCount; i++) bandPlan.push('top');
        for (let i = 0; i < gapCount; i++) bandPlan.push('gap');
        // Shuffle the plan to avoid strict grouping
        for (let i = bandPlan.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [bandPlan[i], bandPlan[j]] = [bandPlan[j], bandPlan[i]];
        }
      }
      urls.forEach((url, i) => {
        scheduleStickerTimeout(() => {
          if (IS_MOBILE) {
            const pref = bandPlan ? bandPlan[i] : (Math.random() < 0.5 ? 'top' : 'gap');
            placeSticker(url, pref);
          } else {
            placeSticker(url);
          }
        }, i * ENTER_DELAY_MS_PER_ITEM);
      });
    }

  function exitAllAndClear(next) {
    // Preserve any sticker that has been dragged (marked sticky) or is currently dragging
    const survivors = [];
    const survivorRects = [];

    activeStickerEls.forEach((el, i) => {
      const isSticky = el.dataset.sticky === '1' || el.classList.contains('dragging');
      if (isSticky) {
        survivors.push(el);
        survivorRects.push(stickerRects[i]);
      } else {
        // Exit animation: zoom out and fade out for non-sticky
        el.style.transform = `${el.style.transform.replace(/scale\([^)]*\)/, 'scale(0)')}`;
        el.style.opacity = '0';
      }
    });

    setTimeout(() => {
      // Remove only non-sticky elements
      activeStickerEls.forEach(el => {
        const isSticky = el.dataset.sticky === '1' || el.classList.contains('dragging');
        if (!isSticky) el.remove();
      });

      // Rebuild arrays keeping survivors for collision and future cycles
      activeStickerEls.length = 0;
      stickerRects.length = 0;
      for (let i = 0; i < survivors.length; i++) {
        activeStickerEls.push(survivors[i]);
        stickerRects.push(survivorRects[i]);
      }
      next && next();
    }, EXIT_ANIM_MS);
  }

    // Cycle: spawn "ROUNDS" batches, then clear and repeat
    function cycle() {
      let roundsDone = 0;
      const spawnNextRound = () => {
        spawnBatch();
        roundsDone++;
        if (roundsDone < ROUNDS) {
          scheduleStickerTimeout(spawnNextRound, BATCH_GAP_MS);
        } else {
          // Keep visible a bit longer before exit and refresh
          scheduleStickerTimeout(() => exitAllAndClear(cycle), VISIBLE_MS);
        }
      };
      spawnNextRound();
    }

    cycle();
  })();
  }

  // Keep mobile center focus updated
  window.addEventListener('scroll', updateMobileFocus, { passive: true });
  window.addEventListener('resize', () => { setTimeout(updateMobileFocus, 50); });

  // Preload covers before laying out and starting animation
  const coverUrls = works.map(w => w.cover).filter(Boolean);
  await preloadImages(coverUrls, updateLoaderProgress);
  await loadStickers();
  layout();
  // Initialize mobile focus once DOM is ready
  setTimeout(updateMobileFocus, 50);

  // Hide loader after the animation visually reaches the end (with fallback)
  if (window.Loader) {
    try {
      await window.Loader.waitUntilComplete(1200);
    } catch (_) {}
    await window.Loader.hide();
    // Reveal title/bio immediately after loader hides
    revealTitleAndBio();
  }
  // Fallback when no loader: reveal right away
  if (!window.Loader) {
    revealTitleAndBio();
  }
  setTimeout(() => {
    window.dispatchEvent(new Event('spline:start'));
  }, 800);
  let resizeT;
  let lastResizeW = window.innerWidth;
  let lastResizeH = window.innerHeight;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    const nextW = window.innerWidth;
    const nextH = window.innerHeight;
    resizeT = setTimeout(() => {
      const widthChanged = Math.abs(nextW - lastResizeW) > 2; // tolerate minor oscillations
      const orientationChanged = (nextW > nextH) !== (lastResizeW > lastResizeH);
      if (widthChanged || orientationChanged) {
        lastResizeW = nextW;
        lastResizeH = nextH;
        // Stop any pending sticker timers before rebuilding layout
        clearStickerTimers();
        layout();
      } else {
        // Height-only changes on mobile: avoid full layout restart
        setTimeout(updateMobileFocus, 50);
      }
    }, 120);
  });

  // Corner menu interactions are now handled by components/menu.js
});
