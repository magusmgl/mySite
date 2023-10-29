const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./index.ts",
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "Production",
                filename: "index.html",
                template: "./index.pug"
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".js", ".jpg"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                        hmr: true,
                        reloadAll: true
                    }
                },
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
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    }
}