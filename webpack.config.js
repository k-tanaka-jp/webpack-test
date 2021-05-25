const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './assets/js/main.js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: './assets/css/layout.css',
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/html/index.html',
            }
        ),
        new CleanWebpackPlugin(),
    ]
};
