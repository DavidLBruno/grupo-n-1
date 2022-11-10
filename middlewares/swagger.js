const { version } = require("../package.json");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Alkemy NODE API",
      version,
      description: "Documentacion API de aceleracion Alkemy con NODE",
    },
    servers: [{ url: `http://localhost:3000` }],
  },
  apis: ["./database/models/*.js", "./routes/*.js"],
};

module.exports = swaggerJSDoc(options);
