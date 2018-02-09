const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


const app = express();
const config = require('./webpack.config.js');
const compier = webpack(config);


app.use(webpackDevMiddleware(compier,{
    publicPath:config.output.publicPath
}));

app.listen(3000,function(){
    console.log('listen post 3000')
})