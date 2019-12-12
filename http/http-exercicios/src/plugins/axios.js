import Vue from 'vue';
import axios from 'axios';

//Global form to declare, in this case all axios instances will point ti this URL
// axios.defaults.baseURL = 'https://curso-vue-779ca.firebaseio.com/';

//The header bellow is set up for all kind of request, global
//axios.defaults.headers.common['Authorization'] = 'abc123'

//Setting up header for get only, global
//axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({

	install(Vue) {

		// Vue.prototype.$http = axios;

		Vue.prototype.$http = axios.create({

			baseURL: 'https://curso-vue-779ca.firebaseio.com/',
			headers: {

				//For any request
				"Authorization": "abc123"

				//Just for get
				// get: {
				// 	"Authorization": "abc123"
				// }
			}
		});

		Vue.prototype.$http.interceptors.request.use(config => {

			console.log(config.method);
			//Altering request, just example of possibility of changing
			// if (config.method == 'post') {

			// 	config.method = 'put';
			// }
			return config;
		}, error => Promise.reject(error));

		Vue.prototype.$http.interceptors.response.use(res => {

			//Example of changing response data
			// const arr = [];
			// for(let idx in res.data) {

			// 	arr.push({id: idx, ...res.data[idx]});
			// }

			// res.data = arr;
			return res;
		});
	}
});