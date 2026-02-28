import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for the Docker multi-stage build.
  // Produces .next/standalone — a minimal Node.js server with no node_modules needed.
  output: "standalone",
};

export default nextConfig;
