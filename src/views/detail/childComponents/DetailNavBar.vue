<!--  -->
<template>
  <div>
      <nav-bar>
          <div slot="left" @click='backClick'>
              <img src='~assets/img/common/back.svg' alt="">
          </div>
          <div slot="news" class='title'>
              <div v-for='(item,index) in titles' :key=index class='titleItem' :class="{active: index===currectIndex}" @click='clickItem(index)'>{{item}}</div>
          </div> 
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/topbar'
export default {
  data () {
    return {
        titles:['商品','评论','参数','推荐'],
        currectIndex:0
    };
  },
  components: {
      NavBar
  },
  methods:{
      clickItem(index){
            this.currectIndex=index
      },
      backClick(){
          this.$router.back()
      }
  }
}

</script>
<style>
    .title{
        display: flex;
    }
    .titleItem{
        flex: 1;
    }
    .active{
        color:red
    }
</style>