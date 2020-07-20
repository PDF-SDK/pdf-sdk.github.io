var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var env = process.NODE_ENV;

var distPath = path.resolve(__dirname, 'dist');
var libPath = path.resolve(__dirname, '../../../../lib');

module.exports = {
    mode: env,
    entry: {
        index: ['./index.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distPath,
        port: 9999,
        hot: true,
        inline: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        clientLogLevel: 'error'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: libPath,
                to: path.resolve(distPath, 'lib'),
                force: true
            },
            {
                from: path.resolve(__dirname, '../../../../docs/FoxitPDFSDKforWeb_DeveloperGuide.pdf'),
                to: path.resolve(distPath, 'docs'),
                force: true,
                toType: 'dir'
            },
            {
                from: path.resolve(__dirname, '../../../../external'),
                to: path.resolve(distPath, 'external'),
                force: true
            }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            "@lib": libPath,
            'UIExtension': path.resolve(libPath, 'UIExtension.full.js')
        }
    },
    output: {
        filename: '[name].js',
        path: distPath
    }
};