const path = require('path')

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
  }
}