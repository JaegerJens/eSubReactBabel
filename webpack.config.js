module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    loaders: [
        {
            test: /\.jsx?/,
            loader: 'babel'
        }
    ]
}