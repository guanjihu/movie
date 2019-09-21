<template>
    <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" >
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    name:"banner",
   components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem 
    }
}
</script>
<style lang="less" scoped>
.van-swipe{
    height: 200px;
    background: red;
}
</style>