const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jpg"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: "./src/index.html"
            }
        )
    ]

}