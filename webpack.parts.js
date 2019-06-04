const helpers = require('./helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
exports.loadCSS = () => ({
    resolve: {
        extensions: ['.js', '.scss']
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        url: false
                    }
                },// translates CSS into CommonJS
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                },// compiles Sass to CSS, using Node Sass by default
                {
                    loader: "file-loader",
                    // include: [path.resolve(__dirname,'src')],

                }
            ],
            include: helpers.root('src', 'app')
        }]
    },
});