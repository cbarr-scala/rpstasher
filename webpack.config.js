const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['env'],
        plugins: [
          'transform-object-rest-spread',
          'transform-class-properties'
        ]
      },
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['env']
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
