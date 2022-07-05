const fs = require('fs');
const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
libraryPath = path.join(__dirname, '..', 'guiLibrary', path.sep);
module.exports = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //vue: path.resolve(`./node_modules/vue`),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
