const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        if (options === undefined || options === null) {
          options = {};
        }
        options.limit = 10240;
        return options;
      });
  }
})
