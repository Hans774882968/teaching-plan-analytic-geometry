import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    // ... Specify options here.
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
