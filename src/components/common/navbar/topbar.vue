<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-03 23:09:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 21:59:30
--> 
<!--  -->
<template>
  <div id="nav-bar">
    <div class="nav-center">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="news">
        <slot name="news"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titleNews"],
  data() {
    return {};
  }
};
</script>
<style>
#nav-bar {
  /* display: flex; */
  height: 44px;
  line-height: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  /*border-bottom: 1px solid #eee;*/
  /*box-shadow: 0 1px 1px rgba(100,100,100,.08);*/
}
.left {
  width: 60px;
}
.news {
  flex: 1;
}
.right {
  width: 60px;
}
</style>