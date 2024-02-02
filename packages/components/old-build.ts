import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  build: {
    //打包后文件目录
    outDir: 'es',
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue', 'async'],
      //input: ["index.ts"],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist'
      }
    },
    lib: {
      entry: './index.ts',
      name: 'qf',
      fileName: 'qf',
      formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [vue()]
});
