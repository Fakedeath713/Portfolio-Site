// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Tailwind CSS integration
  integrations: [tailwind()],
  
  // Your site URL
  site: 'https://elifdikmen.com',
  
  // Build output directory
  outDir: './dist',
  
  // Public directory
  publicDir: './public',
  
  // Server options
  server: {
    port: 4321,
    host: true
  },
  
  // Build options
  build: {
    assets: 'assets'
  }
});