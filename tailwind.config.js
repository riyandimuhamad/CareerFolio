/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        health: {
          teal: '#14B8A6',
          cyan: '#06B6D4'
        },
        agro: {
          green: '#10B981',
          brown: '#92400E',
          cream: '#FEF3C7'
        },
        tech: {
          gray: '#374151',
          black: '#111827',
          orange: '#F97316',
          blue: '#3B82F6'
        },
        law: {
          navy: '#001F3F',
          burgundy: '#800020',
          gold: '#D4AF37'
        },
        biz: {
          blue: '#1E40AF',
          gold: '#FFD700'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
