/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Industrial-premium palette
        charcoal: '#1A1A1A',
        steel: {
          DEFAULT: '#2D2D2D',
          light: '#6B7280',
        },
        offwhite: '#F5F1EE',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A437',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(0, 0, 0, 0.18)',
        card: '0 4px 20px -6px rgba(0, 0, 0, 0.12)',
        lift: '0 20px 50px -12px rgba(0, 0, 0, 0.28)',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        slowZoom: 'slowZoom 20s ease-out forwards',
      },
    },
  },
  plugins: [],
}
