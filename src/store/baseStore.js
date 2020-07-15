//===========统一管理store.js==========
// 用户信息类
import userInfoMoudle from '@/store/user/user.js'

export const basicStore = {
    state: {
        basicStore: "basicStore"
    },
    mutations: {},
    actions: {
    },
    modules: {
        userInfoMoudle,
    }
};
