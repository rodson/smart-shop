const fs = require('fs');
const iaiClient = require('../iaiClient');
const assert = require('assert');

const groupName = 'group-viptest';
const groupId = 'group-viptest';
const personId = 'vip-person1';
const personName = 'vip-person1';
const person1Img = base64_encode('images/curry.jpg');

describe('腾讯云人脸识别用例', function() {
  before(async () => {
    await iaiClient.CreateGroup({ groupId, groupName });
  });

  after(async () => {
    await iaiClient.DeleteGroup({ groupId });
  });

  it('添加人员，返回FaceId', async () => {
    const response = await iaiClient.CreatePerson({ image: person1Img, personId, personName, groupId });
    assert.ok(response.FaceId !== undefined, `requestId: ${response.RequestId}`);
  });

  it('人脸搜索，返回搜索candidate', async () => {
    const response = await iaiClient.SearchFaces({ groupIds: [groupId], image: person1Img });
    assert.ok(response.Results[0].Candidates.length > 0, `requestId: ${response.RequestId}`);
  });
});

function base64_encode(file) {
  const bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}