const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

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
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[ext]',
                },
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        },
                    },
                ]
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
                template: './src/pug/index.pug',
                filename: 'index.html'
            },
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pug/access/index.pug',
                filename: 'access/index.html'
            },
        ),
        new CleanWebpackPlugin(),
    ]
};
