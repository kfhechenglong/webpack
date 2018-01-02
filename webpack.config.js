const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	// 入口文件
	entry : './js/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'index_webpack.js'
	},
	// 配置本地服务器
	devServer:{
		port:9090,
		hot: true,
		inline:true
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'ahahh',
			filename:'dist/index.html'
			template:'index.html'
		})
	]
}