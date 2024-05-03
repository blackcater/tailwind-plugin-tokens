import plugin from 'tailwindcss/plugin'

import type { PluginOptions } from './types'

import { Generator } from './generator'

export function tokens(config: PluginOptions = {}): ReturnType<typeof plugin> {
  const {
    prefix,
    defaultTheme,
    defaultThemeClassFn,
    tokens = {},
    semanticTokens = {},
    overrideTheme = false,
  } = config

  const gen = new Generator(tokens, semanticTokens, { prefix, defaultTheme, defaultThemeClassFn })

  return plugin(({ addUtilities, addVariant }) => {
    addUtilities(gen.utilities)
    for (const variant of gen.variants)
      addVariant(variant.name, variant.definition)
  }, overrideTheme
    ? {
        theme: {
          ...gen.tailwindTheme,
        },
      }
    : {
        theme: {
          extend: {
            ...gen.tailwindTheme,
          },
        },
      })
}
