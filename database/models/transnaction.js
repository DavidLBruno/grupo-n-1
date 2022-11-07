'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transnaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Transnaction.belongsTo(models.Usuario,{
        foreignKey:'id',
        target_Key:'userId'
      });

      Transnaction.belongsTo(models.Category,{
        foreignKey:'id',
        target_Key:'categoryId'
      });

    }
  };
  Transnaction.init({
    description: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transnaction',
  });
  return Transnaction;
};