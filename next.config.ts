import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
};

const withMDX = createMDX({
  extension: /\.md$/,
})

export default withMDX(nextConfig);
