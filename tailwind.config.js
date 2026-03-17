/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vyra: {
          black: '#0B1020',
          violet: '#7C3AED',
        },
        slate: {
          core: '#1A2238',
        },
        ice: {
          white: '#F8FAFC',
        },
        soft: {
          gray: '#E5E7EB',
        },
        electric: {
          blue: '#3B82F6',
        },
        glow: {
          cyan: '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #22D3EE, #3B82F6, #7C3AED)',
      }
    },
  },
  plugins: [],
}
