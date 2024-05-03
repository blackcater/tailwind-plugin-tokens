export function getFromObj<R = any, Obj = any>(obj: Obj, key: string): R | undefined {
  if (!obj)
    return
  const keys = Array.isArray(key) ? key : key.split('.')
  const keyVal = keys.reduce((o, i) => o?.[i], obj)
  return keyVal
}

export function setToObj<R = any, Obj = any>(obj: Obj, key: string, value: R) {
  if (!obj)
    return

  const keys = Array.isArray(key) ? key : key.split('.')

  keys.reduce((o, key, idx) => {
    if (idx === keys.length - 1)
      o[key] = value
    else if (!o[key])
      o[key] = {}
    return o[key]
  }, obj)
}

export function forInObj(obj: Record<string, any>, cb: (key: string[], value: any) => void, prefixKey: string[] = []) {
  for (const key in obj) {
    const value = obj[key]

    if (typeof value === 'object')
      forInObj(value, cb, [...prefixKey, key])
    else
      cb([...prefixKey, key], value)
  }
}
