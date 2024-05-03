import type { Config } from 'tailwindcss'

import { tokens } from 'tailwind-plugin-tokens'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {},
  plugins: [
    tokens({
      tokens: {
        colors: {
          red: {
            50: '#FFEBEE',
            100: '#FFCDD2',
            200: '#EF9A9A',
            300: '#E57373',
            400: '#EF5350',
            500: '#F44336',
            600: '#E53935',
            700: '#D32F2F',
            800: '#C62828',
            900: '#B71C1C',
          },
        },
      },
      semanticTokens: {
        // these colors will be valid for any kind of colors utilities,
        // such as `bg-destructive`, `text-destructive`, etc.
        colors: {
          destructive: {
            DEFAULT: { light: '{colors.red.500}', dark: '{colors.red.500}' },
          },
        },
        // these colors will only be valid when using text related utilities,
        // such as `text-primary`
        textColors: {
          primary: {
            DEFAULT: { light: '#ffffff', dark: '#ffffff' },
          },
        },
      },
    }),
  ],
}

export default config
