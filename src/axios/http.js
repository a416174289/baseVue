import axios from 'axios'
import qs from 'qs'
// import store from 'store/index'
// import { Indicator, Toast } from 'mint-ui'
import {
    getCookie
} from "../utils/auth";
import router from "../router/index"
var _this = this;
axios.defaults.timeout = 5000 // 请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8' // post请求头的设置
// axios.defaults.headers.common["token"] = getCookie("token") ? getCookie("token") : ""
// axios respone拦截器
axios.interceptors.response.use(
    response => {
        // debugger
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误 结合自身业务和后台返回的接口状态约定写respone拦截器
        // Indicator.close()
        if (response.status === 200) {
            if (response.data.code == "401") {
                setTimeout(() => {
                    router.push('login')
                }, 2000);
            } else {
                return Promise.resolve(response)
            }
        } else {
            Toast({
                message: response.data.msg,
                position: 'middle',
                duration: 2000
            });
            return Promise.reject(response)
        }

    },
    error => {
        Indicator.close()
        const responseCode = error.response.status
        switch (responseCode) {
            // 401：未登录
            case 401:
                break
                // 404请求不存在
            case 404:
                Toast({
                    message: '网络请求不存在',
                    position: 'middle',
                    duration: 2000
                });
                break
            default:
                Toast({
                    message: error.response.data.message,
                    position: 'middle',
                    duration: 2000
                });
        }

        return Promise.reject(error.response)
    }
)
/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
    // 或者return axios.get();
}
/**
 * form方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function form(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.stringify(params))
            .then(res => {
                resolve(res);
            })
            .catch(err => {o
                reject(err)
            })
    })
    //  或者return axios.post();
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.parse(params))
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
    //  或者return axios.post();
}
/**
 * delete方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function Delete(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .delete(url, {data:qs.stringify(params)})
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
    //  或者return axios.post();
}

/**
 * delete方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function put(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .put(url, qs.stringify(params))
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
    //  或者return axios.post();
}
export {
    get,
    post,
    form,
    Delete,
    put
}