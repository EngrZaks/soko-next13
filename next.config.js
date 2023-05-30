/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "graph.facebook.com",
      "ik.imagekit.io",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
