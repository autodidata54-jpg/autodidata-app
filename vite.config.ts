import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    /* VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'AutoDidata',
        short_name: 'AutoDidata',
        description: 'Plataforma de estudos mobile-first',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }) */
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
