let path =require('path');
module.exports = {
    publicPath:'./',
    outputDir:'./lib',
    pages: {
        'index': {
            // page 的入口
            entry: './examples/main.js',
            // 模板来源
            template: 'public/index.html',
            output: {
                filename: '[name].js'
            }
        }
    },
    filenameHashing:false,
    css:{extract:false},
   /* productionSourceMap:false,*/

};