import type { NextConfig } from "next";

/**
 * Static export configuration for S3 hosting.
 * - `output: "export"` writes a fully static site to `out/`
 * - `trailingSlash` makes S3 serve `route/index.html` for `/route/`
 * - `images.unoptimized` removes the runtime image optimizer dependency
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
