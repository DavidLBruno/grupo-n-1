const express = require('express');
const { create, detail, list, servicioimagenpost } = require('../controllers/users')
const router = express.Router();

router.get("/",list)
router.get("/:id",detail)

router.post("/imagen" ,servicioimagenpost);


router.post("/create", create)

module.exports = router;
