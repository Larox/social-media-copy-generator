/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OAI_TOKEN: process.env.OAI_TOKEN,
  },
};

module.exports = nextConfig;
