<template>
	<nav aria-label="Page navigation" class="clearfix">
		 <ul class="pagination pull-left">
		    <li>
		      <a aria-label="Previous" @click='changePage(currentPage - 1)'>
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>
		    <li v-for='(item, index) in pages'>
		    	<a @click='changePage(item)' :class='item === currentPage ? "active" : ""'>
		    	{{item}}
		    	</a>
		    </li>
		    <li>
		      <a aria-label="Next" @click='changePage(currentPage + 1)'>
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		  </ul>
	</nav>
</template>

<script>
	export default {
		props: ['totalPage', 'params', 'getList'], // 总页数 ， 列表请求参数， 请求列表接口
		data () {
			return {
				currentPage: 1,
				pageItems: []
			}
		},
		name: 'pagination',
		computed: {
			pages () {
				let a
				this.pageItems = []
				if (this.totalPage <= 5) {
					for (a = 1; a <= this.totalPage; a++) {
						this.pageItems.push(a)
					}
				} else {
					if (this.currentPage > 3) {
						if (this.currentPage === 4) {
							if (this.totalPage > 6) {
								this.pageItems = [1, 2, 3, 4, 5, 6, '...', this.totalPage]
							} else {
								this.pageItems = [1, 2, 3, 4, 5, 6]
							}
						} else {
							if (this.totalPage > this.currentPage + 3) {
								this.pageItems = [1, '...', this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2, '...', this.totalPage]
							} else {
								if (this.totalPage === this.currentPage + 3) {
									this.pageItems = [1, '...', this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2, this.totalPage]
								} else {
									if (this.totalPage === this.currentPage + 2) {
										this.pageItems = [1, '...', this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.totalPage]
									} else {
										if (this.totalPage === this.currentPage + 1) {
											this.pageItems = [1, '...', this.currentPage - 2, this.currentPage - 1, this.currentPage, this.totalPage]
										} else {
											this.pageItems = [1, '...', this.currentPage - 2, this.currentPage - 1, this.totalPage]
										}
									}
								}
							}
						}
					} else {
						this.pageItems = [1, 2, 3, 4, '...', this.totalPage]
					}
				}
				return this.pageItems
			}
		},
		mounted () {
			console.log(this.$el)
		},
		methods: {
			changePage (page) {
				if (page > 0 && page <= this.totalPage) {
					this.$set(this, 'currentPage', page)
					// this.$set(this.params, 'page', page)
					// this.getList(this.params)
				}
			}
		}
	}
</script>

<style lang='less'>
@import '../../less/variables.less';

ul{
	padding: 0;
	&.pagination{
		li{
			list-style: none;
			float: left;
			display: block;
			padding: 5px;
			text-align: center;
			line-height: 20px;
			a{
				width: 100%;
				height: 100%;
				display: block;
				cursor: pointer;
				padding:0 2px;
				border-radius: 3px;
				border:1px solid transparent;
				user-select: none;
				&.active,
				&:hover{
					color: @brand-info;
					border:1px solid @brand-info;
					background-color: transparent;
				}
			}
		}
	}
}
</style>
