const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: './assets/javascripts/home.js',
    posts_new: './assets/javascripts/posts/new/index.js',
    jquery: './assets/vendor/jquery.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('../../public/assets/dashboard'),
    publicPath: 'http://localhost:8080/assets'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('../../public/assets'),
    hot: true,
    allowedHosts: ['localhost']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] }
        }
      }
    ]
  }
}
