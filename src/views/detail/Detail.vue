<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-20 23:55:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-21 00:11:22
--> 
<template>
  <div>{{myImgId}}222</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      myImgId: null
    };
  },
  created() {
    console.log(123);
    this.myImgId = this.$route.params.iid;
  }
};
</script>

<style scoped lang='less'>
</style>