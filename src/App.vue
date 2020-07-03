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
import {getHomeMultidata} from 'network/home.js'
export default {
  name:'app',
  components:{
    TabBarItem,
    },
  created(){
      getHomeMultidata().then(res=>{
          console.log(res)
      })
  }
}
</script>

<style> 
@import url("assets/css/base.css");
</style>
