const iaiClient = require('../iaiClient');
const uuid = require('uuid/v4');

module.exports = async (ctx) => {
  const { image } = ctx.request.body;
  try {
    // 搜索vip库
    const resVIP = await iaiClient.SearchFaces({
      groupIds: ['group-vip'],
      image
    });

    // 客户是VIP
    if (resVIP.Results && resVIP.Results[0].Candidates[0]) {
      ctx.body = {
        RequestId: resVIP.RequestId,
        UserType: 'VIP',
        UserName: resVIP.Results[0].Candidates[0].PersonName
      }
      return;
    }

    // 搜索普通客户库
    const resNormal = await iaiClient.SearchFaces({
      groupIds: ['group-normal'],
      image
    });
    // 客户是回头客
    if (resNormal.Results && resNormal.Results[0].Candidates[0]) {
      ctx.body = {
        RequestId: resNormal.RequestId,
        UserType: 'Normal',
        UserName: resNormal.Results[0].Candidates[0].PersonName
      }
      return;
    }

    // 新客户，添加到普通客户库中
    const personId = uuid();
    const resNewUser = await iaiClient.CreatePerson({
      groupId: 'group-normal',
      personId: personId,
      personName: personId,
      image
    });
    ctx.body = {
      RequestId: resNewUser.RequestId,
      UserType: 'New',
      userName: personId
    };
  } catch (e) {
    console.log(e.message);
    ctx.body = e;
  }
}
