import { ref } from 'vue'
import type { Options } from './type'

export const isShow = ref(false)
export const state = ref<Options>({
  type: 'info',
  message: '',
  class: '',
})
