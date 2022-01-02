const NotAuthorizedError = require("../errors/not-authorized-error")

const checkTransactionValidation = (req, res, next) =>{
    if(!req.currentUser){
        throw new NotAuthorizedError();
    }

    next();
}

module.exports = checkTransactionValidation;