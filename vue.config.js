module.exports = {
    configureWebpack: {
        output: {
            library: "VueGridLayout",
            libraryExport: 'default'
        },
    },
    css: {
        extract: false
    },
    productionSourceMap: false
}