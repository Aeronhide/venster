import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
    minimumCacheTTL: 31_536_000,
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/icons/**", search: "" },
    ],
  },
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
