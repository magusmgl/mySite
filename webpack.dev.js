const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const Webpack = require("webpack");
const StylelintPlugin = require('stylelint-webpack-plugin');


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
        new CleanWebpackPlugin(),
        new ESLintPlugin({}),
        new StylelintPlugin({
            extensions: ["css", "scss"],
            resolveNestedSelectors: true,
        }),
    ],
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
    },

});
