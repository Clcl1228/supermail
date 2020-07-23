<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-20 23:55:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-21 00:11:22
--> 
<template>
  <div id='detail'>
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
export default {
  components: {
    DetailNavBar
  },
  props: {},
  data() {
    return {
      myImgId: null
    };
  },
  created() {
    this.myImgId = this.$route.params.iid;
  }
};
</script>

<style scoped lang='less'>
</style>