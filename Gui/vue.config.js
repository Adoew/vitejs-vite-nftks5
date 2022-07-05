const fs = require('fs');
const path = require('path');
const { defineConfig } = require('@vue/cli-service');

const settingsJson = require(path.join(__dirname, '../.vscode/settings.json'));

guiLibraryPath = path.join(__dirname, '..', 'guiLibrary', path.sep);

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'));
  },
  //Added for Vue 3 because two instances of Vue were detected causing an error
  configureWebpack: {
    resolve: {
      //symlinks: false,
      alias: {
        //resolving the assets generated in dist
        '/fonts': path.resolve(guiLibraryPath, 'dist/fonts'),
        '/img': path.resolve(guiLibraryPath, 'dist/img'),
      },
    },
  },
  pages: {
    index: {
      // TODO shouldn't we use files from current application here?
      entry: path.resolve(__dirname, 'src/gui.js'),
      template: path.resolve(guiLibraryPath, '/public/index.html'),
    },
  },
});
