const express = require('express')
const { deleteU,create, update} = require('../controllers/users')
const { validateCreate } = require('../middlewares/index')

const router = express.Router();

router.post("/create",validateCreate,create)
router.put("/update/:id",update)
router.delete("/delete/:id",deleteU)



module.exports = router