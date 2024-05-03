export interface Recursive<T> {
  [key: string]: T | Recursive<T>
}

export interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}

export type CSSRuleObject = RecursiveKeyValuePair<string, null | string | string[]>

export interface TokenBaseDataTypes {
  colors: string
}

export interface TokenDataTypes extends TokenBaseDataTypes {
  accentColors: string
  backgroundColors: string
  borderColors: string
  boxShadowColors: string
  caretColors: string
  divideColors: string
  outlineColors: string
  placeholderColors: string
  ringColors: string
  ringOffsetColors: string
  textColors: string
  textDecorationColor: string
}

export type Tokens = {
  [key in keyof TokenBaseDataTypes]?: Recursive<Token<TokenBaseDataTypes[key]>>
}

export type SemanticTokens = {
  [key in keyof TokenDataTypes]?: Recursive<SemanticToken<TokenDataTypes[key]>>
}

export type Token<Value = any> = {
  DEFAULT?: Value
  [key: string]: Value | undefined
}

export type SemanticToken<Value = any> = {
  value?: Value
  light?: Value
  dark?: Value
  [key: string]: Value | undefined
}

export type Variant = {
  name: string
  definition: string | string[] | (() => string) | (() => string)[]
}

export type Variants = Variant[]

export interface PluginOptions {
  /**
   * The prefix to use for the generated CSS variables
   * @default ""
   */
  prefix?: string

  /**
   * We will generated default theme's CSS variables in `:root` selector
   * @default "light"
   */
  defaultTheme?: string

  /**
   * We will generated theme's CSS variables in specified selector
   * @param theme Theme name
   * @returns class name
   */
  defaultThemeClassFn?: (theme: string) => string | string[]

  /**
   * Define tokens, then you can use in semanticTokens
   */
  tokens?: Tokens

  /**
   * Define semantic tokens
   */
  semanticTokens?: SemanticTokens

  /**
   * Override tailwindcss default theme
   */
  overrideTheme?: boolean
}
