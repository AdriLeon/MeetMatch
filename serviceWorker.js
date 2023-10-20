const  CACHE_MEETMATCH = "MeetMatch-site"
const PRE_CACHED_RESOURCES = [
    "/",
    "/index.html",
    "/views/inicio.html",
    "/views/editar_perfil.html",
    "/views/inicio_de_sesion.html",
    "/views/registro.html",
    "/estilo.css",
    "/static/css/index.css",
    "/static/css/inicio.css",
    "/static/css/formulario.css",
    "/static/img/pexels-michelle-leman-6774871.jpg",
    "/static/img/pexels-cottonbro-studio-5018220.jpg",
    "/static/img/boton-de-informacion.png",
    "/static/img/charla.png",
    "/static/img/diseno.png",
    "/static/img/fondo-index.jpeg",
    "/static/img/me-gusta.png",
    "/static/img/meet.jpeg",
    "/static/img/meetmatch.png",
    "/static/img/pexels-cottonbro-studio-4982166.jpg",
    "/static/img/ping-pong.png",
    "/static/img/rompecabezas.png",
    "/static/img/sewing.png",
    "/static/img/foto-1.jpg",
    "/static/img/foto-2.jpg",
    "/static/img/foto-3.jpg",
    "/static/img/foto-4.jpg",
    "/static/img/foto-5.jpg",
    "/static/img/foto-6.jpg",
    "/static/img/foto-7.jpg",
    "/menu.js",
    "/static/js/app.js",
    "/static/js/chat.js",
    "/static/js/modal.js",
    "/static/js/slideshow.js",
]

self.addEventListener("install", event => {
    async function preCacheResources() {
      // Open the app's cache.
      const cache = await caches.open(CACHE_MEETMATCH);
      // Cache all static resources.
      cache.addAll(PRE_CACHED_RESOURCES);
    }
  
    event.waitUntil(preCacheResources());
  });

self.addEventListener("fetch", event => {
    async function returnCachedResource() {
      // Open the app's cache.
      const cache = await caches.open(CACHE_MEETMATCH);
      // Find the response that was pre-cached during the `install` event.
      const cachedResponse = await cache.match(event.request.url);
  
      if (cachedResponse) {
        // Return the resource.
        return cachedResponse;
      } else {
        // The resource wasn't found in the cache, so fetch it from the network.
        const fetchResponse = await fetch(event.request.url);
        // Put the response in cache.
        cache.put(event.request.url, fetchResponse.clone());
        // And return the response.
        return fetchResponse;
      }
    }
  
    event.respondWith(returnCachedResource());
  });