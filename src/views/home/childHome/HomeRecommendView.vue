<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-04 00:15:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 22:00:55
--> 
<template>
  <div class="recommends">
    <div :key="index" v-for="(item,index) in recommends" class="recommendsItem">
      <a :href="item.link">
        <img :src="item.image" />
        <div class="news">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
.recommends {
  display: flex;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 8px solid #eee;
}
.recommendsItem {
  flex: 1;
}
.recommendsItem img {
  width: 85%;
  height: 65px;
}
.news {
  margin-top: 10px;
}
</style>