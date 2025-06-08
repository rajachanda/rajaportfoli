import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rajaportfoli/',
  server: {
    port: 3000,
    host: true, // Add this to allow connections from network
    open: true  // Open browser automatically
  },
  publicDir: 'public', // Added this line to explicitly set public directory
});
