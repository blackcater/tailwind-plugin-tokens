import type { Config } from 'tailwindcss'

import { tokens } from 'tailwind-plugin-tokens'
import { radix } from 'tailwind-plugin-tokens/palettes'

function autoPalette(light: any, dark: any): Record<string, { light: string, dark: string }> {
  return Object.fromEntries(
    Object.entries(light)
      .map(
        ([key, value]) => [
          key,
          { light: value, dark: dark[key] },
        ],
      ),
  ) as Record<string, { light: string, dark: string }>
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tokens({
      defaultTheme: 'light',
      semanticTokens: {
        colors: {
          gray: autoPalette(radix.colors.gray, radix.colors.grayDark),
          mauve: autoPalette(radix.colors.mauve, radix.colors.mauveDark),
          slate: autoPalette(radix.colors.slate, radix.colors.slateDark),
          sage: autoPalette(radix.colors.sage, radix.colors.sageDark),
          olive: autoPalette(radix.colors.olive, radix.colors.oliveDark),
          sand: autoPalette(radix.colors.sand, radix.colors.sandDark),
          tomato: autoPalette(radix.colors.tomato, radix.colors.tomatoDark),
          red: autoPalette(radix.colors.red, radix.colors.redDark),
          ruby: autoPalette(radix.colors.ruby, radix.colors.rubyDark),
          crimson: autoPalette(radix.colors.crimson, radix.colors.crimsonDark),
          pink: autoPalette(radix.colors.pink, radix.colors.pinkDark),
          plum: autoPalette(radix.colors.plum, radix.colors.plumDark),
          purple: autoPalette(radix.colors.purple, radix.colors.purpleDark),
          violet: autoPalette(radix.colors.violet, radix.colors.violetDark),
          iris: autoPalette(radix.colors.iris, radix.colors.irisDark),
          indigo: autoPalette(radix.colors.indigo, radix.colors.indigoDark),
          blue: autoPalette(radix.colors.blue, radix.colors.blueDark),
          cyan: autoPalette(radix.colors.cyan, radix.colors.cyanDark),
          teal: autoPalette(radix.colors.teal, radix.colors.tealDark),
          jade: autoPalette(radix.colors.jade, radix.colors.jadeDark),
          green: autoPalette(radix.colors.green, radix.colors.greenDark),
          grass: autoPalette(radix.colors.grass, radix.colors.grassDark),
          bronze: autoPalette(radix.colors.bronze, radix.colors.bronzeDark),
          gold: autoPalette(radix.colors.gold, radix.colors.goldDark),
          brown: autoPalette(radix.colors.brown, radix.colors.brownDark),
          orange: autoPalette(radix.colors.orange, radix.colors.orangeDark),
          amber: autoPalette(radix.colors.amber, radix.colors.amberDark),
          yellow: autoPalette(radix.colors.yellow, radix.colors.yellowDark),
          lime: autoPalette(radix.colors.lime, radix.colors.limeDark),
          mint: autoPalette(radix.colors.mint, radix.colors.mintDark),
          sky: autoPalette(radix.colors.sky, radix.colors.skyDark),
          blackA: autoPalette(radix.colors.blackA, radix.colors.blackA),
          whiteA: autoPalette(radix.colors.whiteA, radix.colors.whiteA),
        },
      },
    }),
  ],
}

export default config
