/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui']
      },
      colors: {
        brand: {
          DEFAULT: '#7c3aed',
          foreground: '#f5f3ff'
        }
      },
      boxShadow: {
        glow: '0 0 120px rgba(124, 58, 237, 0.25)'
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)'
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
