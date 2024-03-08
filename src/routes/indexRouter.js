const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const MainPage = require('../views/MainPage.jsx');
const { Device } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const devices = await Device.findAll({ raw: true });
    renderTemplate(MainPage, { devices, login }, res);
  } catch (error) {
    // console.log(error); //! Консолим ошибку
    res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cooks');
    res.redirect('/');
  });
});

module.exports = router;
