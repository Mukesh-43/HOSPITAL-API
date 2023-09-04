const express = require('express');             // getting express

const app = express();  

const port = 4444;                              // our server is running i=on this port

const db = require('./config/mongoose');        // getting mongoose

const passport = require('passport');           // getting passport

const passportJWT = require('./config/passport-jwt-strategy')  // using passport JWT for authentication

app.use(express.urlencoded({ extended: true }))  // using this to get request.body

app.use(passport.initialize());                  // initializing passport

app.use('/', require('./routes/index'))          // connecting the routes

// listening to the Server
app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server on the port: ${port}`);
        return;
    }
    console.log(`Server is running on the port: ${port}`);
})
