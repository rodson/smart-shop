# smart-shop
基于腾讯云人脸识别的智慧零售服务小demo

## 简介

实现客户身份自动识别

![示意图](http://p.qpic.cn/zc_pic/0/01c51f34705259fdc079839103e2ad4b15771007596651/0)

![架构简介](http://p.qpic.cn/zc_pic/0/3347f39b8e4a0c1dc94f9d9909c618ac15771007418423/0)


## 相关资料
* [人脸识别智慧零售场景从零开发](https://cloud.tencent.com/developer/article/1564814)
* [腾讯云人脸识别文档](https://cloud.tencent.com/document/product/867/32769)
* [腾讯云人脸识别控制台](https://console.cloud.tencent.com/aiface)
* [腾讯云SDK](https://github.com/TencentCloud)

## 腾讯云人脸识别接入流程

### 服务开通

进入[人脸识别控制台](https://console.cloud.tencent.com/aiface)，点击开通服务

![人脸识别控制台](http://p.qpic.cn/zc_pic/0/58763072b5a0bd4ece43b759ee194af915769819569528/0)

### 获取SecretId/SecretKey

进入[API密钥管理](https://console.cloud.tencent.com/cam/capi)，创建SecretId/SecretKey

![API密钥管理](http://p.qpic.cn/zc_pic/0/b735d0ee561dba15804d92abbb0ad53515769819980289/0)

### 接口调用

开通服务并获取了SecretId/SecretKey之后就可以进行接口调用了，在[api explorer](https://console.cloud.tencent.com/api/explorer?Product=iai&Version=2018-03-01&Action=CreateGroup&SignVersion=)上提供了在线调用的能力

![api explorer](http://p.qpic.cn/zc_pic/0/8735e255821d201f11caf1f225716f2f15769820275265/0)

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
