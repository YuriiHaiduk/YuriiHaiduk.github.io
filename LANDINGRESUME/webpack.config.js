const path =  require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const Autoprefixer= require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const optimization = () => {
    const config = {
         splitChunks: {
             chunks: "all"
         }
     }
     if(isProd){
         config.minimizer = [
             new OptimizeCssAssetsWebpackPlugin(),
             new TerserWebpackPlugin()
         ]
     }
     return config;
}

const cssLoaders = (...extra) => {

    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader, options: {
                publicPath: '',
            },
        },
        'css-loader',
        'postcss-loader'

    ]

    if(extra){
        loaders.push(...extra)
    }

    return loaders
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets:[
                '@babel/preset-env'
            ],
            plugins:[
                '@babel/plugin-proposal-class-properties'
            ]
        }
    }
    ]

    if (isDev) {
        // loaders.push('eslint-loader');
    }

    return loaders
}

const plugins = () => {

    const base =  [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            minify:{
                collapseWhitespace: isProd,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: "contacts.html",
            template: "./contacts.html",
            minify:{
                collapseWhitespace: isProd,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:  [
                {
                    from: path.resolve(__dirname, './src/assets/images'),
                    to: path.resolve(__dirname, 'dist/assets/images')
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css',
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:'jquery',
            'window.jQuery': 'jquery'
        })


    ]

    if(isProd){
        base.push( new BundleAnalyzerPlugin());
    }

    return base;
}

function devtool() {  // function to set dev-tool depending on environment
    if (isDev) return 'source-map'
    // else return 'cheap-module-source-map';
}



module.exports = {
    context: path.resolve(__dirname,'src'),
    mode:'development',
    entry: {
        main:['@babel/polyfill','./js/index.js'],
    },
    target: 'web',
    output:{
         filename: 'js/[name].[contenthash].js',
         path: path.resolve(__dirname,'dist')
     },
    optimization:optimization(),
    devServer: {
        open:true,
        port:4200,
    },
    devtool:devtool(),
    plugins:plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use:cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use:cssLoaders('sass-loader')
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                // use:['file-loader'],
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    outputPath: 'assets/images'
                }

            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts'
                }
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:jsLoaders(),
            },
        ]
    },

};