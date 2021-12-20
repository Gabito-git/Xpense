class RequestValidationError extends Error{
    statusCode = 400;

    constructor( errors ){
        super('Invalid request parameters');
        this.errors = errors;

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(){
        return this.errors.map( error => {
            return {
                message: error.msg,
                field: error.param
            }
        } )
    }
}

module.exports = RequestValidationError;