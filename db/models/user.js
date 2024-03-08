const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Basket, Rating }) {
      this.hasOne(Basket, { foreignKey: 'userId' });
      this.hasMany(Rating, { foreignKey: 'userId' });
    }

    isAdmin() {
      return this.role === 'admin';
    }
  }

  User.init(
    {
      login: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user', // Роль по умолчанию
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
