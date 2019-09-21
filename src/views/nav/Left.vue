<template>
    <div class="left">
      <div class="loaging">
         <van-loading size="24px"  v-if='iSloading' color='red'>加载中...</van-loading>
      </div>
      <list-cont v-for='(item,index) in filArr' :key='index' :filA='filArr'></list-cont>
    </div>
</template>
<script>
import List from './content/List'
import {http} from '../../api/http'

export default {
    name:"left",
    data(){
      return {
       filArr:[],
       iSloading:true,
       num:0,
       isBar:true
      }
    },
    components:{
      "list-cont":List
    },
    created(){
      window.addEventListener('scroll',this.addmove)
       this.getDa()
    },
    methods:{
      getDa(){   
    if(this.isBar){
       this.isBar=false
        this.num++
         http("http://132.232.94.151:3000/api/film/getList",this.num).then(res=>{
           if(res.data.films.length==0){
             window.removeEventListener('scroll',this.addmove)
           }
        this.filArr= this.filArr.concat(res.data.films)
        this.iSloading=false 
        this.isBar=true
      }).catch(err=>{
        console.log(err)
      })
    }
      },
      addmove(){
         let scrollTop=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
         let screenH=window.screen.height;
         let pageH=document.documentElement.offsetHeight;
            if(scrollTop + screenH + 20 >= pageH){
               console.log('到了了')
               this.getDa()
            }
      }
      
    },
    destroyed(){
       
    }

}
</script>
<style lang="less" scoped>
.loaging{
  display: flex;
  justify-content: center;
}
</style>