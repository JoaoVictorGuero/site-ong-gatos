import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drimpkordaxzxackbztq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
