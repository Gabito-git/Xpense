const express = require('express');
const cors    = require('cors');
require('dotenv').config();
const cookieSession = require('cookie-session');

require('express-async-errors');
const errorHandler = require('../middlewares/error-handler');

class Server{

    constructor(){
        this.app   = express();
        this.port  = process.env.PORT || 4000;
        this.paths = {
            transactions: '/api/transactions',
            auth:         '/api/users'
        }

        this.middlewares();
        
        this.routes();
        this.app.use( errorHandler );

        this.execute();
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
        this.app.use(cookieSession({
            signed: false,
            secure: false
        }))
    }

    routes(){
        this.app.use( this.paths.auth, require('../routes/auth') );
        this.app.use( this.paths.transactions, require('../routes/transactions') );
    }

    execute(){
        this.app.listen( this.port, () => {
            console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${ this.port }`)
        } )
    }

}

module.exports = Server;