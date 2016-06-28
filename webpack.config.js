const path = require('path');
// const webpack = require('webpack');

function defineApplication(appPath) {
  const sources = ['babel-polyfill'];
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://dev04-pc:8080');
    sources.push('webpack/hot/dev-server');
  }

  sources.push(appPath);

  return sources;
}

module.exports = {
  entry: {
    index: defineApplication('apps/index'),
    vendor: ['react', 'react-dom', 'babel-polyfill']
  },
  output: {
    publicPath: '/assets/js',
    path: path.join(__dirname, 'public/assets/js'),
    filename: '[name].js'
  },
  plugins: [],
  debug: true,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.js', '.jsx']
  }
};
