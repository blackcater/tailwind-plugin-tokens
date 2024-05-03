// colorsToPalette.test.ts

import { gray } from '@radix-ui/colors'
import { describe, expect, it } from 'vitest'

import { colorsToPalette } from './radix-colors'

describe('colorsToPalette', () => {
  it('should works', () => {
    expect(colorsToPalette(gray, 'gray', gray.gray9)).toEqual({
      DEFAULT: gray.gray9,
      1: gray.gray1,
      2: gray.gray2,
      3: gray.gray3,
      4: gray.gray4,
      5: gray.gray5,
      6: gray.gray6,
      7: gray.gray7,
      8: gray.gray8,
      9: gray.gray9,
      10: gray.gray10,
      11: gray.gray11,
      12: gray.gray12,
    })
  })
})
