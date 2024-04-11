<template>
  <view class="login-container">
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <!-- open-type="getUserInfo" 固定写法: 授权获取基本信息 -->
    <!-- <button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button> -->
    <button type="primary" class="btn-login" @click="getUserProfile">一键登录</button>
    <text class="tips-text">登录后尽享更多权益</text>
  </view>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    name:"my-login",
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState('m_user', ['redirectInfo']),
    },
    methods: {
      ...mapMutations('m_user', ['updatUserInfo', 'updateToken', 'updateRedirectInfo']),
      // 获取用户基本信息，用户授权之后获取
      // 由于微信授权接口调整wx.getUserInfo() 获取用户授权的方法在开发阶段获取的都是匿名对象
      // 详情见如下链接
      // https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801
      // https://developers.weixin.qq.com/community/develop/article/doc/00062e6c7a8a081949fb8959656813
      // 因此修改成 getUserProfile()
      getUserInfo(e) {
        // 取消授权
        if(e.detail.errMsg === 'getUserInfo:fail auth deny') return uni.$showMsg('您取消了登录授权！')
        // console.log(e.detail.userInfo);
        this.updatUserInfo(e.detail.userInfo)
        
        this.getToken(e.detail)
      },
      async getUserProfile() {
        const [err, res] = await uni.getUserProfile({
          desc: '您的授权信息'
        }).catch(err => err)
        if (err?.errMsg === 'getUserProfile:fail auth deny') return uni.$showMsg('您取消了登录授权！')
        // console.log('12', res);
        this.updatUserInfo(res.userInfo)
        this.getToken(res)
        // uni.getUserProfile({
        //   desc: '你的授权信息',
        //   success: (res) => {
        //     // 将用户信息存到 vuex 中
        //     // console.log(res.userInfo)
        //     this.updatUserInfo(res.userInfo)
        //     // 获取登录成功后的 Token 字符串
        //     this.getToken(res)
        //     // console.log(res.userInfo)
        //   },
        //   fail: (res) => {
        //     // return uni.$showMsg('您取消了登录授权')
        //     console.log('您取消了登录授权')
        //   }
        // })
      },
      // 获取用户token
      async getToken(e) {
        // 调用微信登录接口 获取code
        const [err, res] = await uni.login().catch(err => err)
        // console.log(err, res);
        // err为不为null时，调用login函数失败
        if(err || res.errMsg !== 'login:ok') return uni.$showMsg('登录失败！')
        
        // 准备接口请求参数
        // console.log(e);
        const query = {
          code: res.code,
          encryptedData: e.encryptedData,
          iv: e.iv,
          rawData: e.rawData,
          signature: e.signature
        }
        // console.log(query);
        // 调用接口
        const { data: loginResult } = await uni.$http.post('/api/public/v1/users/wxlogin', query)
        // if(loginResult.meta.status !== 200) return uni.$showMsg('登录失败！')
        // 成功
        uni.$showMsg('登录成功！')
        // 写死token
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo'
        // 保存token
        this.updateToken(token)
        this.navigateBack()
      },
      
      // 登录成功后跳转到原页面
      navigateBack() {
        if(this.redirectInfo && this.redirectInfo.openType === 'switchTab') {
          uni.switchTab({
            url: this.redirectInfo.from,
            success: () => {
              this.updateRedirectInfo(null) // 重置重定向信息
            }
          })
        }
      },
      
    },
  }
</script>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 750rpx;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;
  &::after {
    content: ' ';
    display: block;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 100%;
    transform: translateY(50%);
  }
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #C00000;
  }
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>