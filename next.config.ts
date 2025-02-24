import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  images: {
    domains: ["opengraph.githubassets.com"], // Add allowed external image domains
  },
};

export default nextConfig;
