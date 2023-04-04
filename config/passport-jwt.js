const passport = require('passport');
const Doctor = require("../models/doctors");
const {ExtractJwt} = require('passport-jwt');
const JWTStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').extractJWT;
let opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "SampleKey"
}
//jwt setup
passport.use(new JWTStrategy(opts,async function(jwtPayload,done){
    const doctor =  await Doctor.findById(jwtPayload._id)
        if(doctor){
            return done(null,doctor);
        }
        else{
            return done(null,false);
        }
    }))
//to authenticate the user with the bearer token 
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;