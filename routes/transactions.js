const express = require('express');
const { getTransaction } = require('../controllers/transactions')

const router = express.Router();

router.get("/get", getTransaction)


module.exports = router