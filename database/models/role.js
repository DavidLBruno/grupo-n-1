'use strict';
const {
  Model
} = require('sequelize');
/**
 * @swagger
 * components:
 *  schemas:
 *   Role:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        format: int64
 *        example: 10
 *      name:
 *        type: string
 *        example: administrador
 *      description:
 *        type: string
 *        example: sos admin
 */
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Role.hasMany(models.Usuario,{
        foreignKey:'roleId',
      });
    };

  };
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};