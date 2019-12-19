// 密钥文件
const properties = require('./properties.json');
// 引入腾讯云SDK
const tencentcloud = require('tencentcloud-sdk-nodejs');
// 人脸识别client类，封装了人脸识别接口的调用
const IaiClient = tencentcloud.iai.v20180301.Client;
// 人脸识别Model，封装了各接口的请求结构
const models = tencentcloud.iai.v20180301.Models;
// 身份凭证类，存储secretId和secretKey
const Credential = tencentcloud.common.Credential

// 实例化调用client
let cred = new Credential(properties.secretId, properties.secretKey);
let client = new IaiClient(cred);

/**
 * 创建人员库
 * @param {String} groupId
 * @param {String} groupName
 */
function CreateGroup({ groupId, groupName }) {
  return new Promise((resolve, reject) => {
    const req = new models.CreateGroupRequest();
    req.GroupId = groupId;
    req.GroupName = groupName
    req.FaceModelVersion = '3.0'; // 使用3.0算法版本

    client.CreateGroup(req, (errMsg, response) => {
        if (errMsg) {
            reject(errMsg);
            return;
        }
        resolve(response);
    });
  });
}

function CreatePerson({ image, personId, personName, groupId }) {
  return new Promise((resolve, reject) => {
    const req = new models.CreatePersonRequest();
    req.PersonId = personId;
    req.PersonName = personName;
    req.GroupId = groupId;
    req.Image = image;

    client.CreatePerson(req, (errMsg, response) => {
      if (errMsg) {
        reject(errMsg);
        return;
      }
      resolve(response);
    });
  });
}

function SearchFaces({ groupIds, image }) {
  return new Promise((resolve, reject) => {
    const req = new models.SearchFacesRequest();
    req.GroupIds = groupIds;
    req.Image = image;
    req.MaxFaceNum = 1;  // 只检测输入图的最大脸
    req.MaxPersonNum = 1; // 只返回最相似的Person

    client.SearchFaces(req, (errMsg, response) => {
      if (errMsg) {
        reject(errMsg);
        return;
      }
      resolve(response) 
    }); 
  });
}

function DeleteGroup({ groupId }) {
  return new Promise((resolve, reject) => {
    const req = new models.DeleteGroupRequest();
    req.GroupId = groupId;

    client.DeleteGroup(req, (errMsg, response) => {
      if (errMsg) {
        reject(errMsg);
        return;
      }
      resolve(response) 
    }); 
  });
}

module.exports = {
  CreateGroup,
  CreatePerson,
  SearchFaces,
  DeleteGroup
};
