const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = () => {
  const plugins = [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: './index.html'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new SvgStore({
      name: 'sprite-store.svg',
      prefix: 'icon-',
    }),
    new CopyWebpackPlugin([]),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]

  return plugins;
}

