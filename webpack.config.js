const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
  ],
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
}
