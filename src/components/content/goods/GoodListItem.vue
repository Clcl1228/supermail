<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-05 21:06:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-21 00:02:06
--> 

<template>
  <div class="goods-item" @click="gooditemClick">
    <img :src="img.show.img" alt @load="imageload" />
    <div class="goods-info">
      <p>{{img.title}}</p>
      <span class="price">{{img.price}}</span>
      <span class="collect">{{img.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    img: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageload() {
      //console.log("2222");
      this.$bus.$emit("itemImageload");
    },
    gooditemClick() {
      //console.log(this.$router)
      this.$router.push("/detail/"+this.img.iid);
    },
    
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.goods img {
  width: 95%;
  height: 190px;
}

.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>