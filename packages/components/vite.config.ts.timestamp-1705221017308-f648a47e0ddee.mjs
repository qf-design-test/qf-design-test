// vite.config.ts
import { defineConfig } from "file:///D:/qf-design-test/node_modules/.pnpm/vite@4.5.0_eone4iawucs776tivxwf63sy5a/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/qf-design-test/node_modules/.pnpm/@vitejs+plugin-vue@4.5.0_vite@4.5.0+vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/qf-design-test/node_modules/.pnpm/vite-plugin-dts@3.0.0_k3mssssdqavw3muuepra33vpxq/node_modules/vite-plugin-dts/dist/index.mjs";
import DefineOptions from "file:///D:/qf-design-test/node_modules/.pnpm/unplugin-vue-define-options@1.4.0_vue@3.3.8/node_modules/unplugin-vue-define-options/dist/vite.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxxZi1kZXNpZ24tdGVzdFxcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxxZi1kZXNpZ24tdGVzdFxcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9xZi1kZXNpZ24tdGVzdC9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgLy9cdTUzOEJcdTdGMjlcbiAgICAvL21pbmlmeTogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy9cdTVGRkRcdTc1NjVcdTRFMERcdTk3MDBcdTg5ODFcdTYyNTNcdTUzMDVcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsIC9cXC5sZXNzLywgJ0BxZi91dGlscyddLFxuICAgICAgaW5wdXQ6IFsnaW5kZXgudHMnXSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcbiAgICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5tanMnLFxuICAgICAgICAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgICBkaXI6ICcuLi9xZi1kZXNpZ24vZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgICAgIGRpcjogJy4uL3FmLWRlc2lnbi9saWInXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICcuL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdxZi1kZXNpZ24nXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYycsXG4gICAgICBvdXREaXI6IFsnLi4vcWYtZGVzaWduL2VzL3NyYycsICcuLi9xZi1kZXNpZ24vbGliL3NyYyddLFxuICAgICAgLy9cdTYzMDdcdTVCOUFcdTRGN0ZcdTc1MjhcdTc2ODR0c2NvbmZpZy5qc29uXHU0RTNBXHU2MjExXHU0RUVDXHU2NTc0XHU0RTJBXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCLFx1NTk4Mlx1Njc5Q1x1NEUwRFx1OTE0RFx1N0Y2RSxcdTRGNjBcdTRFNUZcdTUzRUZcdTRFRTVcdTU3Mjhjb21wb25lbnRzXHU0RTBCXHU2NUIwXHU1RUZBdHNjb25maWcuanNvblxuICAgICAgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuanNvbidcbiAgICB9KSxcbiAgICBEZWZpbmVPcHRpb25zKCksXG4gICAge1xuICAgICAgbmFtZTogJ3N0eWxlJyxcbiAgICAgIGdlbmVyYXRlQnVuZGxlKGNvbmZpZywgYnVuZGxlKSB7XG4gICAgICAgIC8vXHU4RkQ5XHU5MUNDXHU1M0VGXHU0RUU1XHU4M0I3XHU1M0Q2XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0XHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHU0RUU1XHU1M0NBXHU0RUUzXHU3ODAxY29kZVxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYnVuZGxlKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgY29uc3QgYnVuZGxlcjogYW55ID0gYnVuZGxlW2tleSBhcyBhbnldO1xuICAgICAgICAgIC8vcm9sbHVwXHU1MTg1XHU3RjZFXHU2NUI5XHU2Q0Q1LFx1NUMwNlx1NjI0MFx1NjcwOVx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNmNvZGVcdTRFMkRcdTc2ODQubGVzc1x1NjM2Mlx1NjIxMC5jc3MsXHU1NkUwXHU0RTNBXHU2MjExXHU0RUVDXHU1RjUzXHU2NUY2XHU2Q0ExXHU2NzA5XHU2MjUzXHU1MzA1bGVzc1x1NjU4N1x1NEVGNlxuXG4gICAgICAgICAgdGhpcy5lbWl0RmlsZSh7XG4gICAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICAgICAgZmlsZU5hbWU6IGtleSwgLy9cdTY1ODdcdTRFRjZcdTU0MERcdTU0MERcdTRFMERcdTUzRDhcbiAgICAgICAgICAgIHNvdXJjZTogYnVuZGxlci5jb2RlLnJlcGxhY2UoL1xcLmxlc3MvZywgJy5jc3MnKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdLFxuICAvLyB2aXRlc3QgY29uZmlnXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbSdcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUVoQixPQUFPLG1CQUFtQjtBQUMxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUE7QUFBQTtBQUFBLElBR0wsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUMsT0FBTyxVQUFVLFdBQVc7QUFBQSxNQUN2QyxPQUFPLENBQUMsVUFBVTtBQUFBLE1BQ2xCLFFBQVE7QUFBQSxRQUNOO0FBQUE7QUFBQSxVQUVFLFFBQVE7QUFBQTtBQUFBLFVBRVIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUE7QUFBQSxVQUVULEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBO0FBQUEsVUFFRSxRQUFRO0FBQUE7QUFBQSxVQUVSLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxNQUNYLFFBQVEsQ0FBQyx1QkFBdUIsc0JBQXNCO0FBQUE7QUFBQSxNQUV0RCxjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGVBQWUsUUFBUSxRQUFRO0FBRTdCLGNBQU0sT0FBTyxPQUFPLEtBQUssTUFBTTtBQUUvQixtQkFBVyxPQUFPLE1BQU07QUFDdEIsZ0JBQU0sVUFBZSxPQUFPLEdBQVU7QUFHdEMsZUFBSyxTQUFTO0FBQUEsWUFDWixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUE7QUFBQSxZQUNWLFFBQVEsUUFBUSxLQUFLLFFBQVEsV0FBVyxNQUFNO0FBQUEsVUFDaEQsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
