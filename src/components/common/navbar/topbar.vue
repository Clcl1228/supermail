<!--  -->
<template>
    <div id='nav-bar'>
        <div class='nav-center'><slot name='news'></slot></div>
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

    display: flex;

    height: 44px;
    line-height: 44px;
    text-align: center;

    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;

    /*border-bottom: 1px solid #eee;*/
    /*box-shadow: 0 1px 1px rgba(100,100,100,.08);*/
  }

  .nav-left {
    width: 60px;
  }

  .nav-center {
    flex: 1;
    margin: 0px auto;
  }

  .nav-right {
    width: 60px;
  }
</style>