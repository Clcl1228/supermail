<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-20 20:58:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-20 21:19:06
--> 
<!--  -->
<template>

    <div class=''>
        <nav-bar titleNews='购物广场'><div slot="news">购物广场</div></nav-bar>
        <h2>home</h2>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'common/navbar/topbar'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar
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