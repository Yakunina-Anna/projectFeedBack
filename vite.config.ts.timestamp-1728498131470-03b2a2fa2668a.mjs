// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "file:///D:/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2/project%201/project%20feedback/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2/project%201/project%20feedback/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2/project%201/project%20feedback/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2/project%201/project%20feedback/vite.config.ts";
var getComponentHashName = (name, filename) => {
  const file = path.basename(filename).split(".")[0];
  return `${file}__${name}`;
};
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    modules: {
      generateScopedName: (name, filename) => getComponentHashName(name, filename)
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0MzVcdTA0M0FcdTA0NDJcdTA0NEJcXFxcXHUwNDM4XHUwNDNEXHUwNDQyXHUwNDM1XHUwNDNEXHUwNDQxXHUwNDM4XHUwNDMyXFxcXHByb2plY3QgMVxcXFxwcm9qZWN0IGZlZWRiYWNrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0MzVcdTA0M0FcdTA0NDJcdTA0NEJcXFxcXHUwNDM4XHUwNDNEXHUwNDQyXHUwNDM1XHUwNDNEXHUwNDQxXHUwNDM4XHUwNDMyXFxcXHByb2plY3QgMVxcXFxwcm9qZWN0IGZlZWRiYWNrXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRDAlQkYlRDElODAlRDAlQkUlRDAlQjUlRDAlQkElRDElODIlRDElOEIvJUQwJUI4JUQwJUJEJUQxJTgyJUQwJUI1JUQwJUJEJUQxJTgxJUQwJUI4JUQwJUIyL3Byb2plY3QlMjAxL3Byb2plY3QlMjBmZWVkYmFjay92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG5jb25zdCBnZXRDb21wb25lbnRIYXNoTmFtZSA9IChuYW1lOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBmaWxlID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSkuc3BsaXQoJy4nKVswXTtcblxuICByZXR1cm4gYCR7ZmlsZX1fXyR7bmFtZX1gO1xufTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICBnZW5lcmF0ZVNjb3BlZE5hbWU6IChuYW1lLCBmaWxlbmFtZSkgPT5cbiAgICAgICAgZ2V0Q29tcG9uZW50SGFzaE5hbWUobmFtZSwgZmlsZW5hbWUpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxWixTQUFTLGVBQWUsV0FBVztBQUN4YixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSnFMLElBQU0sMkNBQTJDO0FBTTlQLElBQU0sdUJBQXVCLENBQUMsTUFBYyxhQUE2QjtBQUN2RSxRQUFNLE9BQU8sS0FBSyxTQUFTLFFBQVEsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBRWpELFNBQU8sR0FBRyxJQUFJLEtBQUssSUFBSTtBQUN6QjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1Asb0JBQW9CLENBQUMsTUFBTSxhQUN6QixxQkFBcUIsTUFBTSxRQUFRO0FBQUEsSUFDdkM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
