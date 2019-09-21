<template>
    <div class="hao">
    <h1>hao</h1>
    </div>
</template>
<script>
import { IndexBar, IndexAnchor, Cell } from 'vant'

export default {
    name:"hao",
     components:{
        [IndexBar.name]:IndexBar,
        [ IndexAnchor.name]: IndexAnchor,
        [Cell.name]:Cell
    }
}
</script>
<style lang="less" scoped>
.hao{
    background: rgb(177, 176, 176);
}
</style>