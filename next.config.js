const withSass = require('@zeit/next-sass')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = withSass({
  compress: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(new MiniCssExtractPlugin({ ignoreOrder: true,}))
  //   return config
  // },
})