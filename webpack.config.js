const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const parts = require("./webpack.parts");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack demo",
            }),
            new MiniCssExtractPlugin({
                filename: "style.css",
            }),
        ],
    },
    parts.loadCSS(),
]);


module.exports = () => commonConfig;