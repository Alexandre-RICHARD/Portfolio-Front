const paths = require("./paths");
const common = require("./webpack.common.js");
const {
    merge
} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        path: paths.build,
        publicPath: "./",
        filename: "js/[name].[contenthash].js",
    },
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],

    module: {
        rules: [{
            // Styles loader
            test: /\.(s?css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: "../"
                },
            },
            {
                loader: "css-loader",
                options: {
                    importLoaders: 3
                },
            },
            "postcss-loader",
            "resolve-url-loader",
            {
                loader: "sass-loader",
                options: {
                    implementation: require("sass"),
                    sourceMap: true,
                },
            },
            ],
        }],
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.esbuildMinify,
                terserOptions: {},
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});