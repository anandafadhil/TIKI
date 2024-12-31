import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during builds
  },
  // Add any other configuration options here...
};

export default nextConfig;