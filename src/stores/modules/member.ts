import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()

    // 保存会员信息，登录时候使用
    const setProfile = (val: any) => {
      console.log(val, '设置的什么只啊')
      profile.value = val
    }

    // 清理会员信息，退出时候使用
    const clearProfile = () => {
      profile.value = undefined
    }

    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
    // persist: true,
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
