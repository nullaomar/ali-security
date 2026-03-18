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
      // .html versions (old site URLs from Google)
      { source: "/contact-us.html", destination: "/contact", permanent: true },
      { source: "/apply-now.html", destination: "/apply", permanent: true },
      { source: "/our-services.html", destination: "/services", permanent: true },
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/security-guards-construction.html", destination: "/services", permanent: true },
      { source: "/get-a-quote.html", destination: "/quote", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/work-with-us.html", destination: "/work-with-us", permanent: true },
    ];
  },
};

export default nextConfig;
