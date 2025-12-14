// ============================================
// YOUNGLIFE DRC - Service Worker
// Pour fonctionnalité PWA et mode hors ligne
// ============================================

const CACHE_NAME = 'younglife-drc-v1';
const urlsToCache = [
  '/',
  '/index-improved.html',
  '/main.css',
  '/css-improvements.css',
  '/app-complete.js',
  '/verse-manager.js',
  '/verses-data-improved.js',
  '/countries-data.js',
  '/test-user-setup.js',
  '/manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('📦 Service Worker: Installation...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Fichiers mis en cache');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Erreur lors de la mise en cache:', error);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker: Activation...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activé');
      return self.clients.claim();
    })
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') return;
  
  // Ignorer les requêtes externes (Unsplash, etc.)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner depuis le cache si disponible
        if (response) {
          console.log('📦 Depuis cache:', event.request.url);
          return response;
        }

        // Sinon, faire la requête réseau
        console.log('🌐 Depuis réseau:', event.request.url);
        return fetch(event.request).then((response) => {
          // Vérifier si la réponse est valide
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cloner la réponse
          const responseToCache = response.clone();

          // Mettre en cache pour utilisation future
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch((error) => {
        console.error('❌ Erreur fetch:', error);
        
        // Retourner une page hors ligne si disponible
        return caches.match('/index-improved.html');
      })
  );
});

// Gestion des messages
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notification de mise à jour
self.addEventListener('controllerchange', () => {
  console.log('🔄 Nouvelle version disponible');
});

console.log('✅ Service Worker chargé');
