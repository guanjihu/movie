<template>
    <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" >
  <van-swipe-item v-for="(ban,index) in banner" :key='index'>
      <img :src="ban.url" alt="">
  </van-swipe-item>
</van-swipe>
<button class="city" @click='aLinks'>按钮</button>
    </div>
</template>
<script>
import { Swipe, SwipeItem} from 'vant';
import {http} from '../../api/http'
export default {
    name:"banner",
    data() {
        return {
            banner:[]
        }
    },
   components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem 
    },
    created() {
       this.getH();
    },
    methods:{
        getH(){
            http("http://132.232.94.151:3000/api/film/getList").then(res=>{
                console.log(res)
                this.banner=res.data.banners.slice(0,5)
            })
        },
        //按钮跳转
        aLinks(){
          this.$router.push('/my');
        }
    }
}
</script>
<style lang="less" scoped>
.van-swipe{
    height: 200px;
    background: red;
    .van-swipe-item{
        font-size: 50px;
        line-height: 200px;
        color: #fff;
        text-align: center;
        img{
            min-width: 320px;
        }
    }
}
.banner{
    position: relative;
    .city{
        position: absolute;
        top: 0;
        left: 0;
        min-width: 60px;
        height: 30px;
        margin: 5px;
        border-radius: 10px;
        padding: 5px;
        color: #fff;
        background: rgba(0,0,0,.5);
        font-size: 16px;
    }
}
</style>