import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cherrys-medical-knowledge/', // GitHub Pages base path — must match repo name
  server: {
    open: true,
  },
});
