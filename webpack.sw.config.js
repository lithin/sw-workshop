const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/sw',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'sw.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }]
  },
  resolve: {
    modules: [
      'node_modules',
      'app',
    ],
    extensions: ['', '.js'],
  },
  devtool: 'eval',
  target: 'web',
};
