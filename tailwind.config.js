/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hud: {
          dark: '#08090D',
          card: '#0D1017',
          border: '#1A1F2E',
          cyan: '#00F0FF',
          amber: '#F59E0B',
          emerald: '#10B981',
          slate: '#94A3B8'
        }
      },
      aspectRatio: {
        'portrait-hud': '1048 / 2000',
      },
      animation: {
        'marquee-left': 'marquee-left 28s linear infinite',
        'marquee-right': 'marquee-right 28s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}