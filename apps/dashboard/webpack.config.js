const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './assets/index',
    posts_new: './components/posts/new/index',
    navbar: './components/navbar/index'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
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
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
}
