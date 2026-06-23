import { rand, intersects, isMobileLike, scheduleStickerTimeout } from './utils.js';
import { enableDrag } from './interactions.js';
import { buildSmoothPath, animatePathAndTiles } from './spline.js';
import { loadStickers } from './assets.js';
import { Config } from './config.js';

function getBrandRect(brandEl, scatter) {
    const r = brandEl.getBoundingClientRect();
    const sc = scatter.getBoundingClientRect();
    return { x: r.left - sc.left, y: r.top - sc.top, w: r.width, h: r.height };
}

export function layout(scatter, works, brandEl, stickerTimers) {
    scatter.innerHTML = '';
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const center = getBrandRect(brandEl, scatter);
    const exclusion = {
        x: Math.max(0, center.x - 60),
        y: Math.max(0, center.y - 40),
        w: center.w + 120,
        h: center.h + 80,
    };

    const placed = [];
    const margin = Config.layout.MARGIN;
    const SIZE = Config.layout.SIZE;
    const CAPTION_H = Config.layout.CAPTION_H;
    const CTA_GAP_BELOW_BRAND = isMobileLike() ? Config.layout.CTA_GAP_BELOW_BRAND + 120 : Config.layout.CTA_GAP_BELOW_BRAND;
    const CTA_TO_FIRST_PROJECT_GAP = isMobileLike() ? Config.layout.CTA_TO_FIRST_PROJECT_GAP + 120 : Config.layout.CTA_TO_FIRST_PROJECT_GAP;
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
        Config.layout.PROJECTS_Y_OFFSET_MOBILE_MIN,
        brandBottomY + CTA_GAP_BELOW_BRAND + measureTopCTAHeight + CTA_TO_FIRST_PROJECT_GAP - margin
    );
    const PROJECTS_START_GAP_DESKTOP = Config.layout.PROJECTS_START_GAP_DESKTOP;
    const PROJECTS_Y_OFFSET_DESKTOP = Config.layout.PROJECTS_Y_OFFSET_DESKTOP;
    const ROW_GAP = Config.layout.ROW_GAP;

    // Show only first 6 works on mobile, 9 on desktop
    const limit = isMobileLike() ? 6 : 9;
    const orderedWorks = works.slice(0, limit);

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

    const lazyTiles = [];
    orderedWorks.forEach((work, idx) => {
        const size = SIZE;
        const tile = document.createElement('a');
        tile.className = 'tile';
        tile.href = `work.html?id=${encodeURIComponent(work.id)}`;
        tile.style.setProperty('--size', `${size}px`);
        const pC = work.colors || {};
        if (pC.accentColor) {
            tile.style.setProperty('--color3', pC.accentColor);
            try {
                const alt = pC.accentAlt || window.chroma(pC.accentColor).mix('white', 0.5).hex();
                tile.style.setProperty('--color4', alt);
            } catch (err) { }
        }

        const rot = rand(-20, 20);
        const visual = document.createElement('div');
        visual.className = 'visual';

        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        const coverUrl = (typeof work.cover === 'string') ? work.cover : (work.cover && work.cover.src ? work.cover.src : '');
        if (idx < 2) {
            // Eagerly load first two covers
            if (coverUrl) thumb.style.backgroundImage = `url(${coverUrl})`;
        } else {
            // Defer loading other covers; show skeleton placeholder
            thumb.classList.add('skeleton');
            if (coverUrl) thumb.dataset.cover = String(coverUrl);
        }

        const original = new Image();
        original.className = 'original';
        original.loading = 'lazy';
        if (idx < 2 && coverUrl) {
            original.src = coverUrl;
            original.onload = () => { thumb.classList.remove('skeleton'); };
            original.onerror = () => { thumb.classList.remove('skeleton'); };
        } else if (coverUrl) {
            original.dataset.cover = String(coverUrl);
        }

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

        // Collect lazy tiles (beyond the first two) for IntersectionObserver
        if (idx >= 2 && coverUrl) {
            lazyTiles.push({ tile, thumb, original, cover: String(coverUrl) });
        }

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
        enableDrag(tile, scatter, tileRefs, pathPoints, () => splineCtl, scheduleRebuild);
    });

    // Initialize lazy loading for covers beyond the first two
    (function initLazyCoverLoading() {
        if (!lazyTiles.length) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const t = entry.target;
                const rec = t.__lazyRec;
                if (!rec || rec.loaded) { io.unobserve(t); return; }
                // Apply cover and remove skeleton on load
                try {
                    if (rec.cover) {
                        // Do not replace skeleton background until the image has fully loaded.
                        // This ensures the shimmer is visible during network fetch.
                        rec.original.src = rec.cover;
                        const applyImage = () => {
                            rec.thumb.style.backgroundImage = `url(${rec.cover})`;
                            rec.thumb.classList.remove('skeleton');
                            rec.loaded = true;
                            io.unobserve(t);
                        };
                        rec.original.onload = applyImage;
                        rec.original.onerror = () => {
                            // On error, at least clear the skeleton to avoid permanent shimmer.
                            rec.thumb.classList.remove('skeleton');
                            rec.loaded = true;
                            io.unobserve(t);
                        };
                    }
                } catch (_) {
                    rec.thumb.classList.remove('skeleton');
                }
            });
        }, { root: null, rootMargin: '200px', threshold: 0.1 });
        lazyTiles.forEach((rec) => {
            rec.tile.__lazyRec = rec;
            io.observe(rec.tile);
        });
    })();

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

    const d = buildSmoothPath(pathPoints);
    pathEl.setAttribute('d', d);

    splineCtl = animatePathAndTiles(pathEl, pathPoints, tileRefs);

    // Cyclic sticker batches: spawn 6 at a time, up to 12, then cycle
    (function manageStickers() {
        const stickers = loadStickers();
        // Configurable batch sizes and rounds for mobile vs desktop
        const IS_MOBILE = isMobileLike();
        const STICKER_BATCH_SIZE_MOBILE = Config.stickers.BATCH_SIZE_MOBILE;
        const STICKER_ROUNDS_MOBILE = Config.stickers.ROUNDS_MOBILE;
        const STICKER_BATCH_SIZE_DESKTOP = Config.stickers.BATCH_SIZE_DESKTOP;
        const STICKER_ROUNDS_DESKTOP = Config.stickers.ROUNDS_DESKTOP;

        const BATCH_SIZE = IS_MOBILE ? STICKER_BATCH_SIZE_MOBILE : STICKER_BATCH_SIZE_DESKTOP;
        const ROUNDS = IS_MOBILE ? STICKER_ROUNDS_MOBILE : STICKER_ROUNDS_DESKTOP;
        const MAX_STICKERS = BATCH_SIZE * ROUNDS;
        const ENTER_DELAY_MS_PER_ITEM = Config.stickers.ENTER_DELAY_MS;
        const EXIT_ANIM_MS = Config.stickers.EXIT_ANIM_MS;
        const VISIBLE_MS = Config.stickers.VISIBLE_MS;
        const BATCH_GAP_MS = Config.stickers.BATCH_GAP_MS;

        const stickerRects = []; // active sticker rects for collision control
        const activeStickerEls = []; // current DOM nodes
        const lastGeneratedUrls = []; // track to prevent 3 consecutive identical stickers

        function randomSample(list, count) {
            const pool = list.slice();
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            if (count <= pool.length) return pool.slice(0, count);
            // If not enough unique items, allow repeats
            const result = pool.slice(0, 0);
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
            el.dataset.band = preferredBand;

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
                // Disable sticker dragging on mobile-like devices, instead jump on click
                if (isMobileLike()) {
                    el.addEventListener('click', (e) => {
                        const targetBand = el.dataset.band === 'top' ? 'gap' : 'top';
                        const newY = pickMobileY(targetBand) || Math.round(rand(margin, Math.max(margin, canvasH - box.h - margin)));
                        const vwNow = window.innerWidth || 1024;
                        const newX = Math.round(rand(margin, Math.max(margin, vwNow - box.w - margin)));

                        el.style.transition = 'left 450ms cubic-bezier(0.25, 0, 0, 1), top 450ms cubic-bezier(0.25, 0, 0, 1), transform 225ms cubic-bezier(0.34, 1.56, 0.64, 1)';
                        el.style.left = `${newX}px`;
                        el.style.top = `${newY}px`;
                        el.style.setProperty('--scale', '1.3');

                        const i = activeStickerEls.indexOf(el);
                        if (i >= 0) {
                            stickerRects[i] = { x: newX, y: newY, w: box.w, h: box.h };
                        }

                        setTimeout(() => {
                            el.style.setProperty('--scale', '1');
                        }, 225);

                        setTimeout(() => {
                            el.style.transition = '';
                        }, 450);

                        // Clear sticky from all other stickers and make THIS one sticky
                        activeStickerEls.forEach(st => delete st.dataset.sticky);
                        el.dataset.sticky = '1';
                        el.dataset.band = targetBand;

                        e.preventDefault();
                    });
                    return;
                }
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
            // Calculate how many stickers to spawn
            let spawnCount = BATCH_SIZE;
            if (IS_MOBILE) {
                const stickyCount = activeStickerEls.filter(st => st.dataset.sticky === '1').length;
                spawnCount = Math.max(0, BATCH_SIZE - stickyCount);
            }

            // Pick stickers ensuring no more than 2 consecutive are identical.
            const urls = [];
            if (stickers && stickers.length > 0) {
                for (let i = 0; i < spawnCount; i++) {
                    let candidate;
                    let attempts = 0;
                    do {
                        candidate = stickers[Math.floor(Math.random() * stickers.length)];
                        attempts++;
                    } while (
                        attempts < 10 &&
                        stickers.length > 1 &&
                        lastGeneratedUrls.length >= 2 &&
                        lastGeneratedUrls[lastGeneratedUrls.length - 1] === candidate &&
                        lastGeneratedUrls[lastGeneratedUrls.length - 2] === candidate
                    );
                    urls.push(candidate);
                    lastGeneratedUrls.push(candidate);
                    if (lastGeneratedUrls.length > 2) {
                        lastGeneratedUrls.shift();
                    }
                }
            }
            let bandPlan = null;
            if (IS_MOBILE) {
                const topCount = Math.floor(spawnCount / 2);
                const gapCount = spawnCount - topCount;
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
                }, i * ENTER_DELAY_MS_PER_ITEM, stickerTimers);
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
                    scheduleStickerTimeout(spawnNextRound, BATCH_GAP_MS, stickerTimers);
                } else {
                    // Keep visible a bit longer before exit and refresh
                    scheduleStickerTimeout(() => exitAllAndClear(cycle), VISIBLE_MS, stickerTimers);
                }
            };
            spawnNextRound();
        }

        cycle();
    })();

    return splineCtl;
}
