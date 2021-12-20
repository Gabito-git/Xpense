const { Router } = require('express');
const { newTransaction } = require('../controllers/transactions');

const router = Router();

router.post('/', newTransaction);

module.exports = router;