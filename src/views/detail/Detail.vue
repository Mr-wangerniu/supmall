<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods-info="detailInfo"></detail-base-info>
  </div>
</template>

<script>
  import DetailNavBar from "./detailnavbar/DetailNavBar";
  import DetailSwiper from "./detailswiper/DetailSwiper";
  import DetailBaseInfo from "./detailbaseinfo/DetailBaseInfo";
  import {getDetail,DetailInfo} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
      return {
        id: null,
        topImages: [],
        detailInfo:{}
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
        console.log(data);
        // 2 取出轮播图图片数据
        this.topImages = data.itemInfo.topImages
        // 3 创建商品的对象
        this.detailInfo = new DetailInfo(data.itemInfo,data.columns,data.shopInfo.services)
        console.log(this.detailInfo);
      })

    },

  }
</script>

<style scoped>
  .detail{
    /*position: relative;*/
  }
</style>
