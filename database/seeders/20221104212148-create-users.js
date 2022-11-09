"use strict";
const { encrypt } = require("../../middlewares/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        firstName: "Carlos",
        lastName: "Ayala",
        email: "carlosayala@hotmail.com",
        password: undefined,
        avatar:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Marcos",
        lastName: "Pinto",
        email: "marcopinto@hotmail.com",
        password: undefined,
        avatar:
          "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H7W2IQYTJENYXPNKIGA6WE2DYA.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Santiago",
        lastName: "Perdomo",
        email: "santperdo@hotmail.com",
        password: undefined,
        avatar:
          "https://www.softzone.es/app/uploads-softzone.es/2022/07/NFT-mono.jpg?x=480&y=375&quality=40",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Maria",
        lastName: "Castro",
        email: "macosta@hotmail.com",
        password: undefined,
        avatar:
          "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KA6QZAPJ73GKRERDDS4S552AIE.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Fabian",
        lastName: "Martinez",
        email: "marfab@hotmail.com",
        password: undefined,
        avatar: "https://www.cointribune.com/app/uploads/2021/08/boredape1.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Bruno",
        lastName: "Morales",
        email: "brunomorales@hotmail.com",
        password: undefined,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnth-oKkhKJajZUkax7C0LPXZQwgoKmYMbCw&usqp=CAU",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Walter",
        lastName: "Alturo",
        email: "walturo@hotmail.com",
        password: undefined,
        avatar:
          "https://gagadget.com/media/cache/80/20/80206948c99d63a185fd522dc1c669b0.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Bruno",
        lastName: "David",
        email: "brunodavid@hotmail.com",
        password: undefined,
        avatar:
          "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/25/16351831527188.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jose",
        lastName: "Gonzalez",
        email: "jogon@hotmail.com",
        password: undefined,
        avatar:
          "https://phantom-elmundo.unidadeditorial.es/dffc72a41e2a7d01e4a2bba0132e7827/resize/1200/f/jpg/assets/multimedia/imagenes/2021/10/25/16351829090557.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Penelope",
        lastName: "Torres",
        email: "petorres@hotmail.com",
        password: undefined,
        avatar: "https://www.cointribune.com/app/uploads/2021/08/boredape1.jpg",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Sara",
        lastName: "Ayala",
        email: "saraayala@hotmail.com",
        password: undefined,
        avatar:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Mateo",
        lastName: "Angarita",
        email: "maanga@hotmail.com",
        password: undefined,
        avatar:
          "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H7W2IQYTJENYXPNKIGA6WE2DYA.jpg",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Rosa",
        lastName: "De las nieves",
        email: "rosadelasnieves@hotmail.com",
        password: undefined,
        avatar:
          "https://www.softzone.es/app/uploads-softzone.es/2022/07/NFT-mono.jpg?x=480&y=375&quality=40",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Maria jose",
        lastName: "Muñoz",
        email: "mamujose@hotmail.com",
        password: undefined,
        avatar:
          "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KA6QZAPJ73GKRERDDS4S552AIE.jpg",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Oscar",
        lastName: "Martinez",
        email: "oscamarti@hotmail.com",
        password: undefined,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_smKt9E7qs0mnICuIyUV1sl7wc7y3cpqvyFVs6M2d6eSX2noQTzXBhMpCZIFeBdNZHg&usqp=CAU",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Nelson",
        lastName: "Martinez",
        email: "nelsomarti@hotmail.com",
        password: undefined,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLIexj7Ve9s5lB6rYmFakZz8P9GHqV5f_RQ&usqp=CAU",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Sergio",
        lastName: "Guevara",
        email: "sergavara@hotmail.com",
        password: undefined,
        avatar:
          "https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/11/18135816/MillerApe2.png",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Nicolas",
        lastName: "Hernandez",
        email: "nicoher@hotmail.com",
        password: undefined,
        avatar:
          "https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/11/18141852/daperape.png",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Laura",
        lastName: "Correa",
        email: "laucor@hotmail.com",
        password: undefined,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6l3ZY-RJUbaVR3wc_m19zqo3CBgMdsTEnQ&usqp=CAU",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Madison",
        lastName: "Piedra",
        email: "mapiedra@hotmail.com",
        password: undefined,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOyZF7W9DnQq3iA8Mwv3ghuLNv5PZJUYTRm1zn7fCIGKL049sMpWYFdnHMJ-ekJSrmtw&usqp=CAU",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await Promise.all(
      users.map(async (user) => {
        user.password = await encrypt("12345678");
      })
    );
    await queryInterface.bulkInsert("usuarios", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
