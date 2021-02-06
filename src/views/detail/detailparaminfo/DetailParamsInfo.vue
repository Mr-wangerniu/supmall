<template>
  <div class="params-info" v-if="Object.keys(detailParamsInfo).length !== 0">
    <table v-for="(table,index) in detailParamsInfo.rule.tables"
           class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in detailParamsInfo.info.set">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="detailParamsInfo.info.images">
      <img :src="detailParamsInfo.info.images[0]" alt="">
    </div>
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
    },
  }
</script>

<style scoped>
  .params-info{
    padding:  20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-info table{
    width: 100%;
    border-collapse: collapse;
  }
  .params-info table tr{
    height: 42px;
  }
  .params-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param-key{
    /*当value的数据量比较大时，会挤到key，给key一个固定高度解决*/
    width: 95px;
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .param-value{
    color: #eb4868
  }

</style>
