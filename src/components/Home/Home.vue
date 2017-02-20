<template>
    <div id="home">
    	<div class="home">
    		<span class="sp1">全球U选</span>
    		<a href="#/search"><img src="../../assets/asd1.png" alt="" /></a>
    	</div>
    	<swiper></swiper>
    	<mains></mains>
    	<like></like>
    	<foot></foot>
    </div>
</template>

<script>
import Swiper from "./Swiper"
import Mains from "./Mains"
import Like from "./Like"
import Foot from "./Foot"
export default {
	components:{Swiper,Mains,Like,Foot}
}
</script>

