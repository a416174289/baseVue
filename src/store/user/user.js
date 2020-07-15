import {
    post,
    get,
    put,
    Delete,
    form
} from "@/axios/http.js";
import {
    basicApi
} from "@/api/index.js"
//模块数据
export default {
    namespaced: true,
    state: {},
    actions: {
        // 接口测试 用户信息
        getUserInfo({}, params){
            return get(basicApi.user.getUserInfo, params).then(res => {
                return res
            });
        },
    },
    mutations: {},
};