<template>
  <view class="cart-container" v-if="cart.length">
    <!-- 这是收货地址组件 -->
    <my-address></my-address>
    <!-- 商品列表的标题区域 -->
    <view class="cart-title">
        <!-- 左侧图标 -->
        <uni-icons type="shop" size="18"></uni-icons>
        <!-- 右侧文本 -->
        <text class="cart-title-text">购物车</text>
    </view>
    <!-- 循环渲染购物车中的商品信息 滑动删除-->
    <uni-swipe-action>
      <block v-for="(goods, index) in cart" :key="index">
        <uni-swipe-action-item :right-options="options" @click="swipeItemClickHandler(goods)">
          <my-goods :goods="goods" :showRadio="true" :showNum="true" @radio-change="radioChangeHandler" @number-change="numberChangeHanlder"></my-goods>
        </uni-swipe-action-item>
      </block>
    </uni-swipe-action>
    
    <!-- 使用自定义的结算组件 -->
    <my-settle></my-settle>
  </view>
  <!-- // 空白购物车的区域 -->
  <view class="empty-cart" v-else>
    <image src="../../static/cart_empty@2x.png" class="empty-img"></image>
    <text class="tip-text">空空如也~</text>
  </view>
</template>

<script>
  import badgeMix from '@/mixins/tabbar-badge.js'
  import { mapState, mapMutations } from 'vuex'
  export default {
    mixins: [ badgeMix ],
    data() {
      return {
         options: [{
          text: '删除', // 显示的文本内容
          style: {
            backgroundColor: '#C00000' // 按钮的背景颜色
          }
        }]
      };
    },
    computed: {
      ...mapState('m_cart', ['cart'])
    },
    methods: {
      ...mapMutations('m_cart', ['updateGoodsState', 'updateGoodsCount', 'removeGoodsById']),
      radioChangeHandler(e) {
        // console.log(e);
        this.updateGoodsState(e)
      },
      
      numberChangeHanlder(e) {
        // console.log(e);
        this.updateGoodsCount(e)
      },
      
      // 滑动删除功能
      swipeItemClickHandler(goods) {
        this.removeGoodsById(goods.goods_id)
      }
    },
  }
</script>

<style lang="scss">
  .cart-container {
    padding-bottom: 50px;
  }
  .cart-title {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom: 1px solid #efefef;
    .cart-title-text {
      font-size: 14px;
      margin-left: 10px;
    }
}
.empty-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  .empty-img {
    width: 90px;
    height: 90px;
  }
  .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }
}
</style>
