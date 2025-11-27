import { Config } from './config.js';

export function buildSmoothPath(points) {
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

export function animatePathAndTiles(pathEl, points, tiles) {
    if (!points.length || !tiles.length) return;
    // Ensure tiles start hidden
    tiles.forEach(t => t.classList.remove('popped'));

    let total = pathEl.getTotalLength();
    // Configure trim-path via stroke dash (JS-driven animation)
    pathEl.style.strokeDasharray = `${total}`;
    pathEl.style.strokeDashoffset = `${total}`;
    const speed = Config.animation.SPEED; // px per second (constant)
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
    const tolerance = Config.animation.TOLERANCE;

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

    let stopLen = milestones[getStopIndex()];
    let resumeTimer = null;
    const RESUME_DELAY_MS = Config.animation.RESUME_DELAY_MS;

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
    const onStart = () => startAnimation();
    window.addEventListener('spline:start', onStart, { once: true });

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

    return {
        start: startAnimation,
        stop: () => {
            animating = false;
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('spline:start', onStart);
        },
        rebuild,
        softRebuild
    };
}
