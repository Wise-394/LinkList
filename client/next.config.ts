import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname + "/..",
  },
  images: {
    remotePatterns: [{ hostname: "placehold.co" }],
  },
};

export default nextConfig;
