// const merge = require("webpack-merge");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const parts = require("./webpack.parts");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require('path');
// // const CleanWebpackPlugin = require('clean-webpack-plugin');
// const helpers = require('./helpers');
//
// const commonConfig = merge(parts.loadCSS(),
//     {
//         entry: './src/index.js',
//         output: {
//             path: helpers.root('dist'),
//             publicPath: '/',
//             filename: '[name].bundle.js',
//             chunkFilename: '[id].chunk.js'
//         },
//         resolve: {
//             extensions: ['.ts', '.js', '.scss']
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 title: "AngularJS",
//                 filename: 'app.html',
//                 template: 'src/index.html'
//             }),
//             // new MiniCssExtractPlugin({
//             //     filename: "style.css",
//             // }),
//             // new CleanWebpackPlugin(helpers.root('dist'), {root: helpers.root(), verbose: true}),
//         ],
//     },
// );
//
//
// module.exports = () => commonConfig;

'use strict';

const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./config/webpack.config.dev');
} else {
    module.exports = require('./config/webpack.config.prod');
}