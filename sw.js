const CACHE_NAME = 'vorace-cache-v1';
const ASSETS_TO_CACHE = [
  '/style.css',
  '/home.css',
  '/components/loader.css',
  '/components/loader.js',
  '/components/menu.js',
  '/components/footer.js',
  '/components/copy.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Stale-While-Revalidate for script/css and assets
  const isAsset = url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|lottie|json|woff2?|ttf|eot)$/i);
  const accept = req.headers.get('accept') || '';
  const isHTML = accept.includes('text/html');

  if (isAsset && !req.url.includes('/sw.js')) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        const fetchPromise = fetch(req).then((networkResponse) => {
          if (networkResponse.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse.clone()));
          }
          return networkResponse;
        }).catch(() => cachedResponse); // fallback to cache on fetch fail
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  if (isHTML) {
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        // Custom 404 routing: serve our friendly 404 page for unknown HTML paths
        if (res.status === 404 && !req.url.endsWith('/404.html')) {
          try {
            const page = await fetch('/404.html', { cache: 'no-cache' });
            return new Response(await page.text(), {
              status: 404,
              statusText: 'Not Found',
              headers: { 'Content-Type': 'text/html; charset=UTF-8' }
            });
          } catch (_) {
            return res;
          }
        }
        return res;
      } catch (err) {
        // Network failure, try to serve from cache or offline page if available
        const cachedRes = await caches.match(req);
        if (cachedRes) return cachedRes;
        throw err;
      }
    })());
  }
});