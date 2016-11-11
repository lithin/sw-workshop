const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client',
      './app/index',
    ],
    sw: [
      './app/sw',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[local]__[path][name]__[hash:base64:5]!postcss-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    modules: [
      'node_modules',
      'app',
    ],
    extensions: ['', '.js', '.css'],
  },
  postcss: function () {
    return [
    ];
  },
  devtool: 'eval',
  target: 'web',
  devServer: {
    contentBase: './public',
    noInfo: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },

};
