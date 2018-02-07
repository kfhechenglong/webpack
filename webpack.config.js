const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
	{
		// 入口文件
		entry : './js/index.js',
		output:{
			path:path.resolve(__dirname,'dist'),
			filename:'index_webpack_app.js'
		},
		// 配置本地服务器
		devServer:{
			port:9090,
			hot: true,
			inline:true
		},
		// 配置插件
		plugins:[
			new HtmlWebpackPlugin({
				title:'ahahh',
				filename:'index.html',
				template:'./index.html',
			})
		]
	},
	//导出另外一个配置对象
	{
		// 配置的起始目录
		context:path.resolve(__dirname,'content'),
		entry:['../js/index-2.js','./index_content.js'],
		// entry:() =>new Promise((resolve) =>resolve(['../js/index-2.js','./index_content.js'])),
		output:{
			path:path.resolve(__dirname,'dist'),
			filename:'index_2_webpack_app.js',
			library:'MyLibrary',
			// libraryTarget:'umd',
			// auxiliaryComment:'this is test demo',
			// pathinfo:true,
			// publicPath:'./assets/'
		},
		plugins:[
			new HtmlWebpackPlugin({
				title:'this is another demo',
				filename:'index_2.html',
				template:'./index.html',
			})
		]
	}
]