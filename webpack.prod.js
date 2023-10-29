const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "Production",
                filename: "index.html",
                template: "./index.pug",
            },
        ),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            , new CssMinimizerPlugin({})]
    },
});