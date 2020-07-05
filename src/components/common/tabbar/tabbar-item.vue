<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-18 23:18:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 22:00:08
--> 
<!--  -->
<template>
  <div class="tab-bar-item">
    <slot v-if="!isActive" name="img"></slot>
    <slot v-else name="imgActive"></slot>
    <div :style="isAvtiveColor" @click="itemClick">
      <slot name="barname"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    //这里存放数据
    return {
      // isActive:false
      color: ""
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isAvtiveColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 60px;
  margin-top: 10px;
}

img {
  width: 20%;
  height: 20px;
}
</style>
