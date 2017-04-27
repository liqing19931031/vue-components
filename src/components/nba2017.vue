<template>
	<div class="nba">
		<div class="west">
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/2.png" alt="">
				(东部第一)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/4.png" alt="">
				(东部第八)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/27.png" alt="">
				(东部第四)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/1.png" alt="">
				(东部第五)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/5.png" alt="">
				(东部第二)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/11.png" alt="">
				(东部第七)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/28.png" alt="">
				(东部第三)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/15.png" alt="">
				(东部第六)
			</div>
		</div>
		<div class="west" style='width: 86.8%;margin: 0 128px;'>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/4.png" alt="">
				(东部第一)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/27.png" alt="">
				(东部第八)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/5.png" alt="">
				(东部第四)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/28.png" alt="">
				(东部第五)
			</div>
		</div>
		<div class="west" style="width: 61%;margin: 0 auto">
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/4.png" alt="">
				(东部第一)
			</div>
			<div class="oneteam">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/5.png" alt="">
				(东部第八)
			</div>
		</div>
		<div class="west">
			<div class="oneteam" style="margin: 0 auto">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/5.png" alt="">
				(东部第一)
			</div>
		</div>
		<div class="west">
			<div class='oneteam' style="margin: 0 auto">
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/9.png" alt="">
				(西部第一)
			</div>
		</div>
		<div class="west" style="width: 61%;margin: 0 auto">
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/9.png" alt="">
				(西部第一)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/24.png" alt="">
				(西部第三)
			</div>
		</div>
		<div class="west" style='width: 86.8%;margin: 0 128px;'>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/9.png" alt="">
				(西部第一)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/26.png" alt="">
				(西部第七)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/24.png" alt="">
				(西部第三)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/10.png" alt="">
				(西部第四)
			</div>
		</div>
		<div class="west">
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/9.png" alt="">
				(西部第一)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/22.png" alt="">
				(西部第八)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/12.png" alt="">
				(西部第二)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/26.png" alt="">
				(西部第七)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/24.png" alt="">
				(西部第三)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/29.png" alt="">
				(西部第六)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/10.png" alt="">
				(西部第四)
			</div>
			<div class='oneteam'>
				<img src="http://mat1.gtimg.com/sports/nba/logo/1602/25.png" alt="">
				(西部第五)
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style lang='less'>
	.nba{
		width: 100%;
		height: 100%;
		padding: 10px;
		box-sizing: border-box;
		font-size: 12px;
	}
	.west{
		display: flex;
		justify-content: space-between;
	}
	.west + .west{
		margin-top: 20px;
	}
	.oneteam{
		margin:0 0;
		display: inline-block;
		width: 100px;
		height: 100px;
		border:1px solid #999;
		text-align: center;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.oneteam + .oneteam{
	}
</style>
