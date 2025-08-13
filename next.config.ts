import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend-blogs.up.railway.app',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
