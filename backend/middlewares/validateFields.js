const { validationResult } = require('express-validator');
const RequestValidationError = require('../errors/request-validation-err');

const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
       throw new RequestValidationError(errors.array());
    }

    next();
}

module.exports = validateFields;