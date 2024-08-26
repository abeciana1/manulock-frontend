import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

const isTest = process.env.NODE_ENV === 'test';

export default defineConfig({
  plugins: [!isTest && TanStackRouterVite(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  },
});
