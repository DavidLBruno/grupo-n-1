'use strict';
const {
  Model
} = require('sequelize');
/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: Operations about categories
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  responses:
 *    UnauthorizedError:
 *      description: Access token is missing or invalid
 *    ForbbidenError:
 *      description: You don't have access!
 *  schemas:
 *   Category:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        format: int64
 *        example: 1
 *      name:
 *        type: string
 *        example: Incomes
 *      description:
 *        type: string
 *        example: Ingresos
 */
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Category.hasMany(models.Transnaction,{
        foreignKey:'categoryId',
      });

    }
  };
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};