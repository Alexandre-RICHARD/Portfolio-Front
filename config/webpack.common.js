const paths = require("./paths");

const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    paths.src + "/styles/index.scss",
    paths.src + "/index.js",
  ],
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: paths.static,
        to: "",
      }],
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./src/assets/favicon.ico",
      template: "./src/assets/index.html",
      inject: true,
    }),
  ],

  module: {
    rules: [
      // JSX loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // Javascript loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        }, ],
      },
      // Fonts loader
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts/",
        },
      },
      // Images loader
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