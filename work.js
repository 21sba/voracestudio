document.addEventListener('DOMContentLoaded', async () => {
  // Register service worker (shared components)
  if ('serviceWorker' in navigator) {
    try { navigator.serviceWorker.register('sw.js'); } catch (_) {}
  }

  const root = document.getElementById('work-root');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const workId = params.get('id');

  const dash = (val) => {
    if (val === undefined || val === null) return '';
    if (Array.isArray(val)) return val.length ? val.join(', ') : '';
    const s = String(val).trim();
    return s || '';
  };

  let works = [];
  try {
    const res = await fetch('works.json');
    works = await res.json();
  } catch (err) {
    console.error('Failed to load works.json', err);
    return;
  }

  const work = works.find(w => String(w.id) === String(workId));
  if (!work) {
    root.innerHTML = `<p class="description">Work not found.</p>`;
    return;
  }

  // Set page title to the current project's title
  try {
    const projectTitle = (work && work.title) ? String(work.title).trim() : '';
    document.title = projectTitle ? `Vorace — ${projectTitle}` : 'Vorace — Work';
  } catch (_) {}

  // Fixed Prev/Next pager at the bottom for quick project navigation
  try {
    const currentIndex = works.findIndex(w => String(w.id) === String(workId));
    if (currentIndex >= 0 && works.length > 1) {
      const prevWork = works[(currentIndex - 1 + works.length) % works.length];
      const nextWork = works[(currentIndex + 1) % works.length];

      const pager = document.createElement('nav');
      pager.className = 'work-pager';
      pager.setAttribute('aria-label', 'Project navigation');

      const inner = document.createElement('div');
      inner.className = 'pager-inner';

      const prevBtn = document.createElement('a');
      prevBtn.className = 'pager-btn prev';
      prevBtn.href = `work.html?id=${encodeURIComponent(prevWork.id)}`;
      prevBtn.textContent = '< PREV';
      prevBtn.setAttribute('aria-label', `Previous project: ${dash(prevWork.title || prevWork.id)}`);

      const nextBtn = document.createElement('a');
      nextBtn.className = 'pager-btn next';
      nextBtn.href = `work.html?id=${encodeURIComponent(nextWork.id)}`;
      nextBtn.textContent = 'NEXT >';
      nextBtn.setAttribute('aria-label', `Next project: ${dash(nextWork.title || nextWork.id)}`);

      inner.appendChild(prevBtn);
      inner.appendChild(nextBtn);
      pager.appendChild(inner);
      document.body.appendChild(pager);
    }
  } catch (_) {}

  const type = (work && work.type) ? String(work.type) : '';

  // Loader progress updates and light image preloading (hero + first of blocks)
  const updateLoaderProgress = (p) => {
    try {
      if (window.Loader && typeof window.Loader.setProgress === 'function') {
        window.Loader.setProgress(p || 0);
      }
    } catch (_) {}
  };

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

  // Collect hero cover and first image from blocks for quick preloading
  try {
    const preloadUrls = [];
    if (type === 'case-study') {
      const coverSrc = (typeof work.cover === 'string') ? work.cover : (work.cover && work.cover.src ? work.cover.src : '');
      if (coverSrc) preloadUrls.push(String(coverSrc));
    }
    const blocks = Array.isArray(work.blocks) ? work.blocks : [];
    blocks.forEach((b) => {
      const bt = String(b.type || '').toLowerCase();
      if ((bt === 'image' || bt === 'image-text') && b.src) {
        preloadUrls.push(String(b.src));
      } else if ((bt === 'gallery' || bt === 'slideshow') && Array.isArray(b.src) && b.src.length) {
        preloadUrls.push(String(b.src[0]));
      }
    });
    await preloadImages(preloadUrls, (p) => updateLoaderProgress(p));
  } catch (_) {}

  function renderSingleVideo(w) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(w.title);
    section.appendChild(title);

    if (w.video && w.video.source === 'youtube' && w.video.embedId) {
      const videoWrap = document.createElement('div');
      videoWrap.className = 'video-wrap';
      const iframe = document.createElement('iframe');
      iframe.className = 'video-frame';
      const embedId = encodeURIComponent(w.video.embedId);
      iframe.src = `https://www.youtube.com/embed/${embedId}`;
      iframe.title = dash(w.title) || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      videoWrap.appendChild(iframe);
      section.appendChild(videoWrap);
    }

    if (w.description) {
      const desc = document.createElement('p');
      desc.className = 'description';
      desc.textContent = String(w.description);
      section.appendChild(desc);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';

    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(w.categories) ? w.categories : [];
    cats.forEach((c) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = String(c);
      tags.appendChild(tag);
    });

    const originDate = document.createElement('div');
    originDate.className = 'origin-date';
    const originLine = document.createElement('span');
    originLine.className = 'origin';
    originLine.textContent = dash(w.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(w.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);

    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (w.credits && typeof w.credits === 'object') {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(w.credits)) {
        const item = document.createElement('div');
        item.className = 'credit-item';
        const r = document.createElement('span');
        r.className = 'credit-role';
        r.textContent = String(role);
        const n = document.createElement('span');
        n.className = 'credit-name';

        if (Array.isArray(name) && name.length) {
          const text = name[0];
          const url = name[1];
          if (url) {
            const a = document.createElement('a');
            a.href = String(url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = String(text || url);
            n.appendChild(a);
          } else {
            n.textContent = String(text);
          }
        } else if (typeof name === 'object' && name) {
          const text = name.name || name.text || '';
          const url = name.url || name.href || '';
          if (url) {
            const a = document.createElement('a');
            a.href = String(url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = String(text || url);
            n.appendChild(a);
          } else {
            n.textContent = String(text || dash(name));
          }
        } else {
          n.textContent = String(name);
        }

        item.appendChild(r);
        item.appendChild(n);
        credits.appendChild(item);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  function createYouTubeIframe(embedId, titleText) {
    const iframe = document.createElement('iframe');
    iframe.className = 'video-frame';
    const idSafe = encodeURIComponent(embedId);
    iframe.src = `https://www.youtube.com/embed/${idSafe}`;
    iframe.title = dash(titleText) || 'YouTube video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    return iframe;
  }

  function renderCaseStudyHeroVideo(w) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(w.title);
    section.appendChild(title);

    if (w.video && w.video.source === 'youtube' && w.video.embedId) {
      const videoWrap = document.createElement('div');
      videoWrap.className = 'video-wrap';
      videoWrap.appendChild(createYouTubeIframe(w.video.embedId, w.title));
      section.appendChild(videoWrap);
    }

    if (w.description) {
      const desc = document.createElement('p');
      desc.className = 'description';
      desc.textContent = String(w.description);
      section.appendChild(desc);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';

    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(w.categories) ? w.categories : [];
    cats.forEach((c) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = String(c);
      tags.appendChild(tag);
    });

    const originDate = document.createElement('div');
    originDate.className = 'origin-date';
    const originLine = document.createElement('span');
    originLine.className = 'origin';
    originLine.textContent = dash(w.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(w.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);

    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (w.credits && typeof w.credits === 'object') {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(w.credits)) {
        const item = document.createElement('div');
        item.className = 'credit-item';
        const r = document.createElement('span');
        r.className = 'credit-role';
        r.textContent = String(role);
        const n = document.createElement('span');
        n.className = 'credit-name';

        if (Array.isArray(name) && name.length) {
          const text = name[0];
          const url = name[1];
          if (url) {
            const a = document.createElement('a');
            a.href = String(url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = String(text || url);
            n.appendChild(a);
          } else {
            n.textContent = String(text);
          }
        } else if (typeof name === 'object' && name) {
          const text = name.name || name.text || '';
          const url = name.url || name.href || '';
          if (url) {
            const a = document.createElement('a');
            a.href = String(url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = String(text || url);
            n.appendChild(a);
          } else {
            n.textContent = String(text || dash(name));
          }
        } else {
          n.textContent = String(name);
        }

        item.appendChild(r);
        item.appendChild(n);
        credits.appendChild(item);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  function renderCaseStudyHeroImage(w) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(w.title);
    section.appendChild(title);

    // Accept cover as string or { src }
    const coverSrc = (typeof w.cover === 'string') ? w.cover : (w.cover && w.cover.src ? w.cover.src : '');
    if (coverSrc) {
      const coverWrap = document.createElement('div');
      coverWrap.className = 'cover-wrap';
      const img = document.createElement('img');
      img.src = String(coverSrc);
      img.alt = dash(w.title) || 'Cover image';
      img.loading = 'lazy';
      coverWrap.appendChild(img);
      section.appendChild(coverWrap);
    }

    if (w.description) {
      const desc = document.createElement('p');
      desc.className = 'description';
      desc.textContent = String(w.description);
      section.appendChild(desc);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';

    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(w.categories) ? w.categories : [];
    cats.forEach((c) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = String(c);
      tags.appendChild(tag);
    });

    const originDate = document.createElement('div');
    originDate.className = 'origin-date';
    const originLine = document.createElement('span');
    originLine.className = 'origin';
    originLine.textContent = dash(w.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(w.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);

    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (w.credits && typeof w.credits === 'object') {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(w.credits)) {
        const item = document.createElement('div');
        item.className = 'credit-item';
        const r = document.createElement('span');
        r.className = 'credit-role';
        r.textContent = String(role);
        const n = document.createElement('span');
        n.className = 'credit-name';

        if (Array.isArray(name) && name.length) {
          const text = name[0];
          const url = name[1];
          if (url) {
            const a = document.createElement('a');
            a.href = String(url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = String(text || url);
            n.appendChild(a);
          } else {
            n.textContent = String(text);
          }
        } else if (typeof name === 'object' && name) {
          const text = name.name || name.text || '';
          const url = name.url || name.href || '';
          if (url) {
            const a = document.createElement('a');
            a.href = String(url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = String(text || url);
            n.appendChild(a);
          } else {
            n.textContent = String(text || dash(name));
          }
        } else {
          n.textContent = String(name);
        }

        item.appendChild(r);
        item.appendChild(n);
        credits.appendChild(item);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  function renderBlocks(blocks, workTitle) {
    if (!Array.isArray(blocks) || !blocks.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'work-blocks';

    blocks.forEach((b) => {
      const type = String(b.type || '').toLowerCase();
      const blockEl = document.createElement('div');
      blockEl.className = `block ${type}`;

      // Optional block title at the top (H2, uppercase via CSS)
      if (b.title) {
        const heading = document.createElement('h2');
        heading.className = 'block-title';
        heading.textContent = String(b.title);
        blockEl.appendChild(heading);
      }

      if (type === 'youtube' && b.embedId) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        media.appendChild(createYouTubeIframe(b.embedId, workTitle));
        blockEl.appendChild(media);
      } else if (type === 'iframe' && b.src) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        const iframe = document.createElement('iframe');
        iframe.src = String(b.src);
        iframe.className = 'video-frame';
        iframe.setAttribute('loading', 'lazy');
        iframe.title = dash(b.title) || dash(workTitle) || 'Embedded content';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        media.appendChild(iframe);
        blockEl.appendChild(media);
        if (b.content) {
          const caption = document.createElement('p');
          caption.className = 'caption';
          caption.textContent = String(b.content);
          blockEl.appendChild(caption);
        }
      } else if (type === 'image' && b.src) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        const img = document.createElement('img');
        img.src = String(b.src);
        img.alt = dash(b.alt) || dash(workTitle) || 'Image';
        img.loading = 'lazy';
        media.appendChild(img);
        blockEl.appendChild(media);
      } else if (type === 'image' && !b.src) {
        // Gracefully render content as caption if src missing
        if (b.content) {
          const caption = document.createElement('p');
          caption.className = 'caption';
          caption.textContent = String(b.content);
          blockEl.appendChild(caption);
        }
      } else if (type === 'text' && b.content) {
        const caption = document.createElement('p');
        caption.className = 'caption';
        caption.textContent = String(b.content);
        blockEl.appendChild(caption);
      } else if (type === 'image-text' && b.src) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        const img = document.createElement('img');
        img.src = String(b.src);
        img.alt = dash(b.alt) || dash(workTitle) || 'Image';
        img.loading = 'lazy';
        media.appendChild(img);
        blockEl.appendChild(media);
        if (b.content) {
          const caption = document.createElement('p');
          caption.className = 'caption';
          caption.textContent = String(b.content);
          blockEl.appendChild(caption);
        }
      } else if (type === 'gallery' && Array.isArray(b.src) && b.src.length) {
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';
        b.src.forEach((url) => {
          const item = document.createElement('div');
          item.className = 'gallery-item';
          const img = document.createElement('img');
          img.src = String(url);
          img.alt = dash(workTitle) || 'Gallery image';
          img.loading = 'lazy';
          item.appendChild(img);
          grid.appendChild(item);
        });
        blockEl.appendChild(grid);
      } else if (type === 'slideshow' && Array.isArray(b.src) && b.src.length) {
        const media = document.createElement('div');
        media.className = 'media-wrap';

        const slides = document.createElement('div');
        slides.className = 'slides';

        const images = b.src.map((url, i) => {
          const img = document.createElement('img');
          img.src = String(url);
          img.alt = dash(workTitle) || 'Slide';
          img.loading = 'lazy';
          img.className = 'slide' + (i === 0 ? ' active' : '');
          return img;
        });

        images.forEach(img => slides.appendChild(img));
        media.appendChild(slides);

        let idx = 0;
        let dotButtons = [];
        let autoplayTimer = null;
        let interactionTimeout = null;
        const AUTOPLAY_MS = 3500;
        const INTERACTION_PAUSE_MS = 6000;

        const startAutoplay = () => {
          if (autoplayTimer) { try { clearInterval(autoplayTimer); } catch (_) {} }
          autoplayTimer = setInterval(() => setActive(idx + 1), AUTOPLAY_MS);
        };
        const pauseAutoplay = (ms = 0) => {
          if (autoplayTimer) { try { clearInterval(autoplayTimer); } catch (_) {} }
          autoplayTimer = null;
          if (interactionTimeout) { try { clearTimeout(interactionTimeout); } catch (_) {} }
          interactionTimeout = null;
          if (ms > 0) {
            interactionTimeout = setTimeout(() => { startAutoplay(); }, ms);
          }
        };
        const setActive = (newIdx) => {
          const last = images[idx];
          if (last) last.classList.remove('active');
          if (dotButtons[idx]) {
            dotButtons[idx].classList.remove('active');
            dotButtons[idx].removeAttribute('aria-current');
          }
          idx = (newIdx + images.length) % images.length;
          const cur = images[idx];
          if (cur) cur.classList.add('active');
          if (dotButtons[idx]) {
            dotButtons[idx].classList.add('active');
            dotButtons[idx].setAttribute('aria-current', 'true');
          }
          // Translate slides container to show the active slide
          try {
            slides.style.transform = `translateX(-${idx * 100}%)`;
          } catch (_) {}
        };

        if (images.length > 1) {
          const prev = document.createElement('button');
          prev.type = 'button';
          prev.className = 'arrow prev';
          prev.setAttribute('aria-label', 'Previous slide');
          prev.textContent = '‹';
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'arrow next';
          next.setAttribute('aria-label', 'Next slide');
          next.textContent = '›';
          media.appendChild(prev);
          media.appendChild(next);
          prev.addEventListener('click', () => { pauseAutoplay(INTERACTION_PAUSE_MS); setActive(idx - 1); });
          next.addEventListener('click', () => { pauseAutoplay(INTERACTION_PAUSE_MS); setActive(idx + 1); });

          const dotsWrap = document.createElement('div');
          dotsWrap.className = 'dots';
          dotButtons = images.map((_, i) => {
            const d = document.createElement('button');
            d.type = 'button';
            d.className = 'dot' + (i === 0 ? ' active' : '');
            d.setAttribute('aria-label', `Go to slide ${i + 1}`);
            if (i === 0) d.setAttribute('aria-current', 'true');
            d.addEventListener('click', () => { pauseAutoplay(INTERACTION_PAUSE_MS); setActive(i); });
            return d;
          });
          dotButtons.forEach(d => dotsWrap.appendChild(d));
          media.appendChild(dotsWrap);

          // Autoplay controls: start, pause on hover/touch, and handle page visibility
          media.addEventListener('mouseenter', () => pauseAutoplay(0));
          media.addEventListener('mouseleave', () => startAutoplay());
          media.addEventListener('touchstart', () => pauseAutoplay(INTERACTION_PAUSE_MS), { passive: true });
          document.addEventListener('visibilitychange', () => {
            if (document.hidden) { pauseAutoplay(0); } else { startAutoplay(); }
          });
          startAutoplay();

          // Swipe gesture support (pointer events with touch fallback)
          const SWIPE_THRESHOLD = 40; // pixels
          let startX = 0;
          let startY = 0;
          let endX = 0;
          let endY = 0;
          let tracking = false;

          const handleSwipeEnd = () => {
            if (!tracking) return;
            const dx = endX - startX;
            const dy = endY - startY;
            tracking = false;
            // Horizontal swipe and beyond threshold
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
              pauseAutoplay(INTERACTION_PAUSE_MS);
              if (dx < 0) { setActive(idx + 1); } else { setActive(idx - 1); }
            }
          };

          // Pointer events (preferred)
          if (window.PointerEvent) {
            slides.addEventListener('pointerdown', (e) => {
              startX = e.clientX;
              startY = e.clientY;
              endX = startX;
              endY = startY;
              tracking = true;
              pauseAutoplay(INTERACTION_PAUSE_MS);
            });
            slides.addEventListener('pointermove', (e) => {
              if (!tracking) return;
              endX = e.clientX;
              endY = e.clientY;
            });
            slides.addEventListener('pointerup', handleSwipeEnd);
            slides.addEventListener('pointercancel', () => { tracking = false; });
          } else {
            // Touch events fallback
            slides.addEventListener('touchstart', (e) => {
              const t = e.changedTouches && e.changedTouches[0];
              if (!t) return;
              startX = t.clientX;
              startY = t.clientY;
              endX = startX;
              endY = startY;
              tracking = true;
              pauseAutoplay(INTERACTION_PAUSE_MS);
            }, { passive: true });
            slides.addEventListener('touchmove', (e) => {
              const t = e.changedTouches && e.changedTouches[0];
              if (!tracking || !t) return;
              endX = t.clientX;
              endY = t.clientY;
            }, { passive: true });
            slides.addEventListener('touchend', handleSwipeEnd);
            slides.addEventListener('touchcancel', () => { tracking = false; });
          }
        }

        blockEl.appendChild(media);
        if (b.content) {
          const caption = document.createElement('p');
          caption.className = 'caption';
          caption.textContent = String(b.content);
          blockEl.appendChild(caption);
        }
      } else {
        // Unknown block type; skip rendering
        return;
      }

      wrap.appendChild(blockEl);
    });

    root.appendChild(wrap);
  }

  // Render based on type (start with single-video)
  if (type === 'single-video') {
    renderSingleVideo(work);
  } else if (type === 'case-study-video') {
    renderCaseStudyHeroVideo(work);
    renderBlocks(work.blocks || [], work.title);
  } else if (type === 'case-study') {
    renderCaseStudyHeroImage(work);
    renderBlocks(work.blocks || [], work.title);
  } else {
    root.innerHTML = `<p class="description">This work has no configured type.</p>`;
  }

  // Mark hero children and blocks for initial reveal
  try {
    const hero = document.querySelector('.work-hero');
    const blockEls = Array.from(document.querySelectorAll('.work-blocks .block'));
    const targets = [];
    if (hero) targets.push(...Array.from(hero.children));
    targets.push(...blockEls);
    targets.forEach((el) => {
      el.classList.add('reveal-item', 'initial-hide');
    });
  } catch (_) {}

  // Hide loader if present
  try {
    if (window.Loader) {
      await window.Loader.waitUntilComplete(1000);
      await window.Loader.hide();
    }
  } catch (_) {}

  // Staggered initial reveal of hero children and blocks
  try {
    const baseDelay = 80; // ms between items
    const els = Array.from(document.querySelectorAll('.reveal-item.initial-hide'));
    els.forEach((el, idx) => {
      setTimeout(() => {
        // force reflow to ensure transition triggers
        void el.offsetWidth;
        el.classList.remove('initial-hide');
      }, baseDelay * idx);
    });
  } catch (_) {}
});
