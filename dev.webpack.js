module.exports = {
    mode: 'development',
    entry: {
        main: './ES7_Babel_Webpack/js/script.js'
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
                exclude: /(node_modules)/

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
