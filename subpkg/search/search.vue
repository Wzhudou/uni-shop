<template>
  <view>
    <view class="search-box">
      <!-- 修改uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue
       中的uni-searchbar样式-->
      <uni-search-bar @input="input" :radius="100" cancelButton="none" placeholder="请输入搜索内容"></uni-search-bar>
    </view>
    
    <!-- 搜索建议列表 -->
    <view class="sugg-list" v-if="searchResults.length">
      <view class="sugg-item" v-for="(item, index) in searchResults" :key="index" @click="gotoDetail(item)">
        <view class="goods-name">{{ item.goods_name }}</view>
        <uni-icons type="arrowright" size="16"></uni-icons>
      </view>
    </view>
    
    <!-- 搜索历史 -->
    <view class="history-box" v-else>
      <!-- 标题区域 -->
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="17" @click="clean"></uni-icons>
      </view>
      <!-- 列表区域 -->
      <view class="history-list">
        <uni-tag :text="item" v-for="(item, index) in histories" :key="index" class="tag-item" @click="goToGoosList(item)"></uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        timer: null, // 延时器 -》用于防抖
        kw: '', // 搜索关键词
        searchResults: [], // 搜索结果列表
        historyList: [], // 搜索历史数组
      };
    },
    onLoad() {
      this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]')
    },
    computed: {
      // 最新的搜索历史放在最前面
      histories() {
        return [...this.historyList].reverse() 
      }
    },
    methods: {
      input(e) {
        // e为用户输入的值
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          // console.log(e); 
          this.kw = e
          this.getSearchList()
        }, 500)
      },
      // 接口获取搜索结果
      async getSearchList() {
        if(!this.kw) {
          this.searchResults = []
          return
        }
        const { data: res } = await uni.$http.get('/api/public/v1/goods/qsearch', {query: this.kw})
        if(res.meta.status !== 200) return uni.$showMsg()
        this.searchResults = res.message
        
        this.saveSearchHistory()
      },
      
      // 跳转商品详情页
      gotoDetail (item) {
        // console.log(item);
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
        })
      },
      
      // 保存搜索历史
      saveSearchHistory() {
        // this.historyList.push(this.kw)
        // 去重
        const set = new Set(this.historyList)
        set.delete(this.kw)
        set.add(this.kw) // 末尾添加
        // set转数组
        this.historyList = Array.from(set)
        // console.log('thhh', this.historyList);
        
        // 对搜索历史数据，进行持久化存储
        uni.setStorageSync('kw', JSON.stringify(this.historyList))
      },
      
      // 清空搜索历史
      clean() {
        this.historyList = []
        uni.setStorageSync('kw', '[]')
      },
      
      // 跳转商品列表页
      goToGoosList(kw) {
        uni.navigateTo({
          url: '/subpkg/goods_list/goods_list?query=' + kw
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  // 吸顶效果
.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}
.sugg-list {
  padding: 0 5px;
  .sugg-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #efefef;
    .goods-name {
      // 单行显示
      white-space: nowrap;
      // 超出隐藏
      overflow: hidden;
      // 超出内容 ...显示
      text-overflow: ellipsis;
      margin-right: 3px;
    }
  }
}

.history-box {
  padding: 0 5px;
  .history-title {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
  }
  .history-list {
    display: flex;
    flex-wrap: wrap;
    .tag-item {
      margin-top: 5px;
      margin-right: 5px;
      ::v-deep .uni-tag {
        background-color: #f8f8f8 !important;
        border-color: #f8f8f8 !important;
        color: #333 !important;
        font-weight: 500 !important;
      }
    }
  }
}
</style>
