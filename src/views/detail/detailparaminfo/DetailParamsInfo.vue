<template>
  <div class="params-info" v-if="Object.keys(detailParamsInfo).length !== 0">
    <table v-for="(table,index) in detailParamsInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      detailParamsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
