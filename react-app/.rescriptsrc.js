module.exports = {
    webpack: (config) => {
        config.output.library = 'react app'
        config.output.libraryTarget = 'umd'
        config.output.publicPath = '//localhost:3001/'
        return config
    },
    devServer: config => {
        config.headers = {
            'Access-Control-Allow-Origin': '*'
        }
        return config
    }
}