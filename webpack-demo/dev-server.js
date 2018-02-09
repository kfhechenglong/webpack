
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');


const config = require('./webpack.config.js');
const compier = webpack(config);

const options = {
    contentBase:'./dist',
    hot:true,
    host:'localhost'
};
webpackDevServer.addDevServerEntrypoints(config,options);

const server = new webpackDevServer(compier,options);

server.listen(5000,function(){
    console.log('listen post 5000')
})