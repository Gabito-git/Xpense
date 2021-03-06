const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require('jsonwebtoken');

const { pool } = require("../db/config");
const BadRequestError = require("../errors/bad-request-err");

const signUp = async( req, res ) => {
    const { username, email, password } = req.body;
    let response;

    try {
         response = await pool.query(
            "SELECT * FROM users WHERE email = $1", 
            [email]
        );
    }catch(error){
        console.log(error)
    }

    if( response.rowCount > 0 ){
        throw new BadRequestError('Email in use');
    }

    try{         

        const salt           = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync( password, salt );
        let user = await pool.query(
            "INSERT INTO users (username, email, password) "+
            "VALUES($1, $2, $3) RETURNING username, user_id", 
            [username, email, hashedPassword]
        )

        user = user.rows[0];

        const userJwt = jwt.sign({
                user_id: user.user_id,
                username: user.username
            }, process.env.JWT_KEY,{
                expiresIn: '2h'
            }        
        )    
        // Store on Session object
        req.session.jwt =  userJwt               
        
        res.status(201).json( user )
        
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {   
                errors: [{
                    message: 'Please contact the admin'
                }] 
            }
        )
    }
}

const signIn = async(req, res) => {
    const { email, password } = req.body;
    let response

    try {
        response = await pool.query(
            "SELECT username, user_id, password FROM users WHERE email=$1",
            [email]
        )
    } catch (error) {
        console.log(error)
    }

    if(response.rowCount === 0){
        throw new BadRequestError('Invalid credentials');
    }

    const user = response.rows[0];
    const validPassword = bcrypt.compareSync( password, user.password );

    if(!validPassword){
        throw new BadRequestError('Invalid credentials');
    }

    
    const userJwt = jwt.sign({
            user_id: user.user_id,
            username: user.username
        }, process.env.JWT_KEY,{
            expiresIn: '2h'
        }        
    )    
    // Store on Session object
    req.session.jwt = userJwt                

    res.status(200).json({
        username: user.username,
        user_id: user.user_id
    })
}

const signOut = (req, res) => {
    req.session = null;
    res.status(200).json({});
}

module.exports = {
    signUp,
    signIn,
    signOut
}