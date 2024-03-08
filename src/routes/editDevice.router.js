router.post('/edit/:id', async (req, res) => {
  const { name, price, rating, img, brand, type, title, description } =
    req.body;
  const { userId } = req.session;
  const { id } = req.params; // Получаем идентификатор товара для редактирования

  try {
    const user = await User.findByPk(userId);
    if (!user.isAdmin()) {
      return res.status(403).send('Доступ запрещен');
    }

    if (name.length === 0 || description.length === 0) {
      return res.sendStatus(404);
    }

    // Находим товар по его идентификатору
    const device = await Device.findByPk(id);
    if (!device) {
      return res.status(404).send('Товар не найден');
    }

    // Обновляем данные товара
    await device.update({
      name,
      price,
      rating,
      img,
      brand,
      type,
    });

    // Обновляем информацию о товаре
    const deviceInfo = await DeviceInfo.findOne({ where: { deviceId: id } });
    if (deviceInfo) {
      await deviceInfo.update({
        title,
        description,
      });
    } else {
      await DeviceInfo.create({
        title,
        description,
        deviceId: id,
      });
    }

    res.json(device);
  } catch (error) {
    console.error('Ошибка при обновлении товара:', error);
    res.status(500).send('Ошибка сервера');
  }
});
