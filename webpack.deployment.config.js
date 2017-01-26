const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    './app/index.js',
    './app/components/Projects.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  debug: true,
  devtool: "#eval-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader?name=/assets/images/[name].[ext]',
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.(jpe|jpg|eot|ttf|svg)(\?.*$|$)/,
        loaders: ['file-loader?name=/assets/images/[name].[ext]'],
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }
    ]
  },
};
