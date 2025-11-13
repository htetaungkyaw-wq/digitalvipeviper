import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  esbuild: {
    jsx: 'automatic'
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
});
