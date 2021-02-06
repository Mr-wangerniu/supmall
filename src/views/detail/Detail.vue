<template>
  <div class="detail">
    <detail-nav-bar/>
    <better-scroll class="content"
                   :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-info="detailInfo"></detail-base-info>
      <shop-info :shop-info="shopInfo"></shop-info>
      <detail-goods-info :detail-goods-info="detailGoodsInfo"></detail-goods-info>
      <detail-params-info :detail-params-info="itemParams"/>
      <detail-comment-info :comment-info="commentInfo" />
    </better-scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./detailnavbar/DetailNavBar";
  import DetailSwiper from "./detailswiper/DetailSwiper";
  import DetailBaseInfo from "./detailbaseinfo/DetailBaseInfo";
  import BetterScroll from "components/common/betterscroll/BetterScroll";
  import ShopInfo from "./shopinfo/ShopInfo";
  import DetailGoodsInfo from "./detailgoodsinfo/DetailGoodsInfo";
  import DetailParamsInfo from "./detailparaminfo/DetailParamsInfo";
  import DetailCommentInfo from "./detailCommentInfo/DetailCommentInfo";

  import {getDetail,DetailInfo} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      BetterScroll,
      ShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
    },
    data() {
      return {
        id: null,
        topImages: [],
        detailInfo:{},
        shopInfo: {},
        detailGoodsInfo: {},
        itemParams: {},
        commentInfo: {}
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
        // 5 取出详情信息
        this.detailGoodsInfo = data.detailInfo
        // 6 取出参数信息
        this.itemParams = data.itemParams
        // console.log(this.itemParams);
        // 7 取出评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
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
  .content{
    background-color: #fff;
    /*height: 4900px;*/
    overflow: hidden;
    position: absolute;
    /*overflow: hidden;*/
  }
</style>
