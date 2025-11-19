/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode soft colors with good contrast
        soft: {
          blue: '#60A5FA',      // Soft blue
          purple: '#A78BFA',    // Soft purple
          pink: '#F472B6',      // Soft pink
          green: '#4ADE80',     // Soft green
          yellow: '#FBBF24',    // Soft yellow
          orange: '#FB923C',    // Soft orange
          red: '#F87171',       // Soft red
          cyan: '#22D3EE',      // Soft cyan
          indigo: '#818CF8',    // Soft indigo
        },
        dark: {
          bg: '#0F172A',        // Slate-900
          surface: '#1E293B',   // Slate-800
          card: '#334155',      // Slate-700
          border: '#475569',    // Slate-600
          text: '#F1F5F9',      // Slate-100
          muted: '#CBD5E1',     // Slate-300
        }
      },
      boxShadow: {
        'soft-sm': '0 4px 6px -1px rgba(96, 165, 250, 0.2)',
        'soft-md': '0 10px 15px -3px rgba(96, 165, 250, 0.3)',
        'soft-lg': '0 20px 25px -5px rgba(96, 165, 250, 0.4)',
        'soft-purple': '0 10px 15px -3px rgba(167, 139, 250, 0.3)',
        'soft-pink': '0 10px 15px -3px rgba(244, 114, 182, 0.3)',
        'soft-green': '0 10px 15px -3px rgba(74, 222, 128, 0.3)',
      }
    },
  },
  plugins: [],
};
