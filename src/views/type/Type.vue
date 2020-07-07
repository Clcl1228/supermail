<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-20 20:58:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-07 23:40:01
--> 
<!--  -->
<template>
  <div class>
    <nav-bar class="nav-bar">
      <div slot="news">商品分类</div>
    </nav-bar>
    <cat-gory></cat-gory>
  </div>
</template>

<script>
import NavBar from "common/navbar/topbar";
import CatGory from "views/category/Catgory";

export default {
  components: {
    NavBar,
    CatGory
  },
  data() {
    return {};
  }
};
</script>
<style>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>