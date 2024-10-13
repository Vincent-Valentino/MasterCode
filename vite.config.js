import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This creates the alias @ to point to the src folder
    },
  },
  build: {
    cache: true, // Ensure this is enabled
    minify: 'esbuild', // Use esbuild, it's faster
  },
  plugins: [vue()],
});
