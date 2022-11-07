const express = require('express');
const { getTransaction, 
    getTransactionById, 
    createTransaction, 
    updateTransactionById,
    deleteTransaction
} = require('../controllers/transactions')

const router = express.Router();

router.get("/", getTransaction);
router.get("/:id", getTransactionById);
router.post("/", createTransaction);
router.put("/:id", updateTransactionById);
router.delete("/:id", deleteTransaction);

module.exports = router