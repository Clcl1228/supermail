<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-20 20:58:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 22:38:52
--> 
<!--  -->
<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="news">购物广场</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @typeclick="tabclick"></tab-control>
    <good-list :goods="showType"></good-list>
  </div>
</template>

<script>
import NavBar from "common/navbar/topbar";
import TabControl from "content/tabControl/TabControl";
import GoodList from "content/goods/GoodList";

import HomeSwiper from "./childHome/HomeSwiper";
import HomeRecommend from "./childHome/HomeRecommendView";
import FeatureView from "./childHome/FeatureView";

import { getHomeMultidata, getHomePopNewsSell } from "network/home.js";
export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    GoodList
  },
  data() {
    //这里存放数据
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: "pop"
    };
  },
  created() {
    this.getHomeMultidata1();
    this.getHomePopNewsSell1("pop");
    this.getHomePopNewsSell1("new");
    this.getHomePopNewsSell1("sell");
  },
  computed: {
    showType() {
      return this.goods[this.type].list;
    }
  },
  methods: {
    //时间监听
    tabclick(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
    },
    //网络请求
    getHomeMultidata1() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomePopNewsSell1(type) {
      const page = this.goods[type].page + 1;
      getHomePopNewsSell(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
      });
    }
  }
};
</script>
<style>
#home {
  padding-top: 40px;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>