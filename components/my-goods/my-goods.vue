<template>
  <view class="goods-item">
      <!-- 左侧的盒子 -->
      <view class="goods-item-left">
        <radio :checked="goods.goods_state" color="#C00000" v-if="showRadio" @click="radioClickHandler"></radio>
        <image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
      </view>
      <!-- 右侧的盒子 -->
      <view class="goods-item-right">
        <view class="goods-name">
          <!-- 商品名称 -->
          {{ goods.goods_name }}
        </view>
        <view class="goods-info-box">
          <!-- 商品价格 -->
          <view class="goods-price">
            ¥{{ goods.goods_price | tofixed }}
          </view>
          <!-- 商品数量 最小1-->
          <uni-number-box :min="1" :value="goods.goods_count" v-if="showNum" @change="numberChangeHanlder"></uni-number-box>
        </view>
      </view>
    </view>
</template>

<script>
  export default {
    name:"my-goods",
    data() {
      return {
        // 没有图片时显示默认图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    props: {
      goods: {
        type: Object,
        default: {} 
      },
      // 是否显示单选按钮
      showRadio: {
        type: Boolean,
        default: false // 默认不展示radio组件
      },
      // 是否展示商品数量
      showNum: {
        type: Boolean,
        default: false // 默认不展示NumberBox组件
      },
    },
    filters: {
      tofixed: function(num) {
        return Number(num).toFixed(2)
      }
    },
    methods: {
      // radio的点击事件处理函数
      radioClickHandler() {
        this.$emit('radio-change', {
          goods_id: this.goods.goods_id,
          goods_state: !this.goods.goods_state
        })
      },
      
      // 监听到了numberBox组件数量变化的事件
      numberChangeHanlder(val) {
        // console.log(val);
        this.$emit('number-change', {
          goods_id: this.goods.goods_id,
          goods_count: +val
        })
      },
    },
  }
</script>

<style lang="scss">
.goods-item {
  width: 750rpx;
  box-sizing: border-box;
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #f0f0f0;
  .goods-item-left {
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goods-pic {
      width: 100px;
      height: 100px;
      display: block;
      
    }
  }
  .goods-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-name {
      font-size: 13px;
    }
    .goods-info-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .goods-price {
        color: #c00000;
        font-size: 16px;
      }
    }
  }
}

</style>