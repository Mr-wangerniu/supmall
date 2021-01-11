<template>
  <div class="detail">
    <detail-nav-bar/>
    <better-scroll class="detail-scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-info="detailInfo"></detail-base-info>
      <shop-info :shop-info="shopInfo"></shop-info>
    </better-scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./detailnavbar/DetailNavBar";
  import DetailSwiper from "./detailswiper/DetailSwiper";
  import DetailBaseInfo from "./detailbaseinfo/DetailBaseInfo";
  import BetterScroll from "components/common/betterscroll/BetterScroll";
  import ShopInfo from "./shopinfo/ShopInfo";
  import {getDetail,DetailInfo} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      BetterScroll,
      ShopInfo
    },
    data() {
      return {
        id: null,
        topImages: [],
        detailInfo:{},
        shopInfo: {}
      }
    },
    created() {
      // 1 保存传入的id
      this.id = this.$route.params.id
      // 2 根据id拿到对应的页面数据
      getDetail(this.id).then(res =>{
        // console.log(res.result.itemInfo.topImages);
        // 1 获取数据
        const data = res.result
        console.log(res);
        // 2 取出轮播图图片数据
        this.topImages = data.itemInfo.topImages
        // 3 创建商品的对象
        this.detailInfo = new DetailInfo(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.detailInfo);
        // 4 取出店铺信息
        this.shopInfo = data.shopInfo
      })

    },

  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 1;
  }
  .detail-scroll{
    background-color: #fff;
    height: calc(80% - 47px);
    /*overflow: hidden;*/
  }
</style>
