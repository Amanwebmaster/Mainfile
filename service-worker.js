const CACHE_NAME = "flix-india-cache-v1";
const urlsToCache = [
  "/", // Cache start_url
  "/index.html", // Cache your home page
  "https://rixirect.blogspot.com/", // Ensure your scope is cached
  "/icon512_maskable.png", // Maskable icon
  "/icon512_rounded.png", // Rounded icon
];

// Install Service Worker and Cache Files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate Service Worker and Clean Up Old Caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch and Serve Cached Files
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Serve cached response if found, or fetch from network
      return response || fetch(event.request);
    })
  );
});
