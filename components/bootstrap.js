// Bootstrap: load common UI components across pages in one place
(function () {
  var commonScripts = [
    'components/loader.js',
    'components/menu.js',
    'components/footer.js',
    'components/copy.js'
  ];

  function loadScriptSequential(srcs) {
    var next = function (i) {
      if (i >= srcs.length) return;
      var s = document.createElement('script');
      s.src = srcs[i];
      // Preserve predictable execution order
      s.async = false;
      s.defer = false;
      s.onload = function () { next(i + 1); };
      s.onerror = function () { console.warn('Failed to load script:', srcs[i]); next(i + 1); };
      document.head.appendChild(s);
    };
    next(0);
  }

  function init() { loadScriptSequential(commonScripts); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();