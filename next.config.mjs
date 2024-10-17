/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com", // Domain yang menyebabkan error
        port: "",
        pathname: "/**", // Memungkinkan path apa saja dari domain ini
      },
      {
        protocol: "https",
        hostname: "www.google.com", // Domain tempat gambar berada
        port: "",
        pathname: "/images/branding/**", // Path untuk gambar dari Google
      },
    ],
  },
};

export default nextConfig;
