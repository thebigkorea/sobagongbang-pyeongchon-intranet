const CACHE_NAME = "sobagongbang-pyeongchon-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./store-manager.html",
  "./employee-info.html",
  "./daily-worker.html",
  "./store-manager.css",
  "./store-manager.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});