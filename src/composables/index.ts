import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

// 组合式函数
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const onScrolltoLower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltoLower,
  }
}
