/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // The Vercel build is memory-bound at 1,500+ pages. Next runs a full project-wide
  // type-check + ESLint pass during `next build`, which loads the entire TS program into
  // memory on top of webpack and is a major OOM contributor. Type/lint are validated
  // separately (npm run lint / tsc), so we skip them in the production build to cut peak memory.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Large statically generated site (1,500+ page modules after the city-ISR conversion).
    // Three levers keep the Vercel build under the 8GB container so it is not OOM-killed (SIGKILL):
    //   - webpackBuildWorker: runs webpack compilation in its own worker so its heap is freed
    //     before the page-rendering phase, cutting peak container memory (targets compile-phase OOM).
    //   - memoryBasedWorkersCount: scales static-generation workers to available RAM.
    //   - workerThreads: false: lowers peak memory by avoiding extra worker thread overhead.
    webpackBuildWorker: true,
    memoryBasedWorkersCount: true,
    workerThreads: false,
  },
  redirects: async () => {
    // Legacy .html service URLs from the old site are still indexed in Google
    // (e.g. /services/hcm-healthcare.html, /services/payroll-legal.html). The new app serves
    // those topics under nested clean URLs, so 301 the legacy .html paths to the live nested
    // pages to recapture the existing search equity instead of 404ing. Sources are fixed literal
    // paths (built in a loop) to avoid any path-matching ambiguity.
    const verticals = ['engineering', 'executive', 'finance', 'healthcare', 'legal', 'technology', 'trades'];
    const lines = [
      { flat: 'hcm', nested: 'hcm-software' },
      { flat: 'payroll', nested: 'managed-payroll' },
      { flat: 'placement', nested: 'job-placement' },
    ];
    const legacyHtmlRedirects = [];
    for (const { flat, nested } of lines) {
      for (const v of verticals) {
        // Redirect BOTH the legacy .html path and the extensionless flat path.
        // vercel.json strips /services/...-x.html down to /services/...-x at the edge
        // (Vercel clean URLs), so the extensionless rule is the one that actually fires;
        // the .html rule is a harmless belt-and-suspenders. Verticals only (never "software"),
        // so the real /services/hcm-software hub is never matched.
        legacyHtmlRedirects.push(
          { source: `/services/${flat}-${v}.html`, destination: `/services/${nested}/${v}`, permanent: true },
          { source: `/services/${flat}-${v}`, destination: `/services/${nested}/${v}`, permanent: true },
        );
      }
    }
    // Legacy hub .html pages -> clean hub URLs.
    legacyHtmlRedirects.push(
      { source: '/services/hcm-software.html', destination: '/services/hcm-software', permanent: true },
      { source: '/services/managed-payroll.html', destination: '/services/managed-payroll', permanent: true },
      { source: '/services/job-placement.html', destination: '/services/job-placement', permanent: true },
    );

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
      ...legacyHtmlRedirects,
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
              "img-src 'self' data: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://px.ads.linkedin.com https://i.ytimg.com https://img.youtube.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://connect.facebook.net https://px.ads.linkedin.com",
              "frame-src https://www.googletagmanager.com https://calendly.com https://www.youtube-nocookie.com https://www.youtube.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
