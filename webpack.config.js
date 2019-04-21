const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');

let config = {
	// 入口文件
	entry : {},
	output:{},
	// 配置本地服务器
	devServer:{
		port:9090,
		hot: true,
		inline:true
	},
	// 配置插件
	plugins:[]
};
//业务入口文件所在的目录
var entryDir = path.join(__dirname, 'pages/');
var entries = glob.sync(entryDir + '*').map(function(entry) {
    return {
        name: path.basename(entry),
        path: entry
    }
});
console.log(entries);
entries.forEach(function(entry) {
    //添加entry
    config.entry[entry.name] = [entry.path];
	console.log("entry====="+JSON.stringify(entry))
    //生成html
    config.plugins.push(new HtmlWebpackPlugin({
        filename: entry.name + '.html',
        template: entry.path + '/page.html',
        chunks: ['vendors','common',entry.name],
        hash: true,
        minify: {removeComments:true,collapseWhitespace:true}
    }));

});
entries = entries.map(function(entry) {
    return entry.name;
});
console.log(config);
module.exports = config;