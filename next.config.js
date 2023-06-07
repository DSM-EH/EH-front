/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['*'],
  },
  experimental: {
    swcMinifyDebugOptions: {
      compress: {
        defaults: true,
        side_effects: false,
      },
    },
  },
  swcMinify: true,
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
