
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'
uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'https://api-hmugo-web.itheima.net'
// 请求拦截器
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...'
  })
  
  // 添加token
  // console.log(options);
  // 微信支付，需要身份认证（登录之后才允许调用支付相关的接口）
  // 判断当前请求的是否为有权限的接口
  if(options.url.includes('/my/')) {
    options.header = {
      Authorization: store.state.m_user.token
    }
  }
}

// 响应拦截器
$http.afterRequest = function() {
  uni.hideLoading()
}

// 封装弹窗的方法
uni.$showMsg = function(title = '数据请求失败', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif