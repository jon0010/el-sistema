import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    // En Windows / rutas con espacios el watcher nativo a veces no detecta cambios
    watch: {
      usePolling: true,
      interval: 200,
    },
    hmr: {
      overlay: true,
    },
  },
})
