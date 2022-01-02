
class NotAuthorizedError extends Error{    

    constructor( message ){
        super( 'Not Authorized' );
        this.message  = message;
        this.statusCode = 404;

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors(){
        return [
            { message: this.message}
        ]
    }
}

module.exports = NotAuthorizedError;