const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                // query: {
                //   presets: [
                //     '@babel/env',
                //     '@babel/react'
                //   ]
                // },
            },
            // {
            //     test: /.jsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //       {
            //         loader: 'babel-loader',
            //         // query: {
            //         //   presets: ['es2016', 'react']
            //         // },
            //       }
            //     ]
            // },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './font/[hash].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|eot)$/,
                use: ['file-loader']
            }
        ]
    },
    optimization:{
        minimize: false
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        publicPath: "/",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: false
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
