const bcrypt = require("bcryptjs/dist/bcrypt");

const { pool } = require("../db/config");
const BadRequestError = require("../errors/bad-request-err");

const signUp = async( req, res ) => {
    const { username, email, password } = req.body;
    // console.log(username, email, password)

    try {
        const response = await pool.query(
            "SELECT * FROM users WHERE email = $1", 
            [email]
        );

        if( response.rowCount > 0 ){
            throw new BadRequestError('Email in use');
        }else{
            const salt           = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync( password, salt );
            const user = await pool.query(
                "INSERT INTO users (username, email, password) "+
                "VALUES($1, $2, $3) RETURNING username, user_id", [username, email, hashedPassword]
            )
            res.send( user.rows )
        }

        

    } catch (error) {
        
    }
}

module.exports = {
    signUp
}