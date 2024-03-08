const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, BasketDevice }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(BasketDevice, { foreignKey: 'basketId' });
    }
  }
  Basket.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Basket',
    },
  );
  return Basket;
};
