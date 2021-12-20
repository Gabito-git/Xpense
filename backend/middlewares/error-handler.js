const RequestValidationError = require("../errors/request-validation-err");

const errorHandler = ( err, req, res, next ) => {
    if(err instanceof RequestValidationError){
        return res.status(err.statusCode).json({errors: err.serializeErrors()})
    }

    res.status(400).json({
        errors:[{
            message: 'Something went wrong'
        }]
    })
}

module.exports = errorHandler;