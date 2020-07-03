import axios from './axios.js'

export function getHomeMultidata(){
    return axios({
        url:'/home/multidata'
    })
}