<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
        mode="widthFix"
        :src="bannerPicture"
      ></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text class="text "
        v-for="(item, index) in subTypes"
        :class="{active: index == activeIndex}"
        @click="activeIndex = index"
        :key="item.id">{{ item.title }}</text>

    </view>
    <!-- 推荐列表 -->
    <scroll-view 
      scroll-y
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="activeIndex === index"
      @scrolltolower="onScrolltolower"
      class="scroll-view">
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image
            class="thumb"
            :src="goods.picture"
          ></image>
          <view class="name ellipsis">{{goods.name}}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '没有更多数据了' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { getHotRecommendAPI } from '@/services/hot';
import type { SubTypeItem } from '@/types/hot';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

  // 热门推荐页 标题和url
  const hotMap = [
    { type: '1', title: '特惠推荐', url: '/hot/preference' },
    { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
    { type: '3', title: '一站买全', url: '/hot/oneStop' },
    { type: '4', title: '新鲜好物', url: '/hot/new' },
  ]
  // 获取页面参数
  const query = defineProps<{
    type: string
  }>()
  // 动态设置标题
  const currUrlMap = hotMap.find((v) => v.type === query.type)
  uni.setNavigationBarTitle({
    title: currUrlMap!.title,
  })
  const bannerPicture = ref('')
  const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
  const activeIndex = ref(0)
  // 获取热门推荐数据
  const getHotRecommendData = async () => {

    const res = await getHotRecommendAPI(currUrlMap!.url, {
      page: import.meta.env.DEV ? 30 : 1,
      pageSize: 10
    })
    bannerPicture.value = res.result.bannerPicture
    subTypes.value = res.result.subTypes
  }

  const onScrolltolower = async() => {
    // 当前数据
    const currentSubTypes = subTypes.value[activeIndex.value]
    if(currentSubTypes.goodsItems.page < currentSubTypes.goodsItems.pages) {
      // 当前页码累加
      currentSubTypes.goodsItems.page++
    } else {
      // 标记已结束
      currentSubTypes.finish = true
      return uni.showToast({ icon: 'none', title: '没有更多数据了' })
    }
    
    const res = await getHotRecommendAPI(currUrlMap!.url , {
      subType: currentSubTypes.id,
      page: currentSubTypes.goodsItems.page,
      pageSize: currentSubTypes.goodsItems.pageSize
    })
    // 获取新的数据
    const newsubTypes = res.result.subTypes[activeIndex.value]
    currentSubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items)
  }

  onLoad(() => {
    getHotRecommendData()
  })
</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 100%;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  image {
    width: 100%;
  }
}
.scroll-view {
  flex: 1;
  height: 100vh;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 315rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>