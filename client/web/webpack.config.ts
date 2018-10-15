var path = require('path');
var HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    //项目入口
    entry: "./src/Main.ts",
    //输出设置
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    //调试工具
    devtool: "source-map",
    //模块加载器设置
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    //自动识别后缀
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    //调试服务
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },
    //插件
    plugins: [
        new HtmlWebPackPlugin( { title: "threejs学习" }),
    ]
}