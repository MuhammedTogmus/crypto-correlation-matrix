// ═══════════════════════════════════════════════════════════════
// CryptoCorr Heatmap — Service Worker (PWA Offline Caching)
// ═══════════════════════════════════════════════════════════════

const CACHE_NAME = 'cryptocorr-v1';

// Uygulama kabuğu (App Shell) — her zaman önbelleğe alınacak dosyalar
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon-192.png',
  './icon-512.png',
  './manifest.json'
];

// Harici kaynaklar — ağdan çekilip önbelleğe alınacak (Cache-First)
const EXTERNAL_RESOURCES = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap',
  'https://cdn.plot.ly/plotly-2.27.0.min.js'
];

// ─── INSTALL: Uygulama kabuğunu önbelleğe al ───
self.addEventListener('install', (event) => {
  console.log('[SW] Installing CryptoCorr Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching App Shell...');
        // Harici kaynakları tek tek ekle (CORS hataları engellemesin)
        const externalPromises = EXTERNAL_RESOURCES.map(url =>
          cache.add(url).catch(err => {
            console.warn(`[SW] External cache failed for ${url}:`, err);
          })
        );
        return Promise.all([
          cache.addAll(APP_SHELL),
          ...externalPromises
        ]);
      })
      .then(() => {
        console.log('[SW] App Shell cached successfully.');
        return self.skipWaiting(); // Yeni SW'yi hemen aktifleştir
      })
  );
});

// ─── ACTIVATE: Eski önbellekleri temizle ───
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log(`[SW] Deleting old cache: ${name}`);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('[SW] Claiming clients...');
      return self.clients.claim(); // Tüm açık sekmeleri kontrol altına al
    })
  );
});

// ─── FETCH: Akıllı Önbellekleme Stratejisi ───
// Strateji: "Stale-While-Revalidate" (Karma yaklaşım)
//   1) Statik dosyalar (HTML, CSS, JS, resimler) → Cache-First
//   2) API istekleri (Binance vb.) → Network-First (API verisini önbelleğe almıyoruz)
//   3) Font dosyaları → Cache-First (nadiren değişir)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // ── API isteklerini (Binance, CoinGecko vb.) önbelleğe ALMA ──
  if (url.hostname.includes('binance') ||
      url.hostname.includes('coingecko') ||
      url.hostname.includes('api.')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Ağ yoksa boş bir cevap dön (offline durumda API çalışmaz)
        return new Response(
          JSON.stringify({ error: 'Çevrimdışısınız. Lütfen internet bağlantınızı kontrol edin.' }),
          {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      })
    );
    return;
  }

  // ── Google Fonts CSS ve font dosyaları → Cache-First ──
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then((networkResponse) => {
          // Font dosyalarını önbelleğe kaydet
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Font yüklenemiyorsa → fallback (tarayıcı varsayılanı)
          return new Response('', { status: 200 });
        });
      })
    );
    return;
  }

  // ── CDN kaynakları (Plotly vb.) → Cache-First ──
  if (url.hostname.includes('cdn.plot.ly') || url.hostname.includes('cdn.')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // ── Yerel dosyalar (App Shell) → Stale-While-Revalidate ──
  // Önce önbellekten servis et, arka planda ağdan güncelle
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // Başarılıysa önbelleği güncelle
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Ağ yoksa ve önbellekte de yoksa → offline sayfası
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Çevrimdışı', { status: 503 });
        });

      return cachedResponse || fetchPromise;
    })
  );
});

// ─── BACKGROUND SYNC (Gelecek için hazır) ───
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('[SW] Background sync triggered.');
    // Gelecekte: çevrimdışıyken kaydedilen alarmları sunucuya gönder
  }
});

// ─── PUSH NOTIFICATION (Gelecek için hazır) ───
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body || 'Yeni bir korelasyon değişikliği tespit edildi!',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      url: data.url || './'
    },
    actions: [
      { action: 'open', title: 'Aç' },
      { action: 'dismiss', title: 'Kapat' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(
      data.title || '🔔 CryptoCorr Alarm',
      options
    )
  );
});

// Push bildirime tıklanınca uygulamayı aç
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'dismiss') return;

  const urlToOpen = event.notification.data?.url || './';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url.includes('index.html') && 'focus' in client) {
            return client.focus();
          }
        }
        return self.clients.openWindow(urlToOpen);
      })
  );
});

console.log('[SW] CryptoCorr Service Worker loaded.');
