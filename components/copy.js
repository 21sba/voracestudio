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

  function attachCopyHandlers() {
    var elements = document.querySelectorAll('.copy-email');
    if (!elements.length) return;

    elements.forEach(function (el) {
      // Enhance accessibility
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
      if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
      var email = el.getAttribute('data-email') || (el.textContent || '').trim();

      function copyAndToast(evt) {
        if (evt) {
          evt.preventDefault();
          evt.stopPropagation();
        }
        var text = email;
        if (!text) return;
        var x = (evt && typeof evt.clientX === 'number') ? evt.clientX : (window.innerWidth / 2);
        var y = (evt && typeof evt.clientY === 'number') ? evt.clientY : (window.innerHeight / 2);

        // Prefer modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text)
            .then(function () { showToastAt(x, y, 'COPIED!'); })
            .catch(function () { showToastAt(x, y, 'COPIED!'); });
        } else {
          // Fallback: temporary textarea
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

      el.addEventListener('click', copyAndToast);
      el.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter' || evt.key === ' ') copyAndToast(evt);
      });
    });
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectCopyCss();
      attachCopyHandlers();
    });
  } else {
    injectCopyCss();
    attachCopyHandlers();
  }
})();