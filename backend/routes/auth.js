
const { Router } = require('express');
const { check }  = require('express-validator'); 

const { signUp } = require('../controllers/auth');
const validateFields = require('../middlewares/validateFields');

const router = Router();

router.post('/signup',[
    check('username', 'Username field is mandatory').not().isEmpty(),
    check('email', 'Please provide a valid e-mail').isEmail(),
    check('password', 'Password field is mandatory').not().isEmpty(),
    validateFields
 ], signUp)


module.exports = router;