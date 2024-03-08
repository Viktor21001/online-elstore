const express = require('express');

const router = express.Router();
const { User, Device, DeviceInfo } = require('../../db/models');
const newDeviced = require('../views/NewDevice.jsx');
const renderTemplate = require('../utils/renderTemplate.js');

router.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const posts = await Device.findAll({ raw: true });
    renderTemplate(newDeviced, { login, posts }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/new', async (req, res) => {
  const { name, price, rating, img, brand, type, title, description } =
    req.body;
  const { userId } = req.session;

  try {
    // Проверим является ли пользователь администратором
    const user = await User.findByPk(userId);
    if (!user.isAdmin()) {
      return res.status(403).send('Доступ запрещен');
    }

    if (name.length === 0 || description.length === 0) {
      return res.sendStatus(404);
    }
    const newDevice = await Device.create({
      name,
      price,
      rating,
      img,
      brand,
      type,
    });

    await DeviceInfo.create({
      title,
      description,
      deviceId: newDevice.id, // Связываем DeviceInfo с новым устройством
    });

    res.json(newDevice);
  } catch (error) {
    console.error('Ошибка при создании нового устройства:', error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
