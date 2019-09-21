<template>
    <div class="gao">
        <van-nav-bar
   :title="tit"
  left-arrow
  @click-left="onClickLeft"
/>
     <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-index-bar @select='sels'>
 <template v-for="item in Data" >
  
     <van-cell :title="li" v-for='(li,inde) in item.value' :key="inde"/>

    </template>
</van-index-bar>
<div class="str" v-show='iStrue'>{{str}}</div>
    </div>
</template>
<script>
import { IndexBar, IndexAnchor, Cell,CellGroup} from 'vant';
import obj from '../../api/json'
export default {
    name:"gao",
    data() {
        return {
            tit:"当前城市--深圳",
            value:'',
            Data:null,
            indexkj:"gkoag",
            str:"",
            iStrue:false,
            objSJ:null
        }
    },
    components:{
        [IndexBar.name]:IndexBar,
        [ IndexAnchor.name]: IndexAnchor,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup
    },
    created() {
        this.getJson()
    },
    methods:{
        getJson(){
           let dataS=obj.cities,
                newObj={},
                newArr=[];
                this.objSJ=dataS
                 dataS.forEach(ele=>{
                     if(newObj[ele.pinyin[0]]){
                         newObj[ele.pinyin[0]].push(ele.name)
                     }else{
                         newObj[ele.pinyin[0]]=[ele.name]
                     }
                 })
                 console.log(newObj)
                 for(var key in newObj){
                     newArr.push({
                         key:key.toLocaleUpperCase(),
                         value:newObj[key]
                     })
                 }
                 newArr.sort((a,b)=>{
                     return a.key>b.key?1:-1
                 })
            this.Data=newArr
        },
        //点击返回功能
        onClickLeft(){
           
        },
        fanhui(){
         
        },
        //搜索功能
        onSearch(){},
        //点击搜索框右侧取消按钮时触发
        onCancel(){},
        sels(e){
           this.str=e
           this.iStrue=true
           setTimeout(() => {
               this.iStrue=false
           }, 400);
        }

    }
}
</script>
<style lang="less" scoped>
.str{
    position: fixed;
    top:50%;
    left:50%;
    transform: translateX(-50%,-50%);
    width: 50px;
    height: 50px;
    background:rgba(0,0,0,.4);
    font-size: 30px;
    line-height: 50px;
    border-radius: 6px;
    box-shadow: 0 0 5px #333;
    text-align: center;
    color: #fff;
}
</style>