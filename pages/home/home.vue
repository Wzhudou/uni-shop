<template>
  <view>
    <!-- 搜索组件 : 吸顶效果-->
    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>
    <!-- 轮播图区域 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    
    <!-- 分类导航区域 -->
    <view class="nav-list">
      <view class="nav-item"v-for="(item, index) in navList" :key="index" @click="navClickHandler(item)">
        <image :src="item.image_src"></image>
      </view>
    </view>
    
    <!-- 楼层区域 -->
    <!-- 楼层容器 -->
    <view class="floor-list">
      <!-- 楼层item项 -->
      <view class="floor-item" v-for="(item, index) in floorList" :key="index">
        <!-- 楼层的标题 -->
        <image :src="item.floor_title.image_src" class="floor-title"></image>
        
        <!-- 楼层的图片区域 -->
        <view class="floor-img-box">
          <!-- 左侧大图片 -->
          <navigator class="left-img-box" :url="item.product_list[0].url">
            <image :src="item.product_list[0].image_src" :style="{width: item.product_list[0].image_width + 'rpx'}" mode="widthFix"></image>
          </navigator>
          <!-- 右侧4个小图片的盒子 -->
          <view class="right-img-box">
            <navigator class="right-img-item" v-for="(item2, index2) in item.product_list" :key="index2" v-if="index2 !== 0" :url="item2.url">
              <image :src="item2.image_src" :style="{width: item2.image_width + 'rpx'}" mode="widthFix"></image>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import badgeMix from '@/mixins/tabbar-badge.js'
  export default {
    mixins: [ badgeMix ],
    data() {
      return {
        swiperList: [], // 轮播图数据列表
        navList: [], // 分类导航的数据列表
        floorList: [], // 楼层的数据
      };
    },
    onLoad() {
      // 获取轮播图数据
      this.getSwiperList()
      this.getNavList()
      this.getFloorList()
    },
    methods: {
      async getSwiperList() {
        const { data: res } = await uni.$http.get('/api/public/v1/home/swiperdata')
        // 请求失败
        if(res.meta.status !== 200) {
          return uni.$showMsg()
        }
        this.swiperList = res.message
        uni.$showMsg('数据请求成功!')
      },
      
      // 获取导航列表数据
      async getNavList() {
        const {data: res} = await uni.$http.get('/api/public/v1/home/catitems')
        if(res.meta.status !== 200) {
          return uni.$showMsg()
        }
        this.navList = res.message
      },
      
      navClickHandler(item) {
        // console.log('item', item);
        if(item.name === '分类') {
          uni.switchTab({
            url: '/pages/cate/cate'
          })
        }
      },
      
      // 楼层区域数据
      async getFloorList() {
        const { data: res } = await uni.$http.get('/api/public/v1/home/floordata')
        if(res.meta.status !== 200) {
          return uni.$showMsg()
        }
        // 对数据进行处理
        res.message.forEach(item => {
          item.product_list.forEach(prod => {
            prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
          })
        })
        this.floorList = res.message
      },
      
      gotoSearch() {
        uni.navigateTo({
          url: '/subpkg/search/search'
        })
      }
    },
  }
</script>

<style lang="scss">
  swiper {
    height: 330rpx;
     .swiper-item,
     image {
       width: 100%;
       height: 100%;
     }
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
    
    image {
      width: 128rpx;
      height: 140rpx;
    }
  }
  
  .floor-list {
    .floor-title {
      width: 100%;
      height: 60rpx;
    }
    .floor-img-box {
      display: flex;
      padding-left: 10rpx;
      .right-img-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
    }
  }
  // 吸顶效果
  .search-box {
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>
