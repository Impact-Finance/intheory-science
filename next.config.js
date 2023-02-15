/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_CLIENT: process.env.DB_CLIENT,
    HUBSPOT_TOKEN: process.env.HUBSPOT_TOKEN,
  },
};

module.exports = nextConfig;
