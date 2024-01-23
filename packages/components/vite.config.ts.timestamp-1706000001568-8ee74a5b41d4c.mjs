// vite.config.ts
import { defineConfig } from "file:///home/le0l1/qf-design-test/node_modules/.pnpm/vite@4.5.0_@types+node@20.9.3_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///home/le0l1/qf-design-test/node_modules/.pnpm/@vitejs+plugin-vue@4.5.0_vite@4.5.0_vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///home/le0l1/qf-design-test/node_modules/.pnpm/vite-plugin-dts@3.0.0_@types+node@20.9.3_less@4.2.0_typescript@5.3.2/node_modules/vite-plugin-dts/dist/index.mjs";
import DefineOptions from "file:///home/le0l1/qf-design-test/node_modules/.pnpm/unplugin-vue-define-options@1.4.0_vue@3.3.8/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var vite_config_default = defineConfig({
  build: {
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略不需要打包的文件
      external: ["vue", /\.less/, "@qf/utils"],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../qf-design/es"
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../qf-design/lib"
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      name: "qf-design"
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outDir: ["../qf-design/es/src", "../qf-design/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "../../tsconfig.json"
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler = bundle[key];
          this.emitFile({
            type: "asset",
            fileName: key,
            //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css")
          });
        }
      }
    }
  ],
  // vitest config
  test: {
    environment: "happy-dom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9sZTBsMS9xZi1kZXNpZ24tdGVzdC9wYWNrYWdlcy9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9sZTBsMS9xZi1kZXNpZ24tdGVzdC9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2xlMGwxL3FmLWRlc2lnbi10ZXN0L3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICAvL1x1NTM4Qlx1N0YyOVxuICAgIC8vbWluaWZ5OiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvL1x1NUZGRFx1NzU2NVx1NEUwRFx1OTcwMFx1ODk4MVx1NjI1M1x1NTMwNVx1NzY4NFx1NjU4N1x1NEVGNlxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgL1xcLmxlc3MvLCAnQHFmL3V0aWxzJ10sXG4gICAgICBpbnB1dDogWydpbmRleC50cyddLFxuICAgICAgb3V0cHV0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxuICAgICAgICAgIGZvcm1hdDogJ2VzJyxcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NTQwRVx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLm1qcycsXG4gICAgICAgICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgICAgIGRpcjogJy4uL3FmLWRlc2lnbi9lcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vXHU2MjUzXHU1MzA1XHU2ODNDXHU1RjBGXG4gICAgICAgICAgZm9ybWF0OiAnY2pzJyxcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NTQwRVx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIC8vXHU5MTREXHU3RjZFXHU2MjUzXHU1MzA1XHU2ODM5XHU3NkVFXHU1RjU1XG4gICAgICAgICAgZGlyOiAnLi4vcWYtZGVzaWduL2xpYidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogJy4vaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ3FmLWRlc2lnbidcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIG91dERpcjogWycuLi9xZi1kZXNpZ24vZXMvc3JjJywgJy4uL3FmLWRlc2lnbi9saWIvc3JjJ10sXG4gICAgICAvL1x1NjMwN1x1NUI5QVx1NEY3Rlx1NzUyOFx1NzY4NHRzY29uZmlnLmpzb25cdTRFM0FcdTYyMTFcdTRFRUNcdTY1NzRcdTRFMkFcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEIsXHU1OTgyXHU2NzlDXHU0RTBEXHU5MTREXHU3RjZFLFx1NEY2MFx1NEU1Rlx1NTNFRlx1NEVFNVx1NTcyOGNvbXBvbmVudHNcdTRFMEJcdTY1QjBcdTVFRkF0c2NvbmZpZy5qc29uXG4gICAgICB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5qc29uJ1xuICAgIH0pLFxuICAgIERlZmluZU9wdGlvbnMoKSxcbiAgICB7XG4gICAgICBuYW1lOiAnc3R5bGUnLFxuICAgICAgZ2VuZXJhdGVCdW5kbGUoY29uZmlnLCBidW5kbGUpIHtcbiAgICAgICAgLy9cdThGRDlcdTkxQ0NcdTUzRUZcdTRFRTVcdTgzQjdcdTUzRDZcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTc2RUVcdTVGNTVcdTRFRTVcdTUzQ0FcdTRFRTNcdTc4MDFjb2RlXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhidW5kbGUpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICBjb25zdCBidW5kbGVyOiBhbnkgPSBidW5kbGVba2V5IGFzIGFueV07XG4gICAgICAgICAgLy9yb2xsdXBcdTUxODVcdTdGNkVcdTY1QjlcdTZDRDUsXHU1QzA2XHU2MjQwXHU2NzA5XHU4RjkzXHU1MUZBXHU2NTg3XHU0RUY2Y29kZVx1NEUyRFx1NzY4NC5sZXNzXHU2MzYyXHU2MjEwLmNzcyxcdTU2RTBcdTRFM0FcdTYyMTFcdTRFRUNcdTVGNTNcdTY1RjZcdTZDQTFcdTY3MDlcdTYyNTNcdTUzMDVsZXNzXHU2NTg3XHU0RUY2XG5cbiAgICAgICAgICB0aGlzLmVtaXRGaWxlKHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NldCcsXG4gICAgICAgICAgICBmaWxlTmFtZToga2V5LCAvL1x1NjU4N1x1NEVGNlx1NTQwRFx1NTQwRFx1NEUwRFx1NTNEOFxuICAgICAgICAgICAgc291cmNlOiBidW5kbGVyLmNvZGUucmVwbGFjZSgvXFwubGVzcy9nLCAnLmNzcycpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIC8vIHZpdGVzdCBjb25maWdcbiAgdGVzdDoge1xuICAgIGVudmlyb25tZW50OiAnaGFwcHktZG9tJ1xuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBRWhCLE9BQU8sbUJBQW1CO0FBQzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHTCxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxPQUFPLFVBQVUsV0FBVztBQUFBLE1BQ3ZDLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsUUFBUTtBQUFBLFFBQ047QUFBQTtBQUFBLFVBRUUsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQTtBQUFBLFVBRVQsS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLFFBQVE7QUFBQTtBQUFBLFVBRVIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUE7QUFBQSxVQUVULEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBLE1BQ1gsUUFBUSxDQUFDLHVCQUF1QixzQkFBc0I7QUFBQTtBQUFBLE1BRXRELGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sZUFBZSxRQUFRLFFBQVE7QUFFN0IsY0FBTSxPQUFPLE9BQU8sS0FBSyxNQUFNO0FBRS9CLG1CQUFXLE9BQU8sTUFBTTtBQUN0QixnQkFBTSxVQUFlLE9BQU8sR0FBVTtBQUd0QyxlQUFLLFNBQVM7QUFBQSxZQUNaLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQTtBQUFBLFlBQ1YsUUFBUSxRQUFRLEtBQUssUUFBUSxXQUFXLE1BQU07QUFBQSxVQUNoRCxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
