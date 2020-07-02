import {axiosRequest} from 'axios.js'

export function getHomeMultidata(){
    return axiosRequest({
        url:'/home/multidata'
    })
}