importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/icons/manifest-icon-192.maskable.png', revision: '1' },
  { url: '/icons/manifest-icon-512.maskable.png', revision: '1' },
]);

workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  workbox.precaching.createHandlerBoundToURL('/index.html')
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);
