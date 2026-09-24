import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/medical-knowledge-search/', // For GitHub Pages deployment
  server: {
    open: true,
  },
});
