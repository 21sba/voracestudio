import { isMobileLike } from './utils.js';

export function wrapTitleLetters(brandEl) {
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
        const words = text.split(/(\s+)/);
        for (const w of words) {
            if (!w) continue;
            if (/^\s+$/.test(w)) {
                frag.appendChild(document.createTextNode(w));
            } else {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                wordSpan.style.display = 'inline-block';
                for (let i = 0; i < w.length; i++) {
                    const span = document.createElement('span');
                    span.className = 'letter';
                    span.textContent = w[i];
                    wordSpan.appendChild(span);
                }
                frag.appendChild(wordSpan);
            }
        }
        node.parentNode && node.parentNode.replaceChild(frag, node);
    }
}

export function revealTitleAndBio(brandEl) {
    const titleEl = brandEl && brandEl.querySelector('.title');
    const bioEl = brandEl && brandEl.querySelector('.bio');
    const subtitleEl = brandEl && brandEl.querySelector('.subtitle');
    // Prevent double-run if already revealed
    if (titleEl && titleEl.classList.contains('reveal')) return;
    
    if (subtitleEl) {
        subtitleEl.style.transitionDelay = `0ms`;
        subtitleEl.classList.add('reveal');
    }

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

export function initBrandScrollEffect(brandEl) {
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
        brandEl.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';
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
}

export function updateMobileFocus() {
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

export function enableDrag(tile, scatter, tileRefs, pathPoints, getSplineCtl, scheduleRebuild) {
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

        if (moved) {
            let vx = 0;
            let vy = 0;
            const k = 0.07; // spring stiffness
            const damp = 0.82; // damping

            let currX = parseFloat(tile.style.left) || 0;
            let currY = parseFloat(tile.style.top) || 0;

            const animateBounce = () => {
                if (tile.classList.contains('dragging')) return;

                const dx = startLeft - currX;
                const dy = startTop - currY;

                vx += dx * k;
                vy += dy * k;
                vx *= damp;
                vy *= damp;

                currX += vx;
                currY += vy;

                tile.style.left = `${currX}px`;
                tile.style.top = `${currY}px`;

                const cx = currX + tileW / 2;
                const cy = currY + tileH / 2;
                const i = tileRefs.indexOf(tile);
                if (i >= 0) {
                    pathPoints[i] = { x: cx, y: cy };
                }
                scheduleRebuild();

                if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(vx) < 0.5 && Math.abs(vy) < 0.5) {
                    tile.style.left = `${startLeft}px`;
                    tile.style.top = `${startTop}px`;
                    if (i >= 0) {
                        pathPoints[i] = { x: startLeft + tileW / 2, y: startTop + tileH / 2 };
                    }
                    const splineCtl = getSplineCtl();
                    if (splineCtl && typeof splineCtl.rebuild === 'function') {
                        splineCtl.rebuild();
                    }
                    return;
                }
                requestAnimationFrame(animateBounce);
            };
            requestAnimationFrame(animateBounce);
        } else {
            const splineCtl = getSplineCtl();
            if (splineCtl && typeof splineCtl.rebuild === 'function') {
                splineCtl.rebuild();
            }
        }
        e.preventDefault();
    };

    const onPointerCancel = (e) => {
        if (!tile.classList.contains('dragging')) return;
        tile.classList.remove('dragging');
        tile.releasePointerCapture && tile.releasePointerCapture(e.pointerId);
        if (moved) {
            tile.style.left = `${startLeft}px`;
            tile.style.top = `${startTop}px`;
            const i = tileRefs.indexOf(tile);
            if (i >= 0) {
                pathPoints[i] = { x: startLeft + tileW / 2, y: startTop + tileH / 2 };
            }
        }
        const splineCtl = getSplineCtl();
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
