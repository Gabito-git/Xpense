
class BadRequestError extends Error{    

    constructor( message ){
        super( 'Transaction not found' );
        this.message  = message;
        this.statusCode = 400;

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(){
        return [
            { message: this.message}
        ]
    }
}

module.exports = BadRequestError;