/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // важно!!!
  images: {
    unoptimized: true,
  },
  basePath: '/spa-productsss',
  assetPrefix: '/spa-productsss/',
};

module.exports = nextConfig;
