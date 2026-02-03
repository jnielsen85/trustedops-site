import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the MVP static-first: no runtime data fetching needed.
  // If you later choose full static export, uncomment:
  // output: "export",
  // images: { unoptimized: true },
};

export default nextConfig;
