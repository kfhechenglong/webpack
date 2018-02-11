const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// bulid 之前先删除旧的打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack')
module.exports = {
	entry: {
		app: './src/index.js',
		// another:'./src/another-module.js'
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename:'[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Production'
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name:'common'
		})
	]

};