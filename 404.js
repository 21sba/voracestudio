// Stickers-only script for the 404 page mirroring home’s logic
(function () {
  try { navigator.serviceWorker.register('sw.js'); } catch (_) {}

  // Shared helpers (mirroring home.js)
  const rand = (min, max) => Math.random() * (max - min) + min;
  const intersects = (a, b) => !(a.x + a.w < b.x || a.x > b.x + b.w || a.y + a.h < b.y || a.y > b.y + b.h);
  const isMobileLike = () => {
    const mq = (q) => window.matchMedia && window.matchMedia(q).matches;
    return mq('(hover: none)') || mq('(pointer: coarse)') || (window.innerWidth || 0) <= 768;
  };

  document.addEventListener('DOMContentLoaded', async () => {
    const brandEl = document.querySelector('.brand-block');
    const scatter = document.getElementById('scatter');
    if (!brandEl || !scatter) return;

    // Title letter wrapping and reveal (same as home)
    (function wrapTitleLetters() {
      const titleEl = brandEl.querySelector('.title');
      if (!titleEl || titleEl.querySelector('.letter')) return;
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
      if (titleEl && titleEl.classList.contains('reveal')) return;
      let letterCount = 0;
      if (titleEl) {
        const letters = Array.from(titleEl.querySelectorAll('.letter'));
        letterCount = letters.length;
        letters.forEach((span, idx) => { span.style.transitionDelay = `${idx * 10}ms`; });
        titleEl.classList.add('reveal');
      }
      if (bioEl) {
        const delayMs = Math.max(0, letterCount * 10 + 200);
        bioEl.style.transitionDelay = `${delayMs}ms`;
        bioEl.classList.add('reveal');
      }
    }

    const vw = window.innerWidth || 1024;
    const vh = window.innerHeight || 768;
    const getBrandRect = () => {
      const r = brandEl.getBoundingClientRect();
      const sc = scatter.getBoundingClientRect();
      return { x: r.left - sc.left, y: r.top - sc.top, w: r.width, h: r.height };
    };

    // Sticker asset list
    let stickers = [];
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
    await loadStickers();

    // Canvas sizing (keep a comfortable tail like home)
    const center = getBrandRect();
    const margin = 24;
    const exclusion = { x: Math.max(0, center.x - 60), y: Math.max(0, center.y - 40), w: center.w + 120, h: center.h + 80 };
    const targetH = Math.round(vh); // exactly one viewport height
    scatter.style.height = `${targetH}px`;
    const canvasH = scatter.clientHeight || targetH;

    // Reveal the hero once canvas sizing is in place (no loader on 404)
    revealTitleAndBio();

    // Sticker cycles and placement (mirrors manageStickers from home.js)
    const IS_MOBILE = isMobileLike();
    const STICKER_BATCH_SIZE_MOBILE = 4;
    const STICKER_ROUNDS_MOBILE = 1;
    const STICKER_BATCH_SIZE_DESKTOP = 3;
    const STICKER_ROUNDS_DESKTOP = 3;
    const BATCH_SIZE = IS_MOBILE ? STICKER_BATCH_SIZE_MOBILE : STICKER_BATCH_SIZE_DESKTOP;
    const ROUNDS = IS_MOBILE ? STICKER_ROUNDS_MOBILE : STICKER_ROUNDS_DESKTOP;
    const ENTER_DELAY_MS_PER_ITEM = 50;
    const EXIT_ANIM_MS = 240;
    const VISIBLE_MS = 2500;
    const BATCH_GAP_MS = 2000;

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

    const stickerRects = [];
    const activeStickerEls = [];
    const placed = [];

    function randomSample(list, count) {
      const pool = list.slice();
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      if (count <= pool.length) return pool.slice(0, count);
      const result = pool.slice(0);
      while (result.length < count && pool.length > 0) {
        result.push(pool[Math.floor(Math.random() * pool.length)]);
      }
      return result.slice(0, count);
    }

    function placeSticker(url, preferredBand) {
      const size = Math.round(Math.max(70, Math.min(80, (window.innerWidth || 1024) * 0.06)));
      const el = document.createElement('div');
      el.className = 'sticker';
      el.style.setProperty('--sticker-size', `clamp(70px, 6vw, 80px)`);
      el.style.setProperty('--rot', `${Math.round(rand(0, 360))}deg`);
      if (url) el.style.backgroundImage = `url(${url})`;

      const box = { w: size, h: size };
      let attempts = 0;
      let placedPos = null;

      function pickMobileY(pref) {
        const scRect = scatter.getBoundingClientRect();
        const scTopDoc = scRect.top + window.scrollY;
        const brandRectDoc = brandEl.getBoundingClientRect();
        const brandBottomDoc = brandRectDoc.bottom + window.scrollY;
        const bandTopRange = (() => {
          const minDoc = 0;
          const maxDoc = Math.max(0, 200 - box.h);
          if (maxDoc > minDoc + 1) return [minDoc - scTopDoc, maxDoc - scTopDoc];
          return null;
        })();
        const bandGapRange = (() => {
          const minDoc = brandBottomDoc;
          const maxDoc = scTopDoc + Math.min(vh, canvasH) - box.h;
          if (maxDoc > minDoc + 1) return [minDoc - scTopDoc, maxDoc - scTopDoc];
          return null;
        })();
        const tryBand = (range) => {
          if (!range) return null;
          const [minY, maxY] = range;
          if (maxY <= minY + 1) return null;
          return Math.round(rand(minY, maxY));
        };
        let y = null;
        if (pref === 'top') y = tryBand(bandTopRange);
        else if (pref === 'gap') y = tryBand(bandGapRange);
        if (y === null) y = tryBand(bandGapRange);
        if (y === null) y = tryBand(bandTopRange);
        if (y !== null) return y;
        const yUpperFallback = Math.max(margin + 1, Math.min(vh - box.h - margin, canvasH - box.h - margin));
        return Math.round(rand(margin, yUpperFallback));
      }

      const yUpper = Math.max(margin + 1, Math.min(vh - box.h - margin, canvasH - box.h - margin));
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
      el.style.setProperty('--scale', '1.5');
      void el.offsetWidth;
      requestAnimationFrame(() => {
        el.style.setProperty('--scale', '1');
        setTimeout(() => { el.style.removeProperty('--scale'); }, 260);
      });

      stickerRects.push(placedPos);
      activeStickerEls.push(el);

      // Dragging (desktop-only, mirrors home)
      (function enableStickerDrag() {
        if (isMobileLike()) return;
        let startX = 0, startY = 0;
        let startLeft = 0, startTop = 0;
        let scLeft = 0, scTop = 0, scWidth = 0, scHeight = 0;
        let elW = 0, elH = 0;
        let moved = false;

        const onPointerDown = (e) => {
          if (e.button !== undefined && e.button !== 0) return;
          el.setPointerCapture && el.setPointerCapture(e.pointerId);
          const scRect = scatter.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          scLeft = scRect.left; scTop = scRect.top; scWidth = scRect.width; scHeight = scRect.height;
          elW = elRect.width; elH = elRect.height;
          startX = e.clientX; startY = e.clientY;
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
          const i = activeStickerEls.indexOf(el);
          if (i >= 0) stickerRects[i] = { x: nextLeft, y: nextTop, w: elW, h: elH };
          e.preventDefault();
        };
        const onPointerUp = (e) => {
          if (!el.classList.contains('dragging')) return;
          el.classList.remove('dragging');
          el.releasePointerCapture && el.releasePointerCapture(e.pointerId);
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
      const survivors = [];
      const survivorRects = [];
      activeStickerEls.forEach((el, i) => {
        const isSticky = el.dataset.sticky === '1' || el.classList.contains('dragging');
        if (isSticky) {
          survivors.push(el);
          survivorRects.push(stickerRects[i]);
        } else {
          el.style.transform = `${el.style.transform.replace(/scale\([^)]*\)/, 'scale(0)')}`;
          el.style.opacity = '0';
        }
      });
      setTimeout(() => {
        activeStickerEls.forEach(el => {
          const isSticky = el.dataset.sticky === '1' || el.classList.contains('dragging');
          if (!isSticky) el.remove();
        });
        activeStickerEls.length = 0;
        stickerRects.length = 0;
        for (let i = 0; i < survivors.length; i++) {
          activeStickerEls.push(survivors[i]);
          stickerRects.push(survivorRects[i]);
        }
        next && next();
      }, EXIT_ANIM_MS);
    }

    function cycle() {
      let roundsDone = 0;
      const spawnNextRound = () => {
        spawnBatch();
        roundsDone++;
        if (roundsDone < ROUNDS) {
          scheduleStickerTimeout(spawnNextRound, BATCH_GAP_MS);
        } else {
          scheduleStickerTimeout(() => exitAllAndClear(cycle), VISIBLE_MS);
        }
      };
      spawnNextRound();
    }

    cycle();

    // Recycle cycles on resize to keep bands aligned
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        clearStickerTimers();
        cycle();
      }, 250);
    }, { passive: true });
  });
})();