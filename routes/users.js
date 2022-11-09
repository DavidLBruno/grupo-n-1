
const express = require('express');
const { deleteU, create, update, list,detail, servicioimagenpost} = require('../controllers/users')
const { validateCreate, validateToken, imagen } = require('../middlewares/index')

const router = express.Router();

router.get("/",validateToken, list)
router.get("/:id",detail)
router.post("/create",validateCreate,create)
router.put("/update/:id",update)
router.delete("/delete/:id",deleteU)

router.post("/imagen", imagen,servicioimagenpost);

module.exports = router