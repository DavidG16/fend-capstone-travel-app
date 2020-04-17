const path = require("path");
const Dotenv = require('dotenv-webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  entry: {
    main: "./src/client/index.js",
    vendor: "./src/client/js/vendor.js"
  },
  module: {
    rules: [
        {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
        },    
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }}}]},
  plugins: [
     new Dotenv({
        path: path.resolve(__dirname, './.env'),
        safe: false
     }),
     new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
  }),
]
};