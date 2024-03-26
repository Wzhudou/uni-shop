<template>
  <view>
    <!-- 选择收货地址的盒子 -->
    <view class="address-choose-box" v-if="JSON.stringify(address) === '{}'">
      <button type="primary" size="mini" class="btnChooseAddress" @click="chooseAddress">请选择收货地址+</button>
    </view>
    <!-- 渲染收货信息的盒子 -->
    <view class="address-info-box" v-else @click="chooseAddress">
      <view class="row1">
        <view class="row1-left">
          <view class="username">收货人： {{ address.userName }}</view>
        </view>
        <view class="row1-right">
          <view class="phone">电话： {{ address.telNumber }}</view>
          <uni-icons type="right" size="16"></uni-icons>
        </view>
      </view>
      <view class="row2">
        <view class="row2-left">收货地址： </view>
        <view class="row2-right">
          {{ addstr }}
        </view>
      </view>
    </view>
    <!-- 底部的边框线 -->
    <image src="/static/cart_border@2x.png" class="address-border"></image>
  </view>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    name:"my-address",
    data() {
      return {
        // address: {} // 当前用户收货地址
      };
    },
    computed: {
      ...mapState('m_user', ['address']),
      ...mapGetters('m_user', ['addstr'])
    },
    methods: {
      ...mapMutations('m_user', ['updateAddress']),
      async chooseAddress() {
        // 返回值是一个数组：
        // 第一项为错误对象， 第二项为成功之后的收货地址
        const [err, succ] = await uni.chooseAddress().catch(err => err) 
        if(succ && succ.errMsg === 'chooseAddress:ok') {
          // this.address = succ
          this.updateAddress(succ)
          // console.log(succ);
        }
        
        // 用户没有授权 - 解决收货地址授权失败的问题
        // err.errMsg === 'chooseAddress:fail authorize no response' -> 解决iPhone手机无法授权的问题
        if(err && (err.errMsg === 'chooseAddress:fail auth deny' || err.errMsg === 'chooseAddress:fail authorize no response')) {
          // 需要重新授权 -> 调用这个方法让用户重新授权
          this.reAuth()
        }
      },
      // 让用户重新授权
      async reAuth() {
        // 3.1 提示用户对地址进行授权
        const [err2, confirmResult] = await uni.showModal({
          content: '检测到您没打开地址权限，是否去设置打开？',
          confirmText: '确认',
          cancelText: '取消'
        })
         // 3.2 如果弹框异常，则直接退出
        if(err2) return
        // 3.3 如果用户点击了 “取消” 按钮，则提示用户 “您取消了地址授权！”
        if(confirmResult.cancel) return uni.$showMsg('您取消了地址授权！')
        // 3.4 如果用户点击了 “确认” 按钮，则调用 uni.openSetting() 方法进入授权页面，让用户重新进行授权
          if (confirmResult.confirm) return uni.openSetting({
            // 3.4.1 授权结束，需要对授权的结果做进一步判断
            success: (settingResult) => {
              // 3.4.2 地址授权的值等于 true，提示用户 “授权成功”
              if (settingResult.authSetting['scope.address']) return uni.$showMsg('授权成功！请选择地址')
              // 3.4.3 地址授权的值等于 false，提示用户 “您取消了地址授权”
              if (!settingResult.authSetting['scope.address']) return uni.$showMsg('您取消了地址授权！')
            }
          })
          
      }
      
    },
  }
</script>

<style lang="scss">
  .address-choose-box {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .address-info-box {
    font-size: 12px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
    .row1 {
      display: flex;
      justify-content: space-between;
      .row1-left {
        .username {}
      }
      .row1-right {
        display: flex;
        justify-content: space-between;
        .phone {}
      }
    }
    .row2 {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .row2-left {
        white-space: nowrap;
      }
      .row2-right {}
    }
  }
  .address-border {
    display: block;
    width: 100%;
    height: 5px;
  }
</style>