export default {
  namespaced: true,
  
  state: () => ({
    // 购物车的数组，用来存储购物车中每个商品的信息对象
    // 每个商品的信息对象，都包含如下 6 个属性：
    // { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state }
    cart: JSON.parse(uni.getStorageSync('cart') || '[]'),
  }),
  mutations: {
    addToCart(state, goods) {
      const findResult = state.cart.find(item => item.goods_id === goods.goods_id)
      if(!findResult) {
        state.cart.push(goods)
      } else {
        findResult.goods_count++
      }
      this.commit('m_cart/saveToStorage')
      // console.log(findResult, state.cart);
    },
    
    //持久化存储
    saveToStorage(state) {
      uni.setStorageSync('cart', JSON.stringify(state.cart))
    },
    // 更新购物车商品的勾选状态
    updateGoodsState(state, goods) {
      const findResult = state.cart.find(item => item.goods_id === goods.goods_id)
      if(findResult) {
        findResult.goods_state = goods.goods_state
        this.commit('m_cart/saveToStorage')
      }
    },
    // 更新商品的数量
    updateGoodsCount(state, goods) {
      const findResult = state.cart.find(item => item.goods_id === goods.goods_id)
      if(findResult) {
        findResult.goods_count = goods.goods_count
        this.commit('m_cart/saveToStorage')
      }
    },
    
    // 根据id删除商品信息
    removeGoodsById(state, goods_id) {
      state.cart = state.cart.filter(item => item.goods_id !== goods_id)
      this.commit('m_cart/saveToStorage')
    },
    
    // 全选功能 - 更新购物车中所有商品的状态
    updateAllGoodsState(state, newState) {
      state.cart.forEach(item => item.goods_state = newState)
     this.commit('m_cart/saveToStorage')
    }
  },
  getters: {
    // 购物车所有商品的总数量
    total(state) {
      // let c = 0
      // state.cart.forEach(item => c += item.goods_count)
      // return c
      return state.cart.reduce((total, item) => total += item.goods_count, 0)
    },
    // 购物车已勾选商品的总数量
    checkedCount(state) {
      return state.cart.filter(item=>item.goods_state).reduce((total, item) => total += item.goods_count, 0)
    },
    
    // 这只已勾选商品的总价格
    checkedGoodsAmount(state) {
      return state.cart.filter(item => item.goods_state).reduce((total, item) => total += item.goods_count * item.goods_price, 0).toFixed(2)
    }
  }
}