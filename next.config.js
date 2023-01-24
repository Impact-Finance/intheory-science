/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_CLIENT: process.env.DB_CLIENT,
  },
};

module.exports = nextConfig;
