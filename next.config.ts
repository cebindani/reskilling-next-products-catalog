import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.steamstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
