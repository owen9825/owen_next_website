import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into out/, which scripts/deploy.sh uploads to S3
  output: "export",
  // Emit each page as folder/index.html: the S3 website endpoint behind
  // CloudFront serves index.html for folder URLs, but not extensionless files
  trailingSlash: true,
  // There's no image optimisation server on S3
  images: { unoptimized: true },
};

export default nextConfig;
