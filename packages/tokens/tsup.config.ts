import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/palettes/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
})
