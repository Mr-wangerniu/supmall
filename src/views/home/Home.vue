<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list :goods="goodsListInfo" />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import HomeSwiper from "./childcomponents/HomeSwiper";
  import HomeRecommendView from "./childcomponents/HomeRecommendView";
  import FeatureView from "./childcomponents/FeatureView";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      getHomeGoods,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        currentItem: 'pop',
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        }
      }
    },
    computed: {
      goodsListInfo() {
        return this.goods[this.currentItem].list
      }
    },
    created() {
      //  1 请求多个数据
      this.mgetHomeMultidata()

      // 2 请求商品数据
      this.mgetHomeGoods('pop')
      this.mgetHomeGoods('new')
      this.mgetHomeGoods('sell')
    },
    methods: {
      // 1 事件监听相关代码
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentItem = 'pop'
            break
          case 1:
            this.currentItem = 'new'
            break
          case 2:
            this.currentItem = 'sell'
            break
        }
      },

      // 2 网络请求相关代码
      mgetHomeMultidata() {
        getHomeMultidata().then(res =>{
          // console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      mgetHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
