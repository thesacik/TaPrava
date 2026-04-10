import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "inaturalist-open-data.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "static.inaturalist.org",
      },
    ],
  },
};

export default nextConfig;
