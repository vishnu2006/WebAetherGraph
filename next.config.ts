import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Explicitly disable PPR and cache components - incompatible with static export
  cacheComponents: false,
  partialPrefetching: false,
};

export default nextConfig;
