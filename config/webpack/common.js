const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    toppage: path.resolve(__dirname, '../../frontend/javascripts/entry/TopPage.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: `@import "${path.resolve(__dirname, '../../frontend/stylesheets/global.scss')}";`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ManifestPlugin(),
    new PrettierPlugin()
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      '@js': path.resolve(__dirname, '../../frontend/javascripts'),
      '@css': path.resolve(__dirname, '../../frontend/stylesheets'),
      '@components': path.resolve(__dirname, '../../frontend/javascripts/components'),
      'vue': 'vue/dist/vue.js'
    }
  }
}
