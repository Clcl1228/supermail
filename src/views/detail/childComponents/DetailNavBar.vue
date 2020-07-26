<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-26 20:17:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-26 21:25:07
--> 
<!--  -->
<template>
  <nav-bar>
    <div slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="news" class="title">
      <div
        v-for="(item,index) in titles"
        :key="index"
        class="titleItem"
        :class="{active: index===currectIndex}"
        @click="clickItem(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/topbar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "评论", "参数", "推荐"],
      currectIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    clickItem(index) {
      this.currectIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>
<style>
.title {
  display: flex;
}
.titleItem {
  flex: 1;
}
.active {
  color: red;
}
</style>