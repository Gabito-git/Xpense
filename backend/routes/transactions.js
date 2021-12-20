const { Router } = require('express');

const router = Router();

router.post('/', (req, res) => {
    console.log('transaction posted')
})



module.exports = router;