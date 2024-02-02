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
      external: ["vue", "async-validator", /\.less/, "@qf/utils"],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9sZTBsMS9xZi1kZXNpZ24tdGVzdC9wYWNrYWdlcy9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9sZTBsMS9xZi1kZXNpZ24tdGVzdC9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2xlMGwxL3FmLWRlc2lnbi10ZXN0L3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICAvL1x1NTM4Qlx1N0YyOVxuICAgIC8vbWluaWZ5OiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvL1x1NUZGRFx1NzU2NVx1NEUwRFx1OTcwMFx1ODk4MVx1NjI1M1x1NTMwNVx1NzY4NFx1NjU4N1x1NEVGNlxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ2FzeW5jLXZhbGlkYXRvcicsIC9cXC5sZXNzLywgJ0BxZi91dGlscyddLFxuICAgICAgaW5wdXQ6IFsnaW5kZXgudHMnXSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcbiAgICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5tanMnLFxuICAgICAgICAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgICBkaXI6ICcuLi9xZi1kZXNpZ24vZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgICAgIGRpcjogJy4uL3FmLWRlc2lnbi9saWInXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICcuL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdxZi1kZXNpZ24nXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYycsXG4gICAgICBvdXREaXI6IFsnLi4vcWYtZGVzaWduL2VzL3NyYycsICcuLi9xZi1kZXNpZ24vbGliL3NyYyddLFxuICAgICAgLy9cdTYzMDdcdTVCOUFcdTRGN0ZcdTc1MjhcdTc2ODR0c2NvbmZpZy5qc29uXHU0RTNBXHU2MjExXHU0RUVDXHU2NTc0XHU0RTJBXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCLFx1NTk4Mlx1Njc5Q1x1NEUwRFx1OTE0RFx1N0Y2RSxcdTRGNjBcdTRFNUZcdTUzRUZcdTRFRTVcdTU3Mjhjb21wb25lbnRzXHU0RTBCXHU2NUIwXHU1RUZBdHNjb25maWcuanNvblxuICAgICAgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuanNvbidcbiAgICB9KSxcbiAgICBEZWZpbmVPcHRpb25zKCksXG4gICAge1xuICAgICAgbmFtZTogJ3N0eWxlJyxcbiAgICAgIGdlbmVyYXRlQnVuZGxlKGNvbmZpZywgYnVuZGxlKSB7XG4gICAgICAgIC8vXHU4RkQ5XHU5MUNDXHU1M0VGXHU0RUU1XHU4M0I3XHU1M0Q2XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0XHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHU0RUU1XHU1M0NBXHU0RUUzXHU3ODAxY29kZVxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYnVuZGxlKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgY29uc3QgYnVuZGxlcjogYW55ID0gYnVuZGxlW2tleSBhcyBhbnldO1xuICAgICAgICAgIC8vcm9sbHVwXHU1MTg1XHU3RjZFXHU2NUI5XHU2Q0Q1LFx1NUMwNlx1NjI0MFx1NjcwOVx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNmNvZGVcdTRFMkRcdTc2ODQubGVzc1x1NjM2Mlx1NjIxMC5jc3MsXHU1NkUwXHU0RTNBXHU2MjExXHU0RUVDXHU1RjUzXHU2NUY2XHU2Q0ExXHU2NzA5XHU2MjUzXHU1MzA1bGVzc1x1NjU4N1x1NEVGNlxuXG4gICAgICAgICAgdGhpcy5lbWl0RmlsZSh7XG4gICAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICAgICAgZmlsZU5hbWU6IGtleSwgLy9cdTY1ODdcdTRFRjZcdTU0MERcdTU0MERcdTRFMERcdTUzRDhcbiAgICAgICAgICAgIHNvdXJjZTogYnVuZGxlci5jb2RlLnJlcGxhY2UoL1xcLmxlc3MvZywgJy5jc3MnKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdLFxuICAvLyB2aXRlc3QgY29uZmlnXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbSdcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUVoQixPQUFPLG1CQUFtQjtBQUMxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUE7QUFBQTtBQUFBLElBR0wsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUMsT0FBTyxtQkFBbUIsVUFBVSxXQUFXO0FBQUEsTUFDMUQsT0FBTyxDQUFDLFVBQVU7QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDTjtBQUFBO0FBQUEsVUFFRSxRQUFRO0FBQUE7QUFBQSxVQUVSLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUUsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQTtBQUFBLFVBRVQsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxRQUFRLENBQUMsdUJBQXVCLHNCQUFzQjtBQUFBO0FBQUEsTUFFdEQsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixlQUFlLFFBQVEsUUFBUTtBQUU3QixjQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFFL0IsbUJBQVcsT0FBTyxNQUFNO0FBQ3RCLGdCQUFNLFVBQWUsT0FBTyxHQUFVO0FBR3RDLGVBQUssU0FBUztBQUFBLFlBQ1osTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBO0FBQUEsWUFDVixRQUFRLFFBQVEsS0FBSyxRQUFRLFdBQVcsTUFBTTtBQUFBLFVBQ2hELENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
