const merge = require('webpack-merge').default
const common = require('./webpack.common.js')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = merge(common, {
  name: 'server',
  mode: 'development',
  watch: true,
  watchOptions: {
    poll: 1000
  },
  devtool: 'source-map',
  externals: [
    nodeExternals({
    })
  ],
  plugins: [
    new NodemonPlugin({
      watch: ['dist/server.js', 'src/api.yaml'],
      ext: 'js,json,yaml'
    }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ]
})