const express = require("express");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");

const router = express.Router();

router.use("/user", usersRouter);
router.use("/categories", categoriesRouter);


module.exports = router;
