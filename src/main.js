// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' // 异步请求封装
import store from './store/index' // vuex

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.prototype.baseUrl = 'http://localhost:3000/'
Vue.prototype.getData = function (method, url, param, callback) { // 异步请求再封装
	this.$http[method](this.baseUrl + url, param || '')
	.then((data) => {
		callback(data)
	}, () => {
		console.log(1)
	})
}
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
