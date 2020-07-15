## 创建人：赖平泉
## 创建时间： 2020-05-18


api地址为，apis目录中   /目录名1/目录名2.../文件名/文件中定义的路由名

eg: demo
文件地址：demo/mock_demo.js
路由地址：demo/mock_demo/具体接口

具体参考 apis/demo

apis 中的 js 文件 使用 module.exports  抛出接口，并且使用mock定义数据
node中没有 export


###########目录结构描述
├── Readme.md                   // 说明
├── nodeApi.js               //node 服务器模拟接口， 调试时，代理到node，可查看 xhr 请求
├── webpackApi.js            //webpack 打包模拟接口，打包时引入该文件，可脱离后端运行demo
├── apis      // api 文件地址
│   ├── demo      // index-service-desk 项目模拟接口 
│   ├── demo1                   // api子目录
│       ├─── api.js                         // api文件

