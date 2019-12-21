const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const createGroup = require('./apis/createGroup');
const registerUser = require('./apis/registerUser');
const getUserInfo = require('./apis/getUserInfo');

const app = new Koa();

app.use(bodyParser());

const router = new Router();
router.post('/createGroup', createGroup);
router.post('/registerUser', registerUser);
router.post('/getUserInfo', getUserInfo);
app.use(router.routes());

app.listen(3000);

module.exports = app;