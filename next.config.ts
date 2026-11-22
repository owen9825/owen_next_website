import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into out/, which scripts/deploy.sh uploads to S3
  output: "export",
  // The deploy script sets this to "out", so the build doesn't clobber a running
  // `next dev` (which uses .next); with a static export, the site lands right there
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Emit each page as folder/index.html: the S3 website endpoint behind
  // CloudFront serves index.html for folder URLs, but not extensionless files
  trailingSlash: true,
  // There's no image optimisation server on S3
  images: { unoptimized: true },
};

export default nextConfig;
