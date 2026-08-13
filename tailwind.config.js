/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eafbf1',
          100: '#cdf3e0',
          200: '#9de6c4',
          300: '#63d2a3',
          400: '#34b980',
          500: '#17a06a',
          600: '#0f8557',
          700: '#0c6a46',
          800: '#0d4f38',
          900: '#0a3a2a',
          950: '#041f17',
        },
        ink: {
          50: '#f4f6f5',
          100: '#e6eae8',
          200: '#c8d1cd',
          300: '#9fada7',
          400: '#6d7d76',
          500: '#4a5952',
          600: '#34413b',
          700: '#334037',
          800: '#26312c',
          900: '#1a2320',
          950: '#0f1613',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
