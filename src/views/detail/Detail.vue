<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  import DetailNavBar from "./detailnavbar/DetailNavBar";
  import DetailSwiper from "./detailswiper/DetailSwiper";
  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        id: null,
        topImages: []
      }
    },
    created() {
      // 1 保存传入的id
      this.id = this.$route.params.id
      // 2 根据id拿到对应的页面数据
      getDetail(this.id).then(res =>{
        // console.log(res.result.itemInfo.topImages);
        this.topImages = res.result.itemInfo.topImages
      })
    }

  }
</script>

<style scoped>
.detail{
  position: relative;
}
</style>
