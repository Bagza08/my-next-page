/** @type {import('next').NextConfig} */

const allowedDomains = [
  "media.istockphoto.com",
  "media.karousell.com",
  "www.google.com",
  "www.static-src.com",
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: allowedDomains.map((domain) => ({
      protocol: "https",
      hostname: domain,
      port: "",
      pathname: domain === "www.google.com" ? "/images/branding/**" : "/**",
    })),
  },
};

export default nextConfig;
