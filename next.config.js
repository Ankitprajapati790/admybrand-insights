/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'your-image-domain.com', // Replace with real domains if using external images
      'cdn.example.com',
      'avatars.githubusercontent.com',
      'cloudflare-ipfs.com',
    ],
  },

  env: {
    NEXT_PUBLIC_OPENAI_KEY: process.env.NEXT_PUBLIC_OPENAI_KEY, // Optional if needed on client
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, './components'),
      '@lib': path.resolve(__dirname, './lib'),
    };
    return config;
  },

  // Optional: Proxy local API (for fullstack backend running separately)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3000/api/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
