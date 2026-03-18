import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/apply-now", destination: "/apply", permanent: true },
      { source: "/get-a-quote", destination: "/quote", permanent: true },
      { source: "/security-guards-construction", destination: "/services", permanent: true },
      { source: "/security-guards-construction/:path*", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
