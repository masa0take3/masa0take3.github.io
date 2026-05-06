import type { NextConfig } from 'next';
const nextConfig: NextConfig = { output: 'export', trailingSlash: false, eslint:{ignoreDuringBuilds:true} };
export default nextConfig;
