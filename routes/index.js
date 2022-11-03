const express = require("express");
const { get } = require("../controllers/index");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const transactionRouter = require('./transactions');
const router = express.Router();

router.use("/user", usersRouter);
router.use("/categories", categoriesRouter);

router.use('/transactions', transactionRouter);

// example of a route with index controller get function
//router.get('/', usersRouter)

module.exports = router;
