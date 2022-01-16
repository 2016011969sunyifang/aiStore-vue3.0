import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugins"),
      views: path.resolve(__dirname, "src/views"),
      layouts: path.resolve(__dirname, "src/layouts"),
      utils: path.resolve(__dirname, "src/utils"),
      apis: path.resolve(__dirname, "src/apis"),
      dirs: path.resolve(__dirname, "src/directives"),
    },
  },
  // server: {
  //   port: 8088,
  //   proxy: {
  //     "/api": {
  //       target: "http://175.24.200.3:7001",
  //       // target: 'http://localhost:7001',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ""),
  //     },
  //     "/ws-api": {
  //       target: "ws://175.24.200.3:7002",
  //       changeOrigin: true, //是否允许跨域
  //       ws: true,
  //     },
  //   },
  // },
  plugins: [vue()],
});
