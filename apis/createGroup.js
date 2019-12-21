const iaiClient = require('../iaiClient');

module.exports = async (ctx) => {
  const { groupId, groupName } = ctx.request.body;
  try {
    const response = await iaiClient.CreateGroup({ 
      groupId,
      groupName
    });
    ctx.body = response;
  } catch (e) {
    ctx.body = e;
  }
}