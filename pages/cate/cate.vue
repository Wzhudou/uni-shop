<template>
  <view>
    <view class="scroll-view-container">
      <!-- 左侧滑动区域 -->
      <scroll-view scroll-y="true" :style="{height: wh + 'px'}" class="left-scroll-view">
        <block v-for="(item, index) in cateList" :key="index">
          <view class="left-scroll-view-item" :class="{active: index === active}" @click="activeChange(index)">
            {{ item.cat_name }}
          </view>
        </block>
      </scroll-view>
      <!-- 右侧滑动区域 -->
      <scroll-view scroll-y="true" :style="{height: wh + 'px'}" class="right-scroll-view" :scroll-top="scrollTop">
        <view class="cate-lv2" v-for="(item2, index2) in cateLevel2" :key="index2">
          <!-- 二级分类的标题 -->
          <view class="cate-lv2-title">/ {{item2.cat_name}} /</view>
          <!-- 三级分类 -->
          <view class="cate-lv3-list">
            <view class="cate-lv3-item" v-for="(item3, index3) in item2.children" :key="index3" @click="goToGoodList(item3)">
              <!-- 三级分类的内容 -->
              <image :src="item3.cat_icon"></image>
              <text>{{ item3.cat_name }}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        wh: 0, // 当前设备可用 的高度
        cateList: [],
        active: 0, // 激活项
        cateLevel2: [], // 二级分类的列表
        scrollTop: 0 // 滚动条的位置
      };
    },
    onLoad() {
      const sysInfo = uni.getSystemInfoSync()
      // console.log(sysInfo);
      this.wh = sysInfo.windowHeight
      
      this.getCateList()
    },
    methods: {
      // 获取分类列表的数据
      async getCateList() {
        const {data: res } = await uni.$http.get('/api/public/v1/categories')
        if(res.meta.status !== 200) return uni.$showMsg()
        
        this.cateList = res.message
        this.activeChange(this.active)
      },
      
      activeChange(i) {
        this.active = i
        // 获取二级分类数据
        this.cateLevel2 = this.cateList[i].children
        
        // 切换分类时, 修改距离顶部的位置
        this.scrollTop = this.scrollTop === 0 ? 1: 0
      },
      // 跳转商品列表页面
      goToGoodList(item) {
        uni.navigateTo({
          url: '/subpkg/goods_list/goods_list?cid=' + item.cat_id
        })
      }
    },
  }
</script>

<style lang="scss">
.scroll-view-container {
  display: flex;
  .left-scroll-view {
    width: 120px;
    .left-scroll-view-item {
      background-color: #f7f7f7;
      line-height: 60px;
      text-align: center;
      font-size: 12px;
      &.active {
        background-color: #ffffff;
        position: relative;
        &:before {
          content: '';
          display: block;
          background-color: #C00000;
          width: 3px;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
  
  .right-scroll-view {
    background-color: #ffffff;
    .cate-lv2 {
      .cate-lv2-title {
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        padding: 15px 0;
      }
      
      .cate-lv3-list {
        display: flex;
        flex-wrap: wrap;
        .cate-lv3-item {
          width: 33.33%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          margin-bottom: 10px;
          image {
            width: 60px;
            height: 60px;
          }
          text {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
