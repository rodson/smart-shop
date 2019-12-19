const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const createGroup = require('./apis/createGroup');
const registerUser = require('./apis/registerUser');
const getUserInfo = require('./apis/getUserInfo');

router.post('/createGroup', createGroup);
router.post('/registerUser', registerUser);
router.post('/getUserInfo', getUserInfo);

app.use(router.routes());
app.listen(3000);