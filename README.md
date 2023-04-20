# webpack5 示例项目

## 初始化项目

使用npm init初始化项目配置

安装`webpack`依赖
```
npm install webpack --save-dev
npm install webpack-cli --save-dev
```
### 简单项目测试

分别在跟目录下创建`webpack.config.js`、`index.html`文件，进行`src`文件夹，并再其下创建`main.js`文件

#### 创建index.html文件内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webpack</title>
</head>
<body>
  webpack示例项目
  <button id="btn">按钮</button>
</body>
<script src="./build/bundle.js"></script>
</html>
```

#### 修改main.js文件

```js
document.querySelector('#btn').addEventListener('click', function() {
  console.log('我被点击了！')
}, false)
```

#### 配置webpack配置文件

```js
// webpack.config.js
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

```

#### 测试项目配置

在package.json文件中创建启动脚本
```json
"scripts": {
  "start": "webpack --config webpack.config.js"
}
```

在命令行工具中使用`npm run start`启动webpack的编译程序，然后再浏览器中打开根目录下的index.html文件，点击页面中的按钮，控制台中输出`我被点击了！`，说明项目配置一切顺利正常。

## 