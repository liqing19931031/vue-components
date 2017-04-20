import Vue from 'vue'
import Router from 'vue-router'
import Doc from '@/components/Doc'
import component from '@/components/components'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
  	routes: [
    	{
	      	path: '/doc',
	      	name: 'Doc',
	      	component: Doc
    	},
    	{
	    	path: '/component',
	    	name: 'vue-component',
	    	component: component
    	}
  	]
})
