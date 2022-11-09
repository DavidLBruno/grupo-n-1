"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transnactions = [
      {
        description: "Recarga a cuenta admin",
        amount: 10000,
        date: new Date("2021-03-29 12:00:12"),
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta estandar",
        amount: 10000,
        date: new Date("2019-04-15 01:15:25"),
        userId: 20,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pago admin",
        amount: 5000,
        date: new Date("2020-02-27 08:25:06"),
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pago estandar",
        amount: 100,
        date: new Date("2022-10-21 11:24:42"),
        userId: 19,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 91913,
        date: "2018-09-05 15:15:41",
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 48138,
        date: "2022-01-02 15:35:41",
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 28058,
        date: "2021-11-15 10:35:41",
        userId: 4,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 18863,
        date: "2018-08-23 14:45:41",
        userId: 5,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 5770,
        date: "2020-03-27 13:45:41",
        userId: 6,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 63899,
        date: "2022-11-07 21:55:41",
        userId: 7,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 90625,
        date: "2021-01-02 01:25:41",
        userId: 8,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 18467,
        date: "2020-11-08 05:05:41",
        userId: 9,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 28562,
        date: "2020-05-24 05:25:41",
        userId: 10,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 81798,
        date: "2021-02-19 13:05:41",
        userId: 11,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 5603,
        date: "2019-08-09 16:56:41",
        userId: 12,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 29859,
        date: "2022-12-19 18:06:41",
        userId: 13,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 13868,
        date: "2018-08-20 17:17:41",
        userId: 14,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 3190,
        date: "2019-10-04 14:18:41",
        userId: 15,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Recarga a cuenta",
        amount: 74580,
        date: "2020-03-16 14:18:41",
        userId: 16,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 43107,
        date: "2020-05-17 06:41:25",
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 89266,
        date: "2020-02-27 07:41:25",
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 3508,
        date: "2021-11-01 11:41:25",
        userId: 4,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 97934,
        date: "2019-07-29 19:41:25",
        userId: 5,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 96228,
        date: "2018-06-21 18:41:25",
        userId: 6,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 19395,
        date: "2021-08-20 17:41:25",
        userId: 7,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 82799,
        date: "2018-08-20 05:41:25",
        userId: 8,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 61437,
        date: "2021-09-27 11:41:25",
        userId: 9,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 73495,
        date: "2019-07-19 09:41:25",
        userId: 10,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 54370,
        date: "2018-03-30 08:41:25",
        userId: 11,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 40721,
        date: "2019-03-12 13:41:25",
        userId: 12,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 97037,
        date: "2021-03-13 14:41:25",
        userId: 13,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 28265,
        date: "2019-02-17 15:41:25",
        userId: 14,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 40157,
        date: "2021-03-04 16:41:25",
        userId: 15,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 64776,
        date: "2021-01-29 17:41:25",
        userId: 16,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Pagos",
        amount: 51722,
        date: "2020-07-15 18:41:25",
        userId: 17,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("transnactions", transnactions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("transnactions", null, {});
  },
};
