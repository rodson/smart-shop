const fs = require('fs');
const supertest = require('supertest')
const assert = require('assert');
const iaiClient = require('../iaiClient');
const app = require('../app');

const groupVIP = 'group-vip';
const groupNormal = 'group-normal';
const personVIPImg = base64_encode('images/curry.jpg');
const personNormalImg = base64_encode('images/iverson.jpeg');

const request = supertest(app.listen());

describe('服务api测试用例', () => {
  before(async () => {
    // 创建VIP库和normal库
    await iaiClient.CreateGroup({
      groupId: groupVIP,
      groupName: groupVIP
    });
    await iaiClient.CreateGroup({
      groupId: groupNormal,
      groupName: groupNormal
    });
  });

  after(async () => {
    // 删除VIP库和normal库
    await iaiClient.DeleteGroup({
      groupId: groupVIP
    });
    await iaiClient.DeleteGroup({
      groupId: groupNormal
   });
  });

  it('客户1注册VIP，返回成功', (done) => {
    request
      .post('/registerUser')
      .send({ image: personVIPImg, personName: 'curry' })
      .end((err, res) => {
        assert.ok(res.body.FaceId !== undefined, `requestId: ${res.body.RequestId}`);
        done();
      })
  });

  it('客户1进店，判断客户类型，返回客户1名称，类型VIP', (done) => {
    request
      .post('/getUserInfo')
      .send({ image: personVIPImg })
      .end((err, res) => {
        assert.equal(res.body.UserType, 'VIP', `requestId: ${res.body.RequestId}`);
        assert.equal(res.body.UserName, 'curry', `requestId: ${res.body.RequestId}`);
        done();
      });
  });

  it('新客户2进店，判断客户类型，返回类型为新客户', (done) => {
    request
      .post('/getUserInfo')
      .send({ image: personNormalImg })
      .end((err, res) => {
        assert.equal(res.body.UserType, 'New', `requestId: ${res.body.RequestId}`);
        done();
      });
  });

  it('新客户2再次进店，判断客户类型，返回类型为回头客', (done) => {
    request
      .post('/getUserInfo')
      .send({ image: personNormalImg })
      .end((err, res) => {
        assert.equal(res.body.UserType, 'Normal', `requestId: ${res.body.RequestId}`);
        done();
      });
    });
});

function base64_encode(file) {
  const bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}
