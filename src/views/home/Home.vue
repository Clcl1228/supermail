<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-20 20:58:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-20 23:37:48
--> 
<!--  -->
<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="news">购物广场</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @typeclick="tabclick"
      ref="tabControl1"
      v-show="istabfix"
    ></tab-control>
    <scroll
      :probeType="3"
      class="content"
      ref="scroll"
      @scroll="scrollClick"
      :pro-up-load="true"
      @loadup="loadingUp"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperLoad" />
      <home-recommend :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @typeclick="tabclick"
        ref="tabControl2"
      ></tab-control>
      <good-list :goods="showType"></good-list>
    </scroll>
    <back-top @click.native="GoBackTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "common/navbar/topbar";
import TabControl from "content/tabControl/TabControl";
import GoodList from "content/goods/GoodList";
import Scroll from "common/scroll/scroll";
import BackTop from "content/backTop/backTop";

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
    GoodList,
    Scroll,
    BackTop
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
      type: "pop",
      isShowBackTop: false,
      taboffsetTop: "",
      istabfix: false
    };
  },
  mounted() {
    // this.$bus.$on("itemImageload", () => {
    //   debounce(this.$refs.scroll.Scroll.refresh, 500);
    // });
    //this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
  },
  created() {
    this.getHomeMultidata1();
    this.getHomePopNewsSell1("pop");
    this.getHomePopNewsSell1("new");
    this.getHomePopNewsSell1("sell");
    // this.$bus.$on("itemImageload", () => {
    //   this.$refs.scroll.Scroll.refresh();
    // });
  },
  computed: {
    showType() {
      return this.goods[this.type].list;
    }
  },
  methods: {
    swiperLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
      //console.log(this.$refs.tabControl.$el.offsetTop);
    },
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
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
      this.$refs.tabControl2.currectIndex = index;
      this.$refs.tabControl1.currectIndex = index;
    },
    loadingUp() {
      this.getHomePopNewsSell1(this.type);

      this.$refs.scroll.Scroll.refresh();
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
        this.goods[type].page += 1;
        this.$refs.scroll.Scroll.finishPullUp();
      });
    },
    GoBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scrollClick(position) {
      if (-position.y > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }

      this.istabfix = -position.y > this.taboffsetTop;
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 40px;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: fixed;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 70px;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>