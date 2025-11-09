// Service Worker to inject menu component into all HTML pages
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Disable HTML injection now that scripts are referenced directly in pages
const shouldInject = (html) => false;

const injectAssets = (html) => {
  let out = html;
  // Inject menu stylesheet into head
  if (!out.includes('components/menu.css')) {
    if (out.includes('</head>')) {
      out = out.replace('</head>', '<link rel="stylesheet" href="components/menu.css"></head>');
    } else {
      out = '<link rel="stylesheet" href="components/menu.css">' + out;
    }
  }
  // Inject loader stylesheet into head
  if (!out.includes('components/loader.css')) {
    if (out.includes('</head>')) {
      out = out.replace('</head>', '<link rel="stylesheet" href="components/loader.css"></head>');
    } else {
      out = '<link rel="stylesheet" href="components/loader.css">' + out;
    }
  }
  // Inject menu script before closing body
  if (!out.includes('components/menu.js')) {
    if (out.includes('</body>')) {
      out = out.replace('</body>', '<script src="components/menu.js" defer></script></body>');
    } else {
      out += '<script src="components/menu.js" defer></script>';
    }
  }
  // Inject loader script before closing body
  if (!out.includes('components/loader.js')) {
    if (out.includes('</body>')) {
      out = out.replace('</body>', '<script src="components/loader.js" defer></script></body>');
    } else {
      out += '<script src="components/loader.js" defer></script>';
    }
  }
  return out;
};

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const accept = req.headers.get('accept') || '';
  const isHTML = accept.includes('text/html');
  if (!isHTML) return;
  event.respondWith((async () => {
    const res = await fetch(req);
    // Custom 404 routing: serve our friendly 404 page for unknown HTML paths
    if (res.status === 404 && isHTML && !req.url.endsWith('/404.html')) {
      try {
        const page = await fetch('/404.html', { cache: 'no-cache' });
        const html = await page.text();
        return new Response(html, {
          status: 404,
          statusText: 'Not Found',
          headers: { 'Content-Type': 'text/html; charset=UTF-8' }
        });
      } catch (_) {
        return res;
      }
    }
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('text/html')) return res;
    try {
      const html = await res.clone().text();
      if (!shouldInject(html)) return res;
      const injected = injectAssets(html);
      return new Response(injected, {
        status: res.status,
        statusText: res.statusText,
        headers: { 'Content-Type': 'text/html; charset=UTF-8' }
      });
    } catch (_) {
      return res;
    }
  })());
});