/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_CLIENT_URL: process.env.GRAPHQL_CLIENT_URL,
  },
}

module.exports = nextConfig
