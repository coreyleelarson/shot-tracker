import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shot-tracker/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Shot Tracker',
        short_name: 'Shot Tracker',
        description: 'A simple basketball shot tracker.',
      },
    }),
  ],
});
