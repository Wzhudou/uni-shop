<template>
  <view class="goods-list">
    <view v-for="(goods, index) in goodsList" :key="index" @click="gotoDetail(goods)">
      <my-goods :goods="goods"></my-goods>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 请求商品列表参数
        queryObj: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        goodsList: [],
        total: 0,
        isLoading: false, // 节流阀 =》 防止接口多次请求
      };
    },
    onLoad(options) {
      this.queryObj.query = options.query || ''
      this.queryObj.cid = options.cid || ''
      this.getGoodsList()
    },
    // 上拉触底
    onReachBottom() {
      // 判断是否还有下一页数据
      if(this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕')
      // 判断有没有在请求中, 是，不要继续请求
      if(this.isLoading) return
      // 页码自增加1
      this.queryObj.pagenum++
      // 获取列表数据
      this.getGoodsList()
    },
    // 下拉刷新 重置参数
    onPullDownRefresh() {
      // 重置关键数据
      this.queryObj.pagenum = 1
      this.total = 0
      this.isLoading = false // 关闭节流阀
      this.goodsList = []
      // 重新发起请求 关闭下拉刷新功能
      this.getGoodsList(() =>uni.stopPullDownRefresh())
    },
    methods: {
      // 获取商品列表
      async getGoodsList(cb) {
        this.isLoading = true // 打开节流阀
        const { data: res } = await uni.$http.get('/api/public/v1/goods/search', this.queryObj)
        this.isLoading = false // 关闭节流阀
        cb && cb()
        if(res.meta.status !== 200) uni.$showMsg()
        this.goodsList = [...this.goodsList, ...res.message.goods]
        this.total = res.message.total
      },
      
      // 跳转商品详情页
      gotoDetail(goods) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + goods.goods_id
        })
      }
    },
  }
</script>

<style lang="scss">
</style>
