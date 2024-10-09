export type Type = 'info' | 'success' | 'warning' | 'error'

export interface Options {
  type: Type
  loading?: boolean
  message: string
  class?: string
}
