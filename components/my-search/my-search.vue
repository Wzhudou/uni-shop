<template>
  <view class="my-search-container" :style="{backgroundColor: bgcolor}" @click="searchBoxHandler">
    <!-- 这是自定义的搜索组件 -->
    <view class="my-search-box" :style="{borderRadius: radius + 'px'}">
      <!-- 使用uni-ui提供的图标组件 -->
      <uni-icons type="search" size="18"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
  export default {
    name:"my-search",
    data() {
      return {
        
      };
    },
    props: {
      // 背景颜色
      bgcolor: {
        type: String,
        default: '#C00000'
      },
      // 圆角尺寸
      radius: {
        type: Number,
        default: 18 // px
      }
    },
    methods: {
      searchBoxHandler() {
        // console.log('!');
        this.$emit('click')
      }
    },
  }
</script>

<style lang="scss">
.my-search-container {
  height: 50px;
  // background-color: #C00000;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .my-search-box {
    height: 36px;
    width: 100%;
    background-color: #FFFFFF;
    // border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    .placeholder {
      font-size: 15px;
      margin-left: 5px;
    }
  }
}
</style>