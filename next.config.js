/** @type {import('next').NextConfig} */
const nextConfig = {
  env: getEnvConfig(),
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            expandProps: 'start',
            icon: true,
            removeDimensions: true,
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig

function getEnvConfig() {
  const environment = process.env.TARGET_ENV || process.env.NODE_ENV
  try {
    return require(`./env-${environment}.json`)
  } catch (err) {
    return require('./env.json')
  }
}
