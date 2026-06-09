import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The curriculum data is intentionally bundled into the app for offline-friendly browsing.
    chunkSizeWarningLimit: 1000,
  },
})
