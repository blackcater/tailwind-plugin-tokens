import { describe, expect, it } from 'vitest'

import { Generator } from './Generator'

describe('generator@Generator', () => {
  const shadows = [
    '0 1px 0 0 rgb(0, 0, 0 / 0.1)',
    '0 2px 0 0 rgb(255, 255, 255 / 0.3)',
  ]

  describe('#Constructor', () => {
    it('should be validate reference in semantic tokens', () => {
      expect(
        () => new Generator(
          {},
          {
            colors: {
              brand: { value: '{colors.red.100}' },
            },
          },
        ),
      ).toThrowError('Reference not found')

      expect(
        () => new Generator(
          {},
          {
            backgroundColors: {
              brand: { value: '{colors.red.100}' },
            },
          },
        ),
      ).toThrowError('Reference not found')

      expect(
        () => new Generator(
          {
            colors: {
              red: { 100: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red.100}' },
            },
          },
        ),
      ).not.toThrowError()

      expect(
        () => new Generator(
          {
            colors: {
              red: { 100: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red.100}' },
            },
          },
        ),
      ).not.toThrowError()

      expect(
        () => new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}' },
            },
          },
        ),
      ).not.toThrowError()

      expect(
        () => new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}' },
            },
          },
        ),
      ).not.toThrowError()
    })
  })

  describe('#themes', () => {
    it('should be return themes', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}', dark: '{colors.red}', custom: '{colors.red}' },
            },
          },
        )).themes,
      ).toEqual(['light', 'dark', 'custom'])

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}', dark: '{colors.red}', custom: '{colors.red}' },
            },
          },
        )).themes,
      ).toEqual(['light', 'dark', 'custom'])

      expect(
        (new Generator(
          {},
          {
            dropShadows: {
              sm: {
                value: shadows[0],
                dark: shadows[1],
                custom: shadows[0],
              },
            },
          },
        )).themes,
      ).toEqual(['light', 'dark', 'custom'])
    })
  })

  describe('#variables', () => {
    it('should be return variables', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}' },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--colors-brand': '#ff0000',
        },
      })

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}' },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--colors-background-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for DEFAULT', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: {
                DEFAULT: { value: '{colors.red}' },
                subtle: { value: '{colors.red}' },
              },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--colors-brand': '#ff0000',
          '--colors-brand-subtle': '#ff0000',
        },
      })

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: {
                DEFAULT: { value: '{colors.red}' },
                subtle: { value: '{colors.red}' },
              },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--colors-background-brand': '#ff0000',
          '--colors-background-brand-subtle': '#ff0000',
        },
      })
    })

    it('should be return variables for dark theme', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
              green: { DEFAULT: '#00ff00' },
            },
          },
          {
            colors: {
              brand: {
                light: '{colors.green}',
                dark: '{colors.red}',
              },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--colors-brand': '#00ff00',
        },
        dark: {
          '--colors-brand': '#ff0000',
        },
      })

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
              green: { DEFAULT: '#00ff00' },
            },
          },
          {
            backgroundColors: {
              brand: {
                light: '{colors.green}',
                dark: '{colors.red}',
              },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--colors-background-brand': '#00ff00',
        },
        dark: {
          '--colors-background-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for custom prefix', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}' },
            },
          },
          { prefix: 'foo' },
        )).variables,
      ).toEqual({
        light: {
          '--foo-colors-brand': '#ff0000',
        },
      })

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}' },
            },
          },
          { prefix: 'foo' },
        )).variables,
      ).toEqual({
        light: {
          '--foo-colors-background-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for defaultTheme', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}' },
            },
          },
          { defaultTheme: 'dark' },
        )).variables,
      ).toEqual({
        dark: {
          '--colors-brand': '#ff0000',
        },
      })

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}' },
            },
          },
          { defaultTheme: 'dark' },
        )).variables,
      ).toEqual({
        dark: {
          '--colors-background-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for shadows', () => {
      expect(
        (new Generator(
          {},
          {
            boxShadows: {
              sm: { value: shadows[0] },
            },
          },
        )).variables,
      ).toEqual({
        light: {
          '--shadows-box-sm': shadows[0],
        },
      })
    })
  })

  describe('#variants', () => {
    it('should be return variants', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}' },
            },
          },
        )).variants,
      ).toEqual([
        {
          name: 'light',
          definition: ['&.light', '&[data-theme=\'light\']'],
        },
      ])

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}' },
            },
          },
        )).variants,
      ).toEqual([
        {
          name: 'light',
          definition: ['&.light', '&[data-theme=\'light\']'],
        },
      ])
    })
  })

  describe('#utilities', () => {
    it('should be return utilities', () => {
      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            colors: {
              brand: { value: '{colors.red}' },
            },
          },
        )).utilities,
      ).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-brand': '255 0 0',
        },
      })

      expect(
        (new Generator(
          {
            colors: {
              red: { DEFAULT: '#ff0000' },
            },
          },
          {
            backgroundColors: {
              brand: { value: '{colors.red}' },
            },
          },
        )).utilities,
      ).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-background-brand': '255 0 0',
        },
      })
    })

    it('should be return utilities for dark theme', () => {
      expect((new Generator(
        {
          colors: {
            red: { DEFAULT: '#ff0000' },
            green: { DEFAULT: '#00ff00' },
          },
        },
        {
          colors: {
            brand: {
              light: '{colors.green}',
              dark: '{colors.red}',
            },
          },
        },
      )).utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-brand': '0 255 0',
        },
        '.dark,[data-theme=\'dark\']': {
          'color-scheme': 'dark',
          '--colors-brand': '255 0 0',
        },
      })

      expect((new Generator(
        {
          colors: {
            red: { DEFAULT: '#ff0000' },
            green: { DEFAULT: '#00ff00' },
          },
        },
        {
          backgroundColors: {
            brand: {
              light: '{colors.green}',
              dark: '{colors.red}',
            },
          },
        },
      )).utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-background-brand': '0 255 0',
        },
        '.dark,[data-theme=\'dark\']': {
          'color-scheme': 'dark',
          '--colors-background-brand': '255 0 0',
        },
      })
    })

    it('should be return utilities for alpha color', () => {
      expect(new Generator(
        {
          colors: {
            red: { DEFAULT: 'rgba(255, 0, 0, 0.5)' },
          },
        },
        {
          colors: {
            brand: { value: '{colors.red}' },
          },
        },
      ).utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-brand': '255 0 0',
          '--colors-brand-opacity': '0.50',
        },
      })

      expect(new Generator(
        {
          colors: {
            red: { DEFAULT: 'rgba(255, 0, 0, 0.5)' },
          },
        },
        {
          backgroundColors: {
            brand: { value: '{colors.red}' },
          },
        },
      ).utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-background-brand': '255 0 0',
          '--colors-background-brand-opacity': '0.50',
        },
      })
    })

    it('should be return utilities for shadows', () => {
      expect(
        (new Generator(
          {},
          {
            boxShadows: {
              sm: { value: shadows[0] },
            },
          },
        )).utilities,
      ).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--shadows-box-sm': shadows[0],
        },
      })

      expect(
        (new Generator(
          {},
          {
            dropShadows: {
              sm: { value: shadows[0] },
            },
          },
        )).utilities,
      ).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--shadows-drop-sm': shadows[0],
        },
      })
    })
  })

  describe('#tailwindTheme', () => {
    it('should be return tailwind theme', () => {
      expect((new Generator(
        {
          colors: {
            red: { DEFAULT: '#ff0000' },
          },
        },
        {
          colors: {
            brand: {
              DEFAULT: { value: '{colors.red}' },
              subtle: { value: '{colors.red}' },
            },
          },
        },
      )).tailwindTheme).toEqual({
        colors: {
          brand: {
            DEFAULT: 'rgb(var(--colors-brand) / <alpha-value>)',
            subtle: 'rgb(var(--colors-brand-subtle) / <alpha-value>)',
          },
        },
      })

      expect((new Generator(
        {
          colors: {
            red: { DEFAULT: '#ff0000' },
          },
        },
        {
          backgroundColors: {
            brand: {
              DEFAULT: { value: '{colors.red}' },
              subtle: { value: '{colors.red}' },
            },
          },
        },
      )).tailwindTheme).toEqual({
        backgroundColor: {
          brand: {
            DEFAULT: 'rgb(var(--colors-background-brand) / <alpha-value>)',
            subtle: 'rgb(var(--colors-background-brand-subtle) / <alpha-value>)',
          },
        },
      })
    })

    it('should be return tailwind theme for shadows', () => {
      expect((new Generator(
        {},
        {
          boxShadows: {
            sm: { light: shadows[0], dark: shadows[1] },
          },
        },
      )).tailwindTheme).toEqual({
        boxShadow: {
          sm: 'var(--shadows-box-sm)',
        },
      })
    })
  })
})
