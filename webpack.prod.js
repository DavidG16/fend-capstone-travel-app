const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack');



module.exports = {
    entry: './src/client/index.js',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: 'node_modules',
                loader: 'babel-loader'
            },
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new workboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new Dotenv({
            path: path.resolve(__dirname, './.env'),
            safe: true
        })
    ]}