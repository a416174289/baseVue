module.exports = {
    'post|userInfo.do': {
        "state": 1,
        "code": "200",
        "data": [
            {
                "name": "admin",
                "roles": "[1,2,3,4,5]"
            }
        ]
    },
    'post|editComponent.do': emptySuccessData(),
}
function emptySuccessData() {
    return {
        "state": 1,
        "code": "200",
        "data": {}
    }
}