
<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.backtop img {
  width: 50px;
  height: 50px;
}
.backtop {
  position: fixed;
  right: 10px;
  bottom: 80px;
}
</style>