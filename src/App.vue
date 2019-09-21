<template>
  <div id="app">
  <app-banner></app-banner>
  <app-nav></app-nav>
  <router-view></router-view>
  </div>
</template>
<script>
import Banner from './components/header/Banner'
import Menu from './components/Menu'


export default {
  name:'app',
  components:{
    "app-banner":Banner,
    "app-nav":Menu
  }
}
</script>
<style lang="less" scoped>

</style>
