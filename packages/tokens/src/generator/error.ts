import { TTError } from '../utils'

export interface GeneratorErrorOptions extends ErrorOptions {}

export class GeneratorError extends TTError {
  constructor(message: string, options?: GeneratorErrorOptions) {
    super(message, options)
    this.name = 'GeneratorError'
  }
}
