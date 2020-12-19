module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://query1.finance.yahoo.com/v8/finance/chart/:path*',
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: ['@svgr/webpack']
    })
    return config
  }
}
