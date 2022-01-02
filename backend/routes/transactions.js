const { Router } = require('express');
const { check }  = require('express-validator');
 
const { 
    newTransaction, 
    getTransactions, 
    updateTransaction,
    deleteTransaction,
    searchByCategory} = require('../controllers/transactions');
const { allowedData }   = require('../helpers/db-validators');
const checkTransactionValidation = require('../middlewares/check-transaction-validation');
const currentUser = require('../middlewares/current-user');
const validateFields     = require('../middlewares/validateFields');

const router = Router();

const categories = [
    'salary', 'interests', 'food', 'transportation', 'gift', 'family', 'other'
]

router.use([ currentUser, checkTransactionValidation ]);

router.post('/',[
    check('concept', 'Concept field is mandatory').not().isEmpty(),
    check('amount', 'Please provide a valid amount value').isFloat(),
    check('date', 'Please provide a valid date').isISO8601(),
    check('category', 'Category field is mandatory').not().isEmpty(),
    check('type').custom( c => allowedData( c, ['income', 'expense'] ) ),
    validateFields
 ], newTransaction);

router.get('/', getTransactions);

router.get('/:category/category', [
    check('category').custom( c => allowedData( c, categories ) ),
    validateFields
], searchByCategory)

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