const express = require('express')
const { get } = require('../controllers/index')
const usersRouter = require('./users');




const router = express.Router();

router.use('/user', usersRouter);

// example of a route with index controller get function
//router.get('/', usersRouter)

module.exports = router