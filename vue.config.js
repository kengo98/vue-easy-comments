const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        if (options === undefined || options === null) {
          options = {};
        }
        options.limit = Infinity;
        return options;
      });
  },
})
