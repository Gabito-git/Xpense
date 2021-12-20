class RequestValidationError extends Error{
 
    constructor( errors ){
        super('Invalid request parameters');
        this.errors     = errors;
        this.statusCode = 400;

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