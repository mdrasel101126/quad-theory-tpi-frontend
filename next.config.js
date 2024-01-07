/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://www.api.technicaltest.quadtheoryltd.com/",
      "https://i.ibb.co/",
    ],
  },
};

module.exports = nextConfig;
