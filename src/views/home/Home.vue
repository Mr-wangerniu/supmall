<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :title="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"/>
    <better-scroll
      ref="homeScroll"
      :probeType="3"
      @scroll="contentScroll"
      class="home-content"
      :pull-up-load="true"
      @havePulling="loadMore"
    >
        <home-swiper
          :banners="banners"
          @swipeImageLoad="swipeImageLoad"/>
        <home-recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control
          :title="['流行','新款','精选']"
          @tabClick="tabClick"
          ref="tabControl2"
          />
        <goods-list :goods="goodsListInfo" />
    </better-scroll>
    <back-top @click.native="backTopClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BetterScroll from "components/common/betterscroll/BetterScroll";
  import BackTop from "components/content/backtop/BackTop";

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
      FeatureView,
      TabControl,
      GoodsList,
      BetterScroll,
      BackTop
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
        },
        position: { },
        isShow: false,
        tabOffsetTop: 0,
        isTabFixed: false
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
    mounted() {

      // 1 监听item中图片加载完成事件
      this.$bus.$on('itemImageLoad',() => {
        this.$refs.homeScroll.scroll.refresh()
      })
      // 2 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el: 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl
    },
    methods: {
      // 一 事件监听相关代码
      // 1 判断点的哪一个项目
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index

      },
      // 2 回到顶部代码
      backTopClick() {
        // 是否回到顶部
        if(this.$refs.homeScroll.scroll)
          this.$refs.homeScroll.scroll.scrollTo(0,0,500)
      },
      // 3 监听滚动位置(1 回到顶部是否显示 2 是否吸顶)
      contentScroll(position) {
        this.position = position
        // position.y < 1000
        this.isShow = (-position.y) > this.tabOffsetTop
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      // 4 加载更多代码
      loadMore() {
        this.mgetHomeGoods(this.currentItem)
        // console.log('havePulling');
      },
      // 5 图片加载完成后...
      swipeImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        console.log(this.$refs.tabControl.$el.offsetTop);
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
          this.$refs.homeScroll.scroll.finishPullUp()
        })
      },

      // 防抖函数
      debounce(func,delayTime) {
        let timer = null
        return function(...args) {
          if(timer)
            clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          },delayTime)
        }
      }

    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
  /*.tab-control {*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  z-index: 9;*/
  /*}*/
  .home-content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.fixed {*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  top: 44px;*/
  /*  right: 0;*/
  /*}*/
  .tab-control {
    position: relative;
    z-index: 9;
    top: 44px;
  }
</style>
