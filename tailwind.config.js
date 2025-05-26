/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c0d9ff',
          300: '#94bfff',
          400: '#609bff',
          500: '#3b76ff',
          600: '#2558ff',
          700: '#1a43e3',
          800: '#1935b8',
          900: '#1a3491',
        },
        secondary: {
          50: '#f0f7fa',
          100: '#dbedf5',
          200: '#bcdeec',
          300: '#8ac8dd',
          400: '#51aacb',
          500: '#318fb0',
          600: '#277293',
          700: '#245c78',
          800: '#234c63',
          900: '#224054',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffeed2',
          200: '#ffd9a5',
          300: '#ffbd6d',
          400: '#ff9a37',
          500: '#ff7f11',
          600: '#f15d06',
          700: '#c84208',
          800: '#9f3310',
          900: '#802a10',
        },
        mystical: {
          50: '#f6f3ff',
          100: '#ede8ff',
          200: '#dbd1ff',
          300: '#c0abff',
          400: '#a378ff',
          500: '#884dff',
          600: '#7a28ff',
          700: '#6818e8',
          800: '#5515bc',
          900: '#461699',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}