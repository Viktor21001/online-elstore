const express = require('express');

const router = express.Router();
const { User, Device, DeviceInfo } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate.js');
const EditPage = require('../views/editPage.jsx');

// Маршрут для отображения страницы редактирования товара по его id
router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const edit = await Device.findByPk(id);
    const result = edit.get({ plain: true });
    console.log(result);
    renderTemplate(EditPage, { result }, res);
  } catch (error) {
    console.log(error);
  }
});

router.put('/', async (req, res) => {
  const { name, price, rating, img, brand, type, title, description } =
    req.body;
  try {
    const deviceId = req.params.id;

    // Обновляем запись в таблице Device
    await Device.update(
      {
        name,
        price,
        rating,
        img,
        brand,
        type,
      },
      { where: { id: deviceId } }
    );

    // Теперь обновляем запись в таблице DeviceInfo
    const deviceInfo = await DeviceInfo.findOne({ where: { deviceId } });
    if (deviceInfo) {
      deviceInfo.title = title;
      deviceInfo.description = description;
      await deviceInfo.save();
    } else {
      // Если запись DeviceInfo не найдена, создаем новую запись
      await DeviceInfo.create({ title, description, deviceId });
    }

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
