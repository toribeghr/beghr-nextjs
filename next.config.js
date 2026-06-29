/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Site has 2,800+ statically generated pages. Scale the number of static-generation
    // worker processes to available RAM so the Vercel build does not exceed the 8GB
    // container and get OOM-killed (SIGKILL). Also disable worker threads to lower peak memory.
    memoryBasedWorkersCount: true,
    workerThreads: false,
  },
  redirects: async () => {
    return [
      // Blog taxonomy consolidated: all HCM articles now live under /blog/hcm-software.
      // These 301s preserve any old /blog/hcm-technology URLs that were indexed or linked externally.
      {
        source: '/blog/hcm-technology',
        destination: '/blog/hcm-software',
        permanent: true,
      },
      {
        source: '/blog/hcm-technology/:slug*',
        destination: '/blog/hcm-software/:slug*',
        permanent: true,
      },
    ];
  },
  headers: async () => {
    return [
      // Long-lived cache for static assets (images, fonts, icons)
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Pages: short cache + revalidation
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://fonts.googleapis.com https://snap.licdn.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://px.ads.linkedin.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://connect.facebook.net https://px.ads.linkedin.com",
              "frame-src https://www.googletagmanager.com https://calendly.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
