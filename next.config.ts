import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,   // Hides the indicator
    reactStrictMode: true  // Stops double running async functions -> will not effect production
};

export default nextConfig;
