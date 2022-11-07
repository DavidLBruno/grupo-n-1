const express = require('express')
const { deleteU, create, update, list,detail, servicioimagenpost} = require('../controllers/users')
const { validateCreate } = require('../middlewares/index')

const router = express.Router();



router.get("/", list)
router.get("/:id",detail)
router.post("/create",validateCreate,create)
router.put("/update/:id",update)
router.delete("/delete/:id",deleteU)

router.post("/imagen" ,servicioimagenpost);

module.exports = router