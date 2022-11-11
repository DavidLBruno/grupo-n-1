"use strict";
const { Model } = require("sequelize");
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations about user
 * components:
 *  securitySchemes:
 *    api_key:
 *     type: apiKey
 *     name: JWT_SECRET
 *     in: cookie
 *  responses:
 *    UnauthorizedError:
 *      description: Access token is missing or invalid
 *    ForbbidenError:
 *      description: You don't have access!
 *  schemas:
 *   User:
 *     required:
 *       - firstName
 *       - lastName
 *       - email
 *       - password
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         example: 10
 *       firstName:
 *         type: string
 *         example: John
 *       lastName:
 *         type: string
 *         example: James
 *       email:
 *         type: string
 *         example: john@email.com
 *       password:
 *         type: string
 *         example: "12345678"
 *       avatar:
 *         type: string
 *         example: "https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg"
 *       role:
 *         $ref: "#/components/schemas/Role"
 */
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Usuario.belongsTo(models.Role, {
        as: "rol",
        foreignKey: "id",
        target_Key: "roleId",
      });

      Usuario.hasMany(models.Transnaction, {
        foreignKey: "userId",
      });
    }
  }
  Usuario.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
