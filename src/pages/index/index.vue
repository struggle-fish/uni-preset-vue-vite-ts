<template>
  <CustomNavbar/>
  <scroll-view class="scroll-view" 
    refresher-enabled
    scroll-y
    :refresher-triggered="isTrigger"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltoLower">

    <PageSkeleton v-if="isLoading"/>
    <template v-else>
      <XtxSwiper :list="bannerList"/>
      <CategoryPanel :list="categoryList"/>
      <HotPanel :list="hotList"/>
      <XtxGuess ref="guessRef"/>
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import XtxSwiper from '@/components/XtxSwiper.vue';
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';
import PageSkeleton from './components/PageSkeleton.vue';
import HotPanel from './components/HotPanel.vue';
import { getHomeBannerAPI, getHomeCatgoryAPI, getHomeHotAPI } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { XtxGuessInstance } from '@/types/components';
import { useGuessList } from '@/composables';


const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const categoryList = ref<CategoryItem[]>([])
const getHomeCatgoryData = async () => {
  try {
    const res = await getHomeCatgoryAPI()
    categoryList.value = res.result
  } catch(error) {
    console.log(error, '错误什么')
    uni.showToast({
      icon: 'none',
      title: '请求错误',
    })
  }
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI() 
  hotList.value = res.result
}
// 组件实例
const { guessRef, onScrolltoLower } = useGuessList()

// 下拉刷新
const isTrigger = ref(false)
const onRefresherrefresh = async () => {
  isTrigger.value = true
  // await getHomeBannerData()
  // await getHomeCatgoryData()
  // await getHomeHotData()
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCatgoryData(), getHomeHotData(), guessRef.value?.getMore()])
  
  isTrigger.value = false
}
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCatgoryData(),
    getHomeHotData()])
  isLoading.value = false
})
</script>

<style lang="scss" >
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view{
  flex: 1;
  height: 100vh;
}
</style>
