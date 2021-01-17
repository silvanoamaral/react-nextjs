const CACHE_NAME = 'test_reactjs'
const URL_CACHE = [
  'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700'
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(URL_CACHE)
      })
  )

  console.log('Hello world from the Service Worker 🤙')
})

self.addEventListener('fetch', function(e) {
  console.log(e.request.url)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request)
    })
  )
})
