const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'mainOut.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
};