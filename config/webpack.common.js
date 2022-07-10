const paths = require("./paths");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    paths.src + "/styles/index.scss",
    paths.src + "/index.js",
  ],
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "js/[name].[contenthash].js",
  },
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: paths.static,
        to: "",
      }],
    }),

    new HtmlWebpackPlugin({
      favicon: paths.assets + "/favicon.png",
      template: paths.assets + "/index.html",
    }),
  ],

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        }, ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts/",
        },
      },
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "images/"
          },
        }, ],
      },
    ],
  },
};