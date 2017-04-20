// import { http } from 'vue';

// const baseUrl = 'http://api.ufo.adyun.com/';

// export default {
// 	// 网站导航中心查询
// 	getSitefind({ commit, state }, param) {
// 		http.get(`${baseUrl}supplier/common/sitefind`, { params: param })
// 		.then((res) => {
// 			const data = JSON.parse(res.data).result;
// 			commit('updateSitefind', data);
// 		});
// 	},
// 	// 媒介用途
// 	getMediause({ commit, state }, param) {
// 		http.get(`${baseUrl}supplier/common/meduse`, { param: param || { type: 1 } })
// 		.then((res) => {
// 			const data = JSON.parse(res.data).result;
// 			commit('updateMediause', data);
// 		});
// 	},

// action触发mutations 进而修改store中的数据触发数据渲染
