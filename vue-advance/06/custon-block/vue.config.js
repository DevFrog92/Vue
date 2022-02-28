const merge = require('deepmerge')
const loader = require.resolve('./src/loader.js')

module.exports = {
  chainWebpack: config => {
    config.module
    .rule('vue')
    .use('vue-loader')
    .tap(options =>
      merge(options, {
        loaders: {
          docs: loader
        }
      }
      )
    )
    .end()
  }
}