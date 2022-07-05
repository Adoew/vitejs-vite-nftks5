const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      formats: ['cjs', 'umd', 'es'],
      name: 'library',
    },
    cssCodeSplit: false,
    assetsInlineLimit: 50000,
    /*rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
        }*/
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
