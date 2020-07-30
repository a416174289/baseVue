let Mock = require('mockjs');

Mock.setup({
    timeout: '200-600'
});

//读取所有mock.js
const files = require.context('./apis', true, /\.js$/);

console.log('mockApi:');

files.keys().forEach(filePath => {
    let uri = filePath.substring(1, filePath.indexOf('.js'))

    for (let [path, mockInfo] of Object.entries(files(filePath))) {
        let protocol = path.split('|');
        let method = protocol[0];
        let api = uri + '/' + protocol[1];

        Mock.mock(new RegExp('^' + api), method, mockInfo);

        console.log(`${method}|${api}`, '->mock模板：', mockInfo);
    }
});
console.log('mockApiEnd.');