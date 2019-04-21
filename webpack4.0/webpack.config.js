const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const traversdir = require('traversdir');
let cssExtract = new ExtractTextWebpackPlugin({
    filename: 'css/[name].css',
    allChunks: true
});
let lessExtract = new ExtractTextWebpackPlugin('css/[name].css');
const exportsObj = {
    entry:{},
    output:{
        path: path.resolve(__dirname, './dist'),
        // publicPath:"./",
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js'
    },
    module:{
        rules: [
            {
                test: /\.js/,
                include: [path.join(__dirname,'src')],
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                loader: lessExtract.extract({
                    use: ["css-loader", "less-loader"],
                    publicPath: '../'
                })
            }, 
            {
                test: /\.css$/,
                loader: cssExtract.extract({
                    use: ["css-loader"],
                    publicPath: '../'
                })
            },
            // { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.woff2?(\?[\s\S]+)?$/,
                loader: 'url?limit=10000&name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.(svg|ttf|eot)(\?[\s\S]+)?$/,
                loader: 'file?limit=1000&name=assets/fonts/[name].[ext]'
            }, 
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader' ,
                options:{
                    limit:10000,
                    // publicPath:'./images',
                    name: 'images/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins:[
        cssExtract,
        lessExtract,
        new HtmlWebpackPlugin({
            title: '11',
            filename: 'index.html',
            template: path.join(__dirname,'src/index.html'),
            chunks: ['mainpage'],
            hash: true,// 会在引入的js里加入查询字符串避免缓存,
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new UglifyjsWebpackPlugin(),
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:[path.join(__dirname, 'dist')]}),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'src/static'),
            to: path.join(__dirname, 'dist', 'static')
        }]),
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8000,
        compress: true,//服务器返回给浏览器的时候是否启动gzip压缩
    }
};

const pages_path = path.join(__dirname, './src/pages');
const pages_path_dir_object = traversdir(pages_path);
let pathArr = [];
function getPath (dir_object) {
  let dir = dir_object._dirs;
  if(dir.length) {
    dir.forEach(item => {
      let obj = {path:''}
      // 如果当前的目录中含有子目录
      if(dir_object[item]._dirs.length) {
        getPath(dir_object[item]);
      }
      let files = dir_object[item]._files;
        // 判断文件类型
        files.forEach(f => {
          let isJs = /\.js$/;
          let isHtml = /\.html$/;
          let isCss = /\.css$/;
          if(isJs.test(f)){
            obj.js = f;
          } else if(isHtml.test(f)) {
            obj.html = f;
          } else if(isCss.test(f)) {
            obj.css = f;
          }
        })

      if(dir_object._path === '/') {
        obj.path = item;
      } else {
        obj.path = (dir_object._path + '/' + item).replace(/\\/g,'');
      }
      pathArr.push(obj)
    })
  }
}
getPath(pages_path_dir_object);
//生成js
const obj = {};
pathArr.forEach(page => {
  if(page.js) {
    let name = page.js.replace('.js','');
    obj[name] = './src/pages/' + page.path + '/' + page.js;
  }
})
exportsObj.entry = Object.assign(exportsObj.entry, obj);
// 生成html
pathArr.forEach(page => {
  if(page.html) {
    const obj = {
        filename: 'pages/' +  page.path + '/' + page.html,
        template: path.join(__dirname,'src/pages/' +  page.path + '/' + page.html),
        chunks: [],
        hash: true,// 会在引入的js里加入查询字符串避免缓存,
        minify: {
            removeAttributeQuotes: true
        }
    };
    if(page.js) obj.chunks.push(page.js.replace('.js',''));
    const htmlPlugin = new HtmlWebpackPlugin(obj);
    exportsObj.plugins.push(htmlPlugin);
  }
});
module.exports = exportsObj;