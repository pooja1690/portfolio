var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
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
        loaders: ['url-loader?name=/assets/images/[name].[ext]'],
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  target: "web"
};
