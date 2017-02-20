<template>
   <div id="main8">
		<h1><img src="../../assets/f1 (1).png"/></h1>
		<dl v-for="item in data">
			<dt><img :src="item.goods.image" /></dt>
			<dd>{{item.goods.name}}</dd>
			<dd>￥{{item.goods.marketPrice}}</dd>
		</dl>
	</div>
</template>

<script>
const ERR_ok = 0;
export default {
	data() {
		return {
			data: {}
		}
	},
//  生命周期钩子
	created() {
		this.$http.get('/api/home').then(response => {
		this.data = response.body.data;//  返回object		
  		});
	},
}
</script>