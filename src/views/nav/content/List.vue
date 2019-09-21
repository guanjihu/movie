<template>
<div class="con">
    <div class="content">
	<ul class="con-ul">
		<router-link :to="{name:'filmId',params:{id:list.filmId}}"  tag='li' v-for="(list,i) in filA" :key='i'>
				<img :src="list.poster" alt="">
					<div class="con-conter">
						<div class="top">
							<span>{{list.name}}</span>
							<span>{{list.filmType}}</span>
							</div>
							<div class="pf" v-if="list.grade">
								<span>观众评分 </span>
								<b>{{list.grade}}</b>
							</div>
							<p>主演:{{list.director}}</p>
							<p>中国大陆 | {{list.runtime}}分钟</p>
						</div>
						<div class="goup">购票</div>
					</router-link>
                </ul>
			</div>
</div>
</template>
<script>
export default {
	name:"con",
	props:{
		filA:{
			type:Array,
			required:true
		}
	}
	
}
</script>
<style lang="less" scoped>
.content {
	padding-left: .4rem;
	margin-bottom: 1.30666667rem;
	overflow: hidden;
	margin-top: 10px;
}

.content li {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ededed;
	position: relative
}

.content li img {
	width: 1.76rem;
	height: 2.45333333rem
}

.content li .con-conter {
	margin-left: .26666667rem
}

.content li .con-conter>.top span:first-child {
	color: #191a1b;
	font-size: .42666667rem;
	height: .58666667rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.content li .con-conter>.top span:last-child {
	font-size: 9px;
	color: #fff;
	background-color: #d2d6dc;
	height: .37333333rem;
	padding: 0 .05333333rem;
	border-radius: .05333333rem
}

.content li .con-conter>.pf span {
	font-size: .34666667rem;
	color: #797d82
}

.content li .con-conter>.pf b {
	color: #ffb232;
	font-size: .37333333rem
}

.content li .con-conter p {
	font-size: .34666667rem;
	color: #797d82;
	width: 5.33333333rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.content li .goup {
    width: 1.33333333rem;
	height: .66666667rem;
	border: 1px solid #ff5f16;
	position: absolute;
	top: 50%;
	right: .53333333rem;
	transform: translateY(-50%);
	font-size: .32rem;
	text-align: center;
	line-height: .66666667rem;
	color: #ff5f16;
}

</style>