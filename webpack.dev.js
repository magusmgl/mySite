const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        compress: true,
        port:3003,
        hot: true,
        open: true,
        client: {
            logging: "info",
        },
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
        new ESLintPlugin({}),
        new StylelintPlugin({
            extensions: ["css", "scss"],
            resolveNestedSelectors: true,
        }),
    ],
});
