<template>
    <div id="swiper">
    	<div class="swiper-container">
			<div class="swiper-wrapper">
			    <div class="swiper-slide"><img src="../../assets/0f06d3fd.png.m375.jpg"/></div>
			    <div class="swiper-slide"><img src="../../assets/82852d6a.png.m375.jpg"/></div>
			    <div class="swiper-slide"><img src="../../assets/4de1493c.png.m375.jpg"/></div>
			    <div class="swiper-slide"><img src="../../assets/ed304d34.png.m375.jpg"/></div>
			</div>
			<div class="swiper-pagination xiao"></div>
		</div>
    </div>
</template>

<script>
export default {
	components: {},
	mounted () {
		var swiper = new Swiper('#swiper .swiper-container', {
		    pagination: '.swiper-pagination',//小圆点
		    paginationClickable: true,//实现控制点击小点控制图片切换
		    speed:500,//平滑速度	   
		   	autoplay : 3000,//可选选项  自动轮播auto 
		    autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
		    loop:true,  //循环
		    observer:true,//更新swiper
		    spaceBetween: 30,
        	effect: 'fade'
		});
	}
}
</script>