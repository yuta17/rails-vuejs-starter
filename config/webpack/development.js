const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');
const path = require('path');

module.exports = Merge(CommonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../public/assets'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            publicPath: 'assets/images',
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    public: 'localhost:8080',
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    contentBase: path.resolve(__dirname, '../../public/assets')
  }
});
