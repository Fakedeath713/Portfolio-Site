// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  // Tailwind CSS integration
  integrations: [tailwind(), 
    react(),
  ],
  
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