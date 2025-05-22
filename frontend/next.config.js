/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig;
