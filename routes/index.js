const express = require("express");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const transactionRouter = require('./transactions');
const router = express.Router();

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDoc = YAML.load("./api.yaml");

//Endpoints
router.use("/user", usersRouter);
router.use("/categories", categoriesRouter);
router.use('/transactions', transactionRouter);

//Documentacion
router.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc))

module.exports = router;
