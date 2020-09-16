const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'head',
            title: 'Josua Frank',
            meta: {
                charset: 'UTF-8',
                viewport: 'width=device-width, initial-scale=1'
            }
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    }
};