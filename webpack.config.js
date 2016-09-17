var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/src/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        loader: [
          'babel-loader',
        ],
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        loader: [
          'babel-loader'
        ],
        query: {
          presets: ['react']
        }
      }
    ],
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins:[HTMLWebpackPluginConfig],
  devtool: '#source-map',
};
