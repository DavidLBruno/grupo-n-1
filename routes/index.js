const express = require("express");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const transactionRouter = require('./transactions');
const router = express.Router();

router.use("/user", usersRouter);
router.use("/categories", categoriesRouter);

router.use('/transactions', transactionRouter);


module.exports = router;
