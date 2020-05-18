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
    configureWebpack: (config) => {

        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
             /*   alias: {
                    'element-ui': path.resolve(__dirname, './src/components'),
                } // 别名配置*/
            }
        })
    },
    filenameHashing:false,
    css:{extract:false},
   /* productionSourceMap:false,*/

};