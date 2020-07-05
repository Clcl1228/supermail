<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-04 16:22:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 22:27:23
--> 

<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :key="index"
      v-for="(item,index) in titles"
      :class="{active:index===currectIndex}"
      @click="clickIndex(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      currectIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    clickIndex(index) {
      this.currectIndex = index;
      this.$emit("typeclick", index);
    }
  }
};
</script>
<style>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>