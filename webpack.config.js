const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output:  {
        filename: '[fullhash].bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit:1000
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [ new htmlPlugin({
        title: 'Webpack con TypeScript'
    })]
}