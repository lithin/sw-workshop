module.exports = {
  entry: [
    'webpack-dev-server/client',
    './app/sw',
  ],
  output: {
    path: 'public',
    filename: 'sw.js',
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
};
