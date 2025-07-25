import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import promptDisplayPlugin from './src/plugins/vite-plugin-prompt-display';
import readmeDisplayPlugin from './src/plugins/vite-plugin-readme-display';
import copy from 'rollup-plugin-copy';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { getWebsiteBasePath } from './src/lib/getWebsiteBasePath';

// https://vite.dev/config/
export default defineConfig(() => {
  const basePath = getWebsiteBasePath();

  console.log(`[tpm] Base path: ${basePath}`);

  return {
    base: basePath,
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
      nodePolyfills(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5215,
    },
  };
});
