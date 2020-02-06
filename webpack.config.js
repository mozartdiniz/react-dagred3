/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};
