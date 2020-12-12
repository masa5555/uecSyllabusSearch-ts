const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.ts')
  },
  resolve: {
    extensions: ['.ts'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/, // babelを通さないディレクトリ
        loader: "ts-loader",
      }
    ]
  }
}