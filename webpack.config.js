var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/app/assets/'
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
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff2|ttf)$/,
        loaders: ['file-loader?name=/assets/images/[name].[ext]'],
      }
    ]
  },
};
