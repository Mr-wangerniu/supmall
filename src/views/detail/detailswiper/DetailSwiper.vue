<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item
        v-for="(item,number) in topImages"
        :key="number"
        class="detail-swiper-item"
      >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
    position: relative;
    top: 47px;
  }
</style>
