<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-28 23:06:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-01 00:45:38
--> 
<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-item></tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from 'content/mainTabbar/MainTabBar'

export default {
  name:'app',
  components:{
    TabBarItem,
    }
}
</script>

<style> 
@import url("assets/css/base.css");
</style>
