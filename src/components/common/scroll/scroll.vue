
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
  data() {
    //这里存放数据
    return {
      Scroll: null
    };
  },
  mounted() {
    this.Scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.Scroll.scrollTo(x, y, time);
    }
  }
};
</script>
<style scoped>
</style>