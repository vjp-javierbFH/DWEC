const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        electronica: "./src/pages/electronica.js",
        muebles: "./src/pages/muebles.js",
        decoracion: "./src/pages/decoracion.js",
        carrito: "./src/pages/carrito.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    devServer: {
        static: "./dist",
        port: 8080,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/electronica.html",
            filename: "electronica.html",
            chunks: ["electronica"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/muebles.html",
            filename: "muebles.html",
            chunks: ["muebles"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/decoracion.html",
            filename: "decoracion.html",
            chunks: ["decoracion"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/carrito.html",
            filename: "carrito.html",
            chunks: ["carrito"]
        })
    ]
};
