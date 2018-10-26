/**
 * Service Worker store the cache into 'v1'
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './restaurant.html',
        './css/styles.css',
        './data/restaurants.json',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './img/1.jpg',
        './img/1-300px.jpg',
        './img/1-400px.jpg',
        './img/1-600px.jpg',
        './img/2.jpg',
        './img/2-300px.jpg',
        './img/2-400px.jpg',
        './img/2-600px.jpg',
        './img/3.jpg',
        './img/3-300px.jpg',
        './img/3-400px.jpg',
        './img/3-600px.jpg',
        './img/4.jpg',
        './img/4-300px.jpg',
        './img/4-400px.jpg',
        './img/4-600px.jpg',
        './img/5.jpg',
        './img/5-300px.jpg',
        './img/5-400px.jpg',
        './img/5-600px.jpg',
        './img/6.jpg',
        './img/6-300px.jpg',
        './img/6-400px.jpg',
        './img/6-600px.jpg',
        './img/7.jpg',
        './img/7-300px.jpg',
        './img/7-400px.jpg',
        './img/7-600px.jpg',
        './img/8.jpg',
        './img/8-300px.jpg',
        './img/8-400px.jpg',
        './img/8-600px.jpg',
        './img/9.jpg',
        './img/9-300px.jpg',
        './img/9-400px.jpg',
        './img/9-600px.jpg',
        './img/10.jpg',
        './img/10-300px.jpg',
        './img/10-400px.jpg',
        './img/10-600px.jpg',
      ]);
    })
  );
});

/**
 * If a request match with some cache content, service
 * worker use the stored resource. If not, fetch the
 * request from the web
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
