import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  basePath: '/gecian_hub',
  assetPrefix: '/gecian_hub/',
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  cacheStartUrl: true,
  dynamicStartUrl: false,
})(nextConfig);
