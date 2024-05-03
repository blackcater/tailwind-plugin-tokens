import { describe, expect, it } from 'vitest'

import { Generator } from './Generator'

describe('generator@Generator', () => {
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
    })
  })

  describe('#themes', () => {
    it('should be return themes', () => {
      const gen = new Generator(
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
      )

      expect(gen.themes).toEqual(['light', 'dark', 'custom'])
    })
  })

  describe('#variables', () => {
    it('should be return variables', () => {
      const gen = new Generator(
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
      )

      expect(gen.variables).toEqual({
        light: {
          '--colors-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for DEFAULT', () => {
      const gen = new Generator(
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
      )

      expect(gen.variables).toEqual({
        light: {
          '--colors-brand': '#ff0000',
          '--colors-brand-subtle': '#ff0000',
        },
      })
    })

    it('should be return variables for dark theme', () => {
      const gen = new Generator(
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
      )

      expect(gen.variables).toEqual({
        light: {
          '--colors-brand': '#00ff00',
        },
        dark: {
          '--colors-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for custom prefix', () => {
      const gen = new Generator(
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
      )

      expect(gen.variables).toEqual({
        light: {
          '--foo-colors-brand': '#ff0000',
        },
      })
    })

    it('should be return variables for defaultTheme', () => {
      const gen = new Generator(
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
      )

      expect(gen.variables).toEqual({
        dark: {
          '--colors-brand': '#ff0000',
        },
      })
    })
  })

  describe('#variants', () => {
    it('should be return variants', () => {
      const gen = new Generator(
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
      )

      expect(gen.variants).toEqual([
        {
          name: 'light',
          definition: ['&.light', '&[data-theme=\'light\']'],
        },
      ])
    })
  })

  describe('#utilities', () => {
    it('should be return utilities', () => {
      const gen = new Generator(
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
      )

      expect(gen.utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-brand': '255 0 0',
        },
      })
    })

    it('should be return utilities for dark theme', () => {
      const gen = new Generator(
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
      )

      expect(gen.utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-brand': '0 255 0',
        },
        '.dark,[data-theme=\'dark\']': {
          'color-scheme': 'dark',
          '--colors-brand': '255 0 0',
        },
      })
    })

    it('should be return utilities for alpha color', () => {
      const gen = new Generator(
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
      )

      expect(gen.utilities).toEqual({
        ':root,.light,[data-theme=\'light\']': {
          'color-scheme': 'light',
          '--colors-brand': '255 0 0',
          '--colors-brand-opacity': '0.50',
        },
      })
    })
  })

  describe('#tailwindTheme', () => {
    it('should be return tailwind theme', () => {
      const gen = new Generator(
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
      )

      expect(gen.tailwindTheme).toEqual({
        colors: {
          brand: {
            DEFAULT: 'rgb(var(--colors-brand) / <alpha-value>)',
            subtle: 'rgb(var(--colors-brand-subtle) / <alpha-value>)',
          },
        },
      })
    })
  })
})
