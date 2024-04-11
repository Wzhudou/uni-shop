<template>
  <view class="my-settle-container">
    <!-- 结算组件 -->
    <!-- 全选 -->
    <label class="radio" @click="changeAllState">
      <radio color="#C00000" :checked="isFullCheck" /><text>全选</text>
    </label>
    <!-- 合计 -->
    <view class="amount-box">
      合计: <text class="amount">¥{{ checkedGoodsAmount }}</text>
    </view>
    <!-- 结算按钮 -->
    <view class="btn-settle" @click="settlement">
      结算({{ checkedCount }})
    </view>
  </view>
</template>

<script>
  import { mapGetters, mapMutations, mapState } from 'vuex'
  export default {
    name:"my-settle",
    data() {
      return {
        seconds: 3, // 倒计时秒数
        timer: null, // 定时器id
      };
    },
    computed: {
      ...mapGetters('m_cart', ['checkedCount', 'total', 'checkedGoodsAmount']),
      ...mapGetters('m_user', ['addstr']),
      ...mapState('m_user', ['token']),
      ...mapState('m_cart', ['cart']),
      isFullCheck() {
        return this.checkedCount === this.total
      }
    },
    methods: {
      ...mapMutations('m_cart', ['updateAllGoodsState']),
      ...mapMutations('m_user', ['updateRedirectInfo']),
      // 全选
      changeAllState() {
        this.updateAllGoodsState(!this.isFullCheck)
      },
      // 用户点击了结算按钮
      settlement() {
        if(!this.checkedCount) return uni.$showMsg('请选择要结算的商品')
        
        if(!this.addstr) return uni.$showMsg('请选择收货地址')
        // console.log(this.token);
        // 判断用户是否登录，如果没有，则调用delayNavigate()进行倒计时导航跳转
        // if(!this.token) return uni.$showMsg('请先登录')
        if(!this.token) return this.delayNavigate()
        
        this.payOrder()
      },
      // 延时导航到my页面
      delayNavigate() {
        this.seconds = 3
        this.showTips(this.seconds)
        
        this.timer = setInterval(() => {
          this.seconds--
          if(this.seconds <= 0) {
            // 清空计时器
            clearInterval(this.timer)
            // 跳转页面
            uni.switchTab({
              url: '/pages/my/my',
              // 页面跳转成功之后的回调函数
              success: () => {
                this.updateRedirectInfo({
                  openType: 'switchTab', // 跳转方式 - 以那种方式导航回之前的页面
                  from: '/pages/cart/cart' // 从哪个页面跳转 - 之前页面的url
                })
              }
            })
            return
          }
          this.showTips(this.seconds)
        }, 1000)
      },
      // 展示倒计时
      showTips(N) {
        uni.showToast({
          icon: 'none',
          title: '请登录后在结算！' + N + '秒之后自动跳转到登录页',
          mask: true, // 为页面添加透明遮盖， 防止点击穿透
          duration: 1500, // 1.5秒之后自动消失弹窗
        })
      },
      
      // 登录后 - 结算
     // 步骤一：创建订单
     // 步骤二：订单预支付
     // 步骤三：发起微信支付
       // 调用uni.requestPayment()这个API，发起微信支付， 把步骤二得到的“订单预支付对象”作为参数传递给这个API
       // 监听uni.requestPayment()这个API的success，fail，complete回调函数
      // 微信支付
     async payOrder() {
       // 步骤一：创建订单
       // 1.1 组织订单的信息对象
       const orderInfo = {
         // order_price: this.checkedGoodsAmount,
         order_price: 0.01,
         consignee_addr: this.addstr,
         goods: this.cart.filter(item => item.goods_state).map(item => ({
           goods_id: item.goods_id,
           goods_number: item.goods_count,
           goods_price: item.goods_price
         })),
       }
       // 1.2 发起请求创建订单
       const { data: res } = await uni.$http.post('/api/public/v1/my/orders/create', orderInfo)
       if (res.meta.status !== 200) return uni.$showMsg('创建订单失败！')
       // 2.3 得到服务器订单编号
       const orderNumber = res.message.order_number
       // console.log(orderNumber); // HMDD20240410000000069201
       
       // 步骤二：订单预支付
       // 2.1 发起请求获取订单的支付信息
      const { data: res2 } = await uni.$http.post('/api/public/v1/my/orders/req_unifiedorder', { order_number: orderNumber })
       // 2.2 预付订单生成失败
       if(res2.meta.status !== 200) return uni.$showMsg('预付订单生成失败！')
       // 2.3 得到订单支付相关的必要参数
       const payInfo = res2.message.pay
       // console.log(payInfo);
       // 步骤三：发起微信支付
      // 3.1 调用 uni.requestPayment() 发起微信支付
      // const [err, succ] = await uni.requestPayment(payInfo)
      const [err, succ] = await uni.requestPayment(payInfo)
      // console.log(err, succ); 用的 AppID 与实际生成支付参数时用的 AppID 不同，因此报错无权限，会报requestPayment:fail no permission
      // 3.2 未完成支付
      if(err) return uni.$showMsg('订单未支付！')
      // 3.3 完成了支付，进一步查询支付的结果
         const { data: res3 } = await uni.$http.post('/api/public/v1/my/orders/chkOrder', { order_number: orderNumber })
      // 3.4 检测到订单未支付
      if(res3.meta.status !== 200) uni.$showMsg('订单未支付！') 
      // 3.5 检测到订单支付完成
      uni.showToast({
        title: '订单支付完成！',
        icon: 'success'
      })
     },
    },
  }
</script>

<style lang="scss">
.my-settle-container {
  position: fixed;
  z-index: 9;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-left: 5px;
  .radio{
    display: flex;
    align-items: center;
  }
  
  .amount-box {
    .amount{
      color: #C00000;
      font-weight: bold;
    }
  }
  
  .btn-settle {
    height: 50px;
    color: white;
    background-color: #C00000;
    line-height: 50px;
    padding: 0 10px;
    min-width: 100px;
    text-align: center;
  }
}
</style>