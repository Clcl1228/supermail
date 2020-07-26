<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-26 20:51:04
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-26 21:33:31
--> 
<template>
  <swiper class="swiperdetail">
    <swiper-item :key="index" v-for="(item,index) in topImages" class="iteming">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>