import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          mediapipe: ['@mediapipe/camera_utils', '@mediapipe/drawing_utils', '@mediapipe/hands'],
          tensorflow: ['@tensorflow/tfjs'],
          animations: ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
