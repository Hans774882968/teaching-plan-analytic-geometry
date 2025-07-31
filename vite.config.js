import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import promptDisplayPlugin from './src/plugins/vite-plugin-prompt-display';
import readmeDisplayPlugin from './src/plugins/vite-plugin-readme-display';
import copy from 'rollup-plugin-copy';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { getWebsiteBasePath } from './src/lib/getWebsiteBasePath';
import blogDataPlugin from './src/plugins/vite-plugin-blog-data';

// https://vite.dev/config/
export default defineConfig(() => {
  const basePath = getWebsiteBasePath();
  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';
  const buildOptions = isGitHubPages ? {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html',
      },
    },
  } : {};

  console.log(`[tpm] Base path: ${basePath}`);

  return {
    base: basePath,
    build: buildOptions,
    plugins: [
      react(),
      tailwindcss(),
      promptDisplayPlugin(),
      readmeDisplayPlugin(),
      blogDataPlugin(),
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
