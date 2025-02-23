import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true, // ✅ Keep it outside of withPWA
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Optional: Disable PWA in development mode
  cacheStartUrl: false, // Prevents caching issues on first load
  dynamicStartUrl: false, // Prevents overwriting start URL cache
})(nextConfig);
