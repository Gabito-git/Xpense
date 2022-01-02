
class NotAuthorizedError extends Error{    

    constructor( ){
        super( 'Not Authorized' );
        this.statusCode = 401;

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors(){
        return [
            { message: 'Not authorized'}
        ]
    }
}

module.exports = NotAuthorizedError;