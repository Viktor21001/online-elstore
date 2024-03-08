const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
    static associate({ Basket, Device }) {
      this.belongsTo(Basket, { foreignKey: 'basketId' });
      this.belongsTo(Device, { foreignKey: 'deviceId' });
    }
  }
  BasketDevice.init(
    {
      deviseId: DataTypes.INTEGER,
      basketId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BasketDevice',
    },
  );
  return BasketDevice;
};
