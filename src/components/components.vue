<template>
	<div class="components" @click='hideDatePicker'>
		<div class="component clearfix">
			<div class="title">
				分页组件
			</div>
			<pagination :totalPage='this.TOTALPAGE'></pagination>
		</div>
		<div class="component clearfix">
			<div class="title">
				模态框组件
				<div class="btn btn-default" @click='showModal()'>打开模态框</div>
			</div>
			<modal :title='"标题"' :header='""'></modal>
		</div>
		<div class="component clearfix">
			<div class="title">
				时间选择器组件
			</div>
			<date-picker :subData='this.subData' :timeName='"start"' :showCalendar='this.DATEPICK'></date-picker>
		</div>
		<div class="component clearfix">
			<div class="title">
				图片上传组件
			</div>
			<img-upload :imgFile='this.subForm' :imgRule='this.imgRule'></img-upload>
		</div>
	</div>
</template>

<script>
import pagination from './widget/pagination.vue'
import modal from './widget/modal.vue'
import imgUpload from './widget/imgUpload.vue'
import datePicker from './widget/datePicker.vue'
import { mapMutations } from 'vuex'

export default {
	name: 'components',
	data () {
		return {
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
			}
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
	    })
	    this.getData('get', 'users', {a: 1}, (res) => {
	    })
  	},
	components: {
		pagination,
		modal,
		imgUpload,
		datePicker
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
		.component + .component{
			margin-top: 100px;
		}
	}
</style>
