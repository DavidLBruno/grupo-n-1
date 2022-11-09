'use strict';
const {
  Model
} = require('sequelize');
/**
 * @swagger
 * tags:
 *    - name: Transactions
 *      description: Operations about transaction
 * components:
 *  schemas:
 *   Transactions:
 *    required:
 *      - description
 *      - amount
 *      - date
 *      - user
 *      - category
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        format: int64
 *        example: 1
 *      description:
 *        type: string
 *        example: Recarga
 *      amount:
 *        type: float
 *        example: 123.13
 *      date:
 *        type: string
 *        format: date-time
 *      user:
 *        $ref: "#/components/schemas/User"
 *      category:
 *        $ref: "#/components/schemas/Category"
 */
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