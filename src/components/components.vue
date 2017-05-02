<template>
	<div class="components" @click='hideDatePicker'>
		<div class="rightNav">
			<a :href='"#" + nav' v-for='nav in this.NAVS'>{{nav}}</a>
		</div>
		<div class="component clearfix" id="pagination">
			<div class="title">
				分页组件
			</div>
			<pagination :totalPage='this.TOTALPAGE'></pagination>
		</div>
		<div class="component clearfix" id='modal'>
			<div class="title">
				模态框组件
				<div class="btn btn-default" @click='showModal()'>打开模态框</div>
			</div>
			<modal :title='"标题"' :header='""'></modal>
		</div>
		<div class="component clearfix" id='datepicker'>
			<div class="title">
				时间选择器组件
			</div>
			<date-picker :subData='this.subData' :timeName='"start"' :showCalendar='this.DATEPICK'></date-picker>（选择天）
			<date-picker :subData='this.subData' :timeName='"start"' :showCalendar='this.DATEPICK' :pickType='"hour"'></date-picker>（至小时）
		</div>
		<div class="component clearfix" id='imgupload'>
			<div class="title">
				图片上传组件
			</div>
			<img-upload :imgFile='this.subForm' :imgRule='this.imgRule'></img-upload>
		</div>
		<div class="component clearfix" id='slide'>
			<div class="title">
				图片轮播组件
			</div>
			<slide :imgList='this.imgList' :autoplay='true'></slide>
		</div>
	</div>
</template>

<script>
import pagination from './widget/pagination.vue'
import modal from './widget/modal.vue'
import imgUpload from './widget/imgUpload.vue'
import datePicker from './widget/datePicker.vue'
import slide from './widget/slide.vue'
import { mapMutations } from 'vuex'

export default {
	name: 'components',
	data () {
		return {
			NAVS: [
				'pagination',
				'modal',
				'datepicker',
				'imgupload',
				'slide'
			],
			TOTALPAGE: 1001, // 绑定分页
			subForm: { // 图片上传的form 给子组件传值必须以对象的形式 （引用类型） 关于图片
				pic: ''
			},
			subData: {
				start: '' // 绑定获取时间点的那个字段
			},
			DATEPICK: false, // 用来控制在外部隐藏时间选择器
			imgRule: { // 图片上传
				ratio: 1,
				size: 300
			},
			imgList: [ // 轮播组件图片组
				'./static/slide1.jpg',
				'./static/slide2.jpg',
				'./static/slide3.jpg',
				'./static/slide4.jpg'
			]
		}
	},
	watch: {
		'subForm.imgform' (oldval, newval) {
			console.log(oldval, newval)
		},
		'subData.start' (oldval, newval) {
			console.log(newval, oldval)
		}
	},
	mounted () {
	    this.getData('get', '', {a: 1}, (res) => {
	    	console.log(res)
	    })
	    this.getData('get', 'users', {a: 1}, (res) => {
	    	console.log(res.data.result)
	    })
  	},
	components: {
		pagination,
		modal,
		imgUpload,
		datePicker,
		slide
	},
	methods: {
		hideDatePicker () {
			this.$set(this, 'DATEPICK', true)
	    	setTimeout(() => {
	    		this.$set(this, 'DATEPICK', false)
	    	}, 10)
		},
		...mapMutations([
			'showModal'
		])
	}
}
</script>

<style lang='less'>
	.components{
		padding: 40px;
		position: relative;
		.rightNav{
			position: fixed;
			right: 40px;
			top: 40px;
			width: 100px;
			a{
				float: left;
				text-decoration: none;
				border-bottom: 3px solid transparent;
				color: #767676;
				&:hover{
					color: #42b983;
					border-bottom: 3px solid #42b983;
				}
			}
		}
		.component + .component{
			margin-top: 100px;
		}
	}
</style>
