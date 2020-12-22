<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    font-size: 12px;
    text-align: center;
    width: 100%;

    padding: 15px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    height: 65px;
    width: 65px;
    margin-bottom: 5px;
  }
</style>