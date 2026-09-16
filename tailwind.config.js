/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0b0d',          // Pure dark obsidian
          surface: '#111318',     // Card surface
          card: '#151720',        // Interactive card background
          cardHover: '#1c202b',   // Hover lifted card
          border: '#222735',      // Subtle border
          borderLight: '#2f364a', // Highlight border
          muted: '#8e95a5',       // Secondary muted text
          text: '#f2f4f8',        // Primary text
        },
        // Dark greyish pink accent: subtle, sophisticated, muted dusty rose / mauve
        roseAccent: {
          50: '#fdf8f9',
          100: '#faedf1',
          200: '#f3d6df',
          300: '#e7b5c4',
          400: '#d58ca3',
          500: '#be7a8e',        // Core muted dark greyish pink
          600: '#a66276',
          700: '#87495c',
          800: '#6d394a',
          900: '#46232e',
          950: '#261118',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'rose-subtle': '0 4px 24px -2px rgba(190, 122, 142, 0.12)',
        'rose-glow': '0 0 35px -5px rgba(190, 122, 142, 0.25)',
      }
    },
  },
  plugins: [],
};