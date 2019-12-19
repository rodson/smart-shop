const iaiClient = require('../iaiClient');

module.exports = async (ctx) => {
  try {
    const response = await iaiClient.CreateGroup({ 
      groupId: 'groupvip',
      groupName: 'groupvip'
    });
    ctx.body = response;
  } catch (e) {
    console.log('------error in-------');
    ctx.body = e;
  }
}