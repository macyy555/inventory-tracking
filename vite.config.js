import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoprefixer()],
  server: {
    port: 3030 // change here //default: 5173
  },
})
