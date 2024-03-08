const express = require('express');

const router = express.Router();
const { BasketDevice } = require('../../db/models');

// Маршрут для добавления товара в корзину
router.post('/:basketId/add/:deviceId', async (req, res) => {
  try {
    const { basketId, deviceId } = req.params;

    // Создаем запись в модели BasketDevice
    await BasketDevice.create({
      basketId: parseInt(basketId), // Преобразуем строковый параметр в число
      deviceId: parseInt(deviceId), // Преобразуем строковый параметр в число
    });

    res.status(200).send('Товар успешно добавлен в корзину');
  } catch (error) {
    console.error('Ошибка при добавлении товара в корзину:', error);
    res.status(500).send('Произошла ошибка при добавлении товара в корзину');
  }
});

module.exports = router;
