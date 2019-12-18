// 引入腾讯云SDK
const tencentcloud = require('tencentcloud-sdk-nodejs');
// 人脸识别client类，封装了人脸识别接口的调用
const IaiClient = tencentcloud.iai.v20180301.Client;
// 人脸识别Model，封装了各接口的请求结构
const models = tencentcloud.iai.v20180301.Models;
// 身份凭证类，存储secretId和secretKey
const Credential = tencentcloud.common.Credential;

// 用自己的secretId，secretKey替换
const secretId = '';
const secretKey = '';

// 实例化调用client
let cred = new Credential(secretId, secretKey);
let client = new IaiClient(cred);

// 构造DetectFace请求参数
const req = new models.DetectFaceRequest();
req.Url = 'http://img1.gtimg.com/sports/pics/hv1/197/212/2052/133485557.jpg';

// 调用DetectFace接口
client.DetectFace(req, function(errMsg, response) {
    if (errMsg) {
        // 返回错误
        console.log(errMsg);
        return;
    }
    // 返回正常结果
    console.log(response.to_json_string());
});
