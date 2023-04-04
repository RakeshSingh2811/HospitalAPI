//including express
const express = require('express');

//calling express and saving its instance in a variable
const app = express();

//port where the server has to listen
const port = 8000;

//to read the request body
const bodyParser = require("body-parser");

//Database Configuration
const db = require("./config/mongoose");

//including passport
const passport = require('passport');

//passport-jwt configuration 
const passportJwt = require('./config/passport-jwt');

//including express session for saving the jwt login data
const session =require('express-session');

//parsing request body
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//to store the session variable to temp memory
const MongoStore = require('connect-mongo')(session);

//temp memory setup
app.use(session({
    name:'Hospital',
    secret:"SampleKey",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled',
    })
}));


//initializing passport
app.use(passport.initialize());

//calling passport session to store the session data
app.use(passport.session());

//to make user authenticated
app.use(passport.setAuthenticatedUser);

// redirecting to routes folder
app.use('/',require('./routes'));

//making the server to listen to the port
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error while running the server:${err}`);
    }
    console.log(`Server Running On Port:${port}`);
}) 