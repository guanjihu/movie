<template>
    <div class="foot">
<van-tabbar  route active-color='red'>
  <van-tabbar-item icon="home-o" to='/home'>标签</van-tabbar-item>
  <van-tabbar-item icon="search" to='/about'>标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to='/hao'>标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to='/my'>标签</van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    name:"foot",
    components:{
        [Tabbar.name]:Tabbar,
        [ TabbarItem.name]: TabbarItem 
    }
}
</script>

<style lang="less" scoped>
.foot{
 width: 100%;
}
</style>