<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in title"
         class="tabcontrol-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tabcontrol {
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
  }
  .tabcontrol-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tabcontrol-item span {
    padding: 6px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 4px solid var(--color-tint);
  }
</style>
