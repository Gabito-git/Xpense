
const { Router } = require('express');
const { check }  = require('express-validator'); 

const { signUp, signIn, signOut } = require('../controllers/auth');
const currentUser = require('../middlewares/current-user');
const validateFields = require('../middlewares/validateFields');

const router = Router();

router.post('/signup',[
    check('username', 'Username field is mandatory').not().isEmpty(),
    check('email', 'Please provide a valid e-mail').isEmail(),
    check('password', 'Password field is mandatory').not().isEmpty(),
    validateFields
 ], signUp)

router.post('/signin',[
    check('email', 'Please provide a valid e-mail').isEmail(),
    check('password', 'Password field is mandatory').not().isEmpty(),
    validateFields
], signIn);

router.get('/signout', signOut);

router.get('/currentuser', currentUser, (req, res) => {
    res.status(200).json({ currentUser: req.currentUser || null  })
})

module.exports = router;