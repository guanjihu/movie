<template>
    <div class="right">
      <div class="loaging">
         <van-loading size="24px" color='red' v-if='iSloading'>加载中...</van-loading>
      </div>
       <div class="left">
      <list-cont v-for='(item,index) in filArr' :key='index' :filA='filArr'></list-cont>
    </div>
    </div>
</template>
<script>
import List from './content/List'
import {http} from '../../api/http'
export default {
    name:"right",
    data(){
      return {
       filArr:[],
        iSloading:true
      }
    },
    components:{
      "list-cont":List
    },
    created(){
      http("http://132.232.94.151:3000/api/film/getList",2).then(res=>{
        console.log(res)
        this.filArr=res.data.films
          this.iSloading=false
      })
 
    }

}
</script>
<style lang="less" scoped>
.loaging{
  display: flex;
  justify-content: center;
}
</style>