const { Router } = require('express');
const { check }  = require('express-validator');
 
const { 
    newTransaction, 
    getTransactions, 
    updateTransaction,
    deleteTransaction} = require('../controllers/transactions');
const { allowedTypes }   = require('../helpers/db-validators');
const validateFields     = require('../middlewares/validateFields');

const router = Router();

router.post('/',[
    check('concept', 'Concept field is mandatory').not().isEmpty(),
    check('amount', 'Please provide a valid amount value').isFloat(),
    check('date', 'Please provide a valid date').isISO8601(),
    check('category', 'Category field is mandatory').not().isEmpty(),
    check('type').custom( c => allowedTypes( c, ['income', 'expense'] ) ),
    validateFields
 ], newTransaction);

router.get('/', getTransactions);

router.put('/:id',[
    check('concept', 'Concept field is mandatory').not().isEmpty(),
    check('amount', 'Please provide a valid amount value').isFloat(),
    check('date', 'Please provide a valid date').isISO8601(),    
    check('category', 'Category field is mandatory').not().isEmpty(),   
    check('id', 'Invalid id format').isUUID(4),
    validateFields
], updateTransaction);

router.delete('/:id',[
    check('id', 'Invalid id format').isUUID(4),
    validateFields
], deleteTransaction)

module.exports = router;