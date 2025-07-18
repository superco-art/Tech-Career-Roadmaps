/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode neon colors
        neon: {
          blue: '#00D4FF',
          purple: '#B347FF',
          pink: '#FF47B3',
          green: '#47FF85',
          yellow: '#FFE047',
          orange: '#FF8547',
          red: '#FF4747',
          cyan: '#47FFFF',
        },
        dark: {
          bg: '#0A0A0F',
          surface: '#1A1A2E',
          card: '#16213E',
          border: '#2A2A4A',
          text: '#E5E5E5',
          muted: '#A0A0B0',
        }
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(0, 212, 255, 0.3)',
        'neon-md': '0 0 20px rgba(0, 212, 255, 0.4)',
        'neon-lg': '0 0 30px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(179, 71, 255, 0.4)',
        'neon-pink': '0 0 20px rgba(255, 71, 179, 0.4)',
        'neon-green': '0 0 20px rgba(71, 255, 133, 0.4)',
      }
    },
  },
  plugins: [],
};
