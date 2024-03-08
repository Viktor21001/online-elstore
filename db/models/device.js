const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate({ DeviceInfo, Rating, BasketDevice }) {
      this.hasMany(DeviceInfo, { foreignKey: 'deviceId' });
      this.hasMany(Rating, { foreignKey: 'deviceId' });
      this.hasMany(BasketDevice, { foreignKey: 'deviceId' });
    }
  }
  Device.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      img: DataTypes.STRING,
      type: DataTypes.STRING,
      brand: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Device',
    }
  );
  return Device;
};
