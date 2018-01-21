const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './entry.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "sass-loader"]
            })
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
        }),
        new ExtractTextPlugin('style.css'),
        new BundleAnalyzerPlugin()
    ]
};