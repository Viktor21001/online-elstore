const router = require('express').Router();
const indexRouter = require('./indexRouter');
const regRouter = require('./reg.router');
const loginRouter = require('./login.router');
const deviceInfoRouter = require('./product.router');
const basketRouter = require('./basket.router');
const profileRouter = require('./profile.router');
const newDevice = require('./newDevice.router');
const editDevice = require('./editDevice.router');

module.exports = router
  .use('/', indexRouter)
  .use('/register', regRouter)
  .use('/login', loginRouter)
  .use('/products', deviceInfoRouter)
  .use('/basket', basketRouter)
  .use('/profile', profileRouter)
  .use('/newDevice', newDevice)
  .use('/editDevice', editDevice);
