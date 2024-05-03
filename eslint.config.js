import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

/** @type {import('@antfu/eslint-config').antfu} */
export default antfu(
  // antfu recommended
  {
    formatters: {
      css: true,
      html: true,
    },
    react: true,
    rules: {
      'ts/consistent-type-definitions': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'import/order': 'off', // conflicts with perfectionist,
      'perfectionist/sort-imports': [
        'error',
        {
          'groups': [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          'internal-pattern': ['@/**', '~/**'],
        },
      ],
    },
  },
  // tailwindcss recommended
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
    ],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'tv', 'tm'],
      },
    },
  }),
)
