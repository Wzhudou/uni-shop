import { mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters('m_cart', ['total']) // 购物车商品总数
    },
    watch: {
      total() {
        this.setBadge()
      }
    },
    // 页面刚显示出来调用
    onShow() {
      this.setBadge()
    },
    methods: {
      // 设置徽标
      setBadge() {
        uni.setTabBarBadge({
          index: 2, // 索引 - tabar位置索引
          text: this.total + '' // 字符串类型
        })
      }
    },

}
