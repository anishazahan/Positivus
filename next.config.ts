import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactStrictMode: true,
  typescript: {
    // WARNING: This will allow production builds even with type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
