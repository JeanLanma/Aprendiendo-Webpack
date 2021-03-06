const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/index.js',
    output:  {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
        rules: [
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
    plugins: [ new htmlPlugin()]
}