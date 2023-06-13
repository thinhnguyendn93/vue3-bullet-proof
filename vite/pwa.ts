import { VitePWA } from 'vite-plugin-pwa';

export default VitePWA({
  includeAssets: [
    'assets/fonts/*.ttf',
    'assets/*.svg',
    'assets/*.png',
    'assets/*.jpeg',
    'assets/*.ico',
  ],
  registerType: 'autoUpdate',
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30, // cache for 30 days
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 50, // cache up to 50 images
            maxAgeSeconds: 60 * 60 * 24 * 7, // cache for 7 days
          },
        },
      },
    ],
    sourcemap: false,
    clientsClaim: true,
    skipWaiting: true,
  },
});
