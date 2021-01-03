<template>
  <swiper>
    <swiper-item v-for="(item,number) in banners" :key="number">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: true
      }
    },
    methods: {
      imageLoad() {
        // 监听图片，加载完成则向父组件发送事件
        if(this.isLoad) {
          this.$emit('swipeImageLoad')
          this.isLoad = !this.isLoad
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
