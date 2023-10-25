const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.js",
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
        },
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: "./index.html"
            }
        ),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.s[ac]ss$/,
            //     use: [MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader',
            //     ],
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            },
        ]
    }
}