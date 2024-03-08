const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DeviceInfo extends Model {
    static associate({ Device }) {
      this.belongsTo(Device, { foreignKey: 'deviceId' });
    }
  }
  DeviceInfo.init(
    {
      deviceId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'DeviceInfo',
    }
  );
  return DeviceInfo;
};
