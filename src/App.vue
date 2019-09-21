<template>
  <div id="app">
  <router-view></router-view>
  <nav-bar></nav-bar>
  </div>
</template>
<script>
import Foot from './components/footer/Footer'

export default {
  name:'app',
  components:{
    "nav-bar":Foot
   
  }
}
</script>
<style lang="less" scoped>
#app{
  padding-bottom: 30px;
}

</style>
