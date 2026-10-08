import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
