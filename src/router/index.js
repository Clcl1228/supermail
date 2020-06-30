/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-28 23:06:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-01 00:43:40
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Homes=()=>import('views/home/Home')
const Cars=()=>import('views/byCar/Car')
const Mes=()=>import('views/me/Me')
const Types=()=>import('views/type/Type')
const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Homes
  },
  {
    path:'/type',
    component:Types
  },
  {
    path:'/me',
    component:Mes
  },
  {
    path:'/car',
    component:Cars
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
