const express = require('express');

const router = express.Router();
const { Device, DeviceInfo, User } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate.js');
const EditPage = require('../views/editPage.jsx');

// Маршрут для отображения страницы редактирования товара по его id
router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { login } = req.session;
    const device = await Device.findByPk(id);
    const result = device.get({ plain: true });
    renderTemplate(EditPage, { device: result, login }, res);
  } catch (error) {
    console.log(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Маршрут для обновления информации о товаре
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, rating, img, brand, type, title, description } =
    req.body;
  console.log(req.body);
  try {
    const device = await Device.findOne({ where: { id } });

    device.name = name;
    device.price = price;
    device.rating = rating;
    device.img = img;
    device.brand = brand;
    device.type = type;
    await device.save();

    const deviceInfo = await DeviceInfo.findOne({ where: { deviceId: id } });

    deviceInfo.title = title;
    deviceInfo.description = description;
    await deviceInfo.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
