/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        kairo: {
          dark: '#0B0F19',
          panel: '#131826',
          accent: '#7C5CFF',
          accent2: '#4CC9F0',
        },
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        floatY: 'floatY 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
