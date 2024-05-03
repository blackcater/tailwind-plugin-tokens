import { describe, expect, it, vi } from 'vitest'

import { forInObj, getFromObj, setToObj } from './util'

describe('generator@util', () => {
  describe('#getFromObj', () => {
    it('should work with object', () => {
      expect(getFromObj({ a: { b: { c: 1 } } }, 'a.b.c')).toBe(1)
      expect(getFromObj({ gray: { 100: '#fafafa', 200: '#f1f1f1' } }, 'gray.100')).toBe('#fafafa')
    })
  })

  describe('#setToObj', () => {
    it('should work with object', () => {
      const obj = {}
      setToObj(obj, 'a.b.c', 1)
      expect(obj).toEqual({ a: { b: { c: 1 } } })
    })
  })

  describe('#forInObj', () => {
    it('should work with object', () => {
      const obj = {
        a: {
          b: {
            c: 1,
          },
        },
        d: '2',
      }
      const cb = vi.fn()
      forInObj(obj, cb)
      expect(cb).toHaveBeenCalledTimes(2)
      expect(cb).toHaveBeenNthCalledWith(1, ['a', 'b', 'c'], 1)
      expect(cb).toHaveBeenNthCalledWith(2, ['d'], '2')
    })
  })
})
