var webpack = require('webpack');
var Copy = require('copy-webpack-plugin');

module.exports = {
  entry: './handler.js',
  target: 'node',
  node: {
    __dirname: false
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'stage-0']
        }
      },
    ]
  }
};
