// 1、导入
import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from '@/store/cart.js'
import moduleUser from '@/store/user.js'
// 2
Vue.use(Vuex)

// 3
const store = new Vuex.Store({
  modules: {
    'm_cart': moduleCart,
    'm_user': moduleUser
  }
})

export default store