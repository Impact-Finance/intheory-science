/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HUBSPOT_TOKEN: process.env.HUBSPOT_TOKEN,
  },
};

module.exports = nextConfig;
