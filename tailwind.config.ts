import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem'
    },
    extend: {
      colors: {
        brand: {
          primary: '#1c4ed8',
          accent: '#f97316'
        }
      },
      lineHeight: {
        snug: '1.6',
        relaxed: '1.8'
      },
      spacing: {
        18: '4.5rem'
      }
    }
  },
  plugins: [typography]
}
export default config
