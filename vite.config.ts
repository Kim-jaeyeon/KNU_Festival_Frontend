// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,   // ← 외부 기기(iPad) 접속 허용
    port: 5173,   // ← 포트 고정 (필요시 변경 가능)
  },
})
