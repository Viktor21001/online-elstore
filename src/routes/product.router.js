const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const ProductPage = require('../views/ProductPage.jsx');
const { Device, DeviceInfo } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { login } = req.session;
    const device = await Device.findByPk(id, {
      include: {
        model: DeviceInfo,
        attributes: ['title', 'description'],
      },
    });
    console.log(device);
    if (!device) {
      return res.status(404).send('Device not found');
    }
    renderTemplate(ProductPage, { device, login }, res);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findByPk(id);
    res.json(device);
  } catch (error) {
    res.status(500);
  }
});
module.exports = router;
