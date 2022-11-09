"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = [
      {
        name: "administrador",
        description: "sos admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "usuario estandar",
        description: "usuario regular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("roles", roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
