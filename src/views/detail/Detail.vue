<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-20 23:55:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-26 23:44:15
--> 
<template>
  <div id="detail">
    <detail-nav-bar class="navbar" />
    <detail-swiper :top-images="topImages" class="swipers"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import detailSwiper from "./childComponents/DetailSwiper";
import { getDetail, Shop, Goods } from "network/detail.js";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
  },
  props: {},
  data() {
    return {
      myImgId: null,
      topImages: null,
      shop: null,
      goods: null,
    };
  },
  created() {
    this.myImgId = this.$route.params.iid;
    getDetail(this.myImgId).then((res) => {
      const data = res.data.result;
      console.log(data);
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });
  },
};
</script>

<style >
.navbar {
  margin-top: 15px;
}
.swipers {
  position: relative;
  top: 60px;
}
</style>