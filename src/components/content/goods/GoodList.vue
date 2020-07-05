<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-05 21:06:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 22:17:05
--> 

<template>
  <div class="goods">
    <good-list-item :key="index" v-for="(item,index) in goods" :img="item" />
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  components: { GoodListItem },
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.goods {
  display: flex;
  flex-wrap: wrap; //根据div的大小自动换行
  justify-content: space-around; //每个div宽度均等分
  padding-left: 7px;
}
</style>