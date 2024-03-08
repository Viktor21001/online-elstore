const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Device }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Device, { foreignKey: 'deviceId' });
    }
  }
  Rating.init(
    {
      userId: DataTypes.INTEGER,
      deviseId: DataTypes.INTEGER,
      rate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Rating',
    },
  );
  return Rating;
};
