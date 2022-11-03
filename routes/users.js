const express = require('express');
const { create, listado, detail } = require('../controllers/users')

const router = express.Router();

router.get("/",listado)
router.get("/:id",detail)
router.post("/create",create)


module.exports = router