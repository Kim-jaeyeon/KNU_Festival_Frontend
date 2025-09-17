// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  /*server: {
    host: true,   // ← 외부 기기(iPad) 접속 허용
    port: 5173,   // ← 포트 고정 (필요시 변경 가능)
  },*/
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.knu2025festival.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
})
