const iaiClient = require('../iaiClient');

module.exports = async (ctx) => {
  try {
    const response = await iaiClient.CreatePerson({ 
      groupId: 'aaaa' + Date.now(),
      groupName: 'aaaa' + Date.now()
    });
    console.log(response);
    ctx.body = 'success';
  } catch (e) {
    console.log(response);
    ctx.body = 'error';
  }
}