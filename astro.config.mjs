// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import pkg from 'astro-i18n';
const { i18n } = pkg;

export default defineConfig({
  // Tailwind CSS integration
  integrations: [
    tailwind(),
    react(),
    i18n(),
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