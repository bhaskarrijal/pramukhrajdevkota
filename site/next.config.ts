import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME || "cms.pramukhdevkota.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/posts",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
