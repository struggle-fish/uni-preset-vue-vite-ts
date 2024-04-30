<!--
此文件为开发者工具生成，生成时间: 2024/4/29下午7:04:49
使用方法：
在 /Users/jingzhaoyang/Downloads/myDownload/uniapp/uni-preset-vue-vite-ts/dist/dev/mp-weixin/pages/index/index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 /Users/jingzhaoyang/Downloads/myDownload/uniapp/uni-preset-vue-vite-ts/dist/dev/mp-weixin/pages/index/index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel data-v-17cc3903 XtxSwiper--data-v-17cc3903">
      <swiper :circular="true" class="data-v-17cc3903 XtxSwiper--data-v-17cc3903" :interval="3000" :current="0" :autoplay="false">
        <swiper-item class="data-v-17cc3903 XtxSwiper--data-v-17cc3903" style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
          <navigator class="navigator XtxSwiper--navigator data-v-17cc3903 XtxSwiper--data-v-17cc3903" hover-class="none">
            <image class="image XtxSwiper--image data-v-17cc3903 XtxSwiper--data-v-17cc3903 sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator data-v-17cc3903 XtxSwiper--data-v-17cc3903">
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903 active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81">
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-97 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-305 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-622 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-914 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-631 sk-text">个护</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-293 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-172 sk-text">数码</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-351 sk-text">运动</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-263 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
        <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
        <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-404 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a">
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-33 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-188 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-344 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-158 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-536 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-675 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-723 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-710 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
</template>
<style lang="scss">
.sk-transparent {
    color: transparent !important;
  }
.sk-text-3-5714-592 {
    background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-412 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
  }
.sk-text-14-2857-97 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-305 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-622 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-914 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-631 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-293 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-172 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-351 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-263 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-404 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-33 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-188 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-344 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-158 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-536 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-675 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-723 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-710 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>