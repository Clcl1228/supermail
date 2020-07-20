<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-28 23:06:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-20 23:42:23
--> 
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar-item></tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "content/mainTabbar/MainTabBar";

export default {
  data() {
    return {
      // banners:null,
      // recommends:null
    };
  },
  name: "app",
  components: {
    TabBarItem
  },
  created() {
    // getHomeMultidata().then(res=>{
    //     this.banners=res.data.data.banner.list;
    //     this.recommends=res.data.data.recommend.list;
    //     console.log(res)
    // })
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
