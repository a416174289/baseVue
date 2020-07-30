// 统一管理api接口
const mockUrl = "/apis/user" // mock地址
const busiPrefix = 'api'; // 业务的前缀
export const baseApi = {
    // 用户测试类接口
    user: {
        getUserInfo: mockUrl + "/userInfo.do", // 用户信息测试
    },
};
