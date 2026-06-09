import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/jobs/:path*", destination: "/Jobs/:path*" },
      { source: "/teams/:path*", destination: "/Teams/:path*" },
      { source: "/wayleaves/:path*", destination: "/Wayleaves/:path*" },
      { source: "/map/:path*", destination: "/Map/:path*" },
      { source: "/login", destination: "/auth/login" },
      { source: "/company-selection", destination: "/auth/select-company" },
    ];
  },
};

export default nextConfig;
