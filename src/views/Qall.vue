<template>
  <div id="container">
			<header id="head" :style="`backgroundImage: url(${dataArr.poster})`">
				<a href="#" @click="bllk()">
					<img :src="dataArr.poster" alt="" >
				</a>

			</header>
			<div id="content">
				<ul>
					<li>
						<div class="left">
							<h3>{{dataArr.name}}</h3><i>{{dataArr.filmType}}</i>
						</div>
						<span class="right">{{dataArr.grade}}分</span>
					</li>
					<li>{{dataArr.director}}</li>
					<li>2019-07-12上映</li>
					<li>{{dataArr.nation}}|{{dataArr.runtime}}分钟</li>
				</ul>
				<p>{{dataArr.synopsis}}</p>
			</div>
			<div class="con2">
				<h3>演职人员</h3>
				<ul>
					<li><img src="#" alt="" v-for="(img,i) in dataArr.actors" :key='i'></li>
		
				</ul>
			</div>
			<div class="con3">
				<h3><span>剧照</span><span>全部(6)</span></h3>
				<ul>
					<li>
						<img src="https://tpc.googlesyndication.com/simgad/14885643883778961256?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmdp0hO7jm-PHUermkgNeFFxhoRqw" alt="">
					</li>
	
				</ul>
			</div>
			<footer id="foot">
				<a href="">选座购票</a>
			</footer>
</div>
</template>
<script>
import {https} from '../api/http'
export default {
    name:'container',
    data() {
        return {
           dataArr:{},
           background:'url(this.dataArr.poster)'
        }
    },
    created() {
        console.log(this)
    let da=this.$route.params.id
    https(da).then(foo=>{
        this.dataArr=foo.data.film
        console.log(foo)
    })
    
	},
	methods:{
		bllk(){
			this.$router.go(-1)
		}
	}
}
</script>
<style lang="less" scoped>
html{
    font-size: 90px;
}
body {
	min-width: 8.53333333rem;
	max-width: 20rem;
	width: 10rem;
	height: 100%;
	margin: 0 auto;
	background: #f4f4f4;
	font: 12px Tahoma, '\5FAE\8F6F\96C5\9ED1', 'Microsoft Yahei', "hiragino sans gb", Helvetica, Arial, "\5b8b\4f53", 'sans-serif'
}

#head {
	height: 5.6rem;
	background-size: 10rem 5.6rem
}

#head img {
	width: .69333333rem;
	height: .69333333rem;
	border-radius: 50%;
	padding: .13333333rem;
	margin: .26666667rem
}

#content {
	height: 4.96rem;
	padding: .53333333rem .32rem;
	background: #fff;
	margin-bottom: .26666667rem
}

#content>ul>li {
	display: flex;
	justify-content: space-between;
	margin-top: .13333333rem;
	font-size: .37333333rem;
	color: #797d82
}

#content>p {
	margin-top: .37333333rem;
	margin-bottom: .32rem;
	font-size: 13px;
	color: #797d82;
	overflow: hidden;
	height: 1.54666667rem
}

#content>ul>li>.left {
	display: flex;
	align-items: center;
	color: #191a1b;
	font-size: .48rem;
	height: .64rem;
	line-height: .64rem;
	margin-right: .18666667rem
}

#content>ul>li:not(:first-child) {
	color: #ab8d91
}

#content>ul>li>.left i {
	width: .37333333rem;
	height: .32rem;
	background: #ccc;
	color: #fff;
	text-align: center;
	line-height: .32rem;
	font-size: .32rem;
	padding: .05333333rem;
	margin-left: .10666667rem
}

#content>ul>li>.right {
	font-size: .48rem;
	font-style: italic;
	color: #ffb232
}

.con2 {
	background: #fff;
	margin-bottom: .26666667rem
}

.con2>h3 {
	height: 1.22666667rem;
	padding-left: .32rem;
	line-height: 1.22666667rem;
	font-size: .42666667rem;
	text-align: left;
	color: #191a1b
}

.con2>ul {
	display: flex;
	justify-content: space-around;
    overflow-x: scroll
   
}
.con2>ul::-webkit-scrollbar {
	display: none
}

.con2>ul>li {
	padding-left: .26666667rem
}

.con2>ul img {
	width: 2.4rem;
	height: 3.2rem
}

.con3 {
	height: 5.06666667rem;
	background: #fff;
	overflow: hidden
}

.con3>h3 {
	padding: 0 .32rem;
	height: 1.01333333rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: .42666667rem;
	text-align: left;
	color: #191a1b
}

.con3>h3>span:last-child {
	font-size: .34666667rem;
	color: #797d82
}

.con3>ul {
	display: flex;
	height: 2.66666667rem;
	align-items: center
}

.con3>ul>li {
	margin-left: .26666667rem
}

.con3>ul>li img {
	width: 3.41333333rem;
	height: 1.86666667rem
}

#foot {
	width: 100%;
	height: 1.33333333rem;
	background: red;
	position: fixed;
	z-index: 99;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center
}

#foot>a {
	color: #fff;
	font-size: .42666667rem
}
</style>