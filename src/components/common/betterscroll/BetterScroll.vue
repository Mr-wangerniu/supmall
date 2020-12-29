<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "BetterScroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      // this.$nextTick的回调函数中初始化better-scroll。
      // 因为这个时候，wrapper的DOM已经渲染了，
      // 我们可以正确计算它以及它内层content的高度，以确保滚动正常
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      })

      //监听滚动位置
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })

      this.scroll.refresh()

    }
  }
</script>

<style scoped>
/*.wrapper{*/
/*  height: 500px;*/
/*}*/
/*  .content{*/
/*    height: 5900px;*/
/*    overflow: hidden;*/
/*  }*/
</style>
