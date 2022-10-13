const path = require("path");
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = 8080;

let mode = "development";
let envPath = "./.env.dev"
let filename = "index.html";
let publicPath = "/";
let devtool = "inline-source-map";
let performance = {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
};

if (process.env.NODE_ENV === "production") {
    mode = "production";
    envPath = "./.env"
    filename = "/html/index.html";
    publicPath = "../";
    devtool = false;
    performance.hints = "warning";
}

module.exports = {
    mode: mode,
    // Les deux points d'entrées JavaScript de l'application
    entry: ["./src/index.scss", "./src/index.js"],
    performance: performance,
    devtool: devtool,
    devServer: {
        open: true,
        historyApiFallback: true,
        port,
        static: "./dist",
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: publicPath,
        filename: "js/[name].[contenthash].js",
        assetModuleFilename: "images/[hash][ext][query]",
    },
    plugins: [
          new Dotenv({
            path: envPath,
            safe: true,
          }),
        // Utilisation des plugins pour charger vue, pour vider dist/ avant de build et pour copier les fichiers statiques
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: filename,
            favicon: "./src/images/favicon.ico",
            template: "./src/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./public"),
                    to: "",
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    // Des plugins visant à améliorer la vitesse de compilation en plus d'en améliorer l'optimisation et la taille
    optimization: {
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.esbuildMinify,
                terserOptions: {},
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            // JSX loader
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            // Javascript loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            // Fonts loader
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: "fonts/",
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(s?css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 3,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
};
