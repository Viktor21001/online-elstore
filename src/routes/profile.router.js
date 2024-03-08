const express = require('express');

const router = express.Router();
const { User, Device } = require('../../db/models');
const ProfilePage = require('../views/ProfilePage.jsx');
const renderTemplate = require('../utils/renderTemplate');

// Маршрут для отображения страницы профиля пользователя
router.get('/', async (req, res) => {
  try {
    const { userId, login } = req.session;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send('Пользователь не найден');
    }

    // Определяем, является ли пользователь администратором
    const isAdmin = user.isAdmin();

    // Получаем список устройств из базы данных
    const devices = await Device.findAll({ raw: true });

    // Отображаем страницу профиля пользователя, передавая информацию о пользователе и статусе администратора в компонент JSX
    renderTemplate(
      ProfilePage,
      {
        user,
        login,
        isAdmin,
        devices,
      },
      res
    );
  } catch (error) {
    console.error('Ошибка при загрузке профиля пользователя:', error);
    res.status(500).send('Ошибка сервера');
  }
});

// Маршрут для удаления товара (только для администратора)
router.delete('/delete/:id', async (req, res) => {
  try {
    const { userId } = req.session;
    console.log(userId);
    const user = await User.findByPk(userId);

    // //! Проверяем, является ли пользователь администратором
    if (!user || !user.isAdmin()) {
      return res.status(403).send('Доступ запрещен');
    }

    //! Удаление товара из базы данных по его идентификатору
    const { id } = req.params;
    await Device.destroy({ where: { id } });

    res.json({ success: true });
  } catch (error) {
    console.error('Ошибка при удалении товара:', error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
