const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['index', 'muebles', 'electronica', 'decoracion', 'cesta'];

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/js/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        ],
    },
    plugins: pages.map(page =>
        new HtmlWebpackPlugin({
            inject: true,
            template: `./src/templates/${page}.html`,
            filename: `${page}.html`,
            chunks: [page]
        })
    ),
    devServer: {
        static: './dist',
        port: 8080,
        open: true
    }
};