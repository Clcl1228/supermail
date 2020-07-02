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

    <div id='home'>
        <nav-bar class='nav-bar'><div slot="news">购物广场</div></nav-bar>
        <h2>home</h2>
    </div>
</template>

<script>
import NavBar from 'common/navbar/topbar'
export default {
    components: {
        NavBar
    },
    data() {
    //这里存放数据
        return {

        };
    }
}
</script>
<style>
    .nav-bar {
        background-color: var(--color-tint);
        font-weight: 700;
        color: #fff;
    }
</style>