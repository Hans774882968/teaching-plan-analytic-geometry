import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import promptDisplayPlugin from './src/plugins/vite-plugin-prompt-display';
import readmeDisplayPlugin from './src/plugins/vite-plugin-readme-display';
import copy from 'rollup-plugin-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    promptDisplayPlugin(),
    readmeDisplayPlugin(),
    copy({
      targets: [
        { src: 'README_assets', dest: 'dist' },
      ],
      hook: 'writeBundle',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5215,
  },
});
