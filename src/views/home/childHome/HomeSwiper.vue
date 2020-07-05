<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-04 00:04:14
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-04 00:08:00
--> 
<!--  -->
<template>
<div class=''>
    <swiper>
            <swiper-item :key='index' v-for='(item,index) in banners'>
                <a :href='item.link'>
                    <img :src='item.image'/>
                </a>
            </swiper-item>
    </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js'
export default {
//import引入的组件需要注入到对象中才能使用
    components: {
        Swiper,
        SwiperItem
    },
    data() {
    //这里存放数据
        return {
            
        };
    },
    props:{
        banners:{
            type:Array,
            default:[]
        }
    }
}
</script>
<style>

</style>