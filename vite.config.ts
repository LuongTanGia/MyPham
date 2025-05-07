/* eslint-disable no-undef */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Root src alias
      '@components': path.resolve(__dirname, 'src/components'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@middlewares': path.resolve(__dirname, 'src/middlewares'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@class': path.resolve(__dirname, 'src/class'),
      '@exports': path.resolve(__dirname, 'src/exports'),
      '@forms': path.resolve(__dirname, 'src/forms'),
      '@controllers': path.resolve(__dirname, 'src/controllers'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '~types': path.resolve(__dirname, 'src/types'),
      '~stores': path.resolve(__dirname, 'src/stores')
    }
  }
})
