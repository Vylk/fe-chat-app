import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WindCss from 'vite-plugin-windicss'
import path from 'node:path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePluginVueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId:'icon-[dir]-[name]'
    }),
    WindCss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
