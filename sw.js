// Service Worker to inject menu component into all HTML pages
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

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
    return res;
  })());
});