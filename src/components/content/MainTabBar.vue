<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-21 18:55:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-01 00:46:42
--> 
<!--  -->
<template>
    <tab-bar>
       <tab-bar-item path='/home' activeColor='red'>
         <img src="~assets/img/tabbar/shouye.png" slot="img" alt=''>
         <img src="~assets/img/tabbar/shouyeActive.png" slot="imgActive" alt=''>
         <div slot="barname">首页</div>
       </tab-bar-item>
       <tab-bar-item path='/type' activeColor='red'>
         <img src="~assets/img/tabbar/fenlei.png" slot="img" alt=''>
         <img src="~assets/img/tabbar/fenleiActive.png" slot="imgActive" alt=''>
         <div slot="barname">分类</div>
        </tab-bar-item>
       <tab-bar-item path='/car' activeColor='red'>
         <img src="~assets/img/tabbar/car.png" slot="img" alt=''>
         <img src="~assets/img/tabbar/carActive.png" slot="imgActive" alt=''>
         <div slot="barname">购物车</div>
        </tab-bar-item>
       <tab-bar-item path='/me' activeColor='red'>
         <img src="~assets/img/tabbar/my.png" slot="img" alt=''>
         <img src="~assets/img/tabbar/myActive.png" slot="imgActive" alt=''>
         <div slot="barname">我的</div>
        </tab-bar-item>
     </tab-bar>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TabBar from 'common/tab'
import TabBarItem from 'common/tabbar-item'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    TabBar,
    TabBarItem
},
data() {
//这里存放数据
return {

};
},

}
</script>
<style>

</style>