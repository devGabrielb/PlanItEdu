/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oespacoeducar.com.br",
      },
      {
        protocol: "https",
        hostname: "marketplace.canva.com",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
