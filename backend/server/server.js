const express = require('express');
require('dotenv').config();

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 4000;

        this.execute();
    }

    execute(){
        this.app.listen( this.port, () => {
            console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${ this.port }`)
        } )
    }

}

module.exports = Server;