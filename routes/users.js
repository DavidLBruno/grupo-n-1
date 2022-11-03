const express = require('express');
const { create, detail, list, getUsers } = require('../controllers/users')

const router = express.Router();

router.get("/",list)
router.get("/:id",detail)


router.post("/create",create)

module.exports = router;
