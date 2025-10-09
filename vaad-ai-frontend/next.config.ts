import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "output": "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export with <Image> component
  },
};

export default nextConfig;
