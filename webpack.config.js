const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: 'public/assets/css/[name].css'
})

function sassRules() {
    return [{
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    }]
}

module.exports = {
    entry: {
        app: [
            './resources/Assets/sass/app.scss'
        ] 
    },
    output: {
        filename: 'public/assets/js/[name].js'
    },
    module: {
        rules: sassRules()
    },
    plugins: [
        extractSass
    ]
}