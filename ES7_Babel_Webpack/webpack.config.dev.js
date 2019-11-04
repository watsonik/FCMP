module.exports = {
    mode: 'development',
    entry: {
        main: ["whatwg-fetch", "@babel/polyfill", './js/script.js']
    },
    devtool: 'source-map',
    output: {

        filename: '[name].js',
        chunkFilename: 'chunk-[id].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                },
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        publicPath: './dist',
        hot: true,
        historyApiFallback: true
    },
}
