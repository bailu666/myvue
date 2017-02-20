<template>
  <div id="app" v-on:click="fn1">
  	<router-view></router-view>
		<img src="./assets/spri_03.png" class="btn" v-on:click.stop.prevent="fn" v-if="bol1"/>
		<ul v-else>
			<a href="#/home"><li><img src="./assets/sprites@2x_03.png" alt="" /><p>首页</p></li></a>
			<a href=""><li><img src="./assets/a.png" alt="" /><p>分类</p></li></a>
			<a href="#/cart"><li><img src="./assets/d.png" alt="" /><p>购物车</p></li>
			<a href=""><li><img src="./assets/sprites@2x_11.png" alt="" /><p>用户</p></li>
			<a href="#/search"><li><img src="./assets/b.png" alt="" /><p>搜索</p></li></a>
		</ul>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				bol1: true,
			}
		},
		methods :{
			fn(){
				this.bol1 = !this.bol1
			},
			fn1(){
				this.bol1 = true
			}
		}
	}
</script>

