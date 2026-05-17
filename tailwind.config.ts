import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        krop: {
          50:  '#FDF5F0',
          100: '#FAE8DC',
          200: '#F4CCB4',
          300: '#EDAB86',
          400: '#E08A58',
          500: '#C4612A',
          600: '#A34D1E',
          700: '#7D3A15',
          800: '#57280E',
          900: '#2E1507',
        },
        dark: {
          50:  '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#111111',
        },
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
