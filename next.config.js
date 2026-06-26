/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      // Blog: hcm-technology → hcm-software (301 permanent)
      {
        source: '/blog/hcm-technology/hr-automation',
        destination: '/blog/hcm-software/hr-automation',
        permanent: true,
      },
      {
        source: '/blog/hcm-technology/isolved-platform',
        destination: '/blog/hcm-software/isolved-platform',
        permanent: true,
      },
      {
        source: '/blog/hcm-technology/payroll-compliance',
        destination: '/blog/hcm-software/payroll-compliance',
        permanent: true,
      },
      // Catch-all for any future hcm-technology blog URLs
      {
        source: '/blog/hcm-technology/:slug*',
        destination: '/blog/hcm-software/:slug*',
        permanent: true,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
