<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-09 22:41:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-16 21:03:41
--> 

<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    proUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    //这里存放数据
    return {
      Scroll: null
    };
  },
  mounted() {
    this.Scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.proUpLoad
    });
    this.Scroll.on("scroll", positon => {
      this.$emit("scroll", positon);
    });
    this.Scroll.on("pullingUp", () => {
      this.$emit("loadup");
    });
    console.log(this.Scroll);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.Scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.Scroll.finishPullUp();
    }
  }
};
</script>
<style scoped>
</style>