// Shared detail page builder for items (works, goodies)
// Usage: PageBuilder.renderPage({ dataUrl, getId, containerSelector, pager: { detailsPage, publicOnly }, cta })
(function () {
  function dash(val, fallback) {
    if (val === undefined || val === null) return fallback !== undefined ? fallback : '';
    if (Array.isArray(val)) return val.length ? val.join(', ') : (fallback !== undefined ? fallback : '');
    const s = String(val).trim();
    return s ? s : (fallback !== undefined ? fallback : '');
  }

  const isPublic = (item) => String((item && item.visibility) ? item.visibility : 'public').toLowerCase() === 'public';

  // Loader progress hook: update global Loader if available
  function updateLoaderProgress(p) {
    try {
      if (window.Loader && typeof window.Loader.setProgress === 'function') {
        window.Loader.setProgress(p || 0);
      }
    } catch (_) {}
  }

  // Lightweight image preloader with progress reporting
  async function preloadImages(urls, onProgress) {
    const list = Array.isArray(urls) ? urls.filter(Boolean) : [];
    const total = list.length;
    let loaded = 0;
    const report = () => {
      try {
        if (typeof onProgress === 'function' && total > 0) {
          onProgress(loaded / total);
        }
      } catch (_) {}
    };
    report();
    const tasks = list.map((url) => new Promise((resolve) => {
      if (!url) { loaded++; report(); return resolve(); }
      const img = new Image();
      const done = () => { loaded++; report(); resolve(); };
      img.onload = done;
      img.onerror = done;
      try { img.src = String(url); } catch (_) { done(); }
    }));
    try {
      await Promise.allSettled(tasks);
    } catch (_) {
      try { await Promise.all(tasks); } catch (_) {}
    }
    try { if (typeof onProgress === 'function') onProgress(1); } catch (_) {}
  }

  function createYouTubeIframe(embedId, title) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(embedId)}?rel=0`;
    iframe.className = 'video-frame';
    iframe.setAttribute('loading', 'lazy');
    iframe.title = dash(title) || 'YouTube video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    return iframe;
  }

  // Hero for single-video items with YouTube embed and meta
  function renderSingleVideo(root, item) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(item.title, '--');
    section.appendChild(title);

    const video = item.video || {};
    if (video.source === 'youtube' && video.embedId) {
      const videoWrap = document.createElement('div');
      videoWrap.className = 'video-wrap';
      videoWrap.appendChild(createYouTubeIframe(video.embedId, item.title));
      section.appendChild(videoWrap);
    }

    if (dash(item.description)) {
      const p = document.createElement('p');
      p.className = 'description';
      p.textContent = dash(item.description);
      section.appendChild(p);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(item.categories) ? item.categories : [];
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
    originLine.textContent = dash(item.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(item.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);
    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (item.credits && typeof item.credits === 'object' && Object.keys(item.credits).length) {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(item.credits)) {
        const itemEl = document.createElement('div');
        itemEl.className = 'credit-item';
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

        itemEl.appendChild(r);
        itemEl.appendChild(n);
        credits.appendChild(itemEl);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  // Hero for case-study-video items
  function renderCaseStudyHeroVideo(root, item) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(item.title, '--');
    section.appendChild(title);

    const video = item.video || {};
    if (video.source === 'youtube' && video.embedId) {
      const videoWrap = document.createElement('div');
      videoWrap.className = 'video-wrap';
      videoWrap.appendChild(createYouTubeIframe(video.embedId, item.title));
      section.appendChild(videoWrap);
    }

    if (dash(item.description)) {
      const p = document.createElement('p');
      p.className = 'description';
      p.textContent = dash(item.description);
      section.appendChild(p);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(item.categories) ? item.categories : [];
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
    originLine.textContent = dash(item.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(item.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);
    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (item.credits && typeof item.credits === 'object' && Object.keys(item.credits).length) {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(item.credits)) {
        const itemEl = document.createElement('div');
        itemEl.className = 'credit-item';
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

        itemEl.appendChild(r);
        itemEl.appendChild(n);
        credits.appendChild(itemEl);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  // Hero for case-study items (cover image)
  function renderCaseStudyHeroImage(root, item) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(item.title, '--');
    section.appendChild(title);

    const coverSrc = (typeof item.cover === 'string') ? item.cover : (item.cover && item.cover.src ? item.cover.src : '');
    if (coverSrc) {
      const coverWrap = document.createElement('div');
      coverWrap.className = 'cover-wrap';
      const img = document.createElement('img');
      img.src = String(coverSrc);
      img.alt = (item && item.title) ? `${item.title} cover` : 'Cover image';
      img.loading = 'lazy';
      coverWrap.appendChild(img);
      section.appendChild(coverWrap);
    }

    if (dash(item.description)) {
      const p = document.createElement('p');
      p.className = 'description';
      p.textContent = dash(item.description);
      section.appendChild(p);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(item.categories) ? item.categories : [];
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
    originLine.textContent = dash(item.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(item.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);
    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (item.credits && typeof item.credits === 'object' && Object.keys(item.credits).length) {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(item.credits)) {
        const itemEl = document.createElement('div');
        itemEl.className = 'credit-item';
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

        itemEl.appendChild(r);
        itemEl.appendChild(n);
        credits.appendChild(itemEl);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  function renderHero(root, item) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = dash(item.title, '--');
    section.appendChild(title);

    const type = String(item.type || '').toLowerCase();
    const description = dash(item.description);
    let mediaWrap = null;
    if (type === 'case-study-video' || type === 'single-video') {
      mediaWrap = document.createElement('div');
      mediaWrap.className = 'video-wrap';
      const video = item.video || {};
      if (video.source === 'youtube' && video.embedId) {
        mediaWrap.appendChild(createYouTubeIframe(video.embedId, item.title));
      }
    } else {
      mediaWrap = document.createElement('div');
      mediaWrap.className = 'cover-wrap';
      const img = document.createElement('img');
      img.src = dash(item.cover);
      img.alt = (item && item.title) ? `${item.title} cover` : 'Cover';
      mediaWrap.appendChild(img);
    }
    if (mediaWrap) section.appendChild(mediaWrap);

    if (description) {
      const p = document.createElement('p');
      p.className = 'description';
      p.textContent = description;
      section.appendChild(p);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    const tags = document.createElement('div');
    tags.className = 'tags';
    const cats = Array.isArray(item.categories) ? item.categories : [];
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
    originLine.textContent = dash(item.origin);
    const dateLine = document.createElement('span');
    dateLine.className = 'date';
    dateLine.textContent = dash(item.date);
    originDate.appendChild(originLine);
    originDate.appendChild(dateLine);
    meta.appendChild(tags);
    meta.appendChild(originDate);
    section.appendChild(meta);

    if (item.credits && typeof item.credits === 'object' && Object.keys(item.credits).length) {
      const credits = document.createElement('div');
      credits.className = 'credits';
      for (const [role, name] of Object.entries(item.credits)) {
        const itemEl = document.createElement('div');
        itemEl.className = 'credit-item';
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

        itemEl.appendChild(r);
        itemEl.appendChild(n);
        credits.appendChild(itemEl);
      }
      section.appendChild(credits);
    }

    root.appendChild(section);
  }

  function renderBlocks(root, blocks, itemTitle) {
    if (!Array.isArray(blocks) || !blocks.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'work-blocks';

    const addTitle = (el, title) => {
      if (!title) return;
      const h2 = document.createElement('h2');
      h2.className = 'block-title';
      h2.textContent = String(title);
      el.appendChild(h2);
    };

    blocks.forEach((b) => {
      const type = String(b.type || '').toLowerCase();
      const blockEl = document.createElement('div');
      blockEl.className = `block ${type}`;
      addTitle(blockEl, b.title);

      if (type === 'youtube' && b.embedId) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        media.appendChild(createYouTubeIframe(b.embedId, itemTitle));
        blockEl.appendChild(media);

      } else if (type === 'iframe' && b.src) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        const iframe = document.createElement('iframe');
        iframe.src = String(b.src);
        iframe.className = 'video-frame';
        iframe.setAttribute('loading', 'lazy');
        iframe.title = dash(b.title) || dash(itemTitle) || 'Embedded content';
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
        img.alt = dash(b.alt) || dash(b.title) || dash(itemTitle) || 'Image';
        img.loading = 'lazy';
        media.appendChild(img);
        blockEl.appendChild(media);

      } else if (type === 'image-text' && b.src) {
        const grid = document.createElement('div');
        grid.className = 'image-text-grid';
        const media = document.createElement('div');
        media.className = 'media-wrap';
        const img = document.createElement('img');
        img.src = String(b.src);
        img.alt = dash(b.alt) || dash(b.title) || dash(itemTitle) || 'Image';
        img.loading = 'lazy';
        media.appendChild(img);
        const text = document.createElement('div');
        text.className = 'text-wrap';
        const content = String(b.content || '');
        content.split('\n\n').forEach((para) => {
          const p = document.createElement('p');
          p.textContent = para;
          text.appendChild(p);
        });
        grid.appendChild(media);
        grid.appendChild(text);
        blockEl.appendChild(grid);

      } else if (type === 'gallery' && Array.isArray(b.src)) {
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';
        b.src.forEach((url) => {
          const media = document.createElement('div');
          media.className = 'media-wrap';
          const img = document.createElement('img');
          img.src = String(url);
          img.alt = dash(b.alt) || dash(b.title) || dash(itemTitle) || 'Gallery image';
          img.loading = 'lazy';
          media.appendChild(img);
          grid.appendChild(media);
        });
        blockEl.appendChild(grid);

      } else if (type === 'slideshow' && Array.isArray(b.src) && b.src.length) {
        const media = document.createElement('div');
        media.className = 'media-wrap';

        const slides = document.createElement('div');
        slides.className = 'slides';
        const total = b.src.length;
        let index = 0;
        let autoId = null;
        const AUTOPLAY_MS = 4000;
        const INTERACTION_PAUSE_MS = 6000;
        let interactionTimeout = null;

        const images = b.src.map((url, i) => {
          const s = document.createElement('img');
          s.className = 'slide';
          s.src = String(url);
          s.alt = dash(b.alt) || dash(b.title) || dash(itemTitle) || `Slide ${i + 1}`;
          s.loading = 'lazy';
          slides.appendChild(s);
          return s;
        });

        const prev = document.createElement('button');
        prev.type = 'button';
        prev.className = 'arrow prev';
        prev.setAttribute('aria-label', 'Previous slide');
        prev.textContent = '<';
        const next = document.createElement('button');
        next.type = 'button';
        next.className = 'arrow next';
        next.setAttribute('aria-label', 'Next slide');
        next.textContent = '>';

        const dotsWrap = document.createElement('div');
        dotsWrap.className = 'dots';
        const dots = b.src.map((_, i) => {
          const d = document.createElement('button');
          d.type = 'button';
          d.className = 'dot';
          d.setAttribute('aria-label', `Go to slide ${i + 1}`);
          d.addEventListener('click', () => {
            pauseAutoplayTemporarily();
            setActive(i);
          });
          dotsWrap.appendChild(d);
          return d;
        });

        const setActive = (i) => {
          index = i;
          slides.style.transform = `translateX(-${index * 100}%)`;
          dots.forEach((d, di) => {
            d.classList.toggle('active', di === index);
            if (di === index) {
              d.setAttribute('aria-current', 'true');
            } else {
              d.removeAttribute('aria-current');
            }
          });
        };

        const step = (dir) => {
          const nextIndex = (index + dir + total) % total;
          setActive(nextIndex);
        };

        const startAutoplay = () => {
          if (autoId) return;
          if (total <= 1) return;
          autoId = setInterval(() => step(1), AUTOPLAY_MS);
        };

        const clearAutoplay = () => {
          if (autoId) {
            clearInterval(autoId);
            autoId = null;
          }
        };

        const pauseAutoplayTemporarily = () => {
          clearAutoplay();
          if (interactionTimeout) clearTimeout(interactionTimeout);
          interactionTimeout = setTimeout(() => startAutoplay(), INTERACTION_PAUSE_MS);
        };

        prev.addEventListener('click', () => {
          pauseAutoplayTemporarily();
          step(-1);
        });
        next.addEventListener('click', () => {
          pauseAutoplayTemporarily();
          step(1);
        });

        // Hover / touch pause/resume
        media.addEventListener('mouseenter', () => clearAutoplay());
        media.addEventListener('mouseleave', () => startAutoplay());
        media.addEventListener('touchstart', () => clearAutoplay(), { passive: true });

        // Pause when tab is hidden
        const onVisibility = () => {
          if (document.hidden) {
            clearAutoplay();
          } else {
            startAutoplay();
          }
        };
        document.addEventListener('visibilitychange', onVisibility);

        // Swipe gestures (Pointer Events + touch fallback)
        let startX = 0;
        let tracking = false;
        const SWIPE_THRESHOLD = 25; // px

        const onPointerDown = (e) => {
          tracking = true;
          startX = e.clientX;
        };
        const onPointerUp = (e) => {
          if (!tracking) return;
          tracking = false;
          const dx = e.clientX - startX;
          if (Math.abs(dx) > SWIPE_THRESHOLD) {
            pauseAutoplayTemporarily();
            step(dx < 0 ? 1 : -1);
          }
        };
        const onTouchStart = (e) => {
          tracking = true;
          startX = e.touches[0].clientX;
        };
        const onTouchEnd = (e) => {
          if (!tracking) return;
          tracking = false;
          const dx = (e.changedTouches && e.changedTouches[0]?.clientX || startX) - startX;
          if (Math.abs(dx) > SWIPE_THRESHOLD) {
            pauseAutoplayTemporarily();
            step(dx < 0 ? 1 : -1);
          }
        };

        slides.addEventListener('pointerdown', onPointerDown);
        slides.addEventListener('pointerup', onPointerUp);
        slides.addEventListener('touchstart', onTouchStart, { passive: true });
        slides.addEventListener('touchend', onTouchEnd, { passive: true });

        media.appendChild(slides);
        media.appendChild(prev);
        media.appendChild(next);
        media.appendChild(dotsWrap);
        blockEl.appendChild(media);

        // Initial state
        setActive(0);
        startAutoplay();

        // Optional caption
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

      } else if (type === 'tabs' && Array.isArray(b.tabs)) {
        const wrapTabs = document.createElement('div');
        wrapTabs.className = 'tabs-wrap';
        const header = document.createElement('div');
        header.className = 'tabs-header';
        const panel = document.createElement('div');
        panel.className = 'tabs-panel';
        let active = 0;
        const setActive = (i) => {
          active = i;
          const t = b.tabs[i] || {};
          panel.innerHTML = '';
          const content = String(t.content || '');
          content.split('\n\n').forEach((para) => {
            const p = document.createElement('p');
            p.textContent = para;
            panel.appendChild(p);
          });
          header.querySelectorAll('button').forEach((btn, idx) => {
            btn.classList.toggle('active', idx === i);
            btn.setAttribute('aria-selected', String(idx === i));
            btn.tabIndex = idx === i ? 0 : -1;
          });
        };
        b.tabs.forEach((t, i) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'tab-btn';
          btn.textContent = String(t.title || `Tab ${i + 1}`);
          btn.setAttribute('role', 'tab');
          btn.addEventListener('click', () => setActive(i));
          header.appendChild(btn);
        });
        wrapTabs.appendChild(header);
        wrapTabs.appendChild(panel);
        setActive(0);
        blockEl.appendChild(wrapTabs);

      } else if (type === 'download') {
        const dl = document.createElement('div');
        dl.className = 'download-wrap';
        const buttons = Array.isArray(b.button) ? b.button : [];
        if (buttons.length) {
          buttons.forEach((btn) => {
            const a = document.createElement('a');
            a.className = 'download-btn';
            a.href = String(btn.url || '');
            a.textContent = String(btn.text || dash(b.title) || 'Download');
            a.setAttribute('download', '');
            dl.appendChild(a);
          });
        } else if (b.url) {
          const a = document.createElement('a');
          a.className = 'download-btn';
          a.href = String(b.url);
          a.textContent = dash(b.title) || 'Download';
          a.setAttribute('download', '');
          dl.appendChild(a);
        }
        blockEl.appendChild(dl);
      }

      wrap.appendChild(blockEl);
    });

    root.appendChild(wrap);
  }

  function renderPager(items, currentId, detailsPage) {
    const currentIndex = items.findIndex(w => String(w.id) === String(currentId));
    const visibleIndexes = items.map((w, i) => isPublic(w) ? i : -1).filter(i => i >= 0);
    if (currentIndex < 0 || visibleIndexes.length <= 1) return null;
    const prevVisibleIndex = (() => {
      for (let i = visibleIndexes.length - 1; i >= 0; i--) {
        if (visibleIndexes[i] < currentIndex) return visibleIndexes[i];
      }
      return visibleIndexes[visibleIndexes.length - 1];
    })();
    const nextVisibleIndex = (() => {
      for (let i = 0; i < visibleIndexes.length; i++) {
        if (visibleIndexes[i] > currentIndex) return visibleIndexes[i];
      }
      return visibleIndexes[0];
    })();
    const prevItem = items[prevVisibleIndex];
    const nextItem = items[nextVisibleIndex];
    const pager = document.createElement('nav');
    pager.className = 'work-pager';
    pager.setAttribute('aria-label', 'Item navigation');
    const inner = document.createElement('div');
    inner.className = 'pager-inner';
    const prevBtn = document.createElement('a');
    prevBtn.className = 'pager-btn prev';
    prevBtn.href = `${detailsPage}?id=${encodeURIComponent(prevItem.id)}`;
    prevBtn.textContent = '< PREV';
    prevBtn.setAttribute('aria-label', `Previous: ${dash(prevItem.title || prevItem.id)}`);
    const nextBtn = document.createElement('a');
    nextBtn.className = 'pager-btn next';
    nextBtn.href = `${detailsPage}?id=${encodeURIComponent(nextItem.id)}`;
    nextBtn.textContent = 'NEXT >';
    nextBtn.setAttribute('aria-label', `Next: ${dash(nextItem.title || nextItem.id)}`);
    inner.appendChild(prevBtn);
    inner.appendChild(nextBtn);
    pager.appendChild(inner);
    return pager;
  }

  async function renderPage(opts) {
    const {
      dataUrl,
      getId,
      containerSelector = '#work-root',
      pager,
      cta
    } = opts || {};

    const root = document.querySelector(containerSelector);
    if (!root) return;

    const id = typeof getId === 'function' ? getId() : null;
    if (!id) { root.innerHTML = '<p class="description">Item not found.</p>'; return; }

    let items = [];
    try {
      const res = await fetch(String(dataUrl));
      items = await res.json();
    } catch (err) {
      console.error('Failed to load dataset', dataUrl, err);
      root.innerHTML = '<p class="description">Failed to load content.</p>';
      return;
    }

    const item = items.find(w => String(w.id) === String(id));
    if (!item) { root.innerHTML = '<p class="description">Item not found.</p>'; return; }

    try {
      const t = dash(item.title);
      if (t) document.title = `Vorace — ${t}`;
    } catch (_) {}

    // Preload hero cover (for case-study) and first image(s) from blocks
    try {
      const preloadUrls = [];
      const type = String(item.type || '').toLowerCase();
      if (type === 'case-study') {
        const coverSrc = (typeof item.cover === 'string') ? item.cover : (item.cover && item.cover.src ? item.cover.src : '');
        if (coverSrc) preloadUrls.push(String(coverSrc));
      }
      const blocks = Array.isArray(item.blocks) ? item.blocks : [];
      blocks.forEach((b) => {
        const bt = String(b.type || '').toLowerCase();
        if ((bt === 'image' || bt === 'image-text') && b.src) {
          preloadUrls.push(String(b.src));
        } else if ((bt === 'gallery' || bt === 'slideshow') && Array.isArray(b.src) && b.src.length) {
          preloadUrls.push(String(b.src[0]));
        }
      });
      await preloadImages(preloadUrls, updateLoaderProgress);
    } catch (_) {}

    // Hero: dispatch based on type for parity with work.js
    const type = String(item.type || '').toLowerCase();
    if (type === 'single-video') {
      renderSingleVideo(root, item);
    } else if (type === 'case-study-video') {
      renderCaseStudyHeroVideo(root, item);
    } else if (type === 'case-study') {
      renderCaseStudyHeroImage(root, item);
    } else {
      renderHero(root, item);
    }

    // Blocks
    try { renderBlocks(root, item.blocks || [], item.title); } catch (err) { console.error('Failed to render blocks', err); }

    // Pager
    try {
      if (pager && pager.detailsPage) {
        const nav = renderPager(items, id, pager.detailsPage);
        if (nav) document.body.appendChild(nav);
      }
    } catch (err) { console.error('Failed to render pager', err); }

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

    // Loader handling: wait ~1000ms then hide
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
          try { void el.offsetWidth; } catch (_) {}
          el.classList.remove('initial-hide');
        }, baseDelay * idx);
      });
    } catch (_) {}

    // Bottom CTA: show "WATCH MORE" prompt when user is at the top
    try {
      const type = String(item.type || '').toLowerCase();
      const eligible = type === 'case-study' || type === 'case-study-video';
      if (eligible) {
        const CTA_TEXT = '↓ WATCH MORE ↓';
        const TOP_THRESHOLD = Math.max(0, Math.min(20, Math.round((window.innerHeight || 800) * 0.01)));
        const atTop = () => {
          const y = (window.scrollY || window.pageYOffset || 0);
          return y <= TOP_THRESHOLD;
        };
        const maybeCreateAndShowCTA = () => {
          if (!atTop()) return;
          const cta = document.createElement('button');
          cta.type = 'button';
          cta.className = 'work-cta';
          cta.textContent = CTA_TEXT;
          cta.setAttribute('aria-label', 'Scroll to more of this project');
          let removed = false;
          const removeCTA = () => {
            if (removed) return;
            removed = true;
            try {
              cta.classList.remove('show');
              setTimeout(() => { try { cta.remove(); } catch (_) {} }, 220);
            } catch (_) { try { cta.remove(); } catch (_) {} }
          };
          const onUserScroll = () => {
            removeCTA();
            window.removeEventListener('scroll', onUserScroll);
          };
          cta.addEventListener('click', () => {
            try { window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); }
            catch (_) { window.scrollBy(0, window.innerHeight); }
            removeCTA();
            window.removeEventListener('scroll', onUserScroll);
          });
          document.body.appendChild(cta);
          // Ensure initial styles computed before toggling to .show
          requestAnimationFrame(() => {
            try { void cta.offsetWidth; } catch (_) {}
            cta.classList.add('show');
          });
          window.addEventListener('scroll', onUserScroll, { passive: true });
        };
        const delayMs = 1000;
        setTimeout(maybeCreateAndShowCTA, delayMs);
      }
    } catch (_) {}
  }

  // Auto-boot on appropriate pages (work/goodie) to eliminate per-page initializers
  function getIdFromQuery() {
    try {
      const p = new URLSearchParams(window.location.search);
      return p.get('id');
    } catch (_) {
      return null;
    }
  }
  function autoBoot() {
    try {
      if (window.PageBuilderConfig && window.PageBuilderConfig.disableAutoBoot) return;
      const root = document.querySelector('#work-root');
      if (!root) return;
      const page = String(document.body && document.body.dataset ? document.body.dataset.page : '').toLowerCase();
      let dataUrl = '';
      let detailsPage = '';
      if (page === 'work') {
        dataUrl = 'works.json';
        detailsPage = 'work.html';
      } else if (page === 'goodie') {
        dataUrl = 'goodies.json';
        detailsPage = 'goodie.html';
      } else {
        return;
      }
      // Register service worker (safe to call multiple times)
      try { if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js'); } catch (_) {}
      renderPage({
        dataUrl,
        getId: getIdFromQuery,
        containerSelector: '#work-root',
        pager: { detailsPage, publicOnly: true },
        cta: null
      });
    } catch (err) {
      try { console.error('PageBuilder auto-boot failed', err); } catch (_) {}
    }
  }
  if (!window.PageBuilderConfig || !window.PageBuilderConfig.disableAutoBoot) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoBoot);
    } else {
      autoBoot();
    }
  }
  window.PageBuilder = { renderPage, preloadImages, updateLoaderProgress, renderSingleVideo, renderCaseStudyHeroVideo, renderCaseStudyHeroImage };
})();