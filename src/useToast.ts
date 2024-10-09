// @unocss-include
import type { Options, Type } from './type'
import { isShow, state } from './share'

let timer: NodeJS.Timeout

enum DefaultTypeClass {
  info = 'bg-black/60 color-white',
  success = 'bg-green-100/80 color-green-500 border border-solid border-green-200',
  warning = 'bg-yellow-100/80 color-yellow border border-solid border-yellow-200',
  error = 'bg-red-100/80 color-red border border-solid border-red-200',
}

export function useToast() {
  function push(message: string): void
  function push(options: Options): void
  function push(opt: string | Options): void {
    if (typeof opt === 'string') {
      push({
        type: 'info',
        message: opt,
      })
      return
    }

    const { type, class: _class = '', ...arg } = opt

    state.value = {
      ...arg,
      type,
      class: `${DefaultTypeClass[type]} ${_class}`,
    }
    isShow.value = true

    clearTimeout(timer)
    timer = setTimeout(() => {
      isShow.value = false
      state.value = {
        type: 'info',
        message: '',
        class: '',
      }
    }, 2000)
  }

  return {
    push,
    ...(['info', 'success', 'warning', 'error'] as Type[]).reduce((acc, type) => {
      acc[type] = (message: string) => {
        push({
          type,
          message,
        })
      }
      return acc
    }, {} as Record<Type, (message: string) => void>),
  }
}
