'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: {
        index: "./src/index.ts",
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].ts',
    },
    module: {
        rules : [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude :/node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ]
};