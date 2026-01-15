/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/macumbeiro-landing',
  assetPrefix: '/macumbeiro-landing/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

