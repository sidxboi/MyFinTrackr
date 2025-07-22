import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      '/auth': 'http://localhost:3000',
      '/transactions': 'http://localhost:3000',
      '/budgets': 'http://localhost:3000',
      '/analytics': 'http://localhost:3000'
    }
  }
});
