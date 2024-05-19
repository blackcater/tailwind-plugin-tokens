import type { ThemeConfig } from 'tailwindcss/types/config'

import * as cs from 'change-case'

import type { CSSRuleObject, SemanticTokens, TokenDataTypes, Tokens, Variant } from '../types'

import { getAlpha, isColor, toRgb } from '../utils/color'
import { GeneratorError } from './error'
import { forInObj, getFromObj, setToObj } from './util'

export interface GeneratorOptions {
  prefix?: string
  defaultTheme?: string
  defaultThemeClassFn?: (theme: string) => string | string[]
}

export class Generator {
  private _tokens: Tokens
  private _semanticTokens: SemanticTokens
  private _options: Required<GeneratorOptions>
  private _variables: Record<string, Record<string, string>>

  constructor(tokens: Tokens = {}, semanticTokens: SemanticTokens = {}, options: GeneratorOptions = {}) {
    this._tokens = tokens
    this._semanticTokens = semanticTokens
    this._options = {
      prefix: options.prefix || '',
      defaultTheme: options.defaultTheme || 'light',
      defaultThemeClassFn: options.defaultThemeClassFn || (theme => [`.${theme}`, `[data-theme='${theme}']`]),
    }
    this._variables = {}

    this._genVariables()
  }

  private _genVariables() {
    const { defaultTheme } = this._options

    forInObj(this._semanticTokens, ([scope, ...keyPath], value) => {
      let theme = keyPath.pop()!
      if (theme === 'value')
        theme = defaultTheme
      const variable = this._keysToVariable([scope!, ...keyPath])
      if (!this._variables[theme])
        this._variables[theme] = {}
      this._variables[theme]![variable] = this._evalValue(value)
    })
  }

  private _keysToVariable([scope, ...keys]: string[]): string {
    const { prefix } = this._options
    if (keys && keys[keys.length - 1] === 'DEFAULT')
      keys.pop()
    const ns = cs.kebabCase(scope!).split('-').reverse().join('-')
    return `--${prefix ? `${prefix}-` : ''}${ns}-${keys.join('-')}`
  }

  private _evalValue(value: string) {
    const reg = /\{([^}]+)\}/g
    if (!reg.test(value))
      return value
    return value.replace(reg, (_, key: string) => {
      key = key.trim()
      const v1 = getFromObj(this._tokens, key)
      const v2 = getFromObj(this._tokens, `${key}.DEFAULT`)
      if (!v1 && !v2)
        throw new GeneratorError(`Reference not found: ${key}`)
      return v2 || v1
    })
  }

  get variables() {
    return this._variables
  }

  get themes() {
    return Object.keys(this._variables)
  }

  get variants(): Variant[] {
    return this.themes.map((theme) => {
      let clsList = this._options.defaultThemeClassFn(theme)
      if (typeof clsList === 'string')
        clsList = [clsList]

      return {
        name: theme,
        definition: clsList.map(cls => `&${cls}`),
      }
    })
  }

  get utilities(): CSSRuleObject {
    const utilities: CSSRuleObject = {}
    const themes = this.themes
    for (const theme of themes) {
      const variables = this._variables[theme] || {}
      let clsList = this._options.defaultThemeClassFn(theme)
      if (typeof clsList === 'string')
        clsList = [clsList]
      let cssSelector = clsList.join(',')
      if (theme === this._options.defaultTheme)
        cssSelector = `:root,${cssSelector}`

      utilities[cssSelector] = {}

      // add color-scheme
      if (theme === 'dark' || theme === 'light') {
        utilities[cssSelector] = {
          'color-scheme': theme,
        }
      }

      // add variables
      for (const [variable, value] of Object.entries(variables)) {
        if (!isColor(value)) { (utilities[cssSelector] as any)[variable] = value }
        else {
          const alpha = getAlpha(value)
          if (alpha < 1)
            (utilities[cssSelector] as any)[`${variable}-opacity`] = alpha.toFixed(2);
          (utilities[cssSelector] as any)[variable] = toRgb(value)
        }
      }
    }

    return utilities
  }

  get tailwindTheme(): Partial<ThemeConfig> {
    const theme: Partial<ThemeConfig> = {}
    const scopeMap: Record<keyof TokenDataTypes, string> = {
      // colors
      colors: 'colors',
      accentColors: 'accentColor',
      backgroundColors: 'backgroundColor',
      borderColors: 'borderColor',
      boxShadowColors: 'boxShadowColor',
      caretColors: 'caretColor',
      divideColors: 'divideColor',
      outlineColors: 'outlineColor',
      placeholderColors: 'placeholderColor',
      ringColors: 'ringColor',
      ringOffsetColors: 'ringOffsetColor',
      textColors: 'textColor',
      textDecorationColors: 'textDecorationColor',
      // shadows
      boxShadows: 'boxShadow',
      dropShadows: 'dropShadow',
    }

    forInObj(this._semanticTokens, ([scope, ...keyPath], value) => {
      const _rawTheme = keyPath.pop()!
      const evalValue = this._evalValue(value)
      const mappedScope = (scopeMap as any)[scope!] || scope!

      if (!isColor(evalValue)) {
        const variable = this._keysToVariable([scope!, ...keyPath])
        setToObj(theme, [mappedScope, ...keyPath].join('.'), `var(${variable})`)
      }
      else {
        const alpha = getAlpha(evalValue)
        const variable = this._keysToVariable([scope!, ...keyPath])
        if (alpha === 1)
          setToObj(theme, [mappedScope, ...keyPath].join('.'), `rgb(var(${variable}) / <alpha-value>)`)
        else
          setToObj(theme, [mappedScope, ...keyPath].join('.'), `rgb(var(${variable}) / var(${variable}-opacity))`)
      }
    })

    return theme
  }
}
