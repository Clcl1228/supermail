<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-20 20:58:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-20 21:19:24
--> 
<!--  -->
<template>
    <div class=''>
        <nav-bar class='nav-bar'><div slot="news">购物车</div></nav-bar>
        <h2>car</h2>
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
