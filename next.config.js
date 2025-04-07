/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove experimental.appDir since it's now default in Next.js 13+
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // Handle routes that require different behavior
  async rewrites() {
    return {
      beforeFiles: [
        // Add any rewrites that should run before static files
      ],
      afterFiles: [
        {
          source: '/profilepage',
          destination: '/profilepage',
        },
      ],
      fallback: [
        // Add fallback routes here if needed
      ],
    };
  },
  // Image optimization settings
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you're using
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable SWC minification
  swcMinify: true,
};

module.exports = nextConfig;