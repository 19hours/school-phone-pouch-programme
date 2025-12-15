import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f4b99',
        secondary: '#0ea5e9',
        accent: '#fbbf24',
      },
    },
  },
  plugins: [],
};

export default config;
