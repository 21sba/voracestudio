// Copy-to-clipboard for email elements with a mouse-position toast
(function () {
  function injectCopyCss() {
    var href = 'components/copy.css';
    var exists = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .some(function (l) { return (l.getAttribute('href') || '').includes(href); });
    if (!exists) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }

  function showToastAt(x, y, text) {
    var toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = text || 'COPIED!';
    // Offset a bit from the cursor; viewport coordinates
    var offsetX = 12, offsetY = 12;
    toast.style.left = (x + offsetX) + 'px';
    toast.style.top = (y + offsetY) + 'px';
    document.body.appendChild(toast);
    // Trigger transition
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });
    // Hide and remove after a short delay
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { if (toast && toast.parentNode) toast.parentNode.removeChild(toast); }, 180);
    }, 900);
  }

  function enhance(el) {
    if (!el) return;
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
  }

  function getEmailFrom(el) {
    if (!el) return '';
    return el.getAttribute('data-email') || (el.textContent || '').trim();
  }

  function copyFrom(el, evt) {
    if (!el) return;
    if (evt) { evt.preventDefault(); evt.stopPropagation(); }
    var text = getEmailFrom(el);
    if (!text) return;
    var x = (evt && typeof evt.clientX === 'number') ? evt.clientX : (window.innerWidth / 2);
    var y = (evt && typeof evt.clientY === 'number') ? evt.clientY : (window.innerHeight / 2);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(function () { showToastAt(x, y, 'COPIED!'); })
        .catch(function () { showToastAt(x, y, 'COPIED!'); });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta);
      showToastAt(x, y, 'COPIED!');
    }
  }

  function attachDelegatedHandlers() {
    // Initial accessibility enhancement for existing elements
    document.querySelectorAll('.copy-email').forEach(enhance);

    // Delegate clicks
    document.addEventListener('click', function (evt) {
      var el = evt.target && evt.target.closest && evt.target.closest('.copy-email');
      if (!el) return;
      copyFrom(el, evt);
    });

    // Delegate keyboard activation
    document.addEventListener('keydown', function (evt) {
      var el = evt.target && evt.target.closest && evt.target.closest('.copy-email');
      if (!el) return;
      if (evt.key === 'Enter' || evt.key === ' ') copyFrom(el, evt);
    });

    // Observe future DOM insertions to enhance accessibility
    try {
      var mo = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes && m.addedNodes.forEach(function (node) {
            if (!(node instanceof Element)) return;
            if (node.matches && node.matches('.copy-email')) enhance(node);
            node.querySelectorAll && node.querySelectorAll('.copy-email').forEach(enhance);
          });
        });
      });
      mo.observe(document.body, { childList: true, subtree: true });
    } catch (_) {}
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectCopyCss();
      attachDelegatedHandlers();
    });
  } else {
    injectCopyCss();
    attachDelegatedHandlers();
  }
})();