# smart-shop
基于腾讯云人脸识别的智慧零售服务小demo

## 相关资料
* [人脸识别智慧零售场景从零开发](https://cloud.tencent.com/document/product/867/32769)
* [腾讯云人脸识别文档](https://cloud.tencent.com/document/product/867/32769)
* [腾讯云人脸识别控制台](https://console.cloud.tencent.com/aiface)
* [腾讯云SDK](https://github.com/TencentCloud)

## 腾讯云人脸识别接入流程

### 服务开通

进入[人脸识别控制台](https://console.cloud.tencent.com/aiface)，点击开通服务

![人脸识别控制台](https://ask.qcloudimg.com/draft/2494698/mbq6tdosh7.png)

### 获取SecretId/SecretKey

进入[API密钥管理](https://console.cloud.tencent.com/cam/capi)，创建SecretId/SecretKey

![API密钥管理](https://ask.qcloudimg.com/draft/2494698/sy9dys8dc0.png)

### 接口调用

开通服务并获取了SecretId/SecretKey之后就可以进行接口调用了，在[api explorer](https://console.cloud.tencent.com/api/explorer?Product=iai&Version=2018-03-01&Action=CreateGroup&SignVersion=)上提供了在线调用的能力

![api explorer](https://ask.qcloudimg.com/draft/2494698/m2gem4z84u.png)

## 安装

```
npm install
```

## 启动服务

用云API的密钥替换properties.json中的secretId、secretKey
```
npm start
```

## 执行测试用例

```
npm run test
```
