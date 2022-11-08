const express = require('express')
const { deleteU, create, update, list,detail, servicioimagenpost, login} = require('../controllers/users')
const { validateCreate,validateToken } = require('../middlewares/index')

const router = express.Router();



router.get("/",validateToken, list)
router.get("/:id",detail)
router.post("/create",validateCreate,create)
router.post("/login",login)
router.put("/update/:id",update)
router.delete("/delete/:id",deleteU)
router.post("/imagen" ,servicioimagenpost);

module.exports = router