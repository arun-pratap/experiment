const CACHE_NAME = "my-cache";
self.addEventListener("install", (event) => {
  console.log("Installing service worker 😀");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .addAll([`/`, `/index.html`, `static/js/bundle.js`])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating service worker");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log(`fetching ${event.request.url}`);
  if (navigator.onLine) {
    var fetchRequest = event.request.clone();
    return fetch(fetchRequest).then((response) => {
      if (!response || response.status !== 200 || response.type !== "basic") {
        return response;
      }
      var responseToCache = response.clone();

      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, responseToCache);
      });
      return response;
    });
  } else {
    event.respondWidth(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
});

