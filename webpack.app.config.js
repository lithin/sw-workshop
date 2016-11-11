const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[local]__[path][name]__[hash:base64:5]!postcss-loader'),
    }, {
      test: /\.jpeg$/,
      loader: 'file-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    })
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
  target: 'web'

};
