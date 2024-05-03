import type { Config } from 'tailwindcss'

import { tokens } from 'tailwind-plugin-tokens'
import { radix } from 'tailwind-plugin-tokens/palettes'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    tokens({
      defaultTheme: 'light',
      tokens: { colors: radix.colors },
      semanticTokens: {
        colors: {
          border: {
            DEFAULT: { value: '{colors.gray.6}', dark: '{colors.grayDark.6}' },
          },
          input: {
            DEFAULT: { value: '{colors.gray.6}', dark: '{colors.grayDark.6}' },
          },
          ring: {
            DEFAULT: { value: '{colors.blue.9}', dark: '{colors.blueDark.9}' },
          },
          background: {
            DEFAULT: { value: '{colors.gray.1}', dark: '{colors.grayDark.1}' },
          },
          foreground: {
            DEFAULT: { value: '{colors.gray.12}', dark: '{colors.grayDark.12}' },
          },
          primary: {
            DEFAULT: { value: '{colors.gray.12}', dark: '{colors.grayDark.12}' },
            foreground: { value: '{colors.gray.1}', dark: '{colors.grayDark.1}' },
          },
          secondary: {
            DEFAULT: { value: '{colors.gray.3}', dark: '{colors.grayDark.3}' },
            foreground: { value: '{colors.gray.12}', dark: '{colors.grayDark.12}' },
          },
          destructive: {
            DEFAULT: { value: '{colors.red.9}', dark: '{colors.redDark.9}' },
            foreground: { value: '#ffffff', dark: '#ffffff' },
          },
          muted: {
            DEFAULT: { value: '{colors.gray.3}', dark: '{colors.grayDark.3}' },
            foreground: { value: '{colors.gray.10}', dark: '{colors.grayDark.10}' },
          },
          accent: {
            DEFAULT: { value: '{colors.gray.3}', dark: '{colors.grayDark.3}' },
            foreground: { value: '{colors.gray.12}', dark: '{colors.grayDark.12}' },
          },
          popover: {
            DEFAULT: { value: '#ffffff', dark: '#0a0a0a' },
            foreground: { value: '{colors.gray.12}', dark: '{colors.grayDark.12}' },
          },
          card: {
            DEFAULT: { value: '#ffffff', dark: '#0a0a0a' },
            foreground: { value: '{colors.gray.12}', dark: '{colors.grayDark.12}' },
          },
        },
      },
    }),
  ],
}

export default config
