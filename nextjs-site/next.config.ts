import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/ultra-tour-de-la-ria' : '',
  assetPrefix: isProd ? '/ultra-tour-de-la-ria/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
