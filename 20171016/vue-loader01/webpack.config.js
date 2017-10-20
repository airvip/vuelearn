/**
 * Created by Administrator on 2017/10/19.
 */
module.exports = {
    //入口
    entry:'./main.js',
    //出口
    output:{
        path:__dirname,
        filename:'build.js'
    },
    module:{
        loaders:{
            {test:/\.vue$/,loader:'vue'},
            {test:/\.js$/,loader:'babel',exclude:/node_modules/}
        }
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    }
};
