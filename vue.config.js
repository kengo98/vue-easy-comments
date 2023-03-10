const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader') // npm install --save-dev svg-url-loader
      .loader('svg-url-loader')
  }
})
