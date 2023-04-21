const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口文件
  entry: './src/main.js',
  // 构建模式
  mode: 'development',
  output: {
    // 构建后的文件名称
    filename:'bundle.js',
    // 输入文件目录
    path: path.resolve(__dirname, './build')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        // 针对以.css后缀的文件
        test: /\.css$/,
        // 此时不需要使用style-loader，使用MiniCssExtractPlugin.loader替换
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.(gif|png|jpg)$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css'
    }),
    // 增加html文件配置
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ['main']
    })
  ]
}