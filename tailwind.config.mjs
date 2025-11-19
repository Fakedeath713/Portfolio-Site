// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        purple: {
          500: '#667eea',
          600: '#764ba2',
          700: '#5a67d8',
        },
        pink: {
          400: '#f093fb',
        },
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s infinite',
        'float': 'float 20s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in-scale': 'fadeInScale 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}