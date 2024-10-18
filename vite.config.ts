import { fileURLToPath, URL } from 'node:url'
import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const getComponentHashName = (name: string, filename: string): string => {
  const file = path.basename(filename).split('.')[0];

  return `${file}__${name}`;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    modules: {
      generateScopedName: (name, filename) =>
        getComponentHashName(name, filename),
    },
  },
})
