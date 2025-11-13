'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/testEj3.ts",
    },

    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules : [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude : /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './ejercicio3.html',
            filename: 'ejercicio3.html',
            chunks: ['index']
        })
    ]
};