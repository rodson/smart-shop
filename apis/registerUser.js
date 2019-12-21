const iaiClient = require('../iaiClient');
const uuid = require('uuid/v4');

module.exports = async (ctx) => {
  const { image, personName } = ctx.request.body;
  try {
    const response = await iaiClient.CreatePerson({ 
      groupId: 'group-vip',
      personId: uuid(),
      personName,
      image
    });
    ctx.body = response;
  } catch (e) {
    ctx.body = e;
  }
}