/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-03 23:09:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-05 20:06:19
 */
import axios from './axios.js'

export function getHomeMultidata() {
    return axios({
        url: '/home/multidata'
    })
}

export function getHomePopNewsSell(type, page) {
    return axios({
        url: '/home/data',
        params: {
            type: type,
            page: page
        }
    })
}