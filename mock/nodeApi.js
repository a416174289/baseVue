const express = require('express')
const app = express()
// var router = require('./routes')
const bodyParser = require('body-parser')
const router = express.Router();
const fs = require('fs');//文件系统
const path = require('path');
const Mock = require('mockjs');//模拟api数据
const dotenv = require('dotenv');//解析env文件包

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//设置允许跨域访问该服务.
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');

//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');

//   next();
// });



//注册所有api
let installMockApi = (dir, uri = '') => {
  fs.readdir(dir, (err, files) => {
    files.forEach(dirOrFileName => {
      let targetDirOrFile = path.join(dir, dirOrFileName)
      let targetUri = uri + '/' + dirOrFileName;

      if (fs.statSync(targetDirOrFile).isDirectory()) {
        installMockApi(targetDirOrFile, targetUri);
      } else if (fs.statSync(targetDirOrFile).isFile()) {
        if (dirOrFileName.indexOf('.js') === -1) {
          return;
        }
        let content = require(targetDirOrFile);
        targetUri = targetUri.substring(0, targetUri.indexOf('.js'))
        for (let [methodAndApiSuffix, mockInfo] of Object.entries(content)) {
          let protocol = methodAndApiSuffix.split('|');
          let method = protocol[0];
          let api = targetUri + '/' + protocol[1];
          router[method](api, function (req, res) {
            res.json(Mock.mock(mockInfo))
          });
          console.log(`api: ${method}|${api}`);
        }
      }
    })
  })
}

installMockApi(__dirname + '/apis');
//使用注册的api
app.use(router);


// 读取env配置文件
let envInfo = dotenv.parse(fs.readFileSync(path.join(__dirname, '../.env')));
let localEnvPath = path.join(__dirname, '../.env.local');

if (fs.existsSync(localEnvPath) && fs.statSync(localEnvPath).isFile()) {
  let localInfo = dotenv.parse(fs.readFileSync(localEnvPath));
  envInfo = Object.assign({}, envInfo, localInfo);
}


// 启动服务
let listenPort = envInfo.VUE_APP_proxy_target_port;
app.listen(listenPort, function () {
  let uri = 'http://localhost:' + listenPort
  console.log('Listening at ' + uri + '\n')
})
