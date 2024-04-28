<template>
  <view class="my">
    <text>我的</text>
    <view>会员信息： {{ memberStore.profile }}</view>

    <button
      size="mini"
      plain
      type="primary" @tap="memberStore.setProfile({
      nickname: '测试一下',
      token: 'tokne--11'
    })">
      保存用户信心
    </button>

    <button
      @click="memberStore.clearProfile()"
      size="mini" plain type="warn"
    >
      清理用户信息
    </button>
    <button
      @click="getData"
      size="mini" plain type="warn"
    >
      测试请求
    </button>
  </view>
</template>

<script lang="ts" setup>
  import { useMemberStore } from '@/stores'
  import { http } from '@/utils/http'
  const memberStore = useMemberStore()

  // 测试请求
  const getData = async () => {
    const res = await http<string[]>({
      method:'GET',
      url:'',
      header: {}
    })
    console.log(res.result, '返回数据')
  }
</script>

<style scoped></style>