import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // Retired page (we no longer run demos); keep any existing links and rankings pointing somewhere useful.
      { source: "/samples-demo", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
