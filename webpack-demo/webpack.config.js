const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// bulid 之前先删除旧的打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 删除export文件中未被引用的 模块
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack')
module.exports = {
	// entry:'./src/index.js',
	entry:{
		app:'./src/index.js',
		// print:'./src/print.js'
	},
	output:{
		// filename:'bundle.js',
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/'
	},
	devtool:'inline-source-map',
	// devServer:{
	// 	contentBase:'./dist',
	// 	hot:true
	// },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			hash:false,
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new UglifyJSPlugin()
  	],
	module: {
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			}
		]
	}

};