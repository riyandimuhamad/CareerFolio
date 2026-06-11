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
        healthpro: {
          primary: '#005c55',
          'primary-container': '#0f766e',
          'on-primary': '#ffffff',
          'secondary-container': '#bde7eb',
          'on-secondary-container': '#41696d',
          surface: '#f7faf8',
          'surface-dim': '#d7dbd9',
          'surface-container-low': '#f1f4f3',
          'on-surface': '#181c1c',
          'on-surface-variant': '#3e4947',
          'outline-variant': '#bdc9c6',
          'primary-fixed': '#9cf2e8'
        },
        agro: {
          primary: '#005d42',
          'primary-container': '#047857',
          'on-primary': '#ffffff',
          'on-primary-container': '#9ffdd3',
          secondary: '#944a23',
          'secondary-container': '#fd9e70',
          'on-secondary': '#ffffff',
          'on-secondary-container': '#76340e',
          surface: '#f8f9ff',
          'surface-dim': '#d1dbec',
          'surface-container-low': '#eef4ff',
          'surface-container-lowest': '#ffffff',
          'on-surface': '#121c28',
          'on-surface-variant': '#3e4943',
          'outline-variant': '#bdc9c1',
          'surface-variant': '#d9e3f4',
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
