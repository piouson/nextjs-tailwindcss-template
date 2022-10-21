const envConfig = require('./env.json')

const environment = process.env.TARGET_ENV || process.env.NODE_ENV

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: envConfig[environment],
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
