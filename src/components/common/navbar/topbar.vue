<!--  -->
<template>
    <div id='nav-bar'>
        <div class='nav-center'>
        <div class='left'><slot name='left'></slot></div>
        <div class='news'><slot name='news'></slot></div>
        <div class='right'><slot name='right'></slot></div>
        </div>
    </div>
</template>

<script>
export default {
  props:['titleNews'],
  data () {
    return {
        
    };
  }
}

</script>
<style>
    #nav-bar {
    position: relative;
    z-index: 10;
    /* display: flex; */
    height: 44px;
    line-height: 44px;
    text-align: center;
    /*border-bottom: 1px solid #eee;*/
    /*box-shadow: 0 1px 1px rgba(100,100,100,.08);*/
  }
  .left {
    width: 60px;
  }
  .news {
    flex: 1;
  }
  .right {
    width: 60px;
  }
</style>