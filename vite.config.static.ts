import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// Configuration for static site deployment (GitHub Pages)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/space-station-object-detection/', // Replace with your actual repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared')
    }
  },
  build: {
    outDir: 'dist/static',
    emptyOutDir: true
  }
});