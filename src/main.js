import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import  "babel-polyfill";
import promise from 'es6-promise';
promise.polyfill();
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
axios.defaults.withCredentials = true;
if (process.env.VUE_APP_inclueMockApi) {
  require('../mock/webpackApi.js');
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
