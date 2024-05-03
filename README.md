# tailwind-plugin-tokens

This is a plugin for [Tailwind CSS](https://tailwindcss.com) that generate css variables from your tailwind config.

Then you can use same class for multiple themes.

## Installation

```bash
npm install tailwindcss tailwind-plugin-tokens
```

## Usage

### Simple example

```typescript
/// tailwind.config.ts

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
```

### ShadCN example

```typescript
/// tailwind.config.ts

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
```

## Configuration

### `prefix`

The prefix for the generated css variables. For example, if you set `prefix` to `radix`, the generated css variables will be `--radix-colors-gray-1`.

### `defaultTheme`

The default theme to use when you set `value` property for semanticToken. The default value is `light`.

### `defaultThemeClassFn`

The function to generate the class name for the default theme. For example, if you set `defaultThemeClassFn` to `theme => theme-${theme}`, the generated class name will be `theme-light`. All css variables will be declared in this class.

### `tokens`

Declaration of tokens. Theses tokens will be used by `semanticTokens`.

### `semanticTokens`

Declaration of semanticTokens. Theses tokens will be used to generate css variables.
