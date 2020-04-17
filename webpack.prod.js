const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new TerserPlugin({}), 
            new OptimizeCSSAssetsPlugin({}),
            new HtmlWebpackPlugin({
                template:  './src/client/views/index.html',
                minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true
                }
              })
        ],
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new workboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({filename: '[name].[contentHash].css'})
    ]})