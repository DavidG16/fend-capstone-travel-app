const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assests-webpack-plugin')
const TerserPlugin = require('tesrser-webpack-plugin')

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new workboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({filename: '[name].css'})
    ]}