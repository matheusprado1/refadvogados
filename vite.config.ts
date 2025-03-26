import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'], // Garante que ele encontre arquivos TypeScript
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
