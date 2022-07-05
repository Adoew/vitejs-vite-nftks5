const path = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  css: {
    extract: true,
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      console.log('[configureWebpack] Production mode...');
      console.log(' -- Force code minimize...');
    } else {
      console.log('[configureWebpack] Development mode...');
    }
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      console.log('[chainWebpack] Production mode...');
    } else {
      console.log('[chainWebpack] Development mode...');
      console.log(" -- Force 'production' mode (See issue #4245)");
      config.mode('production');
    }
    config.optimization.delete('splitChunks');

    config.module.rule('images').set('parser', {
      dataUrlCondition: {
        maxSize: 50000,
      },
    });
  },
  pages: {
    index: {
      entry: path.resolve(__dirname, './src/index.js'),
      template: path.resolve(__dirname, './public/index.html'),
    },
  },
});
