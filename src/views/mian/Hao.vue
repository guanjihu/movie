<template>
    <div class="hao">
    <h1>hao</h1>
  <h1>hao</h1>
    <h1>hao</h1>
      <h1>hao</h1>
        <h1>hao</h1>
          <h1>hao</h1>
        <search></search>   
    </div>
</template>
<script>
import { IndexBar, IndexAnchor,Cell } from 'vant'

export default {
    name:"hao",
     components:{
        [IndexBar.name]:IndexBar,
        [ IndexAnchor.name]: IndexAnchor,
        search
    }
}
</script>
<style lang="less" scoped>
.hao{
    background: rgb(177, 176, 176);
}
h1{
    height: 1000px;
    background: red;
}
</style>