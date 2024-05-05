<template>
  <scroll-view scroll-y class="orders">
    <view class="card" v-for="order in orderList" :key="order.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ order.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList[order.orderState].text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text class="icon-delete"
              v-if="order.orderState >= OrderState.DaiPingJia"></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="sku in order.skus"
        :key="sku.id"
        class="goods"
        :url="`/pagesOrder/detail/detail?id=${order.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image
            mode="aspectFit"
            :src="sku.image"
          ></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ sku.name }}</view>
          <view class="type">{{ sku.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ order.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ order.payMoney }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="order.orderState === OrderState.DaiFuKuan">
          <view class="button primary" @click="onOrderPay(order.id)">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/create/create?orderId=${order.id}`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view v-if="order.orderState === OrderState.DaiShouHuo" class="button primary">确认收货</view>
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{ true ? '没有更多数据~' : '正在加载...' }}
    </view>
  </scroll-view>
</template>
<script lang="ts" setup>
import { getMemberOrderListAPI } from '@/services/oreder';
import type { OrderListParams } from '@/types/order';
import { onMounted, ref, watch } from 'vue';
import type { OrderItem } from '../../../types/order';
import { orderStateList, OrderState } from '@/services/constants';
import { getPayMockAPI, getPayWxPayMiniPayAPI } from '@/services/pay';

 // 获取屏幕边界到安全区域距离
  const { safeAreaInsets } = uni.getSystemInfoSync()
  const props = defineProps<{
    orderState: number,
    loaded: boolean
  }>()

  const queryParams: OrderListParams = {
    page:1,
    pageSize: 5,
    orderState: props.orderState
  }

  const orderList = ref<OrderItem[]>([])
  const getMemberOrderListData = async() => {
    const res = await getMemberOrderListAPI(queryParams)
    orderList.value = res.result.items
  }


  const onOrderPay = async(id: string) => {
    if (import.meta.env.DEV) {
      await getPayMockAPI({ orderId: id })
    } else {
      const res = await getPayWxPayMiniPayAPI({orderId: id})
      wx.requestPayment(res.result)
    }
    // // 关闭当前页面在跳转
    uni.showToast({
      title: '支付成功'
    })
    const order = orderList.value.find(v => v.id === id)
    order!.orderState = OrderState.DaiFaHuo
  }

  onMounted(() => {
    if (props.loaded) {
      getMemberOrderListData()
    }
  })

  watch(() => props.loaded, (newVal) => {
  if (newVal) {
    getMemberOrderListData();
  }
});

</script>