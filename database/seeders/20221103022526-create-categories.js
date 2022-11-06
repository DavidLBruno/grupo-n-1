"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [
      {
        name: "Incomes",
        description: "Ingresos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Outcomes",
        description: "Egresos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("categories", categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
