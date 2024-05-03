import color from 'color'

export function toRgb(value: string): string {
  const [r, g, b] = color(value).rgb().array()
  return `${r} ${g} ${b}`
}

// alpha value is between 0 and 1
export function getAlpha(value: string | number): number {
  return color(value).alpha()
}

export function isColor(value: string | number): boolean {
  if (typeof value === 'number')
    return false

  try {
    color(value)
    return true
  }
  catch {
    return false
  }
}

export function isDark(value: string | number): boolean {
  return color(value).isDark()
}

export function isLight(value: string | number): boolean {
  return color(value).isLight()
}
