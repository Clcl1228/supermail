<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-20 20:58:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-20 21:19:41
--> 
<!--  -->
<template>
<div class=''>
    <nav-bar class='nav-bar'><div slot="news">商品分类</div></nav-bar>
    <h2>type</h2>
</div>
</template>

<script>
import NavBar from 'common/navbar/topbar'
export default {
    components: {
        NavBar
    },
    data() {
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