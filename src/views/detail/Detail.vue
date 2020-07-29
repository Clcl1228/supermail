<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-20 23:55:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-27 23:58:15
--> 
<template>
  <div id="details">
    <detail-nav-bar class="navbars" />
    <scroll class="scrollsss">
      <detail-swiper :top-images="topImages" class="swipersss"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <shop-info :shop="shop"></shop-info>
      <goods-info :detail-info="detailInfo"></goods-info>
      <param-info :paramInfo="goodsPrams"></param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import detailSwiper from "./childComponents/DetailSwiper";
import { getDetail, Shop, Goods, GoodsParam } from "network/detail.js";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import ShopInfo from "./childComponents/DetailShopInfo";
import Scroll from "components/common/scroll/scroll";
import GoodsInfo from "./childComponents/DetailGoodsInfo";
import ParamInfo from "./childComponents/DetailParamInfo";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
    ShopInfo,
    Scroll,
    GoodsInfo,
    ParamInfo,
  },
  props: {},
  data() {
    return {
      myImgId: null,
      topImages: null,
      shop: {},
      goods: {},
      detailInfo: {},
      goodsPrams: {},
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

      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsPrams = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
};
</script>

<style >
.navbars {
  position: relative;
  background-color: #fff;
  padding-top: 15px;
}
.swipersss {
  position: relative;
  /* top: 60px; */
}
#details {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.scrollsss {
  height: 400px;
}
</style>