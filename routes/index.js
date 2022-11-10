const express = require("express");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const transactionRouter = require("./transactions");
const router = express.Router();
const swaggerUI = require("swagger-ui-express");
const options = require("../middlewares/swagger");

//Endpoints
router.use("/user", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/transactions", transactionRouter);

//Documentacion
router.use("/api/docs", swaggerUI.serve, swaggerUI.setup(options));

module.exports = router;
