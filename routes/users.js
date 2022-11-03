const express = require('express');
const { create, getUsers } = require('../controllers/users')

const router = express.Router();

router.get("/", getUsers)
router.post("/create",create)


module.exports = router