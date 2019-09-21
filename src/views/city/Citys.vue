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
    <van-index-anchor :index="item.key" />
     <van-cell :title="li" v-for='(li,inde) in item.value' :key="inde" @click='add'/>
    </template>
</van-index-bar>
<div class="str" v-show='iStrue'>{{str}}</div>
<div class="hao" v-show='isSearch' @click='full'>
     <van-cell :title="txt"  v-for="(txt,f) in searchValue" :key='f'/>
</div>
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
            objSJ:obj.cities,
            isSearch:false,
            searchValue:[],
            timer:null
        }
    },
    components:{
        [IndexBar.name]:IndexBar,
        [ IndexAnchor.name]: IndexAnchor,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup,
      
    },
    created() {
        this.getJson()
        console.log(this.objSJ)
       
    },
    
    methods:{
        getJson(){
           let dataS=obj.cities,
                newObj={},
                newArr=[];
            
                console.log(this.objSJ)
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
           this.$router.go(-1)
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
        },
        //事件代理
        full(e){
         if(e.target.tagName=='SPAN'){
             this.$router.push('/home')
         }
        },
        add(e){
         localStorage.setItem('key',e.target.innerText)
          this.$router.push('/home')
        }

    },

  
	watch: {
		value(){

			clearTimeout(this.timer)
			this.timer = setTimeout(()=>{
				console.log(this.value)
                var newArr = []
                if(newArr){
                    this.isSearch=true
                }
				if(this.value){
					this.objSJ.forEach(item=>{
						if(item.pinyin.indexOf(this.value)!=-1 || item.name.indexOf(this.value) != -1){
							newArr.push(item.name)
						}
					})				
					// console.log(newArr)
				}
				this.searchValue = newArr
			},500)
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
.hao{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    padding-top: 100px;
    z-index: 99;
    background: #fff;
}
</style>