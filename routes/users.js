const express = require('express')
const { deleteU,create, update} = require('../controllers/users')

const router = express.Router();

router.post("/create",create)
router.put("/update/:id",update)
router.delete("/delete/:id",deleteU)



module.exports = router