
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('erhardt-os-cache-v1').then(function(cache) {
            return cache.addAll([
                './',
                './OrdemServico_Erhardt_APP.html',
                './manifest.json',
                './icon-192.png',
                './icon-512.png'
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
