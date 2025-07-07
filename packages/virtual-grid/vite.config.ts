import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      fileName: 'index',
      name: 'index',
      formats: ['es', 'umd'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      // 多入口打包
      input: {},
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    vueJsx(),
    dts({
      entryRoot: './components',
      outputDir: `./dist/types`,
      noEmitOnError: false,
      skipDiagnostics: false,
    }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('.', import.meta.url)),
      '@': resolve(__dirname, './'),
    },
  },
});
