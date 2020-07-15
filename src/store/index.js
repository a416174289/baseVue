import Vue from 'vue';
import Vuex from 'vuex';
import {basicStore} from '@/store/baseStore'
Vue.use(Vuex)
export default new Vuex.Store(basicStore);