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
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [
          {
            loader: 'img-optimize-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'src/image',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|wave)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'src/audio',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|avi)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'src/video',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
}
