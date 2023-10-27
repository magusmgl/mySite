const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    context: path.resolve(__dirname, "src"),
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
        minimize: true,
        minimizer: [
            "...",
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: "./index.pug"
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: MiniCssExtractPlugin.loader,
                    options: {
                    esModule: true,
                    }},
                    "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: "asset/resource",
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
        ]
    }
}